import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import qs from "query-string";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { columns } from "./tableDataHelpers";
import { alertAdd } from "@/redux/actions/alerts";
import {
    reportsListLoading,
    reportsReset,
    reportsFilterDataLoading,
    reportsGenerate
} from "@/redux/actions/reports";
import Button from "@/components/Button";
import FlexList from "@/components/FlexList";
import checkRole from "@/helpers/checkRole";
import * as c from "@/constants";
import { months } from "@/config";

const onlyAdmins = [c.super_administrator, c.admin];

const useStyles = makeStyles(theme => ({
    topControls: {
        marginBottom: theme.spacing(3)
    },
    selectFormControl: {
        "&&": {
            minWidth: "270px",
            maxWidth: "270px"
        }
    },
    selectFormControlSmall: {
        "&&": {
            minWidth: "180px",
            maxWidth: "180px"
        }
    }
}));

const Statistics = ({
    loadList,
    resetAll,
    loading,
    rows,
    userId,
    loadFilterData,
    generateReport,
    addAlert,
    totalPages,
    filterData,
    filterDataLoading,
    generating,
    deleting,
    ...props
}) => {
    const isAdmin = useMemo(() => checkRole(onlyAdmins), []);
    const [queryPayload, setQueryPayload] = useState({
        [c.page]: 1
    });
    const [payload, setPayload] = useState({
        [c.main_user_id]: isAdmin ? "" : userId,
        [c.year]: "",
        [c.months]: [],
        [c.goal]: "",
        [c.status]: ""
    });

    const stringifiedQuery = useMemo(
        () =>
            qs.stringify(queryPayload, {
                arrayFormat: "comma"
            }),
        [queryPayload]
    );
    const stringifiedPayload = useMemo(
        () =>
            qs.stringify(payload, {
                arrayFormat: "comma"
            }),
        [payload]
    );

    const cls = useStyles();

    const changeQuery = (field, value) => {
        setQueryPayload(prev => ({
            ...prev,
            [field]: value
        }));
    };
    const changePayload = (field, value) => {
        setPayload(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleReportGeneration = () => {
        generateReport(stringifiedPayload, () => {
            addAlert({
                message: "რეპორტი წარმატებით შეიქმნა",
                options: {
                    variant: "success"
                }
            });
            loadList(stringifiedQuery);
        });
    };
    useEffect(() => {
        if (filterData[c.years] && !filterDataLoading) {
            const currentYearId = filterData[c.years].find(
                el => !!el[c.current]
            )[c.id];
            changePayload(c.year, currentYearId);
        }
    }, [filterDataLoading]);

    useEffect(() => {
        loadList(stringifiedQuery);
    }, [queryPayload]);
    useEffect(() => {
        if (queryPayload[c.page] > totalPages) {
            changeQuery(c.page, totalPages);
        }
    }, [totalPages]);

    useEffect(() => {
        loadFilterData();
        return () => {
            resetAll();
        };
    }, []);

    const tableIsLoading = loading || generating || deleting;

    return (
        <>
            <div className={cls.topControls}>
                <FlexList spacing={2} justify="right">
                    {isAdmin && (
                        <FormControl
                            className={cls.selectFormControl}
                            variant="outlined"
                            disabled={filterDataLoading}
                        >
                            <InputLabel>სტრუქტურული ერთეული</InputLabel>
                            <Select
                                onChange={e => {
                                    changePayload(
                                        c.main_user_id,
                                        e.target.value
                                    );
                                }}
                                value={payload[c.main_user_id]}
                                label="სტრუქტურული ერთეული"
                            >
                                <MenuItem value="">
                                    აირჩიეთ სტრუქტურული ერთეული
                                </MenuItem>
                                {!!filterData[c.users] &&
                                    filterData[c.users].map((el, index) => (
                                        <MenuItem key={index} value={el[c.id]}>
                                            {el[c.job]}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    )}
                    <FormControl
                        className={cls.selectFormControlSmall}
                        variant="outlined"
                        disabled={filterDataLoading}
                    >
                        <InputLabel>წელი</InputLabel>
                        <Select
                            onChange={e => {
                                changePayload(c.year, e.target.value);
                            }}
                            value={payload[c.year]}
                            label="წელი"
                        >
                            <MenuItem value="">აირჩიეთ წელი</MenuItem>

                            {!!filterData[c.years] &&
                                filterData[c.years].map((el, index) => (
                                    <MenuItem key={index} value={el[c.id]}>
                                        {el[c.name]}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                    <FormControl
                        className={cls.selectFormControlSmall}
                        variant="outlined"
                        disabled={filterDataLoading}
                    >
                        <InputLabel>თვე</InputLabel>
                        <Select
                            onChange={e => {
                                changePayload(c.months, e.target.value);
                            }}
                            value={payload[c.months]}
                            multiple
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
                        className={cls.selectFormControl}
                        variant="outlined"
                        disabled={filterDataLoading}
                    >
                        <InputLabel>სტრატეგიული მიზანი</InputLabel>
                        <Select
                            onChange={e => {
                                changePayload(c.goal, e.target.value);
                            }}
                            value={payload[c.goal]}
                            label="სტრატეგიული მიზანი"
                        >
                            <MenuItem value="">
                                აირჩიეთ სტრატეგიული მიზანი
                            </MenuItem>
                            {!!filterData[c.goals_with_tasks] &&
                                filterData[c.goals_with_tasks].map(
                                    (el, index) => (
                                        <MenuItem key={index} value={el[c.id]}>
                                            {el[c.name]}
                                        </MenuItem>
                                    )
                                )}
                        </Select>
                    </FormControl>
                    <FormControl
                        className={cls.selectFormControl}
                        variant="outlined"
                        disabled={filterDataLoading}
                    >
                        <InputLabel>შესრულების სტატუსი</InputLabel>
                        <Select
                            onChange={e => {
                                changePayload(c.status, e.target.value);
                            }}
                            value={payload[c.status]}
                            label="შესრულების სტატუსი"
                        >
                            <MenuItem value="">
                                აირჩიეთ შესრულების სტატუსი
                            </MenuItem>
                            {!!filterData[c.statuses] &&
                                filterData[c.statuses].map((el, index) => (
                                    <MenuItem key={index} value={el[c.id]}>
                                        {el[c.name]}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                    <Button
                        onClick={handleReportGeneration}
                        loading={generating}
                        disabled={filterDataLoading}
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        გენერირება
                    </Button>
                </FlexList>
            </div>
            <Paper elevation={1}>
                <div>
                    <Table
                        columns={columns}
                        rows={rows}
                        rowProps={{
                            currentListQuery: stringifiedQuery
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
    loading: state.reports.loading,
    rows: state.reports.data,
    totalPages: state.reports.totalPages,
    filterData: state.reports.filterData,
    filterDataLoading: state.reports.filterDataLoading,
    generating: state.reports.generating,
    deleting: state.reports.deleting,
    userId: state.client.userInfo[c.id]
});
const mapDispatch = {
    loadList: reportsListLoading,
    resetAll: reportsReset,
    loadFilterData: reportsFilterDataLoading,
    generateReport: reportsGenerate,
    addAlert: alertAdd
};

export default connect(mapState, mapDispatch)(Statistics);
