(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@material-ui/core/Box/Box.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/core/Box/Box.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unstable_Box = exports.styleFunction = void 0;

var _borders = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/borders */ "./node_modules/@material-ui/system/borders.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/compose */ "./node_modules/@material-ui/system/compose.js"));

var _styled = _interopRequireDefault(__webpack_require__(/*! @material-ui/styles/styled */ "./node_modules/@material-ui/styles/styled.js"));

var _display = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/display */ "./node_modules/@material-ui/system/display.js"));

var _flexbox = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/flexbox */ "./node_modules/@material-ui/system/flexbox.js"));

var _palette = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/palette */ "./node_modules/@material-ui/system/palette.js"));

var _positions = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/positions */ "./node_modules/@material-ui/system/positions.js"));

var _shadows = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/shadows */ "./node_modules/@material-ui/system/shadows.js"));

var _sizing = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/sizing */ "./node_modules/@material-ui/system/sizing.js"));

var _spacing = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/spacing */ "./node_modules/@material-ui/system/spacing.js"));

var _typography = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/typography */ "./node_modules/@material-ui/system/typography.js"));

var _css = _interopRequireDefault(__webpack_require__(/*! @material-ui/system/css */ "./node_modules/@material-ui/system/css.js"));

/* eslint-disable camelcase */
var styleFunction = (0, _css.default)((0, _compose.default)(_borders.default, _display.default, _flexbox.default, _positions.default, _palette.default, _shadows.default, _sizing.default, _spacing.default, _typography.default));
/**
 * @ignore - do not document.
 */

exports.styleFunction = styleFunction;
var unstable_Box = (0, _styled.default)('div')(styleFunction, {
  name: 'MuiBox'
});
exports.unstable_Box = unstable_Box;

/***/ }),

/***/ "./node_modules/@material-ui/core/Box/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Box/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "unstable_Box", {
  enumerable: true,
  get: function get() {
    return _Box.unstable_Box;
  }
});

var _Box = __webpack_require__(/*! ./Box */ "./node_modules/@material-ui/core/Box/Box.js");

/***/ }),

/***/ "./node_modules/@material-ui/icons/Face.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Face.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Face');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/borders.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/system/borders.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.borderRadius = exports.borderColor = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.border = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/style.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/compose.js"));

function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return "".concat(value, "px solid").concat(value === 0 ? ' !important' : '');
}

