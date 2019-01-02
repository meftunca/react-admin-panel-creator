import React from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import ColorPicker from "material-ui-color-picker";
import list from "material-design-icon-list/src/list.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const uniqid = require("uniqid");
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  textField: {
    marginLeft: 4,
    marginRight: 4
  },
  list: {
    backgroundColor: "#ffffff",
    padding: "10px 20px"
  },
  button: {
    margin: "10px 0",
    paddingTop: 15,
    paddingBottom: 15
  },
  extendedIcon: {
    marginLeft: 8
  },
  searchList: {
    backgroundColor: "#ffffff",
    maxHeight: 250,
    boxShadow: "0 2px 15px 0 rgba(0,0,0,.3)"
  }
}));
const ICON = props => <i className={props.className + " material-icons"}>{props.children}</i>;
const TODOLIST = () => {
  const classes = useStyles();
  let storage = localStorage.getItem("TODOList");
  let [todoId, setTodoId] = React.useState("todo@" + uniqid());
  let create = () => {
    if (storage == undefined) {
      localStorage.setItem("TODOList", JSON.stringify([{ id: todoId }]));
    } else {
      let newTodo = JSON.parse(storage);
      console.log(newTodo);
      newTodo[newTodo.length] = { id: todoId };
      console.log(newTodo);
      localStorage.setItem("TODOList", JSON.stringify(newTodo));
    }
  };

  const todoUpdate = value => {
    localStorage.setItem(todoId, JSON.stringify(value));
    setTodoId("todo@" + uniqid());
    create();
    storage = localStorage.getItem("TODOList");
  };
  let defaultState = {
    title: "",
    text: "",
    icon: "",
    color: ""
  };
  const removeTodoItem = id => {
    localStorage.removeItem(id);
    storage = JSON.parse(storage).filter(i => i.id != id);
    localStorage.setItem("TODOList", JSON.stringify(storage));
    storage = localStorage.getItem("TODOList");
    setTodoId("todo@" + uniqid());
    defaultState = {
      title: "",
      text: "",
      icon: "",
      color: ""
    };
  };
  const editTodoItem = id => {
    defaultState = JSON.parse(localStorage.getItem(id));
    setTodoId(id);
  };
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12} className={classes.list}>
          <Typography variant='h6' className={classes.title}>
            Avatar with text and icon
          </Typography>
          <List dense={false}>
            {JSON.parse(storage).map((i, k) => (
              <TODOItem
                {...JSON.parse(localStorage.getItem(i.id))}
                edit={editTodoItem}
                remove={removeTodoItem}
                id={i.id}
                key={k}
              />
            ))}
          </List>
        </Grid>
        <TODOFormCreator update={todoUpdate} state={defaultState} />
      </Grid>
    </div>
  );
};
const AvatarCreator = ({ icon, color }) => (
  <ListItemAvatar>
    <Avatar
      style={{
        color: color,
        backgroundColor: color + "06"
      }}>
      <ICON>{icon}</ICON>
    </Avatar>
  </ListItemAvatar>
);
const TODOItem = ({ title, text, id, remove, color, icon, edit }) => (
  <ListItem style={{ backgroundColor: color + "10" }}>
    <AvatarCreator icon={icon} color={color} />
    <ListItemText primary={title} secondary={text} style={{ color: color }} />
    <ListItemSecondaryAction>
      <IconButton aria-label='edit' color='primary' onClick={() => edit(id)}>
        <ICON>edit</ICON>
      </IconButton>
      <IconButton aria-label='Delete' color='secondary' onClick={() => remove(id)}>
        <ICON>delete</ICON>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);
const TODOFormCreator = ({ update, state }) => {
  const classes = useStyles();

  const [todo, setTodo] = React.useState(state);
  let updates = value => {
    setTodo(value);
  };
  return (
    <Grid container alignItems={"center"} justify={"center"} spacing={24}>
      <Grid item md={12}>
        <TODOFormTitle update={updates} todo={todo} />
      </Grid>
      <Grid item md={12}>
        <TODOFormText update={updates} todo={todo} />
      </Grid>
      <Grid item md={6}>
        <TODOFormSelectBox update={updates} todo={todo} />
      </Grid>
      <Grid item md={6}>
        <TODOFormColor update={updates} todo={todo} />
      </Grid>
      <Grid item md={12}>
        <Button variant='contained' fullWidth color='primary' className={classes.button} onClick={() => update(todo)}>
          Ekle <ICON className={classes.extendedIcon}>send</ICON>
        </Button>
      </Grid>
    </Grid>
  );
};
const TODOFormTitle = ({ update, todo }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState("");
  const handleChange = event => {
    setValues(event.target.value);
    let newTODO = Object.assign(todo, { title: values });
    update(newTODO);
  };
  return (
    <TextField
      id='filled-textarea'
      label='Multiline Placeholder'
      placeholder='Placeholder'
      multiline
      className={classes.textField}
      onChange={handleChange}
      fullWidth
      value={values}
      margin='normal'
      variant='filled'
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};
const TODOFormText = ({ update, todo }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState("");

  const handleChange = event => {
    setValues(event.target.value);
    let newTODO = Object.assign(todo, { text: event.target.value });
    update(newTODO);
  };
  return (
    <TextField
      id='filled-full-width'
      label='Label'
      style={{ margin: 8 }}
      placeholder='Placeholder'
      helperText='Full width!'
      onChange={handleChange}
      className={classes.textField}
      fullWidth
      value={values}
      margin='normal'
      variant='filled'
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};
const TODOFormColor = ({ update, todo }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState("#000");

  const handleChange = value => {
    setValues(value);
    let newTODO = Object.assign(todo, { color: value });
    update(newTODO);
  };
  return <ColorPicker name='color' defaultValue={values} onChange={color => handleChange(color)} />;
};

const TODOFormSelectBox = ({ update, todo }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState("");
  const [select, setSelect] = React.useState("");

  const handleChange = event => {
    setValues(event.target.value.replace(" ", "_"));
    setSelect(event.target.value.replace("_", " "));
  };
  const updateIconName = val => {
    console.log(val);
    let newTODO = Object.assign(todo, { icon: val });
    update(newTODO);
    setValues("");
    setSelect(val.replace("_", " "));
  };
  return (
    <React.Fragment>
      <TextField
        id='standard-name'
        label='icon'
        className={classes.textField}
        value={select}
        onChange={handleChange}
        margin='normal'
        variant='filled'
        multiline
        fullWidth
      />
      {values != "" && (
        <List component='nav' className={classes.searchList}>
          {list
            .filter(i => i.includes(values) == true)
            .slice(0, 10)
            .map((i, k) => (
              <ListItem button key={k} onClick={() => updateIconName(i)}>
                <ListItemIcon>
                  <ICON>{i}</ICON>
                </ListItemIcon>
                <ListItemText primary={i.replace("_", " ")} />
              </ListItem>
            ))}
        </List>
      )}
    </React.Fragment>
  );
};

export default TODOLIST;
