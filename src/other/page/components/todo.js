import React, { useState, useEffect } from "react";
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
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
const uniqid = require("uniqid");

const useStyles = {
  container: {},
  textField: {
    marginLeft: 4,
    marginRight: 4
  },
  bgLight: {
    backgroundColor: "#e6e6e6"
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
    boxShadow: "0 2px 15px 0 rgba(0,0,0,.3)",
    overflowY: "scroll",
    overflowX: "hidden"
  }
};
const ICON = props => <i className={props.className + " material-icons"}>{props.children}</i>;
const TODOLIST = ({ classes }) => {
  const [todoId, setTodoId] = useState("todo@" + uniqid());
  const [open, setOpen] = React.useState(false);
  const [defaultState, setDefaultState] = useState(todoState);
  let create = () => {
    setTodoId("todo@" + uniqid());
    setDefaultState(todoState);
  };

  const todoUpdate = value => {
    localStorage.removeItem(todoId);
    localStorage.setItem(todoId, JSON.stringify(value));
    create();
  };

  const removeTodoItem = id => {
    localStorage.removeItem(id);
    create();
  };
  const editTodoItem = id => {
    setOpen(false);
    setTodoId(id);
    let defaultState = JSON.parse(localStorage.getItem(id));
    setDefaultState(defaultState);
    // console.log(defaultState);
    setTimeout(() => {
      setOpen(true);
    }, 500);
  };
  return (
    <div className={classes.container}>
      <Grid container className={classes.list}>
        <Grid item xs={12}>
          <List dense={false} subheader={<ListSubheader component='div'>TODO list</ListSubheader>}>
            {Object.values(localStorage).map(
              (i, k) =>
                Object.keys(localStorage)[k].includes("todo@") && (
                  <TODOItem
                    {...JSON.parse(i)}
                    edit={editTodoItem}
                    remove={() => removeTodoItem(Object.keys(localStorage)[k])}
                    id={Object.keys(localStorage)[k]}
                    key={k}
                  />
                )
            )}
          </List>
        </Grid>

        <ListItem button onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <ICON>playlist_add</ICON>
          </ListItemIcon>
          <ListItemText inset primary='Todo List Formu' />
          {open ? <ICON>expand_less</ICON> : <ICON>expand_more</ICON>}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <TODOFormCreator
            update={todoUpdate}
            state={defaultState}
            set={setDefaultState}
            classes={classes}
            close={() => {
              setOpen(false);
              setTimeout(() => setOpen(true), 500);
            }}
          />
        </Collapse>
      </Grid>
    </div>
  );
};

const TODOFormCreator = ({ update, state, set, close, classes }) => {
  const [todo, setTodo] = useState(state);
  const [value, setValue] = React.useState("Ekle");

  let updates = value => {
    setTodo(value);
  };
  function updateTodo(data) {
    setTodo(data);
    update(data);
  }
  const clearFunc = () => {
    setTimeout(() => {
      set(todoState);
      setTodo(todoState);
    }, 500);
    close();
  };

  return (
    <Grid container alignItems={"center"} justify={"center"} spacing={24}>
      <Grid item md={12}>
        <TODOFormTitle update={updates} todo={todo} classes={classes} />
      </Grid>
      <Grid item md={12}>
        <TODOFormText update={updates} todo={todo} classes={classes} />
      </Grid>
      <Grid item md={6}>
        <TODOFormSelectBox update={updates} todo={todo} classes={classes} />
      </Grid>
      <Grid item md={6}>
        <TODOFormColor update={updates} todo={todo} classes={classes} />
      </Grid>
      <Grid item md={12}>
        <BottomNavigation
          value={value}
          className={classes.bgLight}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels>
          <BottomNavigationAction label='Ekle' value='Ekle' icon={<ICON>send</ICON>} onClick={() => updateTodo(todo)} />
          />
          <BottomNavigationAction
            label='Temizle'
            value='Temizle'
            icon={<ICON>delete_forever</ICON>}
            onClick={clearFunc}
          />
        </BottomNavigation>
      </Grid>
    </Grid>
  );
};
const TODOFormTitle = ({ update, todo, classes }) => {
  const [values, setValues] = useState(todo.title);
  const handleChange = event => {
    setValues(event.target.value);
    let newTODO = Object.assign(todo, { title: values });
    update(newTODO);
  };

  //   useEffect(() => {
  //     setValues(todo.title);
  console.log("TODOFormTitle", values);
  //   }, values);
  return (
    <TextField
      id='filled-textarea'
      label='Title'
      placeholder='Title'
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
const TODOFormText = ({ update, todo, classes }) => {
  const [values, setValues] = useState(todo.text);
  //   console.log("TODOFormText", todo, values);

  const handleChange = event => {
    setValues(event.target.value);
    let newTODO = Object.assign(todo, { text: event.target.value });
    update(newTODO);
  };
  useEffect(
    () => {
      return () => setValues(todo.text);
    },
    [todo.text]
  );
  return (
    <TextField
      id='filled-full-width'
      label='Description'
      style={{ margin: 8 }}
      placeholder='Description'
      helperText='Description'
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
const TODOFormColor = ({ update, todo, classes }) => {
  const [values, setValues] = useState(todo.color);
  const handleChange = value => {
    setValues(value);
    let newTODO = Object.assign(todo, { color: value });
    update(newTODO);
  };
  //   useEffect(() => {
  //     return setValues(todo.color);
  //   }, []);
  return <ColorPicker name='color' defaultValue={values} onChange={color => handleChange(color)} />;
};

const TODOFormSelectBox = ({ update, todo, classes }) => {
  const [values, setValues] = useState(todo.icon);
  const [select, setSelect] = useState(todo.icon);
  //   useEffect(() => {
  //     return setValues(todo.icon);
  //   }, []);
  const handleChange = event => {
    setValues(event.target.value.replace(" ", "_"));
    setSelect(event.target.value.replace("_", " "));
  };
  const updateIconName = val => {
    // console.log(val);
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
const todoState = {
  title: "",
  text: "",
  icon: "",
  color: "#000"
};
export default withStyles(useStyles)(TODOLIST);
