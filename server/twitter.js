var Twitter = require("twit")
const base64Img = require("base64-img")
const storage = require("node-persist")

module.exports = async (app) => {
    let opt = await storage.getItem("twitterApi")
    opt = opt.options != undefined ? opt.options[0] : opt
    if (opt == undefined) return
    opt = {
        consumer_key: opt.consumer_key,
        consumer_secret: opt.consumer_secret,
        access_token: opt.access_token_key,
        access_token_secret: opt.access_token_secret,
        timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
        // strictSSL: true // optional - requires SSL certificates to be valid.
    }
    var client = new Twitter(opt)

    let timeLine = new Promise(function(resolve, reject) {
        client.get("statuses/user_timeline", function(error, tweets, response) {
            if (error) resolve(error)
            reject(tweets)
        })
    })
    let statusUpdate = ({ status, file }) => {
        if (file != undefined && file != "") {
            let filepath = require("fs").readFileSync(base64Img.imgSync(file, "", "2"))
            return new Promise(async (resolve, reject) => {
                await client.post("media/upload", { media: filepath }, async (error, media, response) => {
                    if (!error) {
                        reject(media)
                        reject(response)
                        let newStatus = {
                            status: status,
                            media_ids: media.media_id_string // Pass the media id string
                        }
                        await client.post("statuses/update", newStatus, (error, tweet, response) => {
                            if (error) resolve(error)
                            reject(tweet) // Tweet body.
                            reject(response) // Raw response object.
                        })
                    } else {
                        resolve(error)
                    }
                })
            })
        } else {
            return new Promise((resolve, reject) => {
                client.post("statuses/update", { status: status }, (error, tweet, response) => {
                    if (error) resolve(error)
                    reject(tweet) // Tweet body.
                    reject(response) // Raw response object.
                })
            })
        }
    }
    //twitter ile ilgili rotalar
    app.post("/twitter", function(req, res) {
        timeLine.then((d) => res.json(d)).catch((e) => res.json(e))
    })
    app.post("/twitter-post", function(req, res) {
        statusUpdate(req.body)
            .then((d) => res.json(d))
            .catch((e) => res.json(e))
    })
    app.post("/twitter/delete", (req, res) => {
        client.post("statuses/destroy/:id", { id: req.body.id }, (error, tweet, response) => {
            res.json({ status: error ? false : true, error })
        })
    })
}
