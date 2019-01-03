(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
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

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@material-ui/styles/StylesProvider.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/styles/StylesProvider.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StylesContext = exports.sheetsManager = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _createGenerateClassName = _interopRequireDefault(__webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/styles/createGenerateClassName.js"));

var _jss = __webpack_require__(/*! jss */ "./node_modules/@material-ui/styles/node_modules/jss/dist/jss.esm.js");

var _jssPreset = _interopRequireDefault(__webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/styles/jssPreset.js"));

// Default JSS instance.
var jss = (0, _jss.create)((0, _jssPreset.default)()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = (0, _createGenerateClassName.default)(); // Exported for test purposes

var sheetsManager = new Map();
exports.sheetsManager = sheetsManager;
var defaultOptions = {
  disableGeneration: false,
  generateClassName: generateClassName,
  jss: jss,
  sheetsCache: typeof window === 'undefined' ? new Map() : null,
  sheetsManager: sheetsManager,
  sheetsRegistry: null
};

var StylesContext = _react.default.createContext(defaultOptions);

exports.StylesContext = StylesContext;

function StylesProvider(props) {
  var children = props.children,
      localOptions = (0, _objectWithoutProperties2.default)(props, ["children"]);
   true ? (0, _warning.default)(typeof window !== 'undefined' || localOptions.sheetsManager, ['Material-UI: you need to provide a sheetsManager to the StyleProvider ' + 'when rendering on the server.'].join('\n')) : undefined;
  return _react.default.createElement(StylesContext.Consumer, null, function (outerOptions) {
    return _react.default.createElement(StylesContext.Provider, {
      value: (0, _extends2.default)({}, outerOptions, localOptions)
    }, children);
  });
}

 true ? StylesProvider.propTypes = {
  /**
   * You can wrap a node.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side.
   * You can significantly speed up the traversal with this property.
   */
  disableGeneration: _propTypes.default.bool,

  /**
   * JSS's class name generator.
   */
  generateClassName: _propTypes.default.func,

  /**
   * JSS's instance.
   */
  jss: _propTypes.default.object,

  /**
   * @ignore
   *
   * In beta.
   */
  sheetsCache: _propTypes.default.object,

  /**
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: _propTypes.default.object,
  sheetsRegistry: _propTypes.default.object
} : undefined;

if (true) {
   true ? StylesProvider.propTypes = (0, _utils.exactProp)(StylesProvider.propTypes) : undefined;
}

StylesProvider.defaultProps = {
  disableGeneration: false
};
var _default = StylesProvider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/ThemeContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/styles/ThemeContext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ThemeContext = _react.default.createContext(null);

var _default = ThemeContext;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/ThemeProvider.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/styles/ThemeProvider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _ThemeContext = _interopRequireDefault(__webpack_require__(/*! ./ThemeContext */ "./node_modules/@material-ui/styles/ThemeContext.js"));

// To support composition of theme.
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
     true ? (0, _warning.default)(outerTheme, ['Material-UI: you are providing a theme function property ' + 'to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n')) : undefined;
    var mergedTheme = localTheme(outerTheme);
     true ? (0, _warning.default)(mergedTheme, 'Material-UI: return an object from your theme function, i.e. theme={() => ({})}!') : undefined;
    return mergedTheme;
  }

  return (0, _extends2.default)({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  return _react.default.createElement(_ThemeContext.default.Consumer, null, function (outerTheme) {
    var theme = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    return _react.default.createElement(_ThemeContext.default.Provider, {
      value: theme
    }, children);
  });
}

 true ? ThemeProvider.propTypes = {
  /**
   * You can wrap a node.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * A theme object.
   */
  theme: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired
} : undefined;

if (true) {
   true ? ThemeProvider.propTypes = (0, _utils.exactProp)(ThemeProvider.propTypes) : undefined;
}

var _default = ThemeProvider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/createGenerateClassName.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/styles/createGenerateClassName.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGenerateClassName;

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _hash = _interopRequireDefault(__webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js"));

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;

function safePrefix(classNamePrefix) {
  var prefix = String(classNamePrefix);
   true ? (0, _warning.default)(prefix.length < 256, "Material-UI: the class name prefix is too long: ".concat(prefix, ".")) : undefined; // Sanitize the string as will be used to prefix the generated class name.

  return prefix.replace(escapeRegex, '-');
}

var themeHashCache = {}; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$dangerouslyU = options.dangerouslyUseGlobalCSS,
      dangerouslyUseGlobalCSS = _options$dangerouslyU === void 0 ? false : _options$dangerouslyU,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var ruleCounter = 0;
  return function (rule, styleSheet) {
    if (dangerouslyUseGlobalCSS && styleSheet && styleSheet.options.name) {
      return "".concat(safePrefix(styleSheet.options.name), "-").concat(rule.key);
    }

    var suffix; // It's a static rule.

    if (!styleSheet.options.link) {
      var themeHash = themeHashCache[styleSheet.options.theme];

      if (!themeHash) {
        themeHash = (0, _hash.default)(JSON.stringify(styleSheet.options.theme));
        themeHashCache[styleSheet.theme] = themeHash;
      }

      var raw = styleSheet.rules.raw[rule.key];
      suffix = (0, _hash.default)("".concat(themeHash).concat(rule.key).concat(JSON.stringify(raw)));
    }

    if (!suffix) {
      ruleCounter += 1;
       true ? (0, _warning.default)(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join('')) : undefined;
      suffix = ruleCounter;
    }

    if (false) {} // Help with debuggability.


    if (styleSheet && styleSheet.options.classNamePrefix) {
      return "".concat(safePrefix(styleSheet.options.classNamePrefix), "-").concat(rule.key, "-").concat(seed).concat(suffix);
    }

    return "".concat(rule.key, "-").concat(seed).concat(suffix);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/createStyles.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/styles/createStyles.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStyles;

/**
 * This function doesn't really "do anything" at runtime, it's just the identity
 * function. Its only purpose is to defeat TypeScript's type widening when providing
 * style rules to `withStyles` which are a function of the `Theme`.
 *
 * @param styles a set of style mappings
 * @returns the same styles that were passed in
 */
function createStyles(styles) {
  return styles;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/getStylesCreator.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/styles/getStylesCreator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/@material-ui/styles/node_modules/deepmerge/dist/umd.js"));

// < 1kb payload overhead when lodash/merge is > 3kb.
// Support for the jss-expand plugin.
function arrayMerge(destination, source) {
  return source;
}

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';
   true ? (0, _warning.default)((0, _typeof2.default)(stylesOrCreator) === 'object' || themingEnabled, ['Material-UI: the first argument provided to withStyles() is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n')) : undefined;
  return {
    create: function create(theme, name) {
      var styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];
      var stylesWithOverrides = (0, _extends2.default)({}, styles);
      Object.keys(overrides).forEach(function (key) {
         true ? (0, _warning.default)(stylesWithOverrides[key], ['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n')) : undefined;
        stylesWithOverrides[key] = (0, _deepmerge.default)(stylesWithOverrides[key], overrides[key], {
          arrayMerge: arrayMerge
        });
      });
      return stylesWithOverrides;
    },
    options: {},
    themingEnabled: themingEnabled
  };
}

var _default = getStylesCreator;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/getThemeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/styles/getThemeProps.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  var theme = params.theme,
      name = params.name,
      props = params.props;

  if (!theme.props || !name || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  var defaultProps = theme.props[name];
  var propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

var _default = getThemeProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/hoistInternalStatics.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/styles/hoistInternalStatics.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hoistStatics;

/**
 * Copies internal immediate statics from material-ui from source to target
 */
function hoistStatics(target, source) {
  var internals = ['muiName'];

  for (var i = 0; i < internals.length; i += 1) {
    var key = internals[i];
    var descriptor = Object.getOwnPropertyDescriptor(source, key);

    try {
      Object.defineProperty(target, key, descriptor);
    } catch (e) {// Avoid failures from read-only properties and undefined descriptors
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/index.es.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/styles/index.es.js ***!
  \******************************************************/
/*! exports provided: createGenerateClassName, createStyles, install, jssPreset, makeStyles, styled, StylesProvider, ThemeProvider, useTheme, withStyles, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/styles/createGenerateClassName.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "createGenerateClassName", function() { return _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/styles/createStyles.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_createStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _install__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./install */ "./node_modules/@material-ui/styles/install.js");
/* harmony import */ var _install__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_install__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "install", function() { return _install__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/styles/jssPreset.js");
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jssPreset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "jssPreset", function() { return _jssPreset__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/styles/makeStyles.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/styles/styled.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/styles/StylesProvider.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_StylesProvider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "StylesProvider", function() { return _StylesProvider__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@material-ui/styles/ThemeProvider.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/styles/useTheme.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_useTheme__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_8___default.a; });
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/styles/withStyles.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_withStyles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_9___default.a; });
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/styles/withTheme.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_withTheme__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_10___default.a; });
/** @license Material-UI v3.0.0-alpha.6
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */













/***/ }),

/***/ "./node_modules/@material-ui/styles/indexCounter.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/styles/indexCounter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during at the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
var indexCounter = -1e9;

function increment() {
  indexCounter += 1;
   true ? (0, _warning.default)(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n')) : undefined;
  return indexCounter;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/install.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/styles/install.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _ThemeProvider = _interopRequireDefault(__webpack_require__(/*! ./ThemeProvider */ "./node_modules/@material-ui/styles/ThemeProvider.js"));

var _withTheme = _interopRequireDefault(__webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/styles/withTheme.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/styles/withStyles.js"));

/* eslint-disable no-underscore-dangle */
function install() {
  if (!_utils.ponyfillGlobal.__MUI_STYLES__) {
    _utils.ponyfillGlobal.__MUI_STYLES__ = {};
  }

  _utils.ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider = _ThemeProvider.default;
  _utils.ponyfillGlobal.__MUI_STYLES__.withTheme = _withTheme.default;
  _utils.ponyfillGlobal.__MUI_STYLES__.withStyles = _withStyles.default;
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/jssPreset.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/styles/jssPreset.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jssPluginRuleValueFunction = _interopRequireDefault(__webpack_require__(/*! jss-plugin-rule-value-function */ "./node_modules/@material-ui/styles/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js"));

var _jssPluginGlobal = _interopRequireDefault(__webpack_require__(/*! jss-plugin-global/dist/jss-plugin-global.cjs */ "./node_modules/@material-ui/styles/node_modules/jss-plugin-global/dist/jss-plugin-global.cjs.js"));

var _jssPluginNested = _interopRequireDefault(__webpack_require__(/*! jss-plugin-nested/dist/jss-plugin-nested.cjs */ "./node_modules/@material-ui/styles/node_modules/jss-plugin-nested/dist/jss-plugin-nested.cjs.js"));

var _jssPluginCamelCase = _interopRequireDefault(__webpack_require__(/*! jss-plugin-camel-case */ "./node_modules/@material-ui/styles/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js"));

var _jssPluginDefaultUnit = _interopRequireDefault(__webpack_require__(/*! jss-plugin-default-unit */ "./node_modules/@material-ui/styles/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js"));

var _jssPluginVendorPrefixer = _interopRequireDefault(__webpack_require__(/*! jss-plugin-vendor-prefixer */ "./node_modules/@material-ui/styles/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js"));

var _jssPluginPropsSort = _interopRequireDefault(__webpack_require__(/*! jss-plugin-props-sort */ "./node_modules/@material-ui/styles/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js"));

// Subset of jss-preset-default with only the plugins the Material-UI components are using.
function jssPreset() {
  return {
    plugins: [(0, _jssPluginRuleValueFunction.default)(), (0, _jssPluginGlobal.default)(), (0, _jssPluginNested.default)(), (0, _jssPluginCamelCase.default)(), (0, _jssPluginDefaultUnit.default)(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : (0, _jssPluginVendorPrefixer.default)(), (0, _jssPluginPropsSort.default)()]
  };
}

var _default = jssPreset;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/makeStyles.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/styles/makeStyles.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ThemeContext = _interopRequireDefault(__webpack_require__(/*! ./ThemeContext */ "./node_modules/@material-ui/styles/ThemeContext.js"));

var _StylesProvider = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/styles/StylesProvider.js");

var _withStyles = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/styles/withStyles.js");

var _indexCounter = __webpack_require__(/*! ./indexCounter */ "./node_modules/@material-ui/styles/indexCounter.js");

var _getStylesCreator = _interopRequireDefault(__webpack_require__(/*! ./getStylesCreator */ "./node_modules/@material-ui/styles/getStylesCreator.js"));

// We use the same empty object to ref count the styles that don't need a theme object.
var noopTheme = {}; // Helper to debug
// let id = 0;

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$withTheme = options.withTheme,
      withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
      name = options.name,
      defaultThemeOption = options.defaultTheme,
      stylesOptions2 = (0, _objectWithoutProperties2.default)(options, ["withTheme", "name", "defaultTheme"]);
  var stylesCreator = (0, _getStylesCreator.default)(stylesOrCreator);
  var listenToTheme = stylesCreator.themingEnabled || typeof name === 'string' || withTheme;
  var defaultTheme = defaultThemeOption || noopTheme;
  var meta = name || 'Hook';
  stylesCreator.options = {
    index: (0, _indexCounter.increment)(),
    // Use for the global CSS option
    name: name,
    // Help with debuggability.
    meta: meta,
    classNamePrefix: meta
  };
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var theme = listenToTheme ? _react.default.useContext(_ThemeContext.default) || defaultTheme : defaultTheme;
    var stylesOptions = (0, _extends2.default)({}, _react.default.useContext(_StylesProvider.StylesContext), stylesOptions2);
    var firstRender = false;

    var _React$useState = _react.default.useState(function () {
      firstRender = true;
      return {};
    }),
        _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 1),
        state = _React$useState2[0]; // Execute synchronously every time the theme changes.


    _react.default.useMemo(function () {
      (0, _withStyles.attach)({
        name: name,
        props: props,
        state: state,
        stylesCreator: stylesCreator,
        stylesOptions: stylesOptions,
        theme: theme
      });
    }, [theme]);

    _react.default.useEffect(function () {
      if (!firstRender) {
        (0, _withStyles.update)({
          props: props,
          state: state,
          stylesCreator: stylesCreator,
          stylesOptions: stylesOptions,
          theme: theme
        });
      }
    }); // Execute asynchronously every time the theme changes.


    _react.default.useEffect(function () {
      return function cleanup() {
        (0, _withStyles.detach)({
          state: state,
          stylesCreator: stylesCreator,
          stylesOptions: stylesOptions,
          theme: theme
        });
      };
    }, [theme]);

    return (0, _withStyles.getClasses)({
      classes: props.classes,
      Component: undefined,
      state: state,
      stylesOptions: stylesOptions
    });
  };
}

var _default = makeStyles;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/mergeClasses.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/styles/mergeClasses.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = (0, _extends2.default)({}, baseClasses);
  Object.keys(newClasses).forEach(function (key) {
     true ? (0, _warning.default)(baseClasses[key] || !newClasses[key], ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not implemented in ".concat((0, _utils.getDisplayName)(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n')) : undefined;
     true ? (0, _warning.default)(!newClasses[key] || typeof newClasses[key] === 'string', ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not valid for ".concat((0, _utils.getDisplayName)(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n')) : undefined;

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

var _default = mergeClasses;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/multiKeyStore.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/styles/multiKeyStore.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Used https://github.com/thinkloop/multi-key-cache as inspiration
var multiKeyStore = {
  set: function set(cache, key1, key2, value) {
    var subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: function get(cache, key1, key2) {
    var subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: function _delete(cache, key1, key2) {
    var subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
var _default = multiKeyStore;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedValue = exports.supportedProperty = exports.supportedKeyframes = exports.prefix = undefined;

var _prefix = __webpack_require__(/*! ./prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _supportedKeyframes = __webpack_require__(/*! ./supported-keyframes */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/supported-keyframes.js");

var _supportedKeyframes2 = _interopRequireDefault(_supportedKeyframes);

var _supportedProperty = __webpack_require__(/*! ./supported-property */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/supported-property.js");

var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

var _supportedValue = __webpack_require__(/*! ./supported-value */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/supported-value.js");

var _supportedValue2 = _interopRequireDefault(_supportedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * CSS Vendor prefix detection and property feature testing.
 *
 * @copyright Oleg Slobodskoi 2015
 * @website https://github.com/jsstyles/css-vendor
 * @license MIT
 */

exports['default'] = {
  prefix: _prefix2['default'],
  supportedKeyframes: _supportedKeyframes2['default'],
  supportedProperty: _supportedProperty2['default'],
  supportedValue: _supportedValue2['default']
};
exports.prefix = _prefix2['default'];
exports.supportedKeyframes = _supportedKeyframes2['default'];
exports.supportedProperty = _supportedProperty2['default'];
exports.supportedValue = _supportedValue2['default'];

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/appearence.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/appearence.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support old appearance props syntax.
// https://caniuse.com/#search=appearance
exports['default'] = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (_prefix2['default'].js === 'ms') return '-webkit-' + prop;
    return _prefix2['default'].css + prop;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/break-props-old.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/break-props-old.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support old break-* props syntax.
// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177
exports['default'] = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;
    if (_prefix2['default'].js === 'Webkit') {
      var jsProp = 'WebkitColumn' + (0, _pascalize2['default'])(prop);
      return jsProp in style ? _prefix2['default'].css + 'column-' + prop : false;
    }
    if (_prefix2['default'].js === 'Moz') {
      var _jsProp = 'page' + (0, _pascalize2['default'])(prop);
      return _jsProp in style ? 'page-' + prop : false;
    }
    return false;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/color-adjust.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/color-adjust.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support old color-adjust prop syntax.
// https://caniuse.com/#search=color-adjust
exports['default'] = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (_prefix2['default'].js === 'Webkit') return _prefix2['default'].css + 'print-' + prop;
    return prop;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/flex-2009.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/flex-2009.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propMap = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};

var propKeys = Object.keys(propMap);

var prefixCss = function prefixCss(p) {
  return _prefix2['default'].css + p;
};

// Support old flex spec from 2009.
exports['default'] = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap[prop];
      if (!Array.isArray(newProp)) {
        return _prefix2['default'].js + (0, _pascalize2['default'])(newProp) in style ? _prefix2['default'].css + newProp : false;
      }
      if (!multiple) return false;
      for (var i = 0; i < newProp.length; i++) {
        if (!(_prefix2['default'].js + (0, _pascalize2['default'])(newProp[0]) in style)) {
          return false;
        }
      }
      return newProp.map(prefixCss);
    }
    return false;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/flex-2012.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/flex-2012.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack'
  // 'align-self' is handled by 'align-self' plugin.


  // Support old flex spec from 2012.
};exports['default'] = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return _prefix2['default'].js + (0, _pascalize2['default'])(newProp) in style ? _prefix2['default'].css + newProp : false;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noPrefill = exports.propertyDetectors = undefined;

var _appearence = __webpack_require__(/*! ./appearence */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/appearence.js");

var _appearence2 = _interopRequireDefault(_appearence);

var _breakPropsOld = __webpack_require__(/*! ./break-props-old */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/break-props-old.js");

var _breakPropsOld2 = _interopRequireDefault(_breakPropsOld);

var _colorAdjust = __webpack_require__(/*! ./color-adjust */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/color-adjust.js");

var _colorAdjust2 = _interopRequireDefault(_colorAdjust);

var _flex = __webpack_require__(/*! ./flex-2009 */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/flex-2009.js");

var _flex2 = _interopRequireDefault(_flex);

var _flex3 = __webpack_require__(/*! ./flex-2012 */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/flex-2012.js");

var _flex4 = _interopRequireDefault(_flex3);

var _inlineLogicalOld = __webpack_require__(/*! ./inline-logical-old */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/inline-logical-old.js");

var _inlineLogicalOld2 = _interopRequireDefault(_inlineLogicalOld);

var _mask = __webpack_require__(/*! ./mask */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/mask.js");

var _mask2 = _interopRequireDefault(_mask);

var _prefixed = __webpack_require__(/*! ./prefixed */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/prefixed.js");

var _prefixed2 = _interopRequireDefault(_prefixed);

var _scrollSnap = __webpack_require__(/*! ./scroll-snap */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/scroll-snap.js");

var _scrollSnap2 = _interopRequireDefault(_scrollSnap);

var _overscrollBehavior = __webpack_require__(/*! ./overscroll-behavior */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/overscroll-behavior.js");

var _overscrollBehavior2 = _interopRequireDefault(_overscrollBehavior);

var _transform = __webpack_require__(/*! ./transform */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/transform.js");

var _transform2 = _interopRequireDefault(_transform);

var _transition = __webpack_require__(/*! ./transition */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/transition.js");

var _transition2 = _interopRequireDefault(_transition);

var _unprefixed = __webpack_require__(/*! ./unprefixed */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/unprefixed.js");

var _unprefixed2 = _interopRequireDefault(_unprefixed);

var _writingMode = __webpack_require__(/*! ./writing-mode */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/writing-mode.js");

var _writingMode2 = _interopRequireDefault(_writingMode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Please, keep order plugins:
// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    scrollChaining,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'
var plugins = [_appearence2['default'], _transform2['default'], _transition2['default'], _mask2['default'], _writingMode2['default'], _colorAdjust2['default'], _breakPropsOld2['default'], _inlineLogicalOld2['default'], _unprefixed2['default'], _prefixed2['default'], _scrollSnap2['default'], _overscrollBehavior2['default'], _flex4['default'], _flex2['default']];

var propertyDetectors = exports.propertyDetectors = plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});

var noPrefill = exports.noPrefill = plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, _toConsumableArray(p.noPrefill));
  return a;
}, []);

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/inline-logical-old.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/inline-logical-old.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support old inline-logical syntax.
// See https://github.com/postcss/autoprefixer/issues/324.
exports['default'] = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (_prefix2['default'].js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return _prefix2['default'].js + (0, _pascalize2['default'])(newProp) in style ? _prefix2['default'].css + newProp : false;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/mask.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/mask.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

var _camelize = __webpack_require__(/*! ../utils/camelize */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Mask property support cannot detect directly in WebKit browsers,
// but we can use a longhand property instead.
// https://caniuse.com/#search=mask
exports['default'] = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;
    if (_prefix2['default'].js === 'Webkit') {
      var longhand = 'mask-image';
      if ((0, _camelize2['default'])(longhand) in style) {
        return prop;
      }
      if (_prefix2['default'].js + (0, _pascalize2['default'])(longhand) in style) {
        return _prefix2['default'].css + prop;
      }
    }
    return prop;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/overscroll-behavior.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/overscroll-behavior.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support overscroll-behavior props syntax.
// https://caniuse.com/#search=overscroll-behavior
exports['default'] = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;
    if (_prefix2['default'].js === 'ms') {
      return _prefix2['default'].css + 'scroll-chaining';
    }
    return prop;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/prefixed.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/prefixed.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Test if property is supported with vendor prefix.
exports['default'] = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = (0, _pascalize2['default'])(prop);
    if (_prefix2['default'].js + pascalized in style) return _prefix2['default'].css + prop;
    // Try webkit fallback.
    if (_prefix2['default'].js !== 'Webkit' && 'Webkit' + pascalized in style) return prop;
    return false;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/scroll-snap.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/scroll-snap.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support scroll-snap props syntax.
// https://caniuse.com/#search=scroll-snap
exports['default'] = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;
    if (_prefix2['default'].js === 'ms') {
      return '' + _prefix2['default'].css + prop;
    }
    return prop;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/transform.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/transform.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support transform prop syntax.
// https://caniuse.com/#search=transform
exports['default'] = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;
    if (options.transform) {
      return prop;
    }
    return _prefix2['default'].css + prop;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/transition.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/transition.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support transition prop syntax.
// https://caniuse.com/#search=transition
exports['default'] = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;
    if (options.transition) {
      return prop;
    }
    return _prefix2['default'].css + prop;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/unprefixed.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/unprefixed.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelize = __webpack_require__(/*! ../utils/camelize */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Test if a property supported as it is.
// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.
exports['default'] = {
  supportedProperty: function supportedProperty(prop, style) {
    return (0, _camelize2['default'])(prop) in style ? prop : false;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/writing-mode.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/writing-mode.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support writing-mode prop syntax.
// https://caniuse.com/#search=writing-mode
exports['default'] = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;
    if (_prefix2['default'].js === 'Webkit' || _prefix2['default'].js === 'ms') {
      return _prefix2['default'].css + prop;
    }
    return prop;
  }
};

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInBrowser = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var js = ''; // Export javascript style and css style vendor prefixes.
// Based on "transform" support test.

var css = '';

// We should not do anything if required serverside.
if (_isInBrowser2['default']) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }

  // Correctly detect the Edge browser.
  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
  }
}

/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String}}
 * @api public
 */
exports['default'] = { js: js, css: css };

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/supported-keyframes.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/supported-keyframes.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedKeyframes;

var _prefix = __webpack_require__(/*! ./prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key;
  // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes
  if (_prefix2['default'].js === 'ms') return key;
  return '@' + _prefix2['default'].css + 'keyframes' + key.substr(10);
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/supported-property.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/supported-property.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedProperty;

var _isInBrowser = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _plugins = __webpack_require__(/*! ./plugins */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/plugins/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var el = void 0;
var cache = {};

if (_isInBrowser2['default']) {
  el = document.createElement('p');

  // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix
  var computed = window.getComputedStyle(document.documentElement, '');
  for (var key in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key)) cache[computed[key]] = computed[key];
  }

  // Properties that cannot be correctly detected using the
  // cache prefill method.
  _plugins.noPrefill.forEach(function (x) {
    return delete cache[x];
  });
}

/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */

function supportedProperty(prop) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // For server-side rendering.
  if (!el) return prop;

  // Remove cache for benchmark tests or return property from the cache.
  if ( true && cache[prop] != null) {
    return cache[prop];
  }

  // Check if 'transition' or 'transform' natively supported in browser.
  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  }

  // Find a plugin for current prefix property.
  for (var i = 0; i < _plugins.propertyDetectors.length; i++) {
    cache[prop] = _plugins.propertyDetectors[i](prop, el.style, options);
    // Break loop, if value found.
    if (cache[prop]) break;
  }

  // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".
  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache[prop];
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/supported-value.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/supported-value.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedValue;

var _isInBrowser = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__(/*! ./prefix */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _supportedProperty = __webpack_require__(/*! ./supported-property */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/supported-property.js");

var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cache = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el = void 0;

/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */
function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  return p1 ? (0, _supportedProperty2['default'])(p1) : ', ' + (0, _supportedProperty2['default'])(p2);
}

if (_isInBrowser2['default']) el = document.createElement('p');

/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  if (!el) return value;

  // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals
  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) {
    return value;
  }

  // Create cache key for current value.
  var cacheKey = property + value;

  // Remove cache for benchmark tests or return value from cache.
  if ( true && cache[cacheKey] != null) {
    return cache[cacheKey];
  }

  // IE can even throw an error in some cases, for e.g. style.content = 'bar'.
  try {
    // Test value as it is.
    el.style[property] = value;
  } catch (err) {
    // Return false if value not supported.
    cache[cacheKey] = false;
    return false;
  }

  // If 'transition' or 'transition-property' property.
  if (transitionProperties[property]) {
    value = value.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el.style[property] === '') {
    // Value with a vendor prefix.
    value = _prefix2['default'].css + value;

    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
    if (value === '-ms-flex') value = '-ms-flexbox';

    // Test prefixed value.
    el.style[property] = value;

    // Return false if value not supported.
    if (el.style[property] === '') {
      cache[cacheKey] = false;
      return false;
    }
  }

  // Reset styles for current property.
  el.style[property] = '';

  // Write current value to cache.
  cache[cacheKey] = value;

  return cache[cacheKey];
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/camelize.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/camelize.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelize;
var regExp = /[-\s]+(.)?/g;

/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */
function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */
function camelize(str) {
  return str.replace(regExp, toUpper);
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/pascalize.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/pascalize.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = pascalize;

var _camelize = __webpack_require__(/*! ./camelize */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/utils/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */
function pascalize(str) {
  return (0, _camelize2['default'])('-' + str);
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/deepmerge/dist/umd.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/deepmerge/dist/umd.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

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

return deepmerge_1;

})));


/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    converted[hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0___default()(prop)] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    var hyphenatedProp = hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0___default()(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (camelCase);


/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/styles/node_modules/jss/dist/jss.esm.js");


var px = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] ? window.CSS.px : 'px';
var ms = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] ? window.CSS.ms : 'ms';
var percent = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] ? window.CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */

function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 *
 * @param {String} current property
 * @param {(Object|Array|Number|String)} property value
 * @param {Object} options
 * @return {(Object|Array|Number|String)} resulting value
 */

function iterate(prop, value, options) {
  if (!value) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      // $FlowFixMe
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number') {
    if (options[prop]) {
      return "" + value + options[prop];
    }

    if (units[prop]) {
      return typeof units[prop] === 'function' ? units[prop](value).toString() : "" + value + units[prop];
    }

    return value.toString();
  }

  return value;
}

/**
 * Add unit to numeric values.
 */
function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    // $FlowFixMe
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (defaultUnit);


/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/jss-plugin-global/dist/jss-plugin-global.cjs.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/jss-plugin-global/dist/jss-plugin-global.cjs.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
var jss = __webpack_require__(/*! jss */ "./node_modules/@material-ui/styles/node_modules/jss/dist/jss.esm.js");

var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new jss.RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  /**
   * Create and register rule, run plugins.
   */


  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  /**
   * Get index of a rule.
   */


  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  /**
   * Generates a CSS string.
   */


  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(name, style, options) {
    this.type = 'global';
    this.at = at;
    this.name = void 0;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.name = name;
    this.options = options;
    var selector = name.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;
    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

exports.default = jssGlobal;


/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/jss-plugin-nested/dist/jss-plugin-nested.cjs.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/jss-plugin-nested/dist/jss-plugin-nested.cjs.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/@material-ui/styles/node_modules/jss-plugin-nested/node_modules/warning/browser.js"));

var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

      warning(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, options) {
    // Options has been already created, now we only increase index.
    if (options) return _extends({}, options, {
      index: options.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;
    return _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1
    });
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp, replaceRef);
        container.addRule(selector, style[prop], _extends({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

exports.default = jssNested;


/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/jss-plugin-nested/node_modules/warning/browser.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/jss-plugin-nested/node_modules/warning/browser.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sort props by length.
 */
function jssPropsSort() {
  function sort(prop0, prop1) {
    return prop0.length - prop1.length;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    var newStyle = {};
    var props = Object.keys(style).sort(sort);

    for (var i = 0; i < props.length; i++) {
      newStyle[props[i]] = style[props[i]];
    }

    return newStyle;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssPropsSort);


/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/styles/node_modules/jss/dist/jss.esm.js");


var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = Object(jss__WEBPACK_IMPORTED_MODULE_0__["createRule"])(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We don't ned to extract functions on each style update, since this can
      // happen only one.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        styleRule.style = fnRule(data);
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var prop in fnValues) {
          styleRule.prop(prop, fnValues[prop](data), options);
        }
      }
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (functionPlugin);


/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vendor */ "./node_modules/@material-ui/styles/node_modules/css-vendor/lib/index.js");
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/styles/node_modules/jss/dist/jss.esm.js");



/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedKeyframes"])(atRule.at);
    }
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      var value = style[prop];
      var changeProp = false;
      var supportedProp = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedProperty"])(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$$1 = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(supportedProp, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value));
      if (supportedValue$$1 && supportedValue$$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$$1 || value;
      }
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(prop, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssVendorPrefixer);


/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/jss/dist/jss.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/jss/dist/jss.esm.js ***!
  \***************************************************************************/
/*! exports provided: default, hasCSSTOMSupport, create, getDynamicStyles, toCssValue, createRule, SheetsRegistry, SheetsManager, RuleList, sheets, createGenerateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCSSTOMSupport", function() { return hasCSSTOMSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDynamicStyles", function() { return getDynamicStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCssValue", function() { return toCssValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRule", function() { return createRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsRegistry", function() { return SheetsRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsManager", function() { return SheetsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleList", function() { return RuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheets", function() { return sheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGenerateId", function() { return createGenerateIdDefault; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "./node_modules/@material-ui/styles/node_modules/jss/node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");








var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

var isArray = Array.isArray; // TODO: This should propably not be here, need to find a better place

var isObservable = function isObservable(value) {
  return value && value[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] && value === value[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]]();
};

function cloneStyle(style) {
  // Support empty values in case user ends up with them by accident.
  if (style == null) return style; // Support string value for SimpleRule.

  var typeOfStyle = typeof style;

  if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
    return style;
  } // It is a CSSTOM value.
  // TODO will not work if instance comes from a different window.


  if (global$1.CSSStyleValue && style instanceof global$1.CSSStyleValue) {
    return style;
  } // Support array for FontFaceRule.


  if (isArray(style)) return style.map(cloneStyle); // Support Observable styles.  Observables are immutable, so we don't need to
  // copy them.

  if (isObservable(style)) return style;
  var newStyle = {};

  for (var name in style) {
    var value = style[name];

    if (typeof value === 'object') {
      newStyle[name] = cloneStyle(value);
      continue;
    }

    newStyle[name] = value;
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
    warning__WEBPACK_IMPORTED_MODULE_1___default()(false, '[JSS] Unknown rule %s', name);
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var env = "development";
var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var escape = (function (str) {
  // We don't need to escape it in production, because we are not using user's
  // input for selectors, we are generating a valid selector.
  if (env === 'production') return str;
  var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    this.renderer = sheet ? sheet.renderer : new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
      warning__WEBPACK_IMPORTED_MODULE_1___default()(false, '[JSS] Rule is not linked. Missing sheet option "link: true".');
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var json = this.toJSON();

    for (var prop in json) {
      this.renderer.setProperty(renderable, prop, json[prop]);
    }

    return this;
  };
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */


  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  };
  /**
   * Generates a CSS string.
   */


  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      if (!this.renderable) return;
      var hasChanged = this.renderer.setSelector(this.renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        this.renderer.replaceRule(this.renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown';
    this.options = options;
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  /**
   * Get index of a rule.
   */


  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  /**
   * Create and register rule, run plugins.
   */


  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  /**
   * Generates a CSS string.
   */


  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.children === false) {
      return this.key + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.key + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
      warning__WEBPACK_IMPORTED_MODULE_1___default()(false, '[JSS] Bad keyframes name %s', key);
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : generateId(this, sheet);
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/;
/**
 * Replace the reference for a animation name.
 */

var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];

  if (typeof value === 'string') {
    var ref = refRegExp.exec(value);
    if (!ref) return;

    if (ref[1] in keyframes) {
      style[prop] = value.replace(ref[0], keyframes[ref[1]]);
    } else {
      warning__WEBPACK_IMPORTED_MODULE_1___default()(false, '[JSS] Referenced keyframes rule "%s" is not defined.', ref[1]);
    }
  }
};

var pluginKeyframesRule = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.key, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.key, this.style, options);
  };

  return FontFaceRule;
}();
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@font-face' ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(key, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped
    }, ruleOptions); // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // For e.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  };
  /**
   * Get a rule.
   */


  _proto.get = function get(name) {
    return this.map[name];
  };
  /**
   * Delete a rule.
   */


  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.indexOf(rule), 1);
  };
  /**
   * Get index of a rule.
   */


  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  };
  /**
   * Run `onProcessRule()` plugins on every rule.
   */


  _proto.process = function process() {
    var plugins$$1 = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins$$1.onProcessRule, plugins$$1);
  };
  /**
   * Register a rule in `.map` and `.classes` maps.
   */


  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  };
  /**
   * Unregister a rule.
   */


  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  };
  /**
   * Update the function values with a new data.
   */


  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.onUpdate(data, this.get(name), options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.onUpdate(data, this.index[index], options);
      }
    }
  };
  /**
   * Execute plugins, update rule props.
   */


  _proto.onUpdate = function onUpdate(data, rule, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins$$1 = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins$$1.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins$$1.onProcessStyle(styleRule.style, styleRule, sheet); // Update, remove and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // Since we use `force` option, we should optimize the `.prop()` call
        // for cases where the primive value has not changed.
        // It can't do that check, because it doesn't have the previous `style`
        // object.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      }
    }
  };
  /**
   * Convert rules to a CSS string.
   */


  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });
    this.renderer = new options.Renderer(this);
    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  };
  /**
   * Remove renderable from render tree.
   */


  _proto.detach = function detach() {
    if (!this.attached) return this;
    this.renderer.detach();
    this.attached = false;
    return this;
  };
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */


  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  };
  /**
   * Insert rule into the StyleSheet
   */


  _proto.insertRule = function insertRule(rule) {
    this.renderer.insertRule(rule);
  };
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */


  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  };
  /**
   * Get a rule by name.
   */


  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */


  _proto.deleteRule = function deleteRule(name) {
    var rule = this.rules.get(name);
    if (!rule) return false;
    this.rules.remove(rule);

    if (this.attached && rule.renderable) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  };
  /**
   * Get index of a rule.
   */


  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  /**
   * Deploy pure CSS string to a renderable.
   */


  _proto.deploy = function deploy() {
    this.renderer.deploy();
    this.deployed = true;
    return this;
  };
  /**
   * Update the function values with a new data.
   */


  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  };
  /**
   * Convert rules to a CSS string.
   */


  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  };
  /**
   * Call `onProcessRule` hooks.
   */


  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    } // $FlowFixMe


    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  };
  /**
   * Call `onProcessStyle` hooks.
   */


  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  };
  /**
   * Call `onProcessSheet` hooks.
   */


  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  };
  /**
   * Call `onUpdate` hooks.
   */


  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  };
  /**
   * Call `onChangeValue` hooks.
   */


  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  };
  /**
   * Register a plugin.
   */


  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = this.plugins.external.concat(this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else warning__WEBPACK_IMPORTED_MODULE_1___default()(false, '[JSS] Unknown hook "%s".', name);
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  };
  /**
   * Reset the registry.
   */


  _proto.reset = function reset() {
    this.registry = [];
  };
  /**
   * Remove a Style Sheet.
   */


  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  };
  /**
   * Convert all attached sheets to a CSS string.
   */


  _proto.toString = function toString(options) {
    return this.registry.filter(function (sheet) {
      return sheet.attached;
    }).map(function (sheet) {
      return sheet.toString(options);
    }).join('\n');
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var sheets = new SheetsRegistry();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (global$1[ns] == null) global$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = global$1[ns]++;

var maxRules = 1e10;
var env$1 = "development";
/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

var createGenerateIdDefault = (function () {
  var ruleCounter = 0;
  var defaultPrefix = env$1 === 'production' ? 'c' : '';
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      warning__WEBPACK_IMPORTED_MODULE_1___default()(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
    }

    var prefix = defaultPrefix;
    var jssId = '';

    if (sheet) {
      prefix = sheet.options.classNamePrefix || defaultPrefix;
      if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
    }

    if (env$1 === 'production') {
      return "" + prefix + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId && "-" + jssId) + "-" + ruleCounter;
  };
});

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if ('attributeStyleMap' in cssRule) {
      // $FlowFixMe
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}
/**
 * Set a style property.
 */


