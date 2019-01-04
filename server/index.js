const express = require("express");
const bodyParser = require("body-parser");
const { timeLine, statusUpdate, createTwitterApi } = require("./twitter");
var mongoose = require("mongoose");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./src/json/form.json");
const db = low(adapter);
// db.defaults({ forms: [] }).write();

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const schemaCreator = require("./mongo/mongoSchemaCreator");
mongoose.connect("mongodb://localhost/admin");
let schema = schemaCreator();
let model = {};
for (let [k, v] of Object.entries(schema)) {
  model[k] = mongoose.model(k, v);
}

//twitter ile ilgili rotalar
app.post("/twitter", function(req, res) {
  timeLine.then(d => res.json(d)).catch(e => res.json(e));
});
app.post("/twitter-post", function(req, res) {
  statusUpdate(req.body)
    .then(d => res.json(d))
    // .then(d => res.json(d))
    .catch(e => res.json(e));
});
app.post("/api-twitter", async (req, res) => {
  let data = req.body;
  console.log(data);
  createTwitterApi(data)
    .then(d => res.json({ data: { status: "success", message: "veriler başarılı bir şekilde eklendi" } }))
    .catch(e => res.json({ data: { status: "error", message: "server tarafında bir hata ile karşılaşıldı" } }));
});

//facebook ile ilgili rotalar

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
app.post("/append-data", function(req, res) {
  let istek = req.body;
  console.log(istek);
  if (istek.tableName == undefined || istek.tableName == "")
    res.json({ data: { status: "warning", message: "Beklenmeyen bir hata oluştu" } });
  let collection = model[istek.tableName];
  collection = new collection(istek.data);
  collection.save((err, suc) =>
    err
      ? res.json({ data: { status: "error", message: "server tarafında bir hata ile karşılaşıldı" } })
      : res.json({ data: { status: "success", message: "veriler başarılı bir şekilde eklendi" } })
  );
});
app.listen(8000, function() {
  console.log("Example app listening on port 8000!");
});
// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(
//   url,
//   function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   }
// );
module.exports = app;
