(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/app/pages/ActivityInner/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/app/pages/ActivityInner/index.js ***!
  \*******************************************************/
/*! exports provided: FileListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileListItem", function() { return FileListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/GetApp */ "./node_modules/@material-ui/icons/GetApp.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DialogParts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/DialogParts */ "./resources/js/app/components/DialogParts/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Button */ "./resources/js/app/components/Button/index.js");
/* harmony import */ var _helpers_checkRole__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/checkRole */ "./resources/js/app/helpers/checkRole.js");
/* harmony import */ var _redux_actions_activities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/redux/actions/activities */ "./resources/js/app/redux/actions/activities.js");
/* harmony import */ var _redux_actions_alerts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/redux/actions/alerts */ "./resources/js/app/redux/actions/alerts.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/constants */ "./resources/js/app/constants/index.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog */ "./resources/js/app/pages/ActivityInner/dialog.js");
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














var onlyAdmins = [_constants__WEBPACK_IMPORTED_MODULE_10__["super_administrator"], _constants__WEBPACK_IMPORTED_MODULE_10__["admin"]];
var percents = [{
  value: 25,
  title: "25%"
}, {
  value: 50,
  title: "50%"
}, {
  value: 75,
  title: "75%"
}, {
  value: 100,
  title: "100%"
}];
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    loader: {
      textAlign: "center"
    },
    divider: {
      "&&": {
        margin: theme.spacing(2, 0)
      }
    },
    buttonsList: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      "& > *": {
        marginLeft: theme.spacing(2)
      }
    },
    statusLogColor: {
      color: "green"
    },
    successButton: {
      "&&": {
        backgroundColor: theme.palette.success.main,
        "&:hover": {
          backgroundColor: theme.palette.success.dark
        },
        color: "#fff"
      }
    },
    errorButton: {
      "&&": {
        backgroundColor: theme.palette.error.main,
        "&:hover": {
          backgroundColor: theme.palette.error.dark
        },
        color: "#fff"
      }
    },
    successText: {
      "&&": {
        color: theme.palette.success.dark
      }
    },
    adminCreatedInfo: {
      "&&": {
        backgroundColor: "#E5E7F5",
        "& *": {
          wordBreak: "break-word"
        }
      }
    },
    userCreatedInfo: {
      "&&": {
        backgroundColor: "#E4F3E5",
        "& *": {
          wordBreak: "break-word"
        }
      }
    },
    statusInfo: {
      "&&": {
        backgroundColor: "#FEE8E7",
        "& *": {
          wordBreak: "break-word"
        }
      }
    }
  };
});
var FileListItem = function FileListItem(_ref) {
  var title = _ref.title,
      date = _ref.date,
      url = _ref.url,
      onRemove = _ref.onRemove,
      canDelete = _ref.canDelete,
      props = _objectWithoutProperties(_ref, ["title", "date", "url", "onRemove", "canDelete"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "".concat(title, " - ").concat(date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    download: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_4___default.a, null))), canDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Popconfirm, {
    title: "\u10D2\u10E1\u10E3\u10E0\u10D7 \u10E4\u10D0\u10D8\u10DA\u10D8\u10E1 \u10EC\u10D0\u10E8\u10DA\u10D0?",
    onOk: onRemove
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "error",
    fontSize: "small"
  }))));
};