function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if ('attributeStyleMap' in cssRule) {
      // $FlowFixMe
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
}
/**
 * Remove a style property.
 */


function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if ('attributeStyleMap' in cssRule) {
      // $FlowFixMe
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
    warning__WEBPACK_IMPORTED_MODULE_1___default()(false, '[JSS] DOMException "%s" was thrown. Tried to remove property "%s".', err.message, prop);
  }
}
/**
 * Set the selector.
 */


function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
}
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


    warning__WEBPACK_IMPORTED_MODULE_1___default()(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else warning__WEBPACK_IMPORTED_MODULE_1___default()(false, '[JSS] Insertion point is not in the DOM.');
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  if (index === void 0) {
    index = container.cssRules.length;
  }

  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
    warning__WEBPACK_IMPORTED_MODULE_1___default()(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
    return false;
  }

  return container.cssRules[index];
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || document.createElement('style');
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // browsers remove those rules.
    // TODO figure out if its a bug and if it is known.
    // Workaround is to redeploy the sheet.

    if (this.hasInsertedRules) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  };
  /**
   * Remove style element from render tree.
   */


  _proto.detach = function detach() {
    this.element.parentNode.removeChild(this.element);
  };
  /**
   * Inject CSS string into element.
   */


  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      sheet.rules.index.forEach(this.insertRule, this);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  };
  /**
   * Insert a rule into element.
   */


  _proto.insertRule = function insertRule(rule, index) {
    var sheet = this.element.sheet;

    if (rule.type === 'conditional' || rule.type === 'keyframes') {
      var containerRule = rule; // We need to render the container without children first.

      var _cssRule = _insertRule(sheet, containerRule.toString({
        children: false
      }), index);

      if (_cssRule === false) {
        return false;
      }

      containerRule.rules.index.forEach(function (childRule, childIndex) {
        var cssChildRule = _insertRule(_cssRule, childRule.toString(), childIndex);

        if (cssChildRule !== false) childRule.renderable = cssChildRule;
      });
      return _cssRule;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;

    var cssRule = _insertRule(sheet, ruleStr, index);

    if (cssRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    rule.renderable = cssRule;
    return cssRule;
  };
  /**
   * Delete a rule.
   */


  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    return true;
  };
  /**
   * Get index of a CSS Rule.
   */


  _proto.indexOf = function indexOf(cssRule) {
    var cssRules = this.element.sheet.cssRules;

    for (var index = 0; index < cssRules.length; index++) {
      if (cssRule === cssRules[index]) return index;
    }

    return -1;
  };
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */


  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    return this.insertRule(rule, index);
  };
  /**
   * Get all rules elements.
   */


  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

