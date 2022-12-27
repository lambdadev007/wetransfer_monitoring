import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
    Typography,
    MenuItem,
    Dialog,
    Paper,
    InputAdornment,
    TextField,
    FormControl,
    InputLabel,
    Select,
    IconButton
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import debounce from "lodash/debounce";
import qs from "query-string";

import FlexList from "@/components/FlexList";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import Button from "@/components/Button";
import checkRole from "@/helpers/checkRole";
import {
    columns,
    StrategyDocumentDialog,
    DialogFormAdmin
} from "./tableDataHelpers";
import {
    activitiesListLoading,
    activitiesAdditionalDataLoading,
    activitiesYearsSelectDataLoading,
    activitiesReset
} from "@/redux/actions/activities";
import * as c from "@/constants";
import { searchDebounceTime, months } from "@/config";

const onlyAdmins = [c.super_administrator, c.admin];

const useStyles = makeStyles(theme => ({
    topControls: {
        marginBottom: theme.spacing(3)
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
            minWidth: "100px",
            maxWidth: "100px"
        }
    },
    selectMonthFormControl: {
        "&&": {
            minWidth: "200px",
            maxWidth: "200px"
        }
    },
    selectDepartmentFormControl: {
        "&&": {
            minWidth: "250px",
            maxWidth: "250px"
        }
    }
}));

