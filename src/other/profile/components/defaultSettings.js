import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "10px 0",
    backgroundColor: theme.palette.background.paper,
    padding: "5px 10px"
  }
});

const options = {
  theme: false
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
  }
];
const DefaultSettings = ({ classes }) => {
  const [checked, setChecked] = React.useState(options);

  const handleToggle = value => () => {
    let newOpt = checked;
    newOpt[value] = !checked[value];
    setChecked(newOpt);
    localStorage.setItem("config", newOpt);
  };

  return (
    <Fragment>
      <List subheader={<ListSubheader>Ayarlar</ListSubheader>} className={classes.root}>
        {optionItemData.map((i, k) => (
          <Fragment>
            <Item {...i} handleToggle={handleToggle} checked={checked[i.name]} key={k} />
            <Divider />
          </Fragment>
        ))}
      </List>
      <Divider />
    </Fragment>
  );
};
const Item = ({ icon, label, name, handleToggle, checked }) => (
  <ListItem>
    <ListItemIcon>
      <Icon name={icon} />
    </ListItemIcon>
    <ListItemText primary={label} />
    <ListItemSecondaryAction>
      <Switch onChange={handleToggle(name)} checked={checked} />
    </ListItemSecondaryAction>
  </ListItem>
);
const Icon = ({ name }) => <i className='material-icons'>{name}</i>;

export default withStyles(styles)(DefaultSettings);
