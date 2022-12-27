import React, { useState, useEffect, useMemo } from "react";
import {
    IconButton,
    TextField,
    FormControl,
    FormHelperText,
    InputLabel,
    Select,
    Menu,
    MenuItem,
    Grid,
    Typography,
    CircularProgress,
    Tooltip,
    Badge
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import checkRole from "@/helpers/checkRole";
import {
    DialogTitle,
    DialogContent,
    DialogActions
} from "@/components/DialogParts";
import FileUpload from "@/components/FileUpload";
import Popconfirm from "@/components/Popconfirm";
import Button from "@/components/Button";
import * as c from "@/constants";
import { months } from "@/config";
import { alertAdd } from "@/redux/actions/alerts";
import {
    activitiesAddEdit,
    activitiesAddEditRemoveValidation,
    activitiesAddEditReset,
    activitiesSingleLoading,
    activitiesSingleReset,
    activitiesRemove,
    activitiesListLoading,
    activitiesDocumentsLoading,
    activitiesDocumentUpload,
    activitiesDocumentUploadRemoveValidation,
    activitiesDocumentDelete,
    activitiesDocumentsReset
} from "@/redux/actions/activities";

import { FileListItem } from "./parts";
import DialogContentUser from "./dialogUser";
import DialogContentComment from "./dialogComment";
import { dateTimeFormatPretty } from "@/config";

const onlyAdmins = [c.super_administrator, c.admin];

const useStyles = makeStyles(theme => ({
    actionsWrapper: {
        display: "flex",
        justifyContent: "flex-end"
    },
    documentLoader: {
        textAlign: "center"
    }
}));

export const columns = [
    {
        id: "status",
        value: "სტატუსი",
        notSortable: true
    },
    {
        id: "status_author",
        value: "სტატუსის ავტორი",
        notSortable: true
    },
    {
        id: "activity",
        value: "აქტივობა",
        notSortable: true
    },
    {
        id: "department",
        value: "სტრუქტურული ერთეული",
        notSortable: true
    },
    {
        id: "period",
        value: "განხორციელების პერიოდი",
        notSortable: true
    },
    {
        id: "actions",
        value: "მოქმედებები",
        alignRight: true,
        notSortable: true
    }
];

const initialFormStateAdmin = {
    [c.goal_id]: "",
    [c.task_id]: "",
    [c.name]: "",
    [c.months]: [],
    [c.main_user_id]: "",
    [c.users]: []
};

const _DialogContentAdmin = ({
    onClose,
    requesting,
    validations,
    additionalDataRedux,
    additionalDataLoading,
    single,
    singleLoadingRedux,
    submit,
    loadActivities,
    removeValidation,
    addAlert,
    resetActivityAddEdit,
    loadSingleActivity,
    resetSingleActivity,
    isEdit,
    activityId,
    currentListQuery,
    currentYearId,
    ...props
}) => {
    const [payload, setPayload] = useState({
        ...initialFormStateAdmin,
        [c.plan_year_id]: currentYearId
    });

    const cls = useStyles();

    const onSingleValueChange = (value, field) => {
        setPayload({
            ...payload,
            [field]: value
        });
        if (validations[field]) {
            removeValidation(field);
        }
    };

    useEffect(() => {
        if (isEdit) {
            loadSingleActivity(activityId);
        }
        return () => {
            resetActivityAddEdit();
            resetSingleActivity();
        };
    }, []);

    useEffect(() => {
        if (single && !singleLoadingRedux) {
            setPayload({
                [c.id]: activityId,
                [c.plan_year_id]: single[c.plan_year][c.id],
                [c.goal_id]: single[c.task][c.goal][c.id],
                [c.task_id]: single[c.task][c.id],
                [c.name]: single[c.name],
                [c.months]: single[c.months].map(el => String(el[c.id])),
                [c.main_user_id]: single[c.main_user_id][c.id],
                [c.users]: single[c.users_ids] ? single[c.users_ids] : []
            });
        }
    }, [singleLoadingRedux]);

    const singleLoading = isEdit ? singleLoadingRedux : false;
    const additionalData = additionalDataRedux || {};
    const formDisabled = additionalDataLoading;
    const foundTasks =
        additionalData[c.goals] &&
        additionalData[c.goals].length > 0 &&
        payload[c.goal_id]
            ? additionalData[c.goals].find(
                  el => el[c.id] === payload[c.goal_id]
              )[c.tasks]
            : [];

    if (singleLoading) {
        return (
            <DialogContent>
                <div style={{ textAlign: "center" }}>
                    <CircularProgress />
                </div>
            </DialogContent>
        );
    }

    if (!single && isEdit) {
        return (
            <DialogContent>
                <div style={{ textAlign: "center" }}>
                    <Typography variant="body1">
                        ამ ჩანაწერის ინფორმაცია ვერ მოიძებნა
                    </Typography>
                </div>
            </DialogContent>
        );
    }

    return (
        <>
            <DialogTitle
                onClose={onClose}
                title={`აქტივობის ${isEdit ? "რედაქტირება" : "დამატება"}`}
                subtitle={`თქვენ შეგიძლიათ ${
                    isEdit ? "შეცვალოთ" : "დაამატოთ ახალი"
                } აქტივობა`}
            />
            <form
                noValidate
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    submit(payload, () => {
                        addAlert({
                            message: `აქტივობა წარმატებით ${
                                isEdit ? "შეინახა" : "შეიქმნა"
                            }`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadActivities(currentListQuery);
                        onClose();
                    });
                }}
            >
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl
                                error={!!validations[c.goal_id]}
                                disabled={formDisabled}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel>სტრატეგიული მიზანი</InputLabel>
                                <Select
                                    onChange={e => {
                                        onSingleValueChange(
                                            e.target.value,
                                            c.goal_id
                                        );
                                        setPayload(prev => ({
                                            ...prev,
                                            [c.task_id]: ""
                                        }));
                                    }}
                                    value={payload[c.goal_id]}
                                    label="სტრატეგიული მიზანი"
                                >
                                    <MenuItem value="">
                                        აირჩეთ სტრატეგიული მიზანი
                                    </MenuItem>
                                    {!formDisabled &&
                                        additionalData[c.goals] &&
                                        additionalData[c.goals].map(
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
                                <FormHelperText>
                                    {validations[c.goal_id]}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                error={!!validations[c.task_id]}
                                disabled={formDisabled || !payload[c.goal_id]}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel>სტრატეგიული ამოცანა</InputLabel>
                                <Select
                                    onChange={e =>
                                        onSingleValueChange(
                                            e.target.value,
                                            c.task_id
                                        )
                                    }
                                    value={payload[c.task_id]}
                                    label="სტრატეგიული ამოცანა"
                                >
                                    <MenuItem value="">
                                        აირჩეთ სტრატეგიული ამოცანა
                                    </MenuItem>
                                    {!formDisabled &&
                                        foundTasks.map((el, index) => (
                                            <MenuItem
                                                key={index}
                                                value={el[c.id]}
                                            >
                                                {el[c.name]}
                                            </MenuItem>
                                        ))}
                                </Select>
                                <FormHelperText>
                                    {validations[c.task_id]}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                disabled={formDisabled}
                                multiline
                                rows={4}
                                fullWidth
                                label="აქტივობა"
                                margin="normal"
                                variant="outlined"
                                onChange={e =>
                                    onSingleValueChange(e.target.value, c.name)
                                }
                                value={payload[c.name]}
                                error={!!validations[c.name]}
                                helperText={validations[c.name]}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                error={!!validations[c.months]}
                                disabled={formDisabled}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel>განხორციელების პერიოდი</InputLabel>
                                <Select
                                    multiple
                                    onChange={e =>
                                        onSingleValueChange(
                                            e.target.value,
                                            c.months
                                        )
                                    }
                                    value={payload[c.months]}
                                    label="განხორციელების პერიოდი"
                                >
                                    {months.map((el, index) => (
                                        <MenuItem key={index} value={el[c.id]}>
                                            {el[c.name]}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>
                                    {validations[c.months]}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl
                                error={!!validations[c.main_user_id]}
                                disabled={formDisabled}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel>სტრუქტურული ერთეული</InputLabel>
                                <Select
                                    onChange={e =>
                                        onSingleValueChange(
                                            e.target.value,
                                            c.main_user_id
                                        )
                                    }
                                    value={payload[c.main_user_id]}
                                    label="სტრუქტურული ერთეული"
                                >
                                    <MenuItem value="">
                                        აირჩეთ სტრუქტურული ერთეული
                                    </MenuItem>
                                    {!formDisabled &&
                                        additionalData[c.users] &&
                                        additionalData[c.users].map(
                                            (el, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={el[c.id]}
                                                    disabled={
                                                        !!payload[c.users] &&
                                                        payload[
                                                            c.users
                                                        ].includes(el[c.id])
                                                    }
                                                >
                                                    {el[c.job_name]}
                                                </MenuItem>
                                            )
                                        )}
                                </Select>
                                <FormHelperText>
                                    {validations[c.main_user_id]}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl
                                error={!!validations[c.users]}
                                disabled={formDisabled}
                                fullWidth
                                variant="outlined"
                            >
                                <InputLabel>
                                    დამხმარე სტრუქტურული ერთეული
                                </InputLabel>
                                <Select
                                    multiple
                                    onChange={e =>
                                        onSingleValueChange(
                                            e.target.value,
                                            c.users
                                        )
                                    }
                                    value={payload[c.users]}
                                    label="დამხმარე სტრუქტურული ერთეული"
                                >
                                    <MenuItem disabled value="">
                                        აირჩეთ დამხმარე სტრუქტურული ერთეული
                                    </MenuItem>
                                    {!formDisabled &&
                                        additionalData[c.users] &&
                                        additionalData[c.users].map(
                                            (el, index) => (
                                                <MenuItem
                                                    disabled={
                                                        el[c.id] ===
                                                        payload[c.main_user_id]
                                                    }
                                                    key={index}
                                                    value={el[c.id]}
                                                >
                                                    {el[c.job_name]}
                                                </MenuItem>
                                            )
                                        )}
                                </Select>
                                <FormHelperText>
                                    {validations[c.users]}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions isEdit={isEdit} isSaving={requesting} />
            </form>
        </>
    );
};

const mapStateDialogAdmin = state => ({
    requesting: state.activities.requesting,
    validations: state.activities.validations,
    additionalDataRedux: state.activities.additionalData,
    additionalDataLoading: state.activities.additionalDataLoading,
    single: state.activities.single,
    singleLoadingRedux: state.activities.singleLoading
});
const mapDispatchDialogAdmin = {
    submit: activitiesAddEdit,
    loadActivities: activitiesListLoading,
    removeValidation: activitiesAddEditRemoveValidation,
    addAlert: alertAdd,
    resetActivityAddEdit: activitiesAddEditReset,
    loadSingleActivity: activitiesSingleLoading,
    resetSingleActivity: activitiesSingleReset
};

export const DialogFormAdmin = connect(
    mapStateDialogAdmin,
    mapDispatchDialogAdmin
)(_DialogContentAdmin);

const _StrategyDocumentDialog = ({
    onClose,
    yearsSelectData,
    yearsSelectDataLoading,
    loadDocuments,
    documentsLoading,
    documents,
    requesting,
    validations,
    deleting,
    uploadDocuments,
    deleteDocument,
    resetDocuments,
    removeValidation,
    addAlert,
    ...props
}) => {
    const [selectedYear, setSelectedYear] = useState("");
    const [filesToUpload, setFilesToUpload] = useState([]);
    const [localValidations, setLocalValidations] = useState({});
    const cls = useStyles();
    const isAdmin = useMemo(() => checkRole(onlyAdmins), []);

    const hasYearsSelectData = yearsSelectData && yearsSelectData.length > 0;
    const hasDocuments = documents && documents.length > 0;

    const handleSubmit = () => {
        if (filesToUpload.length < 1) {
            setLocalValidations({
                [c.files]: "ფაილი აუცილებელია"
            });
            return;
        }
        const fd = new FormData();

        fd.append(c.plan_year_id, selectedYear);
        filesToUpload.forEach(file => {
            fd.append(`${c.files}[]`, file.originFileObj);
        });

        uploadDocuments(fd, () => {
            setFilesToUpload([]);
            addAlert({
                message: `სტრატეგიული დოკუმენტი წარმატებით შეიქმნა`,
                options: {
                    variant: "success"
                }
            });
            const currentYearId = yearsSelectData.find(el => !!el[c.current])[
                c.id
            ];
            loadDocuments(currentYearId);
        });
    };

    useEffect(() => {
        if (hasYearsSelectData && !yearsSelectDataLoading) {
            const currentYearId = yearsSelectData.find(el => !!el[c.current])[
                c.id
            ];
            loadDocuments(currentYearId);
            setSelectedYear(currentYearId);
        }
    }, [yearsSelectDataLoading]);

    useEffect(() => {
        return () => {
            resetDocuments();
        };
    }, []);

    return (
        <>
            <DialogTitle
                onClose={onClose}
                title="დოკუმენტების დამატება / გადმოწერა"
                subtitle="შენ შეგიძლია დაამატო ან გადმოიწერო დოკუმენტები"
            />
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>წელი</InputLabel>
                            <Select
                                disabled={yearsSelectDataLoading}
                                value={selectedYear}
                                onChange={e => {
                                    setSelectedYear(e.target.value);
                                    loadDocuments(e.target.value);
                                    setLocalValidations({});
                                    if (validations[c.files]) {
                                        removeValidation(c.files);
                                    }
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
                    </Grid>
                    {documentsLoading || deleting ? (
                        <Grid item xs={12}>
                            <div className={cls.documentLoader}>
                                <CircularProgress />
                            </div>
                        </Grid>
                    ) : (
                        <>
                            {isAdmin && (
                                <Grid item xs={12} sm={6}>
                                    <FileUpload
                                        fullWidth
                                        multiple
                                        fileList={filesToUpload}
                                        onChange={obj => {
                                            setFilesToUpload(obj.fileList);
                                            setLocalValidations({});
                                            if (validations[c.files]) {
                                                removeValidation(c.files);
                                            }
                                        }}
                                        error={
                                            validations[c.files] ||
                                            localValidations[c.files]
                                        }
                                    >
                                        ფაილების დამატება
                                    </FileUpload>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                {hasDocuments && (
                                    <Grid container spacing={1}>
                                        {documents.map((el, index) => (
                                            <Grid key={index} item xs={12}>
                                                <FileListItem
                                                    date={el[c.created_at]}
                                                    canDelete={isAdmin}
                                                    title={el[c.name]}
                                                    url={el[c.full_url]}
                                                    onRemove={() => {
                                                        deleteDocument(
                                                            el[c.id],
                                                            () => {
                                                                addAlert({
                                                                    message: `სტრატეგიული დოკუმენტი წარმატებით წაიშალა`,
                                                                    options: {
                                                                        variant:
                                                                            "success"
                                                                    }
                                                                });
                                                                const currentYearId = yearsSelectData.find(
                                                                    el =>
                                                                        !!el[
                                                                            c
                                                                                .current
                                                                        ]
                                                                )[c.id];
                                                                loadDocuments(
                                                                    currentYearId
                                                                );
                                                            }
                                                        );
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                )}
                            </Grid>
                        </>
                    )}
                </Grid>
            </DialogContent>
            <DialogActions
                onSave={handleSubmit}
                isSaving={requesting}
                isDisabled={yearsSelectDataLoading || !isAdmin}
            />
        </>
    );
};

const mapStateStrategyDocument = state => ({
    yearsSelectData: state.activities.yearsSelectData,
    yearsSelectDataLoading: state.activities.yearsSelectDataLoading,
    documents: state.activities.documents,
    documentsLoading: state.activities.documentsLoading,
    requesting: state.activities.documentUploadRequesting,
    validations: state.activities.validations,
    deleting: state.activities.documentDeleteRequesting
});
const mapDispatchStrategyDocument = {
    loadDocuments: activitiesDocumentsLoading,
    uploadDocuments: activitiesDocumentUpload,
    removeValidation: activitiesDocumentUploadRemoveValidation,
    deleteDocument: activitiesDocumentDelete,
    resetDocuments: activitiesDocumentsReset,
    addAlert: alertAdd
};

export const StrategyDocumentDialog = connect(
    mapStateStrategyDocument,
    mapDispatchStrategyDocument
)(_StrategyDocumentDialog);

const _ActionsWrapper = ({
    setDialogContent,
    openDialog,
    closeDialog,
    isAdmin,
    currentListQuery,
    currentYearId,
    row,

    removeActivity,
    loadActivities,
    addAlert,
    ...props
}) => {
    const cls = useStyles();

    const dialogUserAllowed =
        !isAdmin && row.editable.value && row.is_mine.value;

    const dialogCommentAllowed =
        !isAdmin &&
        !row.editable.value &&
        row.is_mine.value &&
        row.status_author.value !== "სუპერ ადმინისტრატორი";

    return (
        <div className={cls.actionsWrapper}>
            {(dialogUserAllowed) && (
                <Tooltip
                    title={"სტრუქტურული ერთეულის აქტივობის დამატება / რედაქტირება"}
                    placement="left"
                >
                    <IconButton
                        onClick={() => {
                            setDialogContent(
                                <DialogContentUser
                                    activityId={row.id.value}
                                    currentYearId={currentYearId}
                                    onClose={closeDialog}
                                />
                            );
                            openDialog();
                        }}
                    >
                    <AddIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            )}
            {(dialogUserAllowed) && (
                <Tooltip
                    title={"კვარტალური აქტივობების შესრულების აღწერა"}
                    placement="left"
                >
                    <IconButton
                        onClick={() => {
                            setDialogContent(
                                    <DialogContentComment
                                        defaultPayload={{
                                            [c.comment]: row.comment.value,
                                            [c.photos]: row.comment_media.value
                                        }}
                                        currentListQuery={currentListQuery}
                                        activityId={row.id.value}
                                        userGroup={dialogUserAllowed}
                                        onClose={closeDialog}
                                    />
                            );
                            openDialog();
                        }}
                    >
                        <ChatBubbleIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            )}
            <Link to={`/activities/${row.id.value}`}>
                <IconButton>
                    <VisibilityIcon fontSize="small" />
                </IconButton>
            </Link>
            {isAdmin && (
                <>
                    <IconButton
                        onClick={() => {
                            setDialogContent(
                                <DialogFormAdmin
                                    isEdit
                                    currentListQuery={currentListQuery}
                                    currentYearId={currentYearId}
                                    activityId={row.id.value}
                                    onClose={closeDialog}
                                />
                            );
                            openDialog();
                        }}
                    >
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <Popconfirm
                        title="გსურთ ჩანაწერის წაშლა?"
                        onOk={() => {
                            removeActivity(row.id.value, () => {
                                addAlert({
                                    message: `აქტივობა წარმატებით წაიშალა`,
                                    options: {
                                        variant: "success"
                                    }
                                });
                                loadActivities(currentListQuery);
                            });
                        }}
                    >
                        <IconButton>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Popconfirm>
                </>
            )}
        </div>
    );
};

const mapStateActions = state => ({});
const mapDispatchActions = {
    removeActivity: activitiesRemove,
    loadActivities: activitiesListLoading,
    addAlert: alertAdd
};

const ActionsWrapper = connect(
    mapStateActions,
    mapDispatchActions
)(_ActionsWrapper);

export const createRow = ({
    id,
    job_id,
    comment,
    comment_media,
    is_mine,
    moved,
    editable,
    status,
    status_author,
    activity,
    department,
    period
}) => {
    return {
        id: {
            value: id
        },
        job_id: {
            value: job_id
        },
        comment: {
            value: comment
        },
        comment_media: {
            value: comment_media
        },
        moved: {
            value: moved
        },
        editable: {
            value: editable
        },
        is_mine: {
            value: is_mine
        },
        status: {
            value: status,
            render: (cell, { row, ...props }) => {
                return row.moved.value ? (
                    <Tooltip
                        title={
                            <>
                                ბოლო ვადა:{" "}
                                {moment
                                    .utc(row.moved.value[c.end_date])
                                    .format(dateTimeFormatPretty)}
                                <br />
                                გადატანილია: {row.moved.value[c.day]} დღით
                            </>
                        }
                    >
                        <Badge variant="dot" color="error">
                            {cell.value}
                        </Badge>
                    </Tooltip>
                ) : (
                    cell.value
                );
            }
        },
        status_author: {
            value: status_author
        },
        activity: {
            value: activity
        },
        department: {
            value: department
        },
        period: {
            value: period
        },
        actions: {
            value: "",
            render: (
                cell,
                {
                    setDialogContent,
                    openDialog,
                    closeDialog,
                    isAdmin,
                    currentListQuery,
                    currentYearId,
                    row,
                    ...props
                }
            ) => {
                return (
                    <ActionsWrapper
                        setDialogContent={setDialogContent}
                        openDialog={openDialog}
                        closeDialog={closeDialog}
                        isAdmin={isAdmin}
                        currentListQuery={currentListQuery}
                        currentYearId={currentYearId}
                        row={row}
                    />
                );
            }
        }
    };
};
