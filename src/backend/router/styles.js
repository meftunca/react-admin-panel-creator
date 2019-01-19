const drawerWidth = 300;
export default theme => ({
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
    }),
    maxHeight: 64
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
