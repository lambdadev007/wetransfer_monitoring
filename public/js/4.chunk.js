(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@material-ui/icons/Search.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Search.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');

exports.default = _default;

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./resources/js/app/components/FlexList/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/app/components/FlexList/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    list: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: function justifyContent(props) {
        return props.justify === "right" ? "flex-end" : "flex-start";
      },
      margin: function margin(props) {
        return props.justify === "right" ? theme.spacing(0, 0, -props.vertical, -props.horizontal) : theme.spacing(0, -props.horizontal, -props.vertical, 0);
      },
      "& > *": {
        margin: function margin(props) {
          return props.justify === "right" ? theme.spacing(0, 0, props.vertical, props.horizontal) : theme.spacing(0, props.horizontal, props.vertical, 0);
        }
      }
    }
  };
});

var FlexList = function FlexList(_ref) {
  var h = _ref.h,
      v = _ref.v,
      spacing = _ref.spacing,
      className = _ref.className,
      justify = _ref.justify,
      props = _objectWithoutProperties(_ref, ["h", "v", "spacing", "className", "justify"]);

  var cls = useStyles({
    horizontal: spacing || h,
    vertical: spacing || v,
    justify: justify
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(cls.list, className)
  }, props), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (FlexList);

/***/ }),

/***/ "./resources/js/app/components/Pagination/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/app/components/Pagination/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    main: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      padding: theme.spacing(2)
    }
  };
});

var Pagination = function Pagination(_ref) {
  var page = _ref.page,
      count = _ref.count,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["page", "count", "onChange"]);

  var cls = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.main
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__["Pagination"], _extends({
    page: page,
    count: count,
    onChange: onChange,
    size: "large",
    siblingCount: 2
  }, props)));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./resources/js/app/pages/Activities/index.js":
/*!****************************************************!*\
  !*** ./resources/js/app/pages/Activities/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_FlexList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/FlexList */ "./resources/js/app/components/FlexList/index.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Table */ "./resources/js/app/components/Table/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Pagination */ "./resources/js/app/components/Pagination/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Button */ "./resources/js/app/components/Button/index.js");
/* harmony import */ var _helpers_checkRole__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/helpers/checkRole */ "./resources/js/app/helpers/checkRole.js");
/* harmony import */ var _tableDataHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tableDataHelpers */ "./resources/js/app/pages/Activities/tableDataHelpers.js");
/* harmony import */ var _redux_actions_activities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/redux/actions/activities */ "./resources/js/app/redux/actions/activities.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/constants */ "./resources/js/app/constants/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/config */ "./resources/js/app/config/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


















var onlyAdmins = [_constants__WEBPACK_IMPORTED_MODULE_14__["super_administrator"], _constants__WEBPACK_IMPORTED_MODULE_14__["admin"]];
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    topControls: {
      marginBottom: theme.spacing(3)
    },
    topControlsLeft: {
      display: "flex",
      alignItems: "center",
      "& > * + *": {
        marginLeft: theme.spacing(2)
      }
    },
    selectFormControl: {
      "&&": {
        minWidth: "100px",
        maxWidth: "100px"
      }
    },
    selectMonthFormControl: {
      "&&": {
        minWidth: "200px",
        maxWidth: "200px"
      }
    },
    selectDepartmentFormControl: {
      "&&": {
        minWidth: "250px",
        maxWidth: "250px"
      }
    }
  };
});

