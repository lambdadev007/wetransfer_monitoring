import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
    Dialog,
    Paper,
    InputAdornment,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
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
import { tasksListLoading, tasksReset } from "@/redux/actions/tasks";
import * as c from "@/constants";
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
            minWidth: "250px",
            maxWidth: "250px",
            marginRight: theme.spacing(2)
        }
    }
}));

const Tasks = ({
    loadTasks,
    resetTasks,
    loading,
    tasksRows,
    goals,
    requesting,
    deleting,
    ...props
}) => {
    const [dialogContent, setDialogContent] = useState(null);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [searchTextInput, setSearchTextInput] = useState("");
    const [searchTextDebounced, setSearchTextDebounced] = useState("");
    const [selectedGoal, setSelectedGoal] = useState("");
    const cls = useStyles();

    const debouncedSetSearchText = useCallback(
        debounce(val => {
            setSearchTextDebounced(val);
        }, searchDebounceTime),
        []
    );

    const filteredRows = useMemo(() => {
        if (!tasksRows || tasksRows.length < 1) {
            return tasksRows;
        }

        if (searchTextDebounced || selectedGoal) {
            let _filtered = tasksRows;
            if (searchTextDebounced) {
                _filtered = _filtered.filter(el => {
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
            }
            if (selectedGoal) {
                _filtered = _filtered.filter(el => {
                    return el.goal_id.value === selectedGoal;
                });
            }
            return _filtered;
        } else {
            return tasksRows;
        }
    }, [searchTextDebounced, selectedGoal, tasksRows]);

    const openDialog = () => {
        setDialogIsOpen(true);
    };
    const closeDialog = () => {
        setDialogIsOpen(false);
        setDialogContent(null);
    };

    const onAddTaskClick = () => {
        setDialogContent(<DialogForm onClose={closeDialog} />);
        openDialog();
    };

    useEffect(() => {
        loadTasks();
        return () => {
            resetTasks();
        };
    }, []);

    const tableIsLoading = dialogIsOpen
        ? false
        : loading || requesting || deleting;

    const goalsExist = !!goals && goals.length > 0;

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
                        onClick={onAddTaskClick}
                        disabled={!goalsExist}
                    >
                        დამატება
                    </Button>
                </div>
                <div style={{ display: "flex" }}>
                    <FormControl
                        className={cls.selectFormControl}
                        variant="outlined"
                        disabled={tableIsLoading}
                    >
                        <InputLabel>სტრატეგიული მიზანი</InputLabel>
                        <Select
                            onChange={e => {
                                setSelectedGoal(e.target.value);
                            }}
                            value={selectedGoal}
                            label="სტრატეგიული მიზანი"
                        >
                            <MenuItem value="">
                                ყველა სტრატეგიული მიზანი
                            </MenuItem>
                            {goalsExist &&
                                goals.map((el, index) => (
                                    <MenuItem key={index} value={el[c.id]}>
                                        {el[c.name]}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
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
    loading: state.tasks.loading,
    requesting: state.tasks.requesting,
    deleting: state.tasks.deleting,
    tasksRows: state.tasks.data,
    goals: state.tasks.goals
});
const mapDispatch = {
    loadTasks: tasksListLoading,
    resetTasks: tasksReset
};

export default connect(mapState, mapDispatch)(Tasks);
