(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/other/appBar.js":
/*!*****************************!*\
  !*** ./src/other/appBar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/InputBase/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/Badge/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/Menu/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
var _dec, _class, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var styles = function styles(theme) {
  var _title;

  return {
    grow: {
      flexGrow: 1
    },
    title: (_title = {
      display: "none"
    }, _defineProperty(_title, theme.breakpoints.up("sm"), {
      display: "block"
    }), _defineProperty(_title, "paddingLeft", 5), _defineProperty(_title, "paddingRight", 5), _title),
    search: _defineProperty({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__["fade"])(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__["fade"])(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }),
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: _defineProperty({
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create("width"),
      width: "100%"
    }, theme.breakpoints.up("md"), {
      width: 200
    }),
    sectionDesktop: _defineProperty({
      display: "none"
    }, theme.breakpoints.up("md"), {
      display: "flex"
    }),
    sectionMobile: _defineProperty({
      display: "flex"
    }, theme.breakpoints.up("md"), {
      display: "none"
    })
  };
};

var AppBar = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["observer"])(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppBar, _React$Component);

  function AppBar(props) {
    var _this;

    _classCallCheck(this, AppBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppBar).call(this, props));

    _this.handleMobileMenuOpen = function (event) {
      _this.setState({
        mobileMoreAnchorEl: event.currentTarget
      });
    };

    _this.handleMobileMenuClose = function () {
      _this.setState({
        mobileMoreAnchorEl: null
      });
    };

    _this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      user: {},
      show: false
    };
    return _this;
  }

  _createClass(AppBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        show: true,
        user: JSON.parse(localStorage.getItem("data"))
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          anchorEl = _this$state.anchorEl,
          mobileMoreAnchorEl = _this$state.mobileMoreAnchorEl,
          show = _this$state.show,
          user = _this$state.user;
      var classes = this.props.classes;
      var isMenuOpen = Boolean(anchorEl);
      var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
      var renderMobileMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
        anchorEl: mobileMoreAnchorEl,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        open: isMobileMenuOpen,
        onClose: this.handleMobileMenuClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_5___default.a, {
        badgeContent: 4,
        color: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "mail"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Messages")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_5___default.a, {
        badgeContent: 11,
        color: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "notifications"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Notifications")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
        onClick: function onClick() {
          _this2.setState({
            anchorEl: null
          });

          _this2.props.store.update_profileDrawer(true);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        "aria-owns": isMenuOpen ? "material-appbar" : undefined,
        "aria-haspopup": "true",
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "account_circle"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: classes.title,
        variant: "caption",
        color: "inherit",
        noWrap: true
      }, user.name))));
      if (show == false) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.search
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.searchIcon
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "search"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4___default.a, {
        placeholder: "Search\u2026",
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.grow
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionDesktop
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_5___default.a, {
        badgeContent: 4,
        color: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "mail"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_5___default.a, {
        badgeContent: 17,
        color: "secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "notifications"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        "aria-owns": isMenuOpen ? "material-appbar" : undefined,
        "aria-haspopup": "true",
        color: "inherit",
        onClick: function onClick() {
          _this2.setState({
            anchorEl: null
          });

          _this2.props.store.update_profileDrawer(true);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "account_circle"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: classes.title,
        variant: "caption",
        color: "inherit",
        noWrap: true
      }, user.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.sectionMobile
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
        "aria-haspopup": "true",
        onClick: this.handleMobileMenuOpen,
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        name: "more"
      }))), renderMobileMenu);
    }
  }]);

  return AppBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class) || _class);
AppBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

var Icon = function Icon(_ref) {
  var name = _ref.name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, name);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(styles)(AppBar));

/***/ })

}]);