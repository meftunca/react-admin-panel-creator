const mongoose = require("mongoose"),
  env = require("dotenv").config(),
  bcrypt = require("bcrypt-nodejs"),
  schemaCreator = require("./mongoSchemaCreator"),
  id = require("uniqid");
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
      console.log("ERROR connecting to: " + uristring + ". " + err);
    } else {
      console.log("Succeeded connected to: " + res);
    }
  }
);
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});
mongoose.connection.on("error", err => {
  console.log("MongoDB connection error: ", err);
});

let schema = schemaCreator(),
  model = {};
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
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
  })
);
module.exports = app => {
  app
    .post("/user-login", (req, res) => {
      let d = req.body,
        pass = bcrypt.hashSync(d.password);
      // console.log("gelen data", req.body);
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
          // console.log("null", docs, d);
          if (docs != null) {
            //token var yada yok
            let compare = bcrypt.compareSync(d.password, docs.password);
            console.log(compare, docs.password, pass);
            if (compare) {
              //kullanıcı verilerini yükle
              let collect = new userCollection(d);
              if (Boolean(d.token)) {
                let tokenNow = id(docs.userName + Date.now());
                collect.updateOne({ token: tokenNow });
                docs["token"] = tokenNow;
              } else {
                collect.updateOne({ token: "" });
              }
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
      console.log("üye durumu");
      userCollection
        .find({ $or: [{ userName: d.userName }, { eMail: d.eMail }] })
        .count({})
        .exec((err, docs) => {
          console.log("count", docs);
          if (err)
            return res.json({
              status: "error",
              message: "Böyle bir kullanıcı bulundu, verileri değiştirerek tekrar deneyin"
            });
          if (docs == 0) {
            //token var yada yok
            d["token"] = Boolean(d.token) ? id(Date.now()) : "";
            d["password"] = bcrypt.hashSync(d.password);
            //kullanıcı verilerini yükle
            userCollection.create(d, (err, suc) =>
              err
                ? res.json({
                    status: "warning",
                    message: "Beklenmeyen bir hata oluştu.Lütfen sonra tekrar deneyin.",
                    err: err
                  })
                : res.json({
                    status: "success",
                    message: "Kayıt işlemi başarılı. Birazdan yönlendirileceksiniz.",
                    data: d
                  })
            );
          } else {
            res.json({
              status: "warning",
              message: "Kullanıcı adı veya eMail başka bir kullanıcı tarafından kullanılıyor."
            });
          }
        });
    })
    .post("/append-data", (req, res) => {
      let istek = req.body;
      console.log(istek);
      if (istek.tableName == undefined || istek.tableName == "")
        res.json({ data: { status: "warning", message: "Beklenmeyen bir hata oluştu" } });
      let collection = model[istek.tableName];
      collection = new collection(istek.data);
      collection.save((err, suc) =>
        err
          ? res.json({ data: { status: "error", message: "server tarafında bir hata ile karşılaşıldı" } })
          : res.json({ data: { status: "success", message: "veriler başarılı bir şekilde eklendi" } })
      );
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
    });
};
