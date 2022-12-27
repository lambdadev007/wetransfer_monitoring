(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/js/app/components/Layout/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/app/components/Layout/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/redux/actions/client */ "./resources/js/app/redux/actions/client.js");
/* harmony import */ var _redux_actions_plans__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/redux/actions/plans */ "./resources/js/app/redux/actions/plans.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/constants */ "./resources/js/app/constants/index.js");
/* harmony import */ var _helpers_checkRole__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/helpers/checkRole */ "./resources/js/app/helpers/checkRole.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/config */ "./resources/js/app/config/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



















var accountMenuId = "navbar-account-menu";
var sidebarWidth = 266;
var onlyAdmins = [_constants__WEBPACK_IMPORTED_MODULE_14__["super_administrator"], _constants__WEBPACK_IMPORTED_MODULE_14__["admin"]];
var mainSidebarList = [{
  title: "2021 - 2025 წლების გეგმა",
  defaultExpanded: true,
  list: [{
    title: "მიზნები",
    url: "/goals",
    permissions: onlyAdmins
  }, {
    title: "ამოცანები",
    url: "/tasks",
    permissions: onlyAdmins
  }, {
    title: "ინდიკატორები",
    url: "/indicators",
    permissions: onlyAdmins
  }, {
    title: "მტკიცებულებები",
    url: "/evidences",
    permissions: onlyAdmins
  }, {
    title: "წლის გეგმები",
    alwaysExpanded: true,
    noActiveClassName: true,
    url: "/activities",
    list: [{
      title: "აქტივობები",
      url: "/activities"
    }]
  }]
}, {
  title: "საკონტაქტო ინფორმაცია",
  url: "/contact-info"
}, {
  title: "სტატისტიკა",
  url: "/statistics"
}];
var adminMenu = [{
  title: "პარამეტრები",
  url: "/parameters"
}, {
  title: "სამსახურების მართვა",
  url: "/manage-departments"
}, {
  title: "მომხმარებლების მართვა",
  url: "/manage-users"
}, {
  title: "ლოგი",
  url: "/logs"
}];
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    sidebar: {
      width: function width(props) {
        return props.isSidebarHidden ? 0 : sidebarWidth;
      },
      height: "100%",
      position: "fixed",
      zIndex: 1,
      top: 0,
      left: 0,
      backgroundColor: "#fff",
      overflowY: "auto",
      borderRight: "1px solid rgba(0, 0, 0, 0.12)",
      "& .MuiListItemText-primary": {
        fontFeatureSettings: "'case' on",
        textTransform: "uppercase"
      }
    },
    navbarLogoLink: {
      display: "flex",
      cursor: "pointer"
    },
    navbarLogo: {
      width: "230px",
      objectFit: "contain"
    },
    userName: {
      "&&": {
        maxWidth: "500px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      }
    },
    sidebarList: {},
    sidebarListItemWrapper: {
      display: "flex",
      alignItems: "center"
    },
    sidebarListNested: {
      paddingLeft: theme.spacing(2)
    },
    sidebarAdminMenuHeader: {
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(2)
    },
    sidebarNavLink: {
      width: "100%",
      transition: "0.2s"
    },
    sidebarActiveNavLink: {
      backgroundColor: "#E5E7F5"
    },
    // necessary for content to be below app bar
    toolbarDefault: theme.mixins.toolbar,
    toolbar: {
      "&&": {
        paddingLeft: "0",
        justifyContent: "space-between"
      }
    },
    navbarLeft: {
      display: "flex",
      alignItems: "center",
      "& > * + *": {
        marginLeft: theme.spacing(2)
      }
    },
    sidebarExpandIcon: {
      "&&": {
        transition: "0.2s"
      }
    },
    sidebarExpanded: {
      "&&": {
        transform: "rotate(180deg)"
      }
    },
    navbarRight: {
      display: "flex",
      alignItems: "center"
    },
    main: {
      marginLeft: function marginLeft(props) {
        return props.isSidebarHidden ? 0 : sidebarWidth;
      }
    },
    mainContainer: {
      "&&": {
        marginLeft: "unset"
      }
    },
    content: {
      padding: theme.spacing(3)
    }
  };
});