var StatusLogList = function StatusLogList(_ref2) {
  var data = _ref2.data,
      props = _objectWithoutProperties(_ref2, ["data"]);

  var cls = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    style: {
      width: "100%"
    }
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["status_log"]].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      xs: 12,
      sm: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6"
    }, "\u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["name"]]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10DE\u10E0\u10DD\u10EA\u10D4\u10DC\u10E2\u10D8: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["percent"]] || "არ არის მითითებული"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10D3\u10D0\u10E1\u10D0\u10D1\u10E3\u10D7\u10D4\u10D1\u10D0: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["remark"]] || "არ არის მითითებული"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      className: cls.statusLogColor,
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10E8\u10D4\u10DB\u10E4\u10D0\u10E1\u10D4\u10D1\u10D4\u10DA\u10D8: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["user"]][_constants__WEBPACK_IMPORTED_MODULE_10__["job_name"]] || el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["user"]][_constants__WEBPACK_IMPORTED_MODULE_10__["name"]]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      className: cls.statusLogColor,
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["created_at"]])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      xs: 12,
      sm: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6"
    }, "\u10E1\u10E3\u10DE\u10D4\u10E0 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10D8"), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_super_admin"]] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_super_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["name"]]), !!el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_super_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["info"]] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10D2\u10D0\u10D3\u10D0\u10E2\u10D0\u10DC\u10D8\u10DA\u10D8\u10D0: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_super_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["info"]][_constants__WEBPACK_IMPORTED_MODULE_10__["day"]], " ", "\u10D3\u10E6\u10D8\u10D7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10D1\u10DD\u10DA\u10DD \u10D5\u10D0\u10D3\u10D0: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_super_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["info"]][_constants__WEBPACK_IMPORTED_MODULE_10__["end_date"]])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10DE\u10E0\u10DD\u10EA\u10D4\u10DC\u10E2\u10D8: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_super_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["percent"]] || 'არ არის მითითებული'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10D3\u10D0\u10E1\u10D0\u10D1\u10E3\u10D7\u10D4\u10D1\u10D0: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_super_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["remark"]] || 'არ არის მითითებული'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      className: cls.statusLogColor,
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10E8\u10D4\u10DB\u10E4\u10D0\u10E1\u10D4\u10D1\u10D4\u10DA\u10D8: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_super_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["user"]][_constants__WEBPACK_IMPORTED_MODULE_10__["job_name"]] || el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_super_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["user"]][_constants__WEBPACK_IMPORTED_MODULE_10__["name"]]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      className: cls.statusLogColor,
      gutterBottom: true,
      variant: "body2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8: "), el[_constants__WEBPACK_IMPORTED_MODULE_10__["data_super_admin"]][_constants__WEBPACK_IMPORTED_MODULE_10__["created_at"]])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "body2"
    }, "\u10D0\u10E0 \u10D0\u10E5\u10D5\u10E1 \u10E8\u10D4\u10E4\u10D0\u10E1\u10D4\u10D1\u10E3\u10DA\u10D8"))));
  }));
};

var FileList = function FileList(_ref3) {
  var data = _ref3.data,
      props = _objectWithoutProperties(_ref3, ["data"]);

  return !!data[_constants__WEBPACK_IMPORTED_MODULE_10__["files"]] && data[_constants__WEBPACK_IMPORTED_MODULE_10__["files"]].length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap"
    }
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["files"]].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      key: index,
      title: "".concat(el[_constants__WEBPACK_IMPORTED_MODULE_10__["name"]], " - ").concat(el[_constants__WEBPACK_IMPORTED_MODULE_10__["created_at"]]),
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: el[_constants__WEBPACK_IMPORTED_MODULE_10__["full_url"]],
      download: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_4___default.a, {
      fontSize: "small"
    }))));
  }));
};

var IndicatorList = function IndicatorList(_ref4) {
  var data = _ref4.data,
      props = _objectWithoutProperties(_ref4, ["data"]);

  return !!data[_constants__WEBPACK_IMPORTED_MODULE_10__["indicators"]] && data[_constants__WEBPACK_IMPORTED_MODULE_10__["indicators"]].length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10D8\u10DC\u10D3\u10D8\u10D9\u10D0\u10E2\u10DD\u10E0\u10D4\u10D1\u10D8 / \u10DB\u10E2\u10D9\u10D8\u10EA\u10D4\u10D1\u10E3\u10DA\u10D4\u10D1\u10D4\u10D1\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, data[_constants__WEBPACK_IMPORTED_MODULE_10__["indicators"]].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "body2"
    }, el[_constants__WEBPACK_IMPORTED_MODULE_10__["name"]]), !!el[_constants__WEBPACK_IMPORTED_MODULE_10__["evidences"]] && el[_constants__WEBPACK_IMPORTED_MODULE_10__["evidences"]].length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, el[_constants__WEBPACK_IMPORTED_MODULE_10__["evidences"]].map(function (el2, index2) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "body2"
      }, el2[_constants__WEBPACK_IMPORTED_MODULE_10__["name"]]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FileList, {
        data: el2
      }));
    })));
  })));
};

