const express = require("express"),
  account = require("./account"),
  mongo = require("./mongo"),
  twitter = require("./twitter"),
  FaceBookMen = require("./facebook"),
  header = require("./header"),
  low = require("lowdb"),
  FileSync = require("lowdb/adapters/FileSync"),
  adapter = new FileSync("./src/json/form.json"),
  db = low(adapter),
  app = express();

// express header
header(express, app);

//mongo yönetimi
mongo(app);

//kullancı yönetimi
account(app);

// mailRoute(app);

// twitter(app);
twitter(app);

//google ile ilgili rotalar

//facebook ile ilgili rotalar
FaceBookMen(app);
//mongodb ve formlarla ilgili ile ilgili rotalar

app.post("/create-form", async (req, res) => {
  let data = req.body;
  let q = db
    .get("forms")
    .push(data)
    .write();
  res.json(q);
});

app.post("/get-form-json", async (req, res) => {
  let data = db.get("forms").write();
  console.log(data);
  res.json(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});
const port = process.env.PORT || 8000;
app.listen(port);
module.exports = app;
