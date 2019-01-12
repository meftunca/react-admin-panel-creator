const env = require("dotenv").config(),
  schemaCreator = require("./mongoSchemaCreator");

module.exports = async (mongoose, app) => {
  //tablo oluştur veya veri çek
  // Makes connection asynchronously.  Mongoose will queue up database
  // operations and release them when the connection is complete.
  const uristring = process.env.MONGODB_URI;
  await mongoose.connect(
    uristring,
    { useNewUrlParser: true },
    function(err, res) {
      if (err) {
        console.log("ERROR connecting to: " + uristring + ". " + err);
      } else {
        console.log("Succeeded connected to: " + uristring);
      }
    }
  );
  await mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
  });
  await mongoose.connection.on("error", err => {
    console.log("MongoDB connection error: ", err);
  });

  let schema = schemaCreator(),
    model = {};
  for (let [k, v] of Object.entries(schema)) {
    model[k] = mongoose.model(k, new mongoose.Schema(v));
  }
  app.post("/append-data", (req, res) => {
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
  app.post("/get-table", (req, res) => {
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
  app.post("/remove-table-item", (req, res) => {
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
