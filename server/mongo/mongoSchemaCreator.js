const formToSchema = require("../../public/json/form.json").forms;
const formApiToSchema = require("../../public/json/apiForm.json");
const SchemaBuilderData = [...formToSchema, ...Object.values(formApiToSchema)];
// console.log("SchemaBuilderData", SchemaBuilderData);
let timeStamps = {
   created_at: { type: Date, default: Date.now() },
   updated_at: { type: Date }
};
let queryParse = val =>
   val == "string"
      ? String
      : val == "boolean"
      ? Boolean
      : val == "date"
      ? { type: Date, default: Date.now() }
      : val == "object"
      ? Object
      : val == "array"
      ? Array
      : Number;

module.exports = () => {
   let obj = {};
   for (let form of SchemaBuilderData) {
      let item = form.formItem;
      obj[form.name] = {};
      for (let i of item) {
         obj[form.name][i.name] = queryParse(i.mongoType.toLocaleLowerCase());
      }
      Object.assign(obj[form.name], timeStamps);
   }
   return obj;
};
