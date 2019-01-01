import React, { useState } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
const uniqid = require("uniqid");
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  margin: {
    margin: theme.spacing.unit
  },
  fullWidth:{width:"100%"},
    labelFix:{
        position:"relative",
        bottom:7
    },
    labelFixIcon: {
        position: "relative",
        bottom: 4
    }
});

const TextInput = withStyles(styles)(({ onChange, defaultValue, label, icon, type, ref, classes }) => {
  defaultValue = defaultValue != undefined ? defaultValue : "";
  const [data, setData] = useState(defaultValue);
  let labelId = uniqid()
  return (
    <div className={(classes.margin)}>
          <FormControl fullWidth>
              <InputLabel htmlFor={labelId}>{label}</InputLabel>
              <Input
                  id={labelId}
                  inputRef={ref}
                   label={label}
                  type={type}
                  value={data}
                  onChange={({ target }) => {
                      setData(target.value);
                      onChange(target.value);
                  }}
                  startAdornment={<InputAdornment position="start"><Icon name={icon} /></InputAdornment>}
              />
    </FormControl>
    </div>
  );
});

const PasswordInput = withStyles(styles)(({ onChange, defaultValue, label, icon, type, ref,classes }) => {
  defaultValue = defaultValue != undefined ? defaultValue : "";
  const [data, setData] = useState(defaultValue);
  const [hidden, setHidden] = useState(true);
  return (
    <FormControl className={classNames(classes.margin, classes.textField)}>
      <InputLabel htmlFor="adornment-password">
              <span className={classes.labelFixIcon}> <Icon name={icon} /></span>
              <span className={classes.labelFix}>{label.toLocaleUpperCase()}</span>
      </InputLabel>
      <Input
        inputRef={ref}
        id="adornment-password"
        type={!hidden ? "text" : "password"}
        value={data}
        onChange={({ target }) => {
          setData(target.value);
          onChange(target.value);
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="Toggle password visibility" onClick={() => setHidden(!hidden)}>
              {!hidden ? <Icon name="visibility" /> : <Icon name="visibility_off" />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

const Icon = ({ name }) => <i className="material-icons">{name}</i>;

export  { PasswordInput, TextInput};

