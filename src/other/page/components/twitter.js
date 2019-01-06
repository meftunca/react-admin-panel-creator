import React, { Component, Fragment } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TimeAgo from "javascript-time-ago";
import classNames from "classnames";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
// Load locale-specific relative date/time formatting rules.
import tr from "javascript-time-ago/locale/tr";
import { Divider } from "@material-ui/core";
import { unstable_Box as Box } from "@material-ui/core/Box";
import { Link } from "react-router-dom";
const blobToBase64 = require("blob-to-base64");

// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(tr);
const timeAgo = new TimeAgo("tr-TR");

export default class TwitterApi extends Component {
  constructor() {
    super();
    this.state = { data: [], visible: false };
  }

  componentDidMount() {
    this.update();
  }
  update = () => {
    Axios.post(window.location.origin + ":8000/twitter", { id: "lorem ipsm" }).then(res => {
      this.setState({ data: res.data, visible: true });
    });
  };
  render() {
    if (this.state.visible == false) return <a />;
    return <TwitterList data={this.state.data} full={this.props.full ? false : true} update={this.update} />;
  }
}
const useStyles = makeStyles(theme => ({
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
  bottomFix: {
    position: "absolute",
    bottom: "-10vh",
    left: 0,
    right: 0
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
  textField: {}
}));

function TwitterList({ data, update, full }) {
  const classes = useStyles();
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
    console.log(tweet);
    if (tweet.length < 1 || tweet.length > 239) {
      alert("lütfen " + tweet.length + "'den " + (tweet.length < 1 ? "fazla " : "az ") + "karakter kullanın");
    } else {
      Axios.post("http://localhost:8000/twitter-post", {
        status: tweet + "\n Deneme zamanı : " + Date.now(),
        file: tweetFile
      }).then(d => {
        setTimeout(() => update(), 1000);
      });
      // setTweet("");
    }
  };
  console.log("data[0].user", full);
  const tweetUpdate = ({ target }) => setTweet(target.value);
  return (
    <div className={classes.relative}>
      <List
        className={full == undefined ? classes.root : classes.fullHg}
        subheader={
          <Box display='flex' justifyContent='space-between' p={1} bgcolor='background.paper'>
            <Box>
              <ListSubheader component='div'>Twitter Posts</ListSubheader>
            </Box>
            <Box>
              <IconButton size='small' onClick={update}>
                <i className='material-icons'>refresh</i>
              </IconButton>
            </Box>
          </Box>
        }>
        {data != [] && data[0].code == undefined ? (
          <Fragment>
            {data.map(({ user, text, created_at, entities }, k) => (
              <Fragment key={k}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt={user.name} src={user.profile_image_url} />
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <Fragment>
                        <Typography component='span' className={classes.inline} color='textPrimary'>
                          {timeAgo.format(new Date(created_at))}
                        </Typography>
                        {" — " + text}
                        <Divider />
                        {entities.user_mentions.map(({ screen_name, name }, k) => (
                          <Chip
                            avatar={
                              <Avatar>
                                <FaceIcon />
                              </Avatar>
                            }
                            variant='outlined'
                            label={name}
                            key={k}
                            className={classes.chip}
                          />
                        ))}
                      </Fragment>
                    }
                  />
                </ListItem>
              </Fragment>
            ))}
          </Fragment>
        ) : (
          <Typography component='span' className={classes.inlineCustom} color='textPrimary'>
            Şuan Twitter Apisini kullanamazsınız. Gerekli bilgileri girmek için =>
            <Link to='/api-yonetimi'>Adresine gidin</Link>
          </Typography>
        )}
      </List>
      {data != [] && data[0].code == undefined && (
        <div className={full != undefined && classes.bottomFix}>
          <Divider />
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
              InputProps={{
                endAdornment: (
                  <InputAdornment variant='filled' position='end'>
                    <IconButton color='secondary' aria-label='Toggle password visibility' onClick={modalToggle}>
                      <i className='material-icons' style={{ fontSize: 16 }}>
                        image
                      </i>
                    </IconButton>
                    <IconButton color='primary' aria-label='Toggle password visibility' onClick={postTweet}>
                      <i className='material-icons' style={{ fontSize: 16 }}>
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
