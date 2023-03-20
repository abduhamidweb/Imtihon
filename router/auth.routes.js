const { Router } = require("express");
const {
  REG,
  LOG,
  CHECK,
  UPLOAD,
  COMMENT,
  UPDATE,
} = require('../controller/auth')

const auth = Router();

auth.post("/register", REG);
auth.post("/login", LOG);
auth.post('/videos', UPLOAD)
auth.put('/videos/:id', UPDATE)
auth.get("/check", CHECK);
auth.get('/comments', COMMENT)
module.exports = { auth };
