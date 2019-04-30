import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import {
    withStyles,
    Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core"
import { BrowserRouter, Link, Route, Redirect } from "react-router-dom"
import { observer, inject } from "mobx-react"
import loadable from "@loadable/component"
// import TabViewer from "../../components/tabViewer";
import FormBuilder from "../../components/forms/builder"
import TableBuilder from "../../components/table/builder"
import ChartBuilder from "../../components/chart/builder"
import { LocalizeProvider } from "react-localize-redux"
import { withLocalize } from "react-localize-redux"
import Account from "../../other/main/account"
import ProfileTabDrawer from "../../other/profile/tabDrawer"
import MobileCollapse from "./component/MobileCollapse"
import styles from "./styles"
import Axios from "axios"

@inject("store")
@observer
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            show: false
        }
    }
    componentDidMount() {
        this.get()
    }

    async get() {
        await this.props.store.construct()
        if (this.props.store.login == true) {
            Axios.all([
                Axios.post("/get-form-json"),
                Axios.get("/json/chart.json"),
                Axios.get("/json/otherPage.json"),
                Axios.get("/json/appBar.json"),
                Axios.get("/json/translation.json")
            ]).then(
                Axios.spread((form, chart, otherPage, appBar, translations) => {
                    // Both requests are now complete
                    //   console.log("form, chart,otherPage,appBar,translations :", form.data, chart.data, otherPage.data, appBar.data, translations.data)
                    this.formTableData = form.data
                    this.chartData = chart.data
                    this.otherPage = otherPage.data
                    this.appBar = appBar.data
                    this.translation = translations.data
                    this.setState({ show: true })
                })
            )
        }
    }
    handleDrawerOpen = () => {
        this.setState({ open: true })
    }

    handleDrawerClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { classes, theme, store } = this.props
        const { open, show } = this.state
        if (show === false)
            return (
                <Fragment>
                    <BrowserRouter>
                        <div className={classes.bg}>{/* <RedirectQuery /> */}</div>
                    </BrowserRouter>
                </Fragment>
            )
        return (
            <div className={classes.root}>
                <BrowserRouter>
                    <Fragment>
                        <CssBaseline />
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
                                    <AppBarCompenent page={this.appBar[0].componentName} />
                                </Toolbar>
                            </AppBar>
                            <Drawer
                                open={open}
                                variant='permanent'
                                className={classNames(classes.drawer, {
                                    [classes.drawerOpen]: open,
                                    [classes.drawerClose]: !open
                                })}
                                classes={{
                                    paper: classNames(classes.drawerPaper, {
                                        [classes.drawerOpen]: open,
                                        [classes.drawerClose]: !open
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
                                    {this.otherPage.map((i, k) => (
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
                                    <MobileCollapse opens={open} title='Veri Grafikleri' icon='bubble_chart' defaultOpen={false} collapse={this.chartData} />
                                    <Divider />
                                    <MobileCollapse
                                        opens={open}
                                        title='Veri Girişi'
                                        icon='text_fields'
                                        defaultOpen={false}
                                        collapse={this.formTableData}
                                        prefix='/forms'
                                    />
                                    <MobileCollapse
                                        opens={open}
                                        title='Tablolar'
                                        icon='table_chart'
                                        defaultOpen={false}
                                        collapse={this.formTableData}
                                        prefix='/table'
                                    />
                                    {/* <MobileCollapse
                              opens={open}
                              title='Form Ve Tablolar'
                              icon='table_chart'
                              defaultOpen={false}
                              collapse={this.formTableData}
                           /> */}
                                    <ListItem button onClick={() => this.props.store.logout()}>
                                        <ListItemIcon>{<Icon name='exit_to_app' />}</ListItemIcon>
                                        <ListItemText primary={"Çıkış Yap"} />
                                    </ListItem>
                                </List>
                                <Divider />
                            </Drawer>
                            <main className={classNames(classes.content, { [classes.contentShift]: !open })}>
                                <div className={classes.toolbar} />
                                {this.otherPage &&
                                    this.otherPage.map((i, k) => (
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
                                {this.chartData &&
                                    this.chartData.map((i, k) => <ParserChartRoute path={i.route.path} exact={i.route.exact} data={i} key={k} />)}

                                {this.formTableData &&
                                    this.formTableData.map((i, k) => (
                                        <Fragment key={k}>
                                            <Route
                                                path={"/forms" + i.route.path}
                                                // exact={i.route.exact}
                                                render={(props) => <FormBuilder data={i} {...props} />}
                                            />
                                            <Route
                                                path={"/forms/edit" + i.route.path + "/:id"}
                                                // exact={i.route.exact}
                                                render={(props) => <FormBuilder data={i} {...props} />}
                                            />
                                            <Route
                                                path={"/table" + i.route.path}
                                                // exact={i.route.exact}
                                                render={() => <TableBuilder data={i} />}
                                            />
                                        </Fragment>
                                    ))}
                                <ProfileTabDrawer />
                            </main>
                        </Fragment>
                        )}
                    </Fragment>
                </BrowserRouter>
            </div>
        )
    }
}

const Icon = ({ name }) => <i className='material-icons'>{name}</i>

const ListItemCom = ({ to, icon, title }) => (
    <Link to={to}>
        <ListItem button>
            <ListItemIcon>{icon != "" && icon != undefined && <Icon name={icon} />}</ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    </Link>
)

const AppBarCompenent = ({ page }) => {
    const BarComponent = loadable(() => import("./../../" + page))

    return <BarComponent />
}

const ParserOtherRoute = ({ exact, path, componentName }) => {
    const OtherComponent = loadable(() => import("./../../other/" + componentName))

    return <Route exact={exact != undefined && Boolean(exact)} path={path} component={OtherComponent} />
}

const ParserChartRoute = ({ exact, path, data }) => {
    const Com = () => <ChartBuilder data={data} />
    return <Route exact={exact != undefined && Boolean(exact)} path={path} component={Com} />
}
const ParserTabViewerRoute = ({ path, exact, data }) => {
    const Com = () => <TabViewer data={data} />

    return <Route exact={Boolean(exact)} path={path} component={Com} />
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

const ConstructorApp = withLocalize((props) => (
    <LocalizeProvider>
        <App {...props} />
    </LocalizeProvider>
))

const RedirectQuery = () => {
    const { pathname } = window.location

    return <Fragment>{pathname.includes("/example") || pathname.includes("/account") || pathname == "/" ? <Account /> : <Redirect to='/' />}</Fragment>
}
export default withStyles(styles, { withTheme: true })(ConstructorApp)
