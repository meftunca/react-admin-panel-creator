import React, { Component, Fragment } from "react";
import {
   withStyles,
   List,
   ListItem,
   ListItemText,
   Avatar,
   Typography,
   Chip,
   ListSubheader,
   IconButton,
   InputAdornment,
   TextField,
   ListItemAvatar,
   Snackbar,
   Grid,
   Divider,
   ListItemSecondaryAction
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import TimeAgo from "javascript-time-ago";
import classNames from "classnames";
import FaceIcon from "@material-ui/icons/Face";
// Load locale-specific relative date/time formatting rules.
import tr from "javascript-time-ago/locale/tr";
import { Link } from "react-router-dom";
import axios from "axios";

const blobToBase64 = require("blob-to-base64");

// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(tr);
const timeAgo = new TimeAgo("tr-TR");
const location = process.env.NODE_ENV === "development" ? window.location.origin + ":3001" : "";

class TwitterApi extends Component {
   constructor() {
      super();
      this.state = { data: [], visible: false, deleting: false, message: "" };
   }

   componentDidMount() {
      this.update();
   }
   update = () => {
      //location +
      axios.post("/twitter").then(({ data }) => {
         this.setState({ data, visible: true, deleting: false, message: "" });
      });
   };
   delete = id => {
      this.setState({
         deleting: true,
         message: "Twit Siliniyor..."
      });
      //location +
      axios.post("/twitter/delete", { id }).then(({ data }) => {
         if (data.status) {
            this.setState(
               {
                  deleting: true,
                  message: "Twit başarılı bir şekilde silindi.Birazdan veriler güncellenecek."
               },
               () => this.update()
            );
         } else {
            this.setState({
               deleting: true,
               message: "Twit Silinemedi, Lütfen geliştiriciyle iletişim kurun."
            });
         }
      });
   };
   render() {
      const { classes } = this.props;
      const { deleting, message, data } = this.state;
      if (this.state.visible == false) return <a />;
      return (
         <Fragment>
            <Snackbar
               anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
               }}
               open={deleting}
               autoHideDuration={6000}
               onClose={() => this.setState({ deleting: false, message: "" })}
               ContentProps={{
                  "aria-describedby": "message-id"
               }}
               message={<span id='message-id'>{message}</span>}
               action={[
                  <IconButton
                     key='close'
                     aria-label='Close'
                     color='inherit'
                     className={classes.close}
                     onClick={() => this.setState({ deleting: false, message: "" })}>
                     <CloseIcon />
                  </IconButton>
               ]}
            />
            <TwitterList
               data={data}
               classes={classes}
               full={this.props.full ? false : true}
               update={this.update}
               deleteFunc={this.delete}
            />
         </Fragment>
      );
   }
}
const styles = theme => ({
   relative: {
      position: "relative"
   },
   root: {
      width: "100%",
      maxHeight: 400,
      backgroundColor: "#fff",
      overflowX: "hidden",
      overflowY: "scroll"
   },
   fullHg: {
      maxHeight: "80vh",
      width: "100%",
      backgroundColor: "#fff",
      overflowX: "hidden",
      overflowY: "scroll",
      position: "relative"
   },
   close: {
      padding: theme.spacing(2)
   },
   bottomFix: {
      position: "absolute",
      // bottom: "-20vh",
      left: 0,
      right: 0,
      zIndex: 9999
   },
   inline: {
      display: "inline"
   },
   inlineCustom: {
      display: "inline",
      padding: "5px 15px",
      margin: 20
   },
   chip: {
      margin: 6
   },
   margin: {
      margin: 8
   },
   gutterMargin: {
      margin: "4px 0",
      display: "block"
   },
   textField: {
      zIndex: 9999
   }
});

