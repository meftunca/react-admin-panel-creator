const Gmail = require("node-gmail-api");
const { access_token } = require("./../../api/gmailToken");
console.log("access", access_token);
const gmail = new Gmail(access_token);
const api = gmail.messages("label:inbox", { max: 10 });

module.exports = app => {
  app.post("/gmail/get", (req, res) => {
    let data = req.body;
    api.on("data", function(d) {
      res.json(d);
    });
  });
};
