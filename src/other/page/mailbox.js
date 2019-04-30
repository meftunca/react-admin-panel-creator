import React, { Fragment, Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
   Grid,
   List,
   ListItem,
   ListItemText,
   ListItemAvatar,
   ListItemSecondaryAction,
   Avatar,
   Typography,
   Paper,
   InputBase,
   Divider,
   IconButton,
   ListSubheader,
   Button,
   Collapse,
   Chip,
   TablePagination,
   TextField
} from "@material-ui/core";
import EmailEditor from "react-email-editor";
import FullScreenDialog from "./components/FullScreenDialog";
import axios from "axios";
import ContentLoader from "react-content-loader";
import TimeAgo from "javascript-time-ago";
import tr from "javascript-time-ago/locale/tr";
const uniqid = require("uniqid");

TimeAgo.addLocale(tr);
const timeAgo = new TimeAgo("tr-TR");
const styles = theme => ({
   root: {
      backgroundColor: theme.palette.background.paper
   },
   button: {
      margin: theme.spacing(2)
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
      padding: 32
   },
   extendedIcon: {
      marginRight: theme.spacing(2)
   },
   chip: {
      margin: theme.spacing(2),
      height: 20,
      fontSize: 13,
      textTransform: "capitalize"
   }
});
const location = process.env.NODE_ENV === "development" ? window.location.origin + ":3001" : "";

