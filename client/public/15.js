(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/components/chart/bar.js":
/*!*************************************!*\
  !*** ./src/components/chart/bar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Demo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ \"./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js\");\n/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-chart */ \"./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar data = [{\n  year: \"1950\",\n  population: 0.525,\n  population1: 4.52,\n  population2: 2.25\n}, {\n  year: \"1960\",\n  population: 1.018,\n  population1: 3.01,\n  population2: 5.18\n}, {\n  year: \"1970\",\n  population: 1.682,\n  population1: 5.68,\n  population2: 3.82\n}, {\n  year: \"1980\",\n  population: 1.44,\n  population1: 9.5,\n  population2: 3.444\n}, {\n  year: \"1990\",\n  population: 5.31,\n  population1: 6.31,\n  population2: 2.31\n}, {\n  year: \"2000\",\n  population: 0.127,\n  population1: 3.12,\n  population2: 6.27\n}, {\n  year: \"2010\",\n  population: 3.93,\n  population1: 1.23,\n  population2: 6.93\n}];\n\nvar Demo =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(Demo, _React$PureComponent);\n\n  function Demo(props) {\n    var _this;\n\n    _classCallCheck(this, Demo);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Demo).call(this, props));\n    _this.state = {\n      data: data\n    };\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: \"render\",\n    value: function render() {\n      var chartData = this.state.data;\n      var data = this.props.data;\n      var field = data.chartConfig.field;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], {\n        data: chartData\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"ArgumentAxis\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"ValueAxis\"], {\n        max: 7\n      }), field.map(function (_ref, k) {\n        var name = _ref.name,\n            argument = _ref.argument,\n            value = _ref.value;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"BarSeries\"], {\n          valueField: value,\n          argumentField: argument,\n          key: k\n        });\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_2__[\"Animation\"], null));\n    }\n  }]);\n\n  return Demo;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFydC9iYXIuanM/OWUyNyJdLCJuYW1lcyI6WyJkYXRhIiwieWVhciIsInBvcHVsYXRpb24iLCJwb3B1bGF0aW9uMSIsInBvcHVsYXRpb24yIiwiRGVtbyIsInByb3BzIiwic3RhdGUiLCJjaGFydERhdGEiLCJmaWVsZCIsImNoYXJ0Q29uZmlnIiwibWFwIiwiayIsIm5hbWUiLCJhcmd1bWVudCIsInZhbHVlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxNQUFJLEVBQUUsTUFBUjtBQUFnQkMsWUFBVSxFQUFFLEtBQTVCO0FBQW9DQyxhQUFXLEVBQUUsSUFBakQ7QUFBd0RDLGFBQVcsRUFBRTtBQUFyRSxDQURXLEVBRVg7QUFBRUgsTUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFlBQVUsRUFBRSxLQUE1QjtBQUFvQ0MsYUFBVyxFQUFFLElBQWpEO0FBQXdEQyxhQUFXLEVBQUU7QUFBckUsQ0FGVyxFQUdYO0FBQUVILE1BQUksRUFBRSxNQUFSO0FBQWdCQyxZQUFVLEVBQUUsS0FBNUI7QUFBb0NDLGFBQVcsRUFBRSxJQUFqRDtBQUF3REMsYUFBVyxFQUFFO0FBQXJFLENBSFcsRUFJWDtBQUFFSCxNQUFJLEVBQUUsTUFBUjtBQUFnQkMsWUFBVSxFQUFFLElBQTVCO0FBQW1DQyxhQUFXLEVBQUUsR0FBaEQ7QUFBcURDLGFBQVcsRUFBRTtBQUFsRSxDQUpXLEVBS1g7QUFBRUgsTUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFlBQVUsRUFBRSxJQUE1QjtBQUFtQ0MsYUFBVyxFQUFFLElBQWhEO0FBQXNEQyxhQUFXLEVBQUU7QUFBbkUsQ0FMVyxFQU1YO0FBQUVILE1BQUksRUFBRSxNQUFSO0FBQWdCQyxZQUFVLEVBQUUsS0FBNUI7QUFBb0NDLGFBQVcsRUFBRSxJQUFqRDtBQUF3REMsYUFBVyxFQUFFO0FBQXJFLENBTlcsRUFPWDtBQUFFSCxNQUFJLEVBQUUsTUFBUjtBQUFnQkMsWUFBVSxFQUFFLElBQTVCO0FBQW1DQyxhQUFXLEVBQUUsSUFBaEQ7QUFBc0RDLGFBQVcsRUFBRTtBQUFuRSxDQVBXLENBQWI7O0lBVXFCQyxJOzs7OztBQUNuQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4RUFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYUCxVQUFJLEVBQUpBO0FBRFcsS0FBYjtBQUhpQjtBQU1sQjs7Ozs2QkFFUTtBQUFBLFVBQ09RLFNBRFAsR0FDcUIsS0FBS0QsS0FEMUIsQ0FDQ1AsSUFERDtBQUFBLFVBRUNBLElBRkQsR0FFVSxLQUFLTSxLQUZmLENBRUNOLElBRkQ7QUFBQSxVQUdDUyxLQUhELEdBR1dULElBQUksQ0FBQ1UsV0FIaEIsQ0FHQ0QsS0FIRDtBQUlQLGFBQ0UsMkRBQUMsNEVBQUQ7QUFBTyxZQUFJLEVBQUVEO0FBQWIsU0FDRSwyREFBQyxtRkFBRCxPQURGLEVBRUUsMkRBQUMsZ0ZBQUQ7QUFBVyxXQUFHLEVBQUU7QUFBaEIsUUFGRixFQUdHQyxLQUFLLENBQUNFLEdBQU4sQ0FBVSxnQkFBNEJDLENBQTVCO0FBQUEsWUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsWUFBU0MsUUFBVCxRQUFTQSxRQUFUO0FBQUEsWUFBbUJDLEtBQW5CLFFBQW1CQSxLQUFuQjtBQUFBLGVBQ1gsMkRBQUMsZ0ZBQUQ7QUFBVyxvQkFBVSxFQUFFQSxLQUF2QjtBQUE4Qix1QkFBYSxFQUFFRCxRQUE3QztBQUF1RCxhQUFHLEVBQUVGO0FBQTVELFVBRFc7QUFBQSxPQUFWLENBSEgsRUFNRSwyREFBQyxvRUFBRCxPQU5GLENBREY7QUFVRDs7OztFQXZCK0JJLDRDQUFLLENBQUNDLGEiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGFydC9iYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGFydCwgQmFyU2VyaWVzLCBBcmd1bWVudEF4aXMsIFZhbHVlQXhpcyB9IGZyb20gXCJAZGV2ZXhwcmVzcy9keC1yZWFjdC1jaGFydC1tYXRlcmlhbC11aVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcIkBkZXZleHByZXNzL2R4LXJlYWN0LWNoYXJ0XCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgeWVhcjogXCIxOTUwXCIsIHBvcHVsYXRpb246IDAuNTI1ICwgcG9wdWxhdGlvbjE6IDQuNTIgLCBwb3B1bGF0aW9uMjogMi4yNSB9LFxuICB7IHllYXI6IFwiMTk2MFwiLCBwb3B1bGF0aW9uOiAxLjAxOCAsIHBvcHVsYXRpb24xOiAzLjAxICwgcG9wdWxhdGlvbjI6IDUuMTggfSxcbiAgeyB5ZWFyOiBcIjE5NzBcIiwgcG9wdWxhdGlvbjogMS42ODIgLCBwb3B1bGF0aW9uMTogNS42OCAsIHBvcHVsYXRpb24yOiAzLjgyIH0sXG4gIHsgeWVhcjogXCIxOTgwXCIsIHBvcHVsYXRpb246IDEuNDQgLCBwb3B1bGF0aW9uMTogOS41LCBwb3B1bGF0aW9uMjogMy40NDQgfSxcbiAgeyB5ZWFyOiBcIjE5OTBcIiwgcG9wdWxhdGlvbjogNS4zMSAsIHBvcHVsYXRpb24xOiA2LjMxLCBwb3B1bGF0aW9uMjogMi4zMSB9LFxuICB7IHllYXI6IFwiMjAwMFwiLCBwb3B1bGF0aW9uOiAwLjEyNyAsIHBvcHVsYXRpb24xOiAzLjEyICwgcG9wdWxhdGlvbjI6IDYuMjcgfSxcbiAgeyB5ZWFyOiBcIjIwMTBcIiwgcG9wdWxhdGlvbjogMy45MyAsIHBvcHVsYXRpb24xOiAxLjIzLCBwb3B1bGF0aW9uMjogNi45MyB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGFcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YTogY2hhcnREYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZpZWxkIH0gPSBkYXRhLmNoYXJ0Q29uZmlnO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2hhcnQgZGF0YT17Y2hhcnREYXRhfT5cbiAgICAgICAgPEFyZ3VtZW50QXhpcyAvPlxuICAgICAgICA8VmFsdWVBeGlzIG1heD17N30gLz5cbiAgICAgICAge2ZpZWxkLm1hcCgoeyBuYW1lLCBhcmd1bWVudCwgdmFsdWUgfSwgaykgPT4gKFxuICAgICAgICA8QmFyU2VyaWVzIHZhbHVlRmllbGQ9e3ZhbHVlfSBhcmd1bWVudEZpZWxkPXthcmd1bWVudH0ga2V5PXtrfSAvPlxuICAgICAgICApKX1cbiAgICAgICAgPEFuaW1hdGlvbiAvPlxuICAgICAgPC9DaGFydD5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/chart/bar.js\n");

/***/ })

}]);