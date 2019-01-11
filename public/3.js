(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/other/page/components/twitter.js":
/*!**********************************************!*\
  !*** ./src/other/page/components/twitter.js ***!
  \**********************************************/
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
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/Chip/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Face */ "./node_modules/@material-ui/icons/Face.js");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var javascript_time_ago_locale_tr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! javascript-time-ago/locale/tr */ "./node_modules/javascript-time-ago/locale/tr/index.js");
/* harmony import */ var javascript_time_ago_locale_tr__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_tr__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/Box/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
















 // Load locale-specific relative date/time formatting rules.





var blobToBase64 = __webpack_require__(/*! blob-to-base64 */ "./node_modules/blob-to-base64/dist/blob-to-base64.js"); // Add locale-specific relative date/time formatting rules.


javascript_time_ago__WEBPACK_IMPORTED_MODULE_8__["default"].addLocale(javascript_time_ago_locale_tr__WEBPACK_IMPORTED_MODULE_16___default.a);
var timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_8__["default"]("tr-TR");

var TwitterApi =
/*#__PURE__*/
function (_Component) {
  _inherits(TwitterApi, _Component);

  function TwitterApi() {
    var _this;

    _classCallCheck(this, TwitterApi);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TwitterApi).call(this));

    _this.update = function () {
      axios.post(window.location.origin + ":8000/twitter", {
        id: "lorem ipsm"
      }).then(function (res) {
        _this.setState({
          data: res.data,
          visible: true
        });
      });
    };

    _this.state = {
      data: [],
      visible: false
    };
    return _this;
  }

  _createClass(TwitterApi, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      if (this.state.visible == false) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TwitterList, {
        data: this.state.data,
        classes: classes,
        full: this.props.full ? false : true,
        update: this.update
      });
    }
  }]);

  return TwitterApi;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var styles = function styles(theme) {
  return {
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
    gutterMargin: {
      margin: "4px 0"
    }
  };
};

function TwitterList(_ref) {
  var data = _ref.data,
      update = _ref.update,
      full = _ref.full,
      classes = _ref.classes;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      tweet = _React$useState2[0],
      setTweet = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      tweetFile = _React$useState4[0],
      setTweetFile = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      open = _React$useState6[0],
      setOpen = _React$useState6[1];

  var dropzone = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var modalToggle = function modalToggle() {
    setOpen(!open);
    dropzone.current.click();
  };

  var setFile = function setFile() {
    var files = dropzone.current.files;
    console.log(files);
    blobToBase64(files[0], function (error, base64) {
      if (!error) {
        setTweetFile(base64);
      }
    });
  };

  var postTweet = function postTweet() {
    if (tweet.length < 1 || tweet.length > 239) {
      alert("lütfen " + tweet.length + "'den " + (tweet.length < 1 ? "fazla " : "az ") + "karakter kullanın");
    } else {
      Axios.post("http://localhost:8000/twitter-post", {
        status: tweet + "\n Deneme zamanı : " + Date.now(),
        file: tweetFile
      }).then(function (d) {
        setTimeout(function () {
          return update();
        }, 1000);
      }); // setTweet("");
    }
  };

  var tweetUpdate = function tweetUpdate(_ref2) {
    var target = _ref2.target;
    return setTweet(target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.relative
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: full == undefined ? classes.root : classes.fullHg,
    subheader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__["unstable_Box"], {
      display: "flex",
      justifyContent: "space-between",
      p: 1,
      bgcolor: "background.paper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__["unstable_Box"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_12___default.a, {
      component: "div"
    }, "Twitter Posts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_17__["unstable_Box"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
      size: "small",
      onClick: update
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "refresh"))))
  }, data != [] && data[0].code == undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, data.map(function (_ref3, k) {
    var user = _ref3.user,
        text = _ref3.text,
        created_at = _ref3.created_at,
        entities = _ref3.entities;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: k
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
      alt: user.name,
      src: user.profile_image_url
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
      secondary: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.gutterMargin
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
        component: "span",
        className: classes.inline,
        color: "textPrimary"
      }, timeAgo.format(new Date(created_at))), entities.user_mentions.map(function (_ref4, k) {
        var screen_name = _ref4.screen_name,
            name = _ref4.name;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10___default.a, {
          avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
            component: "span"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_11___default.a, null)),
          component: "span",
          variant: "outlined",
          label: screen_name,
          key: k,
          className: classes.chip
        });
      }))
    })));
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    component: "p",
    className: classes.inlineCustom,
    color: "textPrimary"
  }, "\u015Euan Twitter Apisini kullanamazs\u0131n\u0131z. Gerekli bilgileri girmek i\xE7in =>", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["Link"], {
    to: "/api-yonetimi"
  }, "Adresine gidin"))), data != [] && data[0].code == undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: full != undefined && classes.bottomFix
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15___default.a, {
    id: "twitter-post-button",
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(classes.margin, classes.textField),
    variant: "filled",
    type: "textarea",
    label: "Twitter post",
    value: tweet,
    onChange: tweetUpdate,
    fullWidth: true,
    InputProps: {
      endAdornment: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14___default.a, {
        variant: "filled",
        position: "end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
        color: "secondary",
        "aria-label": "Toggle password visibility",
        onClick: modalToggle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        style: {
          fontSize: 16
        }
      }, "image")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a, {
        color: "primary",
        "aria-label": "Toggle password visibility",
        onClick: postTweet
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        style: {
          fontSize: 16
        }
      }, "send")))
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    hidden: true,
    ref: dropzone,
    onChange: setFile
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(TwitterApi));

/***/ })

}]);