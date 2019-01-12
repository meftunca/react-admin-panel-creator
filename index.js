const http = require("http"),
  express = require("express"),
  mongo = require("./server/mongo"),
  twitter = require("./server/twitter"),
  FaceBookMen = require("./server/facebook"),
  header = require("./server/header"),
  low = require("lowdb"),
  FileSync = require("lowdb/adapters/FileSync"),
  adapter = new FileSync("./src/json/form.json"),
  db = low(adapter),
  app = express();

// express header
header(express, app);

app.use(express.static(__dirname + "/public/index.html"));

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
app.listen(5000, () => console.log(5000));
