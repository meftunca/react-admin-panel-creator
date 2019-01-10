(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./src/other/creator/component/collapse.js":
/*!*************************************************!*\
  !*** ./src/other/creator/component/collapse.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/index.es.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/Collapse/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      maxWidth: 360
    },
    nested: {
      paddingLeft: 4 * 4
    }
  };
});

function CollapseFormList(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.open),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  function handleClick() {
    setOpen(!open);
  }

  console.log("prop", props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
    button: true,
    onClick: handleClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3___default.a, {
    primary: props.title
  }), open ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    name: "expand_less"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    name: "expand_more"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_4___default.a, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    spacing: 16
  }, props.children)));
}

var Icon = function Icon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, props.name);
};

/* harmony default export */ __webpack_exports__["default"] = (CollapseFormList);

/***/ })

}]);