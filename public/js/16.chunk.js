(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./resources/js/app/pages/Profile/index.js":
/*!*************************************************!*\
  !*** ./resources/js/app/pages/Profile/index.js ***!
  \*************************************************/
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
/* harmony import */ var _redux_actions_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/actions/client */ "./resources/js/app/redux/actions/client.js");
/* harmony import */ var _redux_actions_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/actions/profile */ "./resources/js/app/redux/actions/profile.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constants */ "./resources/js/app/constants/index.js");
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
var initialFormState = (_initialFormState = {}, _defineProperty(_initialFormState, _constants__WEBPACK_IMPORTED_MODULE_7__["email"], ""), _defineProperty(_initialFormState, _constants__WEBPACK_IMPORTED_MODULE_7__["phone"], ""), _defineProperty(_initialFormState, _constants__WEBPACK_IMPORTED_MODULE_7__["old_password"], ""), _defineProperty(_initialFormState, _constants__WEBPACK_IMPORTED_MODULE_7__["new_password"], ""), _defineProperty(_initialFormState, _constants__WEBPACK_IMPORTED_MODULE_7__["new_password_confirmation"], ""), _initialFormState);

var Profile = function Profile(_ref) {
  var _objectSpread2;

  var userInfo = _ref.userInfo,
      requesting = _ref.requesting,
      validations = _ref.validations,
      submit = _ref.submit,
      removeValidation = _ref.removeValidation,
      reset = _ref.reset,
      addAlert = _ref.addAlert,
      setClient = _ref.setClient,
      props = _objectWithoutProperties(_ref, ["userInfo", "requesting", "validations", "submit", "removeValidation", "reset", "addAlert", "setClient"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_objectSpread(_objectSpread({}, initialFormState), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _constants__WEBPACK_IMPORTED_MODULE_7__["email"], userInfo[_constants__WEBPACK_IMPORTED_MODULE_7__["email"]]), _defineProperty(_objectSpread2, _constants__WEBPACK_IMPORTED_MODULE_7__["phone"], userInfo[_constants__WEBPACK_IMPORTED_MODULE_7__["phone"]]), _objectSpread2))),
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
    return function () {
      reset();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DialogParts__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], {
    isNotModal: true,
    title: "\u10E9\u10D4\u10DB\u10D8 \u10DE\u10E0\u10DD\u10E4\u10D8\u10DA\u10D8",
    subtitle: "\u10E8\u10D4\u10DC \u10E8\u10D4\u10D2\u10D8\u10EB\u10DA\u10D8\u10D0 \u10D2\u10D0\u10DC\u10D0\u10D0\u10EE\u10DA\u10DD \u10E8\u10D4\u10DC\u10D8 \u10DE\u10E0\u10DD\u10E4\u10D8\u10DA\u10D8"
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

      submit(payloadServer, function (res) {
        addAlert({
          message: "\u10DE\u10E0\u10DD\u10E4\u10D8\u10DA\u10D8 \u10EC\u10D0\u10E0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10D7 \u10E8\u10D4\u10D8\u10DC\u10D0\u10EE\u10D0",
          options: {
            variant: "success"
          }
        });
        setPayload(function (prev) {
          var _objectSpread4;

          return _objectSpread(_objectSpread({}, prev), {}, (_objectSpread4 = {}, _defineProperty(_objectSpread4, _constants__WEBPACK_IMPORTED_MODULE_7__["old_password"], ""), _defineProperty(_objectSpread4, _constants__WEBPACK_IMPORTED_MODULE_7__["new_password"], ""), _defineProperty(_objectSpread4, _constants__WEBPACK_IMPORTED_MODULE_7__["new_password_confirmation"], ""), _objectSpread4));
        });
        setClient({
          userInfo: res.payload
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
    label: "\u10E1\u10E2\u10E0\u10E3\u10E5\u10E2\u10E3\u10E0\u10E3\u10DA\u10D8 \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA\u10D8\u10E1 \u10E1\u10D0\u10EE\u10D4\u10DA\u10D8",
    variant: "outlined",
    disabled: true,
    value: userInfo[_constants__WEBPACK_IMPORTED_MODULE_7__["job_name"]]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    label: "\u10D4\u10DA. \u10E4\u10DD\u10E1\u10E2\u10D0",
    type: "email",
    variant: "outlined",
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_7__["email"]],
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_7__["email"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_7__["email"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_7__["email"]]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    label: "\u10E2\u10D4\u10DA\u10D4\u10E4\u10DD\u10DC\u10D8",
    variant: "outlined",
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_7__["phone"]],
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_7__["phone"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_7__["phone"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_7__["phone"]]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    label: "\u10EB\u10D5\u10D4\u10DA\u10D8 \u10DE\u10D0\u10E0\u10DD\u10DA\u10D8",
    type: "password",
    variant: "outlined",
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_7__["old_password"]],
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_7__["old_password"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_7__["old_password"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_7__["old_password"]]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    label: "\u10D0\u10EE\u10D0\u10DA\u10D8 \u10DE\u10D0\u10E0\u10DD\u10DA\u10D8",
    type: "password",
    variant: "outlined",
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_7__["new_password"]],
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_7__["new_password"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_7__["new_password"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_7__["new_password"]]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    label: "\u10D2\u10D0\u10D8\u10DB\u10D4\u10DD\u10E0\u10D4 \u10D0\u10EE\u10D0\u10DA\u10D8 \u10DE\u10D0\u10E0\u10DD\u10DA\u10D8",
    type: "password",
    variant: "outlined",
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_7__["new_password_confirmation"]],
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_7__["new_password_confirmation"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_7__["new_password_confirmation"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_7__["new_password_confirmation"]]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DialogParts__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], {
    isEdit: true,
    isSaving: requesting
  })));
};

var mapState = function mapState(state) {
  return {
    userInfo: state.client.userInfo,
    requesting: state.profile.requesting,
    validations: state.profile.validations
  };
};

var mapDispatch = {
  submit: _redux_actions_profile__WEBPACK_IMPORTED_MODULE_6__["profileSubmit"],
  removeValidation: _redux_actions_profile__WEBPACK_IMPORTED_MODULE_6__["profileSubmitRemoveValidation"],
  reset: _redux_actions_profile__WEBPACK_IMPORTED_MODULE_6__["profileReset"],
  addAlert: _redux_actions_alerts__WEBPACK_IMPORTED_MODULE_4__["alertAdd"],
  setClient: _redux_actions_client__WEBPACK_IMPORTED_MODULE_5__["clientSet"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(Profile));

/***/ }),

/***/ "./resources/js/app/redux/actions/profile.js":
/*!***************************************************!*\
  !*** ./resources/js/app/redux/actions/profile.js ***!
  \***************************************************/
/*! exports provided: profileSubmit, profileSubmitRemoveValidation, profileReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSubmit", function() { return profileSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSubmitRemoveValidation", function() { return profileSubmitRemoveValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileReset", function() { return profileReset; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/js/app/redux/actions/types.js");

var profileSubmit = function profileSubmit(payload, onSuccess) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PROFILE_SUBMIT"].REQUESTING,
    payload: payload,
    onSuccess: onSuccess
  };
};
var profileSubmitRemoveValidation = function profileSubmitRemoveValidation(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PROFILE_SUBMIT"].VALIDATION_REMOVE,
    payload: payload
  };
};
var profileReset = function profileReset() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PROFILE_SUBMIT"].RESET
  };
};

/***/ })

}]);