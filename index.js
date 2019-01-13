const express = require("express"),
  mongo = require("./server/mongo"),
  twitter = require("./server/twitter"),
  FaceBookMen = require("./server/facebook"),
  header = require("./server/header"),
  low = require("lowdb"),
  FileSync = require("lowdb/adapters/FileSync"),
  adapter = new FileSync("./client/src/json/form.json"),
  db = low(adapter),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 80;
require("sqreen");

// express header
header(express, app);

//mongo yönetimi
mongo(app);

// twitter(app);
twitter(app);

//facebook ile ilgili rotalar
FaceBookMen(app);
//Static file declaration
app.use(express.static(path.join(__dirname, "client/public")));

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/public")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/public/index.html")));
  });
}
//build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

app.post("/create-form", (req, res) => {
  let data = req.body;
  let q = db
    .get("forms")
    .push(data)
    .write();
  res.json(q);
});

app.post("/get-form-json", (req, res) => {
  let data = db.get("forms").write();
  console.log(data);
  res.json(data);
});
console.log(process.env.PORT);
app.listen(port, err => console.log(err));
