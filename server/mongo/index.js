const mongoose = require("mongoose"),
  schemaCreator = require("./mongoSchemaCreator");
mongoose.connect(
<<<<<<< HEAD
  // "mongodb://heroku_t39b8ml4:nip8m4ehf38lsqourohpvtjboo@ds253284.mlab.com:53284/heroku_t39b8ml4",
  "mongodb://localhost/admin",
=======
  // "mongodb://heroku_t39b8ml4:nip8m4ehf38lsqourohpvtjboo@ds253284.mlab.com:53284/heroku_t39b8ml4",

>>>>>>> a942c56786918b224c69200167d3437242dd8d7d
  { useNewUrlParser: true }
);
let schema = schemaCreator(),
  model = {};
for (let [k, v] of Object.entries(schema)) {
  model[k] = mongoose.model(k, new mongoose.Schema(v));
}
module.exports = app => {
  //tablo oluştur veya veri çek
  app.post("/append-data", function(req, res) {
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
  });
  //tablo satırlarını çek
  app.post("/get-table", (req, res, next) => {
    let table = req.body.name,
      column = req.body.columns;
    model[table]
      .find({})
      .select(column)
      .exec(function(err, athletes) {
        if (err) return res.json(err);
        // athletes contains an ordered list of 5 athletes who play Tennis
        res.json(athletes);
      });
  });
  //tablo satırlarını sil
  app.post("/remove-table-item", (req, res, next) => {
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
