const { Router } = require("express");
const { GET } = require("../controller/students");

const students = Router();

students.get("/videos", GET);
students.get("/videos/:id", GET);
module.exports = { students };
