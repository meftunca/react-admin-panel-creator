import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListSubheader from "@material-ui/core/ListSubheader";
import EmailEditor from "react-email-editor";
import Button from "@material-ui/core/Button";
import FullScreenDialog from "./components/FullScreenDialog";
import axios from "axios";
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing.unit
  },
  rootList: {
    width: "100%"
  },
  inline: {
    display: "inline"
  },
  rootHeader: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginBottom: 25
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  modalWrapper: {
    position: "relative",
    height: "calc(100vh - 64px)",
    padding: 10
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});
const location = process.env.NODE_ENV === "development" ? window.location.origin + ":3001" : "";

class MailBox extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, editor: { data: "" } };
    this.editor = React.createRef();
  }
  handleClose = () => this.setState({ modal: false });
  openEditor = () => {
    this.setState({ modal: true });
  };
  onSave = () => {
    let { editor } = this.state;
    this.editor.current.exportHtml(data => {
      const { design, html } = data;
      editor["data"] = html;
      console.log(design, html);
      this.setState({ editor: data });
    });
  };
  componentDidMount() {
    axios.post(location + "/gmail/get").then(d => console.log(d));
  }

  render() {
    const { AvatarItem, SeconadryAction, ItemText } = MailPreview;
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container className={classes.root}>
          <Grid item xs={12} md={12}>
            <MailHeader classes={classes} />
          </Grid>
        </Grid>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={4} md={3}>
            <Button
              color='primary'
              className={classes.button}
              onClick={() => {
                window.location = ":8000/auth/google/callback";
              }}>
              <Icon className={classes.extendedIcon}>add</Icon> {"Google Giriş Yap"}
            </Button>
            <Button color='secondary' className={classes.button} onClick={this.openEditor}>
              <Icon className={classes.extendedIcon}>add</Icon> {"\tYeni Mail Oluştur"}
            </Button>
            <List>
              {mailContainsProps.map((i, k) => (
                <MailContains {...i} key={k} />
              ))}
            </List>
            <Divider />
            <List subheader={<ListSubheader>Etiketler</ListSubheader>}>
              {mailLabels.map((i, k) => (
                <MailContains {...i} key={k} />
              ))}
            </List>
          </Grid>
          <Grid item xs={8} md={9}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <List className={classes.rootList}>
                  <ListItem alignItems='flex-start' button>
                    <AvatarItem name='Remy Sharp' img='https://material-ui.com/static/images/avatar/1.jpg' />
                    <ItemText
                      primary='Brunch this weekend?'
                      classes={classes}
                      secondaryTitle='Ali Connors'
                      secondaryText=" — I'll be in your neighborhood doing errands this…"
                    />
                    <SeconadryAction reply={() => console.log("reply now")} remove={() => console.log("remove now")} />
                  </ListItem>
                  <Divider />
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <FullScreenDialog open={this.state.modal} handleClose={this.handleClose} save={this.onSave}>
          <div className={classes.modalWrapper}>
            <EmailEditor minHeight={"100vh"} ref={this.editor} />
          </div>
        </FullScreenDialog>
      </Fragment>
    );
  }
}
const MailPreview = {
  AvatarItem: ({ name, img }) => (
    <ListItemAvatar>
      <Avatar alt={name} src={img} />
    </ListItemAvatar>
  ),
  SeconadryAction: ({ reply, remove }) => (
    <ListItemSecondaryAction>
      <IconButton aria-label='Reply' onClick={reply}>
        <Icon>reply</Icon>
      </IconButton>
      <IconButton aria-label='Remove' onClick={remove}>
        <Icon>delete_outline</Icon>
      </IconButton>
    </ListItemSecondaryAction>
  ),
  ItemText: ({ primary, classes, secondaryTitle, secondaryText }) => (
    <ListItemText
      primary={primary}
      secondary={
        <React.Fragment>
          <Typography component='span' className={classes.inline} color='textPrimary'>
            {secondaryTitle}
          </Typography>
          {secondaryText}
        </React.Fragment>
      }
    />
  )
};
function MailHeader({ classes }) {
  return (
    <Paper className={classes.rootHeader} elevation={1}>
      <IconButton className={classes.iconButton} aria-label='Menu'>
        <Icon>menu</Icon>
      </IconButton>
      <InputBase className={classes.input} placeholder='Maillerde Ara..' />
      <IconButton className={classes.iconButton} aria-label='Search'>
        <Icon>search</Icon>
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton color='primary' className={classes.iconButton} aria-label='Reload'>
        <Icon>refresh</Icon>
      </IconButton>
    </Paper>
  );
}
const MailContains = ({ icon, primary, secondary }) => (
  <ListItem button>
    <ListItemAvatar>
      <Icon>{icon}</Icon>
    </ListItemAvatar>
    <ListItemText primary={primary} secondary={secondary} />
  </ListItem>
);
MailHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

MailBox.propTypes = {
  classes: PropTypes.object.isRequired
};
const Icon = ({ children, className }) => <i className={"material-icons " + className}>{children}</i>;
const mailContainsProps = [
  {
    icon: "inbox",
    secondary: "",
    primary: "Gelen Kutusu"
  },
  {
    icon: "star",
    secondary: "",
    primary: "Yıldızlı"
  },
  {
    icon: "send",
    secondary: "",
    primary: "Gönderilenler"
  },
  {
    icon: "drafts",
    secondary: "",
    primary: "Taslaklar"
  }
];
const mailLabels = [
  {
    icon: "group_work",
    secondary: "",
    primary: "work"
  },
  {
    icon: "code",
    secondary: "",
    primary: "Yazılım"
  },
  {
    icon: "copyright",
    secondary: "",
    primary: "Kurumsal"
  },
  {
    icon: "accessibility",
    secondary: "",
    primary: "Kişisel"
  }
];
export default withStyles(styles)(MailBox);