function TwitterList({ data, update, full, classes, deleteFunc }) {
   const [tweet, setTweet] = React.useState("");
   const [tweetFile, setTweetFile] = React.useState("");
   const [open, setOpen] = React.useState(false);
   let dropzone = React.createRef();
   const modalToggle = () => {
      setOpen(!open);
      dropzone.current.click();
   };
   const setFile = () => {
      let files = dropzone.current.files;
      console.log(files);
      blobToBase64(files[0], function(error, base64) {
         if (!error) {
            setTweetFile(base64);
         }
      });
   };
   const postTweet = () => {
      if (tweet.length < 1 || tweet.length > 279) {
         alert("lütfen " + tweet.length + "'den " + (tweet.length < 1 ? "fazla " : "az ") + "karakter kullanın");
      } else {
         axios
            .post("/twitter-post", {
               status: tweet + "\n Deneme zamanı : " + Date.now(),
               file: tweetFile
            })
            .then(d => {
               setTimeout(() => update(), 1000);
            });
         // setTweet("");
      }
   };
   const tweetUpdate = ({ target }) => {
      setTweet(target.value.substr(0, 279));
   };
   return (
      <div className={classes.relative}>
         <List
            className={full == undefined ? classes.root : classes.fullHg}
            subheader={
               <div style={{ padding: 12 }}>
                  <Grid container justify='space-between' alignContent='center' alignItems='center'>
                     <Grid item md='auto'>
                        <ListSubheader component='div'>Twitter Posts</ListSubheader>
                     </Grid>
                     <Grid item md='auto'>
                        <IconButton size='small' onClick={update}>
                           <i className='material-icons'>refresh</i>
                        </IconButton>
                     </Grid>
                  </Grid>
                  <Divider variant='middle' />
               </div>
            }>
            {data != [] && data[0].code == undefined ? (
               <Fragment>
                  {data.map(({ id_str, user, text, retweeted, created_at, entities }, k) => (
                     <Fragment key={k}>
                        <ListItem>
                           <ListItemAvatar>
                              <Avatar alt={user.name} src={user.profile_image_url} />
                           </ListItemAvatar>
                           <ListItemText
                              primary={text}
                              secondary={
                                 <Fragment>
                                    <Typography component='span' className={classes.inline} color='textPrimary'>
                                       {timeAgo.format(new Date(created_at))}
                                    </Typography>
                                    <span className={classes.gutterMargin} />
                                    {entities.user_mentions.map(({ screen_name, name }, k) => (
                                       <Chip
                                          avatar={
                                             <Avatar component='span'>
                                                <FaceIcon />
                                             </Avatar>
                                          }
                                          component='span'
                                          variant='outlined'
                                          label={screen_name}
                                          key={k}
                                          className={classes.chip}
                                       />
                                    ))}
                                 </Fragment>
                              }
                           />
                           <ListItemSecondaryAction>
                              <IconButton
                                 style={{ color: "hotpink" }}
                                 onClick={() => deleteFunc(retweeted !== false ? retweeted.id_str : id_str)}>
                                 <i className='material-icons'>delete</i>
                              </IconButton>
                           </ListItemSecondaryAction>
                        </ListItem>
                        <Divider variant='inset' />
                     </Fragment>
                  ))}
               </Fragment>
            ) : (
               <Typography component='div' className={classes.inlineCustom} color='textPrimary'>
                  Şuan Twitter Apisini kullanamazsınız. Gerekli bilgileri girmek için =>
                  <Link to='/api-yonetimi'>Adresine gidin</Link>
               </Typography>
            )}
         </List>
         {data != [] && data[0].code == undefined && (
            <div className={full != undefined && classes.bottomFix}>
               <ListItem>
                  <TextField
                     id='twitter-post-button'
                     className={classNames(classes.margin, classes.textField)}
                     variant='filled'
                     type='textarea'
                     label='Twitter post'
                     value={tweet}
                     onChange={tweetUpdate}
                     fullWidth
                     multiline
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position='end'>
                              <IconButton
                                 color='secondary'
                                 aria-label='Toggle password visibility'
                                 onClick={modalToggle}>
                                 <i className='material-icons' style={{ fontSize: 24 }}>
                                    image
                                 </i>
                              </IconButton>
                              <IconButton
                                 color='primary'
                                 aria-label='Toggle password visibility'
                                 onClick={() => postTweet()}>
                                 <i className='material-icons' style={{ fontSize: 24 }}>
                                    send
                                 </i>
                              </IconButton>
                           </InputAdornment>
                        )
                     }}
                  />
               </ListItem>
               <input type='file' hidden ref={dropzone} onChange={setFile} />
            </div>
         )}
      </div>
   );
}
export default withStyles(styles)(TwitterApi);
