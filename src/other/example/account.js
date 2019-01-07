import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import loadable from "@loadable/component";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import { inject, observer } from "mobx-react";
const Item = [
  {
    Component: loadable(() => import("./login"))
  },
  {
    Component: loadable(() => import("./register"))
  },
  {
    Component: loadable(() => import("./rememberMe"))
  }
];
@inject("store")
@observer
export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
  }
  render() {
    const { store } = this.props;
    return (
      <Grid container direction='row' justify='center' alignItems='center' spacing={32}>
        <TabBar store={store} />
      </Grid>
    );
  }
}
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    minHeight: 530,
    maxWidth: 530,
    padding: 15
  },
  padding: {
    padding: "20px 15px"
  },
  transparent: {
    backgroundColor: "transparent",
    boxShadow: "none"
  }
}));

function TabBar({ store }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <Paper className={classes.root}>
      <AppBar position='static' color='default' className={classes.transparent}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'>
          <Tab label='Giriş yap' icon={<Icon name='account_circle' />} />
          <Tab label='Kayıt Ol' icon={<Icon name='person_add' />} />
          <Tab label='Yardım' icon={<Icon name='vpn_key' />} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {Item.map((i, k) => (
          <div className={classes.padding} key={k}>
            <ShowPage store={store} {...i} />
          </div>
        ))}
      </SwipeableViews>
    </Paper>
  );
}
const ShowPage = ({ store, Component }) => <Component store={store} />;
const Icon = ({ name }) => <i className='material-icons'>{name}</i>;