var border = (0, _style.default)({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
exports.border = border;
var borderTop = (0, _style.default)({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
exports.borderTop = borderTop;
var borderRight = (0, _style.default)({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
exports.borderRight = borderRight;
var borderBottom = (0, _style.default)({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
exports.borderBottom = borderBottom;
var borderLeft = (0, _style.default)({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
exports.borderLeft = borderLeft;
var borderColor = (0, _style.default)({
  prop: 'borderColor',
  themeKey: 'palette',
  transform: function transform(value) {
    return "".concat(value, " !important");
  }
});
exports.borderColor = borderColor;
var borderRadius = (0, _style.default)({
  prop: 'borderRadius',
  themeKey: 'shape'
});
exports.borderRadius = borderRadius;
var borders = (0, _compose.default)(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
var _default = borders;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/breakpoints.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/system/breakpoints.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBreakpoints = handleBreakpoints;
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/extends.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/typeof.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./merge */ "./node_modules/@material-ui/system/merge.js"));

// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
var values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  }
};

function handleBreakpoints(props, propValue, styleFromPropValue) {
   true ? (0, _warning.default)(props.theme, '@material-ui/system: you are calling a style function without a theme value.') : undefined;

  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function (acc, item, index) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if ((0, _typeof2.default)(propValue) === 'object') {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;

    return Object.keys(propValue).reduce(function (acc, breakpoint) {
      acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }

  var output = styleFromPropValue(propValue);
  return output;
}

function breakpoints(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var base = styleFunction(props);
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    var extended = themeBreakpoints.keys.reduce(function (acc, key) {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction((0, _extends2.default)({
          theme: props.theme
        }, props[key]));
      }

      return acc;
    }, null);
    return (0, _merge.default)(base, extended);
  };

  newStyleFunction.propTypes =  true ? (0, _extends2.default)({}, styleFunction.propTypes, {
    xs: _propTypes.default.object,
    sm: _propTypes.default.object,
    md: _propTypes.default.object,
    lg: _propTypes.default.object,
    xl: _propTypes.default.object
  }) : undefined;
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl'].concat((0, _toConsumableArray2.default)(styleFunction.filterProps));
  return newStyleFunction;
}

var _default = breakpoints;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/compose.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/system/compose.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/extends.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./merge */ "./node_modules/@material-ui/system/merge.js"));

function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var fn = function fn(props) {
    return styles.reduce(function (acc, style) {
      var output = style(props);

      if (output) {
        return (0, _merge.default)(acc, output);
      }

      return acc;
    }, {});
  }; // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes =  true ? styles.reduce(function (acc, style) {
    return (0, _extends2.default)(acc, style.propTypes);
  }, {}) : undefined;
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

var _default = compose;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/css.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/system/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/extends.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _merge = _interopRequireDefault(__webpack_require__(/*! ./merge */ "./node_modules/@material-ui/system/merge.js"));

function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

function css(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return (0, _extends2.default)({}, (0, _merge.default)(output, styleFunction((0, _extends2.default)({
        theme: props.theme
      }, props.css))), omit(props.css, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes =  true ? (0, _extends2.default)({}, styleFunction.propTypes, {
    css: _propTypes.default.object
  }) : undefined;
  newStyleFunction.filterProps = ['css'].concat((0, _toConsumableArray2.default)(styleFunction.filterProps));
  return newStyleFunction;
}

var _default = css;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/display.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/system/display.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.displayPrint = exports.displayRaw = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/style.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/compose.js"));

var displayRaw = (0, _style.default)({
  prop: 'display'
});
exports.displayRaw = displayRaw;
var displayPrint = (0, _style.default)({
  prop: 'displayPrint',
  cssProperty: false,
  transform: function transform(value) {
    return {
      '@media print': {
        display: value
      }
    };
  }
});
exports.displayPrint = displayPrint;

var _default = (0, _compose.default)(displayRaw, displayPrint);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/flexbox.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/system/flexbox.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.alignSelf = exports.flexShrink = exports.flexGrow = exports.flex = exports.order = exports.alignContent = exports.alignItems = exports.justifyContent = exports.flexWrap = exports.flexDirection = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/style.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/compose.js"));

var flexDirection = (0, _style.default)({
  prop: 'flexDirection'
});
exports.flexDirection = flexDirection;
var flexWrap = (0, _style.default)({
  prop: 'flexWrap'
});
exports.flexWrap = flexWrap;
var justifyContent = (0, _style.default)({
  prop: 'justifyContent'
});
exports.justifyContent = justifyContent;
var alignItems = (0, _style.default)({
  prop: 'alignItems'
});
exports.alignItems = alignItems;
var alignContent = (0, _style.default)({
  prop: 'alignContent'
});
exports.alignContent = alignContent;
var order = (0, _style.default)({
  prop: 'order'
});
exports.order = order;
var flex = (0, _style.default)({
  prop: 'flex'
});
exports.flex = flex;
var flexGrow = (0, _style.default)({
  prop: 'flexGrow'
});
exports.flexGrow = flexGrow;
var flexShrink = (0, _style.default)({
  prop: 'flexShrink'
});
exports.flexShrink = flexShrink;
var alignSelf = (0, _style.default)({
  prop: 'alignSelf'
});
exports.alignSelf = alignSelf;
var flexbox = (0, _compose.default)(flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf);
var _default = flexbox;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/memoize.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/system/memoize.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = memoize;

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/system/merge.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/system/merge.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/@material-ui/system/node_modules/deepmerge/dist/es.js"));

// < 1kb payload overhead when lodash/merge is > 3kb.
function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return (0, _deepmerge.default)(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

var _default = merge;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/extends.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/extends.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/typeof.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/typeof.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@material-ui/system/node_modules/deepmerge/dist/es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/system/node_modules/deepmerge/dist/es.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),

/***/ "./node_modules/@material-ui/system/palette.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/system/palette.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.bgcolor = exports.color = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/style.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/compose.js"));

var color = (0, _style.default)({
  prop: 'color',
  themeKey: 'palette'
});
exports.color = color;
var bgcolor = (0, _style.default)({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
exports.bgcolor = bgcolor;
var palette = (0, _compose.default)(color, bgcolor);
var _default = palette;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/positions.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/system/positions.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.position = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/style.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/compose.js"));

var position = (0, _style.default)({
  prop: 'position'
});
exports.position = position;
var zIndex = (0, _style.default)({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
exports.zIndex = zIndex;
var top = (0, _style.default)({
  prop: 'top'
});
exports.top = top;
var right = (0, _style.default)({
  prop: 'right'
});
exports.right = right;
var bottom = (0, _style.default)({
  prop: 'bottom'
});
exports.bottom = bottom;
var left = (0, _style.default)({
  prop: 'left'
});
exports.left = left;

var _default = (0, _compose.default)(position, zIndex, top, right, bottom, left);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/responsivePropType.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/system/responsivePropType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var responsivePropType =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.object]) : undefined;
var _default = responsivePropType;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/shadows.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/system/shadows.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/style.js"));

var boxShadow = (0, _style.default)({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
var _default = boxShadow;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/sizing.js":
/*!****************************************************!*\
  !*** ./node_modules/@material-ui/system/sizing.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sizeHeight = exports.sizeWidth = exports.minHeight = exports.maxHeight = exports.height = exports.minWidth = exports.maxWidth = exports.width = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/style.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/compose.js"));

var width = (0, _style.default)({
  prop: 'width'
});
exports.width = width;
var maxWidth = (0, _style.default)({
  prop: 'maxWidth'
});
exports.maxWidth = maxWidth;
var minWidth = (0, _style.default)({
  prop: 'minWidth'
});
exports.minWidth = minWidth;
var height = (0, _style.default)({
  prop: 'height'
});
exports.height = height;
var maxHeight = (0, _style.default)({
  prop: 'maxHeight'
});
exports.maxHeight = maxHeight;
var minHeight = (0, _style.default)({
  prop: 'minHeight'
});
exports.minHeight = minHeight;
var sizeWidth = (0, _style.default)({
  prop: 'size',
  cssProperty: 'width'
});
exports.sizeWidth = sizeWidth;
var sizeHeight = (0, _style.default)({
  prop: 'size',
  cssProperty: 'height'
});
exports.sizeHeight = sizeHeight;
var sizing = (0, _compose.default)(width, maxWidth, minWidth, height, maxHeight, minHeight);
var _default = sizing;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/spacing.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/system/spacing.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _responsivePropType = _interopRequireDefault(__webpack_require__(/*! ./responsivePropType */ "./node_modules/@material-ui/system/responsivePropType.js"));

var _breakpoints = __webpack_require__(/*! ./breakpoints */ "./node_modules/@material-ui/system/breakpoints.js");

var _merge = _interopRequireDefault(__webpack_require__(/*! ./merge */ "./node_modules/@material-ui/system/merge.js"));

var _memoize = _interopRequireDefault(__webpack_require__(/*! ./memoize */ "./node_modules/@material-ui/system/memoize.js"));

var properties = {
  m: 'margin',
  p: 'padding'
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

var getCssProperties = (0, _memoize.default)(function (prop) {
  // It's not a shorthand notation.
  if (prop.length > 3) {
    return [prop];
  }

  var _prop$split = prop.split(''),
      _prop$split2 = (0, _slicedToArray2.default)(_prop$split, 2),
      a = _prop$split2[0],
      b = _prop$split2[1];

  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginLeft', 'marginTop', 'marginRight', 'marginBottom', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];

function getTransformer(theme) {
  var themeTransformer = theme.spacing && theme.spacing.unit != null ? theme.spacing.unit : theme.spacing || 8;

  if (typeof themeTransformer === 'number') {
    return function (abs) {
      return themeTransformer * abs;
    };
  }

  if (Array.isArray(themeTransformer)) {
    return function (abs) {
       true ? (0, _warning.default)(abs <= themeTransformer.length - 1, ["@material-ui/system: the value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeTransformer), "."), "".concat(abs, " > ").concat(themeTransformer.length - 1, ", you need to add the missing values.")].join('\n')) : undefined;
      return themeTransformer[abs];
    };
  }

  if (typeof themeTransformer === 'function') {
    return themeTransformer;
  }

   true ? (0, _warning.default)(false, ["@material-ui/system: the `theme.spacing` value (".concat(themeTransformer, ") is invalid."), 'It should be a number, an array or a function.'].join('\n')) : undefined;
  return function () {
    return undefined;
  };
}

function getValue(transformer, propValue) {
  if (typeof propValue === 'string') {
    return propValue;
  }

  var abs = Math.abs(propValue);
  var transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return "-".concat(transformed);
}

function getStyleFromPropValue(cssProperties, transformer) {
  return function (propValue) {
    return cssProperties.reduce(function (acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}

function spacing(props) {
  var theme = props.theme;
  var transformer = getTransformer(theme);
  return Object.keys(props).map(function (prop) {
    // Using a hash computation over an array iteration could be faster, but with only 14 items,
    // it's doesn't worth the bundle size.
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }

    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return (0, _breakpoints.handleBreakpoints)(props, propValue, styleFromPropValue);
  }).reduce(_merge.default, {});
}

spacing.propTypes =  true ? spacingKeys.reduce(function (obj, key) {
  obj[key] = _responsivePropType.default;
  return obj;
}, {}) : undefined;
spacing.filterProps = spacingKeys;
var _default = spacing;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/style.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/system/style.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _responsivePropType = _interopRequireDefault(__webpack_require__(/*! ./responsivePropType */ "./node_modules/@material-ui/system/responsivePropType.js"));

var _breakpoints = __webpack_require__(/*! ./breakpoints */ "./node_modules/@material-ui/system/breakpoints.js");

function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce(function (acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}

function style(options) {
  var prop = options.prop,
      _options$cssProperty = options.cssProperty,
      cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform;

  var fn = function fn(props) {
    if (props[prop] == null) {
      return null;
    }

    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};

    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal];
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return (0, _defineProperty2.default)({}, cssProperty, value);
    };

    return (0, _breakpoints.handleBreakpoints)(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  true ? (0, _defineProperty2.default)({}, prop, _responsivePropType.default) : undefined;
  fn.filterProps = [prop];
  return fn;
}

var _default = style;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/system/typography.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/system/typography.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/system/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.textAlign = exports.fontWeight = exports.fontSize = exports.fontFamily = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./node_modules/@material-ui/system/style.js"));

var _compose = _interopRequireDefault(__webpack_require__(/*! ./compose */ "./node_modules/@material-ui/system/compose.js"));

var fontFamily = (0, _style.default)({
  prop: 'fontFamily',
  themeKey: 'typography'
});
exports.fontFamily = fontFamily;
var fontSize = (0, _style.default)({
  prop: 'fontSize',
  themeKey: 'typography'
});
exports.fontSize = fontSize;
var fontWeight = (0, _style.default)({
  prop: 'fontWeight',
  themeKey: 'typography'
});
exports.fontWeight = fontWeight;
var textAlign = (0, _style.default)({
  prop: 'textAlign'
});
exports.textAlign = textAlign;
var typography = (0, _compose.default)(fontFamily, fontSize, fontWeight, textAlign);
var _default = typography;
exports.default = _default;

/***/ }),

/***/ "./node_modules/blob-to-base64/dist/blob-to-base64.js":
/*!************************************************************!*\
  !*** ./node_modules/blob-to-base64/dist/blob-to-base64.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

/* globals Blob */
'use strict';
var toString = Object.prototype.toString;

var isBlob = function (x) {
	return x instanceof Blob || toString.call(x) === '[object Blob]';
};

function blobToBase64 (blob, cb) {
  if (!window.FileReader) {
    cb(new Error('no fileReader object available'));
  }

  if (!isBlob(blob)) {
    cb(new Error('provided argument is not blob'));
  }

  var reader = new window.FileReader();
  reader.readAsDataURL(blob);

  reader.onloadend = function () {
    cb(null, reader.result);
  };
}

return blobToBase64;

})));


/***/ }),

/***/ "./node_modules/javascript-time-ago/index.js":
/*!***************************************************!*\
  !*** ./node_modules/javascript-time-ago/index.js ***!
  \***************************************************/
/*! exports provided: default, intlDateTimeFormatSupported, intlDateTimeFormatSupportedLocale, RelativeTimeFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_JavascriptTimeAgo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/JavascriptTimeAgo */ "./node_modules/javascript-time-ago/modules/JavascriptTimeAgo.js");
/* harmony import */ var _modules_JavascriptTimeAgo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_JavascriptTimeAgo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _modules_JavascriptTimeAgo__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _modules_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/locale */ "./node_modules/javascript-time-ago/modules/locale.js");
/* harmony import */ var _modules_locale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_locale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intlDateTimeFormatSupported", function() { return _modules_locale__WEBPACK_IMPORTED_MODULE_1__["intlDateTimeFormatSupported"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intlDateTimeFormatSupportedLocale", function() { return _modules_locale__WEBPACK_IMPORTED_MODULE_1__["intlDateTimeFormatSupportedLocale"]; });

/* harmony import */ var _modules_RelativeTimeFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/RelativeTimeFormat */ "./node_modules/javascript-time-ago/modules/RelativeTimeFormat.js");
/* harmony import */ var _modules_RelativeTimeFormat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_RelativeTimeFormat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "RelativeTimeFormat", function() { return _modules_RelativeTimeFormat__WEBPACK_IMPORTED_MODULE_2___default.a; });






