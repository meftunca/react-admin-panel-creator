var expresss = require("./server/index");
const express = require("express");

var app = expresss();
var path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", function(req, res) {
  res.sendFile("/index.html"); //I've tried playing around with the path multiple ways and still get errors
});
