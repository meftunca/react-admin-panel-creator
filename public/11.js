(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/other/page/components/todo.js":
/*!*******************************************!*\
  !*** ./src/other/page/components/todo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/index.es.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var material_ui_color_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! material-ui-color-picker */ "./node_modules/material-ui-color-picker/lib/index.js");
/* harmony import */ var material_ui_color_picker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(material_ui_color_picker__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var material_design_icon_list_src_list_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! material-design-icon-list/src/list.js */ "./node_modules/material-design-icon-list/src/list.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/Collapse/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_16__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var uniqid = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");

var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
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
      boxShadow: "0 2px 15px 0 rgba(0,0,0,.3)",
      overflowY: "scroll",
      overflowX: "hidden"
    }
  };
});

var ICON = function ICON(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: props.className + " material-icons"
  }, props.children);
};

function TODOLIST() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("todo@" + uniqid()),
      _useState2 = _slicedToArray(_useState, 2),
      todoId = _useState2[0],
      setTodoId = _useState2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(todoState),
      _useState4 = _slicedToArray(_useState3, 2),
      defaultState = _useState4[0],
      setDefaultState = _useState4[1];

  var create = function create() {
    setTodoId("todo@" + uniqid());
    setDefaultState(todoState);
  };

  var todoUpdate = function todoUpdate(value) {
    localStorage.removeItem(todoId);
    localStorage.setItem(todoId, JSON.stringify(value));
    create();
  };

  var removeTodoItem = function removeTodoItem(id) {
    localStorage.removeItem(id);
    create();
  };

  var editTodoItem = function editTodoItem(id) {
    setOpen(false);
    setTodoId(id);
    var defaultState = JSON.parse(localStorage.getItem(id));
    setDefaultState(defaultState); // console.log(defaultState);

    setTimeout(function () {
      setOpen(true);
    }, 500);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    container: true,
    className: classes.list
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    dense: false,
    subheader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_15___default.a, {
      component: "div"
    }, "TODO list")
  }, Object.values(localStorage).map(function (i, k) {
    return Object.keys(localStorage)[k].includes("todo@") && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TODOItem, _extends({}, JSON.parse(i), {
      edit: editTodoItem,
      remove: function remove() {
        return removeTodoItem(Object.keys(localStorage)[k]);
      },
      id: Object.keys(localStorage)[k],
      key: k
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ICON, null, "playlist_add")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default.a, {
    inset: true,
    primary: "Todo List Formu"
  }), open ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ICON, null, "expand_less") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ICON, null, "expand_more")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_16___default.a, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TODOFormCreator, {
    update: todoUpdate,
    state: defaultState,
    set: setDefaultState,
    close: function close() {
      setOpen(false);
      setTimeout(function () {
        return setOpen(true);
      }, 500);
    }
  }))));
}

var TODOFormCreator = function TODOFormCreator(_ref) {
  var update = _ref.update,
      state = _ref.state,
      set = _ref.set,
      close = _ref.close;
  var classes = useStyles();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state),
      _useState6 = _slicedToArray(_useState5, 2),
      todo = _useState6[0],
      setTodo = _useState6[1];

  var updates = function updates(value) {
    setTodo(value);
  };

  function updateTodo(data) {
    setTodo(data);
    update(data);
  }

  var clearFunc = function clearFunc() {
    setTimeout(function () {
      set(todoState);
      setTodo(todoState);
    }, 500);
    close();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    container: true,
    alignItems: "center",
    justify: "center",
    spacing: 24
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    item: true,
    md: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TODOFormTitle, {
    update: updates,
    todo: todo
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    item: true,
    md: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TODOFormText, {
    update: updates,
    todo: todo
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    item: true,
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TODOFormSelectBox, {
    update: updates,
    todo: todo
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    item: true,
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TODOFormColor, {
    update: updates,
    todo: todo
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    item: true,
    md: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    container: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    item: true,
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "contained",
    fullWidth: true,
    color: "primary",
    className: classes.button,
    onClick: function onClick() {
      return updateTodo(todo);
    }
  }, "Ekle ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ICON, {
    className: classes.extendedIcon
  }, "send"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default.a, {
    item: true,
    md: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "contained",
    fullWidth: true,
    color: "secondary",
    className: classes.button,
    onClick: clearFunc
  }, "Temizle ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ICON, {
    className: classes.extendedIcon
  }, "clear"))))));
};

