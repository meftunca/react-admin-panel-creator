const express = require("express");
const bodyParser = require("body-parser");
const account = require("./account");
const { timeLine, statusUpdate, createTwitterApi } = require("./twitter");
var mongoose = require("mongoose");
const low = require("lowdb");
var path = require("path");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./src/json/form.json");
const auth = require("./google/gmail/access"); //erişim izni için aktif et
// const mailRoute = require("./google/gmail");
const db = low(adapter);
const app = express();
// db.defaults({ forms: [] }).write();
const schemaCreator = require("./mongo/mongoSchemaCreator");
mongoose.connect(
  "mongodb://localhost/admin",
  { useNewUrlParser: true }
);
let schema = schemaCreator();
let model = {};
for (let [k, v] of Object.entries(schema)) {
  model[k] = mongoose.model(k, v);
}
app.use(express.static(path.join(__dirname, "/../public")));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//kullancı yönetimi
account(app);

// mailRoute(app);
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

//google ile ilgili rotalar

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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});
const port = process.env.PORT || 8000;
console.log("port", process.env.PORT);
app.listen(port);
module.exports = app;
