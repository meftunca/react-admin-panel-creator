(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./src/other/page/components/FullScreenDialog.js":
/*!*******************************************************!*\
  !*** ./src/other/page/components/FullScreenDialog.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/index.es.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/Slide/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var useStyles = {
  appBar: {
    position: "relative",
    backgroundColor: "transparent",
    color: "#000"
  },
  flex: {
    flex: 1
  },
  containerWrapper: {
    padding: 10
  },
  grow: {
    flexGrow: 1
  },
  between: {
    justifyContent: "space-between"
  }
};

function Transition(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({
    direction: "up"
  }, props));
}

function FullScreenDialog(_ref) {
  var open = _ref.open,
      handleClose = _ref.handleClose,
      classes = _ref.classes,
      children = _ref.children,
      save = _ref.save;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullScreen: true,
    open: open,
    onClose: handleClose,
    TransitionComponent: Transition
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.appBar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.between
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "inherit",
    onClick: handleClose,
    "aria-label": "Close"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, "close")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h6",
    color: "inherit",
    className: classes.flex
  }, "Mail Olu\u015Fturucu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "inherit",
    onClick: save
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons mr-2"
  }, "save"), "Kaydet"))), children));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(useStyles)(FullScreenDialog));

/***/ }),

/***/ "./src/other/page/mailbox.js":
/*!***********************************!*\
  !*** ./src/other/page/mailbox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/InputBase/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_email_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-email-editor */ "./node_modules/react-email-editor/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_FullScreenDialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/FullScreenDialog */ "./src/other/page/components/FullScreenDialog.js");
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





















var styles = function styles(theme) {
  return {
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
  };
};

var MailBox =
/*#__PURE__*/
function (_Component) {
  _inherits(MailBox, _Component);

  function MailBox(props) {
    var _this;

    _classCallCheck(this, MailBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MailBox).call(this, props));

    _this.handleClose = function () {
      return _this.setState({
        modal: false
      });
    };

    _this.openEditor = function () {
      _this.setState({
        modal: true
      });
    };

    _this.onSave = function () {
      var editor = _this.state.editor;

      _this.editor.current.exportHtml(function (data) {
        var design = data.design,
            html = data.html;
        editor["data"] = html;
        console.log(design, html);

        _this.setState({
          editor: data
        });
      });
    };

    _this.state = {
      modal: false,
      editor: {
        data: ""
      }
    };
    _this.editor = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(MailBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      axios.post(window.location.origin.replace("https", "http") + ":8000/gmail/get").then(function (d) {
        return console.log(d);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var AvatarItem = MailPreview.AvatarItem,
          SeconadryAction = MailPreview.SeconadryAction,
          ItemText = MailPreview.ItemText;
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        container: true,
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 12,
        md: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MailHeader, {
        classes: classes
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        container: true,
        className: classes.root,
        spacing: 16
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 4,
        md: 3
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
        color: "primary",
        className: classes.button,
        onClick: function onClick() {
          window.location = window.location.origin + ":8000/auth/google/callback";
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        className: classes.extendedIcon
      }, "add"), " ", "Google Giriş Yap"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17___default.a, {
        color: "secondary",
        className: classes.button,
        onClick: this.openEditor
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        className: classes.extendedIcon
      }, "add"), " ", "\tYeni Mail Oluştur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, null, mailContainsProps.map(function (i, k) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MailContains, _extends({}, i, {
          key: k
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
        subheader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_15___default.a, null, "Etiketler")
      }, mailLabels.map(function (i, k) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MailContains, _extends({}, i, {
          key: k
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 8,
        md: 9
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 12,
        md: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: classes.rootList
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
        alignItems: "flex-start",
        button: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AvatarItem, {
        name: "Remy Sharp",
        img: "https://material-ui.com/static/images/avatar/1.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemText, {
        primary: "Brunch this weekend?",
        classes: classes,
        secondaryTitle: "Ali Connors",
        secondaryText: " \u2014 I'll be in your neighborhood doing errands this\u2026"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SeconadryAction, {
        reply: function reply() {
          return console.log("reply now");
        },
        remove: function remove() {
          return console.log("remove now");
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FullScreenDialog__WEBPACK_IMPORTED_MODULE_18__["default"], {
        open: this.state.modal,
        handleClose: this.handleClose,
        save: this.onSave
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.modalWrapper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_email_editor__WEBPACK_IMPORTED_MODULE_16__["default"], {
        minHeight: "100vh",
        ref: this.editor
      }))));
    }
  }]);

  return MailBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var MailPreview = {
  AvatarItem: function AvatarItem(_ref) {
    var name = _ref.name,
        img = _ref.img;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, {
      alt: name,
      src: img
    }));
  },
  SeconadryAction: function SeconadryAction(_ref2) {
    var reply = _ref2.reply,
        remove = _ref2.remove;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
      "aria-label": "Reply",
      onClick: reply
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, "reply")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
      "aria-label": "Remove",
      onClick: remove
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, "delete_outline")));
  },
  ItemText: function ItemText(_ref3) {
    var primary = _ref3.primary,
        classes = _ref3.classes,
        secondaryTitle = _ref3.secondaryTitle,
        secondaryText = _ref3.secondaryText;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
      primary: primary,
      secondary: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
        component: "span",
        className: classes.inline,
        color: "textPrimary"
      }, secondaryTitle), secondaryText)
    });
  }
};

function MailHeader(_ref4) {
  var classes = _ref4.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.rootHeader,
    elevation: 1
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.iconButton,
    "aria-label": "Menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, "menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.input,
    placeholder: "Maillerde Ara.."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.iconButton,
    "aria-label": "Search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, "search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.divider
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14___default.a, {
    color: "primary",
    className: classes.iconButton,
    "aria-label": "Reload"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, "refresh")));
}

var MailContains = function MailContains(_ref5) {
  var icon = _ref5.icon,
      primary = _ref5.primary,
      secondary = _ref5.secondary;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    button: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, icon)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
    primary: primary,
    secondary: secondary
  }));
};

MailHeader.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
MailBox.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

var Icon = function Icon(_ref6) {
  var children = _ref6.children,
      className = _ref6.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons " + className
  }, children);
};

var mailContainsProps = [{
  icon: "inbox",
  secondary: "",
  primary: "Gelen Kutusu"
}, {
  icon: "star",
  secondary: "",
  primary: "Yıldızlı"
}, {
  icon: "send",
  secondary: "",
  primary: "Gönderilenler"
}, {
  icon: "drafts",
  secondary: "",
  primary: "Taslaklar"
}];
var mailLabels = [{
  icon: "group_work",
  secondary: "",
  primary: "work"
}, {
  icon: "code",
  secondary: "",
  primary: "Yazılım"
}, {
  icon: "copyright",
  secondary: "",
  primary: "Kurumsal"
}, {
  icon: "accessibility",
  secondary: "",
  primary: "Kişisel"
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(MailBox));

/***/ })

}]);