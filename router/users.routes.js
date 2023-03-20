const { Router } = require("express");
const { GET } = require("../controller/users");

const users = Router();

users.get('/categories', GET)
users.get('/categories/:id', GET)
users.get('/categories/:id/:title', GET)
users.get('/categories/:id/:title/:videoID', GET);
module.exports = { users };
