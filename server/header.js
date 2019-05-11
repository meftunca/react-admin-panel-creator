const bodyParser = require("body-parser"),
    //  cors = require("cors"),
    helmet = require("helmet"),
    cookieParser = require("cookie-parser")
module.exports = (app, store) => {
    // enhance your app security with Helmet
    app.use(helmet())
        // enable all CORS requests
        // .use(cors({ origin: "http://www.godevloops.com" }))
        // log HTTP requests
        .use(helmet.xssFilter())
        .use(helmet.frameguard())
        .use(cookieParser())
        .use(bodyParser.urlencoded({ extended: true }))
        .use(bodyParser.json()) // for parsing application/json
        .use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", true)
                .header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
                .header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json")

            next()
        })
}
