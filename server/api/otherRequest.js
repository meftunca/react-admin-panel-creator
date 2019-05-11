const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/uploads");
  },
  filename: function(req, file, callback) {
    callback(
      null,
      file.originalname
        .split(".")
        .shift()
        .toLowerCase()
        .replace(/\s/gim, "-") +
        "-" +
        Date.now() +
        "." +
        file.originalname.split(".").pop()
    );
    console.log("file", file);
  }
});
var upload = multer({ storage: storage }).single("file");

module.exports = (app, monk) => {
  app.post("/create-form", (req, res) => {
    let data = req.body;
    const tables = monk.get("tables");
    tables.insert(data);
    tables.find({}).then(data2 => {
      res.status(200).json(data2);
    });
  });

  app.post("/get-form-json", (req, res) => {
    const tables = monk.get("tables");
    tables.find({}).then(data => {
      res.status(200).json(data);
    });
  });
  app.post("/drop-tables", (req, res) => {
    const targetTables = monk.get(req.body.name);
    const tables = monk.get("tables");
    tables.findOneAndDelete({ _id: req.body.id });
    targetTables.drop().then(data => {
      res.status(200).json(data);
    });
  });
  app.post("/file-upload", upload, (req, res) => {
    res.send(req.file);
  });
};
