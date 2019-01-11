(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./src/json/apiForm.json":
/*!*******************************!*\
  !*** ./src/json/apiForm.json ***!
  \*******************************/
/*! exports provided: twitter, facebook, default */
/***/ (function(module) {

module.exports = {"twitter":{"name":"twitter","post_url":"/api-twitter","get_url":"/get-api-twitter","title":"Twitter Api bilgileri","header":{"label":"Twitter Api bilgileri","icon":"power"},"route":{"path":"/twitter-api","exact":"false"},"formItem":[{"name":"consumer_key","icon":"","label":"consumer_key","type":"text","regex":"","required":"false","mongoType":"string"},{"name":"consumer_secret","icon":"","label":"consumer_secret","type":"text","regex":"","required":"false","mongoType":"string"},{"name":"access_token_key","icon":"","label":"access_token_key","type":"text","regex":"","required":"false","mongoType":"string"},{"name":"access_token_secret","icon":"","label":"access_token_secret","type":"text","regex":"","required":"false","mongoType":"string"}],"tableItem":[{"name":"saddsadsa","label":"dasdasdas"}]},"facebook":{"name":"facebook","post_url":"/api-facebook","get_url":"/get-api-facebook","title":"facebook Api bilgileri","header":{"label":"facebook Api bilgileri","icon":"power"},"route":{"path":"/facebook-api","exact":"false"},"formItem":[{"name":"appId","icon":"","label":"appId","type":"text","regex":"","required":"false","mongoType":"string"},{"name":"app_secret","icon":"","label":"app_secret","type":"text","regex":"","required":"false","mongoType":"string"}],"tableItem":[{"name":"saddsadsa","label":"dasdasdas"}]}};

/***/ }),

/***/ "./src/other/page/api.js":
/*!*******************************!*\
  !*** ./src/other/page/api.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_forms_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/forms/builder */ "./src/components/forms/builder.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Api = __webpack_require__(/*! ./../../json/apiForm.json */ "./src/json/apiForm.json");

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object.values(Api).map(function (i, k) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          key: k
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_builder__WEBPACK_IMPORTED_MODULE_1__["default"], i), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hr, null));
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



var Hr = function Hr() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      margin: "15px 0"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, null));
};

/***/ })

}]);