/***/ }),

/***/ "./node_modules/javascript-time-ago/locale/tr/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/javascript-time-ago/locale/tr/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
{
	locale: 'tr',
	long: __webpack_require__(/*! ./long.json */ "./node_modules/javascript-time-ago/locale/tr/long.json"),
	short: __webpack_require__(/*! ./short.json */ "./node_modules/javascript-time-ago/locale/tr/short.json"),
	narrow: __webpack_require__(/*! ./narrow.json */ "./node_modules/javascript-time-ago/locale/tr/narrow.json"),
	quantify: __webpack_require__(/*! ./quantify */ "./node_modules/javascript-time-ago/locale/tr/quantify.js")
}

/***/ }),

/***/ "./node_modules/javascript-time-ago/locale/tr/long.json":
/*!**************************************************************!*\
  !*** ./node_modules/javascript-time-ago/locale/tr/long.json ***!
  \**************************************************************/
/*! exports provided: year, quarter, month, week, day, hour, minute, second, now, default */
/***/ (function(module) {

module.exports = {"year":{"previous":"geçen yıl","current":"bu yıl","next":"gelecek yıl","past":"{0} yıl önce","future":"{0} yıl sonra"},"quarter":{"previous":"geçen çeyrek","current":"bu çeyrek","next":"gelecek çeyrek","past":"{0} çeyrek önce","future":"{0} çeyrek sonra"},"month":{"previous":"geçen ay","current":"bu ay","next":"gelecek ay","past":"{0} ay önce","future":"{0} ay sonra"},"week":{"previous":"geçen hafta","current":"bu hafta","next":"gelecek hafta","past":"{0} hafta önce","future":"{0} hafta sonra"},"day":{"previous":"dün","current":"bugün","next":"yarın","past":"{0} gün önce","future":"{0} gün sonra"},"hour":{"current":"bu saat","past":"{0} saat önce","future":"{0} saat sonra"},"minute":{"current":"bu dakika","past":"{0} dakika önce","future":"{0} dakika sonra"},"second":{"current":"şimdi","past":"{0} saniye önce","future":"{0} saniye sonra"},"now":"şimdi"};

/***/ }),

/***/ "./node_modules/javascript-time-ago/locale/tr/narrow.json":
/*!****************************************************************!*\
  !*** ./node_modules/javascript-time-ago/locale/tr/narrow.json ***!
  \****************************************************************/
/*! exports provided: year, quarter, month, week, day, hour, minute, second, now, default */
/***/ (function(module) {

module.exports = {"year":{"previous":"geçen yıl","current":"bu yıl","next":"gelecek yıl","past":"{0} yıl önce","future":"{0} yıl sonra"},"quarter":{"previous":"geçen çeyrek","current":"bu çeyrek","next":"gelecek çeyrek","past":"{0} çyr. önce","future":"{0} çyr. sonra"},"month":{"previous":"geçen ay","current":"bu ay","next":"gelecek ay","past":"{0} ay önce","future":"{0} ay sonra"},"week":{"previous":"geçen hafta","current":"bu hafta","next":"gelecek hafta","past":"{0} hf. önce","future":"{0} hf. sonra"},"day":{"previous":"dün","current":"bugün","next":"yarın","past":"{0} gün önce","future":"{0} gün sonra"},"hour":{"current":"bu saat","past":"{0} sa. önce","future":"{0} sa. sonra"},"minute":{"current":"bu dakika","past":"{0} dk. önce","future":"{0} dk. sonra"},"second":{"current":"şimdi","past":"{0} sn. önce","future":"{0} sn. sonra"},"now":"şimdi"};

/***/ }),

/***/ "./node_modules/javascript-time-ago/locale/tr/quantify.js":
/*!****************************************************************!*\
  !*** ./node_modules/javascript-time-ago/locale/tr/quantify.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(n){return 1==n?"one":"other"}

/***/ }),

