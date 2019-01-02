import React, { Component } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TimeAgo from "javascript-time-ago";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import ListSubheader from "@material-ui/core/ListSubheader";

// Load locale-specific relative date/time formatting rules.
import tr from "javascript-time-ago/locale/tr";
import { Divider } from "@material-ui/core";

// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(tr);
const timeAgo = new TimeAgo("tr-TR");

export default class TwitterApi extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    Axios.post("http://localhost:8000/twitter", { id: "lorem ipsm" }).then(res => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  }
  render() {
    return <TwitterList data={this.state.data} />;
  }
}
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxHeight: 400,
    backgroundColor: "#fff",
    overflowX: "hidden",
    overflowY: "scroll"
  },
  inline: {
    display: "inline"
  },
  chip: {
    margin: 6
  }
}));

function TwitterList({ data }) {
  const classes = useStyles();
  return (
    <List className={classes.root} subheader={<ListSubheader component='div'>Twitter Posts</ListSubheader>}>
      {data != [] &&
        data.map(({ user, text, created_at, entities }, k) => (
          <React.Fragment key={k}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt={user.name} src={user.profile_image_url} />
              </ListItemAvatar>
              <ListItemText
                primary='Brunch this weekend?'
                secondary={
                  <React.Fragment>
                    <Typography component='span' className={classes.inline} color='textPrimary'>
                      {timeAgo.format(new Date(created_at))}
                    </Typography>
                    {" — " + text}
                    <br />
                    <div>
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
                    </div>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
    </List>
  );
}
