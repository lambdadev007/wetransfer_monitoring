(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/app/components/Table/index.js":
/*!****************************************************!*\
  !*** ./resources/js/app/components/Table/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
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




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    table: {
      "&&": {
        minWidth: function minWidth(props) {
          return props.minWidth || "900px";
        }
      },
      "& .MuiTableSortLabel-root": {
        whiteSpace: "nowrap"
      },
      "& .MuiTableBody-root .MuiTableRow-root:nth-child(even)": {
        backgroundColor: theme.palette.grey[100]
      },
      "& .MuiTableRow-root.MuiTableRow-hover:hover": {
        backgroundColor: theme.palette.grey[200]
      },
      "& .MuiLinearProgress-root": {
        backgroundColor: "transparent"
      }
    },
    loadingWrapper: {
      textAlign: "center",
      padding: theme.spacing(2)
    },
    noContentWrapper: {
      padding: theme.spacing(3, 2)
    }
  };
});

var descendingComparator = function descendingComparator(a, b, orderBy) {
  if (b[orderBy].value < a[orderBy].value) {
    return -1;
  }

  if (b[orderBy].value > a[orderBy].value) {
    return 1;
  }

  return 0;
};

var getComparator = function getComparator(order, orderBy) {
  return order === "desc" ? function (a, b) {
    return descendingComparator(a, b, orderBy);
  } : function (a, b) {
    return -descendingComparator(a, b, orderBy);
  };
};

var stableSort = function stableSort(array, comparator) {
  var stabilizedArray = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedArray.sort(function (a, b) {
    var order = comparator(a[0], b[0]);

    if (order !== 0) {
      return order;
    } else {
      return a[1] - b[1];
    }
  });
  return stabilizedArray.map(function (el) {
    return el[0];
  });
};

var EnhancedTableHead = function EnhancedTableHead(_ref) {
  var columns = _ref.columns,
      columnProps = _ref.columnProps,
      order = _ref.order,
      orderBy = _ref.orderBy,
      onRequestSort = _ref.onRequestSort,
      props = _objectWithoutProperties(_ref, ["columns", "columnProps", "order", "orderBy", "onRequestSort"]);

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, columns.map(function (headCell) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
      key: headCell.id,
      align: headCell.alignRight ? "right" : "left",
      padding: headCell.disablePadding ? "none" : "default",
      sortDirection: orderBy === headCell.id ? order : false
    }, headCell.notSortable ? headCell.render ? headCell.render(headCell, columnProps) : headCell.value : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableSortLabel"], {
      active: orderBy === headCell.id,
      direction: orderBy === headCell.id ? order : "asc",
      onClick: createSortHandler(headCell.id)
    }, headCell.render ? headCell.render(headCell, columnProps) : headCell.value));
  })));
};

var TableMaker = function TableMaker(_ref2) {
  var columns = _ref2.columns,
      _ref2$columnProps = _ref2.columnProps,
      columnProps = _ref2$columnProps === void 0 ? {} : _ref2$columnProps,
      rows = _ref2.rows,
      _ref2$rowProps = _ref2.rowProps,
      rowProps = _ref2$rowProps === void 0 ? {} : _ref2$rowProps,
      _ref2$rowsPerPageOpti = _ref2.rowsPerPageOptions,
      rowsPerPageOptions = _ref2$rowsPerPageOpti === void 0 ? [5, 10, 25, 50, 100] : _ref2$rowsPerPageOpti,
      _ref2$tableAriaLabel = _ref2.tableAriaLabel,
      tableAriaLabel = _ref2$tableAriaLabel === void 0 ? "Table" : _ref2$tableAriaLabel,
      minWidth = _ref2.minWidth,
      loading = _ref2.loading,
      _ref2$paginated = _ref2.paginated,
      paginated = _ref2$paginated === void 0 ? true : _ref2$paginated,
      props = _objectWithoutProperties(_ref2, ["columns", "columnProps", "rows", "rowProps", "rowsPerPageOptions", "tableAriaLabel", "minWidth", "loading", "paginated"]);

  var cls = useStyles({
    minWidth: minWidth
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("asc"),
      _useState2 = _slicedToArray(_useState, 2),
      order = _useState2[0],
      setOrder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      orderBy = _useState4[0],
      setOrderBy = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(rowsPerPageOptions[2]),
      _useState8 = _slicedToArray(_useState7, 2),
      rowsPerPage = _useState8[0],
      setRowsPerPage = _useState8[1];

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  var hasRows = !!rows && rows.length > 0;

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: cls.loadingWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], null));
  }

  if (!hasRows) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: cls.noContentWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      align: "center",
      variant: "h5"
    }, "\u10DB\u10DD\u10DC\u10D0\u10EA\u10D4\u10DB\u10D4\u10D1\u10D8 \u10D5\u10D4\u10E0 \u10DB\u10DD\u10D8\u10EB\u10D4\u10D1\u10DC\u10D0"));
  }

  var sortedRows = orderBy ? stableSort(rows, getComparator(order, orderBy)) : rows;
  var maybeSlicedRows = paginated ? sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : sortedRows;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: cls.table,
    "aria-label": tableAriaLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnhancedTableHead, {
    columns: columns,
    columnProps: columnProps,
    order: order,
    orderBy: orderBy,
    onRequestSort: handleRequestSort
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], null, maybeSlicedRows.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
      hover: true,
      key: index
    }, columns.map(function (col, index2) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
        key: index2,
        align: col.alignRight ? "right" : "left"
      }, row[col.id].render ? row[col.id].render(row[col.id], _objectSpread({
        row: row
      }, rowProps)) : row[col.id].value);
    }));
  })))), paginated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TablePagination"], {
    rowsPerPageOptions: rowsPerPageOptions,
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TableMaker);

/***/ })

}]);