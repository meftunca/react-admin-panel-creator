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
    port = process.env.PORT || 3001

// express header
header(app)

//otherRequest
otherRequest(app, monk)

//mongo yönetimi
api(app, monk)

// google(app);
google(app)

// twitter(app);
twitter(app)

// //facebook ile ilgili rotalar
// FaceBookMen(app);

//Static file declaration
app.use(express.static(path.join(__dirname, "public")))

//production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "public")))
    //
    app.get("*", (req, res) => {
        res.sendfile(path.join((__dirname = "public/index.html")))
    })
}
//build mode
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})

app.listen(port)