class MailBox extends Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false,
         editor: { data: "" },
         mailList: [],
         mailPagList: [],
         rowsPerPage: 25,
         page: 0,
         labelIds: [],
         q: "",
         sendData: {}
      };
      this.editor = React.createRef();
      this.mailSearchHeader = React.createRef();
      this.to = React.createRef();
      this.subject = React.createRef();
      this.emailSchema = localStorage.drafts || [];
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
         let other = localStorage.getItem("drafts");
         let newData = other != undefined ? other + "-@-" + JSON.stringify(data) : JSON.stringify(data);
         localStorage.setItem("drafts", newData);
      });
   };
   componentDidMount() {
      this.getMessages();
   }

   async handleQuerySearch() {
      console.log("this.mailSearchHeader.current.value", this.mailSearchHeader.current.value);
      await this.setState({ q: this.mailSearchHeader.current.value });
      await this.getMessages();
   }
   setLabel = label => {
      console.log("labelIds: " + [label]);
      this.setState({ labelIds: [label] });
      this.getMessages();
   };
   handleChangePage = (event, newPage) => {
      this.setState({ page: newPage });
      this.updateMailPaglist();
   };

   handleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: event.target.value });
      this.updateMailPaglist();
   };

   onReload = () => {
      this.getMessages();
   };

   getMessages = () => {
      const { labelIds, q } = this.state;
      let options = { labelIds, q };
      axios
         .post("/google/gmail/messages", options)
         // .post(location + "/google/gmail/messages", options)
         .then(({ data }) => {
            this.setState({ mailList: data }, () => this.updateMailPaglist());
         });
   };

   removeMail = id => {
      axios
         // .post(location + "/google/gmail/remove-mail", { id: id })
         .post("/google/gmail/remove-mail", { id: id })
         .then(d => this.forceUpdate())
         .catch(e => alert("Mail silinemedi"));
   };
   updateSendData = async data => {
      this.setState({ sendData: data, modal: true });
   };
   sendEmail = async () => {
      let { sendData } = this.state;

      await this.editor.current.exportHtml(data => {
         const { design, html } = data;
         if (sendData == {} || sendData.to == undefined) {
            sendData = {
               to: this.to.current.value,
               subject: this.subject.current.value
            };
         }
         sendData["message"] = html;
         // axios.post(location + "/google/gmail/send-email", sendData).then(({ data }) => console.log(data));
         axios.post("/google/gmail/send-email", sendData).then(({ data }) => console.log(data));
      });
   };
   updateMailPaglist = () => {
      let { mailList, rowsPerPage, page, mailPagList } = this.state;
      mailPagList = mailList.length > 0 ? mailList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : [];
      this.setState({ mailPagList: mailPagList });
   };
   render() {
      const { classes } = this.props;
      const { mailList, rowsPerPage, page, mailPagList } = this.state;
      return (
         <Fragment>
            <Grid container className={classes.root}>
               <Grid item xs={12} md={12}>
                  <MailHeader
                     classes={classes}
                     refs={this.mailSearchHeader}
                     reload={this.onReload}
                     search={this.handleQuerySearch}
                  />
               </Grid>

               <Grid item sm={4} md={3} lg={2}>
                  <Button color='secondary' className={classes.button} onClick={this.openEditor}>
                     <Icon className={classes.extendedIcon}>add</Icon> {"Yeni Mail Oluştur"}
                  </Button>
                  <List>
                     {mailContainsFieldProps.map((i, k) => (
                        <MailContainsField setLabel={this.setLabel} {...i} key={k} />
                     ))}
                  </List>
                  <Divider />
                  <List subheader={<ListSubheader>Etiketler</ListSubheader>}>
                     {mailLabels.map((i, k) => (
                        <MailContainsField {...i} key={k} />
                     ))}
                  </List>
               </Grid>
               <Grid item sm={8} md={9} lg={10}>
                  <TablePagination
                     rowsPerPageOptions={[5, 10, 25]}
                     component='div'
                     count={mailList.length || 0}
                     rowsPerPage={rowsPerPage}
                     page={page}
                     labelRowsPerPage='Gösterilecek Eleman Sayısı'
                     labelDisplayedRows={({ from, to, count }) => `${from}-${to} ~ ${count}`}
                     backIconButtonProps={{
                        "aria-label": "Önceki Sayfa"
                     }}
                     nextIconButtonProps={{
                        "aria-label": "Sonraki Sayfa"
                     }}
                     onChangePage={this.handleChangePage}
                     onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  />
                  <List className={classes.rootList}>
                     {mailPagList != [] &&
                        mailPagList.map((i, k) => (
                           <MailContent
                              key={uniqid()}
                              classes={classes}
                              id={i}
                              remove={this.removeMail}
                              updateSendData={this.updateSendData}
                           />
                        ))}
                  </List>
               </Grid>
            </Grid>

            <FullScreenDialog
               open={this.state.modal}
               handleClose={this.handleClose}
               save={this.onSave}
               send={this.sendEmail}>
               <div className={classes.modalWrapper}>
                  <Grid container>
                     <Grid item xl={12} md={12}>
                        <Grid container direction='row' spacing={40}>
                           <Grid item md={6} sm={12}>
                              <TextField
                                 id='outlined-to'
                                 autoComplete='email'
                                 inputRef={this.to}
                                 label='Alıcı'
                                 margin='normal'
                                 fullWidth
                              />
                           </Grid>
                           <Grid item md={6} sm={12}>
                              <TextField
                                 fullWidth
                                 id='outlined-subject'
                                 inputRef={this.subject}
                                 label='Konu'
                                 margin='normal'
                              />
                           </Grid>
                        </Grid>
                     </Grid>
                     <br />
                     <br />
                     <Grid item xl={12}>
                        <EmailEditor minHeight={"100vh"} ref={this.editor} />
                     </Grid>
                  </Grid>
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
function MailHeader({ classes, refs, reload, search }) {
   return (
      <Paper className={classes.rootHeader} elevation={1}>
         {/* <IconButton className={classes.iconButton} aria-label='Menu'>
            <Icon>menu</Icon>
         </IconButton> */}
         <InputBase inputRef={refs} className={classes.input} placeholder='Maillerde Ara..' />
         <IconButton className={classes.iconButton} onClick={search} aria-label='Search'>
            <Icon>search</Icon>
         </IconButton>
         <Divider className={classes.divider} />
         <IconButton color='primary' onClick={reload} className={classes.iconButton} aria-label='Reload'>
            <Icon>refresh</Icon>
         </IconButton>
      </Paper>
   );
}

function MailContent({ classes, id, remove, updateSendData }) {
   const { AvatarItem, SeconadryAction, ItemText, MyContentLoader, MailChipper } = MailPreview;
   const [open, setOpen] = useState(false);
   const [data, setData] = useState(null);
   useEffect(() => {
      if (data == null) {
         //location +
         axios.post("/google/gmail/get-message", { id: id }).then(({ data }) => {
            setData(data);
         });
      }
   }, []);
   if (data == null) return <MyContentLoader />;
   if (data.threadId == undefined) return <h4>Mail bilgilerine erişemiyorum.. Bu sorun geçici olabilir.</h4>;
   const sendData = {
      to: data.headers.to,
      subject: data.headers.subject
   };
   return (
      <Fragment>
         <ListItem alignItems='flex-start' button onClick={() => setOpen(!open)}>
            {/* <AvatarItem name='Remy Sharp' img='https://material-ui.com/static/images/avatar/1.jpg' /> */}
            <ItemText
               primary={<MailChipper data={data.labelIds} classes={classes} />}
               classes={classes}
               secondaryTitle={data.headers.subject.substr(0, 50) + "..."}
               secondaryText={timeAgo.format(new Date(data.headers.date)) + " — "}
            />
            <SeconadryAction reply={() => updateSendData(sendData)} remove={() => remove(data.threadId)} />
         </ListItem>
         <Collapse in={open} timeout='auto' unmountOnExit>
            <div className={classes.mailBoxCollapse}>
               <Typography
                  variant='body2'
                  gutterBottom
                  className={classes.extendedIcon}
                  dangerouslySetInnerHTML={{ __html: data.textPlain }}
               />
               <Typography
                  variant='body2'
                  gutterBottom
                  className={classes.extendedIcon}
                  dangerouslySetInnerHTML={{ __html: data.textHtml }}
               />
            </div>
         </Collapse>
      </Fragment>
   );
}
const MailContainsField = ({ icon, primary, secondary, name, setLabel }) => (
   <ListItem button onClick={() => (name != undefined ? setLabel(name.toUpperCase()) : false)}>
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
      name: "INBOX",
      primary: "Gelen Kutusu"
   },
   {
      icon: "star",
      name: "Important",
      primary: "Önemli"
   },
   {
      icon: "refresh",
      name: "CATEGORY_UPDATES",
      primary: "Güncellemeler"
   },
   {
      icon: "forum",
      name: "CATEGORY_FORUMS",
      primary: "Forumlar"
   },
   {
      icon: "pages",
      name: "CATEGORY_SOCIAL",
      primary: "Sosyal"
   },
   {
      icon: "visibility_off",
      name: "UNREAD",
      primary: "Okunmayanlar"
   },
   {
      icon: "copyright",
      name: "CATEGORY_PROMOTIONS",
      primary: "Promosyonlar"
   },
   // {
   //   icon: "chat",
   //   name: "CHAT",
   //   primary: "Sohbet"
   // },
   {
      icon: "star",
      name: "STARRED",
      primary: "Yıldızlı"
   },
   {
      icon: "send",
      name: "SEND",
      primary: "Gönderilenler"
   },
   {
      icon: "drafts",
      name: "DRAFT",
      primary: "Taslaklar"
   },
   {
      icon: "delete_forever",
      name: "TRASH",
      primary: "Çöp kutusu"
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
