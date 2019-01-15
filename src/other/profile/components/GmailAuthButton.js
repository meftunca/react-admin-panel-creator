import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import GmailAuthDialog from "./gmailAuthDialog";
import { Link } from "react-router-dom";

const styles = theme => ({
  img: {
    marginRight: theme.spacing.unit,
    width: 32
  }
});
const location = process.env.NODE_ENV === "development" ? window.location.origin + ":3001" : "";
const GoogleApiLink = props => <Link to='/api-yonetimi' {...props} />;

class GmailAuthButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      token: false,
      open: false,
      googleApi: localStorage.getItem("googleApi"),
      url: "",
      redirect: false
    };
  }
  componentDidMount() {
    this.controller();
  }

  controller = () => {
    const { auth, token, googleApi, url } = this.state;
    console.log("googleApi", googleApi);

    if (url != "") {
      this.setState({ open: true, redirect: false });
    } else {
      this.setState({ redirect: true });
    }
    if (auth) return;
    this.getAuth();
  };
  authQuery = () => {
    Axios.post(location + "/google/gmail/auth-query").then(({ data }) => {
      console.log(data);
      if (data.status || data.token != "") {
        this.setState({
          auth: false,
          url: data.url,
          redirect: false
        });
      } else {
        this.setState({
          redirect: true
        });
      }
    });
  };
  getAuth = () => {
    Axios.post(location + "/google/gmail/auth").then(({ data }) => {
      console.log(data);
      if (data.status == false) {
        localStorage.removeItem("googleApi");
      } else {
        if (data.token) {
          localStorage.setItem("gg", "true");
          alert("İşlem zaten başarılı.Yeniden bağlanmamıza gerek yok.");
        } else {
          this.setState({ url: data.url, open: true, auth: true });
        }
      }
    });
  };
  setToken = code => {
    Axios.post(location + "/google/gmail/set-token", { code: code }).then(({ data }) => {
      console.log(data);
      if (data.status) {
        this.setState({ open: false });
        alert("İşlem başarılı");
        localStorage.setItem("gg", "true");
        axios.post(this.location + "/google-api-save");
      }
    });
  };
  modalClose = () => this.setState({ open: false });
  render() {
    const { classes } = this.props;
    const { url, open, auth, redirect } = this.state;
    const linkProps = redirect ? { component: GoogleApiLink } : {};
    console.log(this.state);
    return (
      <Fragment>
        <Button size='large' color='primary' fullWidth onClick={this.controller} {...linkProps}>
          <img
            className={classes.img}
            src='https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-128.png'
            alt='Google Logo'
          />
          {redirect
            ? "Api bağlantısı için bilgiler eksik,Linke tıklayarak güncel bilgileri giriniz."
            : auth
            ? "Giriş Yapıldı"
            : "Google İle Giriş Yap"}
        </Button>
        {auth == false && (
          <GmailAuthDialog
            accessToken={this.setToken}
            link={url}
            open={url != "" ? open : false}
            close={this.modalClose}
          />
        )}
      </Fragment>
    );
  }
}
GmailAuthButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GmailAuthButton);
