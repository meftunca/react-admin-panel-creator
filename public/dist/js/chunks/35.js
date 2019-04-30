(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./src/other/main/login.js":
/*!*********************************!*\
  !*** ./src/other/main/login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"./node_modules/@material-ui/core/esm/FormControl/index.js\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"./node_modules/@material-ui/core/esm/FormControlLabel/index.js\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"./node_modules/@material-ui/core/esm/Checkbox/index.js\");\n/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ \"./node_modules/@material-ui/core/esm/Input/index.js\");\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ \"./node_modules/@material-ui/core/esm/InputLabel/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ \"./node_modules/@material-ui/core/styles/withStyles.js\");\n/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    main: _defineProperty({\n      width: \"auto\",\n      display: \"block\",\n      // Fix IE 11 issue.\n      marginLeft: theme.spacing(3),\n      marginRight: theme.spacing(3)\n    }, theme.breakpoints.up(400 + theme.spacing(3) * 2), {\n      width: 400,\n      marginLeft: \"auto\",\n      marginRight: \"auto\"\n    }),\n    paper: {\n      marginTop: theme.spacing(3),\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\",\n      padding: \"\".concat(theme.spacing(2), \"px \").concat(theme.spacing(3), \"px \").concat(theme.spacing(3), \"px\")\n    },\n    avatar: {\n      margin: theme.spacing(2),\n      backgroundColor: theme.palette.secondary.main\n    },\n    form: {\n      width: \"100%\",\n      // Fix IE 11 issue.\n      marginTop: theme.spacing(2)\n    },\n    submit: {\n      marginTop: theme.spacing(3)\n    },\n    error: {\n      padding: \"20px 10px\",\n      margin: \"12px 0\",\n      color: \"white\",\n      backgroundColor: \"#f44336\"\n    },\n    warning: {\n      padding: \"20px 10px\",\n      margin: \"12px 0\",\n      color: \"white\",\n      backgroundColor: \"#ff9800\"\n    },\n    success: {\n      padding: \"20px 10px\",\n      margin: \"12px 0\",\n      color: \"white\",\n      backgroundColor: \"#4caf50\"\n    }\n  };\n};\n\nconsole.log(\"process\", \"development\");\nvar location =  true ? window.location.origin + \":3001\" : undefined;\n\nfunction SignIn(_ref) {\n  var classes = _ref.classes,\n      store = _ref.store;\n  var ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      token = _useState2[0],\n      setToken = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      turnData = _useState4[0],\n      setTurnData = _useState4[1];\n\n  var data = {};\n\n  var submit = function submit() {\n    var form = new FormData(ref.current);\n    form.append(\"token\", Boolean(token));\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = form.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var _step$value = _slicedToArray(_step.value, 2),\n            k = _step$value[0],\n            v = _step$value[1];\n\n        data[k] = v;\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return != null) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(\"/login\", data) // .post(\"/login\", data)\n    .then(\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _asyncToGenerator(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {\n        var data, userData;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                data = _ref2.data;\n                console.log(data);\n                setTurnData(data); // store update\n\n                if (!(data.status == \"success\")) {\n                  _context2.next = 8;\n                  break;\n                }\n\n                userData = JSON.stringify(data.data);\n                _context2.next = 7;\n                return localStorage.setItem(\"data\", userData);\n\n              case 7:\n                setTimeout(\n                /*#__PURE__*/\n                _asyncToGenerator(\n                /*#__PURE__*/\n                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          _context.next = 2;\n                          return store.update_userData(data.data);\n\n                        case 2:\n                          _context.next = 4;\n                          return store.update_login(true);\n\n                        case 4:\n                          _context.next = 6;\n                          return store.update_registerPage(false);\n\n                        case 6:\n                          window.location.reload();\n\n                        case 7:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee, this);\n                })), 1500);\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      return function (_x) {\n        return _ref3.apply(this, arguments);\n      };\n    }()).catch(function (e) {\n      return console.log(e);\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"main\", {\n    className: classes.main\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), turnData != {} && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    variant: \"title\",\n    align: \"center\",\n    gutterBottom: true,\n    className: classes[turnData.status]\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    className: \"material-icons\"\n  }, turnData.status == \"success\" ? \"done_outline\" : turnData.status), \" \", turnData.message)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", {\n    className: classes.form,\n    ref: ref,\n    id: \"login\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    margin: \"normal\",\n    required: true,\n    fullWidth: true\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    htmlFor: \"login-name\"\n  }, \"Email Yada Kullan\\u0131c\\u0131 ad\\u0131\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    id: \"login-name\",\n    name: \"email\",\n    autoComplete: \"email\",\n    autoFocus: true\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    margin: \"normal\",\n    required: true,\n    fullWidth: true\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    htmlFor: \"login-password\"\n  }, \"\\u015Eifre\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    name: \"password\",\n    type: \"password\",\n    id: \"login-password\",\n    autoComplete: \"current-password\"\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      value: String(token),\n      onChange: function onChange() {\n        return setToken(!String(token));\n      },\n      color: \"primary\"\n    }),\n    label: \"Beni Hat\\u0131rla\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onClick: submit,\n    fullWidth: true,\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.submit\n  }, \"Sign in\")));\n}\n\nSignIn.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_11___default()(styles)(SignIn));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXIvbWFpbi9sb2dpbi5qcz83N2NlIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwibWFpbiIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJicmVha3BvaW50cyIsInVwIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJhdmF0YXIiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwiZm9ybSIsInN1Ym1pdCIsImVycm9yIiwiY29sb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwibG9jYXRpb24iLCJ3aW5kb3ciLCJvcmlnaW4iLCJTaWduSW4iLCJjbGFzc2VzIiwic3RvcmUiLCJyZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInVzZVN0YXRlIiwidG9rZW4iLCJzZXRUb2tlbiIsInR1cm5EYXRhIiwic2V0VHVybkRhdGEiLCJkYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50IiwiYXBwZW5kIiwiQm9vbGVhbiIsImVudHJpZXMiLCJrIiwidiIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJzdGF0dXMiLCJ1c2VyRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0VGltZW91dCIsInVwZGF0ZV91c2VyRGF0YSIsInVwZGF0ZV9sb2dpbiIsInVwZGF0ZV9yZWdpc3RlclBhZ2UiLCJyZWxvYWQiLCJjYXRjaCIsImUiLCJtZXNzYWdlIiwiU3RyaW5nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QW5CLENBQWYiLCJmaWxlIjoiLi9zcmMvb3RoZXIvbWFpbi9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gICBtYWluOiB7XG4gICAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsIC8vIEZpeCBJRSAxMSBpc3N1ZS5cbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCg0MDAgKyB0aGVtZS5zcGFjaW5nKDMpICogMildOiB7XG4gICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgICAgICBtYXJnaW5SaWdodDogXCJhdXRvXCJcbiAgICAgIH1cbiAgIH0sXG4gICBwYXBlcjoge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDMpfXB4ICR7dGhlbWUuc3BhY2luZygzKX1weGBcbiAgIH0sXG4gICBhdmF0YXI6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgfSxcbiAgIGZvcm06IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIiwgLy8gRml4IElFIDExIGlzc3VlLlxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpXG4gICB9LFxuICAgc3VibWl0OiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMylcbiAgIH0sXG4gICBlcnJvcjoge1xuICAgICAgcGFkZGluZzogXCIyMHB4IDEwcHhcIixcbiAgICAgIG1hcmdpbjogXCIxMnB4IDBcIixcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0NDMzNlwiXG4gICB9LFxuICAgd2FybmluZzoge1xuICAgICAgcGFkZGluZzogXCIyMHB4IDEwcHhcIixcbiAgICAgIG1hcmdpbjogXCIxMnB4IDBcIixcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmOTgwMFwiXG4gICB9LFxuICAgc3VjY2Vzczoge1xuICAgICAgcGFkZGluZzogXCIyMHB4IDEwcHhcIixcbiAgICAgIG1hcmdpbjogXCIxMnB4IDBcIixcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRjYWY1MFwiXG4gICB9XG59KTtcbmNvbnNvbGUubG9nKFwicHJvY2Vzc1wiLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5jb25zdCBsb2NhdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCI6MzAwMVwiIDogXCJcIjtcbmZ1bmN0aW9uIFNpZ25Jbih7IGNsYXNzZXMsIHN0b3JlIH0pIHtcbiAgIGNvbnN0IHJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbdHVybkRhdGEsIHNldFR1cm5EYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEocmVmLmN1cnJlbnQpO1xuICAgICAgZm9ybS5hcHBlbmQoXCJ0b2tlblwiLCBCb29sZWFuKHRva2VuKSk7XG4gICAgICBmb3IgKGxldCBbaywgdl0gb2YgZm9ybS5lbnRyaWVzKCkpIHtcbiAgICAgICAgIGRhdGFba10gPSB2O1xuICAgICAgfVxuICAgICAgYXhpb3NcbiAgICAgICAgIC5wb3N0KFwiL2xvZ2luXCIsIGRhdGEpXG4gICAgICAgICAvLyAucG9zdChcIi9sb2dpblwiLCBkYXRhKVxuICAgICAgICAgLnRoZW4oYXN5bmMgKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldFR1cm5EYXRhKGRhdGEpO1xuICAgICAgICAgICAgLy8gc3RvcmUgdXBkYXRlXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICBhd2FpdCBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgdXNlckRhdGEpO1xuICAgICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBhd2FpdCBzdG9yZS51cGRhdGVfdXNlckRhdGEoZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IHN0b3JlLnVwZGF0ZV9sb2dpbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IHN0b3JlLnVwZGF0ZV9yZWdpc3RlclBhZ2UoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KVxuICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICAgfTtcbiAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgIHt0dXJuRGF0YSAhPSB7fSAmJiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSd0aXRsZScgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tIGNsYXNzTmFtZT17Y2xhc3Nlc1t0dXJuRGF0YS5zdGF0dXNdfT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnPnt0dXJuRGF0YS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIgPyBcImRvbmVfb3V0bGluZVwiIDogdHVybkRhdGEuc3RhdHVzfTwvaT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICB7dHVybkRhdGEubWVzc2FnZX1cbiAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICApfVxuICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IHJlZj17cmVmfSBpZD0nbG9naW4nPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sIG1hcmdpbj0nbm9ybWFsJyByZXF1aXJlZCBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdsb2dpbi1uYW1lJz5FbWFpbCBZYWRhIEt1bGxhbsSxY8SxIGFkxLE8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICA8SW5wdXQgaWQ9J2xvZ2luLW5hbWUnIG5hbWU9J2VtYWlsJyBhdXRvQ29tcGxldGU9J2VtYWlsJyBhdXRvRm9jdXMgLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgbWFyZ2luPSdub3JtYWwnIHJlcXVpcmVkIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J2xvZ2luLXBhc3N3b3JkJz7FnmlmcmU8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICA8SW5wdXQgbmFtZT0ncGFzc3dvcmQnIHR5cGU9J3Bhc3N3b3JkJyBpZD0nbG9naW4tcGFzc3dvcmQnIGF1dG9Db21wbGV0ZT0nY3VycmVudC1wYXNzd29yZCcgLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IHZhbHVlPXtTdHJpbmcodG9rZW4pfSBvbkNoYW5nZT17KCkgPT4gc2V0VG9rZW4oIVN0cmluZyh0b2tlbikpfSBjb2xvcj0ncHJpbWFyeScgLz59XG4gICAgICAgICAgICAgICBsYWJlbD0nQmVuaSBIYXTEsXJsYSdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gZnVsbFdpZHRoIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9PlxuICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICApO1xufVxuXG5TaWduSW4ucHJvcFR5cGVzID0ge1xuICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2lnbkluKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/other/main/login.js\n");

/***/ })

}]);