/***/ "./node_modules/javascript-time-ago/locale/tr/short.json":
/*!***************************************************************!*\
  !*** ./node_modules/javascript-time-ago/locale/tr/short.json ***!
  \***************************************************************/
/*! exports provided: year, quarter, month, week, day, hour, minute, second, now, default */
/***/ (function(module) {

module.exports = {"year":{"previous":"geçen yıl","current":"bu yıl","next":"gelecek yıl","past":"{0} yıl önce","future":"{0} yıl sonra"},"quarter":{"previous":"geçen çeyrek","current":"bu çeyrek","next":"gelecek çeyrek","past":"{0} çyr. önce","future":"{0} çyr. sonra"},"month":{"previous":"geçen ay","current":"bu ay","next":"gelecek ay","past":"{0} ay önce","future":"{0} ay sonra"},"week":{"previous":"geçen hafta","current":"bu hafta","next":"gelecek hafta","past":"{0} hf. önce","future":"{0} hf. sonra"},"day":{"previous":"dün","current":"bugün","next":"yarın","past":"{0} gün önce","future":"{0} gün sonra"},"hour":{"current":"bu saat","past":"{0} sa. önce","future":"{0} sa. sonra"},"minute":{"current":"bu dakika","past":"{0} dk. önce","future":"{0} dk. sonra"},"second":{"current":"şimdi","past":"{0} sn. önce","future":"{0} sn. sonra"},"now":"şimdi"};

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/JavascriptTimeAgo.js":
/*!***********************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/JavascriptTimeAgo.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grade = __webpack_require__(/*! ./grade */ "./node_modules/javascript-time-ago/modules/grade.js");

var _grade2 = _interopRequireDefault(_grade);

var _locale = __webpack_require__(/*! ./locale */ "./node_modules/javascript-time-ago/modules/locale.js");

var _locale2 = _interopRequireDefault(_locale);

var _style = __webpack_require__(/*! ./style */ "./node_modules/javascript-time-ago/modules/style/index.js");

var _RelativeTimeFormat = __webpack_require__(/*! ./RelativeTimeFormat */ "./node_modules/javascript-time-ago/modules/RelativeTimeFormat.js");

var _RelativeTimeFormat2 = _interopRequireDefault(_RelativeTimeFormat);

var _LocaleDataStore = __webpack_require__(/*! ./LocaleDataStore */ "./node_modules/javascript-time-ago/modules/LocaleDataStore.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JavascriptTimeAgo = function () {
	/**
  * @param {(string|string[])} locales=[] - Preferred locales (or locale).
  */
	function JavascriptTimeAgo() {
		var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		_classCallCheck(this, JavascriptTimeAgo);

		// Convert `locales` to an array.
		if (typeof locales === 'string') {
			locales = [locales];
		}

		// Choose the most appropriate locale
		// (one of the previously added ones)
		// based on the list of preferred `locales` supplied by the user.
		this.locale = (0, _locale2.default)(locales.concat((0, _LocaleDataStore.getDefaultLocale)()), _LocaleDataStore.isLocaleDataAvailable);
	}

	// Formats the relative date/time.
	//
	// @return {string} Returns the formatted relative date/time.
	//
	// @param {(Object|string)} [style] - Relative date/time formatting style.
	//
	// @param {string[]} [style.units] - A list of allowed time units
	//                                  (e.g. ['second', 'minute', 'hour', …])
	//
	// @param {Function} [style.custom] - `function ({ elapsed, time, date, now })`.
	//                                    If this function returns a value, then
	//                                    the `.format()` call will return that value.
	//                                    Otherwise it has no effect.
	//
	// @param {string} [style.flavour] - e.g. "long", "short", "tiny", etc.
	//
	// @param {Object[]} [style.gradation] - Time scale gradation steps.
	//
	// @param {string} style.gradation[].unit - Time interval measurement unit.
	//                                          (e.g. ['second', 'minute', 'hour', …])
	//
	// @param {Number} style.gradation[].factor - Time interval measurement unit factor.
	//                                            (e.g. `60` for 'minute')
	//
	// @param {Number} [style.gradation[].granularity] - A step for the unit's "amount" value.
	//                                                   (e.g. `5` for '0 minutes', '5 minutes', etc)
	//
	// @param {Number} [style.gradation[].threshold] - Time interval measurement unit threshold.
	//                                                 (e.g. `45` seconds for 'minute').
	//                                                 There can also be specific `threshold_[unit]`
	//                                                 thresholds for fine-tuning.
	//


	_createClass(JavascriptTimeAgo, [{
		key: 'format',
		value: function format(input) {
			var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _style.defaultStyle;

			if (typeof style === 'string') {
				switch (style) {
					case 'twitter':
						style = _style.twitterStyle;
						break;
					case 'time':
						style = _style.timeStyle;
						break;
					default:
						style = _style.defaultStyle;
				}
			}

			var _getDateAndTimeBeingF = getDateAndTimeBeingFormatted(input),
			    date = _getDateAndTimeBeingF.date,
			    time = _getDateAndTimeBeingF.time;

			// Get locale messages for this formatting flavour


			var _getLocaleData2 = this.getLocaleData(style.flavour),
			    flavour = _getLocaleData2.flavour,
			    localeData = _getLocaleData2.localeData;

			// Can pass a custom `now`, e.g. for testing purposes.
			// Technically it doesn't belong to `style`
			// but since this is an undocumented internal feature,
			// taking it from the `style` argument will do (for now).


			var now = style.now || Date.now();

			// how much time elapsed (in seconds)
			var elapsed = (now - time) / 1000; // in seconds

			// `custom` – A function of `{ elapsed, time, date, now, locale }`.
			// If this function returns a value, then the `.format()` call will return that value.
			// Otherwise the relative date/time is formatted as usual.
			// This feature is currently not used anywhere and is here
			// just for providing the ultimate customization point
			// in case anyone would ever need that. Prefer using
			// `gradation[step].format(value, locale)` instead.
			//
			// I guess `custom` is deprecated and will be removed
			// in some future major version release.
			//
			if (style.custom) {
				var custom = style.custom({
					now: now,
					date: date,
					time: time,
					elapsed: elapsed,
					locale: this.locale
				});

				if (custom !== undefined) {
					return custom;
				}
			}

			// Available time interval measurement units.
			var units = getTimeIntervalMeasurementUnits(localeData, style.units);

			// If no available time unit is suitable, just output an empty string.
			if (units.length === 0) {
				console.error('Units "' + units.join(', ') + '" were not found in locale data for "' + this.locale + '".');
				return '';
			}

			// Choose the appropriate time measurement unit
			// and get the corresponding rounded time amount.
			var step = (0, _grade2.default)(Math.abs(elapsed), now, units, style.gradation);

			// If no time unit is suitable, just output an empty string.
			// E.g. when "now" unit is not available
			// and "second" has a threshold of `0.5`
			// (e.g. the "canonical" grading scale).
			if (!step) {
				return '';
			}

			if (step.format) {
				return step.format(date || time, this.locale);
			}

			var unit = step.unit,
			    factor = step.factor,
			    granularity = step.granularity;


			var amount = Math.abs(elapsed) / factor;

			// Apply granularity to the time amount
			// (and fallback to the previous step
			//  if the first level of granularity
			//  isn't met by this amount)
			if (granularity) {
				// Recalculate the elapsed time amount based on granularity
				amount = Math.round(amount / granularity) * granularity;
			}

			// Format the time elapsed.
			// Using `Intl.RelativeTimeFormat` proposal polyfill.
			//
			// TODO: Should cache `Intl.RelativeTimeFormat` instances
			// for given `this.locale` and `flavour`.
			//
			// ```js
			// import Cache from './cache'
			// const cache = new Cache()
			// const formatter = this.cache.get(this.locale, flavour) ||
			//   this.cache.put(this.locale, flavour, new Intl.RelativeTimeFormat(...))
			// return formatter.format(...)
			// ```
			//
			return new _RelativeTimeFormat2.default(this.locale, { style: flavour }).format(-1 * Math.sign(elapsed) * Math.round(amount), unit);
		}

		/**
   * Gets locale messages for this formatting flavour
   *
   * @param {(string|string[])} flavour - Relative date/time formatting flavour.
   *                                      If it's an array then all flavours are tried in order.
   *
   * @returns {Object} Returns an object of shape { flavour, localeData }
   */

	}, {
		key: 'getLocaleData',
		value: function getLocaleData() {
			var flavour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

			// Get relative time formatting rules for this locale
			var localeData = (0, _LocaleDataStore.getLocaleData)(this.locale);

			// Convert `flavour` to an array.
			if (typeof flavour === 'string') {
				flavour = [flavour];
			}

			// "long" flavour is the default one.
			// (it's always present)
			flavour = flavour.concat('long');

			// Find a suitable flavour.
			for (var _iterator = flavour, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var _ = _ref;

				if (localeData[_]) {
					return {
						flavour: _,
						localeData: localeData[_]
					};
				}
			}

			// Can't happen - "long" flavour is always present.
			// throw new Error(`None of the flavours - ${flavour.join(', ')} - was found for locale "${this.locale}".`)
		}
	}]);

	return JavascriptTimeAgo;
}();

/**
 * Gets default locale.
 * @return  {string} locale
 */


exports.default = JavascriptTimeAgo;
JavascriptTimeAgo.getDefaultLocale = _LocaleDataStore.getDefaultLocale;

/**
 * Sets default locale.
 * @param  {string} locale
 */
JavascriptTimeAgo.setDefaultLocale = _LocaleDataStore.setDefaultLocale;

/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */
JavascriptTimeAgo.addLocale = _LocaleDataStore.addLocaleData;

/**
 * (legacy alias)
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 * @deprecated
 */
JavascriptTimeAgo.locale = JavascriptTimeAgo.addLocale;

// Normalizes `.format()` `time` argument.
function getDateAndTimeBeingFormatted(input) {
	if (input.constructor === Date) {
		return {
			date: input,
			time: input.getTime()
		};
	}

	if (typeof input === 'number') {
		return {
			time: input
			// `date` is not required for formatting
			// relative times unless "twitter" preset is used.
			// date : new Date(input)
		};
	}

	// For some weird reason istanbul doesn't see this `throw` covered.
	/* istanbul ignore next */
	throw new Error('Unsupported relative time formatter input: ' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)) + ', ' + input);
}