/* eslint-disable class-methods-use-this */

/**
 * Rendering backend to do nothing in nodejs.
 */
var VirtualRenderer =
/*#__PURE__*/
function () {
  function VirtualRenderer() {}

  var _proto = VirtualRenderer.prototype;

  _proto.setProperty = function setProperty() {
    return true;
  };

  _proto.getPropertyValue = function getPropertyValue() {
    return '';
  };

  _proto.removeProperty = function removeProperty() {};

  _proto.setSelector = function setSelector() {
    return true;
  };

  _proto.attach = function attach() {};

  _proto.detach = function detach() {};

  _proto.deploy = function deploy() {};

  _proto.insertRule = function insertRule() {
    return false;
  };

  _proto.deleteRule = function deleteRule() {
    return true;
  };

  _proto.replaceRule = function replaceRule() {
    return false;
  };

  _proto.getRules = function getRules() {};

  _proto.indexOf = function indexOf() {
    return -1;
  };

  return VirtualRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.0.0-alpha.2";
    this.plugins = new PluginsRegistry();
    this.options = {
      createGenerateId: createGenerateIdDefault,
      Renderer: is_in_browser__WEBPACK_IMPORTED_MODULE_6__["default"] ? DomRenderer : VirtualRenderer,
      plugins: []
    };
    this.generateId = createGenerateIdDefault();

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId; // $FlowFixMe

      this.generateId = options.createGenerateId();
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if (options.virtual || options.Renderer) {
      this.options.Renderer = options.Renderer || (options.virtual ? VirtualRenderer : DomRenderer);
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  };
  /**
   * Create a Style Sheet.
   */


  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet(styles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  };
  /**
   * Detach the Style Sheet and remove it from the registry.
   */


  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  };
  /**
   * Create a rule without a Style Sheet.
   */


  _proto.createRule = function createRule$$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  };
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */


  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins$$1 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins$$1[_key] = arguments[_key];
    }

    plugins$$1.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager =
