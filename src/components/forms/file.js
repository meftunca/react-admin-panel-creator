import React, { useState, Fragment } from "react";
import { TextField, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing(2)
  }
}));
export default ({ onChange, defaultValue, label, ref, error }) => {
  const [value, setValue] = useState("");
  const classes = useStyles();
  let fileRef = null;
  const handleBrowse = e => {
    e.preventDefault();
    fileRef.click();
    e.preventDefault();
  };

  const onFileSelected = e => {
    const file = e.dataTransfer
      ? e.dataTransfer.files[0]
      : e.currentTarget.files[0];
    console.log("file", file);
    const form = new FormData();
    form.append("file", file);
    axios
      .post("/file-upload", form, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(({ data }) => {
        setValue(data.filename);
        onChange(data.filename);
      });
  };
  return (
    <Fragment>
      <TextField
        inputRef={ref}
        defaultValue={defaultValue}
        type="hidden"
        value={value}
      />
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        size="large"
        className={classes.button}
        onClick={handleBrowse}
      >
        <Icon className={classes.leftIcon}>cloud</Icon>
        dosya yükle
      </Button>
      <input
        type="file"
        ref={ref => (fileRef = ref)}
        hidden={true}
        onChange={onFileSelected}
      />
    </Fragment>
  );
};
