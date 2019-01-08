const id = require("uniqid");
const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/admin",
  { useNewUrlParser: true }
);
const schema = {
  userName: { type: String, min: 8, max: 16 },
  name: { type: String, min: 8, max: 16 },
  lastName: { type: String, min: 8, max: 16 },
  password: { type: String, min: 8, max: 16 },
  token: { type: String, default: "" },
  eMail: { type: String, min: 12, max: 36 },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date }
};

const matchPass = (model, pass) => (model.count({ password: pass }) > 0 ? true : false);
module.exports = app => {
  let collection = new mongoose.model("users", schema);
  app.post("/user-login", (req, res) => {
    let d = req.body,
      pass = bcrypt.hashSync(d.password);
    console.log(req.body);
    collection
      .findOne({ $or: [{ userName: d.name }, { eMail: d.name }] })
      //   .and({ password: d.password })
      //   .count()
      .exec((err, docs) => {
        if (err)
          return res.json({
            status: "error",
            message: "Bu bilgilerin sahibi kullanıcı bulunamadı.\nLütfen tekrar deneyin"
          });
        console.log("null", docs, d);
        if (docs != null) {
          //token var yada yok
          let compare = bcrypt.compareSync(d.password, docs.password);
          console.log(compare, docs.password, pass);
          if (compare) {
            d["token"] = Boolean(d.token) ? id(Date.now()) : "";
            //kullanıcı verilerini yükle
            let collect = new collection(d);
            collect.save((err, suc) =>
              err
                ? res.json({ status: "warning", message: "Beklenmeyen bir hata oluştu.Lütfen sonra tekrar deneyin." })
                : res.json({
                    status: "success",
                    message: "Giriş işlemi başarılı. Birazdan yönlendirileceksiniz.",
                    data: docs
                  })
            );
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
  });
  app.post("/user-register", (req, res) => {
    let d = req.body;
    console.log("üye durumu");
    collection
      .find({ $or: [{ userName: d.userName }, { eMail: d.eMail }] })
      .count()
      .exec((err, docs) => {
        if (err)
          return res.json({
            status: "error",
            message: "Böyle bir kullanıcı bulundu, verileri değiştirerek tekrar deneyin"
          });
        if (docs < 1) {
          //token var yada yok
          d["token"] = Boolean(d.token) ? id(Date.now()) : "";
          d["password"] = bcrypt.hashSync(d.password);
          //kullanıcı verilerini yükle
          let collect = new collection(d);
          collect.save((err, suc) =>
            err
              ? res.json({ status: "warning", message: "Beklenmeyen bir hata oluştu.Lütfen sonra tekrar deneyin." })
              : res.json({
                  status: "success",
                  message: "Kayıt işlemi başarılı. Birazdan yönlendirileceksiniz.",
                  data: suc
                })
          );
        } else {
          res.json({
            status: "warning",
            message: "Kullanıcı adı veya eMail başka bir kullanıcı tarafından kullanılıyor."
          });
        }
      });
  });
};
