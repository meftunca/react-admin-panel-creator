const env = require("dotenv").config().parsed,
   monk = require("monk")(env.MONGODB_URI),
   bcrypt = require("bcrypt-nodejs"),
   ApiForms = require("./../../public/json/form.json"),
   Roles = [
      "aggregate",
      "bulkWrite",
      "count",
      "distinct",
      "drop",
      "dropIndex",
      "dropIndexes",
      "ensureIndex",
      "find",
      "findOne",
      "findOneAndDelete",
      "findOneAndUpdate",
      "geoHaystackSearch",
      "geoNear",
      "group",
      "indexes",
      "insert",
      "mapReduce",
      "remove",
      "stats",
      "update"
   ];
const storage = require("node-persist");

const users = monk.get("users");
module.exports = async app => {
   app.post("/register", (req, res) => {
      let data = req.body;
      users
         .count({
            $or: [
               {
                  eMail: data.eMail,
                  userName: data.userName
               }
            ]
         })
         .then(async docs => {
            if (docs > 0) {
               return res.json({
                  status: "error",
                  message: "Bu bilgilere sahip bir kullanıcı bulundu. \nVerileri değiştirerek tekrar deneyin..."
               });
            }
            data["api_token"] = "api_token-|+" + monk.id();
            data["remember_token"] = "remember_token-|+" + monk.id();
            data["passwordHash"] = bcrypt.hashSync(data.password);
            data["active"] = true;
            data["created_at"] = new Date();
            data["updated_at"] = new Date();
            users.insert(data);
            delete data["password"];
            await storage.setItem("user", data);
            res.json({
               status: "success",
               message: "Kayıt işlemi başarılı. \nBirazdan panele yönlendirileceksiniz.",
               data: data
            });
         });
   })
      .post("/login", (req, res) => {
         let data = req.body;
         users
            .count({
               eMail: data.email
            })
            .then(docs => {
               if (docs < 1) {
                  return res.json({
                     status: "warning",
                     message:
                        "Bu bilgilere sahip bir kullanıcı bulunamadı. \nVerileri gözden geçirerek tekrar deneyin..."
                  });
               }
               users.findOne({ eMail: data.email }).then(doc => {
                  console.log(bcrypt.compareSync(data.password, doc.passwordHash));
                  if (bcrypt.compareSync(data.password, doc.passwordHash) == false) {
                     return res.json({
                        status: "warning",
                        message: "Şifre Yanlış...\nŞifrenizi kontrol edin..."
                     });
                  }
                  doc["remember_token"] = "remember_token-|+" + monk.id();
                  doc["active"] = true;
                  doc["created_at"] = new Date();
                  doc["updated_at"] = new Date();
                  users.findOneAndUpdate({ eMail: data.email }, doc).then(async updateDoc => {
                     delete updateDoc["passwordHash"];
                     await storage.setItem("user", updateDoc);
                     res.json({
                        status: "success",
                        message: "Kayıt işlemi başarılı. Birazdan panele yönlendirileceksiniz.",
                        data: updateDoc
                     });
                  });
               });
            });
      })
      .post("/get-user-data", async (req, res) => {
         let data = {
            googleApi: await storage.getItem("googleApi"),
            facebookApi: await storage.getItem("facebookApi"),
            twitterApi: await storage.getItem("twitterApi"),
            data: await storage.getItem("user")
         };
         await res.json(data);
      })
      .post("/twitterApi/insert", async (req, res) => {
         const twitterApi = monk.get("twitterApi");
         twitterApi.insert(req.body);
         await storage.setItem("twitterApi", req.body);
         res.json({ status: true });
      })
      .post("/facebookApi/insert", async (req, res) => {
         const facebookApi = monk.get("facebookApi");
         facebookApi.insert(req.body);
         await storage.setItem("facebookApi", req.body);
         res.json({ status: true });
      })
      .post("/googleApi/insert", async (req, res) => {
         const googleApi = monk.get("googleApi");
         googleApi.insert(req.body);
         await storage.setItem("googleApi", req.body);
         res.json({ status: true });
      });
   ApiForms.forms.map(i => {
      const basePrefix = "/" + i.name.toLowerCase() + "/";
      const baseDb = monk.get(i.name);
      // app.use(function(req, res, next) {
      //    if (!req.headers["x-auth"]) return next("router");
      //    next();
      // });
      Roles.map(j => {
         app.post(basePrefix + j.toLowerCase(), (req, res) =>
            baseDb[j](...req.body.options).then(doc => res.json(doc))
         );
      });
   });
};
