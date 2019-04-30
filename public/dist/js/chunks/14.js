(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./src/components/chart/dataGenerator.js":
/*!***********************************************!*\
  !*** ./src/components/chart/dataGenerator.js ***!
  \***********************************************/
/*! exports provided: dataGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataGenerator\", function() { return dataGenerator; });\nvar getRandom = function getRandom() {\n  var randomValue = Math.random();\n\n  if (randomValue === 0) {\n    return getRandom();\n  }\n\n  return randomValue;\n};\n\nvar normalDistribution = function normalDistribution() {\n  var u = getRandom();\n  var v = getRandom();\n  return Math.sqrt(-4.0 * Math.log(u)) * Math.cos(1.0 * Math.PI * v);\n};\n\nvar dataGenerator = function dataGenerator(pointCount) {\n  var data = [];\n\n  for (var i = 0; i < pointCount; i += 1) {\n    data.push({\n      arg1: normalDistribution(),\n      val1: normalDistribution(),\n      arg2: normalDistribution() + 3,\n      val2: normalDistribution() + 3\n    });\n  }\n\n  return data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFydC9kYXRhR2VuZXJhdG9yLmpzPzAyMjkiXSwibmFtZXMiOlsiZ2V0UmFuZG9tIiwicmFuZG9tVmFsdWUiLCJNYXRoIiwicmFuZG9tIiwibm9ybWFsRGlzdHJpYnV0aW9uIiwidSIsInYiLCJzcXJ0IiwibG9nIiwiY29zIiwiUEkiLCJkYXRhR2VuZXJhdG9yIiwicG9pbnRDb3VudCIsImRhdGEiLCJpIiwicHVzaCIsImFyZzEiLCJ2YWwxIiwiYXJnMiIsInZhbDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLE1BQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEVBQXBCOztBQUNBLE1BQUlGLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNuQixXQUFPRCxTQUFTLEVBQWhCO0FBQ0g7O0FBQ0QsU0FBT0MsV0FBUDtBQUNILENBTkQ7O0FBUUEsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCLE1BQU1DLENBQUMsR0FBR0wsU0FBUyxFQUFuQjtBQUNBLE1BQU1NLENBQUMsR0FBR04sU0FBUyxFQUFuQjtBQUNBLFNBQU9FLElBQUksQ0FBQ0ssSUFBTCxDQUFVLENBQUMsR0FBRCxHQUFPTCxJQUFJLENBQUNNLEdBQUwsQ0FBU0gsQ0FBVCxDQUFqQixJQUFnQ0gsSUFBSSxDQUFDTyxHQUFMLENBQVMsTUFBTVAsSUFBSSxDQUFDUSxFQUFYLEdBQWdCSixDQUF6QixDQUF2QztBQUNILENBSkQ7O0FBTU8sSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxVQUFELEVBQWdCO0FBQ3pDLE1BQU1DLElBQUksR0FBRyxFQUFiOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsVUFBcEIsRUFBZ0NFLENBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUNwQ0QsUUFBSSxDQUFDRSxJQUFMLENBQVU7QUFDTkMsVUFBSSxFQUFFWixrQkFBa0IsRUFEbEI7QUFFTmEsVUFBSSxFQUFFYixrQkFBa0IsRUFGbEI7QUFHTmMsVUFBSSxFQUFFZCxrQkFBa0IsS0FBSyxDQUh2QjtBQUlOZSxVQUFJLEVBQUVmLGtCQUFrQixLQUFLO0FBSnZCLEtBQVY7QUFNSDs7QUFDRCxTQUFPUyxJQUFQO0FBQ0gsQ0FYTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NoYXJ0L2RhdGFHZW5lcmF0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRSYW5kb20gPSAoKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmIChyYW5kb21WYWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZ2V0UmFuZG9tKCk7XG4gICAgfVxuICAgIHJldHVybiByYW5kb21WYWx1ZTtcbn07XG5cbmNvbnN0IG5vcm1hbERpc3RyaWJ1dGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB1ID0gZ2V0UmFuZG9tKCk7XG4gICAgY29uc3QgdiA9IGdldFJhbmRvbSgpO1xuICAgIHJldHVybiBNYXRoLnNxcnQoLTQuMCAqIE1hdGgubG9nKHUpKSAqIE1hdGguY29zKDEuMCAqIE1hdGguUEkgKiB2KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkYXRhR2VuZXJhdG9yID0gKHBvaW50Q291bnQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludENvdW50OyBpICs9IDEpIHtcbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAgIGFyZzE6IG5vcm1hbERpc3RyaWJ1dGlvbigpLFxuICAgICAgICAgICAgdmFsMTogbm9ybWFsRGlzdHJpYnV0aW9uKCksXG4gICAgICAgICAgICBhcmcyOiBub3JtYWxEaXN0cmlidXRpb24oKSArIDMsXG4gICAgICAgICAgICB2YWwyOiBub3JtYWxEaXN0cmlidXRpb24oKSArIDMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/chart/dataGenerator.js\n");

/***/ }),

