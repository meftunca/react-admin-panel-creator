const bodyParser = require("body-parser"),
  cors = require("cors"),
  path = require("path"),
  helmet = require("helmet"),
  morgan = require("morgan");

module.exports = (express, app) => {
  // use bodyParser to parse application/json content-type
  app.use(bodyParser.json());

  // enhance your app security with Helmet
  app.use(helmet());

  // enable all CORS requests
  app.use(cors());

  // log HTTP requests
  app.use(morgan("combined"));
  app.use(express.static(path.join(__dirname, "/../public")));
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
};
