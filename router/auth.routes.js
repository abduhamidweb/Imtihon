const { Router } = require("express");
const {
  REG,
  LOG,
  CHECK,
  UPLOAD,
  COMMENT,
  UPDATE,
  DELETEById,
  CommentDelete,
} = require('../controller/auth')

const auth = Router();

auth.post("/register", REG);
auth.post("/login", LOG);
auth.post('/videos', UPLOAD)
auth.put('/videos/:id', UPDATE)
auth.delete('/videos/:id', DELETEById)
auth.get("/check", CHECK);
auth.get('/comments', COMMENT)
auth.delete('/comments/:id', CommentDelete)
module.exports = { auth };
