(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./src/components/chart/dataGenerator.js":
/*!***********************************************!*\
  !*** ./src/components/chart/dataGenerator.js ***!
  \***********************************************/
/*! exports provided: dataGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataGenerator\", function() { return dataGenerator; });\nvar getRandom = function getRandom() {\n  var randomValue = Math.random();\n\n  if (randomValue === 0) {\n    return getRandom();\n  }\n\n  return randomValue;\n};\n\nvar normalDistribution = function normalDistribution() {\n  var u = getRandom();\n  var v = getRandom();\n  return Math.sqrt(-4.0 * Math.log(u)) * Math.cos(1.0 * Math.PI * v);\n};\n\nvar dataGenerator = function dataGenerator(pointCount) {\n  var data = [];\n\n  for (var i = 0; i < pointCount; i += 1) {\n    data.push({\n      arg1: normalDistribution(),\n      val1: normalDistribution(),\n      arg2: normalDistribution() + 3,\n      val2: normalDistribution() + 3\n    });\n  }\n\n  return data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGFydC9kYXRhR2VuZXJhdG9yLmpzPzAyMjkiXSwibmFtZXMiOlsiZ2V0UmFuZG9tIiwicmFuZG9tVmFsdWUiLCJNYXRoIiwicmFuZG9tIiwibm9ybWFsRGlzdHJpYnV0aW9uIiwidSIsInYiLCJzcXJ0IiwibG9nIiwiY29zIiwiUEkiLCJkYXRhR2VuZXJhdG9yIiwicG9pbnRDb3VudCIsImRhdGEiLCJpIiwicHVzaCIsImFyZzEiLCJ2YWwxIiwiYXJnMiIsInZhbDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLE1BQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEVBQXBCOztBQUNBLE1BQUlGLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNuQixXQUFPRCxTQUFTLEVBQWhCO0FBQ0g7O0FBQ0QsU0FBT0MsV0FBUDtBQUNILENBTkQ7O0FBUUEsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCLE1BQU1DLENBQUMsR0FBR0wsU0FBUyxFQUFuQjtBQUNBLE1BQU1NLENBQUMsR0FBR04sU0FBUyxFQUFuQjtBQUNBLFNBQU9FLElBQUksQ0FBQ0ssSUFBTCxDQUFVLENBQUMsR0FBRCxHQUFPTCxJQUFJLENBQUNNLEdBQUwsQ0FBU0gsQ0FBVCxDQUFqQixJQUFnQ0gsSUFBSSxDQUFDTyxHQUFMLENBQVMsTUFBTVAsSUFBSSxDQUFDUSxFQUFYLEdBQWdCSixDQUF6QixDQUF2QztBQUNILENBSkQ7O0FBTU8sSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxVQUFELEVBQWdCO0FBQ3pDLE1BQU1DLElBQUksR0FBRyxFQUFiOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsVUFBcEIsRUFBZ0NFLENBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUNwQ0QsUUFBSSxDQUFDRSxJQUFMLENBQVU7QUFDTkMsVUFBSSxFQUFFWixrQkFBa0IsRUFEbEI7QUFFTmEsVUFBSSxFQUFFYixrQkFBa0IsRUFGbEI7QUFHTmMsVUFBSSxFQUFFZCxrQkFBa0IsS0FBSyxDQUh2QjtBQUlOZSxVQUFJLEVBQUVmLGtCQUFrQixLQUFLO0FBSnZCLEtBQVY7QUFNSDs7QUFDRCxTQUFPUyxJQUFQO0FBQ0gsQ0FYTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NoYXJ0L2RhdGFHZW5lcmF0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRSYW5kb20gPSAoKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmIChyYW5kb21WYWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZ2V0UmFuZG9tKCk7XG4gICAgfVxuICAgIHJldHVybiByYW5kb21WYWx1ZTtcbn07XG5cbmNvbnN0IG5vcm1hbERpc3RyaWJ1dGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB1ID0gZ2V0UmFuZG9tKCk7XG4gICAgY29uc3QgdiA9IGdldFJhbmRvbSgpO1xuICAgIHJldHVybiBNYXRoLnNxcnQoLTQuMCAqIE1hdGgubG9nKHUpKSAqIE1hdGguY29zKDEuMCAqIE1hdGguUEkgKiB2KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkYXRhR2VuZXJhdG9yID0gKHBvaW50Q291bnQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludENvdW50OyBpICs9IDEpIHtcbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAgIGFyZzE6IG5vcm1hbERpc3RyaWJ1dGlvbigpLFxuICAgICAgICAgICAgdmFsMTogbm9ybWFsRGlzdHJpYnV0aW9uKCksXG4gICAgICAgICAgICBhcmcyOiBub3JtYWxEaXN0cmlidXRpb24oKSArIDMsXG4gICAgICAgICAgICB2YWwyOiBub3JtYWxEaXN0cmlidXRpb24oKSArIDMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/chart/dataGenerator.js\n");

/***/ })

}]);