import React from "react";
import { IconButton, CircularProgress } from "@material-ui/core";
import GetApp from "@material-ui/icons/GetApp";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { alertAdd } from "@/redux/actions/alerts";
import {
    reportsListLoading,
    reportsRemove,
    reportsDownload
} from "@/redux/actions/reports";
import Popconfirm from "@/components/Popconfirm";
import download from "@/helpers/download";
import * as c from "@/constants";

const useStyles = makeStyles(theme => ({
    actionsWrapper: {
        display: "flex",
        justifyContent: "flex-end"
    }
}));

export const columns = [
    {
        id: "report_name",
        value: "რეპორტის დასახელება",
        notSortable: true
    },
    {
        id: "date_created",
        value: "შექმნის თარიღი",
        notSortable: true
    },
    {
        id: "actions",
        value: "მოქმედებები",
        alignRight: true,
        notSortable: true
    }
];

const _ActionsWrapper = ({
    currentListQuery,
    row,

    beingDownloadedId,
    remove,
    loadList,
    submitDownload,
    addAlert,
    ...props
}) => {
    const cls = useStyles();

    return (
        <div className={cls.actionsWrapper}>
            {beingDownloadedId === row.id.value ? (
                <CircularProgress />
            ) : (
                <IconButton
                    onClick={() => {
                        submitDownload(row.id.value, res => {
                            download(res.data, `${row.report_name.value}.pdf`);
                        });
                    }}
                >
                    <GetApp fontSize="small" />
                </IconButton>
            )}
            <Popconfirm
                title="გსურთ ჩანაწერის წაშლა?"
                onOk={() => {
                    remove(row.id.value, () => {
                        addAlert({
                            message: `რეპორტი წარმატებით წაიშალა`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadList(currentListQuery);
                    });
                }}
            >
                <IconButton>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </Popconfirm>
        </div>
    );
};

const mapStateActions = state => ({
    beingDownloadedId: state.reports.beingDownloadedId
});
const mapDispatchActions = {
    remove: reportsRemove,
    loadList: reportsListLoading,
    submitDownload: reportsDownload,
    addAlert: alertAdd
};

const ActionsWrapper = connect(
    mapStateActions,
    mapDispatchActions
)(_ActionsWrapper);

export const createRow = ({ id, fileUrl, report_name, date_created }) => {
    return {
        id: {
            value: id
        },
        fileUrl: {
            value: fileUrl
        },
        report_name: {
            value: report_name
        },
        date_created: {
            value: date_created
        },
        actions: {
            value: "",
            render: (cell, { currentListQuery, row, ...props }) => {
                return (
                    <ActionsWrapper
                        currentListQuery={currentListQuery}
                        row={row}
                    />
                );
            }
        }
    };
};
