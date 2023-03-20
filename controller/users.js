const { fetch, fetchAll, fetchVideo } = require('../database/pg')
const { SELECTID, SELECTALL } = require('../models/users.model')
const { SAP, SAPID } = require('../models/sap.categor')
const { VIDEOS } = require('../models/video.model')

module.exports = {
  GET: async (req, res) => {
    if (req.params.videoID) {
      res.send({
        data: await fetch(SAPID, req.params.title, req.params.videoID),
      })
    } else if (req.params.title) {
      res.send({
        data: await fetch(VIDEOS, req.params.id, req.params.title),
      })
    } else if (req.params.id) {
      res.send({
        data: await fetch(SAP, req.params.id),
      })
    } else {
      res.send({
        data: await fetchAll(SELECTALL),
      })
    }
  },
}