var _AdminStatusChangeForm = function _AdminStatusChangeForm(_ref5) {
  var _useState3;

  var formDisabled = _ref5.formDisabled,
      data = _ref5.data,
      requesting = _ref5.requesting,
      additionalData = _ref5.additionalData,
      validations = _ref5.validations,
      submit = _ref5.submit,
      reset = _ref5.reset,
      loadSingle = _ref5.loadSingle,
      removeValidation = _ref5.removeValidation,
      addAlert = _ref5.addAlert,
      props = _objectWithoutProperties(_ref5, ["formDisabled", "data", "requesting", "additionalData", "validations", "submit", "reset", "loadSingle", "removeValidation", "addAlert"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((_useState3 = {}, _defineProperty(_useState3, _constants__WEBPACK_IMPORTED_MODULE_10__["activity_id"], data[_constants__WEBPACK_IMPORTED_MODULE_10__["id"]]), _defineProperty(_useState3, _constants__WEBPACK_IMPORTED_MODULE_10__["status_id"], ""), _defineProperty(_useState3, _constants__WEBPACK_IMPORTED_MODULE_10__["percent"], ""), _defineProperty(_useState3, _constants__WEBPACK_IMPORTED_MODULE_10__["remark"], ""), _useState3)),
      _useState2 = _slicedToArray(_useState, 2),
      payload = _useState2[0],
      setPayload = _useState2[1];

  var cls = useStyles();

  var onSingleValueChange = function onSingleValueChange(value, field) {
    setPayload(_objectSpread(_objectSpread({}, payload), {}, _defineProperty({}, field, value)));

    if (validations[field]) {
      removeValidation(field);
    }
  };

  var handleSubmit = function handleSubmit() {
    submit({
      payload: payload,
      onSuccess: function onSuccess() {
        addAlert({
          message: "\u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8 \u10EC\u10D0\u10E0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10D7 \u10E8\u10D4\u10D8\u10EA\u10D5\u10D0\u10DA\u10D0",
          options: {
            variant: "success"
          }
        });
        loadSingle(data[_constants__WEBPACK_IMPORTED_MODULE_10__["id"]]);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      reset();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    disabled: formDisabled,
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_10__["status_id"]],
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10D0\u10E5\u10E2\u10D8\u10D5\u10DD\u10D1\u10D8\u10E1 \u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "\u10D0\u10E5\u10E2\u10D8\u10D5\u10DD\u10D1\u10D8\u10E1 \u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8",
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_10__["status_id"]);
    },
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_10__["status_id"]]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: ""
  }, "\u10D0\u10D8\u10E0\u10E9\u10D4\u10D7 \u10D0\u10E5\u10E2\u10D8\u10D5\u10DD\u10D1\u10D8\u10E1 \u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D8"), additionalData[_constants__WEBPACK_IMPORTED_MODULE_10__["statuses"]].filter(function (el) {
    return !el[_constants__WEBPACK_IMPORTED_MODULE_10__["only_super_admin"]];
  }).map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el[_constants__WEBPACK_IMPORTED_MODULE_10__["id"]]
    }, el[_constants__WEBPACK_IMPORTED_MODULE_10__["name"]]);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormHelperText"], null, validations[_constants__WEBPACK_IMPORTED_MODULE_10__["status_id"]]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    disabled: formDisabled,
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_10__["percent"]],
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], null, "\u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10DE\u10E0\u10DD\u10EA\u10D4\u10DC\u10E2\u10E3\u10DA\u10D8 \u10DB\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D4\u10DA\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "\u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10DE\u10E0\u10DD\u10EA\u10D4\u10DC\u10E2\u10E3\u10DA\u10D8 \u10DB\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D4\u10DA\u10D8",
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_10__["percent"]);
    },
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_10__["percent"]]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    value: ""
  }, "\u10D0\u10D8\u10E0\u10E9\u10D4\u10D7 \u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10DE\u10E0\u10DD\u10EA\u10D4\u10DC\u10E2\u10E3\u10DA\u10D8 \u10DB\u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D4\u10DA\u10D8"), percents.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
      key: index,
      value: el.value
    }, el.title);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormHelperText"], null, validations[_constants__WEBPACK_IMPORTED_MODULE_10__["percent"]]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    disabled: formDisabled,
    multiline: true,
    rows: 4,
    fullWidth: true,
    label: "\u10D3\u10D0\u10E1\u10D0\u10D1\u10E3\u10D7\u10D4\u10D1\u10D0",
    variant: "outlined",
    onChange: function onChange(e) {
      return onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_10__["remark"]);
    },
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_10__["remark"]],
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_10__["remark"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_10__["remark"]]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: cls.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.buttonsList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: formDisabled,
    size: "large",
    variant: "contained",
    color: "primary",
    onClick: handleSubmit,
    loading: requesting
  }, "\u10E8\u10D4\u10DC\u10D0\u10EE\u10D5\u10D0")))));
};

