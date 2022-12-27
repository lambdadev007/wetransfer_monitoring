import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
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
import qs from "query-string";

import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import { columns } from "./tableDataHelpers";
import { searchDebounceTime } from "@/config";
import { logsListLoading, logsReset } from "@/redux/actions/logs";
import * as c from "@/constants";

const useStyles = makeStyles(theme => ({
    topControls: {
        marginBottom: theme.spacing(3),
        display: "flex",
        justifyContent: "flex-end"
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

const Logs = ({
    loadLogs,
    resetLogs,
    loading,
    logsRows,
    totalPages,
    ...props
}) => {
    const [searchTextInput, setSearchTextInput] = useState(""); // only for input value
    const [searchTextDebounced, setSearchTextDebounced] = useState(""); // this is to filter rows
    const cls = useStyles();
    const [queryPayload, setQueryPayload] = useState({
        [c.page]: 1
    });

    const stringifiedQuery = useMemo(
        () =>
            qs.stringify(queryPayload, {
                arrayFormat: "comma"
            }),
        [queryPayload]
    );

    const debouncedSetSearchText = useCallback(
        debounce(val => {
            setSearchTextDebounced(val);
        }, searchDebounceTime),
        []
    );

    const filteredRows = useMemo(() => {
        if (!logsRows || logsRows.length < 1) {
            return logsRows;
        }

        if (searchTextDebounced) {
            return logsRows.filter(el => {
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
        } else {
            return logsRows;
        }
    }, [searchTextDebounced, logsRows]);

    const changeQuery = (field, value) => {
        setQueryPayload(prev => ({
            ...prev,
            [field]: value
        }));
    };

    useEffect(() => {
        loadLogs(stringifiedQuery);
    }, [queryPayload]);
    useEffect(() => {
        if (queryPayload[c.page] > totalPages) {
            changeQuery(c.page, totalPages);
        }
    }, [totalPages]);

    useEffect(() => {
        return () => {
            resetLogs();
        };
    }, []);

    return (
        <>
            <div className={cls.topControls}>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "300px" }}>
                        <TextField
                            fullWidth
                            placeholder="ძებნა"
                            variant="outlined"
                            disabled={loading}
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
                        paginated={false}
                        loading={loading}
                    />
                    <Pagination
                        count={totalPages}
                        page={queryPayload[c.page]}
                        onChange={(e, page) => changeQuery(c.page, page)}
                    />
                </div>
            </Paper>
        </>
    );
};

const mapState = state => ({
    loading: state.logs.loading,
    logsRows: state.logs.data,
    totalPages: state.logs.totalPages
});
const mapDispatch = {
    loadLogs: logsListLoading,
    resetLogs: logsReset
};

export default connect(mapState, mapDispatch)(Logs);
