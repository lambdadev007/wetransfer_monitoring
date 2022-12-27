(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "./resources/js/app/pages/Statistics/index.js":
/*!****************************************************!*\
  !*** ./resources/js/app/pages/Statistics/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Pagination */ "./resources/js/app/components/Pagination/index.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Table */ "./resources/js/app/components/Table/index.js");
/* harmony import */ var _tableDataHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tableDataHelpers */ "./resources/js/app/pages/Statistics/tableDataHelpers.js");
/* harmony import */ var _redux_actions_alerts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/redux/actions/alerts */ "./resources/js/app/redux/actions/alerts.js");
/* harmony import */ var _redux_actions_reports__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/redux/actions/reports */ "./resources/js/app/redux/actions/reports.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Button */ "./resources/js/app/components/Button/index.js");
/* harmony import */ var _components_FlexList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/FlexList */ "./resources/js/app/components/FlexList/index.js");
/* harmony import */ var _helpers_checkRole__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/helpers/checkRole */ "./resources/js/app/helpers/checkRole.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/constants */ "./resources/js/app/constants/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/config */ "./resources/js/app/config/index.js");
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
















var onlyAdmins = [_constants__WEBPACK_IMPORTED_MODULE_12__["super_administrator"], _constants__WEBPACK_IMPORTED_MODULE_12__["admin"]];
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    topControls: {
      marginBottom: theme.spacing(3)
    },
    selectFormControl: {
      "&&": {
        minWidth: "270px",
        maxWidth: "270px"
      }
    },
    selectFormControlSmall: {
      "&&": {
        minWidth: "180px",
        maxWidth: "180px"
      }
    }
  };
});