// Get available time interval measurement units.
function getTimeIntervalMeasurementUnits(localeData, restrictedSetOfUnits) {
	// All available time interval measurement units.
	var units = Object.keys(localeData);

	// If only a specific set of available
	// time measurement units can be used.
	if (restrictedSetOfUnits) {
		// Reduce available time interval measurement units
		// based on user's preferences.
		return restrictedSetOfUnits.filter(function (_) {
			return units.indexOf(_) >= 0;
		});
	}

	return units;
}
//# sourceMappingURL=JavascriptTimeAgo.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/LocaleDataStore.js":
/*!*********************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/LocaleDataStore.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDefaultLocale = getDefaultLocale;
exports.setDefaultLocale = setDefaultLocale;
exports.isLocaleDataAvailable = isLocaleDataAvailable;
exports.getLocaleData = getLocaleData;
exports.addLocaleData = addLocaleData;
// Fallback locale.
// (when not a single one of the supplied "preferred" locales is available)
var defaultLocale = 'en';

// For all locales added
// their relative time formatter messages will be stored here.
var localesData = {};

function getDefaultLocale() {
	return defaultLocale;
}

function setDefaultLocale(locale) {
	defaultLocale = locale;
}

function isLocaleDataAvailable(locale) {
	return localesData.hasOwnProperty(locale);
}

function getLocaleData(locale) {
	return localesData[locale];
}

function addLocaleData(localeData) {
	if (!localeData) {
		throw new Error('[javascript-time-ago] No locale data passed.');
	}
	// This locale data is stored in a global variable
	// and later used when calling `.format(time)`.
	localesData[localeData.locale] = localeData;
}
//# sourceMappingURL=LocaleDataStore.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/RelativeTimeFormat.js":
/*!************************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/RelativeTimeFormat.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LocaleDataStore = __webpack_require__(/*! ./LocaleDataStore */ "./node_modules/javascript-time-ago/modules/LocaleDataStore.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Polyfill for `Intl.RelativeTimeFormat` proposal.
 * https://github.com/tc39/proposal-intl-relative-time
 * https://github.com/tc39/proposal-intl-relative-time/issues/55
 */
