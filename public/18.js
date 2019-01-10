(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/components/chart/line.js":
/*!**************************************!*\
  !*** ./src/components/chart/line.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js");
/* harmony import */ var _dataVizualization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataVizualization */ "./src/components/chart/dataVizualization.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var format = function format() {
  return function (tick) {
    return tick;
  };
};

var legendStyles = function legendStyles() {
  return {
    root: {
      display: 'flex',
      margin: 'auto',
      flexDirection: 'row'
    }
  };
};

var legendLabelStyles = function legendLabelStyles(theme) {
  return {
    label: {
      paddingTop: theme.spacing.unit,
      whiteSpace: 'nowrap'
    }
  };
};

var legendItemStyles = function legendItemStyles() {
  return {
    item: {
      flexDirection: 'column'
    }
  };
};

var legendRootBase = function legendRootBase(_ref) {
  var classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["classes"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["Legend"].Root, _extends({}, restProps, {
    className: classes.root
  }));
};

var legendLabelBase = function legendLabelBase(_ref2) {
  var classes = _ref2.classes,
      restProps = _objectWithoutProperties(_ref2, ["classes"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["Legend"].Label, _extends({
    className: classes.label
  }, restProps));
};

var legendItemBase = function legendItemBase(_ref3) {
  var classes = _ref3.classes,
      restProps = _objectWithoutProperties(_ref3, ["classes"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["Legend"].Item, _extends({
    className: classes.item
  }, restProps));
};

var Root = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(legendStyles, {
  name: 'LegendRoot'
})(legendRootBase);
var Label = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(legendLabelStyles, {
  name: 'LegendLabel'
})(legendLabelBase);
var Item = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(legendItemStyles, {
  name: 'LegendItem'
})(legendItemBase);

var LineStyles = function LineStyles() {
  return {
    chart: {
      paddingRight: '20px'
    },
    title: {
      whiteSpace: 'pre'
    }
  };
};

var ValueLabel = function ValueLabel(props) {
  var text = props.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["ValueAxis"].Label, _extends({}, props, {
    text: "".concat(text, "%")
  }));
};

var LineChart =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(LineChart, _React$PureComponent);

  function LineChart(props) {
    var _this;

    _classCallCheck(this, LineChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineChart).call(this, props));
    _this.state = {
      data: _dataVizualization__WEBPACK_IMPORTED_MODULE_4__["confidence"]
    };
    return _this;
  }

  _createClass(LineChart, [{
    key: "render",
    value: function render() {
      var chartData = this.state.data;
      var classes = this.props.classes;
      var data = this.props.data;
      var field = data.chartConfig.field;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["Chart"], {
        data: chartData,
        className: classes.chart
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["ArgumentAxis"], {
        tickFormat: format
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["ValueAxis"], {
        max: 50,
        labelComponent: ValueLabel
      }), field.map(function (_ref4, k) {
        var name = _ref4.name,
            argument = _ref4.argument,
            value = _ref4.value;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["LineSeries"], {
          name: name,
          valueField: value,
          argumentField: argument,
          key: k
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__["Legend"], {
        position: "bottom",
        rootComponent: Root,
        itemComponent: Item,
        labelComponent: Label
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Animation"], null));
    }
  }]);

  return LineChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(LineStyles, {
  name: 'Line'
})(LineChart));

/***/ })

}]);