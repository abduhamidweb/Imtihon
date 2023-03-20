const { fetch, fetchAll } = require("../database/pg");
const { SELECTID, SELECTALL } = require("../models/students.model");

module.exports = {
  GET: async (req, res) => {
    if (!isNaN(+req.params.id)) {
      res.send({
        data: await fetch(SELECTID, req.params.id),
      });
    } else {
      res.send({
        data: await fetchAll(SELECTALL),
      });
    }
  },
};
