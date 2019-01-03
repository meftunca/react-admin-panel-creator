(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@material-ui/core/Menu/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/core/Menu/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Menu.default;
  }
});

var _Menu = _interopRequireDefault(__webpack_require__(/*! ./Menu */ "./node_modules/@material-ui/core/Menu/Menu.js"));

/***/ }),

/***/ "./src/frontend/router/header.js":
/*!***************************************!*\
  !*** ./src/frontend/router/header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list */ "./src/frontend/router/list.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/Collapse/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/Menu/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
var _dec, _class, _temp;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    root: {
      display: "flex"
    },
    grow: {
      flexGrow: 1
    },
    title: _defineProperty({
      marginLeft: 24
    }, theme.breakpoints.down("sm"), {
      marginLeft: 0
    }),
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: _defineProperty({
      marginLeft: 12,
      marginRight: 20
    }, theme.breakpoints.up("md"), {
      display: "none"
    }),
    sectionDesktop: _defineProperty({
      display: "none"
    }, theme.breakpoints.up("md"), {
      display: "flex",
      margin: "0 12px"
    }),
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: _objectSpread({
      display: "flex",
      alignItems: "center",
      padding: "0 8px"
    }, theme.mixins.toolbar, {
      justifyContent: "flex-end"
    }),
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  };
};

var PersistentDrawerLeft = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_22__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_22__["observer"])(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PersistentDrawerLeft, _React$Component);

  function PersistentDrawerLeft() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PersistentDrawerLeft);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PersistentDrawerLeft)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      open: false
    };

    _this.handleDrawerOpen = function () {
      _this.setState({
        open: true
      });
    };

    _this.handleDrawerClose = function () {
      _this.setState({
        open: false
      });
    };

    return _this;
  }

  _createClass(PersistentDrawerLeft, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme;
      var open = this.state.open;
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        position: "fixed",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.appBar, _defineProperty({}, classes.appBarShift, open))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default.a, {
        disableGutters: !open
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleDrawerOpen,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.menuButton, open && classes.hide)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "menu"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.title),
        variant: "h6",
        color: "inherit",
        noWrap: true
      }, "Beta testleri"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.grow
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionDesktop
      }, _list__WEBPACK_IMPORTED_MODULE_15__["LinkList"].map(function (i, k) {
        return i.collapse != undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, _extends({}, i, {
          key: k
        })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuButton, _extends({}, i, {
          key: k
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.drawer,
        variant: "persistent",
        anchor: "left",
        open: open,
        classes: {
          paper: classes.drawerPaper
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.drawerHeader
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onClick: this.handleDrawerClose
      }, theme.direction === "ltr" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "chevron_left"
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "chevron_right"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, null, _list__WEBPACK_IMPORTED_MODULE_15__["LinkList"].map(function (i, k) {
        return i.collapse != undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MobileCollapse, _extends({}, i, {
          key: k
        })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemCom, _extends({}, i, {
          key: k
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.content, _defineProperty({}, classes.contentShift, open))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.drawerHeader
      })));
    }
  }]);

  return PersistentDrawerLeft;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class) || _class);

var Icon = function Icon(_ref) {
  var name = _ref.name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons mr-3"
  }, name);
};

var ListItemCom = function ListItemCom(_ref2) {
  var to = _ref2.to,
      icon = _ref2.icon,
      title = _ref2.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
    to: to
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
    button: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13___default.a, null, icon != "" && icon != undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    name: icon
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14___default.a, {
    primary: title
  })));
};

var MenuButton = function MenuButton(_ref3) {
  var to = _ref3.to,
      icon = _ref3.icon,
      title = _ref3.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "inherit",
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"],
    to: to
  }, icon != "" && icon != undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, icon), title);
};

