(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./src/components/forms/checkbox.js":
/*!******************************************!*\
  !*** ./src/components/forms/checkbox.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"./node_modules/@material-ui/core/Checkbox/index.js\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormGroup */ \"./node_modules/@material-ui/core/FormGroup/index.js\");\n/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"./node_modules/@material-ui/core/FormControlLabel/index.js\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Checkboxes(_ref) {\n  var onChange = _ref.onChange,\n      ref = _ref.ref,\n      config = _ref.config,\n      label = _ref.label,\n      store = _ref.store;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      state = _React$useState2[0],\n      setState = _React$useState2[1];\n\n  var handleChange = function handleChange(event) {\n    setState(event.target.checked);\n    onChange(event.target.checked);\n  };\n\n  console.log(\"Checkboxes store\", store);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    row: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({\n      onChange: handleChange\n    }, config, {\n      inputRef: ref\n    })),\n    label: label\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkboxes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9jaGVja2JveC5qcz8wOTlmIl0sIm5hbWVzIjpbIkNoZWNrYm94ZXMiLCJvbkNoYW5nZSIsInJlZiIsImNvbmZpZyIsImxhYmVsIiwic3RvcmUiLCJSZWFjdCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULE9BQTREO0FBQUEsTUFBdENDLFFBQXNDLFFBQXRDQSxRQUFzQztBQUFBLE1BQTVCQyxHQUE0QixRQUE1QkEsR0FBNEI7QUFBQSxNQUF2QkMsTUFBdUIsUUFBdkJBLE1BQXVCO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLHdCQUNoQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FEZ0M7QUFBQTtBQUFBLE1BQ25EQyxLQURtRDtBQUFBLE1BQzVDQyxRQUQ0Qzs7QUFHMUQsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzVCRixZQUFRLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFkLENBQVI7QUFDQVosWUFBUSxDQUFDVSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBZCxDQUFSO0FBQ0QsR0FIRDs7QUFJRUMsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NWLEtBQWhDO0FBRUYsU0FDRSwyREFBQyxrRUFBRDtBQUFXLE9BQUc7QUFBZCxLQUNNLDJEQUFDLHlFQUFEO0FBQ0ksV0FBTyxFQUNILDJEQUFDLGlFQUFEO0FBQVUsY0FBUSxFQUFFSztBQUFwQixPQUFzQ1AsTUFBdEM7QUFBOEMsY0FBUSxFQUFFRDtBQUF4RCxPQUZSO0FBSUksU0FBSyxFQUFFRTtBQUpYLElBRE4sQ0FERjtBQVVEOztBQUVjSix5RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2Zvcm1zL2NoZWNrYm94LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiO1xuXG5mdW5jdGlvbiBDaGVja2JveGVzKHsgb25DaGFuZ2UsIHJlZiwgY29uZmlnLCBsYWJlbCxzdG9yZSB9KSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHNldFN0YXRlKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgICBvbkNoYW5nZShldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gIH07XG4gICAgY29uc29sZS5sb2coXCJDaGVja2JveGVzIHN0b3JlXCIsIHN0b3JlKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHsuLi5jb25maWd9IGlucHV0UmVmPXtyZWZ9IC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIC8+XG4gICAgPC9Gb3JtR3JvdXA+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/forms/checkbox.js\n");

/***/ })

}]);