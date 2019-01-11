(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./src/testPage.js":
/*!*************************!*\
  !*** ./src/testPage.js ***!
  \*************************/
/*! exports provided: Home, Product, About, Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_forms_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/forms/builder */ "./src/components/forms/builder.js");



var FormJson = __webpack_require__(/*! ./json/form */ "./src/json/form.json");

var Home = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_builder__WEBPACK_IMPORTED_MODULE_1__["default"], FormJson[0]);
var Product = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Product Page");
var About = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About Page");
var Contact = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Contact Page");


/***/ })

}]);