/*#__PURE__*/
function () {
  function SheetsManager() {
    this.sheets = [];
    this.refs = [];
    this.keys = [];
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var index = this.keys.indexOf(key);
    return this.sheets[index];
  };

  _proto.add = function add(key, sheet) {
    var sheets = this.sheets,
        refs = this.refs,
        keys = this.keys;
    var index = sheets.indexOf(sheet);
    if (index !== -1) return index;
    sheets.push(sheet);
    refs.push(0);
    keys.push(key);
    return sheets.length - 1;
  };

  _proto.manage = function manage(key) {
    var index = this.keys.indexOf(key);
    var sheet = this.sheets[index];
    if (this.refs[index] === 0) sheet.attach();
    this.refs[index]++;
    if (!this.keys[index]) this.keys.splice(index, 0, key);
    return sheet;
  };

  _proto.unmanage = function unmanage(key) {
    var index = this.keys.indexOf(key);

    if (index === -1) {
      // eslint-ignore-next-line no-console
      warning__WEBPACK_IMPORTED_MODULE_1___default()(false, "SheetsManager: can't find sheet to unmanage");
      return;
    }

    if (this.refs[index] > 0) {
      this.refs[index]--;
      if (this.refs[index] === 0) this.sheets[index].detach();
    }
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsManager, [{
    key: "size",
    get: function get() {
      return this.keys.length;
    }
  }]);

  return SheetsManager;
}();

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */

