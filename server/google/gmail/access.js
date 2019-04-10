const { google } = require("googleapis");
const storage = require("node-persist");
const parseMessage = require("gmail-api-parse-message");

class Gmail {
   constructor() {
      // console.log();
      this.state = {
         auth: false,
         token: false
      };
      this.create();
   }
   setState(data) {
      this.state = Object.assign(this.state, data);
   }

   async create() {
      this.apiData = await storage.getItem("googleApi");
      this.apiData = this.apiData.options != undefined ? this.apiData.options[0] : this.apiData;
      if (this.apiData != undefined && this.apiData != null) {
         // console.log(this.apiData);
         const { client_secret, client_id, redirect_uris } = this.apiData;
         this.auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris);
         this.setState({ auth: true });
         if (this.apiData.token != undefined) {
            this.setState({ token: true });
            await this.auth.setCredentials(this.apiData.token);
            this.gmail = await google.gmail({ version: "v1", auth: this.auth });
         } else {
            this.setState({ token: false });
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
            "https://www.googleapis.com/auth/gmail.compose",
            "https://www.googleapis.com/auth/gmail.send",
            "https://www.googleapis.com/auth/gmail.modify"
            // "https://www.googleapis.com/auth/gmail.metadata"
         ]
      });
      // console.log("Authorize this app by visiting this url:", authUrl);
      response.json({ url: authUrl, setToken: true });
      this.create();
   }
   listLabels(response) {
      return new Promise((resolve, reject) => {
         if (this.state.token == false) return reject("Token aktif değil");
         let opt = {
            userId: "me"
         };

         this.gmail.users.labels.list(opt, (err, res) => {
            if (err) return reject(err);
            resolve(res.data.labels);
         });
      });
   }
   exit() {
      storage.removeItem("googleApi");
      res.send(true);
      this.create();
   }
   messagesList(options) {
      return new Promise(async (resolve, reject) => {
         if (this.state.token == false) return reject("Token aktif değil");

         let opt = {
            userId: "me",
            labelIds: ["INBOX"],
            maxResults: 100
         };
         opt = Object.assign(opt, options);
         console.log(options);
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
      // reject(list.data);
      return new Promise((resolve, reject) => {
         if (this.state.token == false) return reject("Token aktif değil");

         let opt = {
            userId: "me"
         };
         opt = Object.assign(opt, options);
         this.gmail.users.messages.get(opt, (err, res) => {
            if (err) reject(err);

            resolve(parseMessage(res.data));
         });
      });
   }
   makeBody({ to, from, subject, message }) {
      return new Buffer.from(
         'Content-type: text/html; charset="UTF-8"\n' +
            "MIME-Version: 1.0\n" +
            "Content-Transfer-Encoding: 7bit\n" +
            "to: " +
            to +
            "\n" +
            "from: " +
            from +
            "\n" +
            "subject: " +
            subject +
            "\n\n" +
            "" +
            message
      )
         .toString("base64")
         .replace(/\+/g, "-")
         .replace(/\//g, "_");
   }
   async sendMail(req, res) {
      // console.log("body", req.body);

      let raw = this.makeBody(req.body);
      await this.gmail.users.messages.send(
         {
            userId: "me",
            resource: {
               raw: raw
            }
         },
         (err, suc) => res.json(err ? err : suc)
      );
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