var Activities = function Activities(_ref) {
  var _additionalData$c$sta;

  var loadActivities = _ref.loadActivities,
      loadYearsSelectData = _ref.loadYearsSelectData,
      loadAdditionalData = _ref.loadAdditionalData,
      resetActivities = _ref.resetActivities,
      loading = _ref.loading,
      activitiesRows = _ref.activitiesRows,
      totalPages = _ref.totalPages,
      requesting = _ref.requesting,
      deleting = _ref.deleting,
      additionalData = _ref.additionalData,
      additionalDataLoading = _ref.additionalDataLoading,
      yearsSelectData = _ref.yearsSelectData,
      yearsSelectDataLoading = _ref.yearsSelectDataLoading,
      userId = _ref.userId,
      props = _objectWithoutProperties(_ref, ["loadActivities", "loadYearsSelectData", "loadAdditionalData", "resetActivities", "loading", "activitiesRows", "totalPages", "requesting", "deleting", "additionalData", "additionalDataLoading", "yearsSelectData", "yearsSelectDataLoading", "userId"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      dialogContent = _useState2[0],
      setDialogContent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dialogIsOpen = _useState4[0],
      setDialogIsOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      queryReady = _useState6[0],
      setQueryReady = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_defineProperty({}, _constants__WEBPACK_IMPORTED_MODULE_14__["page"], 1)),
      _useState8 = _slicedToArray(_useState7, 2),
      queryPayload = _useState8[0],
      setQueryPayload = _useState8[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState11 = _slicedToArray(_useState10, 2),
      searchText = _useState11[0],
      setSearchText = _useState11[1];

  var cls = useStyles();
  var isAdmin = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_helpers_checkRole__WEBPACK_IMPORTED_MODULE_11__["default"])(onlyAdmins);
  }, []);
  var stringifiedQuery = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return query_string__WEBPACK_IMPORTED_MODULE_6___default.a.stringify(queryPayload, {
      arrayFormat: "comma"
    });
  }, [queryPayload]);

  var openDialog = function openDialog() {
    setDialogIsOpen(true);
  };

  var closeDialog = function closeDialog() {
    setDialogIsOpen(false);
    setDialogContent(null);
  };

  var onAddActivityClick = function onAddActivityClick() {
    setDialogContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tableDataHelpers__WEBPACK_IMPORTED_MODULE_12__["DialogFormAdmin"], {
      currentListQuery: stringifiedQuery,
      currentYearId: queryPayload[_constants__WEBPACK_IMPORTED_MODULE_14__["plan_year_id"]],
      onClose: closeDialog
    }));
    openDialog();
  };

  var changeQuery = function changeQuery(field, value) {
    setQueryPayload(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };

  var debouncedSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(function (val) {
    changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["name"], val);
  }, _config__WEBPACK_IMPORTED_MODULE_15__["searchDebounceTime"]), []);
  var hasYearsSelectData = yearsSelectData && yearsSelectData.length > 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (hasYearsSelectData && !yearsSelectDataLoading) {
      var currentYearId = yearsSelectData.find(function (el) {
        return !!el[_constants__WEBPACK_IMPORTED_MODULE_14__["current"]];
      })[_constants__WEBPACK_IMPORTED_MODULE_14__["id"]];
      setQueryReady(true);
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["plan_year_id"], currentYearId);
    }
  }, [yearsSelectDataLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (queryReady) {
      loadActivities(stringifiedQuery);
    }
  }, [queryPayload]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (queryReady && queryPayload[_constants__WEBPACK_IMPORTED_MODULE_14__["page"]] > totalPages) {
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["page"], totalPages);
    }
  }, [totalPages]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadYearsSelectData();
    loadAdditionalData();
    return function () {
      resetActivities();
    };
  }, []);
  var tableIsLoading = dialogIsOpen ? false : loading || requesting || deleting;
  var departmentsExist = additionalData && additionalData[_constants__WEBPACK_IMPORTED_MODULE_14__["users"]] && additionalData[_constants__WEBPACK_IMPORTED_MODULE_14__["users"]].length > 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    onClose: closeDialog,
    "aria-labelledby": "dialog",
    open: dialogIsOpen
  }, dialogContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.topControls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.topControlsLeft
  }, isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: onAddActivityClick,
    size: "large",
    variant: "contained",
    color: "primary",
    disabled: tableIsLoading
  }, "\u10D3\u10D0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: "large",
    color: "primary",
    onClick: function onClick() {
      setDialogContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tableDataHelpers__WEBPACK_IMPORTED_MODULE_12__["StrategyDocumentDialog"], {
        onClose: closeDialog
      }));
      openDialog();
    }
  }, "\u10D3\u10DD\u10D9\u10E3\u10DB\u10D4\u10DC\u10E2\u10D4\u10D1\u10D8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      marginTop: "16px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FlexList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    variant: "outlined",
    className: cls.selectFormControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10EC\u10D4\u10DA\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    disabled: yearsSelectDataLoading,
    value: queryPayload[_constants__WEBPACK_IMPORTED_MODULE_14__["plan_year_id"]] || "",
    onChange: function onChange(e) {
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["plan_year_id"], e.target.value);
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["page"], 1);
    },
    label: "\u10EC\u10D4\u10DA\u10D8"
  }, !hasYearsSelectData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: ""
  }, "\u10D0\u10D8\u10E0\u10E9\u10D8\u10D4\u10D7 \u10EC\u10D4\u10DA\u10D8") : null, hasYearsSelectData && yearsSelectData.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el[_constants__WEBPACK_IMPORTED_MODULE_14__["id"]]
    }, el[_constants__WEBPACK_IMPORTED_MODULE_14__["name"]]);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    variant: "outlined",
    disabled: yearsSelectDataLoading,
    className: cls.selectMonthFormControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10D7\u10D5\u10D4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    multiple: true,
    value: queryPayload[_constants__WEBPACK_IMPORTED_MODULE_14__["months"]] || [],
    onChange: function onChange(e) {
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["months"], e.target.value);
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["page"], 1);
    },
    label: "\u10D7\u10D5\u10D4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    disabled: true,
    value: ""
  }, "\u10D0\u10D8\u10E0\u10E9\u10D8\u10D4\u10D7 \u10D7\u10D5\u10D4"), _config__WEBPACK_IMPORTED_MODULE_15__["months"].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el[_constants__WEBPACK_IMPORTED_MODULE_14__["id"]]
    }, el[_constants__WEBPACK_IMPORTED_MODULE_14__["name"]]);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    variant: "outlined",
    className: cls.selectMonthFormControl,
    disabled: additionalDataLoading || yearsSelectDataLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(e) {
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["status"], e.target.value);
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["page"], 1);
    },
    value: queryPayload[_constants__WEBPACK_IMPORTED_MODULE_14__["status"]] || "",
    label: "\u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: ""
  }, "\u10E7\u10D5\u10D4\u10DA\u10D0 \u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8"), (additionalData === null || additionalData === void 0 ? void 0 : (_additionalData$c$sta = additionalData[_constants__WEBPACK_IMPORTED_MODULE_14__["statuses"]]) === null || _additionalData$c$sta === void 0 ? void 0 : _additionalData$c$sta.length) > 0 && additionalData[_constants__WEBPACK_IMPORTED_MODULE_14__["statuses"]].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el[_constants__WEBPACK_IMPORTED_MODULE_14__["id"]]
    }, el[_constants__WEBPACK_IMPORTED_MODULE_14__["name"]]);
  }))), isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    variant: "outlined",
    className: cls.selectDepartmentFormControl,
    disabled: additionalDataLoading || yearsSelectDataLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10E1\u10E2\u10E0\u10E3\u10E5\u10E2\u10E3\u10E0\u10E3\u10DA\u10D8 \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(e) {
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["main_user_id"], e.target.value);
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["page"], 1);
    },
    value: queryPayload[_constants__WEBPACK_IMPORTED_MODULE_14__["main_user_id"]] || "",
    label: "\u10E1\u10E2\u10E0\u10E3\u10E5\u10E2\u10E3\u10E0\u10E3\u10DA\u10D8 \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA\u10D8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: ""
  }, "\u10E7\u10D5\u10D4\u10DA\u10D0 \u10E1\u10E2\u10E0\u10E3\u10E5\u10E2\u10E3\u10E0\u10E3\u10DA\u10D8 \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA\u10D8"), departmentsExist && additionalData[_constants__WEBPACK_IMPORTED_MODULE_14__["users"]].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el[_constants__WEBPACK_IMPORTED_MODULE_14__["id"]]
    }, el[_constants__WEBPACK_IMPORTED_MODULE_14__["job_name"]]);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "300px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    disabled: yearsSelectDataLoading,
    fullWidth: true,
    placeholder: "\u10EB\u10D4\u10D1\u10DC\u10D0",
    variant: "outlined",
    value: searchText,
    onChange: function onChange(e) {
      setSearchText(e.target.value);
      debouncedSearch(e.target.value);
    },
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputAdornment"], {
        position: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default.a, null)),
      endAdornment: searchText ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputAdornment"], {
        position: "end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
        onClick: function onClick() {
          setSearchText("");
          debouncedSearch("");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, null))) : null
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    minWidth: "1280px",
    columns: _tableDataHelpers__WEBPACK_IMPORTED_MODULE_12__["columns"],
    rows: activitiesRows,
    rowProps: {
      setDialogContent: setDialogContent,
      openDialog: openDialog,
      closeDialog: closeDialog,
      isAdmin: isAdmin,
      currentListQuery: stringifiedQuery,
      currentYearId: queryPayload[_constants__WEBPACK_IMPORTED_MODULE_14__["plan_year_id"]]
    },
    paginated: false,
    loading: tableIsLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    count: totalPages,
    page: queryPayload[_constants__WEBPACK_IMPORTED_MODULE_14__["page"]],
    onChange: function onChange(e, page) {
      return changeQuery(_constants__WEBPACK_IMPORTED_MODULE_14__["page"], page);
    }
  }))));
};

var mapState = function mapState(state) {
  return {
    loading: state.activities.loading,
    requesting: state.activities.requesting,
    deleting: state.activities.deleting,
    activitiesRows: state.activities.data,
    totalPages: state.activities.totalPages,
    additionalData: state.activities.additionalData,
    additionalDataLoading: state.activities.additionalDataLoading,
    yearsSelectData: state.activities.yearsSelectData,
    yearsSelectDataLoading: state.activities.yearsSelectDataLoading,
    userId: state.client.userInfo[_constants__WEBPACK_IMPORTED_MODULE_14__["id"]]
  };
};

var mapDispatch = {
  loadActivities: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_13__["activitiesListLoading"],
  loadAdditionalData: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_13__["activitiesAdditionalDataLoading"],
  loadYearsSelectData: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_13__["activitiesYearsSelectDataLoading"],
  resetActivities: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_13__["activitiesReset"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch)(Activities));

/***/ })

}]);