var index = create();

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@material-ui/styles/node_modules/jss/node_modules/warning/browser.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material-ui/styles/node_modules/jss/node_modules/warning/browser.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/@material-ui/styles/styled.js":
/*!****************************************************!*\
  !*** ./node_modules/@material-ui/styles/styled.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/styles/withStyles.js"));

function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled(Component) {
  var componentCreator = function componentCreator(style, options) {
    function StyledComponent(props) {
      var children = props.children,
          classes = props.classes,
          classNameProp = props.className,
          clone = props.clone,
          ComponentProp = props.component,
          other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "clone", "component"]);
      var className = (0, _classnames.default)(classes.root, classNameProp);

      if (clone) {
        return _react.default.cloneElement(children, {
          className: (0, _classnames.default)(children.props.className, className)
        });
      }

      var spread = other;

      if (style.filterProps) {
        var omittedProps = style.filterProps;
        spread = omit(spread, omittedProps);
      }

      if (typeof children === 'function') {
        return children((0, _extends2.default)({
          className: className
        }, spread));
      }

      var FinalComponent = ComponentProp || Component;
      return _react.default.createElement(FinalComponent, (0, _extends2.default)({
        className: className
      }, spread), children);
    }

     true ? StyledComponent.propTypes = (0, _extends2.default)({
      /**
       * A render function or node.
       */
      children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
      classes: _propTypes.default.object.isRequired,
      className: _propTypes.default.string,

      /**
       * If `true`, the component will recycle it's children DOM element.
       * It's using `React.cloneElement` internally.
       */
      clone: (0, _utils.chainPropTypes)(_propTypes.default.bool, function (props) {
        if (props.clone && props.component) {
          throw new Error('You can not use the clone and component properties at the same time.');
        }
      }),

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),
      theme: _propTypes.default.object
    }, style.propTypes || {}) : undefined;

    if (true) {
      StyledComponent.displayName = "Styled(".concat((0, _utils.getDisplayName)(Component), ")");
    }

    var styles = typeof style === 'function' ? function (theme) {
      return {
        root: function root(props) {
          return style((0, _extends2.default)({
            theme: theme
          }, props));
        }
      };
    } : {
      root: style
    };
    (0, _hoistNonReactStatics.default)(StyledComponent, Component);
    return (0, _withStyles.default)(styles, options)(StyledComponent);
  };

  return componentCreator;
}

