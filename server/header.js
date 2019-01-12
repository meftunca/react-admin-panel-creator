const bodyParser = require("body-parser"),
  cors = require("cors"),
  path = require("path"),
  helmet = require("helmet"),
  morgan = require("morgan");

module.exports = (express, app) => {
<<<<<<< HEAD
=======
  // use bodyParser to parse application/json content-type
  app.use(bodyParser.json());

>>>>>>> 1150a85695be4ae6be5c379b9af56fd1fc8a929f
  // enhance your app security with Helmet
  app.use(helmet());

  // enable all CORS requests
  app.use(cors());

  // log HTTP requests
  app.use(morgan("combined"));
  app.use(express.static(path.join(__dirname, "/../build")));
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

<<<<<<< HEAD
  // 4. Force https in production
  if (app.get("env") === "production") {
    app.use(function(req, res, next) {
      var protocol = req.get("x-forwarded-proto");
      protocol == "https" ? next() : res.redirect("https://" + req.hostname + req.url);
    });
  }
=======
>>>>>>> 1150a85695be4ae6be5c379b9af56fd1fc8a929f
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
};
