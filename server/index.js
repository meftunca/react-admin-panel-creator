var express = require("express");
var bodyParser = require("body-parser");
var Twitter = require("twitter");

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var client = new Twitter({
  consumer_key: "RNOGX5TiB0Kyto9ggDxcT8Gie",
  consumer_secret: "Kn7ut4mvlwqPDNXIrl9uQxAblb1115Rg87XZ319UEaaJ09Kf0i",
  access_token_key: "3293164734-flLNI737Kx80gPEsJN5DBMXHN2uCew8HYkSwsQD",
  access_token_secret: "uMktnXidYlONSa3lV45AXPS7mvnW5k0YAU7wwWTPqDFrB"
});

var params = { screen_name: "nodejs" };
// client.get("statuses/user_timeline", params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
app.post("/twitter", function(req, res) {
  client.get("statuses/user_timeline", function(error, tweets, response) {
    if (!error) {
      // console.log(tweets);
      // res.json(tweet);
      res.json(tweets);
    }
  });
});
app.listen(8000, function() {
  console.log("Example app listening on port 3000!");
});
