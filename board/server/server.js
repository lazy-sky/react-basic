var express = require("express");
const path = require("path");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use("/", indexRouter);
app.use("/users", usersRouter);

// 화면 engine을 ejs로 설정
app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));

module.exports = app;
