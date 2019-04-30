const GApi = require("./gmail/access");
const GmailAPi = new GApi();
module.exports = app => {
   // urls
   app.post("/google/gmail/exit", (req, res) => GmailAPi.exit(req, res))
      .post("/google/gmail/send-email", (req, res) => GmailAPi.sendMail(req, res))
      .post("/google/gmail/auth-query", (req, res) => GmailAPi.authQuery(req, res))
      .post("/google/gmail/auth", (req, res) => GmailAPi.getAuth(req, res))
      .post("/google/gmail/set-token", (req, res) => GmailAPi.setToken(req, res))
      .post("/google/gmail/remove-mail", (req, res) => GmailAPi.removeMail(req, res))
      .post("/google/gmail/labels", (req, res) => {
         GmailAPi.listLabels()
            .then(data => {
               res.status(200).json(data);
            })
            .catch(error => res.status(201).json({ error }));
      })
      .post("/google/gmail/messages", (req, res) => {
         GmailAPi.messagesList(req.body)
            .then(data => {
               res.status(200).json(data);
            })
            .catch(error => res.status(201).json({ error }));
      })
      .post("/google/gmail/get-message", (req, res) => {
         GmailAPi.messageArrParser({ id: req.body.id })
            .then(d => {
               res.status(200).json(d);
            })
            .catch(e => res.status(201).json(e));
      });
};
