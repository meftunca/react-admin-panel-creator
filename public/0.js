(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@devexpress/dx-chart-core/dist/dx-chart-core.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/dist/dx-chart-core.es.js ***!
  \*************************************************************************/
/*! exports provided: defaultDomains, addDomain, scaleLinear, scaleBand, computeDomains, buildScales, bBoxes, axisCoordinates, getGridCoordinates, dArea, dLine, dSpline, getPiePointTransformer, getLinePointTransformer, getAreaPointTransformer, getBarPointTransformer, findSeriesByName, dBar, pointAttributes, addSeries, scaleSeriesPoints, getStackedSeries, getAreaAnimationStyle, getPieAnimationStyle, getScatterAnimationStyle, buildAnimatedStyleGetter, getParameters, processHandleTooltip, createAreaHitTester, createLineHitTester, createSplineHitTester, createBarHitTester, createScatterHitTester, createPieHitTester, changeSeriesState, isHorizontal, getWidth, getValueDomainName, fixOffset, getLegendItems, buildEventHandlers, processPointerMove, HORIZONTAL, VERTICAL, TOP, BOTTOM, LEFT, RIGHT, MIDDLE, END, START, LINEAR, BAND, ARGUMENT_DOMAIN, VALUE_DOMAIN, HOVERED, SELECTED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDomains", function() { return defaultDomains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDomain", function() { return addDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return scaleLinear$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return scaleBand$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDomains", function() { return computeDomains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildScales", function() { return buildScales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bBoxes", function() { return bBoxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisCoordinates", function() { return axisCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridCoordinates", function() { return getGridCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dArea", function() { return dArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dLine", function() { return dLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dSpline", function() { return dSpline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPiePointTransformer", function() { return getPiePointTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinePointTransformer", function() { return getLinePointTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaPointTransformer", function() { return getAreaPointTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBarPointTransformer", function() { return getBarPointTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSeriesByName", function() { return findSeriesByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dBar", function() { return dBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointAttributes", function() { return pointAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSeries", function() { return addSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSeriesPoints", function() { return scaleSeriesPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStackedSeries", function() { return getStackedSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaAnimationStyle", function() { return getAreaAnimationStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPieAnimationStyle", function() { return getPieAnimationStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScatterAnimationStyle", function() { return getScatterAnimationStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAnimatedStyleGetter", function() { return buildAnimatedStyleGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameters", function() { return getParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processHandleTooltip", function() { return processHandleTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaHitTester", function() { return createAreaHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLineHitTester", function() { return createLineHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSplineHitTester", function() { return createSplineHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBarHitTester", function() { return createBarHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScatterHitTester", function() { return createScatterHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPieHitTester", function() { return createPieHitTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSeriesState", function() { return changeSeriesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHorizontal", function() { return isHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidth", function() { return getWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueDomainName", function() { return getValueDomainName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixOffset", function() { return fixOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegendItems", function() { return getLegendItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildEventHandlers", function() { return buildEventHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processPointerMove", function() { return processPointerMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL", function() { return HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTICAL", function() { return VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP", function() { return TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOTTOM", function() { return BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDDLE", function() { return MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START", function() { return START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINEAR", function() { return LINEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAND", function() { return BAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARGUMENT_DOMAIN", function() { return ARGUMENT_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_DOMAIN", function() { return VALUE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOVERED", function() { return HOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED", function() { return SELECTED; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/**
 * Bundle of @devexpress/dx-chart-core
 * Generated: 2018-12-25
 * Version: 1.10.0
 * License: https://js.devexpress.com/Licensing
 */





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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var HORIZONTAL = 'horizontal';
var VERTICAL = 'vertical';
var TOP = 'top';
var BOTTOM = 'bottom';
var LEFT = 'left';
var RIGHT = 'right';
var MIDDLE = 'middle';
var END = 'end';
var START = 'start';
var LINEAR = 'linear';
var BAND = 'band';
var ARGUMENT_DOMAIN = 'argument-domain';
var VALUE_DOMAIN = 'value-domain';
var HOVERED = 'hovered';
var SELECTED = 'selected';

var isHorizontal = function isHorizontal(name) {
  return name === ARGUMENT_DOMAIN;
};
var getWidth = function getWidth(scale) {
  return scale.bandwidth ? scale.bandwidth() : 0;
};
var getValueDomainName = function getValueDomainName(name) {
  return name || VALUE_DOMAIN;
};
var fixOffset = function fixOffset(scale) {
  var offset = getWidth(scale) / 2;
  return offset > 0 ? function (value) {
    return scale(value) + offset;
  } : scale;
};

var _defaultDomains;
var defaultDomains = (_defaultDomains = {}, _defineProperty(_defaultDomains, ARGUMENT_DOMAIN, {}), _defineProperty(_defaultDomains, VALUE_DOMAIN, {}), _defaultDomains);
var addDomain = function addDomain(domains, name, props) {
  return _objectSpread({}, domains, _defineProperty({}, name, props));
};

var copy = function copy(domains) {
  var result = {};
  Object.keys(domains).forEach(function (name) {
    result[name] = _objectSpread({}, domains[name], {
      domain: []
    });
  });
  return result;
};

var getSeriesValueDomainName = function getSeriesValueDomainName(series) {
  return getValueDomainName(series.scaleName);
};

var mergeContinuousDomains = function mergeContinuousDomains(domain, items) {
  return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["extent"])([].concat(_toConsumableArray(domain), _toConsumableArray(items)));
};

var mergeDiscreteDomains = function mergeDiscreteDomains(domain, items) {
  return Array.from(new Set([].concat(_toConsumableArray(domain), _toConsumableArray(items))));
};

var getArgument = function getArgument(point) {
  return point.argument;
};

var getValue = function getValue(point) {
  return point.value;
};

var extendDomain = function extendDomain(target, items) {
  var merge = target.isDiscrete ? mergeDiscreteDomains : mergeContinuousDomains;
  Object.assign(target, {
    domain: merge(target.domain, items)
  });
};

var calculateDomains = function calculateDomains(domains, seriesList) {
  seriesList.forEach(function (seriesItem) {
    var valueDomainName = getSeriesValueDomainName(seriesItem);
    var points = seriesItem.points; // TODO: This is a temporary workaround for Stack plugin.
    // Once scales (or domains) are exposed for modification Stack will modify scale and
    // this code will be removed.

    var valueDomainItems = seriesItem.getValueDomain ? seriesItem.getValueDomain(points) : points.map(getValue);
    extendDomain(domains[valueDomainName], valueDomainItems);
    extendDomain(domains[ARGUMENT_DOMAIN], points.map(getArgument));
  });
};

var scaleLinear$1 = d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"];
var scaleBand$1 = function scaleBand$$1() {
  return Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleBand"])().paddingInner(0.3).paddingOuter(0.15);
};

var guessFactory = function guessFactory(points, getItem) {
  return points.length && typeof getItem(points[0]) === 'string' && scaleBand$1 || scaleLinear$1;
};

var collectDomainsFromSeries = function collectDomainsFromSeries(domains, seriesList) {
  seriesList.forEach(function (seriesItem) {
    if (!domains[ARGUMENT_DOMAIN].factory) {
      Object.assign(domains[ARGUMENT_DOMAIN], {
        factory: guessFactory(seriesItem.points, getArgument)
      });
    }

    var valueDomainName = getSeriesValueDomainName(seriesItem);
    var obj = domains[valueDomainName];

    if (!obj.factory) {
      obj.factory = guessFactory(seriesItem.points, getValue);
    } // TODO: It is to be removed together with *TODO* from above.


    if (seriesItem.getPointTransformer.isStartedFromZero && obj.domain.length === 0) {
      obj.domain = [0];
    }
  });
  Object.keys(domains).forEach(function (name) {
    var obj = domains[name];

    if (!obj.factory) {
      obj.factory = scaleLinear$1;
    }

    obj.isDiscrete = !!obj.factory().bandwidth;
  });
  return domains;
};

var customizeDomains = function customizeDomains(domains) {
  Object.keys(domains).forEach(function (name) {
    var obj = domains[name];

    if (obj.modifyDomain) {
      obj.domain = obj.modifyDomain(obj.domain);
    }
  });
};

var computeDomains = function computeDomains(domains, seriesList) {
  var result = copy(domains);
  collectDomainsFromSeries(result, seriesList);
  calculateDomains(result, seriesList);
  customizeDomains(result);
  return result;
};
var buildScales = function buildScales(domains, _ref) {
  var width = _ref.width,
      height = _ref.height;
  var scales = {};
  Object.keys(domains).forEach(function (name) {
    var obj = domains[name];
    scales[name] = obj.factory().domain(obj.domain).range(isHorizontal(name) ? [0, width] : [height, 0]);
  });
  return scales;
};

var isEqual = function isEqual(_ref, _ref2) {
  var firstWidth = _ref.width,
      firstHeight = _ref.height;
  var secondWidth = _ref2.width,
      secondHeight = _ref2.height;
  return firstWidth === secondWidth && firstHeight === secondHeight;
};

var bBoxes = function bBoxes(prevBBoxes, _ref3) {
  var bBox = _ref3.bBox,
      placeholder = _ref3.placeholder;
  if (isEqual(prevBBoxes[placeholder] || {}, bBox)) return prevBBoxes;
  return _objectSpread({}, prevBBoxes, _defineProperty({}, placeholder, bBox));
};

var getTicks = function getTicks(scale) {
  return scale.ticks ? scale.ticks() : scale.domain();
};

var createTicks = function createTicks(scale, callback) {
  var fixedScale = fixOffset(scale);
  return getTicks(scale).map(function (tick, index) {
    return callback(fixedScale(tick), String(index), tick);
  });
};

var getFormat = function getFormat(scale, tickFormat) {
  if (scale.tickFormat) {
    return tickFormat ? tickFormat(scale) : scale.tickFormat();
  }

  return function (tick) {
    return tick;
  };
};

var createHorizontalOptions = function createHorizontalOptions(position, tickSize, indentFromAxis) {
  // Make *position* orientation agnostic - should be START or END.
  var isStart = position === BOTTOM;
  return {
    y1: 0,
    y2: isStart ? +tickSize : -tickSize,
    yText: isStart ? +indentFromAxis : -indentFromAxis,
    dominantBaseline: isStart ? 'hanging' : 'baseline',
    textAnchor: MIDDLE
  };
};

var createVerticalOptions = function createVerticalOptions(position, tickSize, indentFromAxis) {
  // Make *position* orientation agnostic - should be START or END.
  var isStart = position === LEFT;
  return {
    x1: 0,
    x2: isStart ? -tickSize : +tickSize,
    xText: isStart ? -indentFromAxis : +indentFromAxis,
    dominantBaseline: MIDDLE,
    textAnchor: isStart ? END : START
  };
};

var axisCoordinates = function axisCoordinates(_ref) {
  var scaleName = _ref.scaleName,
      scale = _ref.scale,
      position = _ref.position,
      tickSize = _ref.tickSize,
      tickFormat = _ref.tickFormat,
      indentFromAxis = _ref.indentFromAxis;
  var isHor = isHorizontal(scaleName);
  var options = (isHor ? createHorizontalOptions : createVerticalOptions)(position, tickSize, indentFromAxis);
  var formatTick = getFormat(scale, tickFormat);
  var ticks = createTicks(scale, function (coordinates, key, tick) {
    return _objectSpread({
      key: key,
      x1: coordinates,
      x2: coordinates,
      y1: coordinates,
      y2: coordinates,
      xText: coordinates,
      yText: coordinates,
      text: formatTick(tick)
    }, options);
  });
  return {
    sides: [Number(isHor), Number(!isHor)],
    ticks: ticks
  };
};
var horizontalGridOptions = {
  y: 0,
  dy: 1
};
var verticalGridOptions = {
  x: 0,
  dx: 1
};
var getGridCoordinates = function getGridCoordinates(_ref2) {
  var scaleName = _ref2.scaleName,
      scale = _ref2.scale;
  var isHor = isHorizontal(scaleName);
  var options = isHor ? horizontalGridOptions : verticalGridOptions;
  return createTicks(scale, function (coordinates, key) {
    return _objectSpread({
      key: key,
      x: coordinates,
      y: coordinates,
      dx: 0,
      dy: 0
    }, options);
  });
};

var getX = function getX(_ref) {
  var x = _ref.x;
  return x;
};

var getY = function getY(_ref2) {
  var y = _ref2.y;
  return y;
};

var getY1 = function getY1(_ref3) {
  var y1 = _ref3.y1;
  return y1;
};

var DEFAULT_POINT_SIZE = 7;
var dArea = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])().x(getX).y1(getY).y0(getY1);
var dLine = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"])().x(getX).y(getY);
var dSpline = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"])().x(getX).y(getY).curve(d3_shape__WEBPACK_IMPORTED_MODULE_2__["curveMonotoneX"]);
var getPiePointTransformer = function getPiePointTransformer(_ref4) {
  var argumentScale = _ref4.argumentScale,
      valueScale = _ref4.valueScale,
      points = _ref4.points,
      innerRadius = _ref4.innerRadius,
      outerRadius = _ref4.outerRadius,
      palette = _ref4.palette;
  var x = Math.max.apply(Math, _toConsumableArray(argumentScale.range())) / 2;
  var y = Math.max.apply(Math, _toConsumableArray(valueScale.range())) / 2;
  var radius = Math.min(x, y);
  var pieData = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["pie"])().sort(null).value(function (d) {
    return d.value;
  })(points);
  var inner = innerRadius * radius;
  var outer = outerRadius * radius;
  var gen = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["arc"])().innerRadius(inner).outerRadius(outer);
  var colorScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"])().range(palette);
  return function (point) {
    var _pieData$point$index = pieData[point.index],
        startAngle = _pieData$point$index.startAngle,
        endAngle = _pieData$point$index.endAngle;
    return _objectSpread({}, point, {
      // TODO: It should be calculated in *pointComponent*.
      d: gen.startAngle(startAngle).endAngle(endAngle)(),
      color: point.color || colorScale(point.index),
      x: x,
      y: y,
      innerRadius: inner,
      outerRadius: outer,
      startAngle: startAngle,
      endAngle: endAngle
    });
  };
};
var getLinePointTransformer = function getLinePointTransformer(_ref5) {
  var argumentScale = _ref5.argumentScale,
      valueScale = _ref5.valueScale;
  var fixedArgumentScale = fixOffset(argumentScale);
  return function (point) {
    return _objectSpread({}, point, {
      x: fixedArgumentScale(point.argument),
      y: valueScale(point.value)
    });
  };
};
var getAreaPointTransformer = function getAreaPointTransformer(series) {
  var transform = getLinePointTransformer(series);
  var y1 = series.valueScale(0);
  return function (point) {
    var ret = transform(point);
    ret.y1 = y1;
    return ret;
  };
}; // Used for domain calculation and stacking.

getAreaPointTransformer.isStartedFromZero = true;
var getBarPointTransformer = function getBarPointTransformer(_ref6) {
  var argumentScale = _ref6.argumentScale,
      valueScale = _ref6.valueScale,
      barWidth = _ref6.barWidth;
  var y1 = valueScale(0);
  var categoryWidth = getWidth(argumentScale);
  var offset = categoryWidth * (1 - barWidth) / 2;
  var width = categoryWidth * barWidth;
  return function (point) {
    return _objectSpread({}, point, {
      x: argumentScale(point.argument) + offset,
      y: valueScale(point.value),
      y1: y1,
      width: width
    });
  };
}; // Used for domain calculation and stacking.

getBarPointTransformer.isStartedFromZero = true; // Used for Bar grouping.

getBarPointTransformer.isBroad = true;
var findSeriesByName = function findSeriesByName(name, series) {
  return series.find(function (seriesItem) {
    return seriesItem.symbolName === name;
  });
};
var dBar = function dBar(_ref7) {
  var x = _ref7.x,
      y = _ref7.y,
      y1 = _ref7.y1,
      width = _ref7.width;
  return {
    x: x,
    y: Math.min(y, y1),
    width: width || 2,
    height: Math.abs(y1 - y)
  };
};
var pointAttributes = function pointAttributes(_ref8) {
  var _ref8$size = _ref8.size,
      size = _ref8$size === void 0 ? DEFAULT_POINT_SIZE : _ref8$size;
  var dPoint = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["symbol"])().size([Math.pow(size, 2)]).type(d3_shape__WEBPACK_IMPORTED_MODULE_2__["symbolCircle"])();
  return function (item) {
    return {
      // TODO: It should be calculated in *pointComponent*.
      d: dPoint,
      x: item.x,
      y: item.y
    };
  };
};

getBarPointTransformer.getTargetElement = function (_ref9) {
  var x = _ref9.x,
      y = _ref9.y,
      y1 = _ref9.y1,
      width = _ref9.width;
  var height = Math.abs(y1 - y);
  return {
    x: x,
    y: y,
    d: "M0,0 ".concat(width, ",0 ").concat(width, ",").concat(height, " 0,").concat(height)
  };
};

getPiePointTransformer.getTargetElement = function (_ref10) {
  var x = _ref10.x,
      y = _ref10.y,
      innerRadius = _ref10.innerRadius,
      outerRadius = _ref10.outerRadius,
      startAngle = _ref10.startAngle,
      endAngle = _ref10.endAngle;
  var center = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["arc"])().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(startAngle).endAngle(endAngle).centroid();
  return {
    x: center[0] + x,
    y: center[1] + y,
    d: Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["symbol"])().size([Math.pow(1, 2)]).type(d3_shape__WEBPACK_IMPORTED_MODULE_2__["symbolCircle"])()
  };
};

getAreaPointTransformer.getTargetElement = function (_ref11) {
  var x = _ref11.x,
      y = _ref11.y;
  var size = DEFAULT_POINT_SIZE; // TODO get user size

  return {
    x: x,
    y: y,
    d: Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["symbol"])().size([Math.pow(size, 2)]).type(d3_shape__WEBPACK_IMPORTED_MODULE_2__["symbolCircle"])()
  };
};

getLinePointTransformer.getTargetElement = getAreaPointTransformer.getTargetElement;

var createNewUniqueName = function createNewUniqueName(name) {
  return name.replace(/\d*$/, function (str) {
    return str ? +str + 1 : 0;
  });
};

var addItem = function addItem(list, item) {
  return list.find(function (obj) {
    return obj.uniqueName === item.uniqueName;
  }) ? addItem(list, _objectSpread({}, item, {
    uniqueName: createNewUniqueName(item.uniqueName)
  })) : list.concat(item);
}; // TODO: Memoization is much needed here.
// Though "series" list never persists, single "series" item most often does.


var createPoints = function createPoints(argumentField, valueField, data) {
  var points = [];
  data.forEach(function (dataItem, index) {
    var argument = dataItem[argumentField];
    var value = dataItem[valueField];

    if (argument !== undefined && value !== undefined) {
      points.push({
        argument: argument,
        value: value,
        index: index
      });
    }
  });
  return points;
};

var addSeries = function addSeries(series, data, palette, props) {
  var points = createPoints(props.argumentField, props.valueField, data); // It is used to generate unique series dependent attribute names for patterns.
  // *symbolName* cannot be used as it cannot be part of DOM attribute name.
  // TODO: Consider making *name* unique and then use it instead of *index*.

  var index = series.length;
  return addItem(series, _objectSpread({}, props, {
    index: index,
    points: points,
    uniqueName: props.name,
    palette: palette,
    // TODO: For Pie only. Find a better place for it.
    color: props.color || palette[index % palette.length]
  }));
}; // TODO: Memoization is much needed here by the same reason as in "createPoints".
// Make "scales" persistent first.

var scalePoints = function scalePoints(series, scales) {
  var transform = series.getPointTransformer(_objectSpread({}, series, {
    argumentScale: scales[ARGUMENT_DOMAIN],
    valueScale: scales[getValueDomainName(series.scaleName)]
  }));
  return _objectSpread({}, series, {
    points: series.points.map(transform)
  });
};

var scaleSeriesPoints = function scaleSeriesPoints(series, scales) {
  return series.map(function (seriesItem) {
    return scalePoints(seriesItem, scales);
  });
};

// knowledge about "getPointTransformer" and "path" functions behavior.

var buildSeriesToStackMap = function buildSeriesToStackMap(stacks) {
  var result = {};
  stacks.forEach(function (_ref, i) {
    var series = _ref.series;
    series.forEach(function (name) {
      result[name] = i;
    });
  });
  return result;
};

var getStackedPointTransformer = function getStackedPointTransformer(getPointTransformer) {
  var wrapper = function wrapper(series) {
    var transform = getPointTransformer(series);
    var valueScale = series.valueScale;
    return function (point) {
      var ret = transform(point);
      ret.y1 = valueScale(point.value0);
      return ret;
    };
  }; // Preserve static fields of original transformer.


  Object.assign(wrapper, getPointTransformer);
  return wrapper;
}; // TODO: Temporary - see corresponding note in *computeDomains*.


var getValueDomain = function getValueDomain(points) {
  var items = [];
  points.forEach(function (point) {
    items.push(point.value, point.value0);
  });
  return items;
};

var collectStacks = function collectStacks(seriesList, seriesToStackMap) {
  var stacksKeys = {};
  var seriesPositions = {};
  seriesList.forEach(function (_ref2) {
    var name = _ref2.name,
        valueField = _ref2.valueField;
    var stackId = seriesToStackMap[name];

    if (stackId === undefined) {
      return;
    }

    if (!stacksKeys[stackId]) {
      stacksKeys[stackId] = [];
    }

    seriesPositions[name] = stacksKeys[stackId].length;
    stacksKeys[stackId].push(valueField);
  }); // Stack cannot consist of single series.

  Object.keys(stacksKeys).forEach(function (stackId) {
    if (stacksKeys[stackId].length === 1) {
      delete stacksKeys[stackId];
    }
  });
  return [stacksKeys, seriesPositions];
};

var getStackedData = function getStackedData(stacksKeys, dataItems, offset, order) {
  var result = {};
  Object.keys(stacksKeys).forEach(function (stackId) {
    result[stackId] = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["stack"])().keys(stacksKeys[stackId]).order(order).offset(offset)(dataItems);
  });
  return result;
};

var buildStackedSeries = function buildStackedSeries(series, dataItems) {
  var points = series.points.map(function (point) {
    var _dataItems$point$inde = _slicedToArray(dataItems[point.index], 2),
        value0 = _dataItems$point$inde[0],
        value = _dataItems$point$inde[1];

    return _objectSpread({}, point, {
      value: value,
      value0: value0
    });
  });

  var stackedSeries = _objectSpread({}, series, {
    points: points
  });

  if (series.getPointTransformer.isStartedFromZero) {
    stackedSeries.getPointTransformer = getStackedPointTransformer(series.getPointTransformer);
    stackedSeries.getValueDomain = getValueDomain;
  }

  return stackedSeries;
};

