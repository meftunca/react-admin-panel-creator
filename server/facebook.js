const { Facebook, FacebookApiException } = require("fb");
// const base64Img = require("base64-img");
const storage = require("node-persist");
let opt = async () => await storage.getItem("facebookApi");
const FB = new Facebook(Object.assign({ version: "v2.4" }, opt));

const getAccessToken = data =>
  new Promise((resolve, reject) => {
    FB.api(
      "oauth/access_token",
      {
        client_id: data.appId,
        client_secret: data.app_secret,
        grant_type: "client_credentials"
      },
      res => {
        if (!res || res.error) {
          console.log(!res ? "error occurred" : res.error);
          reject(res.error);
        }
        console.log(res);
        data["accessToken"] = res.access_token;
        resolve(data);
      }
    );
  });

let createFBApi = data =>
  new Promise((resolve, reject) => {
    getAccessToken(data)
      .then(d => {
        let q = d.appId != "" && d.app_secret != "" ? db.set("facebook", d).write() : undefined;
        console.log(d);
        resolve(q);
      })
      .catch(e => reject(e));
  });

const selectPost = id => new Promise((err, suc) => {});

const getPosts = new Promise((err, suc) => {});

const removePost = new Promise((err, suc) => {});

const createPost = data => new Promise((err, suc) => {});

const insertImage = data => new Promise((err, suc) => {});

module.exports = app => {
  app.post("/api-facebook", (req, res) => {
    let d = req.body;

    FB.setAccessToken(fbOpt.accessToken);

    var body = "My first post using facebook-node-sdk";
    FB.api("me/feed", "post", { message: body }, function(res) {
      if (!res || res.error) {
        console.log(!res ? "error occurred" : res.error);
        return;
      }
      console.log("Post Id: " + res.id);
    });
    // createFBApi(d.data)
    //   .then(d => res.json(d))
    //   .catch(e => res.json(e));
  });
};
