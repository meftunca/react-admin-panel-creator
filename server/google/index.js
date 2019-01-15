const GApi = require("./gmail/access");
const GmailAPi = new GApi();

module.exports = app => {
  // urls
  app
    .post("/google/gmail/auth-query", (req, res) => GmailAPi.authQuery(req, res))
    .post("/google/gmail/auth", (req, res) => GmailAPi.getAuth(req, res))
    .post("/google/gmail/set-token", (req, res) => GmailAPi.setToken(req, res))
    .post("/google/gmail/remove-mail", (req, res) => GmailAPi.setToken(req, res))
    .post("/google/gmail/labels", async (req, res) => {
      let messageArr = [],
        status = false;
      await GmailAPi.messagesList()
        // .then(data => res.json({ data }))
        .then(data => {
          data.map(i => {
            // console.log(i);
            GmailAPi.messageArrParser({ id: i })
              .then(d => messageArr.push(d))
              .catch(e => res.json(e));
            // console.log(messageArr);
            if (data.length == messageArr.length) res.json(messageArr);
          });
        })
        .catch(error => res.json({ error }));
    })
    .post("/google/gmail/messages", (req, res) => {
      GmailAPi.messagesList()
        .then(data => {
          res.json(data);
        })
        .catch(error => res.json({ error }));
    })
    .post("/google/gmail/get-message", (req, res) => {
      GmailAPi.messageArrParser({ id: req.body.id })
        .then(d => res.json(d))
        .catch(e => res.json(e));
    });
};