const Activities = ({
    loadActivities,
    loadYearsSelectData,
    loadAdditionalData,
    resetActivities,
    loading,
    activitiesRows,
    totalPages,
    requesting,
    deleting,
    additionalData,
    additionalDataLoading,
    yearsSelectData,
    yearsSelectDataLoading,
    userId,
    ...props
}) => {
    const [dialogContent, setDialogContent] = useState(null);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const [queryReady, setQueryReady] = useState(false);
    const [queryPayload, setQueryPayload] = useState({
        [c.page]: 1
    });

    const [searchText, setSearchText] = useState("");
    const cls = useStyles();

    const isAdmin = useMemo(() => checkRole(onlyAdmins), []);

    const stringifiedQuery = useMemo(
        () =>
            qs.stringify(queryPayload, {
                arrayFormat: "comma"
            }),
        [queryPayload]
    );

    const openDialog = () => {
        setDialogIsOpen(true);
    };
    const closeDialog = () => {
        setDialogIsOpen(false);
        setDialogContent(null);
    };

    const onAddActivityClick = () => {
        setDialogContent(
            <DialogFormAdmin
                currentListQuery={stringifiedQuery}
                currentYearId={queryPayload[c.plan_year_id]}
                onClose={closeDialog}
            />
        );
        openDialog();
    };

    const changeQuery = (field, value) => {
        setQueryPayload(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const debouncedSearch = useCallback(
        debounce(val => {
            changeQuery(c.name, val);
        }, searchDebounceTime),
        []
    );

    const hasYearsSelectData = yearsSelectData && yearsSelectData.length > 0;

    useEffect(() => {
        if (hasYearsSelectData && !yearsSelectDataLoading) {
            const currentYearId = yearsSelectData.find(el => !!el[c.current])[
                c.id
            ];
            setQueryReady(true);
            changeQuery(c.plan_year_id, currentYearId);
        }
    }, [yearsSelectDataLoading]);

    useEffect(() => {
        if (queryReady) {
            loadActivities(stringifiedQuery);
        }
    }, [queryPayload]);
    useEffect(() => {
        if (queryReady && queryPayload[c.page] > totalPages) {
            changeQuery(c.page, totalPages);
        }
    }, [totalPages]);

    useEffect(() => {
        loadYearsSelectData();
        loadAdditionalData();
        return () => {
            resetActivities();
        };
    }, []);

    const tableIsLoading = dialogIsOpen
        ? false
        : loading || requesting || deleting;

    const departmentsExist =
        additionalData &&
        additionalData[c.users] &&
        additionalData[c.users].length > 0;

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
                    {isAdmin && (
                        <Button
                            onClick={onAddActivityClick}
                            size="large"
                            variant="contained"
                            color="primary"
                            disabled={tableIsLoading}
                        >
                            დამატება
                        </Button>
                    )}
                    <Button
                        size="large"
                        color="primary"
                        onClick={() => {
                            setDialogContent(
                                <StrategyDocumentDialog onClose={closeDialog} />
                            );
                            openDialog();
                        }}
                    >
                        დოკუმენტები
                    </Button>
                </div>
                <div style={{ display: "flex", marginTop: "16px" }}>
                    <FlexList spacing={2}>
                        <FormControl
                            variant="outlined"
                            className={cls.selectFormControl}
                        >
                            <InputLabel>წელი</InputLabel>
                            <Select
                                disabled={yearsSelectDataLoading}
                                value={queryPayload[c.plan_year_id] || ""}
                                onChange={e => {
                                    changeQuery(c.plan_year_id, e.target.value);
                                    changeQuery(c.page, 1);
                                }}
                                label="წელი"
                            >
                                {!hasYearsSelectData ? (
                                    <MenuItem value="">აირჩიეთ წელი</MenuItem>
                                ) : null}
                                {hasYearsSelectData &&
                                    yearsSelectData.map((el, index) => (
                                        <MenuItem key={index} value={el[c.id]}>
                                            {el[c.name]}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            disabled={yearsSelectDataLoading}
                            className={cls.selectMonthFormControl}
                        >
                            <InputLabel>თვე</InputLabel>
                            <Select
                                multiple
                                value={queryPayload[c.months] || []}
                                onChange={e => {
                                    changeQuery(c.months, e.target.value);
                                    changeQuery(c.page, 1);
                                }}
                                label="თვე"
                            >
                                <MenuItem disabled value="">
                                    აირჩიეთ თვე
                                </MenuItem>
                                {months.map((el, index) => (
                                    <MenuItem key={index} value={el[c.id]}>
                                        {el[c.name]}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl
                            variant="outlined"
                            className={cls.selectMonthFormControl}
                            disabled={
                                additionalDataLoading || yearsSelectDataLoading
                            }
                        >
                            <InputLabel>სტატუსი</InputLabel>
                            <Select
                                onChange={e => {
                                    changeQuery(c.status, e.target.value);
                                    changeQuery(c.page, 1);
                                }}
                                value={queryPayload[c.status] || ""}
                                label="სტატუსი"
                            >
                                <MenuItem value="">ყველა სტატუსი</MenuItem>
                                {additionalData?.[c.statuses]?.length > 0 &&
                                    additionalData[c.statuses].map(
                                        (el, index) => (
                                            <MenuItem
                                                key={index}
                                                value={el[c.id]}
                                            >
                                                {el[c.name]}
                                            </MenuItem>
                                        )
                                    )}
                            </Select>
                        </FormControl>
                        {isAdmin && (
                            <FormControl
                                variant="outlined"
                                className={cls.selectDepartmentFormControl}
                                disabled={
                                    additionalDataLoading ||
                                    yearsSelectDataLoading
                                }
                            >
                                <InputLabel>სტრუქტურული ერთეული</InputLabel>
                                <Select
                                    onChange={e => {
                                        changeQuery(
                                            c.main_user_id,
                                            e.target.value
                                        );
                                        changeQuery(c.page, 1);
                                    }}
                                    value={queryPayload[c.main_user_id] || ""}
                                    label="სტრუქტურული ერთეული"
                                >
                                    <MenuItem value="">
                                        ყველა სტრუქტურული ერთეული
                                    </MenuItem>
                                    {departmentsExist &&
                                        additionalData[c.users].map(
                                            (el, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={el[c.id]}
                                                >
                                                    {el[c.job_name]}
                                                </MenuItem>
                                            )
                                        )}
                                </Select>
                            </FormControl>
                        )}

                        <div style={{ width: "300px" }}>
                            <TextField
                                disabled={yearsSelectDataLoading}
                                fullWidth
                                placeholder="ძებნა"
                                variant="outlined"
                                value={searchText}
                                onChange={e => {
                                    setSearchText(e.target.value);
                                    debouncedSearch(e.target.value);
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: searchText ? (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => {
                                                    setSearchText("");
                                                    debouncedSearch("");
                                                }}
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ) : null
                                }}
                            />
                        </div>
                    </FlexList>
                </div>
            </div>
            <Paper elevation={1}>
                <div>
                    <Table
                        minWidth="1280px"
                        columns={columns}
                        rows={activitiesRows}
                        rowProps={{
                            setDialogContent,
                            openDialog,
                            closeDialog,
                            isAdmin,
                            currentListQuery: stringifiedQuery,
                            currentYearId: queryPayload[c.plan_year_id]
                        }}
                        paginated={false}
                        loading={tableIsLoading}
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
    loading: state.activities.loading,
    requesting: state.activities.requesting,
    deleting: state.activities.deleting,
    activitiesRows: state.activities.data,
    totalPages: state.activities.totalPages,
    additionalData: state.activities.additionalData,
    additionalDataLoading: state.activities.additionalDataLoading,
    yearsSelectData: state.activities.yearsSelectData,
    yearsSelectDataLoading: state.activities.yearsSelectDataLoading,
    userId: state.client.userInfo[c.id]
});
const mapDispatch = {
    loadActivities: activitiesListLoading,
    loadAdditionalData: activitiesAdditionalDataLoading,
    loadYearsSelectData: activitiesYearsSelectDataLoading,
    resetActivities: activitiesReset
};

export default connect(mapState, mapDispatch)(Activities);