var applyStacking = function applyStacking(seriesList, dataItems, seriesToStackMap, offset, order) {
  var _collectStacks = collectStacks(seriesList, seriesToStackMap),
      _collectStacks2 = _slicedToArray(_collectStacks, 2),
      stacksKeys = _collectStacks2[0],
      seriesPositions = _collectStacks2[1];

  if (Object.keys(stacksKeys).length === 0) {
    return seriesList;
  }

  var stackedData = getStackedData(stacksKeys, dataItems, offset, order);
  return seriesList.map(function (seriesItem) {
    var stackId = seriesToStackMap[seriesItem.name];
    var stackData = stackedData[stackId];

    if (!stackData) {
      return seriesItem;
    }

    var position = seriesPositions[seriesItem.name];
    return buildStackedSeries(seriesItem, stackData[position]);
  });
};

var getGroupName = function getGroupName(series, i, seriesToStackMap) {
  var stackId = seriesToStackMap[series.name];
  return stackId >= 0 ? String(stackId) : "group-".concat(i);
};

var getGroupedPointTransformer = function getGroupedPointTransformer(getPointTransformer, groupCount, groupOffset) {
  var wrapper = function wrapper(series) {
    var transform = getPointTransformer(series);
    var barWidth = series.barWidth;
    var widthCoeff = 1 / groupCount;
    var offsetCoeff = -(1 - barWidth) / 2 + groupOffset + widthCoeff * (1 - barWidth) / 2;
    return function (point) {
      var ret = transform(point);
      ret.x += ret.width / barWidth * offsetCoeff;
      ret.width *= widthCoeff;
      return ret;
    };
  }; // Preserve static fields of original transformer.


  Object.assign(wrapper, getPointTransformer);
  return wrapper;
};

var applyGrouping = function applyGrouping(seriesList, seriesToStackMap) {
  var groups = new Set();
  seriesList.forEach(function (seriesItem, i) {
    if (seriesItem.getPointTransformer.isBroad) {
      groups.add(getGroupName(seriesItem, i, seriesToStackMap));
    }
  }); // There cannot be single group.

  if (groups.size < 2) {
    return seriesList;
  }

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleBand"])().domain(Array.from(groups)).range([0, 1]);
  return seriesList.map(function (seriesItem, i) {
    if (!seriesItem.getPointTransformer.isBroad) {
      return seriesItem;
    }

    var getPointTransformer = getGroupedPointTransformer(seriesItem.getPointTransformer, groups.size, scale(getGroupName(seriesItem, i, seriesToStackMap)));
    return _objectSpread({}, seriesItem, {
      getPointTransformer: getPointTransformer
    });
  });
};

var getStackedSeries = function getStackedSeries(seriesList, dataItems, _ref3) {
  var stacks = _ref3.stacks,
      offset = _ref3.offset,
      order = _ref3.order;
  var map = buildSeriesToStackMap(stacks);
  var stackedSeriesList = applyStacking(seriesList, dataItems, map, offset, order);
  var groupedSeriesList = applyGrouping(stackedSeriesList, map);
  return groupedSeriesList;
};

var ANIMATIONS = Symbol('animation');

var addKeyframe = function addKeyframe(name, def) {
  if (typeof document === 'undefined') {
    return;
  }

  var head = document.getElementsByTagName('head')[0]; // eslint-disable-line no-undef

  var style = Array.from(head.getElementsByTagName('style')).find(function (node) {
    return node.dataset[ANIMATIONS];
  });

  if (!style) {
    style = document.createElement('style'); // eslint-disable-line no-undef

    style.type = 'text/css';
    style.dataset[ANIMATIONS] = true;
    head.appendChild(style);
  }

  var content = style.textContent;

  if (!content.includes(name)) {
    style.textContent += "\n@keyframes ".concat(name, " ").concat(def, "\n");
  }
};

var getAreaAnimationName = function getAreaAnimationName() {
  var name = 'animation_transform';
  addKeyframe(name, '{ from { transform: scaleY(0); } }');
  return name;
};

var getScatterAnimationName = function getScatterAnimationName() {
  var name = 'animation_scatter';
  addKeyframe(name, '{ 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1 } }');
  return name;
};

var getPieAnimationName = function getPieAnimationName() {
  var name = 'animation_pie';
  addKeyframe(name, '{ from { transform: scale(0); } }');
  return name;
};

var getDefaultAreaAnimationOptions = function getDefaultAreaAnimationOptions() {
  return '1s';
};

var getDefaultPieAnimationOptions = function getDefaultPieAnimationOptions(_ref) {
  var index = _ref.index;
  return "".concat(0.7 + index * 0.1, "s");
};

var getAreaAnimationStyle = function getAreaAnimationStyle(scales) {
  var animationStyle = {
    transformOrigin: "0px ".concat(scales.yScale.copy().clamp(true)(0), "px")
  };
  var options = getDefaultAreaAnimationOptions();
  return _objectSpread({
    animation: "".concat(getAreaAnimationName(), " ").concat(options)
  }, animationStyle);
};
var getPieAnimationStyle = function getPieAnimationStyle(scales, point) {
  var options = getDefaultPieAnimationOptions(point);
  return {
    animation: "".concat(getPieAnimationName(), " ").concat(options)
  };
};
var getScatterAnimationStyle = function getScatterAnimationStyle() {
  var options = getDefaultAreaAnimationOptions();
  return {
    animation: "".concat(getScatterAnimationName(), " ").concat(options)
  };
};
var buildAnimatedStyleGetter = function buildAnimatedStyleGetter(style, getAnimationStyle, scales, point) {
  var animationStyle = getAnimationStyle(scales, point);
  return _objectSpread({}, animationStyle, style);
};

// Comparing by reference is not an option as Tracker always sends new objects.
// Tracker cannot persist references as it actually operates with simple scalars
// and constructs objects to provide info in a slightly more suitable way.
var compareTargets = function compareTargets(target1, target2) {
  return target1.series === target2.series && target1.point === target2.point;
}; // If *currentTarget* is among *targets* then it has priority but only while its distance
// is not significantly greater (DISTANCE_PRIORITY_RATIO) than that of the best candidate.


var selectTarget = function selectTarget(targets, currentTarget) {
  var candidate = targets[0];

  if (!currentTarget) {
    return candidate;
  }

  if (!candidate) {
    return null;
  }

  return compareTargets(candidate, currentTarget) ? undefined : candidate;
};

var processPointerMove = function processPointerMove(targets, currentTarget, notify) {
  var nextTarget = selectTarget(targets, currentTarget);

  if (nextTarget === undefined) {
    return undefined;
  }

  if (notify) {
    notify(nextTarget);
  }

  return nextTarget;
};

var getParameters = function getParameters(series, target) {
  var currentSeries = series.find(function (_ref) {
    var name = _ref.name;
    return target.series === name;
  });
  var item = currentSeries.points.find(function (point) {
    return point.index === target.point;
  });
  return {
    element: currentSeries.getPointTransformer.getTargetElement(item),
    text: "".concat(item.value)
  };
};
var processHandleTooltip = function processHandleTooltip(targets, currentTarget, onTargetItemChange) {
  var filterTargets = targets.filter(function (target) {
    return target.point !== undefined;
  });
  return processPointerMove(filterTargets, currentTarget, onTargetItemChange);
};

var getSegmentLength = function getSegmentLength(dx, dy) {
  return Math.sqrt(dx * dx + dy * dy);
}; // *distance* is a normalized distance to point.
// It belongs to [0, Infinity):
//  = 0 - at point center
//  = 1 - at point border
//  > 1 - outside point
// This function is called from event handlers (when DOM is available) -
// *window.document* can be accessed safely.


var createContext = function createContext() {
  return document.createElement('canvas').getContext('2d');
}; // eslint-disable-line no-undef
// For a start using browser canvas will suffice.
// However a better and more clean solution should be found.
// Can't d3 perform hit testing?


var createCanvasAbusingHitTester = function createCanvasAbusingHitTester(makePath, points) {
  var ctx = createContext();
  var path = makePath();
  path.context(ctx);
  path(points);
  return function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return ctx.isPointInPath(x, y);
  };
};

var LINE_POINT_SIZE = 20;
var LINE_TOLERANCE = 10;

var getContinuousPointDistance = function getContinuousPointDistance(_ref3, _ref4) {
  var _ref5 = _slicedToArray(_ref3, 2),
      px = _ref5[0],
      py = _ref5[1];

  var x = _ref4.x,
      y = _ref4.y;
  return getSegmentLength(px - x, py - y);
};

var createContinuousSeriesHitTesterCreator = function createContinuousSeriesHitTesterCreator(makePath) {
  return function (points) {
    var fallbackHitTest = createCanvasAbusingHitTester(makePath, points);
    return function (target) {
      var minDistance = Number.MAX_VALUE;
      var minIndex;
      var list = [];
      points.forEach(function (point, i) {
        var distance = getContinuousPointDistance(target, point);

        if (distance <= LINE_POINT_SIZE) {
          list.push({
            index: point.index,
            distance: distance
          });
        }

        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }); // This is special case for continuous series - if no point is actually hit
      // then the closest point to the pointer position is picked.

      if (!list.length && fallbackHitTest(target)) {
        list.push({
          index: points[minIndex].index,
          distance: minDistance
        });
      }

      return list.length ? {
        points: list
      } : null;
    };
  };
};

var createPointsEnumeratingHitTesterCreator = function createPointsEnumeratingHitTesterCreator(hitTestPoint) {
  return function (points) {
    return function (target) {
      var list = [];
      points.forEach(function (point) {
        var status = hitTestPoint(target, point);

        if (status) {
          list.push({
            index: point.index,
            distance: status.distance
          });
        }
      });
      return list.length ? {
        points: list
      } : null;
    };
  };
};

var createAreaHitTester = createContinuousSeriesHitTesterCreator(function () {
  var path = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
  path.x(dArea.x());
  path.y1(dArea.y1());
  path.y0(dArea.y0());
  return path;
});
var createLineHitTester = createContinuousSeriesHitTesterCreator(function () {
  var path = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
  var getY = dLine.y();
  path.x(dLine.x());
  path.y1(function (point) {
    return getY(point) - LINE_TOLERANCE;
  });
  path.y0(function (point) {
    return getY(point) + LINE_TOLERANCE;
  });
  return path;
});
var createSplineHitTester = createContinuousSeriesHitTesterCreator(function () {
  var path = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
  var getY = dSpline.y();
  path.x(dSpline.x());
  path.y1(function (point) {
    return getY(point) - LINE_TOLERANCE;
  });
  path.y0(function (point) {
    return getY(point) + LINE_TOLERANCE;
  });
  path.curve(dSpline.curve());
  return path;
});

var hitTestRect = function hitTestRect(dx, dy, halfX, halfY) {
  return Math.abs(dx) <= halfX && Math.abs(dy) <= halfY ? {
    distance: getSegmentLength(dx, dy)
  } : null;
}; // Some kind of binary search can be used here as bars can be ordered along argument axis.


var createBarHitTester = createPointsEnumeratingHitTesterCreator(function (_ref6, point) {
  var _ref7 = _slicedToArray(_ref6, 2),
      px = _ref7[0],
      py = _ref7[1];

  var xCenter = point.x + point.width / 2;
  var yCenter = (point.y + point.y1) / 2;
  var halfWidth = point.width / 2;
  var halfHeight = Math.abs(point.y - point.y1) / 2;
  return hitTestRect(px - xCenter, py - yCenter, halfWidth, halfHeight);
}); // TODO: Use actual point size here!

var createScatterHitTester = createPointsEnumeratingHitTesterCreator(function (_ref8, _ref9) {
  var _ref10 = _slicedToArray(_ref8, 2),
      px = _ref10[0],
      py = _ref10[1];

  var x = _ref9.x,
      y = _ref9.y;
  var distance = getSegmentLength(px - x, py - y);
  return distance <= 10 ? {
    distance: distance
  } : null;
});

var mapAngleTod3 = function mapAngleTod3(angle) {
  var ret = angle + Math.PI / 2;
  return ret >= 0 ? ret : ret + Math.PI * 2;
}; // Some kind of binary search can be used here as pies can be ordered along angle axis.


var createPieHitTester = createPointsEnumeratingHitTesterCreator(function (_ref11, _ref12) {
  var _ref13 = _slicedToArray(_ref11, 2),
      px = _ref13[0],
      py = _ref13[1];

  var x = _ref12.x,
      y = _ref12.y,
      innerRadius = _ref12.innerRadius,
      outerRadius = _ref12.outerRadius,
      startAngle = _ref12.startAngle,
      endAngle = _ref12.endAngle;
  var rCenter = (innerRadius + outerRadius) / 2;
  var angleCenter = (startAngle + endAngle) / 2;
  var halfRadius = (outerRadius - innerRadius) / 2;
  var halfAngle = Math.abs(startAngle - endAngle) / 2;
  var dx = px - x;
  var dy = py - y;
  var r = getSegmentLength(dx, dy);
  var angle = mapAngleTod3(Math.atan2(dy, dx)); // This is not a correct distance calculation but for now it will suffice.
  // For Pie series it would not be actually used.

  return hitTestRect(r - rCenter, angle - angleCenter, halfRadius, halfAngle);
});

var buildFilter = function buildFilter(targets) {
  var result = {};
  targets.forEach(function (_ref14) {
    var series = _ref14.series,
        point = _ref14.point;
    (result[series] = result[series] || new Set()).add(point);
  });
  return result;
};

var changeSeriesState = function changeSeriesState(seriesList, targets, state) {
  if (targets.length === 0) {
    return seriesList;
  }

  var filter = buildFilter(targets);
  var matches = 0;
  var result = seriesList.map(function (seriesItem) {
    var set = filter[seriesItem.name];

    if (!set) {
      return seriesItem;
    }

    matches += 1;
    var props = {
      state: state
    };

    if (set.size) {
      props.points = seriesItem.points.map(function (point) {
        return set.has(point.index) ? _objectSpread({}, point, {
          state: state
        }) : point;
      });
    }

    return _objectSpread({}, seriesItem, props);
  }); // This is to prevent false rerenders.

  return matches > 0 ? result : seriesList;
};

var getDefaultLegendItems = function getDefaultLegendItems(series) {
  return series.map(function (_ref) {
    var text = _ref.uniqueName,
        color = _ref.color;
    return {
      text: text,
      color: color
    };
  });
};

var getPieLegendItems = function getPieLegendItems(series) {
  return series[0].points.map(function (_ref2) {
    var text = _ref2.argument,
        color = _ref2.color;
    return {
      text: text,
      color: color
    };
  });
}; // The function supports special case when there is single Pie series.
// There is no common way to tell if series is PieSeries -
// checking `radius` props will suffice for now.


var isSinglePieSeriesCase = function isSinglePieSeriesCase(series) {
  return series.length === 1 && 'innerRadius' in series[0] && 'outerRadius' in series[0];
};

var getLegendItems = function getLegendItems(series) {
  return (isSinglePieSeriesCase(series) ? getPieLegendItems : getDefaultLegendItems)(series);
};

// This function is called from event handlers (when DOM is available) -
// *window* can be accessed safely.
var getEventCoords = function getEventCoords(e) {
  var _window = window,
      pageXOffset = _window.pageXOffset,
      pageYOffset = _window.pageYOffset; // eslint-disable-line no-undef

  var _e$currentTarget$getB = e.currentTarget.getBoundingClientRect(),
      left = _e$currentTarget$getB.left,
      top = _e$currentTarget$getB.top;

  return [e.clientX - left - pageXOffset, e.clientY - top - pageYOffset];
};

var DISTANCE_THRESHOLD = 20;

var compareHitTargets = function compareHitTargets(t1, t2) {
  var distanceDelta = t1.distance - t2.distance;

  if (Math.abs(distanceDelta) <= DISTANCE_THRESHOLD) {
    var orderDelta = t2.order - t1.order;
    return orderDelta !== 0 ? orderDelta : distanceDelta;
  }

  return distanceDelta;
};

var buildEventHandler = function buildEventHandler(seriesList, handlers) {
  var hitTesters = null;

  var createHitTesters = function createHitTesters() {
    var obj = {};
    seriesList.forEach(function (seriesItem) {
      obj[seriesItem.symbolName] = seriesItem.createHitTester(seriesItem.points);
    });
    return obj;
  };

  return function (e) {
    var location = getEventCoords(e);
    hitTesters = hitTesters || createHitTesters();
    var targets = [];
    seriesList.forEach(function (_ref) {
      var series = _ref.name,
          order = _ref.index,
          symbolName = _ref.symbolName;
      var status = hitTesters[symbolName](location);

      if (status) {
        targets.push.apply(targets, _toConsumableArray(status.points.map(function (point) {
          return {
            series: series,
            point: point.index,
            distance: point.distance,
            order: order
          };
        })));
      }
    });
    targets.sort(compareHitTargets);
    var arg = {
      location: location,
      targets: targets,
      event: e.nativeEvent
    };
    handlers.forEach(function (handler) {
      return handler(arg);
    });
  };
};

var buildLeaveEventHandler = function buildLeaveEventHandler(handlers) {
  return function (e) {
    var location = getEventCoords(e);
    var arg = {
      location: location,
      targets: []
    };
    handlers.forEach(function (handler) {
      return handler(arg);
    });
  };
};

var buildEventHandlers = function buildEventHandlers(seriesList, _ref2) {
  var clickHandlers = _ref2.clickHandlers,
      pointerMoveHandlers = _ref2.pointerMoveHandlers;
  var handlers = {};

  if (clickHandlers.length) {
    handlers.click = buildEventHandler(seriesList, clickHandlers);
  }

  if (pointerMoveHandlers.length) {
    handlers.pointermove = buildEventHandler(seriesList, pointerMoveHandlers);
    handlers.pointerleave = buildLeaveEventHandler(pointerMoveHandlers);
  }

  return handlers;
};


//# sourceMappingURL=dx-chart-core.es.js.map


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/array.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/array.js ***!
  \***********************************************************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ascending.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ascending.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/bisect.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/bisect.js ***!
  \************************************************************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/bisector.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/bisector.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/constant.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/constant.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/cross.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/cross.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cross; });
function length(array) {
  return array.length | 0;
}

function empty(length) {
  return !(length > 0);
}

function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}

function reducer(reduce) {
  return values => reduce(...values);
}

function cross(...values) {
  const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(length);
  const j = values.length - 1;
  const index = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index.map((j, i) => values[i][j]));
    let i = j;
    while (++index[i] === lengths[i]) {
      if (i === 0) return reduce ? product.map(reduce) : product;
      index[i--] = 0;
    }
  }
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/descending.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/descending.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/deviation.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/deviation.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deviation; });
/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/variance.js");


function deviation(values, valueof) {
  const v = Object(_variance__WEBPACK_IMPORTED_MODULE_0__["default"])(values, valueof);
  return v ? Math.sqrt(v) : v;
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/extent.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/extent.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && value >= value) {
        if (min === undefined) {
          min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && value >= value) {
        if (min === undefined) {
          min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/group.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/group.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return group; });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/identity.js");
/* harmony import */ var _rollup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rollup */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/rollup.js");



function group(values, ...keys) {
  return Object(_rollup__WEBPACK_IMPORTED_MODULE_1__["default"])(values, _identity__WEBPACK_IMPORTED_MODULE_0__["default"], ...keys);
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/histogram.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/histogram.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/identity.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);

    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/identity.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/identity.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/index.js ***!
  \***********************************************************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, group, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, quickselect, range, rollup, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cross */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./descending */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deviation */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extent */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _group__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./histogram */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/histogram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _histogram__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./threshold/freedmanDiaconis */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_scott__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold/scott */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./max */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mean */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _median__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./median */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./merge */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./min */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pairs */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _permute__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./permute */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quantile */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _quickselect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quickselect */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/quickselect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickselect", function() { return _quickselect__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./range */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _rollup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rollup */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/rollup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return _rollup__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./scan */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shuffle */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sum */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ticks */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks__WEBPACK_IMPORTED_MODULE_26__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks__WEBPACK_IMPORTED_MODULE_26__["tickStep"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./transpose */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./variance */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./zip */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip__WEBPACK_IMPORTED_MODULE_29__["default"]; });

































/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/max.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/max.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null
          && value >= value
          && (max === undefined || max < value)) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && value >= value
          && (max === undefined || max < value)) {
        max = value;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/mean.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/mean.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mean; });
function mean(values, valueof) {
  let count = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  }
  if (count) return sum / count;
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/median.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/median.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantile */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/quantile.js");
/* harmony import */ var _quickselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quickselect */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/quickselect.js");



function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!values.length) return;
  const n = values.length;
  const i = n >> 1;
  Object(_quickselect__WEBPACK_IMPORTED_MODULE_1__["default"])(values, i - 1, 0);
  if ((n & 1) === 0) Object(_quickselect__WEBPACK_IMPORTED_MODULE_1__["default"])(values, i, i);
  return Object(_quantile__WEBPACK_IMPORTED_MODULE_0__["default"])(values, 0.5);
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/merge.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/merge.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return merge; });
function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}

function merge(arrays) {
  return Array.from(flatten(arrays));
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/min.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/min.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null
          && value >= value
          && (min === undefined || min > value)) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && value >= value
          && (min === undefined || min > value)) {
        min = value;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/number.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/number.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/pairs.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/pairs.js ***!
  \***********************************************************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
function pairs(values, pairof = pair) {
  const pairs = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs;
}

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/permute.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/permute.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/quantile.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/quantile.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/number.js");


function quantile(values, p, valueof = _number__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/quickselect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/quickselect.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickselect; });
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ascending.js");


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = _ascending__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/range.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/range.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/rollup.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/rollup.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rollup; });
function dogroup(values, keyof) {
  const map = new Map();
  let index = -1;
  for (const value of values) {
    const key = keyof(value, ++index, values);
    const group = map.get(key);
    if (group) group.push(value);
    else map.set(key, [value]);
  }
  return map;
}

function rollup(values, reduce, ...keys) {
  return (function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const map = dogroup(values, keys[i]);
    return new Map(Array.from(map, ([k, v]) => [k, regroup(v, i + 1)]));
  })(values, 0);
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/scan.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/scan.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scan; });
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ascending.js");


