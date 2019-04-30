import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { LinkList } from "./list"
import { Link, Redirect } from "react-router-dom"
import Button from "@material-ui/core/Button"
import Collapse from "@material-ui/core/Collapse"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { observer, inject } from "mobx-react"
const drawerWidth = 240

const styles = (theme) => ({
    root: {
        display: "flex"
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
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
            margin: "0 12px"
        }
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
})
@inject("store")
@observer
class PersistentDrawerLeft extends React.Component {
    state = {
        open: false
    }

    handleDrawerOpen = () => {
        this.setState({ open: true })
    }

    handleDrawerClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { classes, theme } = this.props
        const { open } = this.state
        console.log(this.props)
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}>
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}>
                            <Icon name='menu' />
                        </IconButton>
                        <Typography className={classNames(classes.title)} variant='h6' color='inherit' noWrap>
                            Beta testleri
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            {LinkList.map((i, k) => (i.collapse != undefined ? <Dropdown {...i} key={k} /> : <MenuButton {...i} key={k} />))}
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='left'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === "ltr" ? <Icon name='chevron_left' /> : <Icon name='chevron_right' />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{LinkList.map((i, k) => (i.collapse != undefined ? <MobileCollapse {...i} key={k} /> : <ListItemCom {...i} key={k} />))}</List>
                    <Divider />
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open
                    })}>
                    <div className={classes.drawerHeader} />
                </main>
            </div>
        )
    }
}
const Icon = ({ name }) => <i className='material-icons mr-3'>{name}</i>

const ListItemCom = ({ to, icon, title }) => (
    <Link to={to}>
        <ListItem button>
            <ListItemIcon>{icon != "" && icon != undefined && <Icon name={icon} />}</ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    </Link>
)
const MenuButton = ({ to, icon, title }) => (
    <Button color='inherit' component={Link} to={to}>
        {icon != "" && icon != undefined && <Icon>{icon}</Icon>}
        {title}
    </Button>
)

const MobileCollapse = ({ to, title, icon, collapse }) => {
    const [open, setOpen] = useState(false)
    const [redirect, setRedirect] = useState(false)
    return (
        <Fragment>
            {redirect && <Redirect to={to} />}
            <ListItem button>
                <ListItemIcon>
                    <Icon name={icon} />
                </ListItemIcon>
                <ListItemText inset primary={title} onClick={() => setRedirect(!redirect)} />
                <ListItemSecondaryAction>
                    <IconButton onClick={() => setOpen(!open)}>
                        <Icon name={!open ? "expand_more" : "expand_less"} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding style={{ padding: "0 10px" }}>
                    {collapse.map((i, k) => (
                        <ListItemCom {...i} key={k} />
                    ))}
                </List>
            </Collapse>
        </Fragment>
    )
}
const Dropdown = ({ to, title, icon, collapse }) => {
    const [open, setOpen] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [redirectUrl, setRedirectUrl] = useState("")
    const [anchorEl, setAnchorEl] = useState(null)
    let d = new Date()
    return (
        <div>
            {redirect && redirectUrl != "" && <Redirect to={redirectUrl} />}
            <Button
                color='inherit'
                aria-owns={anchorEl}
                aria-haspopup='true'
                onClick={(event) => {
                    setAnchorEl(event.currentTarget)
                    setOpen(!open)
                }}>
                <Icon name={icon} />
                {title}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(open)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                onClose={() => setOpen(!open)}>
                {collapse.map(({ to, icon, title }, k) => (
                    <MenuItem
                        onClick={() => {
                            setOpen(!open)
                            setRedirect(true)
                            setRedirectUrl(to)
                        }}
                        key={k}>
                        <Icon name={icon} />
                        {title}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}
PersistentDrawerLeft.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}
export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft)
