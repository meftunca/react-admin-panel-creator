(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/other/example/register.js":
/*!***************************************!*\
  !*** ./src/other/example/register.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/Input/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var styles = function styles(theme) {
  return {
    main: _defineProperty({
      width: "auto",
      display: "block",
      // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2), {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }),
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    },
    error: {
      padding: "20px 10px",
      margin: "12px 0",
      color: "white",
      backgroundColor: "#f44336"
    },
    warning: {
      padding: "20px 10px",
      margin: "12px 0",
      color: "white",
      backgroundColor: "#ff9800"
    },
    success: {
      padding: "20px 10px",
      margin: "12px 0",
      color: "white",
      backgroundColor: "#4caf50"
    }
  };
};

function Register(_ref) {
  var store = _ref.store,
      classes = _ref.classes;
  var ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      token = _useState2[0],
      setToken = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      turnData = _useState4[0],
      setTurnData = _useState4[1];

  var submit = function submit() {
    var form = new FormData(ref.current);
    var data = {};
    form.append("token", Boolean(token));
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = form.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            k = _step$value[0],
            v = _step$value[1];

        console.log(k, v);
        data[k] = v;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    axios.post(window.location.origin + ":8000/user-register", data).then(
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var data, userData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _ref2.data;
                setTurnData(data.data); // store update

                if (!(data.status == "success")) {
                  _context.next = 12;
                  break;
                }

                _context.next = 5;
                return store.update_userData(data.data);

              case 5:
                _context.next = 7;
                return store.update_login(true);

              case 7:
                _context.next = 9;
                return store.update_registerPage(false);

              case 9:
                userData = JSON.stringify(data.data);
                _context.next = 12;
                return localStorage.setItem("data", userData);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }()).catch(function (e) {
      return console.log(e);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: classes.main
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, null), turnData != {} && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "title",
    align: "center",
    gutterBottom: true,
    className: classes[turnData.status]
  }, turnData.message)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: classes.form,
    ref: ref,
    id: "register"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    margin: "normal",
    required: true,
    fullWidth: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default.a, {
    htmlFor: "userName"
  }, " Kullan\u0131c\u0131 ad\u0131"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "userName",
    name: "userName",
    autoFocus: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    margin: "normal",
    required: true,
    fullWidth: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default.a, {
    htmlFor: "eMail"
  }, "Email Adresiniz"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "eMail",
    name: "eMail",
    autoFocus: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    margin: "normal",
    required: true,
    fullWidth: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default.a, {
    htmlFor: "name"
  }, "Ad\u0131n\u0131z"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "name",
    name: "name",
    autoFocus: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    margin: "normal",
    required: true,
    fullWidth: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default.a, {
    htmlFor: "lastName"
  }, "SoyAd\u0131n\u0131z"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "lastName",
    name: "lastName",
    autoFocus: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, {
    margin: "normal",
    required: true,
    fullWidth: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9___default.a, {
    htmlFor: "password"
  }, "\u015Eifre"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8___default.a, {
    name: "password",
    type: "password",
    id: "password",
    autoComplete: "current-password"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7___default.a, {
      value: String(token),
      onChange: function onChange() {
        return setToken(!String(token));
      },
      color: "primary"
    }),
    label: "Beni Hat\u0131rla"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: submit,
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit
  }, "Sign in")));
}

Register.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_11___default()(styles)(Register));

/***/ })

}]);