function scan(values, compare = _ascending__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let min;
  let minIndex;
  let index = -1;
  for (const value of values) {
    ++index;
    if (minIndex === undefined
        ? compare(value, value) === 0
        : compare(value, min) < 0) {
      min = value;
      minIndex = index;
    }
  }
  return minIndex;
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/shuffle.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/shuffle.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shuffle; });
function shuffle(array, i0 = 0, i1 = array.length) {
  var m = i1 - (i0 = +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/sum.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/sum.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sum; });
function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/array.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ascending */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quantile */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/quantile.js");





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(values, _number__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.75) - Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/threshold/scott.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/threshold/scott.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deviation */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/deviation.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation__WEBPACK_IMPORTED_MODULE_0__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/threshold/sturges.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/threshold/sturges.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ticks.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/ticks.js ***!
  \***********************************************************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/transpose.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/transpose.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/variance.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/variance.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return variance; });
function variance(values, valueof) {
  let count = 0;
  let delta;
  let mean = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  }
  if (count > 1) return sum / (count - 1);
}


/***/ }),

/***/ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/zip.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/zip.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose */ "./node_modules/@devexpress/dx-chart-core/node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/@devexpress/dx-core/dist/dx-core.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/@devexpress/dx-core/dist/dx-core.es.js ***!
  \*************************************************************/
/*! exports provided: PluginHost, EventEmitter, memoize, shallowEqual, argumentsShallowEqual, getMessagesFormatter, createClickHandlers, isEdgeBrowser, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginHost", function() { return PluginHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return EventEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsShallowEqual", function() { return argumentsShallowEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessagesFormatter", function() { return getMessagesFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClickHandlers", function() { return createClickHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEdgeBrowser", function() { return isEdgeBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuad", function() { return easeInQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuad", function() { return easeOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function() { return easeInCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCubic", function() { return easeOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return easeInOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuart", function() { return easeInQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuart", function() { return easeOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function() { return easeInOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuint", function() { return easeInQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuint", function() { return easeOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuint", function() { return easeInOutQuint; });
/**
 * Bundle of @devexpress/dx-core
 * Generated: 2018-12-25
 * Version: 1.10.0
 * License: https://js.devexpress.com/Licensing
 */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

var DELAY = 200;

var compare = function compare(a, b) {
  var aPosition = a.position();
  var bPosition = b.position();

  for (var i = 0; i < Math.min(aPosition.length, bPosition.length); i += 1) {
    if (aPosition[i] < bPosition[i]) return -1;
    if (aPosition[i] > bPosition[i]) return 1;
  }

  return aPosition.length - bPosition.length;
};

var insertPlugin = function insertPlugin(array, newItem) {
  var result = array.slice();
  var nextItemIndex = array.findIndex(function (item) {
    return compare(newItem, item) <= 0;
  });
  var targetIndex = nextItemIndex < 0 ? array.length : nextItemIndex;
  var alreadyExists = targetIndex >= 0 && targetIndex < array.length && compare(newItem, array[targetIndex]) === 0;
  result.splice(targetIndex, alreadyExists ? 1 : 0, newItem);
  return result;
};
var createClickHandlers = function createClickHandlers(click, dblClick) {
  var timeoutId;
  var events = {};

  if (click) {
    events.onClick = function (e) {
      if (!timeoutId) {
        timeoutId = setTimeout(function () {
          clearTimeout(timeoutId);
          click(e);
        }, DELAY);
      }
    };
  }

  if (dblClick) {
    events.onDoubleClick = function (e) {
      clearTimeout(timeoutId);
      dblClick(e);
    };
  }

  return events;
};
/* globals window:true */

var isEdgeBrowser = function isEdgeBrowser() {
  return /Edge/.test(window.navigator.userAgent);
};

var getDependencyError = function getDependencyError(pluginName, dependencyName) {
  return new Error("The '".concat(pluginName, "' plugin requires '").concat(dependencyName, "' to be defined before it."));
};

var PluginHost =
/*#__PURE__*/
function () {
  function PluginHost() {
    _classCallCheck(this, PluginHost);

    this.plugins = [];
    this.subscriptions = new Set();
    this.gettersCache = {};
  }

  _createClass(PluginHost, [{
    key: "ensureDependencies",
    value: function ensureDependencies() {
      var defined = new Set();
      var knownOptionals = new Map();
      this.plugins.filter(function (plugin) {
        return plugin.container;
      }).forEach(function (plugin) {
        if (knownOptionals.has(plugin.name)) {
          throw getDependencyError(knownOptionals.get(plugin.name), plugin.name);
        }

        plugin.dependencies.forEach(function (dependency) {
          if (defined.has(dependency.name)) return;

          if (dependency.optional) {
            if (!knownOptionals.has(dependency.name)) {
              knownOptionals.set(dependency.name, plugin.name);
            }

            return;
          }

          throw getDependencyError(plugin.name, dependency.name);
        });
        defined.add(plugin.name);
      });
    }
  }, {
    key: "registerPlugin",
    value: function registerPlugin(plugin) {
      this.plugins = insertPlugin(this.plugins, plugin);
      this.cleanPluginsCache();
    }
  }, {
    key: "unregisterPlugin",
    value: function unregisterPlugin(plugin) {
      this.plugins.splice(this.plugins.indexOf(plugin), 1);
      this.cleanPluginsCache();
    }
  }, {
    key: "cleanPluginsCache",
    value: function cleanPluginsCache() {
      this.validationRequired = true;
      this.gettersCache = {};
      this.knownKeysCache = {};
    }
  }, {
    key: "knownKeys",
    value: function knownKeys(postfix) {
      if (!this.knownKeysCache[postfix]) {
        this.knownKeysCache[postfix] = Array.from(this.plugins.map(function (plugin) {
          return Object.keys(plugin);
        }).map(function (keys) {
          return keys.filter(function (key) {
            return key.endsWith(postfix);
          })[0];
        }).filter(function (key) {
          return !!key;
        }).reduce(function (acc, key) {
          return acc.add(key);
        }, new Set())).map(function (key) {
          return key.replace(postfix, '');
        });
      }

      return this.knownKeysCache[postfix];
    }
  }, {
    key: "collect",
    value: function collect(key, upTo) {
      var _this = this;

      if (this.validationRequired) {
        this.ensureDependencies();
        this.validationRequired = false;
      }

      if (!this.gettersCache[key]) {
        this.gettersCache[key] = this.plugins.map(function (plugin) {
          return plugin[key];
        }).filter(function (plugin) {
          return !!plugin;
        });
      }

      if (!upTo) return this.gettersCache[key];
      var upToIndex = this.plugins.indexOf(upTo);
      return this.gettersCache[key].filter(function (getter) {
        var pluginIndex = _this.plugins.findIndex(function (plugin) {
          return plugin[key] === getter;
        });

        return pluginIndex < upToIndex;
      });
    }
  }, {
    key: "get",
    value: function get(key, upTo) {
      var plugins = this.collect(key, upTo);
      if (!plugins.length) return undefined;
      var result = plugins[0]();
      plugins.slice(1).forEach(function (plugin) {
        result = plugin(result);
      });
      return result;
    }
  }, {
    key: "registerSubscription",
    value: function registerSubscription(subscription) {
      this.subscriptions.add(subscription);
    }
  }, {
    key: "unregisterSubscription",
    value: function unregisterSubscription(subscription) {
      this.subscriptions.delete(subscription);
    }
  }, {
    key: "broadcast",
    value: function broadcast(event, message) {
      this.subscriptions.forEach(function (subscription) {
        return subscription[event] && subscription[event](message);
      });
    }
  }]);

  return PluginHost;
}();

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.handlers = [];
  }

  _createClass(EventEmitter, [{
    key: "emit",
    value: function emit(e) {
      this.handlers.forEach(function (handler) {
        return handler(e);
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(handler) {
      this.handlers.push(handler);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(handler) {
      this.handlers.splice(this.handlers.indexOf(handler), 1);
    }
  }]);

  return EventEmitter;
}();

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  var hasOwn = Object.prototype.hasOwnProperty;

  for (var i = 0; i < keysA.length; i += 1) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }

    var valA = objA[keysA[i]];
    var valB = objB[keysA[i]];

    if (valA !== valB) {
      return false;
    }
  }

  return true;
}
function argumentsShallowEqual(prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  for (var i = 0; i < prev.length; i += 1) {
    if (prev[i] !== next[i]) {
      return false;
    }
  }

  return true;
}

var memoize = function memoize(func) {
  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (lastArgs === null || !argumentsShallowEqual(lastArgs, args)) {
      lastResult = func.apply(void 0, args);
    }

    lastArgs = args;
    return lastResult;
  };
};

var easeInQuad = function easeInQuad(t) {
  return t * t;
};
var easeOutQuad = function easeOutQuad(t) {
  return t * (2 - t);
};
var easeInOutQuad = function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
var easeInCubic = function easeInCubic(t) {
  return t * t * t;
};
var easeOutCubic = function easeOutCubic(t) {
  return (t - 1) * (t - 1) * (t - 1) + 1;
};
var easeInOutCubic = function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
var easeInQuart = function easeInQuart(t) {
  return t * t * t * t;
};
var easeOutQuart = function easeOutQuart(t) {
  return 1 - (t - 1) * (t - 1) * (t - 1) * (t - 1);
};
var easeInOutQuart = function easeInOutQuart(t) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (t - 1) * (t - 1) * (t - 1) * (t - 1);
};
var easeInQuint = function easeInQuint(t) {
  return t * t * t * t * t;
};
var easeOutQuint = function easeOutQuint(t) {
  return 1 + (t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1);
};
var easeInOutQuint = function easeInOutQuint(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1);
};

var processPattern = function processPattern(pattern, params) {
  return Object.keys(params).reduce(function (msg, key) {
    return msg.replace("{".concat(key, "}"), params[key]);
  }, pattern);
};

var getMessagesFormatter = function getMessagesFormatter(messages) {
  return function (key, params) {
    var message = messages[key];

    if (typeof message === 'function') {
      return message(params);
    }

    if (params) {
      return processPattern(message, params);
    }

    return message;
  };
};


//# sourceMappingURL=dx-core.es.js.map


/***/ }),

/***/ "./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-react-chart-material-ui/dist/dx-react-chart-material-ui.es.js ***!
  \***************************************************************************************************/
/*! exports provided: PieSeries, BarSeries, LineSeries, AreaSeries, SplineSeries, Chart, Legend, Title, ScatterSeries, ValueAxis, ArgumentAxis, Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterSeries", function() { return ScatterSeries$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueAxis", function() { return ValueAxis$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentAxis", function() { return ArgumentAxis$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip$1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-core */ "./node_modules/@devexpress/dx-react-core/dist/dx-react-core.es.js");
/* harmony import */ var _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart */ "./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieSeries", function() { return _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarSeries", function() { return _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["BarSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineSeries", function() { return _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaSeries", function() { return _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["AreaSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplineSeries", function() { return _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["SplineSeries"]; });

/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/Popper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__);
/**
 * Bundle of @devexpress/dx-react-chart-material-ui
 * Generated: 2018-12-25
 * Version: 1.10.0
 * License: https://js.devexpress.com/Licensing
 */
















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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var getBorderColor = function getBorderColor(theme) {
  return theme.palette.type === 'light' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__["lighten"])(Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__["fade"])(theme.palette.divider, 1), 0.88) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__["darken"])(Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__["fade"])(theme.palette.divider, 1), 0.68);
};
var withClassName = function withClassName() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var setClassName = function setClassName(_ref) {
    var className = _ref.className,
        classes = _ref.classes,
        restProps = _objectWithoutProperties(_ref, ["className", "classes"]);

    return _objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.root, className)
    }, restProps);
  }; // TODO: First candidate to `compose` util?


  return function (Target) {
    return _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"].apply(void 0, args)(Object(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["withPatchedProps"])(setClassName)(Target));
  };
};

var styles = function styles(theme) {
  var _theme$typography = theme.typography,
      fontFamily = _theme$typography.fontFamily,
      fontSize = _theme$typography.fontSize,
      fontWeightLight = _theme$typography.fontWeightLight;
  return {
    root: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: fontWeightLight,
      display: 'flex',
      flexDirection: 'column',
      padding: '10px'
    }
  };
};

var Root = withClassName(styles)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Chart"].Root);

var styles$1 = function styles(theme) {
  var fontFamily = theme.typography.fontFamily;
  return {
    root: {
      fill: theme.palette.text.secondary,
      fontFamily: fontFamily,
      fontSize: 12,
      fontWeight: 400
    }
  };
};

var Label = withClassName(styles$1)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Chart"].Label);

var palette = ['#42A5F5', '#FF7043', '#9CCC65', '#FFCA28', '#26A69A', '#EC407A'];

var ChartWithPalette = function ChartWithPalette(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Chart"], props, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Palette"], {
    scheme: palette
  }), children);
};

ChartWithPalette.components = _devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Chart"].components;
 true ? ChartWithPalette.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired
} : undefined;
var Chart$1 = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Root: Root
})(ChartWithPalette);
Chart$1.Label = Label;

var styles$2 = function styles() {
  return {
    root: {
      paddingTop: 16,
      paddingBottom: 16
    }
  };
};

var Root$1 = withClassName(styles$2, {
  name: 'LegendRoot'
})(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a);

var styles$3 = function styles() {
  return {
    root: {
      fontSize: 14,
      paddingLeft: 8,
      paddingRight: 8
    }
  };
};

var Label$1 = withClassName(styles$3, {
  name: 'LegendLabel'
})(function (_ref) {
  var text = _ref.text,
      restProps = _objectWithoutProperties(_ref, ["text"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8___default.a, restProps, text);
});

var styles$4 = function styles(theme) {
  return {
    root: {
      alignItems: 'center',
      paddingTop: theme.spacing.unit * 0.5,
      paddingBottom: theme.spacing.unit * 0.5
    }
  };
};

var Item = withClassName(styles$4, {
  name: 'LegendItem'
})(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a);

var Legend$1 = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Root: Root$1,
  Item: Item,
  Label: Label$1
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Legend"]);

var styles$5 = function styles() {
  return {
    root: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '20px'
    }
  };
};

var Text = withClassName(styles$5, {
  name: 'Title'
})(function (_ref) {
  var text = _ref.text,
      restProps = _objectWithoutProperties(_ref, ["text"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, _extends({
    component: "h3",
    variant: "h5"
  }, restProps), text);
});

var Title$1 = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Text: Text
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Title"]);

var styles$6 = function styles(theme) {
  return {
    point: {
      fill: theme.palette.background.paper
    }
  };
};

var setClassName = function setClassName(_ref) {
  var classes = _ref.classes,
      restProps = _objectWithoutProperties(_ref, ["classes"]);

  if (restProps.state) {
    var className = restProps.className,
        rest = _objectWithoutProperties(restProps, ["className"]);

    return _objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.point, className)
    }, rest);
  }

  return restProps;
};

var Point = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles$6)(Object(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["withPatchedProps"])(setClassName)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ScatterSeries"].Point));

var ScatterSeries$1 = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Point: Point
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ScatterSeries"]);

var styles$7 = function styles() {
  return {
    root: {
      shapeRendering: 'crispEdges'
    }
  };
};

var Root$2 = withClassName(styles$7)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Axis"].Root);

var styles$8 = function styles(theme) {
  return {
    root: {
      stroke: getBorderColor(theme),
      shapeRendering: 'crispEdges'
    }
  };
};

var Tick = withClassName(styles$8)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Axis"].Tick);

var styles$9 = function styles(theme) {
  var fontFamily = theme.typography.fontFamily;
  return {
    root: {
      fill: theme.palette.text.secondary,
      fontFamily: fontFamily,
      fontSize: 12,
      fontWeight: 400,
      backgroundColor: theme.palette.background.paper
    }
  };
};

var Label$2 = withClassName(styles$9)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Axis"].Label);

var styles$a = function styles(theme) {
  return {
    root: {
      stroke: getBorderColor(theme),
      shapeRendering: 'crispEdges'
    }
  };
};

var Line = withClassName(styles$a)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Axis"].Line);

var styles$b = function styles(theme) {
  return {
    root: {
      stroke: getBorderColor(theme),
      shapeRendering: 'crispEdges'
    }
  };
};

var Grid = withClassName(styles$b)(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Axis"].Grid);

var ValueAxis$1 = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Root: Root$2,
  Tick: Tick,
  Label: Label$2,
  Line: Line,
  Grid: Grid
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]);

var ArgumentAxis$1 = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Root: Root$2,
  Tick: Tick,
  Label: Label$2,
  Line: Line,
  Grid: Grid
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["ArgumentAxis"]);

var styles$c = function styles(theme) {
  var unit = theme.spacing.unit;
  var arrowSize = unit * 1.2;
  return {
    popper: {
      zIndex: 1,
      marginBottom: "".concat(arrowSize, "px")
    },
    paper: {
      padding: "".concat(unit * 0.5, "px ").concat(unit, "px")
    },
    arrow: {
      width: "".concat(arrowSize * 5, "px"),
      height: "".concat(arrowSize * 2.5, "px"),
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: "".concat(arrowSize, "px"),
        height: "".concat(arrowSize, "px"),
        background: theme.palette.background.paper,
        transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
        top: 0,
        left: '50%',
        boxShadow: theme.shadows[2]
      }
    }
  };
};

var Overlay = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles$c)(function (_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children,
      target = _ref.target,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "children", "target"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_11___default.a, _extends({
    open: true,
    anchorEl: target,
    placement: "top",
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.popper, className)
  }, restProps), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.paper
  }, children), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes.arrow
  }));
});

var styles$d = function styles(theme) {
  return {
    root: {
      fontSize: 14,
      padding: theme.spacing.unit * 0.5
    }
  };
};

var Content = withClassName(styles$d, {
  name: 'TooltipContent'
})(function (_ref) {
  var text = _ref.text,
      targetItem = _ref.targetItem,
      restProps = _objectWithoutProperties(_ref, ["text", "targetItem"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, restProps, text);
});

var Tooltip$1 = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Overlay: Overlay,
  Content: Content
})(_devexpress_dx_react_chart__WEBPACK_IMPORTED_MODULE_3__["Tooltip"]);


//# sourceMappingURL=dx-react-chart-material-ui.es.js.map


/***/ }),

/***/ "./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-react-chart/dist/dx-react-chart.es.js ***!
  \***************************************************************************/
/*! exports provided: Chart, Legend, Title, Scale, ArgumentScale, ValueScale, Stack, Palette, Animation, AreaSeries, BarSeries, LineSeries, PieSeries, ScatterSeries, SplineSeries, Axis, ArgumentAxis, ValueAxis, Tooltip, withPatchedProps, EventTracker, HoverState, SelectionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return Scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentScale", function() { return ArgumentScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueScale", function() { return ValueScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Palette", function() { return Palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSeries", function() { return AreaSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarSeries", function() { return BarSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineSeries", function() { return LineSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieSeries", function() { return PieSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterSeries", function() { return ScatterSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplineSeries", function() { return SplineSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return Axis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentAxis", function() { return ArgumentAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueAxis", function() { return ValueAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPatchedProps", function() { return withPatchedProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTracker", function() { return EventTracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverState", function() { return HoverState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionState", function() { return SelectionState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-react-core */ "./node_modules/@devexpress/dx-react-core/dist/dx-react-core.es.js");
/* harmony import */ var _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-chart-core */ "./node_modules/@devexpress/dx-chart-core/dist/dx-chart-core.es.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/**
 * Bundle of @devexpress/dx-react-chart
 * Generated: 2018-12-25
 * Version: 1.10.0
 * License: https://js.devexpress.com/Licensing
 */







function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var BasicData = function BasicData(_ref) {
  var data = _ref.data;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
    name: "Basis"
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
    name: "data",
    value: data
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
    name: "domains",
    value: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["defaultDomains"]
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
    name: "series",
    value: []
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
    name: "axes",
    value: []
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
    name: "getAnimatedStyle",
    value: function value(style) {
      return style;
    }
  }));
};
 true ? BasicData.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1__["array"].isRequired
} : undefined;

var getDomains = function getDomains(_ref) {
  var domains = _ref.domains,
      series = _ref.series;
  return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["computeDomains"])(domains, series);
};

var getScales = function getScales(_ref2) {
  var domains = _ref2.domains,
      layouts = _ref2.layouts;
  return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["buildScales"])(domains, layouts.pane);
};

var getSeries = function getSeries(_ref3) {
  var series = _ref3.series,
      scales = _ref3.scales;
  return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["scaleSeriesPoints"])(series, scales);
};

var ChartCore = function ChartCore() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
    name: "domains",
    computed: getDomains
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
    name: "scales",
    computed: getScales
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
    name: "series",
    computed: getSeries
  }));
};

var AxesLayout = function AxesLayout() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
    name: "canvas"
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "center-center",
    style: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-axis-container"),
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"], "-axis")
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-axis")
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["RIGHT"], "-axis")
  })), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "center-axis-container",
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"], "-axis")
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["RIGHT"], "-axis")
  })), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"], "-axis-container"),
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"], "-axis")
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"], "-axis")
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["RIGHT"], "-axis")
  })))));
};

var SpaceFillingRects =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SpaceFillingRects, _React$PureComponent);

  function SpaceFillingRects() {
    _classCallCheck(this, SpaceFillingRects);

    return _possibleConstructorReturn(this, _getPrototypeOf(SpaceFillingRects).apply(this, arguments));
  }

  _createClass(SpaceFillingRects, [{
    key: "render",
    value: function render() {
      var placeholders = this.props.placeholders;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "SpaceFillingRects"
      }, placeholders.map(function (name) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
          name: name,
          key: name
        }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplateConnector"], null, function (_ref) {
          var positions = _ref.layouts;

          var _name$split = name.split('-'),
              _name$split2 = _slicedToArray(_name$split, 3),
              horizontal = _name$split2[1],
              postfix = _name$split2[2];

          var _ref2 = positions[horizontal + (postfix ? "-".concat(postfix) : '')] || {},
              width = _ref2.width;

          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
            id: name,
            style: {
              width: width
            }
          });
        }));
      }));
    }
  }]);

  return SpaceFillingRects;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? SpaceFillingRects.propTypes = {
  placeholders: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]).isRequired
} : undefined;

var DIV_STYLE = {
  flex: 1,
  zIndex: 1,
  position: 'relative',
  width: '100%'
};
var SVG_STYLE = {
  position: 'absolute',
  left: 0,
  top: 0,
  overflow: 'visible'
};

var SizerContainer = function SizerContainer(_ref) {
  var children = _ref.children;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: DIV_STYLE
  }, children);
};

 true ? SizerContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired
} : undefined; // eslint-disable-next-line react/prefer-stateless-function

