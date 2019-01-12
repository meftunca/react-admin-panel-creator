const http = require("http"),
  express = require("express"),
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

// twitter(app);
twitter(app);

//facebook ile ilgili rotalar
FaceBookMen(app);

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
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
  })
  .listen(8000, () => console.log(8000));
