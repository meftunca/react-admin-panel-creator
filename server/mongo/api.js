const monk = require("monk")(process.env.MONGODB_URI),
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
         .then(docs => {
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
            res.json({
               status: "success",
               message: "Kayıt işlemi başarılı. \nBirazdan panele yönlendirileceksiniz.",
               data: data
            });
         });
   }).post("/login", (req, res) => {
      let data = req.body;
      console.log("data", data);
      users
         .count({
            eMail: data.email
         })
         .then(docs => {
            if (docs < 1) {
               return res.json({
                  status: "warning",
                  message: "Bu bilgilere sahip bir kullanıcı bulunamadı. \nVerileri gözden geçirerek tekrar deneyin..."
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
               users.findOneAndUpdate({ eMail: data.email }, doc).then(updateDoc => {
                  delete updateDoc["passwordHash"];
                  res.json({
                     status: "success",
                     message: "Kayıt işlemi başarılı. Birazdan panele yönlendirileceksiniz.",
                     data: updateDoc
                  });
               });
            });
         });
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