var RecursiveExpandableList = function RecursiveExpandableList(_ref) {
  var item = _ref.item,
      list = _ref.list,
      props = _objectWithoutProperties(_ref, ["item", "list"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!!item.defaultExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var cls = useStyles();
  var canShow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (item.permissions) {
      return Object(_helpers_checkRole__WEBPACK_IMPORTED_MODULE_15__["default"])(item.permissions);
    } else {
      return true;
    }
  }, []);
  var hasList = !!list && list.length > 0;

  var handleExpand = function handleExpand() {
    setIsOpen(function (prev) {
      return !prev;
    });
  };

  var NavLinkOrFragment = item.url ? react_router_dom__WEBPACK_IMPORTED_MODULE_8__["NavLink"] : react__WEBPACK_IMPORTED_MODULE_0__["Fragment"];

  if (!canShow) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.sidebarListItemWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLinkOrFragment, item.url ? {
    to: item.url,
    activeClassName: item.noActiveClassName ? null : cls.sidebarActiveNavLink,
    className: cls.sidebarNavLink
  } : {}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    onClick: handleExpand
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: item.title
  }), hasList && !item.alwaysExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingLeft: "8px"
    }
  }, isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_3___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default.a, null)) : null), item.editable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small"
  }))))), hasList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    "in": item.alwaysExpanded || isOpen,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.sidebarListNested
  }, list.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecursiveExpandableList, {
      key: index,
      item: el,
      list: el.list
    });
  }))));
};

var Layout = function Layout(_ref2) {
  var logout = _ref2.logout,
      userInfo = _ref2.userInfo,
      planNameLoading = _ref2.planNameLoading,
      planName = _ref2.planName,
      loadPlanName = _ref2.loadPlanName,
      props = _objectWithoutProperties(_ref2, ["logout", "userInfo", "planNameLoading", "planName", "loadPlanName"]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      accountMenuAnchor = _useState4[0],
      setAccountMenuAnchor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isSidebarHidden = _useState6[0],
      setIsSidebarHidden = _useState6[1];

  var cls = useStyles({
    isSidebarHidden: isSidebarHidden
  });
  var canShowAdminList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_helpers_checkRole__WEBPACK_IMPORTED_MODULE_15__["default"])(onlyAdmins);
  }, []);
  var modifiedMainSidebarList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var _updated = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_11___default()(mainSidebarList);

    _updated[0].title = planName;
    return _updated;
  }, [planName]);
  var isAccountMenuOpen = !!accountMenuAnchor;

  var openAccountMenu = function openAccountMenu(event) {
    setAccountMenuAnchor(event.currentTarget);
  };

  var closeAccountMenu = function closeAccountMenu() {
    setAccountMenuAnchor(null);
  };

  var renderedMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    anchorEl: accountMenuAnchor,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    id: accountMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: isAccountMenuOpen,
    onClose: closeAccountMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "/profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: closeAccountMenu
  }, "\u10E9\u10D4\u10DB\u10D8 \u10DE\u10E0\u10DD\u10E4\u10D8\u10DA\u10D8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: function onClick() {
      closeAccountMenu();
      logout();
    }
  }, "\u10D2\u10D0\u10E1\u10D5\u10DA\u10D0"));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadPlanName();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.sidebar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.toolbarDefault
  }), planNameLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], null)) : planName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: cls.sidebarList
  }, modifiedMainSidebarList.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecursiveExpandableList, {
      key: index,
      item: el,
      list: el.list
    });
  })), canShowAdminList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.sidebarAdminMenuHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle1"
  }, "\u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10D8\u10E1 \u10E1\u10D8\u10D5\u10E0\u10EA\u10D4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: cls.sidebarList
  }, adminMenu.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecursiveExpandableList, {
      key: index,
      item: el,
      list: el.list
    });
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "24px 8px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "\u10D2\u10D4\u10D2\u10DB\u10D8\u10E1 \u10E1\u10D0\u10EE\u10D4\u10DA\u10D8 \u10D5\u10D4\u10E0 \u10E9\u10D0\u10D8\u10E2\u10D5\u10D8\u10E0\u10D7\u10D0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "sticky",
    className: cls.appBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    className: cls.toolbar
  }, renderedMenu, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.navbarLeft
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: function onClick() {
      setIsSidebarHidden(function (prev) {
        return !prev;
      });
    },
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(cls.sidebarExpandIcon, isSidebarHidden && cls.sidebarExpanded),
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "large"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "/",
    className: cls.navbarLogoLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/logo-navbar.png",
    className: cls.navbarLogo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, "".concat(moment__WEBPACK_IMPORTED_MODULE_10___default()().format(_config__WEBPACK_IMPORTED_MODULE_16__["dateFormatPretty"]), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_10___default()().quarter(), " \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.navbarRight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    className: cls.userName
  }, userInfo[_constants__WEBPACK_IMPORTED_MODULE_14__["job_name"]]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": accountMenuId,
    "aria-haspopup": "true",
    onClick: openAccountMenu,
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_2___default.a, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.main
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    disableGutters: true,
    maxWidth: false,
    className: cls.mainContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cls.content
  }, props.children))));
};

