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
import {
    indicatorsListLoading,
    indicatorsReset
} from "@/redux/actions/indicators";
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

const Indicators = ({
    loadIndicators,
    resetIndicators,
    loading,
    indicatorsRows,
    tasks,
    requesting,
    deleting,
    ...props
}) => {
    const [dialogContent, setDialogContent] = useState(null);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [searchTextInput, setSearchTextInput] = useState("");
    const [searchTextDebounced, setSearchTextDebounced] = useState("");
    const [selectedTask, setSelectedTask] = useState("");
    const cls = useStyles();

    const debouncedSetSearchText = useCallback(
        debounce(val => {
            setSearchTextDebounced(val);
        }, searchDebounceTime),
        []
    );

    const filteredRows = useMemo(() => {
        if (!indicatorsRows || indicatorsRows.length < 1) {
            return indicatorsRows;
        }

        if (searchTextDebounced || selectedTask) {
            let _filtered = indicatorsRows;
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
            if (selectedTask) {
                _filtered = _filtered.filter(el => {
                    return el.task_id.value === selectedTask;
                });
            }
            return _filtered;
        } else {
            return indicatorsRows;
        }
    }, [searchTextDebounced, selectedTask, indicatorsRows]);

    const openDialog = () => {
        setDialogIsOpen(true);
    };
    const closeDialog = () => {
        setDialogIsOpen(false);
        setDialogContent(null);
    };

    const onAddIndicatorClick = () => {
        setDialogContent(<DialogForm onClose={closeDialog} />);
        openDialog();
    };

    useEffect(() => {
        loadIndicators();
        return () => {
            resetIndicators();
        };
    }, []);

    const tableIsLoading = dialogIsOpen
        ? false
        : loading || requesting || deleting;

    const tasksExist = !!tasks && tasks.length > 0;

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
                        onClick={onAddIndicatorClick}
                        disabled={!tasksExist}
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
                        <InputLabel>სტრატეგიული ამოცანა</InputLabel>
                        <Select
                            onChange={e => {
                                setSelectedTask(e.target.value);
                            }}
                            value={selectedTask}
                            label="სტრატეგიული ამოცანა"
                        >
                            <MenuItem value="">
                                ყველა სტრატეგიული ამოცანა
                            </MenuItem>
                            {tasksExist &&
                                tasks.map((el, index) => (
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
    loading: state.indicators.loading,
    requesting: state.indicators.requesting,
    deleting: state.indicators.deleting,
    indicatorsRows: state.indicators.data,
    tasks: state.indicators.tasks
});
const mapDispatch = {
    loadIndicators: indicatorsListLoading,
    resetIndicators: indicatorsReset
};

export default connect(mapState, mapDispatch)(Indicators);
