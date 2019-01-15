import React, { Fragment, Component, useState, useEffect } from "react";
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
import ContentLoader from "react-content-loader";
import Collapse from "@material-ui/core/Collapse";
import Chip from "@material-ui/core/Chip";
import TablePagination from "@material-ui/core/TablePagination";
const uniqid = require("uniqid");
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing.unit
  },
  rootList: {
    width: "100%",
    maxHeight: 600,
    overflowY: "scroll"
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
  mailBoxCollapse: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10
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
  },
  chip: {
    margin: theme.spacing.unit,
    height: 20,
    fontSize: 13,
    textTransform: "capitalize"
  }
});
const location = process.env.NODE_ENV === "development" ? window.location.origin + ":3001" : "";

class MailBox extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, editor: { data: "" }, mailList: [], rowsPerPage: 5, page: 0 };
    this.editor = React.createRef();
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
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
    this.getMessages();
  }
  handleChangePage(event, newPage) {
    this.setState({ page: newPage });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }
  getMessages = async () => {
    await axios.post(location + "/google/gmail/messages").then(({ data }) => this.setState({ mailList: data }));
  };
  removeMail = async id => {
    let setData = await axios
      .post(location + "/google/gmail/remove-mail", { id: id })
      .then(d => this.forceUpdate())
      .catch(e => alert("Mail silinemedi"));
  };
  render() {
    const { classes } = this.props;
    const { mailList, rowsPerPage, page } = this.state;
    console.log("emptyRows", page, rowsPerPage);
    let mailPagList = mailList.length > 0 ? mailList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : [];
    return (
      <Fragment>
        <Grid container className={classes.root}>
          <Grid item xs={12} md={12}>
            <MailHeader classes={classes} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item md={4}>
                <Button color='secondary' className={classes.button} onClick={this.openEditor}>
                  <Icon className={classes.extendedIcon}>add</Icon> {"Yeni Mail Oluştur"}
                </Button>
              </Grid>
              <Grid item md={8}>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component='div'
                  count={mailList.length || 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  backIconButtonProps={{
                    "aria-label": "Önceki Sayfa"
                  }}
                  nextIconButtonProps={{
                    "aria-label": "Sonraki Sayfa"
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={4} md={3}>
            <List>
              {mailContainsFieldProps.map((i, k) => (
                <MailContainsField {...i} key={k} />
              ))}
            </List>
            <Divider />
            <List subheader={<ListSubheader>Etiketler</ListSubheader>}>
              {mailLabels.map((i, k) => (
                <MailContainsField {...i} key={k} />
              ))}
            </List>
          </Grid>
          <Grid item xs={8} md={9}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <List className={classes.rootList}>
                  {mailPagList != [] &&
                    mailPagList.map((i, k) => (
                      <MailContent key={uniqid()} classes={classes} id={i} remove={this.removeMail} />
                    ))}
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
          <br />
          {secondaryText}
        </React.Fragment>
      }
    />
  ),
  MyContentLoader: props => (
    <ContentLoader height={80} width={500} speed={1} primaryColor='#f3f3f3' secondaryColor='#ecebeb' {...props}>
      <rect x='70' y='15' rx='4' ry='4' width='317' height='6.4' />
      <rect x='70' y='35' rx='3' ry='3' width='285' height='6.4' />
      <circle cx='30' cy='30' r='15' />
    </ContentLoader>
  ),
  mailSubjectWithDate: headers => {
    let extractField = function(json, fieldName) {
      return json.filter(function(header) {
        return header.name === fieldName;
      })[0];
    };
    let subject = extractField(headers, "Subject"),
      date = extractField(headers, "Date");
    return { subject: subject.value, date: date.value };
  },
  MailChipper: ({ data, classes }) => (
    <Fragment>
      {data.map((i, k) => (
        <Chip label={i.replace("_", " ")} className={classes.chip} key={k} />
      ))}
    </Fragment>
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

function MailContent({ classes, id, remove }) {
  const { AvatarItem, SeconadryAction, ItemText, MyContentLoader, mailSubjectWithDate, MailChipper } = MailPreview;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, complete] = useState(false);
  useEffect(() => {
    if (data == null) {
      axios.post(location + "/google/gmail/get-message", { id: id }).then(({ data }) => {
        setData(data);
        complete(true);
      });
    }
  });
  console.log("open", open);
  // setTimeout(() => complete(true), 500);
  if (!loading) return <MyContentLoader />;
  return (
    <Fragment>
      <ListItem alignItems='flex-start' button onClick={() => setOpen(!open)}>
        {/* <AvatarItem name='Remy Sharp' img='https://material-ui.com/static/images/avatar/1.jpg' /> */}
        <ItemText
          primary={<MailChipper data={data.labelIds} classes={classes} />}
          classes={classes}
          secondaryTitle={mailSubjectWithDate(data.payload.headers).date}
          secondaryText={" — " + mailSubjectWithDate(data.payload.headers).subject}
        />
        <SeconadryAction reply={() => console.log("reply now")} remove={() => remove(data.threadId)} />
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <div className={classes.mailBoxCollapse}>
          <Typography
            variant='body2'
            gutterBottom
            className={classes.extendedIcon}
            dangerouslySetInnerHTML={{ __html: data.snippet }}
          />
        </div>
      </Collapse>
    </Fragment>
  );
}
const MailContainsField = ({ icon, primary, secondary }) => (
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
const mailContainsFieldProps = [
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
