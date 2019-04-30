const bodyParser = require("body-parser"),
    //  cors = require("cors"),
    helmet = require("helmet"),
    cookieParser = require("cookie-parser"),
    storage = require("node-persist")

const StorageInit = async () =>
    storage.init({
        dir: "storage",
        stringify: JSON.stringify,
        parse: JSON.parse,
        encoding: "utf8",
        logging: false, // can also be custom logging function
        ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS or a valid Javascript Date object
        expiredInterval: 2 * 60 * 1000, // every 2 minutes the process will clean-up the expired cache
        // in some cases, you (or some other service) might add non-valid storage files to your
        // storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
        forgiveParseErrors: false
    })
StorageInit()
module.exports = (app) => {
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
