const bodyParser = require("body-parser"),
  cors = require("cors"),
  path = require("path"),
  helmet = require("helmet"),
  session = require("express-session"),
  morgan = require("morgan");

module.exports = (express, app) => {
  //session
  app.use(
    session({
      secret: process.env.SQREEN_TOKEN,
      saveUninitialized: true,
      resave: false,
      maxAge: 1000 * 60 * 15,
      cookie: {
        secure: true
      }
    })
  );

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

  // 4. Force https in production
  if (app.get("env") === "production") {
    app.use(function(req, res, next) {
      var protocol = req.get("x-forwarded-proto");
      protocol == "https" ? next() : res.redirect("https://" + req.hostname + req.url);
    });
  }
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
};
