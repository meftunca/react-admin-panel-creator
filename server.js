var expresss = require("./server/index");
const express = require("express");

var app = expresss();
var path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
