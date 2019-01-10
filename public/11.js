(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/react-json-pretty/dist/JSONPretty.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-json-pretty/dist/JSONPretty.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var PropTypes = __importStar(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function getStyle(name, theme) {
    return theme ? theme[name] ? " style=\"" + theme[name] + "\"" : '' : '';
}
var JSONPretty = /** @class */ (function (_super) {
    __extends(JSONPretty, _super);
    function JSONPretty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONPretty.prototype.render = function () {
        var _a = this.props, json = _a.json, data = _a.data, replacer = _a.replacer, space = _a.space, themeClassName = _a.themeClassName, theme = _a.theme, silent = _a.silent, rest = __rest(_a, ["json", "data", "replacer", "space", "themeClassName", "theme", "silent"]);
        var obj = data || json;
        // See https://facebook.github.io/react/warnings/unknown-prop.html
        if (typeof obj === 'string') {
            try {
                obj = JSON.parse(obj);
            }
            catch (e) {
                if (!silent) {
                    console.warn("[react-json-pretty]: " + e.message);
                }
                return (React.createElement("div", __assign({}, rest, { dangerouslySetInnerHTML: { __html: "<pre class=" + themeClassName + getStyle('main', theme) + ">" + obj + "</pre>"
                    } })));
            }
        }
        return (React.createElement("div", __assign({}, rest, { dangerouslySetInnerHTML: { __html: "<pre class=" + themeClassName + getStyle('main', theme) + ">" + this._pretty.call(this, theme, obj, replacer, +space) + "</pre>"
            } })));
    };
    // JSON =》 HTML转换器
    JSONPretty.prototype._pretty = function (theme, obj, replacer, space) {
        // 逐行匹配，列举：“key”: "value" | "key": value | "key": [ | "key": { | "key": [],| "Key": {},
        var regLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([,[{]|\[\s*\],?|\{\s*\},?)?$/mg;
        var text = JSON.stringify(obj, typeof replacer === 'function' ? replacer : null, isNaN(space) ? 2 : space);
        /* istanbul ignore next */
        if (!text) {
            return text;
        }
        return text.replace(/&/g, '&amp;').replace(/\\"([^,])/g, '\\&quot;$1')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(regLine, this._replace.bind(null, theme));
    };
    // 格式化函数
    JSONPretty.prototype._replace = function (theme, match, ind, key, val, tra) {
        var spanEnd = '</span>';
        var keySpan = "<span class=__json-key__" + getStyle('key', theme) + ">";
        var valSpan = "<span class=__json-value__" + getStyle('value', theme) + ">";
        var strSpan = "<span class=__json-string__" + getStyle('string', theme) + ">";
        var booSpan = "<span class=__json-boolean__" + getStyle('boolean', theme) + ">";
        var sps = ind || '';
        if (key) {
            sps = sps + '"' + keySpan + key.replace(/^"|":\s$/g, '') + spanEnd + '": ';
        }
        if (val) {
            if (val === 'true' || val === 'false') {
                sps = sps + booSpan + val + spanEnd;
            }
            else {
                sps = sps + (val[0] === '"' ? strSpan : valSpan) + val + spanEnd;
            }
        }
        return sps + (tra || '');
    };
    JSONPretty.propTypes = {
        data: PropTypes.any,
        json: PropTypes.any,
        replacer: PropTypes.func,
        silent: PropTypes.bool,
        space: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        theme: PropTypes.object,
        themeClassName: PropTypes.string,
    };
    JSONPretty.defaultProps = {
        data: '',
        json: '',
        silent: true,
        space: 2,
        themeClassName: '__json-pretty__',
    };
    return JSONPretty;
}(React.Component));
module.exports = JSONPretty;


/***/ }),

/***/ "./node_modules/react-json-pretty/dist/monikai.js":
/*!********************************************************!*\
  !*** ./node_modules/react-json-pretty/dist/monikai.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {
    main: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
    key: 'color:#f92672;',
    string: 'color:#fd971f;',
    value: 'color:#a6e22e;',
    boolean: 'color:#ac81fe;',
};


/***/ }),

/***/ "./src/other/creator/component/collapse.js":
/*!*************************************************!*\
  !*** ./src/other/creator/component/collapse.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/index.es.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/Collapse/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      maxWidth: 360
    },
    nested: {
      paddingLeft: 4 * 4
    }
  };
});

function CollapseFormList(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.open),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  function handleClick() {
    setOpen(!open);
  }

  console.log("prop", props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    button: true,
    onClick: handleClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3___default.a, {
    primary: props.title
  }), open ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    name: "expand_less"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    name: "expand_more"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4___default.a, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    spacing: 16
  }, props.children)));
}

var Icon = function Icon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, props.name);
};

/* harmony default export */ __webpack_exports__["default"] = (CollapseFormList);

/***/ }),