var _default = styled;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/useTheme.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/styles/useTheme.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTheme;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ThemeContext = _interopRequireDefault(__webpack_require__(/*! ./ThemeContext */ "./node_modules/@material-ui/styles/ThemeContext.js"));

function useTheme() {
  return _react.default.useContext(_ThemeContext.default);
}

/***/ }),

/***/ "./node_modules/@material-ui/styles/withStyles.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/styles/withStyles.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClasses = getClasses;
exports.attach = attach;
exports.update = update;
exports.detach = detach;
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _jss = __webpack_require__(/*! jss */ "./node_modules/@material-ui/styles/node_modules/jss/dist/jss.esm.js");

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _indexCounter = __webpack_require__(/*! ./indexCounter */ "./node_modules/@material-ui/styles/indexCounter.js");

var _mergeClasses = _interopRequireDefault(__webpack_require__(/*! ./mergeClasses */ "./node_modules/@material-ui/styles/mergeClasses.js"));

var _multiKeyStore = _interopRequireDefault(__webpack_require__(/*! ./multiKeyStore */ "./node_modules/@material-ui/styles/multiKeyStore.js"));

var _getStylesCreator = _interopRequireDefault(__webpack_require__(/*! ./getStylesCreator */ "./node_modules/@material-ui/styles/getStylesCreator.js"));