/***/ "./src/components/chart/point.js":
/*!***************************************!*\
  !*** ./src/components/chart/point.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PointChart; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ \"./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js\");\n/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart */ \"./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js\");\n/* harmony import */ var _dataGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataGenerator */ \"./src/components/chart/dataGenerator.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar PointChart =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(PointChart, _React$PureComponent);\n\n  function PointChart(props) {\n    var _this;\n\n    _classCallCheck(this, PointChart);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PointChart).call(this, props));\n    _this.state = {\n      data: Object(_dataGenerator__WEBPACK_IMPORTED_MODULE_3__[\"dataGenerator\"])(100)\n    };\n    return _this;\n  }\n\n  _createClass(PointChart, [{\n    key: \"render\",\n    value: function render() {\n      var chartData = this.state.data;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], {\n        data: chartData\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"ArgumentAxis\"], {\n        showGrids: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"ValueAxis\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"ScatterSeries\"], {\n        valueField: \"val1\",\n        argumentField: \"arg1\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"ScatterSeries\"], {\n        valueField: \"val2\",\n        argumentField: \"arg2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_2__[\"Animation\"], null));\n    }\n  }]);\n\n  return PointChart;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFydC9wb2ludC5qcz85YjM5Il0sIm5hbWVzIjpbIlBvaW50Q2hhcnQiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImRhdGFHZW5lcmF0b3IiLCJjaGFydERhdGEiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFFQTs7SUFHcUJBLFU7Ozs7O0FBQ2pCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2Ysb0ZBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFQyxvRUFBYSxDQUFDLEdBQUQ7QUFEVixLQUFiO0FBSGU7QUFNbEI7Ozs7NkJBRVE7QUFBQSxVQUNTQyxTQURULEdBQ3VCLEtBQUtILEtBRDVCLENBQ0dDLElBREg7QUFHTCxhQUNRLDJEQUFDLDRFQUFEO0FBQ0ksWUFBSSxFQUFFRTtBQURWLFNBR0ksMkRBQUMsbUZBQUQ7QUFBYyxpQkFBUztBQUF2QixRQUhKLEVBSUksMkRBQUMsZ0ZBQUQsT0FKSixFQUtJLDJEQUFDLG9GQUFEO0FBQ0ksa0JBQVUsRUFBQyxNQURmO0FBRUkscUJBQWEsRUFBQztBQUZsQixRQUxKLEVBU0ksMkRBQUMsb0ZBQUQ7QUFDSSxrQkFBVSxFQUFDLE1BRGY7QUFFSSxxQkFBYSxFQUFDO0FBRmxCLFFBVEosRUFhSSwyREFBQyxvRUFBRCxPQWJKLENBRFI7QUFpQkg7Ozs7RUE3Qm1DQyw0Q0FBSyxDQUFDQyxhIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2hhcnQvcG9pbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBDaGFydCxcbiAgICBTY2F0dGVyU2VyaWVzLFxuICAgIEFyZ3VtZW50QXhpcyxcbiAgICBWYWx1ZUF4aXMsXG59IGZyb20gJ0BkZXZleHByZXNzL2R4LXJlYWN0LWNoYXJ0LW1hdGVyaWFsLXVpJztcbmltcG9ydCB7ICBBbmltYXRpb24gfSBmcm9tICdAZGV2ZXhwcmVzcy9keC1yZWFjdC1jaGFydCc7XG5cbmltcG9ydCB7IGRhdGFHZW5lcmF0b3IgfSBmcm9tICcuL2RhdGFHZW5lcmF0b3InO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Q2hhcnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IGRhdGFHZW5lcmF0b3IoMTAwKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogY2hhcnREYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJ0RGF0YX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxBcmd1bWVudEF4aXMgc2hvd0dyaWRzIC8+XG4gICAgICAgICAgICAgICAgICAgIDxWYWx1ZUF4aXMgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNjYXR0ZXJTZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRmllbGQ9XCJ2YWwxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50RmllbGQ9XCJhcmcxXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNjYXR0ZXJTZXJpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRmllbGQ9XCJ2YWwyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50RmllbGQ9XCJhcmcyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGlvbiAvPlxuICAgICAgICAgICAgICAgIDwvQ2hhcnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/chart/point.js\n");

/***/ })

}]);