var MobileCollapse = function MobileCollapse(_ref4) {
  var to = _ref4.to,
      title = _ref4.title,
      icon = _ref4.icon,
      collapse = _ref4.collapse;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      redirect = _useState4[0],
      setRedirect = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, redirect && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Redirect"], {
    to: to
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_12___default.a, {
    button: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_13___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    name: icon
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14___default.a, {
    inset: true,
    primary: title,
    onClick: function onClick() {
      return setRedirect(!redirect);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_19___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    name: !open ? "expand_more" : "expand_less"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_18___default.a, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "div",
    disablePadding: true,
    style: {
      padding: "0 10px"
    }
  }, collapse.map(function (i, k) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemCom, _extends({}, i, {
      key: k
    }));
  }))));
};

var Dropdown = function Dropdown(_ref5) {
  var to = _ref5.to,
      title = _ref5.title,
      icon = _ref5.icon,
      collapse = _ref5.collapse;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      open = _useState6[0],
      setOpen = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      redirect = _useState8[0],
      setRedirect = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      redirectUrl = _useState10[0],
      setRedirectUrl = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState12 = _slicedToArray(_useState11, 2),
      anchorEl = _useState12[0],
      setAnchorEl = _useState12[1];

  var d = new Date();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, redirect && redirectUrl != "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Redirect"], {
    to: redirectUrl
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "inherit",
    "aria-owns": anchorEl,
    "aria-haspopup": "true",
    onClick: function onClick(event) {
      setAnchorEl(event.currentTarget);
      setOpen(!open);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    name: icon
  }), title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_20___default.a, {
    anchorEl: anchorEl,
    open: Boolean(open),
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    onClose: function onClose() {
      return setOpen(!open);
    }
  }, collapse.map(function (_ref6, k) {
    var to = _ref6.to,
        icon = _ref6.icon,
        title = _ref6.title;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21___default.a, {
      onClick: function onClick() {
        setOpen(!open);
        setRedirect(true);
        setRedirectUrl(to);
      },
      key: k
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
      name: icon
    }), title);
  })));
};

PersistentDrawerLeft.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(PersistentDrawerLeft));

/***/ }),

/***/ "./src/frontend/router/list.js":
/*!*************************************!*\
  !*** ./src/frontend/router/list.js ***!
  \*************************************/
/*! exports provided: LinkList, RouteList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkList", function() { return LinkList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteList", function() { return RouteList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../testPage */ "./src/testPage.js");


var LinkList = [{
  to: "/",
  icon: "home",
  title: "home"
}, {
  to: "/about",
  icon: "warning",
  title: "about",
  collapse: [{
    to: "/",
    icon: "home",
    title: "home"
  }, {
    to: "/about",
    icon: "warning",
    title: "about"
  }, {
    to: "/product",
    icon: "assignment",
    title: "product"
  }, {
    to: "/contact",
    icon: "phone",
    title: "contact"
  }]
}, {
  to: "/product",
  icon: "assignment",
  title: "product"
}, {
  to: "/contact",
  icon: "phone",
  title: "contact"
}];
var RouteList = [{
  exact: true,
  path: "/",
  Component: function Component() {
    return _testPage__WEBPACK_IMPORTED_MODULE_1__["Home"];
  }
}, {
  path: "/product",
  Component: function Component() {
    return _testPage__WEBPACK_IMPORTED_MODULE_1__["Product"];
  }
}, {
  path: "/about",
  Component: function Component() {
    return _testPage__WEBPACK_IMPORTED_MODULE_1__["About"];
  }
}, {
  path: "/contact",
  Component: function Component() {
    return _testPage__WEBPACK_IMPORTED_MODULE_1__["Contact"];
  }
}];


/***/ }),

/***/ "./src/testPage.js":
/*!*************************!*\
  !*** ./src/testPage.js ***!
  \*************************/
/*! exports provided: Home, Product, About, Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_forms_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/forms/builder */ "./src/components/forms/builder.js");



var FormJson = __webpack_require__(/*! ./json/form */ "./src/json/form.json");

var Home = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_builder__WEBPACK_IMPORTED_MODULE_1__["default"], FormJson[0]);
var Product = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Product Page");
var About = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About Page");
var Contact = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Contact Page");


/***/ })

}]);