var RelativeTimeFormat = function () {
  /**
   * @param {(string|string[])} [locales] - Preferred locales (or locale).
   * @param {Object} [options] - Formatting options.
   * @param {string} [options.style="long"] - One of: "long", "short", "narrow".
   * @param {string} [options.type="numeric"] - One of: "numeric", "text".
   * @param {string} [options.localeMatcher="best fit"] - One of: "lookup", "best fit".
   */
  function RelativeTimeFormat(locales) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, RelativeTimeFormat);

    var style = options.style;

    this.style = style || 'long';

    // Choose the most appropriate locale.
    // This could implement some kind of a "best-fit" algorythm.
    if (locales) {
      this.locale = RelativeTimeFormat.supportedLocalesOf(locales)[0];
    }
    this.locale = this.locale ? resolveLocale(this.locale) : (0, _LocaleDataStore.getDefaultLocale)();
  }

  /**
   * Formats time `value` in `units` (either in past or in future).
   * @param {number} value - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {string}
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Returns "2 days ago"
   * rtf.format(-2, "day")
   * // Returns "in 5 minutes"
   * rtf.format(5, "minute")
   */


  _createClass(RelativeTimeFormat, [{
    key: 'format',
    value: function format(value, unit) {
      return this.getRule(value, unit).replace('{0}', Math.abs(value));
    }

    /**
     * Formats time `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {Object[]} The parts (`{ type, value }`).
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns [
     * //   { type: "literal", value: "in "},
     * //   { type: "day", value: "100"},
     * //   { type: "literal", value: " days"}
     * // ]
     * rtf.formatToParts(100, "day")
     */

  }, {
    key: 'formatToParts',
    value: function formatToParts(value, unit) {
      var rule = this.getRule(value, unit);
      var valueIndex = rule.indexOf("{0}");
      var parts = [];
      if (valueIndex > 0) {
        parts.push({
          type: "literal",
          value: rule.slice(0, valueIndex)
        });
      }
      parts.push({
        type: unit,
        value: String(Math.abs(value))
      });
      if (valueIndex + "{0}".length < rule.length - 1) {
        parts.push({
          type: "literal",
          value: rule.slice(valueIndex + "{0}".length)
        });
      }
      return parts;
    }

    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {string}
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns "{0} days ago"
     * getRule(-2, "day")
     */

  }, {
    key: 'getRule',
    value: function getRule(value, unit) {
      // "now" is used in `javascript-time-ago`.
      if (["now", "second", "minute", "hour", "day", "week", "month", "quarter", "year"].indexOf(unit) < 0) {
        throw new RangeError('Unknown time unit: ' + unit + '.');
      }
      // Get locale-specific time interval formatting rules
      // of a given `style` for the given value of measurement `unit`.
      //
      // E.g.:
      //
      // ```json
      // {
      //  "past": {
      //    "one": "a second ago",
      //    "other": "{0} seconds ago"
      //  },
      //  "future": {
      //    "one": "in a second",
      //    "other": "in {0} seconds"
      //  }
      // }
      // ```
      //
      var unitRules = (0, _LocaleDataStore.getLocaleData)(this.locale)[this.style][unit];
      if (typeof unitRules === "string") {
        return unitRules;
      }
      // Choose either "past" or "future" based on time `value` sign.
      // If "past" is same as "future" then they're stored as "other".
      // If there's only "other" then it's being collapsed.
      var quantifierRules = unitRules[value <= 0 ? "past" : "future"] || unitRules;
      if (typeof quantifierRules === "string") {
        return quantifierRules;
      }
      // Quantify `value`.
      var quantify = (0, _LocaleDataStore.getLocaleData)(this.locale).quantify;
      var quantifier = quantify && quantify(Math.abs(value));
      // There seems to be no such locale in CLDR
      // for which `quantify` is missing
      // and still `past` and `future` messages
      // contain something other than "other".
      /* istanbul ignore next */
      quantifier = quantifier || 'other';
      // "other" rule is supposed to always be present.
      // If only "other" rule is present then "rules" is not an object and is a string.
      return quantifierRules[quantifier] || quantifierRules.other;
    }

    /**
     * Returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions
     * @return {Object}
     */

  }, {
    key: 'resolvedOptions',
    value: function resolvedOptions() {
      return {
        locale: this.locale
      };
    }
  }]);

  return RelativeTimeFormat;
}();

/**
 * Returns an array containing those of the provided locales
 * that are supported in collation without having to fall back
 * to the runtime's default locale.
 * @param {(string|string[])} locale - A string with a BCP 47 language tag, or an array of such strings. For the general form of the locales argument, see the Intl page.
 * @param {Object} [options] - An object that may have the following property:
 * @param {Function} [options.localeMatcher] - The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.
 * @return {string[]} An array of strings representing a subset of the given locale tags that are supported in collation without having to fall back to the runtime's default locale.
 * @example
 * var locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
 * var options = { localeMatcher: 'lookup' };
 * console.log(Intl.RelativeTimeFormat.supportedLocalesOf(locales, options).join(', '));
 * // → "id-u-co-pinyin, de-ID"
 */


exports.default = RelativeTimeFormat;
RelativeTimeFormat.supportedLocalesOf = function (locales, options) {
  // Convert `locales` to an array.
  if (typeof locales === 'string') {
    locales = [locales];
  }
  // This is not an intelligent algorythm,
  // but it will do for the polyfill purposes.
  // This could implement some kind of a "best-fit" algorythm.
  return locales.filter(resolveLocale);
};

/**
 * Resolves a locale to a supported one.
 * @param  {string} locale
 * @return {string}
 */
function resolveLocale(locale) {
  if ((0, _LocaleDataStore.getLocaleData)(locale)) {
    return locale;
  }
  // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
  var parts = locale.split('-');
  while (locale.length > 1) {
    parts.pop();
    locale = parts.join('-');
    if ((0, _LocaleDataStore.getLocaleData)(locale)) {
      return locale;
    }
  }
}

RelativeTimeFormat.addLocale = _LocaleDataStore.addLocaleData;

/**
 * Extracts language from an IETF BCP 47 language tag.
 * @param {string} languageTag - IETF BCP 47 language tag.
 * @return {string}
 * @example
 * // Returns "he"
 * getLanguageFromLanguageTag("he-IL-u-ca-hebrew-tz-jeruslm")
 * // Returns "ar"
 * getLanguageFromLanguageTag("ar-u-nu-latn")
 */
// export function getLanguageFromLanguageTag(languageTag) {
//   const hyphenIndex = languageTag.indexOf('-')
//   if (hyphenIndex > 0) {
//     return languageTag.slice(0, hyphenIndex)
//   }
//   return languageTag
// }
//# sourceMappingURL=RelativeTimeFormat.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/gradation/canonical.js":
/*!*************************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/gradation/canonical.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/javascript-time-ago/modules/gradation/helpers.js");

// just now
// 1 second ago
// 2 seconds ago
// …
// 59 seconds ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 7 days ago
// 1 week ago
// 2 weeks ago
// …
// 3 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
exports.default = [{
	factor: 1,
	unit: 'now'
}, {
	threshold: 0.5,
	factor: 1,
	unit: 'second'
}, {
	threshold: 59.5,
	factor: 60,
	unit: 'minute'
}, {
	threshold: 59.5 * 60,
	factor: 60 * 60,
	unit: 'hour'
}, {
	threshold: 23.5 * 60 * 60,
	factor: _helpers.day,
	unit: 'day'
}, {
	threshold: 6.5 * _helpers.day,
	factor: 7 * _helpers.day,
	unit: 'week'
}, {
	threshold: 3.5 * 7 * _helpers.day,
	factor: _helpers.month,
	unit: 'month'
}, {
	threshold: 11.5 * _helpers.month,
	factor: _helpers.year,
	unit: 'year'
}];
//# sourceMappingURL=canonical.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/gradation/convenient.js":
/*!**************************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/gradation/convenient.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/javascript-time-ago/modules/gradation/helpers.js");

// just now
// 1 minute ago
// 2 minutes ago
// 5 minutes ago
// 10 minutes ago
// 15 minutes ago
// 20 minutes ago
// an hour ago
// 2 hours ago
// …
// 20 hours ago
// a day ago
// 2 days ago
// 5 days ago
// a week ago
// 2 weeks ago
// 3 weeks ago
// a month ago
// 2 months ago
// 4 months ago
// a year ago
// 2 years ago
// …
exports.default = [{
	factor: 1,
	unit: 'now'
}, {
	threshold: 1,
	threshold_for_now: 45,
	factor: 1,
	unit: 'second'
}, {
	threshold: 45,
	factor: 60,
	unit: 'minute'
}, {
	threshold: 2.5 * 60,
	factor: 60,
	granularity: 5,
	unit: 'minute'
}, {
	threshold: 22.5 * 60,
	factor: 30 * 60,
	unit: 'half-hour'
}, {
	threshold: 42.5 * 60,
	threshold_for_minute: 52.5 * 60,
	factor: 60 * 60,
	unit: 'hour'
}, {
	threshold: 20.5 / 24 * _helpers.day,
	factor: _helpers.day,
	unit: 'day'
}, {
	threshold: 5.5 * _helpers.day,
	factor: 7 * _helpers.day,
	unit: 'week'
}, {
	threshold: 3.5 * 7 * _helpers.day,
	factor: _helpers.month,
	unit: 'month'
}, {
	threshold: 10.5 * _helpers.month,
	factor: _helpers.year,
	unit: 'year'
}];
//# sourceMappingURL=convenient.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/gradation/helpers.js":
/*!***********************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/gradation/helpers.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStep = getStep;
exports.getDate = getDate;
var minute = exports.minute = 60; // in seconds

var hour = exports.hour = 60 * minute; // in seconds

var day = exports.day = 24 * hour; // in seconds

// https://www.quora.com/What-is-the-average-number-of-days-in-a-month
var month = exports.month = 30.44 * day; // in seconds

// "400 years have 146097 days (taking into account leap year rules)"
var year = exports.year = 146097 / 400 * day; // in seconds

/**
 * Returns a step of gradation corresponding to the unit.
 * @param  {Object[]} gradation
 * @param  {string} unit
 * @return {?Object}
 */
