const express = require("express"),
  env = require("dotenv").config().parsed,
  monk = require("monk")(env.MONGODB_URI),
  api = require("./server/api"),
  otherRequest = require("./server/api/otherRequest"),
  twitter = require("./server/twitter"),
  // FaceBookMen = require("./server/facebook"),
  header = require("./server/header"),
  google = require("./server/google/index.js"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3001,
  storage = require("node-persist");

const StorageInit = async () =>
  storage.init({
    dir: __dirname + "/storage",
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: "utf8",
    logging: false, // can also be custom logging function
    ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS or a valid Javascript Date object
    expiredInterval: 2 * 60 * 1000, // every 2 minutes the process will clean-up the expired cache
    // in some cases, you (or some other service) might add non-valid storage files to your
    // storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
    forgiveParseErrors: false
  });
StorageInit();
console.log("__dirname", __dirname);
// express header
header(app);

//otherRequest
otherRequest(app, monk);

//mongo yönetimi
api(app, monk);

// google(app);
google(app);

// twitter(app);
twitter(app);

// //facebook ile ilgili rotalar
// FaceBookMen(app);

//Static file declaration

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "public/index.html")));
  });
}
app.use(express.static(path.join(__dirname, "public")));

//build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port);
// app.listen(80, "https://admin-panel.test");