var PaneLayout =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PaneLayout, _React$PureComponent);

  function PaneLayout() {
    _classCallCheck(this, PaneLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaneLayout).apply(this, arguments));
  }

  _createClass(PaneLayout, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "PaneLayout"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
        name: "canvas"
      }, function (params) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplateConnector"], null, function (_ref2, _ref3) {
          var layouts = _ref2.layouts;
          var changeBBox = _ref3.changeBBox;
          var _layouts$pane = layouts.pane,
              width = _layouts$pane.width,
              height = _layouts$pane.height;
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Sizer"], {
            containerComponent: SizerContainer,
            onSizeChange: function onSizeChange(size) {
              return changeBBox({
                placeholder: 'pane',
                bBox: size
              });
            }
          }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", _extends({}, params, {
            width: width,
            height: height,
            style: SVG_STYLE
          }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
            name: "series"
          })));
        });
      }));
    }
  }]);

  return PaneLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var LayoutManager =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayoutManager, _React$Component);

  function LayoutManager(props) {
    var _this;

    _classCallCheck(this, LayoutManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayoutManager).call(this, props));
    var _this$props = _this.props,
        width = _this$props.width,
        height = _this$props.height;
    _this.state = {
      bBoxes: {
        pane: {
          width: width,
          height: height
        }
      }
    };
    var stateHelper = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["createStateHelper"])(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeBBox = stateHelper.applyFieldReducer.bind(stateHelper, 'bBoxes', _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["bBoxes"]);
    return _this;
  }

  _createClass(LayoutManager, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height,
          Root = _this$props2.rootComponent,
          restProps = _objectWithoutProperties(_this$props2, ["width", "height", "rootComponent"]);

      var stateBBoxes = this.state.bBoxes;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "layouts",
        value: stateBBoxes
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Action"], {
        name: "changeBBox",
        action: this.changeBBox
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
        name: "root"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Root, _extends({
        height: height,
        width: width
      }, restProps), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
        name: "canvas"
      }))));
    }
  }]);

  return LayoutManager;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
 true ? LayoutManager.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  height: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  rootComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
} : undefined;
LayoutManager.defaultProps = {
  width: 0
};

var ComponentLayout = function ComponentLayout() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
    name: "ComponentLayout"
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
    name: "canvas"
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-container"),
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"])
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"]
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"])
  })), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "center-container",
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"]
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["RIGHT"]
  })), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"], "-container"),
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"])
  }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
    name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"]
  }))));
};

// when "paletteComputing" is removed.

var Palette =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Palette, _React$PureComponent);

  function Palette() {
    _classCallCheck(this, Palette);

    return _possibleConstructorReturn(this, _getPrototypeOf(Palette).apply(this, arguments));
  }

  _createClass(Palette, [{
    key: "render",
    value: function render() {
      var scheme = this.props.scheme;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "Palette"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "palette",
        value: scheme
      }));
    }
  }]);

  return Palette;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Palette.propTypes = {
  scheme: prop_types__WEBPACK_IMPORTED_MODULE_1__["array"].isRequired
} : undefined;

var Root =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Root, _React$PureComponent);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, _getPrototypeOf(Root).apply(this, arguments));
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          width = _this$props.width,
          height = _this$props.height,
          style = _this$props.style,
          restProps = _objectWithoutProperties(_this$props, ["children", "width", "height", "style"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
        style: _objectSpread({}, style, {
          height: "".concat(height, "px")
        }, width ? {
          width: "".concat(width, "px")
        } : null)
      }, restProps), children);
    }
  }]);

  return Root;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Root.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"]
} : undefined;
Root.defaultProps = {
  children: undefined,
  style: undefined
};

var Label =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Label, _React$PureComponent);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _getPrototypeOf(Label).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", this.props);
    }
  }]);

  return Label;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Label.propTypes = {
  children: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["string"], prop_types__WEBPACK_IMPORTED_MODULE_1__["number"]]).isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired
} : undefined;

var RawChart =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawChart, _React$PureComponent);

  function RawChart() {
    _classCallCheck(this, RawChart);

    return _possibleConstructorReturn(this, _getPrototypeOf(RawChart).apply(this, arguments));
  }

  _createClass(RawChart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          width = _this$props.width,
          height = _this$props.height,
          children = _this$props.children,
          rootComponent = _this$props.rootComponent,
          restProps = _objectWithoutProperties(_this$props, ["data", "width", "height", "children", "rootComponent"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["PluginHost"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BasicData, {
        data: data
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Palette, {
        scheme: []
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(LayoutManager, _extends({
        width: width,
        height: height,
        rootComponent: rootComponent
      }, restProps)), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PaneLayout, null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AxesLayout, null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ComponentLayout, null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SpaceFillingRects, {
        placeholders: ["".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"]), "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["RIGHT"]), "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"]), "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["RIGHT"]), "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"], "-axis"), "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["TOP"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["RIGHT"], "-axis"), "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"], "-axis"), "".concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"], "-").concat(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["RIGHT"], "-axis")]
      }), children, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ChartCore, null));
    }
  }]);

  return RawChart;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? RawChart.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1__["array"].isRequired,
  rootComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  height: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]
} : undefined;
RawChart.defaultProps = {
  height: 500,
  width: undefined,
  children: null
};
RawChart.components = {
  rootComponent: 'Root'
};
var Chart = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Root: Root
})(RawChart);
Chart.Label = Label;

var Marker =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Marker, _React$PureComponent);

  function Marker() {
    _classCallCheck(this, Marker);

    return _possibleConstructorReturn(this, _getPrototypeOf(Marker).apply(this, arguments));
  }

  _createClass(Marker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          restProps = _objectWithoutProperties(_this$props, ["color"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", _extends({
        fill: color,
        width: "10",
        height: "10"
      }, restProps), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", _extends({
        r: 5,
        cx: 5,
        cy: 5
      }, restProps)));
    }
  }]);

  return Marker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Marker.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
} : undefined;
Marker.defaultProps = {
  color: undefined
};

var RawLegend =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawLegend, _React$PureComponent);

  function RawLegend() {
    _classCallCheck(this, RawLegend);

    return _possibleConstructorReturn(this, _getPrototypeOf(RawLegend).apply(this, arguments));
  }

  _createClass(RawLegend, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          MarkerComponent = _this$props.markerComponent,
          Label = _this$props.labelComponent,
          Root = _this$props.rootComponent,
          Item = _this$props.itemComponent,
          position = _this$props.position,
          getItems = _this$props.getItems;
      var placeholder = position;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "Legend"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
        name: placeholder
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplateConnector"], null, function (getters) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Root, {
          name: "legend-".concat(placeholder)
        }, getItems(getters).map(function (_ref) {
          var text = _ref.text,
              color = _ref.color;
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Item, {
            key: text
          }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MarkerComponent, {
            name: text,
            color: color
          }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Label, {
            text: text
          }));
        }));
      })));
    }
  }]);

  return RawLegend;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? RawLegend.propTypes = {
  markerComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  labelComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  rootComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  itemComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  getItems: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
} : undefined;
RawLegend.defaultProps = {
  position: 'right',
  getItems: function getItems(_ref2) {
    var series = _ref2.series;
    return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getLegendItems"])(series);
  }
};
RawLegend.components = {
  rootComponent: 'Root',
  itemComponent: 'Item',
  markerComponent: 'Marker',
  labelComponent: 'Label'
};
var Legend = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Marker: Marker
})(RawLegend);

var Title =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Title, _React$PureComponent);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, _getPrototypeOf(Title).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Text = _this$props.textComponent,
          text = _this$props.text,
          position = _this$props.position,
          restProps = _objectWithoutProperties(_this$props, ["textComponent", "text", "position"]);

      var placeholder = position;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "Title"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
        name: placeholder
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Text, _extends({
        text: text
      }, restProps))));
    }
  }]);

  return Title;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Title.propTypes = {
  textComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
} : undefined;
Title.defaultProps = {
  position: 'top'
};
Title.components = {
  textComponent: 'Text'
};

var declareSeries = function declareSeries(pluginName, _ref) {
  var components = _ref.components,
      getPointTransformer = _ref.getPointTransformer,
      createHitTester = _ref.createHitTester;

  var Component$$1 =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Component$$1, _React$PureComponent);

    function Component$$1() {
      _classCallCheck(this, Component$$1);

      return _possibleConstructorReturn(this, _getPrototypeOf(Component$$1).apply(this, arguments));
    }

    _createClass(Component$$1, [{
      key: "render",
      value: function render() {
        var name = this.props.name;
        var symbolName = Symbol(name);

        var seriesItem = _objectSpread({
          getPointTransformer: getPointTransformer,
          createHitTester: createHitTester
        }, this.props, {
          symbolName: symbolName
        });

        var getSeries = function getSeries(_ref2) {
          var series = _ref2.series,
              data = _ref2.data,
              palette = _ref2.palette;
          return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["addSeries"])(series, data, palette, seriesItem);
        };

        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
          name: pluginName
        }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
          name: "series",
          computed: getSeries
        }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
          name: "series"
        }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplateConnector"], null, function (_ref3) {
          var series = _ref3.series,
              scales = _ref3.scales,
              getAnimatedStyle = _ref3.getAnimatedStyle;
          var currentSeries = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["findSeriesByName"])(symbolName, series);
          var currentScales = {
            xScale: scales[_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["ARGUMENT_DOMAIN"]],
            yScale: scales[Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getValueDomainName"])(currentSeries.scaleName)]
          };
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(currentSeries.seriesComponent, {
            index: currentSeries.index,
            pointComponent: currentSeries.pointComponent,
            coordinates: currentSeries.points,
            state: currentSeries.state,
            color: currentSeries.color,
            scales: currentScales,
            getAnimatedStyle: getAnimatedStyle
          });
        })));
      }
    }]);

    return Component$$1;
  }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

   true ? Component$$1.propTypes = {
    name: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

    /* eslint-disable react/no-unused-prop-types */
    valueField: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
    argumentField: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired
    /* eslint-enable react/no-unused-prop-types */

  } : undefined;
  Component$$1.defaultProps = {
    name: 'defaultSeriesName'
  };
  Component$$1.components = {};

  if (components.Path) {
    Component$$1.components.seriesComponent = 'Path';
  }

  if (components.Point) {
    Component$$1.components.pointComponent = 'Point';
  }

  return Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])(components)(Component$$1);
};

var withPatchedProps = function withPatchedProps(patch) {
  return function (Target) {
    var Component$$1 =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(Component$$1, _React$PureComponent);

      function Component$$1() {
        _classCallCheck(this, Component$$1);

        return _possibleConstructorReturn(this, _getPrototypeOf(Component$$1).apply(this, arguments));
      }

      _createClass(Component$$1, [{
        key: "render",
        value: function render() {
          var props = patch(this.props);
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Target, props);
        }
      }]);

      return Component$$1;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

    return Component$$1;
  };
};

var Scale =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Scale, _React$PureComponent);

  function Scale() {
    _classCallCheck(this, Scale);

    return _possibleConstructorReturn(this, _getPrototypeOf(Scale).apply(this, arguments));
  }

  _createClass(Scale, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          factory = _this$props.factory,
          modifyDomain = _this$props.modifyDomain;
      var args = {
        factory: factory,
        modifyDomain: modifyDomain
      };

      var getDomains = function getDomains(_ref) {
        var domains = _ref.domains;
        return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["addDomain"])(domains, name, args);
      };

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "Scale"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "domains",
        computed: getDomains
      }));
    }
  }]);

  return Scale;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Scale.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  factory: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  modifyDomain: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
} : undefined;
Scale.defaultProps = {
  factory: undefined,
  modifyDomain: undefined
};
var ArgumentScale = withPatchedProps(function (props) {
  return _objectSpread({}, props, {
    name: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["ARGUMENT_DOMAIN"]
  });
})(Scale);
var ValueScale = withPatchedProps(function (props) {
  return _objectSpread({}, props, {
    name: Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getValueDomainName"])(props.name)
  });
})(Scale);

var Stack =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Stack, _React$PureComponent);

  function Stack() {
    _classCallCheck(this, Stack);

    return _possibleConstructorReturn(this, _getPrototypeOf(Stack).apply(this, arguments));
  }

  _createClass(Stack, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stacks = _this$props.stacks,
          offset = _this$props.offset,
          order = _this$props.order;
      var params = {
        stacks: stacks,
        offset: offset,
        order: order
      };

      var getSeries = function getSeries(_ref) {
        var series = _ref.series,
            data = _ref.data;
        return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getStackedSeries"])(series, data, params);
      };

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "Stack"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "series",
        computed: getSeries
      }));
    }
  }]);

  return Stack;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Stack.propTypes = {
  stacks: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    series: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]).isRequired
  })),
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  order: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
} : undefined;
Stack.defaultProps = {
  stacks: [],
  offset: d3_shape__WEBPACK_IMPORTED_MODULE_4__["stackOffsetDiverging"],
  order: d3_shape__WEBPACK_IMPORTED_MODULE_4__["stackOrderNone"]
};

/* eslint-disable-next-line react/prefer-stateless-function */

var Animation =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Animation, _React$PureComponent);

  function Animation() {
    _classCallCheck(this, Animation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Animation).apply(this, arguments));
  }

  _createClass(Animation, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "Animation"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "getAnimatedStyle",
        value: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["buildAnimatedStyleGetter"]
      }));
    }
  }]);

  return Animation;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var withStates = function withStates(states) {
  return function (Component$$1) {
    var ComponentWithStates =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(ComponentWithStates, _React$PureComponent);

      function ComponentWithStates() {
        _classCallCheck(this, ComponentWithStates);

        return _possibleConstructorReturn(this, _getPrototypeOf(ComponentWithStates).apply(this, arguments));
      }

      _createClass(ComponentWithStates, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              state = _this$props.state,
              restProps = _objectWithoutProperties(_this$props, ["state"]);

          var stateFunc = states[state];
          var result = stateFunc ? stateFunc(restProps) : restProps;
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(result) ? result : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, result);
        }
      }]);

      return ComponentWithStates;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

     true ? ComponentWithStates.propTypes = {
      state: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
    } : undefined;
    ComponentWithStates.defaultProps = {
      state: undefined
    };
    return ComponentWithStates;
  };
};

var Pattern =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Pattern, _React$PureComponent);

  function Pattern() {
    _classCallCheck(this, Pattern);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pattern).apply(this, arguments));
  }

  _createClass(Pattern, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          size = _this$props.size,
          color = _this$props.color,
          opacity = _this$props.opacity;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("pattern", {
        id: id,
        width: size,
        height: size,
        patternUnits: "userSpaceOnUse"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
        x: 0,
        y: 0,
        width: size,
        height: size,
        fill: color,
        opacity: opacity
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        d: "M ".concat(size / 2, " ").concat(-size / 2, " L ").concat(-size / 2, " ").concat(size / 2, " M 0 ").concat(size, " L ").concat(size, " 0 M ").concat(size * 1.5, " ").concat(size / 2, " L ").concat(size / 2, " ").concat(size * 1.5),
        strokeWidth: 2,
        stroke: color
      })));
    }
  }]);

  return Pattern;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Pattern.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  color: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  opacity: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"]
} : undefined;
Pattern.defaultProps = {
  size: 6,
  opacity: 0.75
};

// result is invoked as function (not as React component).

var withPattern = function withPattern(getPatternId, props) {
  return function (Target) {
    return function (_ref) {
      var color = _ref.color,
          restProps = _objectWithoutProperties(_ref, ["color"]);

      var patternId = getPatternId(restProps);
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Target, _extends({
        fill: "url(#".concat(patternId, ")")
      }, restProps)), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Pattern, _extends({
        id: patternId,
        color: color
      }, props)));
    };
  };
};

var _withStates;

var RawArea =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawArea, _React$PureComponent);

  function RawArea() {
    _classCallCheck(this, RawArea);

    return _possibleConstructorReturn(this, _getPrototypeOf(RawArea).apply(this, arguments));
  }

  _createClass(RawArea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          path = _this$props.path,
          coordinates = _this$props.coordinates,
          index = _this$props.index,
          state = _this$props.state,
          pointComponent = _this$props.pointComponent,
          color = _this$props.color,
          style = _this$props.style,
          scales = _this$props.scales,
          getAnimatedStyle = _this$props.getAnimatedStyle,
          restProps = _objectWithoutProperties(_this$props, ["path", "coordinates", "index", "state", "pointComponent", "color", "style", "scales", "getAnimatedStyle"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", _extends({
        d: path(coordinates),
        fill: color,
        opacity: 0.5,
        style: getAnimatedStyle(style, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getAreaAnimationStyle"], scales)
      }, restProps));
    }
  }]);

  return RawArea;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? RawArea.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  coordinates: prop_types__WEBPACK_IMPORTED_MODULE_1__["array"].isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  color: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  scales: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired,
  getAnimatedStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
} : undefined;
RawArea.defaultProps = {
  path: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["dArea"],
  state: undefined,
  color: undefined,
  style: undefined
};
var Area = withStates((_withStates = {}, _defineProperty(_withStates, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["HOVERED"], withPattern(function (_ref) {
  var index = _ref.index;
  return "series-".concat(index, "-hover");
}, {
  opacity: 0.75
})(RawArea)), _defineProperty(_withStates, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["SELECTED"], withPattern(function (_ref2) {
  var index = _ref2.index;
  return "series-".concat(index, "-selection");
}, {
  opacity: 0.5
})(RawArea)), _withStates))(RawArea);

var AreaSeries = declareSeries('AreaSeries', {
  components: {
    Path: Area
  },
  getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getAreaPointTransformer"],
  createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["createAreaHitTester"]
});

var PointCollection =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PointCollection, _React$PureComponent);

  function PointCollection() {
    _classCallCheck(this, PointCollection);

    return _possibleConstructorReturn(this, _getPrototypeOf(PointCollection).apply(this, arguments));
  }

  _createClass(PointCollection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Point = _this$props.pointComponent,
          coordinates = _this$props.coordinates,
          index = _this$props.index,
          state = _this$props.state,
          restProps = _objectWithoutProperties(_this$props, ["pointComponent", "coordinates", "index", "state"]);

      return coordinates.map(function (point) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Point, _extends({
          key: String(point.index),
          seriesIndex: index
        }, restProps, point));
      });
    }
  }]);

  return PointCollection;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? PointCollection.propTypes = {
  pointComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  coordinates: prop_types__WEBPACK_IMPORTED_MODULE_1__["array"].isRequired
} : undefined;

var _withStates$1;

var RawBar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawBar, _React$PureComponent);

  function RawBar() {
    _classCallCheck(this, RawBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(RawBar).apply(this, arguments));
  }

  _createClass(RawBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          width = _this$props.width,
          y = _this$props.y,
          y1 = _this$props.y1,
          argument = _this$props.argument,
          value = _this$props.value,
          seriesIndex = _this$props.seriesIndex,
          index = _this$props.index,
          state = _this$props.state,
          color = _this$props.color,
          style = _this$props.style,
          scales = _this$props.scales,
          getAnimatedStyle = _this$props.getAnimatedStyle,
          restProps = _objectWithoutProperties(_this$props, ["x", "width", "y", "y1", "argument", "value", "seriesIndex", "index", "state", "color", "style", "scales", "getAnimatedStyle"]);

      var attributes = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["dBar"])({
        x: x,
        width: width,
        y: y,
        y1: y1
      });
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", _extends({}, attributes, {
        fill: color,
        style: getAnimatedStyle(style, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getAreaAnimationStyle"], scales)
      }, restProps));
    }
  }]);

  return RawBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? RawBar.propTypes = {
  argument: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"].isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  y1: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  seriesIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  color: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  scales: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired,
  getAnimatedStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
} : undefined;
RawBar.defaultProps = {
  state: undefined,
  color: undefined,
  style: undefined
};
var Bar = withStates((_withStates$1 = {}, _defineProperty(_withStates$1, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["HOVERED"], withPattern(function (_ref) {
  var seriesIndex = _ref.seriesIndex,
      index = _ref.index;
  return "series-".concat(seriesIndex, "-point-").concat(index, "-hover");
}, {
  opacity: 0.75
})(RawBar)), _defineProperty(_withStates$1, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["SELECTED"], withPattern(function (_ref2) {
  var seriesIndex = _ref2.seriesIndex,
      index = _ref2.index;
  return "series-".concat(seriesIndex, "-point-").concat(index, "-selection");
}, {
  opacity: 0.5
})(RawBar)), _withStates$1))(RawBar);

var BarSeries = declareSeries('BarSeries', {
  components: {
    Path: PointCollection,
    Point: Bar
  },
  getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getBarPointTransformer"],
  createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["createBarHitTester"]
});
BarSeries.defaultProps = {
  barWidth: 0.9
};

var _withStates$2;

var RawPath =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawPath, _React$PureComponent);

  function RawPath() {
    _classCallCheck(this, RawPath);

    return _possibleConstructorReturn(this, _getPrototypeOf(RawPath).apply(this, arguments));
  }

  _createClass(RawPath, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          path = _this$props.path,
          coordinates = _this$props.coordinates,
          index = _this$props.index,
          state = _this$props.state,
          pointComponent = _this$props.pointComponent,
          color = _this$props.color,
          style = _this$props.style,
          scales = _this$props.scales,
          getAnimatedStyle = _this$props.getAnimatedStyle,
          restProps = _objectWithoutProperties(_this$props, ["path", "coordinates", "index", "state", "pointComponent", "color", "style", "scales", "getAnimatedStyle"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", _extends({
        d: path(coordinates),
        fill: "none",
        strokeWidth: 2,
        stroke: color,
        style: getAnimatedStyle(style, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getAreaAnimationStyle"], scales)
      }, restProps));
    }
  }]);

  return RawPath;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? RawPath.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  coordinates: prop_types__WEBPACK_IMPORTED_MODULE_1__["array"].isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  color: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  scales: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired,
  getAnimatedStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
} : undefined;
RawPath.defaultProps = {
  state: undefined,
  color: undefined,
  style: undefined
};
var Path = withStates((_withStates$2 = {}, _defineProperty(_withStates$2, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["HOVERED"], function (props) {
  return _objectSpread({
    strokeWidth: 4
  }, props);
}), _defineProperty(_withStates$2, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["SELECTED"], function (props) {
  return _objectSpread({
    strokeWidth: 4
  }, props);
}), _withStates$2))(RawPath);

var Line =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Line, _React$PureComponent);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _getPrototypeOf(Line).apply(this, arguments));
  }

  _createClass(Line, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, this.props);
    }
  }]);

  return Line;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Line.defaultProps = {
  path: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["dLine"]
};

