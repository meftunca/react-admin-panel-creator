(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/components/chart/area.js":
/*!**************************************!*\
  !*** ./src/components/chart/area.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ \"./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart */ \"./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/src/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nvar data = [{\n  year: '2010',\n  android: 67225,\n  ios: 46598,\n  windowsOs: 6598\n}, {\n  year: '2011',\n  android: 179873,\n  ios: 90560,\n  windowsOs: 1560\n}, {\n  year: '2012',\n  android: 310088,\n  ios: 118848,\n  windowsOs: 18848\n}, {\n  year: '2015',\n  android: 539318,\n  ios: 189924,\n  windowsOs: 89924\n}];\n\nvar legendStyles = function legendStyles() {\n  return {\n    root: {\n      display: 'flex',\n      margin: 'auto',\n      flexDirection: 'row'\n    }\n  };\n};\n\nvar legendLabelStyles = function legendLabelStyles(theme) {\n  return {\n    label: {\n      paddingTop: theme.spacing.unit\n    }\n  };\n};\n\nvar legendItemStyles = function legendItemStyles() {\n  return {\n    item: {\n      flexDirection: 'column'\n    }\n  };\n};\n\nvar AreaChartStyles = function AreaChartStyles() {\n  return {\n    chart: {\n      paddingRight: '20px'\n    }\n  };\n};\n\nvar legendRootBase = function legendRootBase(_ref) {\n  var classes = _ref.classes,\n      restProps = _objectWithoutProperties(_ref, [\"classes\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"].Root, _extends({}, restProps, {\n    className: classes.root\n  }));\n};\n\nvar legendLabelBase = function legendLabelBase(_ref2) {\n  var classes = _ref2.classes,\n      restProps = _objectWithoutProperties(_ref2, [\"classes\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"].Label, _extends({\n    className: classes.label\n  }, restProps));\n};\n\nvar legendItemBase = function legendItemBase(_ref3) {\n  var classes = _ref3.classes,\n      restProps = _objectWithoutProperties(_ref3, [\"classes\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"].Item, _extends({\n    className: classes.item\n  }, restProps));\n};\n\nvar Root = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(legendStyles, {\n  name: 'LegendRoot'\n})(legendRootBase);\nvar Label = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(legendLabelStyles, {\n  name: 'LegendLabel'\n})(legendLabelBase);\nvar Item = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(legendItemStyles, {\n  name: 'LegendItem'\n})(legendItemBase);\n\nvar AreaChart =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(AreaChart, _React$PureComponent);\n\n  function AreaChart(props) {\n    var _this;\n\n    _classCallCheck(this, AreaChart);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(AreaChart).call(this, props));\n    _this.state = {\n      data: data\n    };\n    return _this;\n  }\n\n  _createClass(AreaChart, [{\n    key: \"render\",\n    value: function render() {\n      var chartData = this.state.data;\n      var _this$props = this.props,\n          classes = _this$props.classes,\n          data = _this$props.data;\n      var field = data.chartConfig.field;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], {\n        data: chartData,\n        className: classes.chart\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"ArgumentAxis\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"ValueAxis\"], null), field.map(function (_ref4, k) {\n        var name = _ref4.name,\n            argument = _ref4.argument,\n            value = _ref4.value;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"AreaSeries\"], {\n          name: name,\n          valueField: value,\n          argumentField: argument,\n          key: k\n        });\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__[\"Animation\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], {\n        position: \"bottom\",\n        rootComponent: Root,\n        itemComponent: Item,\n        labelComponent: Label\n      }));\n    }\n  }]);\n\n  return AreaChart;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(AreaChartStyles, {\n  name: \"AreaChart\"\n})(AreaChart));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFydC9hcmVhLmpzPzZkZjAiXSwibmFtZXMiOlsiZGF0YSIsInllYXIiLCJhbmRyb2lkIiwiaW9zIiwid2luZG93c09zIiwibGVnZW5kU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJtYXJnaW4iLCJmbGV4RGlyZWN0aW9uIiwibGVnZW5kTGFiZWxTdHlsZXMiLCJ0aGVtZSIsImxhYmVsIiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJ1bml0IiwibGVnZW5kSXRlbVN0eWxlcyIsIml0ZW0iLCJBcmVhQ2hhcnRTdHlsZXMiLCJjaGFydCIsInBhZGRpbmdSaWdodCIsImxlZ2VuZFJvb3RCYXNlIiwiY2xhc3NlcyIsInJlc3RQcm9wcyIsImxlZ2VuZExhYmVsQmFzZSIsImxlZ2VuZEl0ZW1CYXNlIiwiUm9vdCIsIndpdGhTdHlsZXMiLCJuYW1lIiwiTGFiZWwiLCJJdGVtIiwiQXJlYUNoYXJ0IiwicHJvcHMiLCJzdGF0ZSIsImNoYXJ0RGF0YSIsImZpZWxkIiwiY2hhcnRDb25maWciLCJtYXAiLCJrIiwiYXJndW1lbnQiLCJ2YWx1ZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFBRUMsTUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFNBQU8sRUFBRSxLQUF6QjtBQUFnQ0MsS0FBRyxFQUFFLEtBQXJDO0FBQTRDQyxXQUFTLEVBQUU7QUFBdkQsQ0FEUyxFQUVUO0FBQUVILE1BQUksRUFBRSxNQUFSO0FBQWdCQyxTQUFPLEVBQUUsTUFBekI7QUFBaUNDLEtBQUcsRUFBRSxLQUF0QztBQUE2Q0MsV0FBUyxFQUFFO0FBQXhELENBRlMsRUFHVDtBQUFFSCxNQUFJLEVBQUUsTUFBUjtBQUFnQkMsU0FBTyxFQUFFLE1BQXpCO0FBQWlDQyxLQUFHLEVB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QUQ7QUFBTyxZQUFJLEVBQUVELFNBQWI7QUFBd0IsaUJBQVMsRUFBRVosT0FBTyxDQUFDSDtBQUEzQyxTQUNFLDJEQUFDLG1GQUFELE9BREYsRUFFRSwyREFBQyxnRkFBRCxPQUZGLEVBR0lnQixLQUFLLENBQUNFLEdBQU4sQ0FBVSxpQkFBdUJDLENBQXZCO0FBQUEsWUFBRVYsSUFBRixTQUFFQSxJQUFGO0FBQUEsWUFBT1csUUFBUCxTQUFPQSxRQUFQO0FBQUEsWUFBZ0JDLEtBQWhCLFNBQWdCQSxLQUFoQjtBQUFBLGVBRVIsMkRBQUMsaUZBQUQ7QUFBWSxjQUFJLEVBQUVaLElBQWxCO0FBQXdCLG9CQUFVLEVBQUVZLEtBQXBDO0FBQTJDLHVCQUFhLEVBQUVELFFBQTFEO0FBQW9FLGFBQUcsRUFBRUQ7QUFBekUsVUFGUTtBQUFBLE9BQVYsQ0FISixFQVFFLDJEQUFDLG9FQUFELE9BUkYsRUFTRSwyREFBQyw2RUFBRDtBQUFRLGdCQUFRLEVBQUMsUUFBakI7QUFBMEIscUJBQWEsRUFBRVosSUFBekM7QUFBK0MscUJBQWEsRUFBRUksSUFBOUQ7QUFBb0Usc0JBQWMsRUFBRUQ7QUFBcEYsUUFURixDQURKO0FBYUQ7Ozs7RUExQnFCWSw0Q0FBSyxDQUFDQyxhOztBQTZCZmYsMElBQVUsQ0FBQ1QsZUFBRCxFQUFrQjtBQUFFVSxNQUFJLEVBQUU7QUFBUixDQUFsQixDQUFWLENBQW1ERyxTQUFuRCxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2hhcnQvYXJlYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBDaGFydCxcbiAgICBBcmd1bWVudEF4aXMsXG4gICAgVmFsdWVBeGlzLFxuICAgIEFyZWFTZXJpZXMsXG4gICAgTGVnZW5kLFxufSBmcm9tICdAZGV2ZXhwcmVzcy9keC1yZWFjdC1jaGFydC1tYXRlcmlhbC11aSc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7ICBBbmltYXRpb24gfSBmcm9tICdAZGV2ZXhwcmVzcy9keC1yZWFjdC1jaGFydCc7XG5pbXBvcnQgeyBzY2FsZVBvaW50IH0gZnJvbSAnZDMtc2NhbGUnO1xuXG5jb25zdCBkYXRhID0gW1xuICAgIHsgeWVhcjogJzIwMTAnLCBhbmRyb2lkOiA2NzIyNSwgaW9zOiA0NjU5OCAsd2luZG93c09zOiA2NTk4IH0sXG4gICAgeyB5ZWFyOiAnMjAxMScsIGFuZHJvaWQ6IDE3OTg3MywgaW9zOiA5MDU2MCAsd2luZG93c09zOiAxNTYwIH0sXG4gICAgeyB5ZWFyOiAnMjAxMicsIGFuZHJvaWQ6IDMxMDA4OCwgaW9zOiAxMTg4NDggLHdpbmRvd3NPczogMTg4NDggfSxcbiAgICB7IHllYXI6ICcyMDE1JywgYW5kcm9pZDogNTM5MzE4LCBpb3M6IDE4OTkyNCAsd2luZG93c09zOiA4OTkyNCB9LFxuXTtcblxuY29uc3QgbGVnZW5kU3R5bGVzID0gKCkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnIFxuICAgIH0sXG59KTtcbmNvbnN0IGxlZ2VuZExhYmVsU3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgICBsYWJlbDoge1xuICAgICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQsXG4gICAgfSxcbn0pO1xuY29uc3QgbGVnZW5kSXRlbVN0eWxlcyA9ICgpID0+ICh7XG4gICAgaXRlbToge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxufSk7XG5jb25zdCBBcmVhQ2hhcnRTdHlsZXMgPSAoKSA9PiAoe1xuICAgIGNoYXJ0OiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogJzIwcHgnLFxuICAgIH0sXG59KTtcblxuY29uc3QgbGVnZW5kUm9vdEJhc2UgPSAoeyBjbGFzc2VzLCAuLi5yZXN0UHJvcHMgfSkgPT4gKFxuICAgIDxMZWdlbmQuUm9vdCB7Li4ucmVzdFByb3BzfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gLz5cbik7XG5jb25zdCBsZWdlbmRMYWJlbEJhc2UgPSAoeyBjbGFzc2VzLCAuLi5yZXN0UHJvcHMgfSkgPT4gKFxuICAgIDxMZWdlbmQuTGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfSB7Li4ucmVzdFByb3BzfSAvPlxuKTtcbmNvbnN0IGxlZ2VuZEl0ZW1CYXNlID0gKHsgY2xhc3NlcywgLi4ucmVzdFByb3BzIH0pID0+IChcbiAgICA8TGVnZW5kLkl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19IHsuLi5yZXN0UHJvcHN9IC8+XG4pO1xuY29uc3QgUm9vdCA9IHdpdGhTdHlsZXMobGVnZW5kU3R5bGVzLCB7IG5hbWU6ICdMZWdlbmRSb290JyB9KShsZWdlbmRSb290QmFzZSk7XG5jb25zdCBMYWJlbCA9IHdpdGhTdHlsZXMobGVnZW5kTGFiZWxTdHlsZXMsIHsgbmFtZTogJ0xlZ2VuZExhYmVsJyB9KShsZWdlbmRMYWJlbEJhc2UpO1xuY29uc3QgSXRlbSA9IHdpdGhTdHlsZXMobGVnZW5kSXRlbVN0eWxlcywgeyBuYW1lOiAnTGVnZW5kSXRlbScgfSkobGVnZW5kSXRlbUJhc2UpO1xuXG5jbGFzcyBBcmVhQ2hhcnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhOiBjaGFydERhdGF9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGNsYXNzZXMsZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgZmllbGQgfSA9IGRhdGEuY2hhcnRDb25maWdcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2hhcnQgZGF0YT17Y2hhcnREYXRhfSBjbGFzc05hbWU9e2NsYXNzZXMuY2hhcnR9PlxuICAgICAgICAgIDxBcmd1bWVudEF4aXMgLz5cbiAgICAgICAgICA8VmFsdWVBeGlzIC8+XG4gICAgICAgICAgIHtmaWVsZC5tYXAoKHtuYW1lLGFyZ3VtZW50LHZhbHVlfSxrKT0+XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIDxBcmVhU2VyaWVzIG5hbWU9e25hbWV9IHZhbHVlRmllbGQ9e3ZhbHVlfSBhcmd1bWVudEZpZWxkPXthcmd1bWVudH0ga2V5PXtrfS8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICl9IFxuICAgICAgICAgIDxBbmltYXRpb24gLz5cbiAgICAgICAgICA8TGVnZW5kIHBvc2l0aW9uPSdib3R0b20nIHJvb3RDb21wb25lbnQ9e1Jvb3R9IGl0ZW1Db21wb25lbnQ9e0l0ZW19IGxhYmVsQ29tcG9uZW50PXtMYWJlbH0gLz5cbiAgICAgICAgPC9DaGFydD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoQXJlYUNoYXJ0U3R5bGVzLCB7IG5hbWU6IFwiQXJlYUNoYXJ0XCIgfSkoQXJlYUNoYXJ0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/chart/area.js\n");

/***/ })

}]);