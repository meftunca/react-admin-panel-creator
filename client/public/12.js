(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/json/apiForm.json":
/*!*******************************!*\
  !*** ./src/json/apiForm.json ***!
  \*******************************/
/*! exports provided: twitter, facebook, default */
/***/ (function(module) {

eval("module.exports = {\"twitter\":{\"name\":\"twitter\",\"post_url\":\"/api-twitter\",\"get_url\":\"/get-api-twitter\",\"title\":\"Twitter Api bilgileri\",\"header\":{\"label\":\"Twitter Api bilgileri\",\"icon\":\"power\"},\"route\":{\"path\":\"/twitter-api\",\"exact\":\"false\"},\"formItem\":[{\"name\":\"consumer_key\",\"icon\":\"\",\"label\":\"consumer_key\",\"type\":\"text\",\"regex\":\"\",\"required\":\"false\",\"mongoType\":\"string\"},{\"name\":\"consumer_secret\",\"icon\":\"\",\"label\":\"consumer_secret\",\"type\":\"text\",\"regex\":\"\",\"required\":\"false\",\"mongoType\":\"string\"},{\"name\":\"access_token_key\",\"icon\":\"\",\"label\":\"access_token_key\",\"type\":\"text\",\"regex\":\"\",\"required\":\"false\",\"mongoType\":\"string\"},{\"name\":\"access_token_secret\",\"icon\":\"\",\"label\":\"access_token_secret\",\"type\":\"text\",\"regex\":\"\",\"required\":\"false\",\"mongoType\":\"string\"}],\"tableItem\":[{\"name\":\"saddsadsa\",\"label\":\"dasdasdas\"}]},\"facebook\":{\"name\":\"facebook\",\"post_url\":\"/api-facebook\",\"get_url\":\"/get-api-facebook\",\"title\":\"facebook Api bilgileri\",\"header\":{\"label\":\"facebook Api bilgileri\",\"icon\":\"power\"},\"route\":{\"path\":\"/facebook-api\",\"exact\":\"false\"},\"formItem\":[{\"name\":\"appId\",\"icon\":\"\",\"label\":\"appId\",\"type\":\"text\",\"regex\":\"\",\"required\":\"false\",\"mongoType\":\"string\"},{\"name\":\"app_secret\",\"icon\":\"\",\"label\":\"app_secret\",\"type\":\"text\",\"regex\":\"\",\"required\":\"false\",\"mongoType\":\"string\"}],\"tableItem\":[{\"name\":\"saddsadsa\",\"label\":\"dasdasdas\"}]}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9qc29uL2FwaUZvcm0uanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/json/apiForm.json\n");

/***/ }),

/***/ "./src/other/page/api.js":
/*!*******************************!*\
  !*** ./src/other/page/api.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/forms/builder */ \"./src/components/forms/builder.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/Divider/index.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Api = __webpack_require__(/*! ./../../json/apiForm.json */ \"./src/json/apiForm.json\");\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object.values(Api).map(function (i, k) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n          key: k\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"], i), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hr, null));\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\nvar Hr = function Hr() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: \"15px 0\"\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, null));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXIvcGFnZS9hcGkuanM/ZDRhYiJdLCJuYW1lcyI6WyJBcGkiLCJyZXF1aXJlIiwiQXBwIiwic3RhdGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJpIiwiayIsIkNvbXBvbmVudCIsIkhyIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQywwREFBRCxDQUFuQjs7SUFDcUJDLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ25CQyxLLEdBQVEsRTs7Ozs7OzZCQUNDO0FBQ1AsYUFDRSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNMLEdBQWQsRUFBbUJNLEdBQW5CLENBQXVCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQ3RCLDJEQUFDLDRDQUFELENBQU8sUUFBUDtBQUFnQixhQUFHLEVBQUVBO0FBQXJCLFdBQ0UsMkRBQUMsaUVBQUQsRUFBaUJELENBQWpCLENBREYsRUFFRSwyREFBQyxFQUFELE9BRkYsQ0FEc0I7QUFBQSxPQUF2QixDQURILENBREY7QUFVRDs7OztFQWI4QkUsK0M7Ozs7QUFlakMsSUFBTUMsRUFBRSxHQUFHLFNBQUxBLEVBQUs7QUFBQSxTQUNUO0FBQUssU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWO0FBQVosS0FDRSwyREFBQyxnRUFBRCxPQURGLEVBRUUsc0VBRkYsRUFHRSwyREFBQyxnRUFBRCxPQUhGLENBRFM7QUFBQSxDQUFYIiwiZmlsZSI6Ii4vc3JjL290aGVyL3BhZ2UvYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm1CdWlsZGVyIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvYnVpbGRlclwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcbmNvbnN0IEFwaSA9IHJlcXVpcmUoXCIuLy4uLy4uL2pzb24vYXBpRm9ybS5qc29uXCIpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7fTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHtPYmplY3QudmFsdWVzKEFwaSkubWFwKChpLCBrKSA9PiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17a30+XG4gICAgICAgICAgICA8Rm9ybUJ1aWxkZXIgey4uLml9IC8+XG4gICAgICAgICAgICA8SHIgLz5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuY29uc3QgSHIgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE1cHggMFwiIH19PlxuICAgIDxEaXZpZGVyIC8+XG4gICAgPGJyIC8+XG4gICAgPERpdmlkZXIgLz5cbiAgPC9kaXY+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/other/page/api.js\n");

/***/ })

}]);