/***/ "./src/other/creator/form.js":
/*!***********************************!*\
  !*** ./src/other/creator/form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/index.es.js");
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! informed */ "./node_modules/informed/dist/index.js");
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(informed__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "./node_modules/@material-ui/core/BottomNavigation/index.js");
/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "./node_modules/@material-ui/core/BottomNavigationAction/index.js");
/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_json_pretty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-json-pretty */ "./node_modules/react-json-pretty/dist/JSONPretty.js");
/* harmony import */ var react_json_pretty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_json_pretty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _component_collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/collapse */ "./src/other/creator/component/collapse.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_19__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






















var uniqid = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");

var FormCreator =
/*#__PURE__*/
function (_Component) {
  _inherits(FormCreator, _Component);

  function FormCreator(props) {
    var _this;

    _classCallCheck(this, FormCreator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormCreator).call(this, props));

    _this.post = function (data) {
      axios.post(window.location.origin.replace("https", "http") + ":8000/create-form", data).then(function (d) {
        return console.log(d);
      });
    };

    _this.view = function () {
      return console.log("view");
    };

    _this.send = function () {
      return _this.handleClick();
    };

    _this.add = function () {
      return _this.setState({
        appendInput: _this.state.appendInput.concat("")
      });
    };

    _this.state = {
      appendInput: [""],
      formData: {}
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setFormApi = _this.setFormApi.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FormCreator, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$formApi$getStat = this.formApi.getState(),
          values = _this$formApi$getStat.values;

      var column = [];
      values["formItem"] = Object.values(values.formItem)[0];
      values.formItem.map(function (i) {
        column.push({
          name: i.name,
          label: i.label
        });
      });
      values["tableItem"] = column;
      this.setState({
        formData: values
      });
      this.post(values);
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formApi) {
      this.formApi = formApi;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {// axios.post(window.location.origin+":8000/get-form-json").then(({ data }) => this.setFormApi(data));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.paper,
        elevation: 1
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        spacing: 24
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        md: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
        component: "h5",
        variant: "h4"
      }, "Form Creator")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        md: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(informed__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        id: "form-" + name,
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        spacing: 24
      }, FormItemList.map(function (i, k) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemCreator, _extends({
          appendSize: _this2.state.appendInput,
          classes: classes
        }, i, {
          key: k
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        md: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormManagement, {
        classes: classes,
        view: this.view,
        send: this.send,
        add: this.add
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        md: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_json_pretty__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          padding: 12
        },
        id: "json-pretty",
        data: this.state.formData,
        theme: __webpack_require__(/*! react-json-pretty/dist/monikai */ "./node_modules/react-json-pretty/dist/monikai.js"),
        space: 2
      }))));
    }
  }]);

  return FormCreator;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ItemCreator = Object(informed__WEBPACK_IMPORTED_MODULE_6__["asField"])(function (_ref) {
  var _React$createElement;

  var fieldState = _ref.fieldState,
      fieldApi = _ref.fieldApi,
      props = _objectWithoutProperties(_ref, ["fieldState", "fieldApi"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange = props.onChange,
      _onBlur = props.onBlur,
      appendSize = props.appendSize,
      initialValue = props.initialValue,
      classes = props.classes,
      FormItem = props.FormItem,
      label = props.label,
      icon = props.icon,
      breakpoint = props.breakpoint,
      validate = props.validate,
      field = props.field,
      forwardedRef = props.forwardedRef,
      scope = props.scope,
      list = props.list,
      type = props.type,
      selectData = props.selectData,
      rest = _objectWithoutProperties(props, ["onChange", "onBlur", "appendSize", "initialValue", "classes", "FormItem", "label", "icon", "breakpoint", "validate", "field", "forwardedRef", "scope", "list", "type", "selectData"]);

  var id = uniqid;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    item: true
  }, breakpoint), scope == undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, type == "select" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: classes.formControl,
    fullWidth: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13___default.a, null, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16___default.a, (_React$createElement = {
    autoWidth: true,
    value: value,
    id: label.replace(" ", "_"),
    label: label,
    inputRef: forwardedRef
  }, _defineProperty(_React$createElement, "value", !value && value !== 0 ? "" : value), _defineProperty(_React$createElement, "onChange", function onChange(e) {
    setValue(e.target.value);

    if (_onChange) {
      _onChange(e);
    }
  }), _defineProperty(_React$createElement, "onBlur", function onBlur(e) {
    setTouched();

    if (_onBlur) {
      _onBlur(e);
    }
  }), _defineProperty(_React$createElement, "input", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_17___default.a, {
    fullWidth: true,
    name: field,
    id: id
  })), _React$createElement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
    value: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "None")), selectData.map(function (i, k) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
      value: i,
      key: k
    }, i);
  }))) : type == "control" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_12___default.a, {
    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11___default.a, {
      id: label.replace(" ", "_"),
      inputRef: forwardedRef,
      value: "false",
      onChange: function onChange(e) {
        setValue(e.target.value);

        if (_onChange) {
          _onChange(e);
        }
      },
      onBlur: function onBlur(e) {
        setTouched();

        if (_onBlur) {
          _onBlur(e);
        }
      }
    }),
    label: label
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
    id: label.replace(" ", "_"),
    label: label,
    inputRef: forwardedRef,
    value: !value && value !== 0 ? "" : value,
    onChange: function onChange(e) {
      setValue(e.target.value);

      if (_onChange) {
        _onChange(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched();

      if (_onBlur) {
        _onBlur(e);
      }
    },
    className: classes.textField,
    fullWidth: true,
    InputProps: icon != "" ? {
      startAdornment: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default.a, {
        position: "start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons"
      }, icon))
    } : false
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, scope.type == "scope" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 16,
    style: {
      width: "90%",
      margin: "0 5%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    md: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "body2",
    gutterBottom: true
  }, scope.title), scope.description != "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "body2",
    gutterBottom: true
  }, scope.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(informed__WEBPACK_IMPORTED_MODULE_6__["Scope"], {
    scope: field
  }, list.map(function (i, k) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemCreator, _extends({
      classes: classes
    }, i, {
      key: k
    }));
  }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(informed__WEBPACK_IMPORTED_MODULE_6__["Scope"], {
    scope: field
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "body2",
    gutterBottom: true
  }, scope.title), scope.description != "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "body2"
  }, scope.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_19___default.a, {
    component: "nav",
    className: classes.root
  }, appendSize.map(function (i, k) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_collapse__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: k + 1 + ". input alanı",
      open: appendSize.length == 1 + k,
      key: k
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(informed__WEBPACK_IMPORTED_MODULE_6__["Scope"], {
      scope: field + "[" + k + "]"
    }, list.map(function (i, k) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemCreator, _extends({
        field: i.field + "[" + k + "]",
        classes: classes
      }, i, {
        key: k
      }));
    })));
  }))))));
});
var mongoType = ["String", "Number", "Date", "Buffer", "Boolean", "Mixed", "ObjectId", "Array", "Decimal128", "Map"];
var FormItemList = [{
  field: "name",
  validate: "",
  FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
  label: "Formun ismi",
  icon: "face",
  breakpoint: {
    xs: 12,
    md: 6
  }
}, {
  field: "title",
  validate: "",
  FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
  label: "Formun Başlığı",
  icon: "title",
  breakpoint: {
    xs: 12,
    md: 6
  }
}, {
  field: "post_url",
  validate: "",
  FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
  label: "Gönderileceği url",
  icon: "insert_link",
  breakpoint: {
    xs: 12,
    md: 6
  }
}, {
  field: "get_url",
  validate: "",
  FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
  label: "Tablo verilerinin alınacağı url",
  icon: "insert_link",
  breakpoint: {
    xs: 12,
    md: 6
  }
}, {
  scope: {
    title: "Başlık Ayarları",
    type: "scope",
    append: false,
    description: ""
  },
  field: "header",
  breakpoint: {
    xs: 12,
    md: 12
  },
  list: [{
    field: "label",
    validate: "",
    FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: "Başlık etiketi",
    icon: "label",
    breakpoint: {
      xs: 12,
      md: 6
    }
  }, {
    field: "icon",
    validate: "",
    FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: "Başlık simgesi",
    icon: "change_history",
    breakpoint: {
      xs: 12,
      md: 6
    }
  }]
}, {
  scope: {
    title: "Rota Ayarları",
    type: "scope",
    append: false,
    description: ""
  },
  field: "route",
  breakpoint: {
    xs: 12,
    md: 12
  },
  list: [{
    field: "path",
    validate: "",
    FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: "Rotayı buraya yazın",
    icon: "router",
    breakpoint: {
      xs: 12,
      md: 6
    }
  }, {
    field: "exact",
    validate: "",
    FormItem: _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11___default.a,
    label: "Exact durumu",
    icon: "warning",
    breakpoint: {
      xs: 12,
      md: 6
    },
    type: "control"
  }]
}, {
  scope: {
    title: "Form input oluşturma",
    type: "array",
    append: false,
    description: "Bu alanda hazır form,veri tablosu ve mongoDB collection oluşturmak için hazır yapıları kullanarak yeni alanlar oluşturabilirsiniz."
  },
  field: "formItem",
  breakpoint: {
    xs: 12,
    md: 12
  },
  list: [{
    field: "name",
    validate: "",
    FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: "İnput ismi",
    icon: "title",
    breakpoint: {
      xs: 12,
      md: 6
    }
  }, {
    field: "icon",
    validate: "",
    FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: "İnput simgesi",
    icon: "change_history",
    breakpoint: {
      xs: 12,
      md: 6
    }
  }, {
    field: "label",
    validate: "",
    FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: "İnput etiketi",
    icon: "label",
    breakpoint: {
      xs: 12,
      md: 6
    }
  }, {
    field: "type",
    validate: "",
    FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: "İnput tipi",
    icon: "merge_type",
    breakpoint: {
      xs: 12,
      md: 6
    }
  }, {
    field: "regex",
    validate: "",
    FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: "İnput regex(beta)",
    icon: "format_shapes",
    breakpoint: {
      xs: 12,
      md: 6
    }
  }, {
    field: "required",
    validate: "",
    FormItem: _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11___default.a,
    label: "Zorunluluk durumu",
    icon: "warning",
    breakpoint: {
      xs: 12,
      md: 6
    },
    type: "control"
  }, {
    field: "mongoType",
    validate: "",
    FormItem: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: "Mongo db sütun tipi",
    icon: "db",
    breakpoint: {
      xs: 12,
      md: 12
    },
    type: "select",
    selectData: mongoType
  }]
}];

