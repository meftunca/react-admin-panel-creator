(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/components/chart/dataGenerator.js":
/*!***********************************************!*\
  !*** ./src/components/chart/dataGenerator.js ***!
  \***********************************************/
/*! exports provided: dataGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataGenerator", function() { return dataGenerator; });
var getRandom = function getRandom() {
  var randomValue = Math.random();

  if (randomValue === 0) {
    return getRandom();
  }

  return randomValue;
};

var normalDistribution = function normalDistribution() {
  var u = getRandom();
  var v = getRandom();
  return Math.sqrt(-4.0 * Math.log(u)) * Math.cos(1.0 * Math.PI * v);
};

var dataGenerator = function dataGenerator(pointCount) {
  var data = [];

  for (var i = 0; i < pointCount; i += 1) {
    data.push({
      arg1: normalDistribution(),
      val1: normalDistribution(),
      arg2: normalDistribution() + 3,
      val2: normalDistribution() + 3
    });
  }

  return data;
};

/***/ })

}]);