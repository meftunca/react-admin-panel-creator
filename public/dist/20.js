(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./src/frontend/router/index.js":
/*!**************************************!*\
  !*** ./src/frontend/router/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_router_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-transition */ \"./node_modules/react-router-transition/es/index.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./src/frontend/router/header.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./src/frontend/router/list.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_transition__WEBPACK_IMPORTED_MODULE_2__[\"AnimatedSwitch\"], {\n    atEnter: bounceTransition.atEnter,\n    atLeave: bounceTransition.atLeave,\n    atActive: bounceTransition.atActive,\n    mapStyles: mapStyles,\n    className: \"switch-wrapper\"\n  }, _list__WEBPACK_IMPORTED_MODULE_4__[\"RouteList\"].map(function (i, k) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParserRoute, _extends({}, i, {\n      key: k\n    }));\n  }))));\n});\n\nfunction mapStyles(styles) {\n  return {\n    opacity: styles.opacity,\n    transform: \"scale(\".concat(styles.scale, \")\")\n  };\n} // wrap the `spring` helper to use a bouncy config\n\n\nfunction bounce(val) {\n  return Object(react_router_transition__WEBPACK_IMPORTED_MODULE_2__[\"spring\"])(val, {\n    stiffness: 330,\n    damping: 22\n  });\n} // child matches will...\n\n\nvar bounceTransition = {\n  // start in a transparent, upscaled state\n  atEnter: {\n    opacity: 0,\n    scale: 1.2\n  },\n  // leave in a transparent, downscaled state\n  atLeave: {\n    opacity: bounce(0),\n    scale: bounce(0.8)\n  },\n  // and rest at an opaque, normally-scaled state\n  atActive: {\n    opacity: bounce(1),\n    scale: bounce(1)\n  }\n};\n\nvar ParserRoute = function ParserRoute(_ref) {\n  var exact = _ref.exact,\n      path = _ref.path,\n      Component = _ref.Component;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: exact != undefined && exact,\n    path: path,\n    component: Component\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQvcm91dGVyL2luZGV4LmpzPzM3ZTQiXSwibmFtZXMiOlsiYm91bmNlVHJhbnNpdGlvbiIsImF0RW50ZXIiLCJhdExlYXZlIiwiYXRBY3RpdmUiLCJtYXBTdHlsZXMiLCJSb3V0ZUxpc3QiLCJtYXAiLCJpIiwiayIsInN0eWxlcyIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJzY2FsZSIsImJvdW5jZSIsInZhbCIsInNwcmluZyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJQYXJzZXJSb3V0ZSIsImV4YWN0IiwicGF0aCIsIkNvbXBvbmVudCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlO0FBQUEsU0FDWCwyREFBQyw4REFBRCxRQUNBLDJEQUFDLDhDQUFELFFBQ0UsMkRBQUMsK0NBQUQsT0FERixFQUVFLDJEQUFDLHNFQUFEO0FBQ0UsV0FBTyxFQUFFQSxnQkFBZ0IsQ0FBQ0MsT0FENUI7QUFFRSxXQUFPLEVBQUVELGdCQUFnQixDQUFDRSxPQUY1QjtBQUdFLFlBQVEsRUFBRUYsZ0JBQWdCLENBQUNHLFFBSDdCO0FBSUUsYUFBUyxFQUFFQyxTQUpiO0FBS0UsYUFBUyxFQUFDO0FBTFosS0FPR0MsK0NBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQ2IsMkRBQUMsV0FBRCxlQUFpQkQsQ0FBakI7QUFBb0IsU0FBRyxFQUFFQztBQUF6QixPQURhO0FBQUEsR0FBZCxDQVBILENBRkYsQ0FEQSxDQURXO0FBQUEsQ0FBZjs7QUFrQkEsU0FBU0osU0FBVCxDQUFtQkssTUFBbkIsRUFBMkI7QUFDekIsU0FBTztBQUNMQyxXQUFPLEVBQUVELE1BQU0sQ0FBQ0MsT0FEWDtBQUVMQyxhQUFTLGtCQUFXRixNQUFNLENBQUNHLEtBQWxCO0FBRkosR0FBUDtBQUlELEMsQ0FFRDs7O0FBQ0EsU0FBU0MsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUI7QUFDbkIsU0FBT0Msc0VBQU0sQ0FBQ0QsR0FBRCxFQUFNO0FBQ2pCRSxhQUFTLEVBQUUsR0FETTtBQUVqQkMsV0FBTyxFQUFFO0FBRlEsR0FBTixDQUFiO0FBSUQsQyxDQUVEOzs7QUFDQSxJQUFNakIsZ0JBQWdCLEdBQUc7QUFDdkI7QUFDQUMsU0FBTyxFQUFFO0FBQ1BTLFdBQU8sRUFBRSxDQURGO0FBRVBFLFNBQUssRUFBRTtBQUZBLEdBRmM7QUFNdkI7QUFDQVYsU0FBTyxFQUFFO0FBQ1BRLFdBQU8sRUFBRUcsTUFBTSxDQUFDLENBQUQsQ0FEUjtBQUVQRCxTQUFLLEVBQUVDLE1BQU0sQ0FBQyxHQUFEO0FBRk4sR0FQYztBQVd2QjtBQUNBVixVQUFRLEVBQUU7QUFDUk8sV0FBTyxFQUFFRyxNQUFNLENBQUMsQ0FBRCxDQURQO0FBRVJELFNBQUssRUFBRUMsTUFBTSxDQUFDLENBQUQ7QUFGTDtBQVphLENBQXpCOztBQWtCQSxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLElBQVYsUUFBVUEsSUFBVjtBQUFBLE1BQWdCQyxTQUFoQixRQUFnQkEsU0FBaEI7QUFBQSxTQUNsQiwyREFBQyxzREFBRDtBQUNFLFNBQUssRUFBRUYsS0FBSyxJQUFJRyxTQUFULElBQXNCSCxLQUQvQjtBQUVFLFFBQUksRUFBRUMsSUFGUjtBQUdFLGFBQVMsRUFBRUM7QUFIYixJQURrQjtBQUFBLENBQXBCIiwiZmlsZSI6Ii4vc3JjL2Zyb250ZW5kL3JvdXRlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIExpbmssIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHNwcmluZyxBbmltYXRlZFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItdHJhbnNpdGlvblwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCB7IFJvdXRlTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxSb3V0ZXI+XG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEFuaW1hdGVkU3dpdGNoXG4gICAgICAgIGF0RW50ZXI9e2JvdW5jZVRyYW5zaXRpb24uYXRFbnRlcn1cbiAgICAgICAgYXRMZWF2ZT17Ym91bmNlVHJhbnNpdGlvbi5hdExlYXZlfVxuICAgICAgICBhdEFjdGl2ZT17Ym91bmNlVHJhbnNpdGlvbi5hdEFjdGl2ZX1cbiAgICAgICAgbWFwU3R5bGVzPXttYXBTdHlsZXN9XG4gICAgICAgIGNsYXNzTmFtZT1cInN3aXRjaC13cmFwcGVyXCJcbiAgICAgID5cbiAgICAgICAge1JvdXRlTGlzdC5tYXAoKGksIGspID0+IChcbiAgICAgICAgICA8UGFyc2VyUm91dGUgey4uLml9IGtleT17a30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0FuaW1hdGVkU3dpdGNoPlxuICAgIDwvRnJhZ21lbnQ+XG4gIDwvUm91dGVyPlxuICk7XG5mdW5jdGlvbiBtYXBTdHlsZXMoc3R5bGVzKSB7XG4gIHJldHVybiB7XG4gICAgb3BhY2l0eTogc3R5bGVzLm9wYWNpdHksXG4gICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzdHlsZXMuc2NhbGV9KWBcbiAgfTtcbn1cblxuLy8gd3JhcCB0aGUgYHNwcmluZ2AgaGVscGVyIHRvIHVzZSBhIGJvdW5jeSBjb25maWdcbmZ1bmN0aW9uIGJvdW5jZSh2YWwpIHtcbiAgcmV0dXJuIHNwcmluZyh2YWwsIHtcbiAgICBzdGlmZm5lc3M6IDMzMCxcbiAgICBkYW1waW5nOiAyMlxuICB9KTtcbn1cblxuLy8gY2hpbGQgbWF0Y2hlcyB3aWxsLi4uXG5jb25zdCBib3VuY2VUcmFuc2l0aW9uID0ge1xuICAvLyBzdGFydCBpbiBhIHRyYW5zcGFyZW50LCB1cHNjYWxlZCBzdGF0ZVxuICBhdEVudGVyOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICBzY2FsZTogMS4yXG4gIH0sXG4gIC8vIGxlYXZlIGluIGEgdHJhbnNwYXJlbnQsIGRvd25zY2FsZWQgc3RhdGVcbiAgYXRMZWF2ZToge1xuICAgIG9wYWNpdHk6IGJvdW5jZSgwKSxcbiAgICBzY2FsZTogYm91bmNlKDAuOClcbiAgfSxcbiAgLy8gYW5kIHJlc3QgYXQgYW4gb3BhcXVlLCBub3JtYWxseS1zY2FsZWQgc3RhdGVcbiAgYXRBY3RpdmU6IHtcbiAgICBvcGFjaXR5OiBib3VuY2UoMSksXG4gICAgc2NhbGU6IGJvdW5jZSgxKVxuICB9XG59O1xuXG5jb25zdCBQYXJzZXJSb3V0ZSA9ICh7IGV4YWN0LCBwYXRoLCBDb21wb25lbnQgfSkgPT4gKFxuICA8Um91dGVcbiAgICBleGFjdD17ZXhhY3QgIT0gdW5kZWZpbmVkICYmIGV4YWN0fVxuICAgIHBhdGg9e3BhdGh9XG4gICAgY29tcG9uZW50PXtDb21wb25lbnR9XG4gIC8+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/frontend/router/index.js\n");

/***/ })

}]);