function getStep(gradation, unit) {
  for (var _iterator = gradation, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var step = _ref;

    if (step.unit === unit) {
      return step;
    }
  }
}

/**
 * Converts value to a `Date`
 * @param {(number|Date)} value
 * @return {Date}
 */
function getDate(value) {
  return value instanceof Date ? value : new Date(value);
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/gradation/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/gradation/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canonical = __webpack_require__(/*! ./canonical */ "./node_modules/javascript-time-ago/modules/gradation/canonical.js");

Object.defineProperty(exports, 'canonical', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_canonical).default;
  }
});

var _convenient = __webpack_require__(/*! ./convenient */ "./node_modules/javascript-time-ago/modules/gradation/convenient.js");

Object.defineProperty(exports, 'convenient', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convenient).default;
  }
});

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/javascript-time-ago/modules/gradation/helpers.js");

Object.defineProperty(exports, 'minute', {
  enumerable: true,
  get: function get() {
    return _helpers.minute;
  }
});
Object.defineProperty(exports, 'hour', {
  enumerable: true,
  get: function get() {
    return _helpers.hour;
  }
});
Object.defineProperty(exports, 'day', {
  enumerable: true,
  get: function get() {
    return _helpers.day;
  }
});
Object.defineProperty(exports, 'month', {
  enumerable: true,
  get: function get() {
    return _helpers.month;
  }
});
Object.defineProperty(exports, 'year', {
  enumerable: true,
  get: function get() {
    return _helpers.year;
  }
});
Object.defineProperty(exports, 'getStep', {
  enumerable: true,
  get: function get() {
    return _helpers.getStep;
  }
});
Object.defineProperty(exports, 'getDate', {
  enumerable: true,
  get: function get() {
    return _helpers.getDate;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/grade.js":
/*!***********************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/grade.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = grade;

var _gradation = __webpack_require__(/*! ./gradation */ "./node_modules/javascript-time-ago/modules/gradation/index.js");

/**
 * Takes seconds `elapsed` and measures them against
 * `gradation` to return the suitable `gradation` step.
 *
 * @param {number} elapsed - Time interval (in seconds)
 *
 * @param {string[]} units - A list of allowed time units
 *                           (e.g. ['second', 'minute', 'hour', …])
 *
 * @param {Object} [gradation] - Time scale gradation steps.
 *
 *                               E.g.:
 *                               [
 *                                 { unit: 'second', factor: 1 },
 *                                 { unit: 'minute', factor: 60, threshold: 60 },
 *                                 { format(), threshold: 24 * 60 * 60 },
 *                                 …
 *                               ]
 *
 * @return {?Object} `gradation` step.
 */
function grade(elapsed, now, units) {
	var gradation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _gradation.convenient;

	// Leave only allowed time measurement units.
	// E.g. omit "quarter" unit.
	gradation = getAllowedSteps(gradation, units);

	// If no steps of gradation fit the conditions
	// then return nothing.
	if (gradation.length === 0) {
		return;
	}

	// Find the most appropriate gradation step
	var i = findGradationStep(elapsed, now, gradation);
	var step = gradation[i];

	// If time elapsed is too small and even
	// the first gradation step doesn't suit it
	// then return nothing.
	if (i === -1) {
		return;
	}

	// Apply granularity to the time amount
	// (and fall back to the previous step
	//  if the first level of granularity
	//  isn't met by this amount)
	if (step.granularity) {
		// Recalculate the elapsed time amount based on granularity
		var amount = Math.round(elapsed / step.factor / step.granularity) * step.granularity;
		// If the granularity for this step
		// is too high, then fallback
		// to the previous step of gradation.
		// (if there is any previous step of gradation)
		if (amount === 0 && i > 0) {
			return gradation[i - 1];
		}
	}

	return step;
}

/**
 * Gets threshold for moving from `fromStep` to `next_step`.
 * @param  {Object} fromStep - From step.
 * @param  {Object} next_step - To step.
 * @param  {number} now - The current timestamp.
 * @return {number}
 * @throws Will throw if no threshold is found.
 */
function getThreshold(fromStep, toStep, now) {
	var threshold = void 0;

	// Allows custom thresholds when moving
	// from a specific step to a specific step.
	if (fromStep && (fromStep.id || fromStep.unit)) {
		threshold = toStep['threshold_for_' + (fromStep.id || fromStep.unit)];
	}

	// If no custom threshold is set for this transition
	// then use the usual threshold for the next step.
	if (threshold === undefined) {
		threshold = toStep.threshold;
	}

	// Convert threshold to a number.
	if (typeof threshold === 'function') {
		threshold = threshold(now);
	}

	// Throw if no threshold is found.
	if (fromStep && typeof threshold !== 'number') {
		// Babel transforms `typeof` into some "branches"
		// so istanbul will show this as "branch not covered".
		/* istanbul ignore next */
		var type = typeof threshold === 'undefined' ? 'undefined' : _typeof(threshold);
		throw new Error('Each step of a gradation must have a threshold defined except for the first one. Got "' + threshold + '", ' + type + '. Step: ' + JSON.stringify(toStep));
	}

	return threshold;
}

/**
 * @param  {number} elapsed - Time elapsed (in seconds).
 * @param  {number} now - Current timestamp.
 * @param  {Object} gradation - Gradation.
 * @param  {number} i - Gradation step currently being tested.
 * @return {number} Gradation step index.
 */
function findGradationStep(elapsed, now, gradation) {
	var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	// If the threshold for moving from previous step
	// to this step is too high then return the previous step.
	if (elapsed < getThreshold(gradation[i - 1], gradation[i], now)) {
		return i - 1;
	}
	// If it's the last step of gradation then return it.
	if (i === gradation.length - 1) {
		return i;
	}
	// Move to the next step.
	return findGradationStep(elapsed, now, gradation, i + 1);
}

/**
 * Leaves only allowed gradation steps.
 * @param  {Object[]} gradation
 * @param  {string[]} units - Allowed time units.
 * @return {Object[]}
 */
function getAllowedSteps(gradation, units) {
	return gradation.filter(function (_ref) {
		var unit = _ref.unit;

		// If this step has a `unit` defined
		// then this `unit` must be in the list of `units` allowed.
		if (unit) {
			return units.indexOf(unit) >= 0;
		}
		// A gradation step is not required to specify a `unit`.
		// E.g. for Twitter gradation it specifies `format()` instead.
		return true;
	});
}
//# sourceMappingURL=grade.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/locale.js":
/*!************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/locale.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = chooseLocale;
exports.intlDateTimeFormatSupportedLocale = intlDateTimeFormatSupportedLocale;
exports.intlDateTimeFormatSupported = intlDateTimeFormatSupported;
// Chooses the most appropriate locale
// (one of the registered ones)
// based on the list of preferred `locales` supplied by the user.
//
// @param {string[]} locales - the list of preferable locales (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)).
// @param {Function} isLocaleDataAvailable - tests if a locale is available.
//
// @returns {string} The most suitable locale
//
// @example
// // Returns 'en'
// chooseLocale(['en-US'], undefined, (locale) => locale === 'ru' || locale === 'en')
//
function chooseLocale(locales, isLocaleDataAvailable) {
	// This is not an intelligent algorythm,
	// but it will do for this library's case.
	// `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
	for (var _iterator = locales, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var locale = _ref;

		if (isLocaleDataAvailable(locale)) {
			return locale;
		}
		var parts = locale.split('-');
		while (parts.length > 1) {
			parts.pop();
			locale = parts.join('-');
			if (isLocaleDataAvailable(locale)) {
				return locale;
			}
		}
	}

	throw new Error('No locale data has been registered for any of the locales: ' + locales.join(', '));
}

/**
 * Whether can use `Intl.DateTimeFormat` for these `locales`.
 * Returns the first suitable one.
 * @param  {(string|string[])} locales
 * @return {?string} The first locale that can be used.
 */
function intlDateTimeFormatSupportedLocale(locales) {
	/* istanbul ignore else */
	if (intlDateTimeFormatSupported()) {
		return Intl.DateTimeFormat.supportedLocalesOf(locales)[0];
	}
}
/**
 * Whether can use `Intl.DateTimeFormat`.
 * @return {boolean}
 */
function intlDateTimeFormatSupported() {
	// Babel transforms `typeof` into some "branches"
	// so istanbul will show this as "branch not covered".
	/* istanbul ignore next */
	var isIntlAvailable = (typeof Intl === 'undefined' ? 'undefined' : _typeof(Intl)) === 'object';
	return isIntlAvailable && typeof Intl.DateTimeFormat === 'function';
}
//# sourceMappingURL=locale.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/style/default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/style/default.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _gradation = __webpack_require__(/*! ../gradation */ "./node_modules/javascript-time-ago/modules/gradation/index.js");

exports.default = {
	gradation: _gradation.convenient,
	flavour: ['long_convenient', 'long'],
	units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
};
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/style/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/style/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _time = __webpack_require__(/*! ./time */ "./node_modules/javascript-time-ago/modules/style/time.js");

Object.defineProperty(exports, 'timeStyle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_time).default;
  }
});

