import React, { Fragment } from "react";

import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Switch,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "10px 0",
    backgroundColor: theme.palette.background.paper,
    padding: "5px 10px"
  }
});

const options = {
  theme: false,
  direction: false
};
const optionItemData = [
  {
    name: "theme",
    icon: "invert_colors",
    label: "Koyu/Açık Temalar"
  },
  {
    name: "direction",
    icon: "directions",
    label: "RTL yada LTR"
  },
  {
    name: "notification",
    icon: "notifications",
    label: "Bildirimler"
  },
  {
    name: "inAppMessages",
    icon: "chat",
    label: "Proje İçi Mesajlaşma"
  },
  {
    name: "todoList",
    icon: "list",
    label: "Yapılacaklar Listesi"
  },
  {
    name: "stats",
    icon: "bar_chart",
    label: "Veri İstatistiği"
  }
];

const UIController = ({ classes, onChangedSettings }) => {
  const [checked, setChecked] = React.useState(options);

  const handleSwitchToggle = name => {
    let newOpt = checked;
    newOpt[name] = !checked[name];
    setChecked(newOpt);
    console.log("value :", checked[name], checked);
    onChangedSettings("ui_controller", newOpt);
  };

  return (
    <Fragment>
      <List
        subheader={<ListSubheader>Arayüz Ayarları</ListSubheader>}
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
      </List>
      <Divider />
    </Fragment>
  );
};
const SettingsSwitch = ({ icon, label, name, handleToggle, checked }) => (
  <ListItem>
    <ListItemIcon>
      <Icon name={icon} />
    </ListItemIcon>
    <ListItemText primary={label} />
    <ListItemSecondaryAction>
      <Switch onChange={() => handleToggle(name)} />
    </ListItemSecondaryAction>
  </ListItem>
);
const Icon = ({ name }) => <i className="material-icons">{name}</i>;

export default withStyles(styles)(UIController);