var LineSeries = declareSeries('LineSeries', {
  components: {
    Path: Line
  },
  getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getLinePointTransformer"],
  createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["createLineHitTester"]
});

var _withStates$3;

var RawSlice =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawSlice, _React$PureComponent);

  function RawSlice() {
    _classCallCheck(this, RawSlice);

    return _possibleConstructorReturn(this, _getPrototypeOf(RawSlice).apply(this, arguments));
  }

  _createClass(RawSlice, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          d = _this$props.d,
          argument = _this$props.argument,
          value = _this$props.value,
          seriesIndex = _this$props.seriesIndex,
          index = _this$props.index,
          state = _this$props.state,
          innerRadius = _this$props.innerRadius,
          outerRadius = _this$props.outerRadius,
          startAngle = _this$props.startAngle,
          endAngle = _this$props.endAngle,
          color = _this$props.color,
          style = _this$props.style,
          scales = _this$props.scales,
          getAnimatedStyle = _this$props.getAnimatedStyle,
          restProps = _objectWithoutProperties(_this$props, ["x", "y", "d", "argument", "value", "seriesIndex", "index", "state", "innerRadius", "outerRadius", "startAngle", "endAngle", "color", "style", "scales", "getAnimatedStyle"]); // TODO: Calculate *d* attribute here.


      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
        transform: "translate(".concat(x, " ").concat(y, ")")
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", _extends({
        d: d,
        fill: color,
        stroke: "none",
        style: getAnimatedStyle(style, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getPieAnimationStyle"], scales, {
          index: index
        })
      }, restProps)));
    }
  }]);

  return RawSlice;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? RawSlice.propTypes = {
  argument: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"].isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  d: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  seriesIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  innerRadius: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  outerRadius: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  startAngle: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  endAngle: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  scales: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired,
  getAnimatedStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
} : undefined;
RawSlice.defaultProps = {
  state: undefined,
  color: undefined,
  style: undefined
};
var Slice = withStates((_withStates$3 = {}, _defineProperty(_withStates$3, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["HOVERED"], withPattern(function (_ref) {
  var seriesIndex = _ref.seriesIndex,
      index = _ref.index;
  return "series-".concat(seriesIndex, "-point-").concat(index, "-hover");
}, {
  opacity: 0.75
})(RawSlice)), _defineProperty(_withStates$3, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["SELECTED"], withPattern(function (_ref2) {
  var seriesIndex = _ref2.seriesIndex,
      index = _ref2.index;
  return "series-".concat(seriesIndex, "-point-").concat(index, "-selection");
}, {
  opacity: 0.5
})(RawSlice)), _withStates$3))(RawSlice);

var PieSeries = declareSeries('PieSeries', {
  components: {
    Path: PointCollection,
    Point: Slice
  },
  getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getPiePointTransformer"],
  createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["createPieHitTester"]
});
PieSeries.defaultProps = {
  innerRadius: 0,
  outerRadius: 1
};

var _withStates$4;

var RawPoint =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawPoint, _React$PureComponent);

  function RawPoint() {
    _classCallCheck(this, RawPoint);

    return _possibleConstructorReturn(this, _getPrototypeOf(RawPoint).apply(this, arguments));
  }

  _createClass(RawPoint, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          argument = _this$props.argument,
          value = _this$props.value,
          seriesIndex = _this$props.seriesIndex,
          index = _this$props.index,
          state = _this$props.state,
          pointOptions = _this$props.point,
          color = _this$props.color,
          style = _this$props.style,
          scales = _this$props.scales,
          getAnimatedStyle = _this$props.getAnimatedStyle,
          restProps = _objectWithoutProperties(_this$props, ["x", "y", "argument", "value", "seriesIndex", "index", "state", "point", "color", "style", "scales", "getAnimatedStyle"]);

      var _pointAttributes = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["pointAttributes"])(pointOptions)({}),
          d = _pointAttributes.d;

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", _extends({
        transform: "translate(".concat(x, " ").concat(y, ")"),
        d: d,
        fill: color,
        stroke: "none",
        style: getAnimatedStyle(style, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getScatterAnimationStyle"], scales)
      }, restProps));
    }
  }]);

  return RawPoint;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? RawPoint.propTypes = {
  argument: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"].isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  seriesIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  point: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  color: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  scales: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired,
  getAnimatedStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
} : undefined;
RawPoint.defaultProps = {
  state: undefined,
  point: {},
  color: undefined,
  style: undefined
};
var Point = withStates((_withStates$4 = {}, _defineProperty(_withStates$4, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["HOVERED"], function (_ref) {
  var color = _ref.color,
      restProps = _objectWithoutProperties(_ref, ["color"]);

  return _objectSpread({
    stroke: color,
    strokeWidth: 4,
    fill: 'none'
  }, restProps);
}), _defineProperty(_withStates$4, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["SELECTED"], function (_ref2) {
  var color = _ref2.color,
      restProps = _objectWithoutProperties(_ref2, ["color"]);

  return _objectSpread({
    stroke: color,
    strokeWidth: 4,
    fill: 'none'
  }, restProps);
}), _withStates$4))(RawPoint);

var ScatterSeries = declareSeries('ScatterSeries', {
  components: {
    Path: PointCollection,
    Point: Point
  },
  getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getLinePointTransformer"],
  createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["createScatterHitTester"]
});

var Spline =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Spline, _React$PureComponent);

  function Spline() {
    _classCallCheck(this, Spline);

    return _possibleConstructorReturn(this, _getPrototypeOf(Spline).apply(this, arguments));
  }

  _createClass(Spline, [{
    key: "render",
    value: function render() {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, this.props);
    }
  }]);

  return Spline;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Spline.defaultProps = {
  path: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["dSpline"]
};

var SplineSeries = declareSeries('SplineSeries', {
  components: {
    Path: Spline
  },
  getPointTransformer: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getLinePointTransformer"],
  createHitTester: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["createSplineHitTester"]
});

var getOffset = function getOffset(position) {
  return position >= 0 ? 0 : -position;
};

var getSize = function getSize(position, delta) {
  return position >= 0 ? position + delta : -position;
};

var Root$1 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Root, _React$PureComponent);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this, props));
    _this.ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      x: 0,
      y: 0
    };
    _this.adjust = _this.adjust.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Root, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(this.adjust);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // *setState* is called unconditionally because PureComponent is expected to break the cycle.
      this.setState(this.adjust); // eslint-disable-line react/no-did-update-set-state
    } // Since calculated state does not depend on current state non-callback version of *setState*
    // might have been expected - it can't be done.
    // Parent component (Axis) accesses its DOM content in *onSizeChange* handler. When
    // this component is mounted parent is not yet - it crashes on DOM access.
    // *setState* callback is invoked later then *componentDidMount* - by that time parent component
    // is already mounted and can access its DOM.
    // Because of it callback version of *setState* has to be used here.
    // Can we rely on the fact that by the time of callback parent is mounted?
    // For now we stick with it, but need to find a more solid solution.

  }, {
    key: "adjust",
    value: function adjust(_, _ref) {
      var dx = _ref.dx,
          dy = _ref.dy,
          onSizeChange = _ref.onSizeChange;
      var bbox = this.ref.current.getBBox();
      var width = dx ? bbox.width : getSize(bbox.x, bbox.width);
      var height = dy ? bbox.height : getSize(bbox.y, bbox.height);
      var x = dx ? 0 : getOffset(bbox.x);
      var y = dy ? 0 : getOffset(bbox.y);
      onSizeChange({
        width: width,
        height: height
      });
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onSizeChange = _this$props.onSizeChange,
          restProps = _objectWithoutProperties(_this$props, ["children", "onSizeChange"]);

      var _this$state = this.state,
          x = _this$state.x,
          y = _this$state.y;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", _extends({
        ref: this.ref,
        transform: "translate(".concat(x, " ").concat(y, ")")
      }, restProps), children);
    }
  }]);

  return Root;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Root$1.propTypes = {
  dx: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  dy: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  onSizeChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired
} : undefined;

var Label$1 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Label, _React$PureComponent);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _getPrototypeOf(Label).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          x = _this$props.x,
          y = _this$props.y,
          dominantBaseline = _this$props.dominantBaseline,
          textAnchor = _this$props.textAnchor,
          restProps = _objectWithoutProperties(_this$props, ["text", "x", "y", "dominantBaseline", "textAnchor"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("text", _extends({
        dominantBaseline: dominantBaseline,
        textAnchor: textAnchor,
        x: x,
        y: y
      }, restProps), text);
    }
  }]);

  return Label;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Label$1.propTypes = {
  text: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["string"], prop_types__WEBPACK_IMPORTED_MODULE_1__["number"]]).isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  dominantBaseline: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  textAnchor: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired
} : undefined;

var Line$1 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Line, _React$PureComponent);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _getPrototypeOf(Line).apply(this, arguments));
  }

  _createClass(Line, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x1 = _this$props.x1,
          x2 = _this$props.x2,
          y1 = _this$props.y1,
          y2 = _this$props.y2,
          restProps = _objectWithoutProperties(_this$props, ["x1", "x2", "y1", "y2"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", _extends({
        d: "M ".concat(x1, " ").concat(y1, " L ").concat(x2, " ").concat(y2)
      }, restProps));
    }
  }]);

  return Line;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Line$1.propTypes = {
  x1: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  x2: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  y1: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  y2: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired
} : undefined;

var SVG_STYLE$1 = {
  position: 'absolute',
  left: 0,
  top: 0,
  overflow: 'visible'
};

var adjustScaleRange = function adjustScaleRange(scale, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      width = _ref2[0],
      height = _ref2[1];

  var range = scale.range().slice();

  if (Math.abs(range[0] - range[1]) < 0.01) {
    return scale;
  }

  if (range[1] > 0) {
    range[1] = width;
  } else {
    range[0] = height;
  }

  return scale.copy().range(range);
};

var RawAxis =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawAxis, _React$PureComponent);

  function RawAxis(props) {
    var _this;

    _classCallCheck(this, RawAxis);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RawAxis).call(this, props));
    _this.rootRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.adjustedWidth = 0;
    _this.adjustedHeight = 0;
    return _this;
  }

  _createClass(RawAxis, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          scaleName = _this$props.scaleName,
          position = _this$props.position,
          tickSize = _this$props.tickSize,
          tickFormat = _this$props.tickFormat,
          indentFromAxis = _this$props.indentFromAxis,
          showGrid = _this$props.showGrid,
          showTicks = _this$props.showTicks,
          showLine = _this$props.showLine,
          showLabels = _this$props.showLabels,
          RootComponent = _this$props.rootComponent,
          TickComponent = _this$props.tickComponent,
          LabelComponent = _this$props.labelComponent,
          LineComponent = _this$props.lineComponent,
          GridComponent = _this$props.gridComponent;
      var placeholder = "".concat(position, "-axis");
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "Axis"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
        name: placeholder
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplateConnector"], null, function (_ref3, _ref4) {
        var scales = _ref3.scales,
            layouts = _ref3.layouts;
        var changeBBox = _ref4.changeBBox;
        var scale = scales[scaleName];

        if (!scale) {
          return null;
        }

        var _ref5 = layouts[placeholder] || {
          width: 0,
          height: 0
        },
            width = _ref5.width,
            height = _ref5.height;

        var _axisCoordinates = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["axisCoordinates"])({
          scaleName: scaleName,
          // Isn't it too late to adjust sizes?
          scale: adjustScaleRange(scale, [_this2.adjustedWidth, _this2.adjustedHeight]),
          position: position,
          tickSize: tickSize,
          tickFormat: tickFormat,
          indentFromAxis: indentFromAxis
        }),
            _axisCoordinates$side = _slicedToArray(_axisCoordinates.sides, 2),
            dx = _axisCoordinates$side[0],
            dy = _axisCoordinates$side[1],
            ticks = _axisCoordinates.ticks;

        var handleSizeChange = function handleSizeChange(size) {
          // The callback is called when DOM is available -
          // *rootRef.current* can be surely accessed.
          var rect = _this2.rootRef.current.getBoundingClientRect();

          if (rect.width === _this2.adjustedWidth && rect.height === _this2.adjustedHeight) {
            return;
          } // *setState* is not used because it would cause excessive Plugin rerenders.
          // Template rerender is provided by *changeBBox* invocation.


          _this2.adjustedWidth = rect.width;
          _this2.adjustedHeight = rect.height;
          changeBBox({
            placeholder: placeholder,
            bBox: size
          });
        };

        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          style: {
            position: 'relative',
            width: dy * width || undefined,
            height: dx * height || undefined,
            flexGrow: dx || undefined
          },
          ref: _this2.rootRef
        }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
          width: _this2.adjustedWidth,
          height: _this2.adjustedHeight,
          style: SVG_STYLE$1
        }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RootComponent, {
          dx: dx,
          dy: dy,
          onSizeChange: handleSizeChange
        }, showTicks && ticks.map(function (_ref6) {
          var x1 = _ref6.x1,
              x2 = _ref6.x2,
              y1 = _ref6.y1,
              y2 = _ref6.y2,
              key = _ref6.key;
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TickComponent, {
            key: key,
            x1: x1,
            x2: x2,
            y1: y1,
            y2: y2
          });
        }), showLine && Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(LineComponent, {
          x1: 0,
          x2: dx * _this2.adjustedWidth,
          y1: 0,
          y2: dy * _this2.adjustedHeight
        }), showLabels && ticks.map(function (_ref7) {
          var text = _ref7.text,
              xText = _ref7.xText,
              yText = _ref7.yText,
              dominantBaseline = _ref7.dominantBaseline,
              textAnchor = _ref7.textAnchor,
              key = _ref7.key;
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(LabelComponent, {
            key: key,
            text: text,
            x: xText,
            y: yText,
            dominantBaseline: dominantBaseline,
            textAnchor: textAnchor
          });
        }))));
      })), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
        name: "series"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplateConnector"], null, function (_ref8) {
        var scales = _ref8.scales,
            layouts = _ref8.layouts;
        var scale = scales[scaleName];

        if (!scale || !showGrid) {
          return null;
        }

        var _layouts$pane = layouts.pane,
            width = _layouts$pane.width,
            height = _layouts$pane.height;
        var ticks = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getGridCoordinates"])({
          scaleName: scaleName,
          scale: scale
        });
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, ticks.map(function (_ref9) {
          var key = _ref9.key,
              x = _ref9.x,
              dx = _ref9.dx,
              y = _ref9.y,
              dy = _ref9.dy;
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(GridComponent, {
            key: key,
            x1: x,
            x2: x + dx * width,
            y1: y,
            y2: y + dy * height
          });
        }));
      })));
    }
  }]);

  return RawAxis;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? RawAxis.propTypes = {
  scaleName: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  rootComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  tickComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  labelComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  lineComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  gridComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  showGrid: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"].isRequired,
  showTicks: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"].isRequired,
  showLine: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"].isRequired,
  showLabels: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"].isRequired,
  tickSize: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  tickFormat: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  indentFromAxis: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"]
} : undefined;
RawAxis.defaultProps = {
  tickSize: 5,
  tickFormat: undefined,
  indentFromAxis: 10
};
RawAxis.components = {
  rootComponent: 'Root',
  tickComponent: 'Tick',
  labelComponent: 'Label',
  lineComponent: 'Line',
  gridComponent: 'Grid'
};
var Axis = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Root: Root$1,
  Tick: Line$1,
  Label: Label$1,
  Line: Line$1,
  Grid: Line$1
})(RawAxis); // TODO: It is not axis who defines that argument is HORIZONTAL and value is VERTICAL.
// TODO: *position* should not be *orientation* dependent -
// if HORIZONTAL then TOP or BOTTOM, otherwise LEFT of RIGHT.
// It should be domain dependent - something like AT_DOMAIN_START or AT_DOMAIN_END.
// TODO: Check that only BOTTOM and TOP are accepted.

var ArgumentAxis = withPatchedProps(function (props) {
  return _objectSpread({
    position: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["BOTTOM"],
    showGrid: false,
    showTicks: true,
    showLine: true,
    showLabels: true
  }, props, {
    scaleName: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["ARGUMENT_DOMAIN"]
  });
})(Axis); // TODO: Check that only LEFT and RIGHT are accepted.

var ValueAxis = withPatchedProps(function (props) {
  return _objectSpread({
    position: _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["LEFT"],
    showGrid: true,
    showTicks: false,
    showLine: false,
    showLabels: true
  }, props, {
    scaleName: Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getValueDomainName"])(props.scaleName)
  });
})(Axis);
ArgumentAxis.components = Axis.components;
ValueAxis.components = Axis.components;

var Target =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Target, _React$PureComponent);

  function Target() {
    _classCallCheck(this, Target);

    return _possibleConstructorReturn(this, _getPrototypeOf(Target).apply(this, arguments));
  }

  _createClass(Target, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          d = _this$props.d,
          x = _this$props.x,
          y = _this$props.y,
          componentRef = _this$props.componentRef;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        transform: "translate(".concat(x, " ").concat(y, ")"),
        fill: "none",
        ref: componentRef,
        d: d
      });
    }
  }]);

  return Target;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Target.propTypes = {
  x: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired,
  d: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  componentRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
} : undefined;

var dependencies = [{
  name: 'EventTracker',
  optional: true
}];

var RawTooltip =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RawTooltip, _React$PureComponent);

  function RawTooltip(props) {
    var _this;

    _classCallCheck(this, RawTooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RawTooltip).call(this, props));
    _this.state = {
      target: props.targetItem || props.defaultTargetItem
    };
    _this.createTargetElement = _this.createTargetElement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getTargetElement = _this.getTargetElement.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    var handlePointerMove = _this.handlePointerMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.getPointerMoveHandlers = function (_ref) {
      var _ref$pointerMoveHandl = _ref.pointerMoveHandlers,
          pointerMoveHandlers = _ref$pointerMoveHandl === void 0 ? [] : _ref$pointerMoveHandl;
      return [].concat(_toConsumableArray(pointerMoveHandlers), [handlePointerMove]);
    };

    return _this;
  }

  _createClass(RawTooltip, [{
    key: "getTargetElement",
    value: function getTargetElement() {
      return this.targetElement;
    }
  }, {
    key: "createTargetElement",
    value: function createTargetElement(ref) {
      this.targetElement = ref;
    }
  }, {
    key: "handlePointerMove",
    value: function handlePointerMove(_ref2) {
      var targets = _ref2.targets;
      this.setState(function (_ref3, _ref4) {
        var currentTarget = _ref3.target;
        var onTargetItemChange = _ref4.onTargetItemChange;
        var target = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["processHandleTooltip"])(targets, currentTarget, onTargetItemChange);

        if (target === undefined) {
          return null;
        }

        return {
          target: target
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          OverlayComponent = _this$props.overlayComponent,
          TargetComponent = _this$props.targetComponent,
          ContentComponent = _this$props.contentComponent;
      var target = this.state.target;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "Tooltip",
        dependencies: dependencies
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "pointerMoveHandlers",
        computed: this.getPointerMoveHandlers
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
        name: "series"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], null), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplateConnector"], null, function (_ref5) {
        var series = _ref5.series;

        if (!target) {
          return null;
        }

        var _getParameters = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["getParameters"])(series, target),
            text = _getParameters.text,
            element = _getParameters.element;

        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TargetComponent, _extends({}, element, {
          componentRef: _this2.createTargetElement
        })), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OverlayComponent, {
          key: "".concat(target.series).concat(target.point),
          target: _this2.getTargetElement
        }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentComponent, {
          text: text,
          targetItem: target
        })));
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        target: props.targetItem !== undefined ? props.targetItem : state.target
      };
    }
  }]);

  return RawTooltip;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? RawTooltip.propTypes = {
  defaultTargetItem: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    series: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
    point: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired
  }),
  targetItem: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    series: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
    point: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired
  }),
  onTargetItemChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  overlayComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  targetComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  contentComponent: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
} : undefined;
RawTooltip.defaultProps = {
  defaultTargetItem: undefined,
  targetItem: undefined,
  onTargetItemChange: undefined
};
RawTooltip.components = {
  overlayComponent: 'Overlay',
  targetComponent: 'Target',
  contentComponent: 'Content'
};
var Tooltip = Object(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["withComponents"])({
  Target: Target
})(RawTooltip);

var wrapToList = function wrapToList(arg) {
  return arg ? [arg] : [];
};

var EVENT_NAME_MAP = {
  click: 'onClick',
  pointermove: 'onPointerMove',
  pointerleave: 'onPointerLeave'
};

var translateEventNames = function translateEventNames(handlers) {
  var result = {};
  Object.entries(handlers).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        handler = _ref2[1];

    result[EVENT_NAME_MAP[name]] = handler;
  });
  return result;
}; // eslint-disable-next-line react/no-multi-comp


var EventTracker =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(EventTracker, _React$PureComponent);

  function EventTracker() {
    _classCallCheck(this, EventTracker);

    return _possibleConstructorReturn(this, _getPrototypeOf(EventTracker).apply(this, arguments));
  }

  _createClass(EventTracker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          onPointerMove = _this$props.onPointerMove;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "EventTracker"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "clickHandlers",
        value: wrapToList(onClick)
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "pointerMoveHandlers",
        value: wrapToList(onPointerMove)
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Template"], {
        name: "canvas"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplateConnector"], null, function (_ref3) {
        var series = _ref3.series,
            clickHandlers = _ref3.clickHandlers,
            pointerMoveHandlers = _ref3.pointerMoveHandlers;
        var handlers = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["buildEventHandlers"])(series, {
          clickHandlers: clickHandlers,
          pointerMoveHandlers: pointerMoveHandlers
        });
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["TemplatePlaceholder"], {
          params: translateEventNames(handlers)
        });
      })));
    }
  }]);

  return EventTracker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? EventTracker.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onPointerMove: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
} : undefined;
EventTracker.defaultProps = {
  onClick: undefined,
  onPointerMove: undefined
};

