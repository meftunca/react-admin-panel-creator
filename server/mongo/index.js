const mongoose = require("mongoose"),
  env = require("dotenv").config(),
  bcrypt = require("bcrypt-nodejs"),
  schemaCreator = require("./mongoSchemaCreator"),
  id = require("uniqid");
const storage = require("node-persist");
storage.init({
  dir: "storage/user",
  stringify: JSON.stringify,
  parse: JSON.parse,
  encoding: "utf8",
  logging: false, // can also be custom logging function
  ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS or a valid Javascript Date object
  expiredInterval: 2 * 60 * 1000, // every 2 minutes the process will clean-up the expired cache
  // in some cases, you (or some other service) might add non-valid storage files to your
  // storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
  forgiveParseErrors: false
});
mongoose.Promise = global.Promise; // mongoose promises deprecated, use node - mongoosejs.com/docs/promises

//tablo oluştur veya veri çek
// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
const uristring = process.env.MONGODB_URI;
mongoose.connect(
  uristring,
  { useNewUrlParser: true },
  function(err, res) {
    if (err) {
      // console.log("ERROR connecting to: " + uristring + ". " + err);
    } else {
      // console.log("Succeeded connected to: " + res);
    }
  }
);

let schema = schemaCreator(),
  model = {};
// console.log(schema.googleApi);
for (let [k, v] of Object.entries(schema)) {
  model[k] = mongoose.model(k, new mongoose.Schema(v));
}
let userCollection = mongoose.model(
  "users",
  new mongoose.Schema({
    userName: { type: String, trim: true, min: 8, max: 16, unique: true, required: true },
    name: { type: String, trim: true, min: 8, max: 16, required: true },
    lastName: { type: String, trim: true, min: 8, max: 16, required: true },
    password: { type: String, min: 8, max: 16, required: true },
    token: { type: String, default: "", unique: true, required: true },
    eMail: { type: String, trim: true, min: 12, max: 36, unique: true, required: true },
    active: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
  })
);

module.exports = async app => {
  app
    .post("/user-login", (req, res) => {
      let d = req.body,
        pass = bcrypt.hashSync(d.password);
      userCollection
        .findOne({ $or: [{ userName: d.name }, { eMail: d.name }] })
        //   .and({ password: d.password })
        //   .count()
        .exec((err, docs) => {
          if (err)
            return res.json({
              status: "error",
              message: "Bu bilgilerin sahibi kullanıcı bulunamadı.\nLütfen tekrar deneyin"
            });
          if (docs != null) {
            //token var yada yok
            let compare = bcrypt.compareSync(d.password, docs.password);
            // console.log(compare, docs.password, pass);
            if (compare) {
              //kullanıcı verilerini yükle
              let collect = new userCollection(d);
              if (Boolean(d.token)) {
                let tokenNow = id(docs.userName + Date.now());
                collect.updateOne({ token: tokenNow, active: 1 });
                docs["token"] = tokenNow;
              } else {
                req.collect.updateOne({ token: "" });
              }
              storage.setItem("user", docs);
              res.json({
                status: "success",
                message: "Giriş işlemi başarılı. Birazdan yönlendirileceksiniz.",
                data: docs
              });
            } else {
              res.json({
                status: "warning",
                message: "Şifre yanlış.\nLütfen tekrar deneyin."
              });
            }
          } else {
            res.json({
              status: "warning",
              message: "Kullanıcı adı/Email yanlış.\nLütfen tekrar deneyin."
            });
          }
        });
    })
    .post("/user-register", (req, res) => {
      let d = req.body;
      // console.log("üye durumu");
      userCollection
        .find({ $or: [{ userName: d.userName }, { eMail: d.eMail }] })
        .count({})
        .exec((err, docs) => {
          // console.log("count", docs);
          if (err)
            return res.json({
              status: "error",
              message: "Böyle bir kullanıcı bulundu, verileri değiştirerek tekrar deneyin"
            });
          if (docs == 0) {
            //token var yada yok
            d["token"] = Boolean(d.token) ? id(Date.now()) : "";
            d["password"] = bcrypt.hashSync(d.password);
            d["active"] = 1;

            //kullanıcı verilerini yükle
            userCollection.create(d, (err, suc) => {
              return err
                ? res.json({
                    status: "warning",
                    message: "Beklenmeyen bir hata oluştu.Lütfen sonra tekrar deneyin.",
                    err: err
                  })
                : res.json({
                    status: "success",
                    message: "Kayıt işlemi başarılı. Birazdan yönlendirileceksiniz.",
                    data: d
                  });
            });
          } else {
            res.json({
              status: "warning",
              message: "Kullanıcı adı veya eMail başka bir kullanıcı tarafından kullanılıyor."
            });
          }
        });
    })
    .post("/append-data", (req, res) => {
      let istek = req.body,
        table = req.body.tableName;

      if (table == undefined || table == "")
        res.json({ data: { status: "warning", message: "Beklenmeyen bir hata oluştu" } });
      let collection = model[table];
      collection = new collection(istek.data);
      collection.save((err, suc) => {
        if (table == "twitterApi" || table == "facebookApi" || table == "googleApi") storage.setItem(table, suc);
        return err
          ? res.json({ data: { status: "error", message: "server tarafında bir hata ile karşılaşıldı" } })
          : res.json({ data: { status: "success", message: "veriler başarılı bir şekilde eklendi" } });
      });
    })
    .post("/get-table", (req, res) => {
      //tablo satırlarını çek
      let table = req.body.name,
        column = req.body.columns;
      model[table]
        .find({})
        .select(column)
        .exec((err, athletes) => {
          if (err) return res.json(err);
          // athletes contains an ordered list of 5 athletes who play Tennis
          res.json(athletes);
        });
    })
    .post("/update-api-locals-data", (req, res) => {})
    .post("/remove-table-item", (req, res) => {
      //tablo satırlarını sil
      let table = req.body.name,
        id = req.body.id,
        q = {};
      id.map((i, k) => {
        model[table].findOneAndDelete(i, (error, result) => {
          // In this moment, you recive a result object or error
          if (error) return res.json(error);
          // ... Your code when have result ... //
          q[k] = result;
        });
      });
      res.json(q);
    })
    .post("/google-api-save", (req, res) => {
      console.log(req.body);
    })
    .post("/get-user-data", async (req, res) => {
      let data = {
        googleApi: await storage.getItem("googleApi"),
        facebookApi: await storage.getItem("facebookApi"),
        twitterApi: await storage.getItem("twitterApi"),
        data: await storage.getItem("user")
      };
      res.json(data);
    });
};
