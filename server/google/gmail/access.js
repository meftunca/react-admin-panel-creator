const { google } = require("googleapis");
const storage = require("node-persist");
class Gmail {
  constructor() {
    // console.log();
    this.state = {
      auth: false
    };
    this.create();
  }
  setState(data) {
    this.state = Object.assign(this.state, data);
  }

  async create() {
    this.apiData = await storage.getItem("googleApi");
    if (this.apiData != undefined && this.apiData != null) {
      const { client_secret, client_id, redirect_uris } = this.apiData;
      this.auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris);
      this.setState({ auth: true });
      if (this.apiData.token != undefined) {
        await this.auth.setCredentials(this.apiData.token);
        this.gmail = await google.gmail({ version: "v1", auth: this.auth });
      }
    }
  }

  getNewToken(response) {
    const authUrl = this.auth.generateAuthUrl({
      access_type: "offline",
      scope: [
        "https://mail.google.com",
        "https://www.googleapis.com/auth/gmail.labels",
        "https://www.googleapis.com/auth/gmail.readonly",
        "https://www.googleapis.com/auth/gmail.modify",
        "https://www.googleapis.com/auth/gmail.metadata"
      ]
    });
    // console.log("Authorize this app by visiting this url:", authUrl);
    response.json({ url: authUrl, setToken: true });
  }
  listLabels(response) {
    let opt = {
      userId: "me"
    };

    return new Promise((resolve, reject) => {
      this.gmail.users.labels.list(opt, (err, res) => {
        if (err) return reject(err);
        resolve(res.data.labels);
      });
    });
  }
  messagesList(options) {
    let opt = {
      userId: "me",
      labelIds: ["INBOX"],
      maxResults: 10
    };
    opt = Object.assign(opt, options);
    return new Promise(async (resolve, reject) => {
      this.gmail.users.messages.list(opt, (err, res) => {
        if (err) reject(err);
        const messages = res.data.messages,
          messageArr = [];
        messages.map(i => messageArr.push(i.id));
        resolve(messageArr);
      });
    });
  }
  messageArrParser(options) {
    let opt = {
      userId: "me",
      format: process.env.NODE_ENV == "production" ? "full" : "metadata"
    };
    opt = Object.assign(opt, options);
    // reject(list.data);
    return new Promise((resolve, reject) => {
      this.gmail.users.messages.get(opt, (err, res) => {
        if (err) reject(err);
        resolve(res.data);
      });
    });
  }
  removeMail(req, res) {
    console.log(req.body);
    this.gmail.users.messages.delete({ userId: "me", id: req.body.id }, (err, suc) => {
      console.log(err);
      if (err) res.json(err);
      res.json(suc);
    });
  }
  //url callbacks
  async authQuery(req, res) {
    if (this.apiData == undefined) {
      res.json({ status: false, message: "Önce api bilgilerini girmeniz lazım." });
    } else {
      if (this.apiData.token == undefined) {
        await this.getNewToken(res);
      } else {
        res.json({ status: true });
      }
    }
  }
  getAuth(req, res) {
    if (this.state.auth == false) {
      res.json({ status: false, message: "Önce api bilgilerini girmeniz lazım." });
    } else if (this.apiData.token == undefined || this.apiData.token == {}) {
      this.authQuery(req, res);
    } else {
      res.json({ status: true, message: "Token zaten aktif." });
    }
  }
  setToken(req, res) {
    this.auth.getToken(req.body.code, async (err, token) => {
      if (err) return; //console.error("Error retrieving access token", err);
      this.auth.setCredentials(token);
      let user = await storage.getItem("user");
      let newApi = Object.assign(this.apiData, { token: token, userId: user._id });
      this.apiData = newApi;
      await storage.setItem("googleApi", newApi);
      res.json({ status: true, token: token });
    });
  }
}
module.exports = Gmail;