var styles = function styles(theme) {
  return {
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    paper: {
      padding: 16
    },
    management: {
      backgroundColor: "#f3f3f3"
    },
    textField: {
      marginLeft: 8,
      marginRight: 8
    },
    dense: {
      marginTop: 16
    },
    menu: {
      width: 200
    }
  };
};

var FormManagement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormManagement, _React$Component);

  function FormManagement() {
    var _getPrototypeOf2;

    var _this3;

    _classCallCheck(this, FormManagement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormManagement)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this3.state = {
      value: 0
    };

    _this3.handleChange = function (event, value) {
      _this3.setState({
        value: value
      });
    };

    return _this3;
  }

  _createClass(FormManagement, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          view = _this$props2.view,
          send = _this$props2.send,
          add = _this$props2.add;
      var value = this.state.value;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_7___default.a, {
        value: value,
        onChange: this.handleChange,
        showLabels: true,
        className: classes.management
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: send,
        label: "G\xF6nder ve y\xFCkle",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "material-icons"
        }, "send")
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: view,
        label: "G\xF6ster",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "material-icons"
        }, "rate_review")
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: add,
        label: "Yeni Sat\u0131r Ekle",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "material-icons"
        }, "add")
      }));
    }
  }]);

  return FormManagement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  withTheme: true
})(FormCreator));

/***/ })

}]);