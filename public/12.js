(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/components/chart/dataGenerator.js":
/*!***********************************************!*\
  !*** ./src/components/chart/dataGenerator.js ***!
  \***********************************************/
/*! exports provided: dataGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataGenerator", function() { return dataGenerator; });
var getRandom = function getRandom() {
  var randomValue = Math.random();

  if (randomValue === 0) {
    return getRandom();
  }

  return randomValue;
};

var normalDistribution = function normalDistribution() {
  var u = getRandom();
  var v = getRandom();
  return Math.sqrt(-4.0 * Math.log(u)) * Math.cos(1.0 * Math.PI * v);
};

var dataGenerator = function dataGenerator(pointCount) {
  var data = [];

  for (var i = 0; i < pointCount; i += 1) {
    data.push({
      arg1: normalDistribution(),
      val1: normalDistribution(),
      arg2: normalDistribution() + 3,
      val2: normalDistribution() + 3
    });
  }

  return data;
};

/***/ }),

/***/ "./src/components/chart/point.js":
/*!***************************************!*\
  !*** ./src/components/chart/point.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js");
/* harmony import */ var _dataGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataGenerator */ "./src/components/chart/dataGenerator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var PointChart =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PointChart, _React$PureComponent);

  function PointChart(props) {
    var _this;

    _classCallCheck(this, PointChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PointChart).call(this, props));
    _this.state = {
      data: Object(_dataGenerator__WEBPACK_IMPORTED_MODULE_3__["dataGenerator"])(100)
    };
    return _this;
  }

  _createClass(PointChart, [{
    key: "render",
    value: function render() {
      var chartData = this.state.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["Chart"], {
        data: chartData
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["ArgumentAxis"], {
        showGrids: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["ValueAxis"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["ScatterSeries"], {
        valueField: "val1",
        argumentField: "arg1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["ScatterSeries"], {
        valueField: "val2",
        argumentField: "arg2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_2__["Animation"], null));
    }
  }]);

  return PointChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

}]);