const bodyParser = require("body-parser"),
  cors = require("cors"),
  path = require("path"),
  helmet = require("helmet");

module.exports = (express, app) => {
  // enhance your app security with Helmet
  app
    .use(helmet())
    // enable all CORS requests
    .use(cors())
    // log HTTP requests
    .use(bodyParser.json()) // for parsing application/json
    .use(bodyParser.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname, "/../client/public")))
    .get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/../client/public/index.html"));
    })
    .use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Credentials", true);
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
      );

      next();
    });
};
