var express = require("express");
var app = express();
var blogservice = require(__dirname + "/blog-service.js");
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/intlstudents", (req, res) => {
  res.send("TODO: get all students who have isInternationalStudent==true");
});

app.get("/students", function (req, res) {
  res.sendFile(path.join(__dirname, "/data/students.json"));
});

app.get("/programs", function (req, res) {
  res.sendFile(path.join(__dirname, "/data/programs.json"));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);

app.use(express.static("public"));

// 404 message
app.use(function (req, res, next) {
  res.status(404).send("Page not found, yo. 404");
});