var mapState = function mapState(state) {
  return {
    userInfo: state.client.userInfo,
    planNameLoading: state.plans.loading,
    planName: state.plans.data
  };
};

var mapDispatch = {
  logout: _redux_actions_client__WEBPACK_IMPORTED_MODULE_12__["clientUnset"],
  loadPlanName: _redux_actions_plans__WEBPACK_IMPORTED_MODULE_13__["planNameLoading"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapState, mapDispatch)(Layout));

/***/ }),

/***/ "./resources/js/app/redux/actions/plans.js":
/*!*************************************************!*\
  !*** ./resources/js/app/redux/actions/plans.js ***!
  \*************************************************/
/*! exports provided: planNameLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planNameLoading", function() { return planNameLoading; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/js/app/redux/actions/types.js");

var planNameLoading = function planNameLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PLAN_NAME"].LOADING
  };
};

/***/ }),

/***/ "./resources/js/app/router/dashboardRouting.js":
/*!*****************************************************!*\
  !*** ./resources/js/app/router/dashboardRouting.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./resources/js/app/router/routes.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Layout */ "./resources/js/app/components/Layout/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  var _loading;

  return {
    loading: (_loading = {
      height: "calc(100vh - 56px - 48px)"
    }, _defineProperty(_loading, theme.breakpoints.up("sm"), {
      height: "calc(100vh - 64px - 48px)"
    }), _defineProperty(_loading, "width", "100%"), _defineProperty(_loading, "display", "flex"), _defineProperty(_loading, "justifyContent", "center"), _defineProperty(_loading, "alignItems", "center"), _loading)
  };
});
var importedPrivateRoutes = _routes__WEBPACK_IMPORTED_MODULE_4__["privateRoutes"].map(function (_ref) {
  var page = _ref.page;
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
    return __webpack_require__("./resources/js/app/pages lazy recursive ^\\.\\/.*$")("./".concat(page));
  });
});
var pageNotFoundImport = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../pages/NotFound */ "./resources/js/app/pages/NotFound/index.js"));
});

var DashboardRouting = function DashboardRouting(_ref2) {
  var props = _extends({}, _ref2);

  var cls = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: cls.loading
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], null))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_4__["privateRoutes"].map(function (_ref3, index) {
    var path = _ref3.path;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: index,
      exact: true,
      path: "/".concat(path),
      component: importedPrivateRoutes[index]
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: pageNotFoundImport
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardRouting);

/***/ })

}]);