var _getThemeProps = _interopRequireDefault(__webpack_require__(/*! ./getThemeProps */ "./node_modules/@material-ui/styles/getThemeProps.js"));

var _hoistInternalStatics = _interopRequireDefault(__webpack_require__(/*! ./hoistInternalStatics */ "./node_modules/@material-ui/styles/hoistInternalStatics.js"));

var _StylesProvider = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/styles/StylesProvider.js");

var _ThemeContext = _interopRequireDefault(__webpack_require__(/*! ./ThemeContext */ "./node_modules/@material-ui/styles/ThemeContext.js"));

// We use the same empty object to ref count the styles that don't need a theme object.
var noopTheme = {};

function getClasses(_ref) {
  var classes = _ref.classes,
      Component = _ref.Component,
      state = _ref.state,
      stylesOptions = _ref.stylesOptions;

  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  var generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = (0, _mergeClasses.default)({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component: Component
    });
  }

  return state.cacheClasses.value;
}

function attach(_ref2) {
  var state = _ref2.state,
      props = _ref2.props,
      theme = _ref2.theme,
      stylesOptions = _ref2.stylesOptions,
      stylesCreator = _ref2.stylesCreator,
      name = _ref2.name;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = _multiKeyStore.default.get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };

    _multiKeyStore.default.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  var options = (0, _extends2.default)({}, stylesCreator.options, stylesOptions, {
    theme: theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });
  options.generateId = options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    var staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = _multiKeyStore.default.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    var styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, (0, _extends2.default)({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        _multiKeyStore.default.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.dynamicStyles = (0, _jss.getDynamicStyles)(styles);
    sheetManager.staticSheet = staticSheet;
  }

  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, (0, _extends2.default)({
      link: true
    }, options));
     true ? (0, _warning.default)(props, 'Material-UI: properties missing.') : undefined;
    dynamicSheet.update(props).attach();
    state.dynamicSheet = dynamicSheet;

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }

    state.classes = (0, _mergeClasses.default)({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update(_ref3) {
  var state = _ref3.state,
      props = _ref3.props;

  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach(_ref4) {
  var state = _ref4.state,
      theme = _ref4.theme,
      stylesOptions = _ref4.stylesOptions,
      stylesCreator = _ref4.stylesCreator;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = _multiKeyStore.default.get(stylesOptions.sheetsManager, stylesCreator, theme);

  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    _multiKeyStore.default.delete(stylesOptions.sheetsManager, stylesCreator, theme);

    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
} // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.


var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        name = options.name,
        defaultThemeOption = options.defaultTheme,
        stylesOptions2 = (0, _objectWithoutProperties2.default)(options, ["withTheme", "name", "defaultTheme"]);
    var stylesCreator = (0, _getStylesCreator.default)(stylesOrCreator);
    var listenToTheme = stylesCreator.themingEnabled || typeof name === 'string' || withTheme;
    var defaultTheme = defaultThemeOption || noopTheme;
    var meta = name;

    if ( true && !meta) {
      // Provide a better DX outside production.
      meta = (0, _utils.getDisplayName)(Component);
       true ? (0, _warning.default)(typeof meta === 'string', ['Material-UI: the component displayName is invalid. It needs to be a string.', "Please fix the following component: ".concat(Component, ".")].join('\n')) : undefined;
    }

    stylesCreator.options = {
      // Side effect.
      index: (0, _indexCounter.increment)(),
      // Use for the global CSS option.
      name: name || Component.displayName,
      // Help with debuggability.
      meta: meta,
      classNamePrefix: meta
    };

    var WithStylesInner =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithStylesInner, _React$Component);

      function WithStylesInner() {
        var _this;

        (0, _classCallCheck2.default)(this, WithStylesInner);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithStylesInner).call(this));
        _this.state = {
          styles: {}
        };
        return _this;
      }

      (0, _createClass2.default)(WithStylesInner, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          update({
            props: this.props,
            state: this.state.styles
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          detach({
            state: this.state.styles,
            stylesCreator: stylesCreator,
            stylesOptions: this.props.stylesOptions,
            theme: this.props.theme
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
              classes = _this$props.classes,
              theme = _this$props.theme,
              innerRef = _this$props.innerRef,
              stylesOptions = _this$props.stylesOptions,
              other = (0, _objectWithoutProperties2.default)(_this$props, ["classes", "theme", "innerRef", "stylesOptions"]);
          var oldTheme = this.theme;
          this.theme = theme;

          if (oldTheme !== theme) {
            attach({
              name: name,
              props: this.props,
              state: this.state.styles,
              stylesCreator: stylesCreator,
              stylesOptions: stylesOptions,
              theme: theme
            });

            if (oldTheme) {
              // Rerender the component so the underlying component gets the theme update.
              // By theme update we mean receiving and applying the new class names.
              setTimeout(function () {
                detach({
                  state: _this2.state.styles,
                  stylesCreator: stylesCreator,
                  stylesOptions: stylesOptions,
                  theme: oldTheme
                });
              });
            }
          }

          var more = (0, _getThemeProps.default)({
            theme: theme,
            name: name,
            props: other
          }); // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order Component.

          if (withTheme) {
            more.theme = theme;
          }

          return _react.default.createElement(Component, (0, _extends2.default)({
            ref: innerRef,
            classes: getClasses({
              classes: classes,
              Component: Component,
              state: this.state.styles,
              stylesOptions: stylesOptions
            })
          }, more));
        }
      }]);
      return WithStylesInner;
    }(_react.default.Component);

     true ? WithStylesInner.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: _propTypes.default.object,
      stylesOptions: _propTypes.default.object.isRequired,
      theme: _propTypes.default.object
    } : undefined;

    var WithStyles = _react.default.forwardRef(function (props, ref) {
      return _react.default.createElement(_StylesProvider.StylesContext.Consumer, null, function (stylesOptions1) {
        var stylesOptions = (0, _extends2.default)({}, stylesOptions1, stylesOptions2);
        return listenToTheme ? _react.default.createElement(_ThemeContext.default.Consumer, null, function (theme) {
          return _react.default.createElement(WithStylesInner, (0, _extends2.default)({
            stylesOptions: stylesOptions,
            ref: ref,
            theme: theme || defaultTheme
          }, props));
        }) : _react.default.createElement(WithStylesInner, (0, _extends2.default)({
          stylesOptions: stylesOptions,
          ref: ref,
          theme: defaultTheme
        }, props));
      });
    });

     true ? WithStyles.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: _propTypes.default.object,

      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
    } : undefined;

    if (true) {
      WithStyles.displayName = "WithStyles(".concat((0, _utils.getDisplayName)(Component), ")");
    }

    (0, _hoistInternalStatics.default)(WithStyles, Component);

    if (true) {
      // Exposed for test purposes.
      WithStyles.Naked = Component;
      WithStyles.options = options;
    }

    return WithStyles;
  };
};

