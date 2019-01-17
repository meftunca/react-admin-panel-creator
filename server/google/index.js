const GApi = require("./gmail/access");
const GmailAPi = new GApi();
module.exports = app => {
  // urls
  app
    .post("/google/gmail/exit", GmailAPi.exit)
    .post("/google/gmail/auth-query", GmailAPi.authQuery)
    .post("/google/gmail/auth", GmailAPi.getAuth)
    .post("/google/gmail/set-token", GmailAPi.setToken)
    .post("/google/gmail/remove-mail", GmailAPi.removeMail)
    .post("/google/gmail/labels", (req, res) => {
      GmailAPi.listLabels()
        .then(data => {
          res.json(data);
        })
        .catch(error => res.json({ error }));
    })
    .post("/google/gmail/messages", (req, res) => {
      GmailAPi.messagesList(req.body)
        .then(data => {
          res.json(data);
        })
        .catch(error => res.json({ error }));
    })
    .post("/google/gmail/get-message", (req, res) => {
      GmailAPi.messageArrParser({ id: req.body.id })
        .then(d => {
          res.json(d);
        })
        .catch(e => res.json(e));
    });
};
