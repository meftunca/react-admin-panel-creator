import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Axios from "axios";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  error: {
    padding: "20px 10px",
    margin: "12px 0",
    color: "white",
    backgroundColor: "#f44336"
  },
  warning: {
    padding: "20px 10px",
    margin: "12px 0",
    color: "white",
    backgroundColor: "#ff9800"
  },
  success: {
    padding: "20px 10px",
    margin: "12px 0",
    color: "white",
    backgroundColor: "#4caf50"
  }
});

function Register({ store, classes }) {
  const ref = React.createRef();
  const [token, setToken] = useState(false);
  const [turnData, setTurnData] = useState({});
  const submit = () => {
    const form = new FormData(ref.current);
    let data = {};
    form.append("token", Boolean(token));
    for (let [k, v] of form.entries()) {
      console.log(k, v);
      data[k] = v;
    }
    Axios.post(window.location.origin + ":8000/user-register", data)
      .then(async ({ data }) => {
        setTurnData(data.data);
        // store update
        if (data.status == "success") {
          await store.update_userData(data.data);
          await store.update_login(true);
          await store.update_registerPage(false);
          let userData = JSON.stringify(data.data);
          await localStorage.setItem("data", userData);
        }
      })
      .catch(e => console.log(e));
  };
  return (
    <main className={classes.main}>
      <CssBaseline />
      {turnData != {} && (
        <Fragment>
          <Typography variant='title' align='center' gutterBottom className={classes[turnData.status]}>
            {turnData.message}
          </Typography>
        </Fragment>
      )}
      <form className={classes.form} ref={ref} id='register'>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='userName'> Kullanıcı adı</InputLabel>
          <Input id='userName' name='userName' autoFocus />
        </FormControl>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='eMail'>Email Adresiniz</InputLabel>
          <Input id='eMail' name='eMail' autoFocus />
        </FormControl>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='name'>Adınız</InputLabel>
          <Input id='name' name='name' autoFocus />
        </FormControl>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='lastName'>SoyAdınız</InputLabel>
          <Input id='lastName' name='lastName' autoFocus />
        </FormControl>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='password'>Şifre</InputLabel>
          <Input name='password' type='password' id='password' autoComplete='current-password' />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value={String(token)} onChange={() => setToken(!String(token))} color='primary' />}
          label='Beni Hatırla'
        />
        <Button onClick={submit} fullWidth variant='contained' color='primary' className={classes.submit}>
          Sign in
        </Button>
      </form>
    </main>
  );
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
