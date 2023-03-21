// const { fetch, fetchAll, fetchVideo } = require('../database/pg')
// const { SELECTID, SELECTALL } = require('../models/users.model')
// const { SAP, SAPID } = require('../models/sap.categor')
// const { VIDEOS } = require('../models/video.model')

// module.exports = {
//   GET: async (req, res) => {
//     if (req.params.videoID) {
//       res.send({
//         data: await fetch(SAPID, req.params.title, req.params.videoID),
//       })
//     } else if (req.params.title) {
//       res.send({
//         data: await fetch(VIDEOS, req.params.id, req.params.title),
//       })
//     } else if (req.params.id) {
//       res.send({
//         data: await fetch(SAP, req.params.id),
//       })
//     } else {
//       res.send({
//         data: await fetchAll(SELECTALL),
//       })
//     }
//   },
// };
const { fetch, fetchAll, fetchVideo } = require('../database/pg')
const { SELECTID, SELECTALL } = require('../models/users.model')
const { SAP, SAPID, SPAINFO, SAPUSER } = require('../models/sap.categor')
const { VIDEOS } = require('../models/video.model')
module.exports = {
  GET: async (req, res) => {
    if (req.params.videoID) {
      let a = await fetch(SPAINFO, req.params.videoID)
      let b = await fetch(SAPUSER, req.params.videoID)
      let video = await fetch(SAPID, req.params.title, req.params.videoID)
      video[0].username = b[0]?.['username'] ? b[0]['username'] : 'something'
      video[0].comment = a[0]?.['comment'] ? a[0]['comment'] : null
      res.send({
        data: video[0],
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
