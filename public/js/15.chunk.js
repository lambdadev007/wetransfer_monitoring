(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/app/pages/Parameters/index.js":
/*!****************************************************!*\
  !*** ./resources/js/app/pages/Parameters/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_DialogParts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DialogParts */ "./resources/js/app/components/DialogParts/index.js");
/* harmony import */ var _redux_actions_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/actions/alerts */ "./resources/js/app/redux/actions/alerts.js");
/* harmony import */ var _redux_actions_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/actions/settings */ "./resources/js/app/redux/actions/settings.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants */ "./resources/js/app/constants/index.js");
var _initialFormState;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {};
});
var initialFormState = (_initialFormState = {}, _defineProperty(_initialFormState, _constants__WEBPACK_IMPORTED_MODULE_6__["name"], ""), _defineProperty(_initialFormState, _constants__WEBPACK_IMPORTED_MODULE_6__["description"], ""), _defineProperty(_initialFormState, _constants__WEBPACK_IMPORTED_MODULE_6__["email"], ""), _defineProperty(_initialFormState, _constants__WEBPACK_IMPORTED_MODULE_6__["phone"], ""), _initialFormState);

var Parameters = function Parameters(_ref) {
  var loading = _ref.loading,
      data = _ref.data,
      requesting = _ref.requesting,
      validations = _ref.validations,
      loadData = _ref.loadData,
      submit = _ref.submit,
      removeValidation = _ref.removeValidation,
      reset = _ref.reset,
      addAlert = _ref.addAlert,
      props = _objectWithoutProperties(_ref, ["loading", "data", "requesting", "validations", "loadData", "submit", "removeValidation", "reset", "addAlert"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialFormState),
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!loading && data) {
      setPayload(_objectSpread(_objectSpread({}, payload), data));
    }
  }, [loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadData();
    return function () {
      reset();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DialogParts__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], {
    isNotModal: true,
    title: "\u10DE\u10DD\u10E0\u10E2\u10D0\u10DA\u10D8\u10E1 \u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D4\u10D1\u10D8",
    subtitle: "\u10E8\u10D4\u10DC \u10E8\u10D4\u10D2\u10D8\u10EB\u10DA\u10D8\u10D0 \u10D2\u10D0\u10DC\u10D0\u10D0\u10EE\u10DA\u10DD \u10DE\u10DD\u10E0\u10E2\u10D0\u10DA\u10D8\u10E1 \u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D4\u10D1\u10D8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    noValidate: true,
    autoComplete: "off",
    onSubmit: function onSubmit(e) {
      e.preventDefault();

      var payloadServer = _objectSpread({}, payload);

      for (var key in payloadServer) {
        if (!payloadServer[key]) {
          delete payloadServer[key];
        }
      }

      submit(payloadServer, function () {
        addAlert({
          message: "\u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D4\u10D1\u10D8 \u10EC\u10D0\u10E0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10D7 \u10E8\u10D4\u10D8\u10DC\u10D0\u10EE\u10D0",
          options: {
            variant: "success"
          }
        });
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DialogParts__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
    isNotModal: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    label: "\u10DE\u10DD\u10E0\u10E2\u10D0\u10DA\u10D8\u10E1 \u10D3\u10D0\u10E1\u10D0\u10EE\u10D4\u10DA\u10D4\u10D1\u10D0",
    variant: "outlined",
    name: _constants__WEBPACK_IMPORTED_MODULE_6__["name"],
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_6__["name"]],
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_6__["name"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_6__["name"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_6__["name"]],
    disabled: loading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    multiline: true,
    rows: 4,
    fullWidth: true,
    label: "\u10DE\u10DD\u10E0\u10E2\u10D0\u10DA\u10D8\u10E1 \u10D0\u10E6\u10EC\u10D4\u10E0\u10D0",
    variant: "outlined",
    name: _constants__WEBPACK_IMPORTED_MODULE_6__["description"],
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_6__["description"]],
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_6__["description"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_6__["description"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_6__["description"]],
    disabled: loading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    label: "\u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D8\u10E1 \u10D4\u10DA. \u10E4\u10DD\u10E1\u10E2\u10D0",
    type: "email",
    variant: "outlined",
    name: _constants__WEBPACK_IMPORTED_MODULE_6__["email"],
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_6__["email"]],
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_6__["email"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_6__["email"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_6__["email"]],
    disabled: loading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    label: "\u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D8\u10E1 \u10E2\u10D4\u10DA\u10D4\u10E4\u10DD\u10DC\u10D8\u10E1 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
    variant: "outlined",
    name: _constants__WEBPACK_IMPORTED_MODULE_6__["phone"],
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_6__["phone"]],
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_6__["phone"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_6__["phone"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_6__["phone"]],
    disabled: loading
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DialogParts__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], {
    isEdit: true,
    isSaving: requesting
  })));
};

var mapState = function mapState(state) {
  return {
    loading: state.settings.loading,
    data: state.settings.data,
    requesting: state.settings.requesting,
    validations: state.settings.validations
  };
};

var mapDispatch = {
  loadData: _redux_actions_settings__WEBPACK_IMPORTED_MODULE_5__["settingsLoading"],
  submit: _redux_actions_settings__WEBPACK_IMPORTED_MODULE_5__["settingsSubmit"],
  removeValidation: _redux_actions_settings__WEBPACK_IMPORTED_MODULE_5__["settingsSubmitRemoveValidation"],
  reset: _redux_actions_settings__WEBPACK_IMPORTED_MODULE_5__["settingsReset"],
  addAlert: _redux_actions_alerts__WEBPACK_IMPORTED_MODULE_4__["alertAdd"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(Parameters));

/***/ }),

/***/ "./resources/js/app/redux/actions/settings.js":
/*!****************************************************!*\
  !*** ./resources/js/app/redux/actions/settings.js ***!
  \****************************************************/
/*! exports provided: settingsLoading, settingsSubmit, settingsSubmitRemoveValidation, settingsReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsLoading", function() { return settingsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsSubmit", function() { return settingsSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsSubmitRemoveValidation", function() { return settingsSubmitRemoveValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReset", function() { return settingsReset; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/js/app/redux/actions/types.js");

var settingsLoading = function settingsLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].LOADING
  };
};
var settingsSubmit = function settingsSubmit(payload, onSuccess) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SETTINGS_SUBMIT"].REQUESTING,
    payload: payload,
    onSuccess: onSuccess
  };
};
var settingsSubmitRemoveValidation = function settingsSubmitRemoveValidation(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SETTINGS_SUBMIT"].VALIDATION_REMOVE,
    payload: payload
  };
};
var settingsReset = function settingsReset() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"].RESET
  };
};

/***/ })

}]);