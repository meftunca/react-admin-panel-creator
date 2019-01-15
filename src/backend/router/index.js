import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { BrowserRouter, Link, Route, Redirect } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { observer, inject } from "mobx-react";
import loadable from "@loadable/component";
import Spinner from "react-spinkit";
import TabViewer from "../../components/tabViewer";
import ChartBuilder from "../../components/chart/builder";
import { LocalizeProvider } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import Account from "../../other/example/account";
import ProfileTabDrawer from "../../other/profile/tabDrawer";

const formTableData = require("./../../json/form").forms;
const chartData = require("./../../json/chart");
const otherPage = require("./../../json/otherPage");
const appBar = require("./../../json/appBar");
const drawerWidth = 300;
const styles = theme => ({
  root: {
    display: "flex"
  },
  bg: {
    backgroundColor: "#f9f9f9",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    marginLeft: 24,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  sectionDesktop: {
    display: "none"
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    backgroundImage: "url('/adminImage.png')",
    "&:after": {
      content: "''",
      position: "absolute",
      opacity: ".8",
      background: "#000",
      height: "100%",
      width: drawerWidth,
      top: 0,
      left: 0,
      bottom: 0
    },
    "& *": {
      color: "#fff",
      zIndex: 9
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    border: "none"
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});
@inject("store")
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.props.initialize({
      languages: [{ name: "English", code: "en" }, { name: "Turkish", code: "tr" }],
      translation: loadable(() => import("./../../json/translation.json")),
      options: { renderToStaticMarkup, renderInnerHtml: true, defaultLanguage: "tr" }
    });
  }
  componentDidMount() {}
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme, store } = this.props;
    const { pathname } = window.location;
    const { open } = this.state;
    return (
      <div className={store.login == false || store.registerPage == true ? classes.bg : classes.root}>
        <BrowserRouter>
          <Fragment>
            <CssBaseline />
            {store.login == false || store.registerPage == true ? (
              <Fragment>
                {pathname.includes("/example") || pathname.includes("/account") || pathname == "/" ? (
                  <Account />
                ) : (
                  <Redirect to='/' />
                )}
              </Fragment>
            ) : (
              <Fragment>
                <AppBar position='fixed' className={classNames(classes.appBar, { [classes.appBarShift]: open })}>
                  <Toolbar disableGutters={!open}>
                    <IconButton
                      color='inherit'
                      aria-label='Open drawer'
                      onClick={this.handleDrawerOpen}
                      className={classNames(classes.menuButton, open && classes.hide)}>
                      <Icon name='menu' />
                    </IconButton>
                    <AppBarCompenent />
                  </Toolbar>
                </AppBar>
                <Drawer
                  open={open}
                  variant='permanent'
                  className={classNames(classes.drawer, {
                    [classes.drawerOpen]: this.state.open,
                    [classes.drawerClose]: !this.state.open
                  })}
                  classes={{
                    paper: classNames(classes.drawerPaper, {
                      [classes.drawerOpen]: this.state.open,
                      [classes.drawerClose]: !this.state.open
                    })
                  }}>
                  <div className={classes.toolbar}>
                    <Typography className={classNames(classes.title)} variant='h6' color='inherit' noWrap>
                      Beta testleri
                    </Typography>
                    <IconButton onClick={this.handleDrawerClose}>
                      {theme.direction === "ltr" ? <Icon name='chevron_left' /> : <Icon name='chevron_right' />}
                    </IconButton>
                  </div>
                  <Divider />
                  <List>
                    {/* {chartData.map((i, k) => (
                  <ListItemCom to={i.route.path} icon={i.header.icon} title={i.title} key={k} />
                ))} */}
                    {otherPage.map((i, k) => (
                      <Fragment key={k}>
                        {i.type == "collapse" ? (
                          <MobileCollapse
                            opens={open}
                            title={i.header.label}
                            icon={i.header.icon}
                            defaultOpen={false}
                            collapse={i.collapseItem}
                          />
                        ) : (
                          <ListItemCom to={i.route.path} icon={i.header.icon} title={i.header.label} />
                        )}
                      </Fragment>
                    ))}
                    <Divider />
                    <MobileCollapse
                      opens={open}
                      title='Veri Grafikleri'
                      icon='bubble_chart'
                      defaultOpen={false}
                      collapse={chartData}
                    />
                    <Divider />
                    <MobileCollapse
                      opens={open}
                      title='Form Ve Tablolar'
                      icon='table_chart'
                      defaultOpen={false}
                      collapse={formTableData}
                    />
                    <ListItem button onClick={() => this.props.store.logout()}>
                      <ListItemIcon>{<Icon name='exit_to_app' />}</ListItemIcon>
                      <ListItemText primary={"Çıkış Yap"} />
                    </ListItem>
                  </List>
                  <Divider />
                </Drawer>
                <main className={classNames(classes.content, { [classes.contentShift]: !open })}>
                  <div className={classes.toolbar} />
                  {otherPage.map((i, k) => (
                    <Fragment key={k}>
                      {i.type == "collapse" ? (
                        <Fragment>
                          {i.collapseItem.map((item, key) => (
                            <ParserOtherRoute {...item.route} key={key} />
                          ))}
                        </Fragment>
                      ) : (
                        <ParserOtherRoute {...i.route} />
                      )}
                    </Fragment>
                  ))}
                  {chartData.map((i, k) => (
                    <ParserChartRoute path={i.route.path} exact={i.route.exact} data={i} key={k} />
                  ))}
                  {formTableData.map((i, k) => (
                    <ParserTabViewerRoute path={i.route.path} exact={i.route.exact} data={i} key={k} />
                  ))}
                  <ProfileTabDrawer />
                </main>
              </Fragment>
            )}
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const Icon = ({ name }) => <i className='material-icons'>{name}</i>;

const ListItemCom = ({ to, icon, title }) => (
  <Link to={to}>
    <ListItem button>
      <ListItemIcon>{icon != "" && icon != undefined && <Icon name={icon} />}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  </Link>
);
const MobileCollapse = ({ title, icon, collapse, opens, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen != undefined ? defaultOpen : false);
  return (
    <Fragment>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <Icon name={icon} />
        </ListItemIcon>
        <ListItemText inset primary={title} />
        {opens && (
          <ListItemSecondaryAction>
            <IconButton onClick={() => setOpen(!open)}>
              <Icon name={!open ? "expand_more" : "expand_less"} />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding style={{ padding: "5px 10px" }}>
          {collapse.map((i, k) => (
            <ListItemCom to={i.route.path} icon={i.header.icon} title={i.title} key={k} />
          ))}
        </List>
      </Collapse>
    </Fragment>
  );
};

const AppBarCompenent = () => {
  const BarComponent = loadable(() => import("./../../" + appBar[0].componentName));
  return (
    <BarComponent
      fallback={
        <div className='loaderScreen hard'>
          <Spinner name='line-scale-pulse-out' color='fuchsia' />
        </div>
      }
    />
  );
};

const ParserOtherRoute = ({ exact, path, componentName }) => {
  const OtherComponent = loadable(() => import("./../../other/" + componentName));
  return <Route exact={exact != undefined && Boolean(exact)} path={path} render={() => <OtherComponent />} />;
};

const ParserChartRoute = ({ exact, path, data }) => {
  return <Route exact={exact != undefined && Boolean(exact)} path={path} render={() => <ChartBuilder data={data} />} />;
};
const ParserTabViewerRoute = ({ path, exact, data }) => (
  <Route exact={Boolean(exact)} path={path} render={() => <TabViewer data={data} />} />
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const ConstructorApp = withLocalize(props => (
  <LocalizeProvider>
    <App {...props} />
  </LocalizeProvider>
));

export default withStyles(styles, { withTheme: true })(ConstructorApp);
