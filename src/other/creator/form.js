import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
export default class Form extends Component {
  state = {};
  render() {
    const classes = useStyles();
    return <Text />;
  }
}

const Text = () => {
  const classes = useStyles();

  return (
    <TextField
      id='outlined-name'
      label='Name'
      className={classes.textField}
      value={values.name}
      onChange={handleChange("name")}
      margin='normal'
      variant='outlined'
    />
  );
};
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
}));
