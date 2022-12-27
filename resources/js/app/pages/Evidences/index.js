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
    evidencesListLoading,
    evidencesReset
} from "@/redux/actions/evidences";
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

const Evidences = ({
    loadEvidences,
    resetEvidences,
    loading,
    evidencesRows,
    indicators,
    requesting,
    deleting,
    ...props
}) => {
    const [dialogContent, setDialogContent] = useState(null);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [searchTextInput, setSearchTextInput] = useState("");
    const [searchTextDebounced, setSearchTextDebounced] = useState("");
    const [selectedIndicator, setSelectedIndicator] = useState("");
    const cls = useStyles();

    const debouncedSetSearchText = useCallback(
        debounce(val => {
            setSearchTextDebounced(val);
        }, searchDebounceTime),
        []
    );

    const filteredRows = useMemo(() => {
        if (!evidencesRows || evidencesRows.length < 1) {
            return evidencesRows;
        }

        if (searchTextDebounced || selectedIndicator) {
            let _filtered = evidencesRows;
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
            if (selectedIndicator) {
                _filtered = _filtered.filter(el => {
                    return el.indicator_id.value === selectedIndicator;
                });
            }
            return _filtered;
        } else {
            return evidencesRows;
        }
    }, [searchTextDebounced, selectedIndicator, evidencesRows]);

    const openDialog = () => {
        setDialogIsOpen(true);
    };
    const closeDialog = () => {
        setDialogIsOpen(false);
        setDialogContent(null);
    };

    const onAddEvidenceClick = () => {
        setDialogContent(<DialogForm onClose={closeDialog} />);
        openDialog();
    };

    useEffect(() => {
        loadEvidences();
        return () => {
            resetEvidences();
        };
    }, []);

    const tableIsLoading = dialogIsOpen
        ? false
        : loading || requesting || deleting;

    const indicatorsExist = !!indicators && indicators.length > 0;

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
                        onClick={onAddEvidenceClick}
                        disabled={!indicatorsExist}
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
                        <InputLabel>ინდიკატორი</InputLabel>
                        <Select
                            onChange={e => {
                                setSelectedIndicator(e.target.value);
                            }}
                            value={selectedIndicator}
                            label="ინდიკატორი"
                        >
                            <MenuItem value="">ყველა ინდიკატორი</MenuItem>
                            {indicatorsExist &&
                                indicators.map((el, index) => (
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
    loading: state.evidences.loading,
    requesting: state.evidences.requesting,
    deleting: state.evidences.deleting,
    evidencesRows: state.evidences.data,
    indicators: state.evidences.indicators
});
const mapDispatch = {
    loadEvidences: evidencesListLoading,
    resetEvidences: evidencesReset
};

export default connect(mapState, mapDispatch)(Evidences);