var dependencies$1 = [{
  name: 'EventTracker',
  optional: true
}];
var HoverState =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(HoverState, _React$PureComponent);

  function HoverState(props) {
    var _this;

    _classCallCheck(this, HoverState);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HoverState).call(this, props));
    _this.state = {
      hover: props.hover || props.defaultHover
    };

    var handlePointerMove = _this.handlePointerMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.getPointerMoveHandlers = function (_ref) {
      var _ref$pointerMoveHandl = _ref.pointerMoveHandlers,
          pointerMoveHandlers = _ref$pointerMoveHandl === void 0 ? [] : _ref$pointerMoveHandl;
      return [].concat(_toConsumableArray(pointerMoveHandlers), [handlePointerMove]);
    };

    return _this;
  }

  _createClass(HoverState, [{
    key: "handlePointerMove",
    value: function handlePointerMove(_ref2) {
      var targets = _ref2.targets;
      this.setState(function (_ref3, _ref4) {
        var currentTarget = _ref3.hover;
        var onHoverChange = _ref4.onHoverChange;
        var hover = Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["processPointerMove"])(targets, currentTarget, onHoverChange);
        return hover !== undefined ? {
          hover: hover
        } : null;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var hover = this.state.hover; // Function has to be recreated every time as there is no other way
      // to notify that "series" is updated.

      var targets = hover ? [hover] : [];

      var getSeries = function getSeries(_ref5) {
        var series = _ref5.series;
        return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["changeSeriesState"])(series, targets, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["HOVERED"]);
      };

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "HoverState",
        dependencies: dependencies$1
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "pointerMoveHandlers",
        computed: this.getPointerMoveHandlers
      }), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "series",
        computed: getSeries
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        hover: props.hover !== undefined ? props.hover : state.hover
      };
    }
  }]);

  return HoverState;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? HoverState.propTypes = {
  defaultHover: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    series: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
    point: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired
  }),
  hover: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    series: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
    point: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired
  }),
  onHoverChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
} : undefined;
HoverState.defaultProps = {
  defaultHover: undefined,
  hover: undefined,
  onHoverChange: undefined
};

var SelectionState =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SelectionState, _React$PureComponent);

  function SelectionState() {
    _classCallCheck(this, SelectionState);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectionState).apply(this, arguments));
  }

  _createClass(SelectionState, [{
    key: "render",
    value: function render() {
      var selection = this.props.selection;
      var targets = selection || [];

      var getSeries = function getSeries(_ref) {
        var series = _ref.series;
        return Object(_devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["changeSeriesState"])(series, targets, _devexpress_dx_chart_core__WEBPACK_IMPORTED_MODULE_3__["SELECTED"]);
      };

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Plugin"], {
        name: "SelectionState"
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_devexpress_dx_react_core__WEBPACK_IMPORTED_MODULE_2__["Getter"], {
        name: "series",
        computed: getSeries
      }));
    }
  }]);

  return SelectionState;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? SelectionState.propTypes = {
  selection: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    series: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
    point: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"].isRequired
  }))
} : undefined;
SelectionState.defaultProps = {
  selection: undefined
};


//# sourceMappingURL=dx-react-chart.es.js.map


/***/ }),

/***/ "./node_modules/@devexpress/dx-react-core/dist/dx-react-core.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@devexpress/dx-react-core/dist/dx-react-core.es.js ***!
  \*************************************************************************/
/*! exports provided: Plugin, PluginHost, Action, Getter, Template, TemplatePlaceholder, TemplateConnector, Draggable, DragDropProvider, DragSource, DropTarget, Sizer, RefHolder, connectProps, createStateHelper, withComponents, RefType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginHost", function() { return PluginHost$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getter", function() { return Getter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePlaceholder", function() { return TemplatePlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateConnector", function() { return TemplateConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropProvider", function() { return DragDropProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragSource", function() { return DragSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropTarget", function() { return DropTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sizer", function() { return Sizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefHolder", function() { return RefHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectProps", function() { return connectProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStateHelper", function() { return createStateHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withComponents", function() { return withComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefType", function() { return RefType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devexpress_dx_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devexpress/dx-core */ "./node_modules/@devexpress/dx-core/dist/dx-core.es.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Bundle of @devexpress/dx-react-core
 * Generated: 2018-12-25
 * Version: 1.10.0
 * License: https://js.devexpress.com/Licensing
 */






function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var PluginHostContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var PositionContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var TemplateHostContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

var PluginIndexer = function PluginIndexer(_ref) {
  var children = _ref.children;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PositionContext.Consumer, null, function (positionContext) {
    return react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (child, index) {
      if (!child || !child.type) return child;

      var childPosition = function childPosition() {
        var calculatedPosition = positionContext && positionContext() || [];
        return [].concat(_toConsumableArray(calculatedPosition), [index]);
      };

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PositionContext.Provider, {
        value: childPosition
      }, child);
    });
  });
};
 true ? PluginIndexer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]
} : undefined;
PluginIndexer.defaultProps = {
  children: undefined
};

var PLUGIN_HOST_CONTEXT = 'dxcore_pluginHost_context';
var POSITION_CONTEXT = 'dxcore_position_context';
var TEMPLATE_HOST_CONTEXT = 'dxcore_templateHost_context';
var RERENDER_TEMPLATE_EVENT = Symbol('rerenderTemplate');
var RERENDER_TEMPLATE_SCOPE_EVENT = Symbol('rerenderTemplateScope');
var UPDATE_CONNECTION_EVENT = Symbol('updateConnection');

var withContext = function withContext(Context, name) {
  return function (Component$$1) {
    return function (props) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Consumer, null, function (context) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, _extends({}, props, _defineProperty({}, name, context)));
      });
    };
  };
};
var withHostAndPosition = function withHostAndPosition(Component$$1) {
  return withContext(PluginHostContext, PLUGIN_HOST_CONTEXT)(withContext(PositionContext, POSITION_CONTEXT)(Component$$1));
};

var _PluginBase$propTypes;
var PluginBase =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PluginBase, _React$PureComponent);

  function PluginBase() {
    _classCallCheck(this, PluginBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(PluginBase).apply(this, arguments));
  }

  _createClass(PluginBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          pluginHost = _this$props[PLUGIN_HOST_CONTEXT],
          position = _this$props[POSITION_CONTEXT];
      var _this$props2 = this.props,
          name = _this$props2.name,
          dependencies = _this$props2.dependencies;
      this.plugin = {
        position: position,
        name: name,
        dependencies: dependencies,
        container: true
      };
      pluginHost.registerPlugin(this.plugin);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
      pluginHost.ensureDependencies();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
      pluginHost.unregisterPlugin(this.plugin);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginIndexer, null, children);
    }
  }]);

  return PluginBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? PluginBase.propTypes = (_PluginBase$propTypes = {}, _defineProperty(_PluginBase$propTypes, PLUGIN_HOST_CONTEXT, prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired), _defineProperty(_PluginBase$propTypes, POSITION_CONTEXT, prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired), _defineProperty(_PluginBase$propTypes, "children", prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired), _defineProperty(_PluginBase$propTypes, "name", prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]), _defineProperty(_PluginBase$propTypes, "dependencies", Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
  name: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  optional: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
}))), _PluginBase$propTypes) : undefined;
PluginBase.defaultProps = {
  name: '',
  dependencies: []
};
var Plugin = withHostAndPosition(PluginBase);

var _TemplatePlaceholderB, _TemplatePlaceholderB2;
var TemplatePlaceholderBase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TemplatePlaceholderBase, _React$Component);

  function TemplatePlaceholderBase(props) {
    var _this$subscription;

    var _this;

    _classCallCheck(this, TemplatePlaceholderBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplatePlaceholderBase).call(this, props));
    var propsName = _this.props.name;
    _this.subscription = (_this$subscription = {}, _defineProperty(_this$subscription, RERENDER_TEMPLATE_EVENT, function (id) {
      if (_this.template && _this.template.id === id) {
        _this.forceUpdate();
      }
    }), _defineProperty(_this$subscription, RERENDER_TEMPLATE_SCOPE_EVENT, function (name) {
      if (propsName === name) {
        _this.forceUpdate();
      }
    }), _this$subscription);
    return _this;
  }

  _createClass(TemplatePlaceholderBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
      pluginHost.registerSubscription(this.subscription);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$getRenderingDat = this.getRenderingData(nextProps),
          params = _this$getRenderingDat.params;

      var children = this.props.children;
      return !Object(_devexpress_dx_core__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"])(params, this.params) || children !== nextProps.children;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
      pluginHost.unregisterSubscription(this.subscription);
    }
  }, {
    key: "getRenderingData",
    value: function getRenderingData(props) {
      var name = props.name,
          params = props.params;

      if (name) {
        var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
        return {
          params: params,
          templates: pluginHost.collect("".concat(name, "Template")).filter(function (template) {
            return template.predicate(params);
          }).reverse()
        };
      }

      var templateHost = this.props[TEMPLATE_HOST_CONTEXT];
      return {
        params: params || templateHost.params(),
        templates: templateHost.templates()
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$getRenderingDat2 = this.getRenderingData(this.props),
          params = _this$getRenderingDat2.params,
          templates = _this$getRenderingDat2.templates;

      this.params = params;

      var _templates = _slicedToArray(templates, 1);

      this.template = _templates[0];
      this.restTemplates = templates.slice(1);
      var content = null;

      if (this.template) {
        var templateContent = this.template.children;
        content = templateContent() || null;

        if (content && typeof content === 'function') {
          content = content(params);
        }
      }

      var templatePlaceholder = this.props.children;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TemplateHostContext.Provider, {
        value: {
          templates: function templates() {
            return _this2.restTemplates;
          },
          params: function params() {
            return _this2.params;
          }
        }
      }, templatePlaceholder ? templatePlaceholder(content) : content);
    }
  }]);

  return TemplatePlaceholderBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
 true ? TemplatePlaceholderBase.propTypes = (_TemplatePlaceholderB = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  // eslint-disable-line react/no-unused-prop-types
  params: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"]
}, _defineProperty(_TemplatePlaceholderB, TEMPLATE_HOST_CONTEXT, prop_types__WEBPACK_IMPORTED_MODULE_1__["object"]), _defineProperty(_TemplatePlaceholderB, PLUGIN_HOST_CONTEXT, prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired), _defineProperty(_TemplatePlaceholderB, "children", prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]), _TemplatePlaceholderB) : undefined;
TemplatePlaceholderBase.defaultProps = (_TemplatePlaceholderB2 = {}, _defineProperty(_TemplatePlaceholderB2, TEMPLATE_HOST_CONTEXT, undefined), _defineProperty(_TemplatePlaceholderB2, "name", undefined), _defineProperty(_TemplatePlaceholderB2, "params", undefined), _defineProperty(_TemplatePlaceholderB2, "children", undefined), _TemplatePlaceholderB2);
var TemplatePlaceholder = withContext(PluginHostContext, PLUGIN_HOST_CONTEXT)(withContext(TemplateHostContext, TEMPLATE_HOST_CONTEXT)(TemplatePlaceholderBase));

var PluginHost$1 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(PluginHost$$1, _React$PureComponent);

  function PluginHost$$1(props) {
    var _this;

    _classCallCheck(this, PluginHost$$1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PluginHost$$1).call(this, props));
    _this.host = new _devexpress_dx_core__WEBPACK_IMPORTED_MODULE_2__["PluginHost"]();
    return _this;
  }

  _createClass(PluginHost$$1, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginHostContext.Provider, {
        value: this.host
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PluginIndexer, null, children), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TemplatePlaceholder, {
        name: "root"
      }));
    }
  }]);

  return PluginHost$$1;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? PluginHost$1.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]
} : undefined;
PluginHost$1.defaultProps = {
  children: undefined
};

var getAvailableGetters = function getAvailableGetters(pluginHost) {
  var getGetterValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (getterName) {
    return pluginHost.get("".concat(getterName, "Getter"));
  };
  var trackedDependencies = {};
  var getters;

  if (typeof Proxy !== 'undefined') {
    getters = new Proxy({}, {
      get: function get(target, prop) {
        if (typeof prop !== 'string') return undefined;
        var result = getGetterValue(prop);
        trackedDependencies[prop] = result;
        return result;
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
        return {
          configurable: true,
          enumerable: true,
          value: this.get(target, prop)
        };
      },
      ownKeys: function ownKeys() {
        return pluginHost.knownKeys('Getter');
      }
    });
  } else {
    getters = pluginHost.knownKeys('Getter').reduce(function (acc, getterName) {
      Object.defineProperty(acc, getterName, {
        get: function get() {
          var result = getGetterValue(getterName);
          trackedDependencies[getterName] = result;
          return result;
        }
      });
      return acc;
    }, {});
  }

  return {
    getters: getters,
    trackedDependencies: trackedDependencies
  };
};
var isTrackedDependenciesChanged = function isTrackedDependenciesChanged(pluginHost, prevTrackedDependencies) {
  var getGetterValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (getterName) {
    return pluginHost.get("".concat(getterName, "Getter"));
  };
  var trackedDependencies = Object.keys(prevTrackedDependencies).reduce(function (acc, getterName) {
    return Object.assign(acc, _defineProperty({}, getterName, getGetterValue(getterName)));
  }, {});
  return !Object(_devexpress_dx_core__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"])(prevTrackedDependencies, trackedDependencies);
};
var getAvailableActions = function getAvailableActions(pluginHost) {
  var getAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (actionName) {
    return pluginHost.collect("".concat(actionName, "Action")).slice().reverse()[0];
  };
  var actions;

  if (typeof Proxy !== 'undefined') {
    actions = new Proxy({}, {
      get: function get(target, prop) {
        if (typeof prop !== 'string') return undefined;
        return getAction(prop);
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
        return {
          configurable: true,
          enumerable: true,
          value: this.get(target, prop)
        };
      },
      ownKeys: function ownKeys() {
        return pluginHost.knownKeys('Action');
      }
    });
  } else {
    actions = pluginHost.knownKeys('Action').reduce(function (acc, actionName) {
      Object.defineProperty(acc, actionName, {
        get: function get() {
          return getAction(actionName);
        }
      });
      return acc;
    }, {});
  }

  return actions;
};

var _ActionBase$propTypes;

var ActionBase =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ActionBase, _React$PureComponent);

  function ActionBase(props) {
    var _this;

    _classCallCheck(this, ActionBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionBase).call(this, props));
    var pluginHost = props[PLUGIN_HOST_CONTEXT],
        positionContext = props[POSITION_CONTEXT];
    var name = props.name;
    _this.plugin = _defineProperty({
      position: function position() {
        return positionContext();
      }
    }, "".concat(name, "Action"), function Action(params) {
      var action = _this.props.action;

      var _getAvailableGetters = getAvailableGetters(pluginHost, function (getterName) {
        return pluginHost.get("".concat(getterName, "Getter"), _this.plugin);
      }),
          getters = _getAvailableGetters.getters;

      var nextParams = params;
      var actions = getAvailableActions(pluginHost, function (actionName) {
        return actionName === name ? function (newParams) {
          nextParams = newParams;
        } : pluginHost.collect("".concat(actionName, "Action"), _this.plugin).slice().reverse()[0];
      });
      action(params, getters, actions);
      var nextAction = pluginHost.collect("".concat(name, "Action"), _this.plugin).slice().reverse()[0];

      if (nextAction) {
        nextAction(nextParams);
      }
    });
    pluginHost.registerPlugin(_this.plugin);
    return _this;
  }

  _createClass(ActionBase, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
      pluginHost.unregisterPlugin(this.plugin);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ActionBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? ActionBase.propTypes = (_ActionBase$propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  action: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
}, _defineProperty(_ActionBase$propTypes, PLUGIN_HOST_CONTEXT, prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired), _defineProperty(_ActionBase$propTypes, POSITION_CONTEXT, prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired), _ActionBase$propTypes) : undefined;
var Action = withHostAndPosition(ActionBase);

var _GetterBase$propTypes;

var GetterBase =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(GetterBase, _React$PureComponent);

  function GetterBase(props) {
    var _this;

    _classCallCheck(this, GetterBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GetterBase).call(this, props));
    var pluginHost = props[PLUGIN_HOST_CONTEXT],
        positionContext = props[POSITION_CONTEXT];
    var name = props.name;
    var lastComputed;
    var lastTrackedDependencies = {};
    var lastResult;
    _this.plugin = _defineProperty({
      position: function position() {
        return positionContext();
      }
    }, "".concat(name, "Getter"), function Getter(original) {
      var _this$props = _this.props,
          value = _this$props.value,
          computed = _this$props.computed;
      if (computed === undefined) return value;

      var getGetterValue = function getGetterValue(getterName) {
        return getterName === name ? original : pluginHost.get("".concat(getterName, "Getter"), _this.plugin);
      };

      if (computed === lastComputed && !isTrackedDependenciesChanged(pluginHost, lastTrackedDependencies, getGetterValue)) {
        return lastResult;
      }

      var _getAvailableGetters = getAvailableGetters(pluginHost, getGetterValue),
          getters = _getAvailableGetters.getters,
          trackedDependencies = _getAvailableGetters.trackedDependencies;

      var actions = getAvailableActions(pluginHost);
      lastComputed = computed;
      lastTrackedDependencies = trackedDependencies;
      lastResult = computed(getters, actions);
      return lastResult;
    });
    pluginHost.registerPlugin(_this.plugin);
    return _this;
  }

  _createClass(GetterBase, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
      pluginHost.broadcast(UPDATE_CONNECTION_EVENT);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
      pluginHost.unregisterPlugin(this.plugin);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return GetterBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? GetterBase.propTypes = (_GetterBase$propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"],
  computed: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
}, _defineProperty(_GetterBase$propTypes, PLUGIN_HOST_CONTEXT, prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired), _defineProperty(_GetterBase$propTypes, POSITION_CONTEXT, prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired), _GetterBase$propTypes) : undefined;
GetterBase.defaultProps = {
  value: undefined,
  computed: undefined
};
var Getter = withHostAndPosition(GetterBase);

var _TemplateBase$propTyp;
var globalTemplateId = 0;

var TemplateBase =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TemplateBase, _React$PureComponent);

  function TemplateBase(props) {
    var _this;

    _classCallCheck(this, TemplateBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateBase).call(this, props));
    globalTemplateId += 1;
    _this.id = globalTemplateId;
    var pluginHost = props[PLUGIN_HOST_CONTEXT],
        positionContext = props[POSITION_CONTEXT];
    var name = props.name,
        _predicate = props.predicate;
    _this.plugin = _defineProperty({
      position: function position() {
        return positionContext();
      }
    }, "".concat(name, "Template"), {
      id: _this.id,
      predicate: function predicate(params) {
        return _predicate ? _predicate(params) : true;
      },
      children: function children() {
        var children = _this.props.children;
        return children;
      }
    });
    pluginHost.registerPlugin(_this.plugin);
    pluginHost.broadcast(RERENDER_TEMPLATE_SCOPE_EVENT, name);
    return _this;
  }

  _createClass(TemplateBase, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
      pluginHost.broadcast(RERENDER_TEMPLATE_EVENT, this.id);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var pluginHost = this.props[PLUGIN_HOST_CONTEXT];
      var name = this.props.name;
      pluginHost.unregisterPlugin(this.plugin);
      pluginHost.broadcast(RERENDER_TEMPLATE_SCOPE_EVENT, name);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return TemplateBase;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

 true ? TemplateBase.propTypes = (_TemplateBase$propTyp = {}, _defineProperty(_TemplateBase$propTyp, PLUGIN_HOST_CONTEXT, prop_types__WEBPACK_IMPORTED_MODULE_1__["object"].isRequired), _defineProperty(_TemplateBase$propTyp, POSITION_CONTEXT, prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired), _defineProperty(_TemplateBase$propTyp, "name", prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired), _defineProperty(_TemplateBase$propTyp, "predicate", prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]), _defineProperty(_TemplateBase$propTyp, "children", Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]])), _TemplateBase$propTyp) : undefined;
TemplateBase.defaultProps = {
  predicate: undefined,
  children: undefined
};
var Template = withHostAndPosition(TemplateBase);

var TemplateConnector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TemplateConnector, _React$Component);

  function TemplateConnector(props, context) {
    var _this;

    _classCallCheck(this, TemplateConnector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateConnector).call(this, props, context));
    _this.trackedDependencies = {};
    _this.subscription = _defineProperty({}, UPDATE_CONNECTION_EVENT, function () {
      return _this.updateConnection();
    });
    return _this;
  }

  _createClass(TemplateConnector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pluginHost = this.context;
      pluginHost.registerSubscription(this.subscription);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var pluginHost = this.context;
      pluginHost.unregisterSubscription(this.subscription);
    }
  }, {
    key: "updateConnection",
    value: function updateConnection() {
      var pluginHost = this.context;

      if (isTrackedDependenciesChanged(pluginHost, this.trackedDependencies)) {
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var pluginHost = this.context;
      var children = this.props.children;

      var _getAvailableGetters = getAvailableGetters(pluginHost),
          getters = _getAvailableGetters.getters,
          trackedDependencies = _getAvailableGetters.trackedDependencies;

      this.trackedDependencies = trackedDependencies;
      var actions = getAvailableActions(pluginHost);
      return children(getters, actions);
    }
  }]);

  return TemplateConnector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
 true ? TemplateConnector.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
} : undefined;
TemplateConnector.contextType = PluginHostContext;

var TIMEOUT = 180;
var TouchStrategy =
/*#__PURE__*/
function () {
  function TouchStrategy(delegate) {
    _classCallCheck(this, TouchStrategy);

    this.delegate = delegate;
    this.touchStartTimeout = null;
    this.dragging = false;
  }

  _createClass(TouchStrategy, [{
    key: "isDragging",
    value: function isDragging() {
      return this.dragging;
    }
  }, {
    key: "isWaiting",
    value: function isWaiting() {
      return !!this.touchStartTimeout;
    }
  }, {
    key: "cancelWaiting",
    value: function cancelWaiting() {
      clearTimeout(this.touchStartTimeout);
      this.touchStartTimeout = null;
    }
  }, {
    key: "start",
    value: function start(e) {
      var _this = this;

      var _e$touches$ = e.touches[0],
          x = _e$touches$.clientX,
          y = _e$touches$.clientY;
      this.touchStartTimeout = setTimeout(function () {
        _this.delegate.onStart({
          x: x,
          y: y
        });

        _this.dragging = true;
      }, TIMEOUT);
    }
  }, {
    key: "move",
    value: function move(e) {
      this.cancelWaiting();

      if (this.dragging) {
        var _e$touches$2 = e.touches[0],
            clientX = _e$touches$2.clientX,
            clientY = _e$touches$2.clientY;
        e.preventDefault();
        this.delegate.onMove({
          x: clientX,
          y: clientY
        });
      }
    }
  }, {
    key: "end",
    value: function end(e) {
      this.cancelWaiting();

      if (this.dragging) {
        var _e$changedTouches$ = e.changedTouches[0],
            clientX = _e$changedTouches$.clientX,
            clientY = _e$changedTouches$.clientY;
        this.delegate.onEnd({
          x: clientX,
          y: clientY
        });
      }

      this.mouseInitialOffset = null;
      this.dragging = false;
    }
  }]);

  return TouchStrategy;
}();