var Statistics = function Statistics(_ref) {
  var _useState6;

  var loadList = _ref.loadList,
      resetAll = _ref.resetAll,
      loading = _ref.loading,
      rows = _ref.rows,
      userId = _ref.userId,
      loadFilterData = _ref.loadFilterData,
      generateReport = _ref.generateReport,
      addAlert = _ref.addAlert,
      totalPages = _ref.totalPages,
      filterData = _ref.filterData,
      filterDataLoading = _ref.filterDataLoading,
      generating = _ref.generating,
      deleting = _ref.deleting,
      props = _objectWithoutProperties(_ref, ["loadList", "resetAll", "loading", "rows", "userId", "loadFilterData", "generateReport", "addAlert", "totalPages", "filterData", "filterDataLoading", "generating", "deleting"]);

  var isAdmin = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_helpers_checkRole__WEBPACK_IMPORTED_MODULE_11__["default"])(onlyAdmins);
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_defineProperty({}, _constants__WEBPACK_IMPORTED_MODULE_12__["page"], 1)),
      _useState2 = _slicedToArray(_useState, 2),
      queryPayload = _useState2[0],
      setQueryPayload = _useState2[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((_useState6 = {}, _defineProperty(_useState6, _constants__WEBPACK_IMPORTED_MODULE_12__["main_user_id"], isAdmin ? "" : userId), _defineProperty(_useState6, _constants__WEBPACK_IMPORTED_MODULE_12__["year"], ""), _defineProperty(_useState6, _constants__WEBPACK_IMPORTED_MODULE_12__["months"], []), _defineProperty(_useState6, _constants__WEBPACK_IMPORTED_MODULE_12__["goal"], ""), _defineProperty(_useState6, _constants__WEBPACK_IMPORTED_MODULE_12__["status"], ""), _useState6)),
      _useState5 = _slicedToArray(_useState4, 2),
      payload = _useState5[0],
      setPayload = _useState5[1];

  var stringifiedQuery = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(queryPayload, {
      arrayFormat: "comma"
    });
  }, [queryPayload]);
  var stringifiedPayload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(payload, {
      arrayFormat: "comma"
    });
  }, [payload]);
  var cls = useStyles();

  var changeQuery = function changeQuery(field, value) {
    setQueryPayload(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };

  var changePayload = function changePayload(field, value) {
    setPayload(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };

  var handleReportGeneration = function handleReportGeneration() {
    generateReport(stringifiedPayload, function () {
      addAlert({
        message: "რეპორტი წარმატებით შეიქმნა",
        options: {
          variant: "success"
        }
      });
      loadList(stringifiedQuery);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (filterData[_constants__WEBPACK_IMPORTED_MODULE_12__["years"]] && !filterDataLoading) {
      var currentYearId = filterData[_constants__WEBPACK_IMPORTED_MODULE_12__["years"]].find(function (el) {
        return !!el[_constants__WEBPACK_IMPORTED_MODULE_12__["current"]];
      })[_constants__WEBPACK_IMPORTED_MODULE_12__["id"]];
      changePayload(_constants__WEBPACK_IMPORTED_MODULE_12__["year"], currentYearId);
    }
  }, [filterDataLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadList(stringifiedQuery);
  }, [queryPayload]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (queryPayload[_constants__WEBPACK_IMPORTED_MODULE_12__["page"]] > totalPages) {
      changeQuery(_constants__WEBPACK_IMPORTED_MODULE_12__["page"], totalPages);
    }
  }, [totalPages]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadFilterData();
    return function () {
      resetAll();
    };
  }, []);
  var tableIsLoading = loading || generating || deleting;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.topControls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FlexList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    spacing: 2,
    justify: "right"
  }, isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    className: cls.selectFormControl,
    variant: "outlined",
    disabled: filterDataLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10E1\u10E2\u10E0\u10E3\u10E5\u10E2\u10E3\u10E0\u10E3\u10DA\u10D8 \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(e) {
      changePayload(_constants__WEBPACK_IMPORTED_MODULE_12__["main_user_id"], e.target.value);
    },
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_12__["main_user_id"]],
    label: "\u10E1\u10E2\u10E0\u10E3\u10E5\u10E2\u10E3\u10E0\u10E3\u10DA\u10D8 \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA\u10D8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: ""
  }, "\u10D0\u10D8\u10E0\u10E9\u10D8\u10D4\u10D7 \u10E1\u10E2\u10E0\u10E3\u10E5\u10E2\u10E3\u10E0\u10E3\u10DA\u10D8 \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA\u10D8"), !!filterData[_constants__WEBPACK_IMPORTED_MODULE_12__["users"]] && filterData[_constants__WEBPACK_IMPORTED_MODULE_12__["users"]].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el[_constants__WEBPACK_IMPORTED_MODULE_12__["id"]]
    }, el[_constants__WEBPACK_IMPORTED_MODULE_12__["job"]]);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    className: cls.selectFormControlSmall,
    variant: "outlined",
    disabled: filterDataLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10EC\u10D4\u10DA\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(e) {
      changePayload(_constants__WEBPACK_IMPORTED_MODULE_12__["year"], e.target.value);
    },
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_12__["year"]],
    label: "\u10EC\u10D4\u10DA\u10D8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: ""
  }, "\u10D0\u10D8\u10E0\u10E9\u10D8\u10D4\u10D7 \u10EC\u10D4\u10DA\u10D8"), !!filterData[_constants__WEBPACK_IMPORTED_MODULE_12__["years"]] && filterData[_constants__WEBPACK_IMPORTED_MODULE_12__["years"]].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el[_constants__WEBPACK_IMPORTED_MODULE_12__["id"]]
    }, el[_constants__WEBPACK_IMPORTED_MODULE_12__["name"]]);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    className: cls.selectFormControlSmall,
    variant: "outlined",
    disabled: filterDataLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10D7\u10D5\u10D4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(e) {
      changePayload(_constants__WEBPACK_IMPORTED_MODULE_12__["months"], e.target.value);
    },
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_12__["months"]],
    multiple: true,
    label: "\u10D7\u10D5\u10D4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    disabled: true,
    value: ""
  }, "\u10D0\u10D8\u10E0\u10E9\u10D8\u10D4\u10D7 \u10D7\u10D5\u10D4"), _config__WEBPACK_IMPORTED_MODULE_13__["months"].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el[_constants__WEBPACK_IMPORTED_MODULE_12__["id"]]
    }, el[_constants__WEBPACK_IMPORTED_MODULE_12__["name"]]);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    className: cls.selectFormControl,
    variant: "outlined",
    disabled: filterDataLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10E1\u10E2\u10E0\u10D0\u10E2\u10D4\u10D2\u10D8\u10E3\u10DA\u10D8 \u10DB\u10D8\u10D6\u10D0\u10DC\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(e) {
      changePayload(_constants__WEBPACK_IMPORTED_MODULE_12__["goal"], e.target.value);
    },
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_12__["goal"]],
    label: "\u10E1\u10E2\u10E0\u10D0\u10E2\u10D4\u10D2\u10D8\u10E3\u10DA\u10D8 \u10DB\u10D8\u10D6\u10D0\u10DC\u10D8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: ""
  }, "\u10D0\u10D8\u10E0\u10E9\u10D8\u10D4\u10D7 \u10E1\u10E2\u10E0\u10D0\u10E2\u10D4\u10D2\u10D8\u10E3\u10DA\u10D8 \u10DB\u10D8\u10D6\u10D0\u10DC\u10D8"), !!filterData[_constants__WEBPACK_IMPORTED_MODULE_12__["goals_with_tasks"]] && filterData[_constants__WEBPACK_IMPORTED_MODULE_12__["goals_with_tasks"]].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el[_constants__WEBPACK_IMPORTED_MODULE_12__["id"]]
    }, el[_constants__WEBPACK_IMPORTED_MODULE_12__["name"]]);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    className: cls.selectFormControl,
    variant: "outlined",
    disabled: filterDataLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(e) {
      changePayload(_constants__WEBPACK_IMPORTED_MODULE_12__["status"], e.target.value);
    },
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_12__["status"]],
    label: "\u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: ""
  }, "\u10D0\u10D8\u10E0\u10E9\u10D8\u10D4\u10D7 \u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8"), !!filterData[_constants__WEBPACK_IMPORTED_MODULE_12__["statuses"]] && filterData[_constants__WEBPACK_IMPORTED_MODULE_12__["statuses"]].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el[_constants__WEBPACK_IMPORTED_MODULE_12__["id"]]
    }, el[_constants__WEBPACK_IMPORTED_MODULE_12__["name"]]);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleReportGeneration,
    loading: generating,
    disabled: filterDataLoading,
    variant: "contained",
    color: "primary",
    size: "large"
  }, "\u10D2\u10D4\u10DC\u10D4\u10E0\u10D8\u10E0\u10D4\u10D1\u10D0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    columns: _tableDataHelpers__WEBPACK_IMPORTED_MODULE_6__["columns"],
    rows: rows,
    rowProps: {
      currentListQuery: stringifiedQuery
    },
    paginated: false,
    loading: tableIsLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    count: totalPages,
    page: queryPayload[_constants__WEBPACK_IMPORTED_MODULE_12__["page"]],
    onChange: function onChange(e, page) {
      return changeQuery(_constants__WEBPACK_IMPORTED_MODULE_12__["page"], page);
    }
  }))));
};

var mapState = function mapState(state) {
  return {
    loading: state.reports.loading,
    rows: state.reports.data,
    totalPages: state.reports.totalPages,
    filterData: state.reports.filterData,
    filterDataLoading: state.reports.filterDataLoading,
    generating: state.reports.generating,
    deleting: state.reports.deleting,
    userId: state.client.userInfo[_constants__WEBPACK_IMPORTED_MODULE_12__["id"]]
  };
};

var mapDispatch = {
  loadList: _redux_actions_reports__WEBPACK_IMPORTED_MODULE_8__["reportsListLoading"],
  resetAll: _redux_actions_reports__WEBPACK_IMPORTED_MODULE_8__["reportsReset"],
  loadFilterData: _redux_actions_reports__WEBPACK_IMPORTED_MODULE_8__["reportsFilterDataLoading"],
  generateReport: _redux_actions_reports__WEBPACK_IMPORTED_MODULE_8__["reportsGenerate"],
  addAlert: _redux_actions_alerts__WEBPACK_IMPORTED_MODULE_7__["alertAdd"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(Statistics));

/***/ })

}]);