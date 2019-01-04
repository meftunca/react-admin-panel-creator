import React, { Component } from "react";
import FormBuilder from "./../../components/forms/builder";
const Api = require("./../../json/apiForm.json");
export default class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {Object.values(Api).map((i, k) => (
          <FormBuilder {...i} key={k} />
        ))}
      </React.Fragment>
    );
  }
}
