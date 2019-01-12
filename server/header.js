const bodyParser = require("body-parser"),
  cors = require("cors"),
  path = require("path"),
  helmet = require("helmet"),
  morgan = require("morgan");

module.exports = (express, app) => {
  // enhance your app security with Helmet
  app
    .use(helmet())
    // enable all CORS requests
    .use(cors())
    // log HTTP requests
    .use(morgan("combined"))
    .use(bodyParser.json()) // for parsing application/json
    .use(bodyParser.urlencoded({ extended: true }))
    .use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
};
