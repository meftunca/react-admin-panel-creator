import React, { Fragment, useState, useEffect } from "react";

import {
  Divider,
  Fade,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Switch,
  withStyles
} from "@material-ui/core";

// import FacebookLogin from "react-facebook-login";
import GmailAuthButton from "./modules/GmailAuthButton";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "10px 0",
    backgroundColor: theme.palette.background.paper,
    padding: "5px 10px"
  }
});

const options = {
  twitter: false,
  facebook: false,
  firebase: false,
  gmail: false,
  google: false,
  socket: false,
  restApi: false
};
const optionItemData = [
  {
    name: "twitter",
    icon: "https://img.icons8.com/color/384/twitter.png",
    label: "Twitter"
  },
  {
    name: "facebook",
    icon: "https://img.icons8.com/color/384/facebook.png",
    label: "Facebook"
  },
  {
    name: "google",
    icon: "https://img.icons8.com/color/384/google.png",
    label: "Google"
  },
  {
    name: "gmail",
    icon: "https://img.icons8.com/color/384/gmail.png",
    label: "Gmail"
  },
  {
    name: "firebase",
    icon: "https://img.icons8.com/color/384/firebase.png",
    label: "Firebase"
  },
  {
    name: "socket",
    icon: "https://img.icons8.com/nolan/384/electrical.png",
    label: "Socket.io"
  },
  {
    name: "api",
    icon: "https://img.icons8.com/dusk/384/api-settings.png",
    label: "Rest Api"
  }
];

const Modules = ({ classes, onChangedSettings }) => {
  const [checked, setChecked] = useState(options);
  const [updateCount, setUpdateCount] = useState(0);
  const handleSwitchToggle = name => {
    let newOpt = checked;
    newOpt[name] = !checked[name];
    setChecked(newOpt);
    setUpdateCount(updateCount + 1);
    console.log("value :", checked[name], checked);
    // onChangedSettings("ui_controller", newOpt);
  };
  const responseFacebook = response => {
    console.log(response);
  };
  useEffect(() => {
    console.log("güncellendi ");
  }, updateCount);
  return (
    <Fragment>
      <List
        subheader={<ListSubheader>Modüller</ListSubheader>}
        className={classes.root}
      >
        {optionItemData.map((i, k) => (
          <Fragment key={k}>
            <Divider />
            <SettingsSwitch
              {...i}
              handleToggle={handleSwitchToggle}
              checked={checked[i.name]}
            />
          </Fragment>
        ))}

        {/* <ListItem>
          <ListItemText
            primary={
              <FacebookLogin
                appId="865826513748889"
                autoLoad={true}
                fields="public_profile,email"
                scope="public_profile,user_friends,user_actions.books"
                callback={responseFacebook}
              />
            }
          />
        </ListItem> */}

        <Collapse
          in={checked["google"] || checked["gmail"]}
          timeout="auto"
          unmountOnExit
        >
          <ListItem>
            <ListItemText primary={<GmailAuthButton />} />
          </ListItem>
        </Collapse>
      </List>
      <Divider />
    </Fragment>
  );
};
const SettingsSwitch = ({ icon, label, name, handleToggle, checked }) => (
  <ListItem>
    <ListItemIcon>
      {/* <Icon name={icon} /> */}
      <img src={icon} width={32} height={32} />
    </ListItemIcon>
    <ListItemText primary={label} />
    <ListItemSecondaryAction>
      <Switch onChange={() => handleToggle(name)} />
    </ListItemSecondaryAction>
  </ListItem>
);
const Icon = ({ name }) => <i className="material-icons">{name}</i>;

export default withStyles(styles)(Modules);
