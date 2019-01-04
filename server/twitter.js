var Twitter = require("twitter");
const base64Img = require("base64-img");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./server/api/twitter.json");
const db = low(adapter);

var client = new Twitter({
  consumer_key: "RNOGX5TiB0Kyto9ggDxcT8Gie",
  consumer_secret: "Kn7ut4mvlwqPDNXIrl9uQxAblb1115Rg87XZ319UEaaJ09Kf0i",
  access_token_key: "3293164734-flLNI737Kx80gPEsJN5DBMXHN2uCew8HYkSwsQD",
  access_token_secret: "uMktnXidYlONSa3lV45AXPS7mvnW5k0YAU7wwWTPqDFrB"
});
let createTwitterApi = ({ data }) =>
  new Promise((resolve, reject) => {
    db.defaults({ twitter: {}, google: {} }).write();
    let q = db.set("twitter", data).write();
    reject(q);
    resolve(q);
  });

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

module.exports = { timeLine, statusUpdate, createTwitterApi };