var _twitter = __webpack_require__(/*! ./twitter */ "./node_modules/javascript-time-ago/modules/style/twitter.js");

Object.defineProperty(exports, 'twitterStyle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_twitter).default;
  }
});

var _default = __webpack_require__(/*! ./default */ "./node_modules/javascript-time-ago/modules/style/default.js");

Object.defineProperty(exports, 'defaultStyle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_default).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/style/time.js":
/*!****************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/style/time.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _gradation = __webpack_require__(/*! ../gradation */ "./node_modules/javascript-time-ago/modules/gradation/index.js");

// Similar to the default style but with "ago" omitted.
//
// just now
// 5 minutes
// 10 minutes
// 15 minutes
// 20 minutes
// an hour
// 2 hours
// …
// 20 hours
// 1 day
// 2 days
// a week
// 2 weeks
// 3 weeks
// a month
// 2 months
// 3 months
// 4 months
// a year
// 2 years
//
exports.default = {
	gradation: _gradation.convenient,
	flavour: 'long_time',
	units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
};
//# sourceMappingURL=time.js.map

/***/ }),

/***/ "./node_modules/javascript-time-ago/modules/style/twitter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/javascript-time-ago/modules/style/twitter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _gradation = __webpack_require__(/*! ../gradation */ "./node_modules/javascript-time-ago/modules/gradation/index.js");

var _locale = __webpack_require__(/*! ../locale */ "./node_modules/javascript-time-ago/modules/locale.js");

// A cache for `Intl.DateTimeFormat` twitter formatters
// for various locales (is a global variable).
var formatters = {};

// Twitter style relative time formatting.
// ("1m", "2h", "Mar 3", "Apr 4, 2012").
// Seconds, minutes and hours are shown relatively,
// and other intervals can be shown using full date format.
exports.default = {
	// Twitter gradation is derived from "canonical" gradation
	// adjusting its "minute" `threshold` to be 45.
	gradation: [
	// Minutes
	_extends({}, (0, _gradation.getStep)(_gradation.canonical, 'minute'), {
		threshold: 45
	}),
	// Hours
	(0, _gradation.getStep)(_gradation.canonical, 'hour'),
	// If `date` and `now` happened the same year,
	// then only output month and day.
	{
		threshold: _gradation.day - 0.5 * _gradation.hour,
		format: function format(value, locale) {
			// Whether can use `Intl.DateTimeFormat`.
			// If `Intl` is not available,
			// or the locale is not supported,
			// then don't override the default labels.
			/* istanbul ignore if */
			if (!(0, _locale.intlDateTimeFormatSupported)()) {
				return;
			}
			/* istanbul ignore else */
			if (!formatters[locale]) {
				formatters[locale] = {};
			}
			/* istanbul ignore else */
			if (!formatters[locale].this_year) {
				// "Apr 11" (MMMd)
				formatters[locale].this_year = new Intl.DateTimeFormat(locale, {
					month: 'short',
					day: 'numeric'
				});
			}
			// Output month and day.
			return formatters[locale].this_year.format((0, _gradation.getDate)(value));
		}
	},
	// If `date` and `now` happened in defferent years,
	// then output day, month and year.
	{
		threshold: function threshold(now) {
			// Jan 1st of the next year.
			var nextYear = new Date(new Date(now).getFullYear() + 1, 0);
			return (nextYear.getTime() - now) / 1000;
		},
		format: function format(value, locale) {
			// Whether can use `Intl.DateTimeFormat`.
			// If `Intl` is not available,
			// or the locale is not supported,
			// then don't override the default labels.
			/* istanbul ignore if */
			if (!(0, _locale.intlDateTimeFormatSupported)()) {
				return;
			}
			/* istanbul ignore if */
			if (!formatters[locale]) {
				formatters[locale] = {};
			}
			/* istanbul ignore else */
			if (!formatters[locale].other) {
				// "Apr 11, 2017" (yMMMd)
				formatters[locale].other = new Intl.DateTimeFormat(locale, {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				});
			}
			// Output day, month and year.
			return formatters[locale].other.format((0, _gradation.getDate)(value));
		}
	}],

	flavour: ['tiny', 'short_time', 'narrow', 'short']
};
//# sourceMappingURL=twitter.js.map

/***/ })

}]);