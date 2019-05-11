import React, { Fragment } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { observer, inject } from "mobx-react";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    paddingLeft: 5,
    paddingRight: 5
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    //   width: 64,
    marginRight: theme.spacing(8),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "100%"
    }
  },
  searchIcon: {
    marginLeft: theme.spacing(1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(6),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});
@inject("store")
@observer
class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      user: {},
      show: false
    };
  }
  componentDidMount() {
    this.setState({
      show: true,
      user: JSON.parse(localStorage.getItem("data"))
    });
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl, show, user } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Icon name="mail" />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <Icon name="notifications" />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem
          onClick={() => {
            this.setState({ anchorEl: null });
            this.props.store.update_profileDrawer(true);
          }}
        >
          <Button
            aria-owns={isMenuOpen ? "material-appbar" : undefined}
            aria-haspopup="true"
            color="inherit"
          >
            <Icon name="account_circle" />

            <Typography
              className={classes.title}
              variant="caption"
              color="inherit"
              noWrap
            >
              {user.name}
            </Typography>
          </Button>
        </MenuItem>
      </Menu>
    );
    if (show == false) return <a />;
    return (
      <Fragment>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Icon name="search" />
          </div>
          <InputBase
            placeholder="Arama Kutusu"
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Icon name="mail" />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={17} color="secondary">
              <Icon name="notifications" />
            </Badge>
          </IconButton>
          <Button
            aria-owns={isMenuOpen ? "material-appbar" : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={() => {
              this.setState({ anchorEl: null });
            }}
          >
            <Icon name="account_circle" />

            <Typography
              className={classes.title}
              variant="caption"
              color="inherit"
              noWrap
            >
              {user.name}
            </Typography>
          </Button>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-haspopup="true"
            onClick={this.handleMobileMenuOpen}
            color="inherit"
          >
            <Icon name="more" />
          </IconButton>
        </div>
        {renderMobileMenu}
      </Fragment>
    );
  }
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};
const Icon = ({ name }) => <i className="material-icons">{name}</i>;
export default withStyles(styles)(AppBar);
