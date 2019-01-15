var Twitter = require("twitter");
const base64Img = require("base64-img");
const storage = require("node-persist");

module.exports = async app => {
  let opt = await storage.getItem("twitterApi");
  opt = {
    consumer_key: opt.consumer_key,
    consumer_secret: opt.consumer_secret,
    access_token_key: opt.access_token_key,
    access_token_secret: opt.access_token_secret
  };
  var client = new Twitter(opt);

  let timeLine = new Promise(function(resolve, reject) {
    client.get("statuses/user_timeline", function(error, tweets, response) {
      if (error) resolve(error);
      reject(tweets);
    });
  });
  let statusUpdate = ({ status, file }) => {
    // console.log(status, file);
    if (file != undefined && file != "") {
      let filepath = require("fs").readFileSync(base64Img.imgSync(file, "", "2"));
      return new Promise(async (resolve, reject) => {
        await client.post("media/upload", { media: filepath }, async (error, media, response) => {
          if (!error) {
            console.log(media, response);
            reject(media);
            reject(response);
            let newStatus = {
              status: status,
              media_ids: media.media_id_string // Pass the media id string
            };

            await client.post("statuses/update", newStatus, (error, tweet, response) => {
              if (error) resolve(error);
              reject(tweet); // Tweet body.
              reject(response); // Raw response object.
            });
          } else {
            console.log(error);
            resolve(error);
          }
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        client.post("statuses/update", { status: status }, (error, tweet, response) => {
          if (error) resolve(error);
          console.log("status", status);
          reject(tweet); // Tweet body.
          reject(response); // Raw response object.
        });
      });
    }
  };
  //twitter ile ilgili rotalar
  app.post("/twitter", function(req, res) {
    timeLine.then(d => res.json(d)).catch(e => res.json(e));
  });
  app.post("/twitter-post", function(req, res) {
    statusUpdate(req.body)
      .then(d => res.json(d))
      // .then(d => res.json(d))
      .catch(e => res.json(e));
  });
};