var TODOFormTitle = function TODOFormTitle(_ref2) {
  var update = _ref2.update,
      todo = _ref2.todo;
  var classes = useStyles();

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(todo.title),
      _useState8 = _slicedToArray(_useState7, 2),
      values = _useState8[0],
      setValues = _useState8[1];

  var handleChange = function handleChange(event) {
    setValues(event.target.value);
    var newTODO = Object.assign(todo, {
      title: values
    });
    update(newTODO);
  }; //   useEffect(() => {
  //     setValues(todo.title);


  console.log("TODOFormTitle", values); //   }, values);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "filled-textarea",
    label: "Title",
    placeholder: "Title",
    multiline: true,
    className: classes.textField,
    onChange: handleChange,
    fullWidth: true,
    value: values,
    margin: "normal",
    variant: "filled",
    InputLabelProps: {
      shrink: true
    }
  });
};

var TODOFormText = function TODOFormText(_ref3) {
  var update = _ref3.update,
      todo = _ref3.todo;
  var classes = useStyles();

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(todo.text),
      _useState10 = _slicedToArray(_useState9, 2),
      values = _useState10[0],
      setValues = _useState10[1]; //   console.log("TODOFormText", todo, values);


  var handleChange = function handleChange(event) {
    setValues(event.target.value);
    var newTODO = Object.assign(todo, {
      text: event.target.value
    });
    update(newTODO);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      return setValues(todo.text);
    };
  }, [todo.text]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "filled-full-width",
    label: "Description",
    style: {
      margin: 8
    },
    placeholder: "Description",
    helperText: "Description",
    onChange: handleChange,
    className: classes.textField,
    fullWidth: true,
    value: values,
    margin: "normal",
    variant: "filled",
    InputLabelProps: {
      shrink: true
    }
  });
};

var TODOFormColor = function TODOFormColor(_ref4) {
  var update = _ref4.update,
      todo = _ref4.todo;
  var classes = useStyles();

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(todo.color),
      _useState12 = _slicedToArray(_useState11, 2),
      values = _useState12[0],
      setValues = _useState12[1];

  var handleChange = function handleChange(value) {
    setValues(value);
    var newTODO = Object.assign(todo, {
      color: value
    });
    update(newTODO);
  }; //   useEffect(() => {
  //     return setValues(todo.color);
  //   }, []);


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_color_picker__WEBPACK_IMPORTED_MODULE_12___default.a, {
    name: "color",
    defaultValue: values,
    onChange: function onChange(color) {
      return handleChange(color);
    }
  });
};

var TODOFormSelectBox = function TODOFormSelectBox(_ref5) {
  var update = _ref5.update,
      todo = _ref5.todo;
  var classes = useStyles();

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(todo.icon),
      _useState14 = _slicedToArray(_useState13, 2),
      values = _useState14[0],
      setValues = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(todo.icon),
      _useState16 = _slicedToArray(_useState15, 2),
      select = _useState16[0],
      setSelect = _useState16[1]; //   useEffect(() => {
  //     return setValues(todo.icon);
  //   }, []);


  var handleChange = function handleChange(event) {
    setValues(event.target.value.replace(" ", "_"));
    setSelect(event.target.value.replace("_", " "));
  };

  var updateIconName = function updateIconName(val) {
    // console.log(val);
    var newTODO = Object.assign(todo, {
      icon: val
    });
    update(newTODO);
    setValues("");
    setSelect(val.replace("_", " "));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "standard-name",
    label: "icon",
    className: classes.textField,
    value: select,
    onChange: handleChange,
    margin: "normal",
    variant: "filled",
    multiline: true,
    fullWidth: true
  }), values != "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "nav",
    className: classes.searchList
  }, material_design_icon_list_src_list_js__WEBPACK_IMPORTED_MODULE_13__["default"].filter(function (i) {
    return i.includes(values) == true;
  }).slice(0, 10).map(function (i, k) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      button: true,
      key: k,
      onClick: function onClick() {
        return updateIconName(i);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ICON, null, i)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default.a, {
      primary: i.replace("_", " ")
    }));
  })));
};

var AvatarCreator = function AvatarCreator(_ref6) {
  var icon = _ref6.icon,
      color = _ref6.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: color,
      backgroundColor: color + "06"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ICON, null, icon)));
};

var TODOItem = function TODOItem(_ref7) {
  var title = _ref7.title,
      text = _ref7.text,
      id = _ref7.id,
      remove = _ref7.remove,
      color = _ref7.color,
      icon = _ref7.icon,
      edit = _ref7.edit;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      backgroundColor: color + "10"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AvatarCreator, {
    icon: icon,
    color: color
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default.a, {
    primary: title,
    secondary: text,
    style: {
      color: color
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    "aria-label": "edit",
    color: "primary",
    onClick: function onClick() {
      return edit(id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ICON, null, "edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    "aria-label": "Delete",
    color: "secondary",
    onClick: function onClick() {
      return remove(id);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ICON, null, "delete"))));
};

var todoState = {
  title: "",
  text: "",
  icon: "",
  color: "#000"
};
/* harmony default export */ __webpack_exports__["default"] = (TODOLIST);

/***/ })

}]);