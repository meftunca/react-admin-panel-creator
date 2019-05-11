import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Divider,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Icon,
  makeStyles,
  Grid,
  Button,
  TextField
} from "@material-ui/core";
import { getToken } from "./../../../firebase-sw";
const styles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(4)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  column: {
    flexBasis: "33.33%"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "96%"
  }
}));
const auth =
  "AAAAdH2nreI:APA91bGdR0FwLCn1oFCY5gik_2022c7OXZStZZfp6LSnJkEekPzRGMTP5oaUmm3Xsp9-kG_YZggSUQJzOIGX6INSqRNfC5QuvmlyFtp64uNOE6j-GtlvLU5tviFphQY0fNjQoWh4O5Wx";

export default () => {
  const [token, setToken] = useState(null);
  const classes = styles();
  useEffect(() => {
    getTokenFunc();
  }, []);
  const getTokenFunc = async () =>
    await getToken().then(token => setToken(token));

  return token === null ? (
    <a />
  ) : (
    <Paper elevation={3} className={classes.paper}>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="space-between"
      >
        <Typography variant="h6" gutterBottom={true}>
          Bildirim Yönetim Merkezi
        </Typography>
        <Button
          onClick={async () => {
            await axios.post("/push-notification", {
              message: { noResult: true }
            });

            // await axios.post(
            //   // "https://fcm.googleapis.com/fcm/send",
            //   "https://fcm.googleapis.com/v1/projects/reactadmincreato-1546907424931/messages:send",
            //   {
            //     notification: {
            //       title: "Firebase",
            //       body: "Firebase is awesome",
            //       click_action: "http://localhost:3000/",
            //       icon: "http://url-to-an-icon/icon.png"
            //     },
            //     token:
            //       "AAAAdH2nreI:APA91bGdR0FwLCn1oFCY5gik_2022c7OXZStZZfp6LSnJkEekPzRGMTP5oaUmm3Xsp9-kG_YZggSUQJzOIGX6INSqRNfC5QuvmlyFtp64uNOE6j-GtlvLU5tviFphQY0fNjQoWh4O5Wx"
            //   },
            //   {
            //     headers: {
            //       "Content-Type": "application/json",
            //       Authorization: `key=AAAAdH2nreI:APA91bGdR0FwLCn1oFCY5gik_2022c7OXZStZZfp6LSnJkEekPzRGMTP5oaUmm3Xsp9-kG_YZggSUQJzOIGX6INSqRNfC5QuvmlyFtp64uNOE6j-GtlvLU5tviFphQY0fNjQoWh4O5Wx`
            //     }
            //   }
            // );
          }}
        >
          Bildirim İznini Kontrol Et
        </Button>
      </Grid>
      <Divider />
      <br />

      <Collapse
        title="Web Bildirim"
        Body={props => <WebNotify {...props} />}
        token={token}
      />
      <Divider />
      <Collapse
        title="Mobil Bildirim"
        Body={props => <WebNotify {...props} />}
        token={
          "eNmNe-PDmRc:APA91bGeklvNgviaPku6x6_h6Ymh-Ya6wlZuZRfLFlbBoCe5WUQqQjta2DRH003PIiFfVRV8pKYEZeXKqbKSpSWIu1IvslQCD14JaGcTcvZN2kx84uwB0I1QwYyB8yNukFbHalsJpUEI"
        }
      />
    </Paper>
  );
};

const Collapse = ({ title, Body, token }) => {
  const classes = styles();
  const submitData = data => {
    console.log("data", data);
    postNotify(data, auth);
  };
  return (
    <ExpansionPanel elevation={0}>
      <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
        <div className={classes.column}>
          <Typography className={classes.heading}>{title}</Typography>
        </div>
        <div className={classes.column}>
          <Typography variant="caption" className={classes.subHeading}>
            {title}
          </Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {Body ? Body({ token, submitData }) : "Bu alan daha tamamlanmadı."}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const WebNotify = ({ submitData, token }) => {
  const [state, setState] = useState({ ...defaultState, to: token });
  const classes = styles();
  return (
    <Grid container>
      <Grid item md={12} sm={12}>
        <TextField
          required
          variant="filled"
          id="notify-title"
          label="Bildirim Başlığı"
          value={state.notification !== null ? state.notification.title : ""}
          className={classes.textField}
          onChange={({ target }) =>
            setState({
              ...state,
              notification: { ...state.notification, title: target.value }
            })
          }
          margin="normal"
        />
      </Grid>
      <Grid item md={12} sm={12}>
        <TextField
          required
          id="notify-title"
          variant="filled"
          multiline={true}
          rows={2}
          rowsMax={4}
          label="Bildirim içeriği"
          value={state.notification !== null ? state.notification.body : ""}
          className={classes.textField}
          onChange={({ target }) =>
            setState({
              ...state,
              notification: { ...state.notification, body: target.value }
            })
          }
          margin="normal"
        />
      </Grid>

      <Grid container justify="flex-end">
        <Button
          disabled={
            state.notification.title === "" || state.notification.body === ""
          }
          color="primary"
          onClick={() => {
            submitData(state);
            setState(defaultState);
          }}
        >
          Bildrimi Tamamla ve gönder
        </Button>
      </Grid>
    </Grid>
  );
};

const defaultState = {
  notification: {
    title: "",
    body: "",
    icon:
      "https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/f80f18a9-1a59-4da4-93b5-292d79f13ed3/2091008185/lock-screen-notifications-ios-13-icon.png",
    click_action: window.location.origin
  },
  to: null,
  data: {}
};

const postNotify = data => {
  return axios.post("/push-notification", { message: data });
};
