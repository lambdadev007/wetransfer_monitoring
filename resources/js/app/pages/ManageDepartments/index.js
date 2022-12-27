import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
    Dialog,
    Paper,
    InputAdornment,
    TextField,
    IconButton
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import debounce from "lodash/debounce";

import Table from "@/components/Table";
import Button from "@/components/Button";
import { columns, DialogForm } from "./tableDataHelpers";
import {
    departmentsListLoading,
    departmentsReset
} from "@/redux/actions/departments";
import { searchDebounceTime } from "@/config";

const useStyles = makeStyles(theme => ({
    topControls: {
        marginBottom: theme.spacing(3),
        display: "flex",
        justifyContent: "space-between"
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
            minWidth: "200px",
            marginRight: theme.spacing(2)
        }
    }
}));

const ManageDepartments = ({
    loadDepartments,
    resetDepartments,
    loading,
    departmentsRows,
    requesting,
    deleting,
    ...props
}) => {
    const [dialogContent, setDialogContent] = useState(null);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [searchTextInput, setSearchTextInput] = useState("");
    const [searchTextDebounced, setSearchTextDebounced] = useState("");
    const cls = useStyles();

    const debouncedSetSearchText = useCallback(
        debounce(val => {
            setSearchTextDebounced(val);
        }, searchDebounceTime),
        []
    );

    const filteredRows = useMemo(() => {
        if (!departmentsRows || departmentsRows.length < 1) {
            return departmentsRows;
        }

        if (searchTextDebounced) {
            let _filtered = departmentsRows.filter(el => {
                for (let key in el) {
                    if (
                        String(el[key].value)
                            .toLowerCase()
                            .includes(searchTextDebounced.toLowerCase())
                    ) {
                        return true;
                    }
                }
                return false;
            });
            return _filtered;
        } else {
            return departmentsRows;
        }
    }, [searchTextDebounced, departmentsRows]);

    const openDialog = () => {
        setDialogIsOpen(true);
    };
    const closeDialog = () => {
        setDialogIsOpen(false);
        setDialogContent(null);
    };

    const onAddDepartmentClick = () => {
        setDialogContent(<DialogForm onClose={closeDialog} />);
        openDialog();
    };

    useEffect(() => {
        loadDepartments();
        return () => {
            resetDepartments();
        };
    }, []);

    const tableIsLoading = dialogIsOpen
        ? false
        : loading || requesting || deleting;

    return (
        <>
            <Dialog
                onClose={closeDialog}
                aria-labelledby="dialog"
                open={dialogIsOpen}
            >
                {dialogContent}
            </Dialog>
            <div className={cls.topControls}>
                <div className={cls.topControlsLeft}>
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={onAddDepartmentClick}
                    >
                        დამატება
                    </Button>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "300px" }}>
                        <TextField
                            disabled={tableIsLoading}
                            fullWidth
                            placeholder="ძებნა"
                            variant="outlined"
                            value={searchTextInput}
                            onChange={e => {
                                setSearchTextInput(e.target.value);
                                debouncedSetSearchText(e.target.value);
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: searchTextInput ? (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => {
                                                setSearchTextInput("");
                                                debouncedSetSearchText("");
                                            }}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ) : null
                            }}
                        />
                    </div>
                </div>
            </div>
            <Paper elevation={1}>
                <div>
                    <Table
                        columns={columns}
                        rows={filteredRows}
                        rowProps={{
                            setDialogContent,
                            openDialog,
                            closeDialog
                        }}
                        loading={tableIsLoading}
                    />
                </div>
            </Paper>
        </>
    );
};

const mapState = state => ({
    loading: state.departments.loading,
    requesting: state.departments.requesting,
    deleting: state.departments.deleting,
    departmentsRows: state.departments.data
});
const mapDispatch = {
    loadDepartments: departmentsListLoading,
    resetDepartments: departmentsReset
};

export default connect(mapState, mapDispatch)(ManageDepartments);
