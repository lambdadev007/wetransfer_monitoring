import React, { useState, Fragment } from "react";
import {
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    TablePagination,
    Typography,
    CircularProgress
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    table: {
        "&&": {
            minWidth: props => props.minWidth || "900px"
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
}));

const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy].value < a[orderBy].value) {
        return -1;
    }
    if (b[orderBy].value > a[orderBy].value) {
        return 1;
    }
    return 0;
};

const getComparator = (order, orderBy) => {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
    const stabilizedArray = array.map((el, index) => [el, index]);
    stabilizedArray.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        } else {
            return a[1] - b[1];
        }
    });
    return stabilizedArray.map(el => el[0]);
};

const EnhancedTableHead = ({
    columns,
    columnProps,
    order,
    orderBy,
    onRequestSort,
    ...props
}) => {
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {columns.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.alignRight ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "default"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.notSortable ? (
                            headCell.render ? (
                                headCell.render(headCell, columnProps)
                            ) : (
                                headCell.value
                            )
                        ) : (
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={
                                    orderBy === headCell.id ? order : "asc"
                                }
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.render
                                    ? headCell.render(headCell, columnProps)
                                    : headCell.value}
                            </TableSortLabel>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

const TableMaker = ({
    columns,
    columnProps = {},
    rows,
    rowProps = {},
    rowsPerPageOptions = [5, 10, 25, 50, 100],
    tableAriaLabel = "Table",
    minWidth,
    loading,
    paginated = true,
    ...props
}) => {
    const cls = useStyles({ minWidth });
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[2]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const hasRows = !!rows && rows.length > 0;

    if (loading) {
        return (
            <div className={cls.loadingWrapper}>
                <CircularProgress />
            </div>
        );
    }

    if (!hasRows) {
        return (
            <div className={cls.noContentWrapper}>
                <Typography align="center" variant="h5">
                    მონაცემები ვერ მოიძებნა
                </Typography>
            </div>
        );
    }

    const sortedRows = orderBy
        ? stableSort(rows, getComparator(order, orderBy))
        : rows;

    const maybeSlicedRows = paginated
        ? sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : sortedRows;

    return (
        <Fragment>
            <TableContainer>
                <Table className={cls.table} aria-label={tableAriaLabel}>
                    <EnhancedTableHead
                        columns={columns}
                        columnProps={columnProps}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {maybeSlicedRows.map((row, index) => {
                            return (
                                <TableRow hover key={index}>
                                    {columns.map((col, index2) => (
                                        <TableCell
                                            key={index2}
                                            align={
                                                col.alignRight
                                                    ? "right"
                                                    : "left"
                                            }
                                        >
                                            {row[col.id].render
                                                ? row[col.id].render(
                                                      row[col.id],
                                                      {
                                                          row,
                                                          ...rowProps
                                                      }
                                                  )
                                                : row[col.id].value}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {paginated && (
                <TablePagination
                    rowsPerPageOptions={rowsPerPageOptions}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            )}
        </Fragment>
    );
};

export default TableMaker;
