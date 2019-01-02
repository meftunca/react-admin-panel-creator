(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/frontend/router/index.js":
/*!**************************************!*\
  !*** ./src/frontend/router/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_router_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-transition */ "./node_modules/react-router-transition/es/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/frontend/router/header.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ "./src/frontend/router/list.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_transition__WEBPACK_IMPORTED_MODULE_2__["AnimatedSwitch"], {
    atEnter: bounceTransition.atEnter,
    atLeave: bounceTransition.atLeave,
    atActive: bounceTransition.atActive,
    mapStyles: mapStyles,
    className: "switch-wrapper"
  }, _list__WEBPACK_IMPORTED_MODULE_4__["RouteList"].map(function (i, k) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParserRoute, _extends({}, i, {
      key: k
    }));
  }))));
});

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: "scale(".concat(styles.scale, ")")
  };
} // wrap the `spring` helper to use a bouncy config


function bounce(val) {
  return Object(react_router_transition__WEBPACK_IMPORTED_MODULE_2__["spring"])(val, {
    stiffness: 330,
    damping: 22
  });
} // child matches will...


var bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

var ParserRoute = function ParserRoute(_ref) {
  var exact = _ref.exact,
      path = _ref.path,
      Component = _ref.Component;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: exact != undefined && exact,
    path: path,
    component: Component
  });
};

/***/ })

}]);