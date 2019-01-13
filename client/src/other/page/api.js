import React, { Component } from "react";
import FormBuilder from "./../../components/forms/builder";
import Divider from "@material-ui/core/Divider";
const Api = require("./../../json/apiForm.json");
export default class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {Object.values(Api).map((i, k) => (
          <React.Fragment key={k}>
            <FormBuilder {...i} />
            <Hr />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}
const Hr = () => (
  <div style={{ margin: "15px 0" }}>
    <Divider />
    <br />
    <Divider />
  </div>
);