var mapStateAdminStatusChangeForm = function mapStateAdminStatusChangeForm(state) {
  return {
    data: state.activities.single,
    requesting: state.activities.statusRequesting,
    validations: state.activities.validations,
    additionalData: state.activities.additionalData
  };
};

var mapDispatchAdminStatusChangeForm = {
  submit: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_8__["activitiesStatusChange"],
  reset: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_8__["activitiesStatusChangeReset"],
  loadSingle: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_8__["activitiesSingleLoading"],
  removeValidation: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_8__["activitiesStatusChangeRemoveValidation"],
  addAlert: _redux_actions_alerts__WEBPACK_IMPORTED_MODULE_9__["alertAdd"]
};
var AdminStatusChangeForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateAdminStatusChangeForm, mapDispatchAdminStatusChangeForm)(_AdminStatusChangeForm);

var ActivityInner = function ActivityInner(_ref6) {
  var data = _ref6.data,
      loading = _ref6.loading,
      additionalData = _ref6.additionalData,
      additionalDataLoading = _ref6.additionalDataLoading,
      loadSingle = _ref6.loadSingle,
      loadAdditionalData = _ref6.loadAdditionalData,
      resetAll = _ref6.resetAll,
      statusRequesting = _ref6.statusRequesting,
      submitStatus = _ref6.submitStatus,
      addAlert = _ref6.addAlert,
      resetStatusChange = _ref6.resetStatusChange,
      props = _objectWithoutProperties(_ref6, ["data", "loading", "additionalData", "additionalDataLoading", "loadSingle", "loadAdditionalData", "resetAll", "statusRequesting", "submitStatus", "addAlert", "resetStatusChange"]);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState5 = _slicedToArray(_useState4, 2),
      dialogContent = _useState5[0],
      setDialogContent = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState7 = _slicedToArray(_useState6, 2),
      dialogIsOpen = _useState7[0],
      setDialogIsOpen = _useState7[1];

  var cls = useStyles();
  var isAdmin = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_helpers_checkRole__WEBPACK_IMPORTED_MODULE_7__["default"])(onlyAdmins);
  }, []);
  var isSuperAdmin = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_helpers_checkRole__WEBPACK_IMPORTED_MODULE_7__["default"])([_constants__WEBPACK_IMPORTED_MODULE_10__["super_administrator"]]);
  }, []);
  var activityId = props.match.params.id;
  var hasAdminStatus = !!data && (!!data[_constants__WEBPACK_IMPORTED_MODULE_10__["editable"]] || !!(data[_constants__WEBPACK_IMPORTED_MODULE_10__["status"]] && (data[_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]] || data[_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["main_status"]])));
  var hasSuperAdminStatus = !!data && (!!data[_constants__WEBPACK_IMPORTED_MODULE_10__["editable"]] || !!(data[_constants__WEBPACK_IMPORTED_MODULE_10__["status"]] && data[_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["main_status"]]));
  var canStatusChangeAdmin = !!data && !!data[_constants__WEBPACK_IMPORTED_MODULE_10__["can_status_admin"]];
  var canStatusChangeSuperAdmin = !!data && !!data[_constants__WEBPACK_IMPORTED_MODULE_10__["can_status_super_admin"]];

  var openDialog = function openDialog() {
    setDialogIsOpen(true);
  };

  var closeDialog = function closeDialog() {
    setDialogIsOpen(false);
    setDialogContent(null);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadSingle(activityId);
    loadAdditionalData();
    return function () {
      resetAll();
    };
  }, []);

  if (loading || additionalDataLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
      elevation: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DialogParts__WEBPACK_IMPORTED_MODULE_5__["DialogContent"], {
      isNotModal: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: cls.loader
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], null))));
  }

  if (!data && !loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
      elevation: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DialogParts__WEBPACK_IMPORTED_MODULE_5__["DialogContent"], {
      isNotModal: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: cls.loader
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "body1"
    }, "\u10D0\u10DB \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8\u10E1 \u10D8\u10DC\u10E4\u10DD\u10E0\u10DB\u10D0\u10EA\u10D8\u10D0 \u10D5\u10D4\u10E0 \u10DB\u10DD\u10D8\u10EB\u10D4\u10D1\u10DC\u10D0"))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    onClose: closeDialog,
    "aria-labelledby": "dialog",
    open: dialogIsOpen
  }, dialogContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DialogParts__WEBPACK_IMPORTED_MODULE_5__["DialogTitle"], {
    title: "\u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8\u10E1 ID: ".concat(activityId),
    isNotModal: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DialogParts__WEBPACK_IMPORTED_MODULE_5__["DialogContent"], {
    isNotModal: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    className: cls.adminCreatedInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10E1\u10E2\u10E0\u10D0\u10E2\u10D4\u10D2\u10D8\u10E3\u10DA\u10D8 \u10DB\u10D8\u10D6\u10D0\u10DC\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["task"]][_constants__WEBPACK_IMPORTED_MODULE_10__["goal"]][_constants__WEBPACK_IMPORTED_MODULE_10__["name"]])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10E1\u10E2\u10E0\u10D0\u10E2\u10D4\u10D2\u10D8\u10E3\u10DA\u10D8 \u10D0\u10DB\u10DD\u10EA\u10D0\u10DC\u10D0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["task"]][_constants__WEBPACK_IMPORTED_MODULE_10__["name"]])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10D0\u10E5\u10E2\u10D8\u10D5\u10DD\u10D1\u10D0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["name"]])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10D2\u10D0\u10DC\u10EE\u10DD\u10E0\u10EA\u10D8\u10D4\u10DA\u10D4\u10D1\u10D8\u10E1 \u10DE\u10D4\u10E0\u10D8\u10DD\u10D3\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["months_text"]])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10DE\u10D0\u10E1\u10E3\u10EE\u10D8\u10E1\u10DB\u10D2\u10D4\u10D1\u10D4\u10DA\u10D8 \u10E1\u10E2\u10E0\u10E3\u10E5\u10E2\u10E3\u10E0\u10E3\u10DA\u10D8 \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA\u10D8/\u10E3\u10E4\u10DA\u10D4\u10D1\u10D0\u10DB\u10DD\u10E1\u10D8\u10DA\u10D8 \u10DE\u10D8\u10E0\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["main_user_id"]][_constants__WEBPACK_IMPORTED_MODULE_10__["job_name"]])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10D3\u10D0\u10DB\u10EE\u10DB\u10D0\u10E0\u10D4 \u10E1\u10E2\u10E0\u10E3\u10E5\u10E2\u10E3\u10E0\u10E3\u10DA\u10D8 \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA\u10D8/\u10E3\u10E4\u10DA\u10D4\u10D1\u10D0\u10DB\u10DD\u10E1\u10D8\u10DA\u10D8 \u10DE\u10D8\u10E0\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["users"]] || "არ არის მითითებული"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: cls.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    className: cls.userCreatedInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorList, {
    data: data
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10E3\u10E0\u10D8 \u10E0\u10D4\u10E1\u10E3\u10E0\u10E1\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["human_resource"]] ? data[_constants__WEBPACK_IMPORTED_MODULE_10__["human_resource"]][_constants__WEBPACK_IMPORTED_MODULE_10__["name"]] : "არ არის მითითებული")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10D3\u10D0\u10E4\u10D8\u10DC\u10D0\u10DC\u10E1\u10D4\u10D1\u10D8\u10E1 \u10EC\u10E7\u10D0\u10E0\u10DD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\u10E1\u10E3\u10DA :  ", data[_constants__WEBPACK_IMPORTED_MODULE_10__["total_funding"]] ? data[_constants__WEBPACK_IMPORTED_MODULE_10__["total_funding"]] : "არ არის მითითებული"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\u10D2\u10E0\u10D0\u10DC\u10E2\u10D8 :  ", data[_constants__WEBPACK_IMPORTED_MODULE_10__["grant_funding"]] ? data[_constants__WEBPACK_IMPORTED_MODULE_10__["grant_funding"]] : "არ არის მითითებული"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\u10E1\u10EE\u10D5\u10D0 :  ", data[_constants__WEBPACK_IMPORTED_MODULE_10__["other_funding"]] ? data[_constants__WEBPACK_IMPORTED_MODULE_10__["other_funding"]] : "არ არის მითითებული")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10DB\u10D0\u10E2\u10D4\u10E0\u10D8\u10D0\u10DA\u10E3\u10E0\u10D8 \u10E0\u10D4\u10E1\u10E3\u10E0\u10E1\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["material_resource"]] ? data[_constants__WEBPACK_IMPORTED_MODULE_10__["material_resource"]][_constants__WEBPACK_IMPORTED_MODULE_10__["name"]] : "არ არის მითითებული")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10E8\u10D4\u10DC\u10D8\u10E8\u10D5\u10DC\u10D0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["user_remark"]] || "არ არის მითითებული")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10E3\u10E0\u10D8 \u10D0\u10E5\u10E2\u10D8\u10D5\u10DD\u10D1\u10D4\u10D1\u10D8\u10E1 \u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10D0\u10E6\u10EC\u10D4\u10E0\u10D0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["comment"]] || "არ არის მითითებული"), data[_constants__WEBPACK_IMPORTED_MODULE_10__["comment_media"]].length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 0
  }, data[_constants__WEBPACK_IMPORTED_MODULE_10__["comment_media"]].map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      key: index,
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FileListItem, {
      date: el[_constants__WEBPACK_IMPORTED_MODULE_10__["created_at"]],
      title: el[_constants__WEBPACK_IMPORTED_MODULE_10__["name"]],
      url: el[_constants__WEBPACK_IMPORTED_MODULE_10__["full_url"]]
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: cls.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    className: cls.statusInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    align: "center"
  }, "\u10E1\u10E2\u10D0\u10E2\u10E3\u10E1\u10D4\u10D1\u10D8\u10E1 \u10DA\u10DD\u10D2\u10D8")), !!data[_constants__WEBPACK_IMPORTED_MODULE_10__["status_log"]] && data[_constants__WEBPACK_IMPORTED_MODULE_10__["status_log"]].length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatusLogList, {
    data: data
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "\u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D8 \u10D0\u10E0 \u10DB\u10DD\u10D8\u10EB\u10D4\u10D1\u10DC\u10D0"))), isAdmin && canStatusChangeAdmin && !isSuperAdmin && !hasAdminStatus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: cls.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AdminStatusChangeForm, {
    formDisabled: hasAdminStatus
  })) : null // <Grid container spacing={2} className={cls.statusInfo}>
  //     {!data[c.status] ||
  //         (!!data[c.status] &&
  //             !data[c.status][c.status] &&
  //             !data[c.status][c.main_status] && (
  //                 <Grid item xs={12} sm={6}>
  //                     <Typography variant="h6">
  //                         აქტივობის სტატუსი - სისტემა
  //                     </Typography>
  //                     <Typography variant="body2">
  //                         {data[c.status_text]}
  //                     </Typography>
  //                 </Grid>
  //             ))}
  //     {!!data[c.status] &&
  //         (data[c.status][c.status] ||
  //             data[c.status][c.main_status]) && (
  //             <>
  //                 <Grid item xs={12} sm={6}>
  //                     <Typography variant="h6">
  //                         აქტივობის სტატუსი - ადმინისტრატორი
  //                     </Typography>
  //                     <Typography variant="body2">
  //                         {data[c.status][c.status]
  //                             ? data[c.status][c.status][
  //                                   c.name
  //                               ]
  //                             : "არ არის მითითებული"}
  //                     </Typography>
  //                 </Grid>
  //                 <Grid item xs={12} sm={6}>
  //                     <Typography variant="h6">
  //                         აქტივობის სტატუსი - სუპერ
  //                         ადმინისტრატორი
  //                     </Typography>
  //                     <Typography variant="body2">
  //                         {data[c.status][c.main_status]
  //                             ? data[c.status][c.main_status][
  //                                   c.name
  //                               ]
  //                             : "არ არის მითითებული"}
  //                     </Typography>
  //                 </Grid>
  //             </>
  //         )}
  //     <Grid item xs={12} sm={6}>
  //         <Typography variant="h6">
  //             შესრულების პროცენტული მაჩვენებელი
  //         </Typography>
  //         <Typography variant="body2">
  //             {data[c.percent]
  //                 ? `${data[c.percent]}%`
  //                 : "არ არის მითითებული"}
  //         </Typography>
  //     </Grid>
  //     <Grid item xs={12}>
  //         <Typography variant="h6">დასაბუთება</Typography>
  //         <Typography variant="body2">
  //             {data[c.remark] || "არ არის მითითებული"}
  //         </Typography>
  //     </Grid>
  // </Grid>
  , isSuperAdmin && canStatusChangeSuperAdmin && !hasSuperAdminStatus && !!data[_constants__WEBPACK_IMPORTED_MODULE_10__["status"]] && data[_constants__WEBPACK_IMPORTED_MODULE_10__["status"]][_constants__WEBPACK_IMPORTED_MODULE_10__["status"]] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: cls.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.buttonsList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "large",
    variant: "contained",
    onClick: function onClick() {
      var _payload;

      submitStatus({
        payload: (_payload = {}, _defineProperty(_payload, _constants__WEBPACK_IMPORTED_MODULE_10__["activity_id"], data[_constants__WEBPACK_IMPORTED_MODULE_10__["id"]]), _defineProperty(_payload, _constants__WEBPACK_IMPORTED_MODULE_10__["is_accept"], 1), _payload),
        onSuccess: function onSuccess() {
          addAlert({
            message: "\u10EE\u10D4\u10DA\u10DB\u10EB\u10E6\u10D5\u10D0\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 \u10D3\u10D0\u10D4\u10D7\u10D0\u10DC\u10EE\u10DB\u10D0 \u10E8\u10D4\u10E4\u10D0\u10E1\u10D4\u10D1\u10D0\u10E1",
            options: {
              variant: "success"
            }
          });
          loadSingle(data[_constants__WEBPACK_IMPORTED_MODULE_10__["id"]]);
        },
        decision: "yes",
        isSuperAdmin: true
      });
    },
    className: cls.successButton,
    loading: !dialogIsOpen && statusRequesting === "yes",
    disabled: !dialogIsOpen && statusRequesting === "no"
  }, "\u10D5\u10D4\u10D7\u10D0\u10DC\u10EE\u10DB\u10D4\u10D1\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: !dialogIsOpen && statusRequesting === "no",
    disabled: !dialogIsOpen && statusRequesting === "yes",
    size: "large",
    variant: "contained",
    className: cls.errorButton,
    onClick: function onClick() {
      resetStatusChange();
      setDialogContent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dialog__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClose: closeDialog
      }));
      openDialog();
    }
  }, "\u10D0\u10E0 \u10D5\u10D4\u10D7\u10D0\u10DC\u10EE\u10DB\u10D4\u10D1\u10D8")))))));
};

var mapState = function mapState(state) {
  return {
    data: state.activities.single,
    loading: state.activities.singleLoading,
    additionalData: state.activities.additionalData,
    additionalDataLoading: state.activities.additionalDataLoading,
    statusRequesting: state.activities.statusRequesting
  };
};

var mapDispatch = {
  submitStatus: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_8__["activitiesStatusChange"],
  loadAdditionalData: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_8__["activitiesAdditionalDataLoading"],
  loadSingle: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_8__["activitiesSingleLoading"],
  resetAll: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_8__["activitiesReset"],
  resetStatusChange: _redux_actions_activities__WEBPACK_IMPORTED_MODULE_8__["activitiesStatusChangeReset"],
  addAlert: _redux_actions_alerts__WEBPACK_IMPORTED_MODULE_9__["alertAdd"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapState, mapDispatch)(ActivityInner));

/***/ })

}]);