var _default = withStyles;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/styles/withTheme.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/styles/withTheme.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/index.es.js");

var _hoistInternalStatics = _interopRequireDefault(__webpack_require__(/*! ./hoistInternalStatics */ "./node_modules/@material-ui/styles/hoistInternalStatics.js"));

var _ThemeContext = _interopRequireDefault(__webpack_require__(/*! ./ThemeContext */ "./node_modules/@material-ui/styles/ThemeContext.js"));

// Provide the theme object as a property to the input component.
var withTheme = function withTheme() {
  return function (Component) {
    var WithTheme = function WithTheme(props) {
      return _react.default.createElement(_ThemeContext.default.Consumer, null, function (theme) {
        var innerRef = props.innerRef,
            other = (0, _objectWithoutProperties2.default)(props, ["innerRef"]);
        return _react.default.createElement(Component, (0, _extends2.default)({
          theme: theme,
          ref: innerRef
        }, other));
      });
    };

     true ? WithTheme.propTypes = {
      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
    } : undefined;

    if (true) {
      WithTheme.displayName = "WithTheme(".concat((0, _utils.getDisplayName)(Component), ")");
    }

    (0, _hoistInternalStatics.default)(WithTheme, Component);
    return WithTheme;
  };
};

var _default = withTheme;
exports.default = _default;

/***/ })

}]);