/* globals document:true */
var gestureCover = null;
var toggleGestureCover = function toggleGestureCover(toggle, cursor) {
  var style = {
    pointerEvents: toggle ? 'all' : 'none'
  };

  if (toggle && cursor) {
    style = _objectSpread({}, style, {
      cursor: cursor
    });
  }

  if (!gestureCover) {
    style = _objectSpread({}, style, {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      opacity: 0,
      zIndex: 2147483647
    });
    gestureCover = document.createElement('div');
    document.body.appendChild(gestureCover);
  }

  Object.keys(style).forEach(function (key) {
    gestureCover.style[key] = style[key];
  });
};

var BOUNDARY = 10;

var clamp = function clamp(value, min, max) {
  return Math.max(Math.min(value, max), min);
};

var isBoundExceeded = function isBoundExceeded(_ref, _ref2) {
  var initialX = _ref.x,
      initialY = _ref.y;
  var x = _ref2.x,
      y = _ref2.y;
  return clamp(x, initialX - BOUNDARY, initialX + BOUNDARY) !== x || clamp(y, initialY - BOUNDARY, initialY + BOUNDARY) !== y;
};

var MouseStrategy =
/*#__PURE__*/
function () {
  function MouseStrategy(delegate) {
    _classCallCheck(this, MouseStrategy);

    this.delegate = delegate;
    this.mouseInitialOffset = null;
    this.dragging = false;
  }

  _createClass(MouseStrategy, [{
    key: "isDragging",
    value: function isDragging() {
      return this.dragging;
    }
  }, {
    key: "start",
    value: function start(e) {
      var x = e.clientX,
          y = e.clientY;
      this.e = e;
      this.mouseInitialOffset = {
        x: x,
        y: y
      };
    }
  }, {
    key: "move",
    value: function move(e) {
      var x = e.clientX,
          y = e.clientY;
      var dragStarted = false;

      if (!this.dragging && this.mouseInitialOffset) {
        if (isBoundExceeded(this.mouseInitialOffset, {
          x: x,
          y: y
        })) {
          this.delegate.onStart(this.mouseInitialOffset);

          if (window.getSelection) {
            window.getSelection().removeAllRanges();
          }

          dragStarted = true;
          this.dragging = true;
        }
      }

      if (this.dragging) {
        e.preventDefault();
        this.delegate.onMove({
          x: x,
          y: y
        });
      }

      if (dragStarted) {
        var _window$getComputedSt = window.getComputedStyle(document.elementFromPoint(x, y)),
            cursor = _window$getComputedSt.cursor;

        toggleGestureCover(true, cursor);
      }
    }
  }, {
    key: "end",
    value: function end(e) {
      if (this.dragging) {
        var x = e.clientX,
            y = e.clientY;
        toggleGestureCover(false);
        this.delegate.onEnd({
          x: x,
          y: y
        });
      }

      this.mouseInitialOffset = null;
      this.dragging = false;
    }
  }]);

  return MouseStrategy;
}();

/* globals window:true */
var eventEmitter = null;
var getSharedEventEmitter = function getSharedEventEmitter() {
  if (!eventEmitter) {
    eventEmitter = new _devexpress_dx_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    ['mousemove', 'mouseup', 'touchmove', 'touchend', 'touchcancel'].forEach(function (name) {
      return window.addEventListener(name, function (e) {
        return eventEmitter.emit([name, e]);
      }, {
        passive: false
      });
    });
  }

  return eventEmitter;
};

/* globals document:true window:true */
var clear = function clear() {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    document.selection.empty();
  }
};

var draggingHandled = Symbol('draggingHandled');
var Draggable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Draggable, _React$Component);

  function Draggable(props, context) {
    var _this;

    _classCallCheck(this, Draggable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Draggable).call(this, props, context));
    var delegate = {
      onStart: function onStart(_ref) {
        var x = _ref.x,
            y = _ref.y;
        var onStart = _this.props.onStart;
        if (!onStart) return;
        Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["unstable_batchedUpdates"])(function () {
          onStart({
            x: x,
            y: y
          });
        });
      },
      onMove: function onMove(_ref2) {
        var x = _ref2.x,
            y = _ref2.y;
        var onUpdate = _this.props.onUpdate;
        if (!onUpdate) return;
        Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["unstable_batchedUpdates"])(function () {
          onUpdate({
            x: x,
            y: y
          });
        });
      },
      onEnd: function onEnd(_ref3) {
        var x = _ref3.x,
            y = _ref3.y;
        var onEnd = _this.props.onEnd;
        if (!onEnd) return;
        Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["unstable_batchedUpdates"])(function () {
          onEnd({
            x: x,
            y: y
          });
        });
      }
    };
    _this.mouseStrategy = new MouseStrategy(delegate);
    _this.touchStrategy = new TouchStrategy(delegate);
    _this.mouseDownListener = _this.mouseDownListener.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.touchStartListener = _this.touchStartListener.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.globalListener = _this.globalListener.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Draggable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      getSharedEventEmitter().subscribe(this.globalListener);
      this.setupNodeSubscription();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var children = this.props.children;
      return nextProps.children !== children;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setupNodeSubscription();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      getSharedEventEmitter().unsubscribe(this.globalListener);
    }
  }, {
    key: "setupNodeSubscription",
    value: function setupNodeSubscription() {
      // eslint-disable-next-line react/no-find-dom-node
      var node$$1 = Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this);
      if (!node$$1) return;
      node$$1.removeEventListener('mousedown', this.mouseDownListener);
      node$$1.removeEventListener('touchstart', this.touchStartListener);
      node$$1.addEventListener('mousedown', this.mouseDownListener, {
        passive: true
      });
      node$$1.addEventListener('touchstart', this.touchStartListener, {
        passive: true
      });
    }
  }, {
    key: "mouseDownListener",
    value: function mouseDownListener(e) {
      if (this.touchStrategy.isWaiting() || e[draggingHandled]) return;
      this.mouseStrategy.start(e);
      e[draggingHandled] = true;
    }
  }, {
    key: "touchStartListener",
    value: function touchStartListener(e) {
      if (e[draggingHandled]) return;
      this.touchStrategy.start(e);
      e[draggingHandled] = true;
    }
  }, {
    key: "globalListener",
    value: function globalListener(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          name = _ref5[0],
          e = _ref5[1];

      switch (name) {
        case 'mousemove':
          this.mouseStrategy.move(e);
          break;

        case 'mouseup':
          this.mouseStrategy.end(e);
          break;

        case 'touchmove':
          {
            this.touchStrategy.move(e);
            break;
          }

        case 'touchend':
        case 'touchcancel':
          {
            this.touchStrategy.end(e);
            break;
          }

        default:
          break;
      }

      if (this.mouseStrategy.isDragging() || this.touchStrategy.isDragging()) {
        clear();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return Draggable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
 true ? Draggable.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onEnd: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
} : undefined;
Draggable.defaultProps = {
  onStart: undefined,
  onUpdate: undefined,
  onEnd: undefined
};

var DragDropContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

var DragDropProviderCore =
/*#__PURE__*/
function () {
  function DragDropProviderCore() {
    _classCallCheck(this, DragDropProviderCore);

    this.payload = null;
    this.dragEmitter = new _devexpress_dx_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
  }

  _createClass(DragDropProviderCore, [{
    key: "start",
    value: function start(payload, clientOffset) {
      this.payload = payload;
      this.dragEmitter.emit({
        payload: this.payload,
        clientOffset: clientOffset
      });
    }
  }, {
    key: "update",
    value: function update(clientOffset) {
      this.dragEmitter.emit({
        payload: this.payload,
        clientOffset: clientOffset
      });
    }
  }, {
    key: "end",
    value: function end(clientOffset) {
      this.dragEmitter.emit({
        payload: this.payload,
        clientOffset: clientOffset,
        end: true
      });
      this.payload = null;
    }
  }]);

  return DragDropProviderCore;
}();

var DragDropProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DragDropProvider, _React$Component);

  function DragDropProvider(props) {
    var _this;

    _classCallCheck(this, DragDropProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DragDropProvider).call(this, props));
    var onChange = _this.props.onChange;
    _this.dragDropProvider = new DragDropProviderCore();

    _this.dragDropProvider.dragEmitter.subscribe(function (_ref) {
      var payload = _ref.payload,
          clientOffset = _ref.clientOffset,
          end = _ref.end;
      onChange({
        payload: end ? null : payload,
        clientOffset: end ? null : clientOffset
      });
    });

    return _this;
  }

  _createClass(DragDropProvider, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var children = this.props.children;
      return nextProps.children !== children;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DragDropContext.Provider, {
        value: this.dragDropProvider
      }, children);
    }
  }]);

  return DragDropProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
 true ? DragDropProvider.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
} : undefined;
DragDropProvider.defaultProps = {
  onChange: function onChange() {}
};

var DragSource =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DragSource, _React$Component);

  function DragSource() {
    _classCallCheck(this, DragSource);

    return _possibleConstructorReturn(this, _getPrototypeOf(DragSource).apply(this, arguments));
  }

  _createClass(DragSource, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var children = this.props.children;
      return nextProps.children !== children;
    }
  }, {
    key: "render",
    value: function render() {
      var dragDropProvider = this.context;
      var _this$props = this.props,
          _onStart = _this$props.onStart,
          _onUpdate = _this$props.onUpdate,
          _onEnd = _this$props.onEnd,
          payload = _this$props.payload,
          children = _this$props.children;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Draggable, {
        onStart: function onStart(_ref) {
          var x = _ref.x,
              y = _ref.y;
          dragDropProvider.start(payload, {
            x: x,
            y: y
          });

          _onStart({
            clientOffset: {
              x: x,
              y: y
            }
          });
        },
        onUpdate: function onUpdate(_ref2) {
          var x = _ref2.x,
              y = _ref2.y;
          dragDropProvider.update({
            x: x,
            y: y
          });

          _onUpdate({
            clientOffset: {
              x: x,
              y: y
            }
          });
        },
        onEnd: function onEnd(_ref3) {
          var x = _ref3.x,
              y = _ref3.y;
          dragDropProvider.end({
            x: x,
            y: y
          });

          _onEnd({
            clientOffset: {
              x: x,
              y: y
            }
          });
        }
      }, children);
    }
  }]);

  return DragSource;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
DragSource.contextType = DragDropContext;
 true ? DragSource.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired,
  payload: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"].isRequired,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onEnd: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
} : undefined;
DragSource.defaultProps = {
  onStart: function onStart() {},
  onUpdate: function onUpdate() {},
  onEnd: function onEnd() {}
};

var clamp$1 = function clamp(value, min, max) {
  return Math.max(Math.min(value, max), min);
};

var DropTarget =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropTarget, _React$Component);

  function DropTarget(props) {
    var _this;

    _classCallCheck(this, DropTarget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropTarget).call(this, props));
    _this.node = null;
    _this.isOver = false;
    _this.handleDrag = _this.handleDrag.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DropTarget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dragEmitter = this.context.dragEmitter;
      dragEmitter.subscribe(this.handleDrag);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var children = this.props.children;
      return nextProps.children !== children;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var dragEmitter = this.context.dragEmitter;
      dragEmitter.unsubscribe(this.handleDrag);
    }
  }, {
    key: "handleDrag",
    value: function handleDrag(_ref) {
      var payload = _ref.payload,
          clientOffset = _ref.clientOffset,
          end = _ref.end;

      var _findDOMNode$getBound = Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this).getBoundingClientRect(),
          left = _findDOMNode$getBound.left,
          top = _findDOMNode$getBound.top,
          right = _findDOMNode$getBound.right,
          bottom = _findDOMNode$getBound.bottom; // eslint-disable-line react/no-find-dom-node


      var _this$props = this.props,
          onDrop = _this$props.onDrop,
          onEnter = _this$props.onEnter,
          onLeave = _this$props.onLeave,
          onOver = _this$props.onOver;
      var isOver = clientOffset && clamp$1(clientOffset.x, left, right) === clientOffset.x && clamp$1(clientOffset.y, top, bottom) === clientOffset.y;
      if (!this.isOver && isOver) onEnter({
        payload: payload,
        clientOffset: clientOffset
      });
      if (this.isOver && isOver) onOver({
        payload: payload,
        clientOffset: clientOffset
      });
      if (this.isOver && !isOver) onLeave({
        payload: payload,
        clientOffset: clientOffset
      });
      if (isOver && end) onDrop({
        payload: payload,
        clientOffset: clientOffset
      });
      this.isOver = isOver && !end;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);
    }
  }]);

  return DropTarget;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
DropTarget.contextType = DragDropContext;
 true ? DropTarget.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired,
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onOver: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onLeave: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onDrop: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
} : undefined;
DropTarget.defaultProps = {
  onEnter: function onEnter() {},
  onOver: function onOver() {},
  onLeave: function onLeave() {},
  onDrop: function onDrop() {}
};

var RefHolder =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RefHolder, _React$PureComponent);

  function RefHolder() {
    _classCallCheck(this, RefHolder);

    return _possibleConstructorReturn(this, _getPrototypeOf(RefHolder).apply(this, arguments));
  }

  _createClass(RefHolder, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return RefHolder;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? RefHolder.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired
} : undefined;

var styles = {
  triggersRoot: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    zIndex: -1,
    visibility: 'hidden',
    opacity: 0
  },
  expandTrigger: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    overflow: 'auto'
  },
  contractTrigger: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    overflow: 'auto',
    minHeight: '1px',
    minWidth: '1px'
  },
  contractNotifier: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '200%',
    height: '200%'
  }
};
var Sizer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Sizer, _React$PureComponent);

  function Sizer(props) {
    var _this;

    _classCallCheck(this, Sizer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sizer).call(this, props));
    _this.setupListeners = _this.setupListeners.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.rootRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    return _this;
  }

  _createClass(Sizer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createListeners();
      this.setupListeners();
    }
  }, {
    key: "setupListeners",
    value: function setupListeners() {
      // eslint-disable-next-line react/no-find-dom-node
      var rootNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this.rootRef.current);
      var size = {
        height: rootNode.clientHeight,
        width: rootNode.clientWidth
      };
      this.contractTrigger.scrollTop = size.height;
      this.contractTrigger.scrollLeft = size.width;
      this.expandNotifier.style.width = "".concat(size.width + 1, "px");
      this.expandNotifier.style.height = "".concat(size.height + 1, "px");
      this.expandTrigger.scrollTop = 1;
      this.expandTrigger.scrollLeft = 1;
      var onSizeChange = this.props.onSizeChange;
      onSizeChange(size);
    }
  }, {
    key: "createListeners",
    value: function createListeners() {
      // eslint-disable-next-line react/no-find-dom-node
      var rootNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this.rootRef.current);
      this.triggersRoot = document.createElement('div');
      Object.assign(this.triggersRoot.style, styles.triggersRoot);
      rootNode.appendChild(this.triggersRoot);
      this.expandTrigger = document.createElement('div');
      Object.assign(this.expandTrigger.style, styles.expandTrigger);
      this.expandTrigger.addEventListener('scroll', this.setupListeners);
      this.triggersRoot.appendChild(this.expandTrigger);
      this.expandNotifier = document.createElement('div');
      this.expandTrigger.appendChild(this.expandNotifier);
      this.contractTrigger = document.createElement('div');
      Object.assign(this.contractTrigger.style, styles.contractTrigger);
      this.contractTrigger.addEventListener('scroll', this.setupListeners);
      this.triggersRoot.appendChild(this.contractTrigger);
      this.contractNotifier = document.createElement('div');
      Object.assign(this.contractNotifier.style, styles.contractNotifier);
      this.contractTrigger.appendChild(this.contractNotifier);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSizeChange = _this$props.onSizeChange,
          Container = _this$props.containerComponent,
          restProps = _objectWithoutProperties(_this$props, ["onSizeChange", "containerComponent"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RefHolder, {
        ref: this.rootRef
      }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Container // NOTE: should have `position: relative`
      , restProps));
    }
  }]);

  return Sizer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
 true ? Sizer.propTypes = {
  onSizeChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  containerComponent: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["string"], prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]])
} : undefined;
Sizer.defaultProps = {
  containerComponent: 'div'
};

var connectProps = function connectProps(WrappedComponent, getAdditionalProps) {
  var storedAdditionalProps = getAdditionalProps();
  var components = new Set();

  var RenderComponent =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(RenderComponent, _React$PureComponent);

    function RenderComponent() {
      _classCallCheck(this, RenderComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(RenderComponent).apply(this, arguments));
    }

    _createClass(RenderComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        components.add(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        components.delete(this);
      }
    }, {
      key: "render",
      value: function render() {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, _extends({}, this.props, storedAdditionalProps));
      }
    }]);

    return RenderComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

  RenderComponent.update = function () {
    storedAdditionalProps = getAdditionalProps();
    Array.from(components.values()).forEach(function (component) {
      return component.forceUpdate();
    });
  };

  return RenderComponent;
};

var createStateHelper = function createStateHelper(component) {
  var controlledStateProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var notifyStateChange = function notifyStateChange(nextState, state) {
    Object.keys(controlledStateProperties).forEach(function (propertyName) {
      var changeEvent = controlledStateProperties[propertyName]();

      if (changeEvent && nextState[propertyName] !== state[propertyName]) {
        changeEvent(nextState[propertyName]);
      }
    });
  };

  var lastStateUpdater = null;
  var initialState = null;
  var lastInitialState = null;

  var applyReducer = function applyReducer(reduce, payload, callback) {
    var stateUpdater = function stateUpdater(prevState) {
      if (initialState === null) {
        initialState = prevState;
      }

      var stateChange = reduce(_objectSpread({}, prevState), payload);

      var state = _objectSpread({}, prevState, stateChange);

      if (typeof callback === 'function') {
        callback(state, prevState);
      }

      if (stateUpdater === lastStateUpdater) {
        if (lastInitialState !== initialState) {
          notifyStateChange(state, initialState);
          lastInitialState = initialState;
        }

        initialState = null;
      }

      return stateChange;
    };

    lastStateUpdater = stateUpdater;
    component.setState(stateUpdater);
  };

  var applyFieldReducer = function applyFieldReducer(field, reduce, payload) {
    applyReducer(function (state) {
      return _defineProperty({}, field, reduce(state[field], payload));
    });
  };

  return {
    applyReducer: applyReducer,
    applyFieldReducer: applyFieldReducer
  };
};

var makeBoundComponent = function makeBoundComponent(Target, components, exposed) {
  var Component$$1 =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Component$$1, _React$PureComponent);

    function Component$$1() {
      _classCallCheck(this, Component$$1);

      return _possibleConstructorReturn(this, _getPrototypeOf(Component$$1).apply(this, arguments));
    }

    _createClass(Component$$1, [{
      key: "render",
      value: function render() {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Target, _extends({}, components, this.props));
      }
    }]);

    return Component$$1;
  }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

  Component$$1.components = Target.components;
  Object.assign(Component$$1, exposed);
  return Component$$1;
};

var withComponents = function withComponents(components) {
  return function (Target) {
    var props = {};
    var exposed = {};
    Object.entries(Target.components).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          fieldName = _ref2[0],
          componentName = _ref2[1];

      var component = components[componentName];

      if (component && component !== Target[componentName]) {
        props[fieldName] = component;
      }

      exposed[componentName] = component || Target[componentName];
    });
    return Object.keys(props).length > 0 ? makeBoundComponent(Target, props, exposed) : Target;
  };
};

/* globals Element */
var RefType = Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
  current: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["instanceOf"])(typeof Element !== 'undefined' ? Element : Object)
});


//# sourceMappingURL=dx-react-core.es.js.map


/***/ }),

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = _pairs__WEBPACK_IMPORTED_MODULE_0__["pair"];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");


/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  var v = Object(_variance__WEBPACK_IMPORTED_MODULE_0__["default"])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),

/***/ "./node_modules/d3-array/src/histogram.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/histogram.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-array/src/identity.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/index.js ***!
  \********************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cross */ "./node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./descending */ "./node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deviation */ "./node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./histogram */ "./node_modules/d3-array/src/histogram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _histogram__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./threshold/freedmanDiaconis */ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _threshold_scott__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./threshold/scott */ "./node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./max */ "./node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mean */ "./node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _median__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./median */ "./node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _permute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./permute */ "./node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scan */ "./node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shuffle */ "./node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sum */ "./node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["tickStep"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./zip */ "./node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip__WEBPACK_IMPORTED_MODULE_26__["default"]; });






























/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");




/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["default"])(numbers.sort(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]), 0.5);
});


/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, p, valueof) {
  if (valueof == null) valueof = _number__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = _ascending__WEBPACK_IMPORTED_MODULE_0__["default"];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quantile */ "./node_modules/d3-array/src/quantile.js");





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(values, _number__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.75) - Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deviation */ "./node_modules/d3-array/src/deviation.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation__WEBPACK_IMPORTED_MODULE_0__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/d3-collection/src/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-collection/src/entries.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),

/***/ "./node_modules/d3-collection/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-collection/src/index.js ***!
  \*************************************************/
/*! exports provided: nest, set, map, keys, values, entries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nest */ "./node_modules/d3-collection/src/nest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return _nest__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set */ "./node_modules/d3-collection/src/set.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _set__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keys */ "./node_modules/d3-collection/src/keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _keys__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./values */ "./node_modules/d3-collection/src/values.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _values__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entries */ "./node_modules/d3-collection/src/entries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return _entries__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/d3-collection/src/keys.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/keys.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),

/***/ "./node_modules/d3-collection/src/map.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/map.js ***!
  \***********************************************/
/*! exports provided: prefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["default"] = (map);


/***/ }),

/***/ "./node_modules/d3-collection/src/nest.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/nest.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(_map__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(_map__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),

/***/ "./node_modules/d3-collection/src/set.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/set.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");


function Set() {}

var proto = _map__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[_map__WEBPACK_IMPORTED_MODULE_0__["prefix"] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* harmony default export */ __webpack_exports__["default"] = (set);


/***/ }),

