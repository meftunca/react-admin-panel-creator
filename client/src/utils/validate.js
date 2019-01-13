const validate = require("validate.js");
let opt = require("./validate.options")(validate);
let run;
const validator = {
  email: value => {
    run = validate(
      { email: value },
      {
        email: {
          email: true
        }
      }
    );
    // console.log("email: value => {", run);
    return run;
  },
  userName: value => {
    // console.log("userName: value => {", validate({ userName: value }, opt["userName"]));
    return validate({ userName: value }, opt["userName"]);
  },
  date: value => {
    // console.log("date: value => {", value);
    return validate({ date: value }, opt["date"]);
  },
  time: value => {
    // console.log("time: value => {", value);
    return validate({ time: value }, opt["time"]);
  },
  equality: value => {
    // console.log("equality: value => {", value);
    return validate({ equality: value }, opt["equality"]);
  },
  exclusion: value => {
    // console.log("exclusion: value => {", value);
    return validate({ exclusion: value }, opt["exclusion"]);
  },
  format: value => {
    // console.log("format: value => {", value);
    return validate({ format: value }, opt["format"]);
  },
  inclusion: value => {
    // console.log("inclusion: value => {", value);
    return validate({ inclusion: value }, opt["inclusion"]);
  },
  length: value => {
    // console.log("length: value => {", value);
    return validate({ length: value }, opt["length"]);
  },
  numericality: value => {
    // console.log("numericality: value => {", value);
    return validate({ numericality: value }, opt["numericality"]);
  },
  presence: value => {
    // console.log("presence: value => {", value);
    return validate({ presence: value }, opt["presence"]);
  },
  url: value => {
    // console.log("url: value => {", value);
    return validate({ url: value }, opt["url"]);
  }
};

export default validator;
