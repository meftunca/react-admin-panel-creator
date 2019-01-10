(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./src/other/page/components/FullScreenDialog.js":
/*!*******************************************************!*\
  !*** ./src/other/page/components/FullScreenDialog.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/index.es.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/Slide/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var useStyles = {
  appBar: {
    position: "relative",
    backgroundColor: "transparent",
    color: "#000"
  },
  flex: {
    flex: 1
  },
  containerWrapper: {
    padding: 10
  },
  grow: {
    flexGrow: 1
  },
  between: {
    justifyContent: "space-between"
  }
};

function Transition(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({
    direction: "up"
  }, props));
}

function FullScreenDialog(_ref) {
  var open = _ref.open,
      handleClose = _ref.handleClose,
      classes = _ref.classes,
      children = _ref.children,
      save = _ref.save;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fullScreen: true,
    open: open,
    onClose: handleClose,
    TransitionComponent: Transition
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.appBar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.between
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "inherit",
    onClick: handleClose,
    "aria-label": "Close"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, "close")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "h6",
    color: "inherit",
    className: classes.flex
  }, "Mail Olu\u015Fturucu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "inherit",
    onClick: save
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons mr-2"
  }, "save"), "Kaydet"))), children));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(useStyles)(FullScreenDialog));

/***/ })

}]);