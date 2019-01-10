(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/components/chart/pie.js":
/*!*************************************!*\
  !*** ./src/components/chart/pie.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PieChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var data = [{
  country: 'Russia',
  area: 12
}, {
  country: 'Canada',
  area: 7
}, {
  country: 'USA',
  area: 7
}, {
  country: 'China',
  area: 7
}, {
  country: 'Brazil',
  area: 6
}, {
  country: 'Australia',
  area: 5
}, {
  country: 'India',
  area: 2
}, {
  country: 'Others',
  area: 55
}];

var PieChart =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PieChart, _React$PureComponent);

  function PieChart(props) {
    var _this;

    _classCallCheck(this, PieChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PieChart).call(this, props));
    _this.state = {
      data: data
    };
    return _this;
  }

  _createClass(PieChart, [{
    key: "render",
    value: function render() {
      var chartData = this.state.data;
      var data = this.props.data;
      var _data$chartConfig = data.chartConfig,
          field = _data$chartConfig.field,
          title = _data$chartConfig.title;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["Chart"], {
        data: chartData
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["PieSeries"], {
        valueField: field.value,
        argumentField: field.argument
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["Title"], {
        text: title
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_2__["Animation"], null));
    }
  }]);

  return PieChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

}]);