/***/ "./node_modules/d3-collection/src/values.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-collection/src/values.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbConvert", function() { return rgbConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgb", function() { return Rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslConvert", function() { return hslConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cubehelix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubehelix", function() { return Cubehelix; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Cubehelix, cubehelix, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__["brighter"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color__WEBPACK_IMPORTED_MODULE_1__["darker"] : Math.pow(_color__WEBPACK_IMPORTED_MODULE_1__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab */ "./node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _lab__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix */ "./node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lab", function() { return Lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcl", function() { return Hcl; });
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-color/src/math.js");




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * _math__WEBPACK_IMPORTED_MODULE_2__["deg2rad"];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Lab, lab, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math__WEBPACK_IMPORTED_MODULE_2__["rad2deg"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define__WEBPACK_IMPORTED_MODULE_0__["default"])(Hcl, hcl, Object(_define__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatSpecifier; });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatPrefixAuto */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _formatRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded */ "./node_modules/d3-format/src/formatRounded.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(_formatRounded__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p); },
  "r": _formatRounded__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_0__["default"],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-format/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-format/src/index.js ***!
  \*********************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["formatPrefix"]; });

/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./node_modules/d3-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return _locale__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _formatSpecifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatSpecifier */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return _formatSpecifier__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _precisionFixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./precisionFixed */ "./node_modules/d3-format/src/precisionFixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return _precisionFixed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _precisionPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./precisionPrefix */ "./node_modules/d3-format/src/precisionPrefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return _precisionPrefix__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _precisionRound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precisionRound */ "./node_modules/d3-format/src/precisionRound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _precisionRound__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");
/* harmony import */ var _formatGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup */ "./node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var _formatNumerals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals */ "./node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var _formatSpecifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var _formatTrim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim */ "./node_modules/d3-format/src/formatTrim.js");
/* harmony import */ var _formatTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes */ "./node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-format/src/identity.js");









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(_formatGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(locale.grouping, locale.thousands) : _identity__WEBPACK_IMPORTED_MODULE_7__["default"],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(_formatNumerals__WEBPACK_IMPORTED_MODULE_2__["default"])(locale.numerals) : _identity__WEBPACK_IMPORTED_MODULE_7__["default"],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes__WEBPACK_IMPORTED_MODULE_5__["default"][type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes__WEBPACK_IMPORTED_MODULE_5__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(_formatTrim__WEBPACK_IMPORTED_MODULE_4__["default"])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_6__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/discrete.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/discrete.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hue.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = Object(_color__WEBPACK_IMPORTED_MODULE_0__["hue"])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/index.js ***!
  \**************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _value__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _basis__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _basisClosed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date */ "./node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _date__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _discrete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete */ "./node_modules/d3-interpolate/src/discrete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDiscrete", function() { return _discrete__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue */ "./node_modules/d3-interpolate/src/hue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHue", function() { return _hue__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object */ "./node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _object__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./round */ "./node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _round__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string */ "./node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _string__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _transform_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transform/index */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _transform_index__WEBPACK_IMPORTED_MODULE_11__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _transform_index__WEBPACK_IMPORTED_MODULE_11__["interpolateTransformSvg"]; });

/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zoom */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _zoom__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rgb */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _rgb__WEBPACK_IMPORTED_MODULE_13__["rgbBasisClosed"]; });

/* harmony import */ var _hsl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hsl */ "./node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _hsl__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _hsl__WEBPACK_IMPORTED_MODULE_14__["hslLong"]; });

/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lab */ "./node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _lab__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _hcl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hcl */ "./node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _hcl__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _hcl__WEBPACK_IMPORTED_MODULE_16__["hclLong"]; });

/* harmony import */ var _cubehelix__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cubehelix */ "./node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _cubehelix__WEBPACK_IMPORTED_MODULE_17__["cubehelixLong"]; });

/* harmony import */ var _piecewise__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./piecewise */ "./node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _piecewise__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quantize */ "./node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _quantize__WEBPACK_IMPORTED_MODULE_19__["default"]; });























/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return piecewise; });
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse__WEBPACK_IMPORTED_MODULE_1__["parseSvg"], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCss", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSvg", function() { return parseSvg; });
/* harmony import */ var _decompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose__WEBPACK_IMPORTED_MODULE_0__["identity"];
  value = value.matrix;
  return Object(_decompose__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ "./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string */ "./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-interpolate/src/constant.js");









/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Array.isArray(b) ? _array__WEBPACK_IMPORTED_MODULE_2__["default"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["default"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),

/***/ "./node_modules/d3-path/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-path/src/index.js ***!
  \*******************************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "./node_modules/d3-path/src/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _path__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (path);


/***/ }),

/***/ "./node_modules/d3-scale/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/array.js ***!
  \********************************************/
/*! exports provided: map, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js");



function band() {
  var scale = Object(_ordinal__WEBPACK_IMPORTED_MODULE_1__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/*! exports provided: deinterpolateLinear, copy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deinterpolateLinear", function() { return deinterpolateLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_2__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_4__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_2__["slice"].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = _array__WEBPACK_IMPORTED_MODULE_2__["slice"].call(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRound"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),

/***/ "./node_modules/d3-scale/src/diverging.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/diverging.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diverging; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");


function diverging(interpolator) {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      k10 = 1,
      k21 = 1,
      clamp = false;

  function scale(x) {
    var t = 0.5 + ((x = +x) - x1) * (x < x1 ? k10 : k21);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], x2 = +_[2], k10 = x0 === x1 ? 0 : 0.5 / (x1 - x0), k21 = x1 === x2 ? 0 : 0.5 / (x2 - x1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return diverging(interpolator).domain([x0, x1, x2]).clamp(clamp);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_2__["default"]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/index.js ***!
  \********************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleDiverging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band */ "./node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _identity__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _linear__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _log__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_4__["implicit"]; });

/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pow */ "./node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _pow__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _pow__WEBPACK_IMPORTED_MODULE_5__["sqrt"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quantize */ "./node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _quantize__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _threshold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./threshold */ "./node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _threshold__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time */ "./node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _time__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _utcTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utcTime */ "./node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _utcTime__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sequential */ "./node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _sequential__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _diverging__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./diverging */ "./node_modules/d3-scale/src/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDiverging", function() { return _diverging__WEBPACK_IMPORTED_MODULE_12__["default"]; });




























/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(_tickFormat__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_2__["deinterpolateLinear"], d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["default"])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(_nice__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, log().base(base));
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/*! exports provided: default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(scale, pow().exponent(exponent));
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      k10 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) * k10;
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], k10 = x0 === x1 ? 0 : 1 / (x1 - x0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_5__["deinterpolateLinear"], d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(_array__WEBPACK_IMPORTED_MODULE_4__["map"].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(_nice__WEBPACK_IMPORTED_MODULE_6__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return calendar(d3_time__WEBPACK_IMPORTED_MODULE_2__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_time__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/arc.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-shape/src/math.js");




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["max"])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        a1 = endAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        da = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
      context.moveTo(r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0), r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        context.moveTo(r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1), r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && (padRadius ? +padRadius.apply(this, arguments) : Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(r0 * r0 + r1 * r1)),
          rc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var p0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)),
            p1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap));
        if ((da0 -= p0 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
          y01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
          x10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
          y10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10);

      // Apply rounded corners?
      if (rc > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var x11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
            y11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
            x00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
            y00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < _math__WEBPACK_IMPORTED_MODULE_2__["pi"]) {
          var oc = da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["acos"])((ax * bx + ay * by) / (Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(ax * ax + ay * ay) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(bx * bx + by * by))) / 2),
              lc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) || !(da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
    return [Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r, Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/area.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point */ "./node_modules/d3-shape/src/point.js");






/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = _point__WEBPACK_IMPORTED_MODULE_4__["x"],
      x1 = null,
      y0 = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      y1 = _point__WEBPACK_IMPORTED_MODULE_4__["y"],
      defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(_line__WEBPACK_IMPORTED_MODULE_3__["default"])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/areaRadial.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-shape/src/area.js");
/* harmony import */ var _lineRadial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineRadial */ "./node_modules/d3-shape/src/lineRadial.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var a = Object(_area__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return a;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/array.js ***!
  \********************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basis.js ***!
  \**************************************************/
/*! exports provided: point, Basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basis", function() { return Basis; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Basis(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(_basis__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(_basis__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");


function Bundle(context, beta) {
  this._basis = new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
  \*****************************************************/
/*! exports provided: point, Cardinal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinal", function() { return Cardinal; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
/*! exports provided: CardinalClosed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalClosed", function() { return CardinalClosed; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_cardinal__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
  \*********************************************************/
/*! exports provided: CardinalOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalOpen", function() { return CardinalOpen; });
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_cardinal__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
  \*******************************************************/
/*! exports provided: point, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new _cardinal__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_catmullRom__WEBPACK_IMPORTED_MODULE_2__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__["CardinalClosed"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_catmullRom__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Linear(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
  \*****************************************************/
/*! exports provided: monotoneX, monotoneY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneX", function() { return monotoneX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneY", function() { return monotoneY; });
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/natural.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Natural(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/radial.js ***!
  \***************************************************/
/*! exports provided: curveRadialLinear, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function() { return curveRadialLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curveRadial; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-shape/src/curve/linear.js");


var curveRadialLinear = curveRadial(_linear__WEBPACK_IMPORTED_MODULE_0__["default"]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
/*! exports provided: default, stepBefore, stepAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepBefore", function() { return stepBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepAfter", function() { return stepAfter; });
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  return d;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/index.js ***!
  \********************************************/
/*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc */ "./node_modules/d3-shape/src/arc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return _arc__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-shape/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return _area__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return _line__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie */ "./node_modules/d3-shape/src/pie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return _pie__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _areaRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areaRadial */ "./node_modules/d3-shape/src/areaRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return _areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return _areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lineRadial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineRadial */ "./node_modules/d3-shape/src/lineRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return _lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return _lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _pointRadial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointRadial */ "./node_modules/d3-shape/src/pointRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return _pointRadial__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _link_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link/index */ "./node_modules/d3-shape/src/link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkRadial"]; });

/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symbol */ "./node_modules/d3-shape/src/symbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return _symbol__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return _symbol__WEBPACK_IMPORTED_MODULE_8__["symbols"]; });

/* harmony import */ var _symbol_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return _symbol_circle__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _symbol_cross__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return _symbol_cross__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _symbol_diamond__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return _symbol_diamond__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _symbol_square__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./symbol/square */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return _symbol_square__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _symbol_star__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./symbol/star */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return _symbol_star__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _symbol_triangle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return _symbol_triangle__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _symbol_wye__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return _symbol_wye__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curve/basisClosed */ "./node_modules/d3-shape/src/curve/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return _curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./curve/basisOpen */ "./node_modules/d3-shape/src/curve/basisOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return _curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _curve_basis__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./curve/basis */ "./node_modules/d3-shape/src/curve/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return _curve_basis__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _curve_bundle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./curve/bundle */ "./node_modules/d3-shape/src/curve/bundle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return _curve_bundle__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./curve/cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return _curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./curve/cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return _curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _curve_cardinal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curve/cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return _curve_cardinal__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./curve/catmullRomClosed */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return _curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./curve/catmullRomOpen */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return _curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./curve/catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return _curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./curve/linearClosed */ "./node_modules/d3-shape/src/curve/linearClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return _curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return _curve_linear__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _curve_monotone__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./curve/monotone */ "./node_modules/d3-shape/src/curve/monotone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return _curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return _curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneY"]; });

/* harmony import */ var _curve_natural__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./curve/natural */ "./node_modules/d3-shape/src/curve/natural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return _curve_natural__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _curve_step__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./curve/step */ "./node_modules/d3-shape/src/curve/step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["stepAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["stepBefore"]; });

/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stack */ "./node_modules/d3-shape/src/stack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _stack__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _offset_expand__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./offset/expand */ "./node_modules/d3-shape/src/offset/expand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return _offset_expand__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _offset_diverging__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./offset/diverging */ "./node_modules/d3-shape/src/offset/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return _offset_diverging__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _offset_none__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./offset/none */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return _offset_none__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _offset_silhouette__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./offset/silhouette */ "./node_modules/d3-shape/src/offset/silhouette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return _offset_silhouette__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _offset_wiggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./offset/wiggle */ "./node_modules/d3-shape/src/offset/wiggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return _offset_wiggle__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _order_ascending__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./order/ascending */ "./node_modules/d3-shape/src/order/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return _order_ascending__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _order_descending__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./order/descending */ "./node_modules/d3-shape/src/order/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return _order_descending__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _order_insideOut__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./order/insideOut */ "./node_modules/d3-shape/src/order/insideOut.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return _order_insideOut__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _order_none__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./order/none */ "./node_modules/d3-shape/src/order/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return _order_none__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _order_reverse__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./order/reverse */ "./node_modules/d3-shape/src/order/reverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return _order_reverse__WEBPACK_IMPORTED_MODULE_41__["default"]; });





 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!









































/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/line.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./node_modules/d3-shape/src/point.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
      defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/lineRadial.js ***!
  \*************************************************/
/*! exports provided: lineRadial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return lineRadial; });
/* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return lineRadial(Object(_line__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]));
});


/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/link/index.js ***!
  \*************************************************/
/*! exports provided: linkHorizontal, linkVertical, linkRadial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return linkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return linkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return linkRadial; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point */ "./node_modules/d3-shape/src/point.js");
/* harmony import */ var _pointRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointRadial */ "./node_modules/d3-shape/src/pointRadial.js");






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
      context = null;

  function link() {
    var buffer, argv = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
      p1 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
      p3 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
/*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/expand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/none.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/ascending.js ***!
  \******************************************************/
/*! exports provided: default, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var sums = series.map(sum);
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/descending.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js");



/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(_ascending__WEBPACK_IMPORTED_MODULE_1__["sum"]),
      order = Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/order/none.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/order/reverse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/pie.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descending */ "./node_modules/d3-shape/src/descending.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-shape/src/identity.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math */ "./node_modules/d3-shape/src/math.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_2__["default"],
      sortValues = _descending__WEBPACK_IMPORTED_MODULE_1__["default"],
      sort = null,
      startAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0),
      endAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(_math__WEBPACK_IMPORTED_MODULE_3__["tau"]),
      padAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(_math__WEBPACK_IMPORTED_MODULE_3__["tau"], Math.max(-_math__WEBPACK_IMPORTED_MODULE_3__["tau"], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/point.js ***!
  \********************************************/
/*! exports provided: x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/pointRadial.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/stack.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _offset_none__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset/none */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var _order_none__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/none */ "./node_modules/d3-shape/src/order/none.js");





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
      order = _order_none__WEBPACK_IMPORTED_MODULE_3__["default"],
      offset = _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? _order_none__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
  };

  return stack;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-shape/src/symbol.js ***!
  \*********************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _symbol_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var _symbol_cross__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var _symbol_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbol/star */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var _symbol_square__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbol/square */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var _symbol_wye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");










var symbols = [
  _symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"],
  _symbol_cross__WEBPACK_IMPORTED_MODULE_2__["default"],
  _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__["default"],
  _symbol_square__WEBPACK_IMPORTED_MODULE_5__["default"],
  _symbol_star__WEBPACK_IMPORTED_MODULE_4__["default"],
  _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__["default"],
  _symbol_wye__WEBPACK_IMPORTED_MODULE_7__["default"]
];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var type = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"]),
      size = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / _math__WEBPACK_IMPORTED_MODULE_0__["pi"]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/square.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/star.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");


var ka = 0.89081309152928522810,
    kr = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) / Math.sin(7 * _math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10),
    kx = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
    ky = -Math.cos(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = _math__WEBPACK_IMPORTED_MODULE_0__["tau"] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-time-format/src/defaultLocale.js ***!
  \**********************************************************/
/*! exports provided: timeFormat, timeParse, utcFormat, utcParse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return utcParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/d3-time-format/src/locale.js");


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-time-format/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-time-format/src/index.js ***!
  \**************************************************/
/*! exports provided: timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["timeParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcParse"]; });

/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./node_modules/d3-time-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return _locale__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _isoFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isoFormat */ "./node_modules/d3-time-format/src/isoFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return _isoFormat__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _isoParse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isoParse */ "./node_modules/d3-time-format/src/isoParse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return _isoParse__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoFormat.js ***!
  \******************************************************/
/*! exports provided: isoSpecifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoSpecifier", function() { return isoSpecifier; });
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(_defaultLocale__WEBPACK_IMPORTED_MODULE_0__["utcFormat"])(isoSpecifier);

/* harmony default export */ __webpack_exports__["default"] = (formatIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/isoParse.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoParse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isoFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isoFormat */ "./node_modules/d3-time-format/src/isoFormat.js");
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultLocale */ "./node_modules/d3-time-format/src/defaultLocale.js");



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(_defaultLocale__WEBPACK_IMPORTED_MODULE_1__["utcParse"])(_isoFormat__WEBPACK_IMPORTED_MODULE_0__["isoSpecifier"]);

/* harmony default export */ __webpack_exports__["default"] = (parseIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/locale.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-time-format/src/locale.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLocale; });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),

/***/ "./node_modules/d3-time/src/day.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-time/src/day.js ***!
  \*****************************************/
/*! exports provided: default, days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var day = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (day);
var days = day.range;


/***/ }),

/***/ "./node_modules/d3-time/src/duration.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/duration.js ***!
  \**********************************************/
/*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationSecond", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationMinute", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationHour", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationDay", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationWeek", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),

/***/ "./node_modules/d3-time/src/hour.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/hour.js ***!
  \******************************************/
/*! exports provided: default, hours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var hour = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  var offset = date.getTimezoneOffset() * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"] % _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
  if (offset < 0) offset += _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
  date.setTime(Math.floor((+date - offset) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"] + offset);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["default"] = (hour);
var hours = hour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/index.js ***!
  \*******************************************/
/*! exports provided: timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return _interval__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _millisecond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./millisecond */ "./node_modules/d3-time/src/millisecond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return _millisecond__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return _millisecond__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return _millisecond__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return _millisecond__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second */ "./node_modules/d3-time/src/second.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSecond", function() { return _second__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return _second__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSecond", function() { return _second__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return _second__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony import */ var _minute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minute */ "./node_modules/d3-time/src/minute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinute", function() { return _minute__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return _minute__WEBPACK_IMPORTED_MODULE_3__["minutes"]; });

/* harmony import */ var _hour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hour */ "./node_modules/d3-time/src/hour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHour", function() { return _hour__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHours", function() { return _hour__WEBPACK_IMPORTED_MODULE_4__["hours"]; });

/* harmony import */ var _day__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day */ "./node_modules/d3-time/src/day.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDay", function() { return _day__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDays", function() { return _day__WEBPACK_IMPORTED_MODULE_5__["days"]; });

/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week */ "./node_modules/d3-time/src/week.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeek", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSunday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSundays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["monday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMondays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["mondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["tuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["tuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["wednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["wednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["thursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["thursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFriday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["friday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFridays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["fridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["saturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return _week__WEBPACK_IMPORTED_MODULE_6__["saturdays"]; });

/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./month */ "./node_modules/d3-time/src/month.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonth", function() { return _month__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonths", function() { return _month__WEBPACK_IMPORTED_MODULE_7__["months"]; });

/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./year */ "./node_modules/d3-time/src/year.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYear", function() { return _year__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYears", function() { return _year__WEBPACK_IMPORTED_MODULE_8__["years"]; });

/* harmony import */ var _utcMinute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utcMinute */ "./node_modules/d3-time/src/utcMinute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinute", function() { return _utcMinute__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return _utcMinute__WEBPACK_IMPORTED_MODULE_9__["utcMinutes"]; });

/* harmony import */ var _utcHour__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utcHour */ "./node_modules/d3-time/src/utcHour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHour", function() { return _utcHour__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return _utcHour__WEBPACK_IMPORTED_MODULE_10__["utcHours"]; });

/* harmony import */ var _utcDay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utcDay */ "./node_modules/d3-time/src/utcDay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDay", function() { return _utcDay__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return _utcDay__WEBPACK_IMPORTED_MODULE_11__["utcDays"]; });

/* harmony import */ var _utcWeek__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcWeek */ "./node_modules/d3-time/src/utcWeek.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeek", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcMonday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcMondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcTuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcTuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcWednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcWednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcThursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcThursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcFriday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcFridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSaturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return _utcWeek__WEBPACK_IMPORTED_MODULE_12__["utcSaturdays"]; });

/* harmony import */ var _utcMonth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utcMonth */ "./node_modules/d3-time/src/utcMonth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonth", function() { return _utcMonth__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return _utcMonth__WEBPACK_IMPORTED_MODULE_13__["utcMonths"]; });

/* harmony import */ var _utcYear__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utcYear */ "./node_modules/d3-time/src/utcYear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYear", function() { return _utcYear__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return _utcYear__WEBPACK_IMPORTED_MODULE_14__["utcYears"]; });
































/***/ }),

/***/ "./node_modules/d3-time/src/interval.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/interval.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newInterval; });
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),

/***/ "./node_modules/d3-time/src/millisecond.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-time/src/millisecond.js ***!
  \*************************************************/
/*! exports provided: default, milliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var millisecond = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),

/***/ "./node_modules/d3-time/src/minute.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/minute.js ***!
  \********************************************/
/*! exports provided: default, minutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var minute = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(Math.floor(date / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (minute);
var minutes = minute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/month.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/month.js ***!
  \*******************************************/
/*! exports provided: default, months */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var month = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (month);
var months = month.range;


/***/ }),

/***/ "./node_modules/d3-time/src/second.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/second.js ***!
  \********************************************/
/*! exports provided: default, seconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var second = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(Math.floor(date / _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationSecond"];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["default"] = (second);
var seconds = second.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcDay.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/utcDay.js ***!
  \********************************************/
/*! exports provided: default, utcDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var utcDay = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcHour.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcHour.js ***!
  \*********************************************/
/*! exports provided: default, utcHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var utcHour = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["default"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMinute.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-time/src/utcMinute.js ***!
  \***********************************************/
/*! exports provided: default, utcMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



var utcMinute = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMonth.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/utcMonth.js ***!
  \**********************************************/
/*! exports provided: default, utcMonths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var utcMonth = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcWeek.js ***!
  \*********************************************/
/*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



function utcWeekday(i) {
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcYear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcYear.js ***!
  \*********************************************/
/*! exports provided: default, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var utcYear = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),

/***/ "./node_modules/d3-time/src/week.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/week.js ***!
  \******************************************/
/*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunday", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monday", function() { return monday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesday", function() { return tuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesday", function() { return wednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursday", function() { return thursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friday", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturday", function() { return saturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sundays", function() { return sundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mondays", function() { return mondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesdays", function() { return tuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesdays", function() { return wednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursdays", function() { return thursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fridays", function() { return fridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturdays", function() { return saturdays; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./node_modules/d3-time/src/duration.js");



function weekday(i) {
  return Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/year.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/year.js ***!
  \******************************************/
/*! exports provided: default, years */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ "./node_modules/d3-time/src/interval.js");


var year = Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (year);
var years = year.range;


/***/ })

}]);