module.exports = (app, monk) => {
    app.post("/create-form", (req, res) => {
        let data = req.body
        const tables = monk.get("tables")
        tables.insert(data)
        tables.find({}).then((data2) => {
            res.status(200).json(data2)
        })
    })

    app.post("/get-form-json", (req, res) => {
        const tables = monk.get("tables")
        tables.find({}).then((data) => {
            res.status(200).json(data)
        })
    })
    app.post("/drop-tables", (req, res) => {
        const targetTables = monk.get(req.body.name)
        const tables = monk.get("tables")
        tables.findOneAndDelete({ _id: req.body.id })
        targetTables.drop().then((data) => {
            res.status(200).json(data)
        })
    })
}
