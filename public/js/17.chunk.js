(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/app/pages/RequiredPasswordChange/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/app/pages/RequiredPasswordChange/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ "./resources/js/app/constants/index.js");
/* harmony import */ var _redux_actions_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/actions/login */ "./resources/js/app/redux/actions/login.js");
/* harmony import */ var _redux_actions_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/actions/client */ "./resources/js/app/redux/actions/client.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Button */ "./resources/js/app/components/Button/index.js");
var _initialForm;

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









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    loading: {
      height: " 100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    main: {
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    content: {
      "&&": {
        padding: theme.spacing(3)
      }
    },
    logoWrapper: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(3)
    },
    logo: {
      width: "300px",
      objectFit: "contain"
    },
    header: {
      "&&": {
        marginBottom: theme.spacing(4)
      }
    },
    button: {
      "&&": {
        marginTop: theme.spacing(1)
      }
    }
  };
});
var initialForm = (_initialForm = {}, _defineProperty(_initialForm, _constants__WEBPACK_IMPORTED_MODULE_4__["new_password"], ""), _defineProperty(_initialForm, _constants__WEBPACK_IMPORTED_MODULE_4__["new_password_confirmation"], ""), _initialForm);

var RequiredPasswordChange = function RequiredPasswordChange(_ref) {
  var requesting = _ref.requesting,
      validations = _ref.validations,
      submitLogin = _ref.submitLogin,
      removeValidation = _ref.removeValidation,
      resetLogin = _ref.resetLogin,
      isInitiallyLoading = _ref.isInitiallyLoading,
      token = _ref.token,
      logout = _ref.logout,
      hasChangedPassword = _ref.hasChangedPassword,
      userName = _ref.userName,
      props = _objectWithoutProperties(_ref, ["requesting", "validations", "submitLogin", "removeValidation", "resetLogin", "isInitiallyLoading", "token", "logout", "hasChangedPassword", "userName"]);

  var cls = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialForm),
      _useState2 = _slicedToArray(_useState, 2),
      payload = _useState2[0],
      setPayload = _useState2[1];

  var onSingleValueChange = function onSingleValueChange(value, field) {
    setPayload(_objectSpread(_objectSpread({}, payload), {}, _defineProperty({}, field, value)));

    if (validations[field]) {
      removeValidation(field);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      resetLogin();
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!token) {
      props.history.replace("/login");
    }

    if (hasChangedPassword) {
      props.history.replace("/");
    }
  }, [token, hasChangedPassword]);

  if (isInitiallyLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: cls.loading
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.main
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.logoWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/logo.png",
    className: cls.logo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    align: "center",
    gutterBottom: true
  }, "\u10D2\u10D0\u10DB\u10D0\u10E0\u10EF\u10DD\u10D1\u10D0, ", userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: cls.header,
    variant: "h5",
    align: "center"
  }, "\u10E1\u10D8\u10E1\u10E2\u10D4\u10DB\u10D0\u10E8\u10D8 \u10E8\u10D4\u10E1\u10D5\u10DA\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10D2\u10D7\u10EE\u10DD\u10D5\u10D7 \u10E8\u10D4\u10E5\u10DB\u10DC\u10D0\u10D7 \u10D0\u10EE\u10D0\u10DA\u10D8 \u10DE\u10D0\u10E0\u10DD\u10DA\u10D8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    noValidate: true,
    autoComplete: "off",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      submitLogin(payload);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    id: "new-password-input",
    label: "\u10D0\u10EE\u10D0\u10DA\u10D8 \u10DE\u10D0\u10E0\u10DD\u10DA\u10D8",
    type: "password",
    name: _constants__WEBPACK_IMPORTED_MODULE_4__["new_password"],
    variant: "outlined",
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_4__["new_password"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_4__["new_password"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_4__["new_password"]],
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_4__["new_password"]]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    fullWidth: true,
    id: "password-confirmation-input",
    label: "\u10D0\u10EE\u10D0\u10DA\u10D8 \u10DE\u10D0\u10E0\u10DD\u10DA\u10D8\u10E1 \u10D3\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4\u10D1\u10D0",
    margin: "normal",
    type: "password",
    name: _constants__WEBPACK_IMPORTED_MODULE_4__["new_password_confirmation"],
    variant: "outlined",
    onChange: function onChange(e) {
      onSingleValueChange(e.target.value, _constants__WEBPACK_IMPORTED_MODULE_4__["new_password_confirmation"]);
    },
    error: !!validations[_constants__WEBPACK_IMPORTED_MODULE_4__["new_password_confirmation"]],
    helperText: validations[_constants__WEBPACK_IMPORTED_MODULE_4__["new_password_confirmation"]],
    value: payload[_constants__WEBPACK_IMPORTED_MODULE_4__["new_password_confirmation"]]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: cls.button,
    fullWidth: true,
    size: "large",
    variant: "contained",
    color: "primary",
    type: "submit",
    loading: requesting
  }, "\u10E8\u10D4\u10E1\u10D5\u10DA\u10D0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: cls.button,
    fullWidth: true,
    size: "large",
    color: "primary",
    type: "button",
    onClick: logout,
    disabled: requesting
  }, "\u10E3\u10D9\u10D0\u10DC \u10D3\u10D0\u10D1\u10E0\u10E3\u10DC\u10D4\u10D1\u10D0"))));
};

var mapState = function mapState(state) {
  return {
    validations: state.login.validations,
    requesting: state.login.requesting,
    token: state.client.token,
    userName: state.client.userInfo[_constants__WEBPACK_IMPORTED_MODULE_4__["job_name"]],
    hasChangedPassword: state.client.userInfo[_constants__WEBPACK_IMPORTED_MODULE_4__["change_password"]],
    // not always will be bool
    isInitiallyLoading: state.client.isInitiallyLoading
  };
};

var mapDispatch = {
  submitLogin: _redux_actions_login__WEBPACK_IMPORTED_MODULE_5__["loginPasswordChangeRequesting"],
  removeValidation: _redux_actions_login__WEBPACK_IMPORTED_MODULE_5__["loginValidationRemove"],
  resetLogin: _redux_actions_login__WEBPACK_IMPORTED_MODULE_5__["loginReset"],
  logout: _redux_actions_client__WEBPACK_IMPORTED_MODULE_6__["clientUnset"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapState, mapDispatch)(RequiredPasswordChange));

/***/ }),

/***/ "./resources/js/app/redux/actions/login.js":
/*!*************************************************!*\
  !*** ./resources/js/app/redux/actions/login.js ***!
  \*************************************************/
/*! exports provided: loginRequesting, loginPasswordChangeRequesting, loginValidationRemove, loginReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequesting", function() { return loginRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginPasswordChangeRequesting", function() { return loginPasswordChangeRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginValidationRemove", function() { return loginValidationRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginReset", function() { return loginReset; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/js/app/redux/actions/types.js");

var loginRequesting = function loginRequesting(payload, onSuccess) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN"].REQUESTING,
    payload: payload,
    onSuccess: onSuccess
  };
};
var loginPasswordChangeRequesting = function loginPasswordChangeRequesting(payload, onSuccess) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN_PASSWORD_CHANGE"].REQUESTING,
    payload: payload,
    onSuccess: onSuccess
  };
};
var loginValidationRemove = function loginValidationRemove(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN"].VALIDATION_REMOVE,
    payload: payload
  };
};
var loginReset = function loginReset() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGIN"].RESET
  };
};

/***/ })

}]);