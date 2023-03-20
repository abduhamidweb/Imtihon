const ejs = require("ejs");
const path = require("path");
const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const { users } = require("../router/users.routes");
const { auth } = require("../router/auth.routes");
const { students } = require("../router/students.routes");
const PORT = process.env.PORT || 3000;
const app = express();
   
app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));
app.use(express.json());
app.use(cors("*"));
app.use(express.static("./public"));
app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set(".html", path.join(process.cwd(), "views"));
app.get("/", (req, res) => res.render("index"));
app.get("/register", (req, res) => res.render("register"));
app.get("/login", (req, res) => res.render("login"));
  
app.use(auth);
app.use(users);
app.use(students);

app.listen(PORT, console.log("server on ..." + PORT));

// jwt file-upload cors sha256 ejs
