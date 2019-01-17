(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./src/other/page/components/FullScreenDialog.js":
/*!*******************************************************!*\
  !*** ./src/other/page/components/FullScreenDialog.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/index.es.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"./node_modules/@material-ui/core/Dialog/index.js\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Slide */ \"./node_modules/@material-ui/core/Slide/index.js\");\n/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\nvar useStyles = {\n  appBar: {\n    position: \"relative\",\n    backgroundColor: \"transparent\",\n    color: \"#000\"\n  },\n  flex: {\n    flex: 1\n  },\n  containerWrapper: {\n    padding: 10\n  },\n  grow: {\n    flexGrow: 1\n  },\n  between: {\n    justifyContent: \"space-between\"\n  }\n};\n\nfunction Transition(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({\n    direction: \"up\"\n  }, props));\n}\n\nfunction FullScreenDialog(_ref) {\n  var open = _ref.open,\n      handleClose = _ref.handleClose,\n      classes = _ref.classes,\n      children = _ref.children,\n      save = _ref.save;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    fullScreen: true,\n    open: open,\n    onClose: handleClose,\n    TransitionComponent: Transition\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: classes.appBar\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    className: classes.between\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    color: \"inherit\",\n    onClick: handleClose,\n    \"aria-label\": \"Close\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"material-icons\"\n  }, \"close\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    variant: \"h6\",\n    color: \"inherit\",\n    className: classes.flex\n  }, \"Mail Olu\\u015Fturucu\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    color: \"inherit\",\n    onClick: save\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"material-icons mr-2\"\n  }, \"save\"), \"Kaydet\"))), children));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(useStyles)(FullScreenDialog));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3RoZXIvcGFnZS9jb21wb25lbnRzL0Z1bGxTY3JlZW5EaWFsb2cuanM/MThhYSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJhcHBCYXIiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZmxleCIsImNvbnRhaW5lcldyYXBwZXIiLCJwYWRkaW5nIiwiZ3JvdyIsImZsZXhHcm93IiwiYmV0d2VlbiIsImp1c3RpZnlDb250ZW50IiwiVHJhbnNpdGlvbiIsInByb3BzIiwiRnVsbFNjcmVlbkRpYWxvZyIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsImNsYXNzZXMiLCJjaGlsZHJlbiIsInNhdmUiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsUUFBTSxFQUFFO0FBQ05DLFlBQVEsRUFBRSxVQURKO0FBRU5DLG1CQUFlLEVBQUUsYUFGWDtBQUdOQyxTQUFLLEVBQUU7QUFIRCxHQURRO0FBTWhCQyxNQUFJLEVBQUU7QUFDSkEsUUFBSSxFQUFFO0FBREYsR0FOVTtBQVNoQkMsa0JBQWdCLEVBQUU7QUFDaEJDLFdBQU8sRUFBRTtBQURPLEdBVEY7QUFZaEJDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUU7QUFETixHQVpVO0FBZWhCQyxTQUFPLEVBQUU7QUFDUEMsa0JBQWMsRUFBRTtBQURUO0FBZk8sQ0FBbEI7O0FBb0JBLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3pCLFNBQU8sMkRBQUMsOERBQUQ7QUFBTyxhQUFTLEVBQUM7QUFBakIsS0FBMEJBLEtBQTFCLEVBQVA7QUFDRDs7QUFFRCxTQUFTQyxnQkFBVCxPQUEwRTtBQUFBLE1BQTlDQyxJQUE4QyxRQUE5Q0EsSUFBOEM7QUFBQSxNQUF4Q0MsV0FBd0MsUUFBeENBLFdBQXdDO0FBQUEsTUFBM0JDLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxRQUFrQixRQUFsQkEsUUFBa0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDeEUsU0FDRSx3RUFDRSwyREFBQywrREFBRDtBQUFRLGNBQVUsTUFBbEI7QUFBbUIsUUFBSSxFQUFFSixJQUF6QjtBQUErQixXQUFPLEVBQUVDLFdBQXhDO0FBQXFELHVCQUFtQixFQUFFSjtBQUExRSxLQUNFLDJEQUFDLCtEQUFEO0FBQVEsYUFBUyxFQUFFSyxPQUFPLENBQUNoQjtBQUEzQixLQUNFLDJEQUFDLGdFQUFEO0FBQVMsYUFBUyxFQUFFZ0IsT0FBTyxDQUFDUDtBQUE1QixLQUNFLDJEQUFDLG1FQUFEO0FBQVksU0FBSyxFQUFDLFNBQWxCO0FBQTRCLFdBQU8sRUFBRU0sV0FBckM7QUFBa0Qsa0JBQVc7QUFBN0QsS0FDRTtBQUFHLGFBQVMsRUFBQztBQUFiLGFBREYsQ0FERixFQUlFLDJEQUFDLG1FQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBQyxTQUEvQjtBQUF5QyxhQUFTLEVBQUVDLE9BQU8sQ0FBQ1o7QUFBNUQsNEJBSkYsRUFRRSwyREFBQywrREFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQXdCLFdBQU8sRUFBRWM7QUFBakMsS0FDRTtBQUFHLGFBQVMsRUFBQztBQUFiLFlBREYsV0FSRixDQURGLENBREYsRUFnQkdELFFBaEJILENBREYsQ0FERjtBQXNCRDs7QUFFY0UscUlBQVUsQ0FBQ3BCLFNBQUQsQ0FBVixDQUFzQmMsZ0JBQXRCLENBQWYiLCJmaWxlIjoiLi9zcmMvb3RoZXIvcGFnZS9jb21wb25lbnRzL0Z1bGxTY3JlZW5EaWFsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBTbGlkZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0ge1xuICBhcHBCYXI6IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGNvbG9yOiBcIiMwMDBcIlxuICB9LFxuICBmbGV4OiB7XG4gICAgZmxleDogMVxuICB9LFxuICBjb250YWluZXJXcmFwcGVyOiB7XG4gICAgcGFkZGluZzogMTBcbiAgfSxcbiAgZ3Jvdzoge1xuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIGJldHdlZW46IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfVxufTtcblxuZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcykge1xuICByZXR1cm4gPFNsaWRlIGRpcmVjdGlvbj0ndXAnIHsuLi5wcm9wc30gLz47XG59XG5cbmZ1bmN0aW9uIEZ1bGxTY3JlZW5EaWFsb2coeyBvcGVuLCBoYW5kbGVDbG9zZSwgY2xhc3NlcywgY2hpbGRyZW4sIHNhdmUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RGlhbG9nIGZ1bGxTY3JlZW4gb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IFRyYW5zaXRpb25Db21wb25lbnQ9e1RyYW5zaXRpb259PlxuICAgICAgICA8QXBwQmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJ9PlxuICAgICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5iZXR3ZWVufT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPSdpbmhlcml0JyBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gYXJpYS1sYWJlbD0nQ2xvc2UnPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5jbG9zZTwvaT5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjb2xvcj0naW5oZXJpdCcgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXh9PlxuICAgICAgICAgICAgICBNYWlsIE9sdcWfdHVydWN1XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J2luaGVyaXQnIG9uQ2xpY2s9e3NhdmV9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zIG1yLTInPnNhdmU8L2k+XG4gICAgICAgICAgICAgIEtheWRldFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXModXNlU3R5bGVzKShGdWxsU2NyZWVuRGlhbG9nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/other/page/components/FullScreenDialog.js\n");

/***/ })

}]);