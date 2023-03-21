const { fetch, fetchAll } = require('../database/pg')
const { REGIST, LOGIN, INSERTV } = require('../models/auth.model')
const { SIGN, VERIFY } = require('../utils/jwt')
const sha256 = require('sha256')
const pathLink = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const { COMMENT, COMMENTDeleteById } = require('../models/comment.model')
const {
  UpDateById,
  SelectVideoById,
  DELETEVideo,
} = require('../models/update.model')
module.exports = {
  REG: async (req, res) => {
    try {
      let { username, login, password } = req.body
      let userId = await fetch(REGIST, username, login, sha256(password))
      res.send({
        status: 200,
        message: 'User added!',
        data: { token: SIGN(userId[0]) },
      })
    } catch (error) {
      res.send({ status: 404, message: error.message })
    }
  },
  LOG: async (req, res) => {
    try {
      let { login, password } = req.body
      if (!login || !password) throw new Error('Wrong data!')
      let id = await fetch(LOGIN, login, sha256(password))
      if (!id) throw new Error('Not foun user!')
      res.send({
        status: 200,
        message: 'Success!',
        data: { token: SIGN(id[0]) },
      })
    } catch (error) {
      res.send({ status: 404, message: error.message })
    }
  },
  CHECK: (req, res, next) => {
    try {
      if (!VERIFY(req.headers.token)) throw new Error('Invalid token!')
      res.send({
        status: 200,
        message: 'Success!',
      })
    } catch (error) {
      res.send({ status: 404, message: error.message })
    }
  },
  UPLOAD: async (req, res) => {
    try {
      let { file } = req.files
      let { token } = req.headers
      let { title, categoriesId, sap_categoryId } = req.body
      const { userid } = VERIFY(token)
      if (!VERIFY(req.headers.token))
        return res.send({
          status: 401,
          message: 'you must send max 50 mb file',
        })
      if (file.truncated) throw new Error('you must send max 50 mb file')
      let types = file.name.split('.')
      let type = types[types.length - 1]
      if (type != 'mp4') throw new Error("Video's type invalid!")
      const random = Math.floor(Math.random() * 9000 + 1000)
      await file.mv(
        pathLink.join(
          process.cwd(),
          'public',
          'videos',
          title + random + '.' + type
        )
      )
      await fetch(
        INSERTV,
        userid,
        title,
        categoriesId,
        sap_categoryId,
        '/videos/' + title + random + '.' + type
      )
      res.send({ status: 200, message: 'Video added!' })
    } catch (err) {
      res.send({ status: 404, message: err.message })
    }
  },
  UPDATE: async (req, res) => {
    try {
      let { token } = req.headers
      const { userid } = VERIFY(token)
      let { file } = req.files

      let { VideoTitle, VideoCategoriesId, VideoSap_categoryId } = req.body
      let [{ title, categoriesid, sap_categoryid, path }] = await fetch(
        SelectVideoById,
        userid,
        req.params.id
      )
      // agar file manzilida file bo'lsa o'sha filni update qilish uchun o'sh fileni o'shiradigan funksiya
      function isFile(filePath) {
        try {
          return fs.statSync(filePath).isFile()
        } catch (error) {
          return false
        }
      }
      if (isFile(pathLink.join(process.cwd(), 'public', path))) {
        fs.unlinkSync(pathLink.join(process.cwd(), 'public', path))
      }
      if (!VERIFY(req.headers.token))
        return res.send({
          status: 401,
          message: 'Your token has expired. Please try again later.',
        })
      // file uplaod

      if (file.truncated) throw new Error('you must send max 50 mb file')
      let types = file.name.split('.')
      let type = types[types.length - 1]
      if (type != 'mp4') throw new Error("Video's type invalid!")
      const random = Math.floor(Math.random() * 9000 + 1000)
      await file.mv(
        pathLink.join(
          process.cwd(),
          'public',
          'videos',
          title + random + '.' + type
        )
      )
      let update = await fetch(
        UpDateById,
        VideoTitle ? VideoTitle : title,
        VideoCategoriesId ? VideoCategoriesId : categoriesid,
        VideoSap_categoryId ? VideoSap_categoryId : sap_categoryid,
        '/videos/' + title + random + '.' + type
          ? '/videos/' + title + random + '.' + type
          : path,
        req.params.id,
        userid
      );
      res.send({
        status: 200,
        message:
          'update video title: ' +
          VideoTitle +
          ' categoryId : ' +
          VideoCategoriesId +
          ' sap_category ' +
          VideoSap_categoryId +
          'path' +
          title,
      })
    } catch (error) {
      res.send({ status: 404, message: error.message })
    }
  },
  DELETEById: async (req, res) => {
    try {
      let { token } = req.headers
      if (!VERIFY(req.headers.token))
        return res.send({
          status: 401,
          message: 'Your token has expired. Please try again later.',
        })
      const { userid } = VERIFY(token)
      await fetch(DELETEVideo, userid, req.params.id)
      res.send({
        status: 200,
        message: 'DELETE video',
      })
    } catch (error) {
      res.send({ status: 404, message: error.message })
    }
  },
  CommentDelete: async (req, res) => {
    try {
      let { token } = req.headers
      if (!VERIFY(req.headers.token))
        return res.send({
          status: 401,
          message: 'Your token has expired. Please try again later.',
        })
      const { userid } = VERIFY(token)
      await fetch(COMMENTDeleteById, userid, req.params.id)
      res.send({
        status: 200,
        message: 'DELETE Comment',
      })
    } catch (error) {
      res.send({ status: 404, message: error.message })
    }
  },
  COMMENT: async (req, res) => {
    try {
      let { token } = req.headers
      let { videoId, comment } = req.body
      const { userid } = VERIFY(token)
      let [{ videoid }] = await fetch(COMMENT, userid, videoId, comment)
      if (!VERIFY(req.headers.token))
        return res.send({
          status: 401,
          message: 'your token is broken, please try again later.',
        })
      res.send({
        status: 200,
        message: `comment of ${videoid} was added succsessfull`,
      })
    } catch (error) {
      res.send({ status: 404, message: error.message })
    }
  },
}
