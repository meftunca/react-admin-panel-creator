const express = require("express"),
  mongo = require("./server/mongo"),
  twitter = require("./server/twitter"),
  FaceBookMen = require("./server/facebook"),
  header = require("./server/header"),
  low = require("lowdb"),
  FileSync = require("lowdb/adapters/FileSync"),
  adapter = new FileSync("./src/json/form.json"),
  db = low(adapter),
  google = require("./server/google/index.js"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3001;

// express header
header(app);

//mongo yönetimi
mongo(app);
// console.log(app.locals);
// google(app);
google(app);

// twitter(app);
twitter(app);

//facebook ile ilgili rotalar
FaceBookMen(app);

//Static file declaration
app.use(express.static(path.join(__dirname, "public")));

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "public/index.html")));
  });
}
//build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
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
  res.json(data);
});
app.listen(port, err => console.log(err));
