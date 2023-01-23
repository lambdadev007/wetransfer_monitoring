import React, { useState, useEffect, useMemo, Fragment } from "react";
import {
    Typography,
    Grid,
    MenuItem,
    Divider,
    Paper,
    Dialog,
    TextField,
    FormControl,
    FormHelperText,
    InputLabel,
    Select,
    IconButton,
    Tooltip,
    CircularProgress
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import {
    DialogTitle,
    DialogContent,
    DialogActions
} from "@/components/DialogParts";
import Button from "@/components/Button";
import checkRole from "@/helpers/checkRole";
import {
    activitiesAdditionalDataLoading,
    activitiesSingleLoading,
    activitiesStatusChange,
    activitiesStatusChangeRemoveValidation,
    activitiesStatusChangeReset,
    activitiesReset
} from "@/redux/actions/activities";
import { alertAdd } from "@/redux/actions/alerts";
import * as c from "@/constants";
import DialogSuperAdmin from "./dialog";

const onlyAdmins = [c.super_administrator, c.admin];

const percents = [
    { value: 25, title: "25%" },
    { value: 50, title: "50%" },
    { value: 75, title: "75%" },
    { value: 100, title: "100%" }
];

const useStyles = makeStyles(theme => ({
    loader: {
        textAlign: "center"
    },
    divider: {
        "&&": {
            margin: theme.spacing(2, 0)
        }
    },
    buttonsList: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        "& > *": {
            marginLeft: theme.spacing(2)
        }
    },
    statusLogColor: {
        color: "green"
    },
    successButton: {
        "&&": {
            backgroundColor: theme.palette.success.main,
            "&:hover": {
                backgroundColor: theme.palette.success.dark
            },
            color: "#fff"
        }
    },
    errorButton: {
        "&&": {
            backgroundColor: theme.palette.error.main,
            "&:hover": {
                backgroundColor: theme.palette.error.dark
            },
            color: "#fff"
        }
    },
    successText: {
        "&&": {
            color: theme.palette.success.dark
        }
    },
    adminCreatedInfo: {
        "&&": {
            backgroundColor: "#E5E7F5",
            "& *": {
                wordBreak: "break-word"
            }
        }
    },
    userCreatedInfo: {
        "&&": {
            backgroundColor: "#E4F3E5",
            "& *": {
                wordBreak: "break-word"
            }
        }
    },
    statusInfo: {
        "&&": {
            backgroundColor: "#FEE8E7",
            "& *": {
                wordBreak: "break-word"
            }
        }
    }
}));

export const FileListItem = ({
    title,
    date,
    url,
    onRemove,
    canDelete,
    ...props
}) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1">{`${title} - ${date}`}</Typography>
            <a href={url} download>
                <IconButton>
                    <GetAppIcon />
                </IconButton>
            </a>
            {canDelete && (
                <Popconfirm title="გსურთ ფაილის წაშლა?" onOk={onRemove}>
                    <IconButton>
                        <DeleteIcon color="error" fontSize="small" />
                    </IconButton>
                </Popconfirm>
            )}
        </div>
    );
};

const StatusLogList = ({ data, ...props }) => {
    const cls = useStyles();

    return (
        <ol style={{ width: "100%" }}>
            {data[c.status_log].map((el, index) => (
                <li key={index}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">ადმინისტრატორი</Typography>
                            <Typography gutterBottom variant="body2">
                                <strong>სტატუსი: </strong>
                                {el[c.data_admin][c.status][c.name]}
                            </Typography>
                            <Typography gutterBottom variant="body2">
                                <strong>პროცენტი: </strong>
                                {el[c.data_admin][c.status][c.percent] ||
                                    "არ არის მითითებული"}
                            </Typography>
                            <Typography gutterBottom variant="body2">
                                <strong>დასაბუთება: </strong>
                                {el[c.data_admin][c.status][c.remark] ||
                                    "არ არის მითითებული"}
                            </Typography>
                            <Typography
                                className={cls.statusLogColor}
                                gutterBottom
                                variant="body2"
                            >
                                <strong>შემფასებელი: </strong>
                                {el[c.data_admin][c.user][c.job_name] ||
                                    el[c.data_admin][c.user][c.name]}
                            </Typography>
                            <Typography
                                className={cls.statusLogColor}
                                gutterBottom
                                variant="body2"
                            >
                                <strong>თარიღი: </strong>
                                {el[c.data_admin][c.created_at]}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">
                                სუპერ ადმინისტრატორი
                            </Typography>
                            {el[c.data_super_admin] ? (
                                <>
                                    <Typography gutterBottom variant="body2">
                                        <strong>სტატუსი: </strong>
                                        {
                                            el[c.data_super_admin][c.status][
                                                c.name
                                            ]
                                        }
                                    </Typography>
                                    {!!el[c.data_super_admin][c.status][
                                        c.info
                                    ] && (
                                        <>
                                            <Typography
                                                gutterBottom
                                                variant="body2"
                                            >
                                                <strong>გადატანილია: </strong>
                                                {
                                                    el[c.data_super_admin][
                                                        c.status
                                                    ][c.info][c.day]
                                                }{" "}
                                                დღით
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant="body2"
                                            >
                                                <strong>ბოლო ვადა: </strong>
                                                {
                                                    el[c.data_super_admin][
                                                        c.status
                                                    ][c.info][c.end_date]
                                                }
                                            </Typography>
                                        </>
                                    )}
                                    <Typography
                                        gutterBottom
                                        variant="body2"
                                    >
                                        <strong>პროცენტი: </strong>
                                        {el[c.data_super_admin][c.status][
                                            c.percent
                                        ] || 'არ არის მითითებული'}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="body2"
                                    >
                                        <strong>დასაბუთება: </strong>
                                        {el[c.data_super_admin][c.status][
                                            c.remark
                                        ] || 'არ არის მითითებული'}
                                    </Typography>
                                    <Typography
                                        className={cls.statusLogColor}
                                        gutterBottom
                                        variant="body2"
                                    >
                                        <strong>შემფასებელი: </strong>
                                        {el[c.data_super_admin][c.user][
                                            c.job_name
                                        ] ||
                                            el[c.data_super_admin][c.user][
                                                c.name
                                            ]}
                                    </Typography>
                                    <Typography
                                        className={cls.statusLogColor}
                                        gutterBottom
                                        variant="body2"
                                    >
                                        <strong>თარიღი: </strong>
                                        {el[c.data_super_admin][c.created_at]}
                                    </Typography>
                                </>
                            ) : (
                                <Typography variant="body2">
                                    არ აქვს შეფასებული
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </li>
            ))}
        </ol>
    );
};

const FileList = ({ data, ...props }) => {
    return (
        !!data[c.files] &&
        data[c.files].length > 0 && (
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                {data[c.files].map((el, index) => (
                    <Tooltip
                        key={index}
                        title={`${el[c.name]} - ${el[c.created_at]}`}
                        placement="top"
                    >
                        <a href={el[c.full_url]} download>
                            <IconButton>
                                <GetAppIcon fontSize="small" />
                            </IconButton>
                        </a>
                    </Tooltip>
                ))}
            </div>
        )
    );
};

const IndicatorList = ({ data, ...props }) => {
    return (
        !!data[c.indicators] &&
        data[c.indicators].length > 0 && (
            <Grid item xs={12}>
                <Typography variant="h6">
                    ინდიკატორები / მტკიცებულებები
                </Typography>
                <ol>
                    {data[c.indicators].map((el, index) => (
                        <li key={index}>
                            <Typography variant="body2">
                                {el[c.name]}
                            </Typography>
                            {!!el[c.evidences] && el[c.evidences].length > 0 && (
                                <ul>
                                    {el[c.evidences].map((el2, index2) => (
                                        <li key={index2}>
                                            <Typography variant="body2">
                                                {el2[c.name]}
                                            </Typography>
                                            <FileList data={el2} />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ol>
            </Grid>
        )
    );
};

const _AdminStatusChangeForm = ({
    formDisabled,

    data,
    requesting,
    additionalData,
    validations,
    submit,
    reset,
    loadSingle,
    removeValidation,
    addAlert,

    ...props
}) => {
    const [payload, setPayload] = useState({
        [c.activity_id]: data[c.id],
        [c.status_id]: "",
        [c.percent]: "",
        [c.remark]: ""
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

    const handleSubmit = () => {
        submit({
            payload,
            onSuccess: () => {
                addAlert({
                    message: `სტატუსი წარმატებით შეიცვალა`,
                    options: {
                        variant: "success"
                    }
                });
                loadSingle(data[c.id]);
            }
        });
    };

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <FormControl
                        disabled={formDisabled}
                        error={!!validations[c.status_id]}
                        fullWidth
                        variant="outlined"
                    >
                        <InputLabel>აქტივობის სტატუსი</InputLabel>
                        <Select
                            label="აქტივობის სტატუსი"
                            onChange={e => {
                                onSingleValueChange(
                                    e.target.value,
                                    c.status_id
                                );
                            }}
                            value={payload[c.status_id]}
                        >
                            <MenuItem value="">
                                აირჩეთ აქტივობის სტატუსი
                            </MenuItem>
                            {additionalData[c.statuses]
                                .filter(el => !el[c.only_super_admin])
                                .map((el, index) => (
                                    <MenuItem key={index} value={el[c.id]}>
                                        {el[c.name]}
                                    </MenuItem>
                                ))}
                        </Select>
                        <FormHelperText>
                            {validations[c.status_id]}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl
                        disabled={formDisabled}
                        error={!!validations[c.percent]}
                        fullWidth
                        variant="outlined"
                    >
                        <InputLabel>
                            შესრულების პროცენტული მაჩვენებელი
                        </InputLabel>
                        <Select
                            label="შესრულების პროცენტული მაჩვენებელი"
                            onChange={e => {
                                onSingleValueChange(e.target.value, c.percent);
                            }}
                            value={payload[c.percent]}
                        >
                            <MenuItem value="">
                                აირჩეთ შესრულების პროცენტული მაჩვენებელი
                            </MenuItem>
                            {percents.map((el, index) => (
                                <MenuItem key={index} value={el.value}>
                                    {el.title}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>
                            {validations[c.percent]}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={formDisabled}
                        multiline
                        rows={4}
                        fullWidth
                        label="დასაბუთება"
                        variant="outlined"
                        onChange={e =>
                            onSingleValueChange(e.target.value, c.remark)
                        }
                        value={payload[c.remark]}
                        error={!!validations[c.remark]}
                        helperText={validations[c.remark]}
                    />
                </Grid>
            </Grid>
            <Divider className={cls.divider} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className={cls.buttonsList}>
                        <Button
                            disabled={formDisabled}
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            loading={requesting}
                        >
                            შენახვა
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

const mapStateAdminStatusChangeForm = state => ({
    data: state.activities.single,
    requesting: state.activities.statusRequesting,
    validations: state.activities.validations,
    additionalData: state.activities.additionalData
});
const mapDispatchAdminStatusChangeForm = {
    submit: activitiesStatusChange,
    reset: activitiesStatusChangeReset,
    loadSingle: activitiesSingleLoading,
    removeValidation: activitiesStatusChangeRemoveValidation,
    addAlert: alertAdd
};

const AdminStatusChangeForm = connect(
    mapStateAdminStatusChangeForm,
    mapDispatchAdminStatusChangeForm
)(_AdminStatusChangeForm);

const ActivityInner = ({
    data,
    loading,
    additionalData,
    additionalDataLoading,
    loadSingle,
    loadAdditionalData,
    resetAll,
    statusRequesting,
    submitStatus,
    addAlert,
    resetStatusChange,
    ...props
}) => {
    const [dialogContent, setDialogContent] = useState(null);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const cls = useStyles();
    const isAdmin = useMemo(() => checkRole(onlyAdmins), []);
    const isSuperAdmin = useMemo(() => checkRole([c.super_administrator]), []);

    const activityId = props.match.params.id;

    const hasAdminStatus =
        !!data &&
        (!!data[c.editable] ||
            !!(
                data[c.status] &&
                (data[c.status][c.status] || data[c.status][c.main_status])
            ));
    const hasSuperAdminStatus =
        !!data &&
        (!!data[c.editable] ||
            !!(data[c.status] && data[c.status][c.main_status]));

    const canStatusChangeAdmin = !!data && !!data[c.can_status_admin];
    const canStatusChangeSuperAdmin = !!data && !!data[c.can_status_super_admin];

    const openDialog = () => {
        setDialogIsOpen(true);
    };
    const closeDialog = () => {
        setDialogIsOpen(false);
        setDialogContent(null);
    };

    useEffect(() => {
        loadSingle(activityId);
        loadAdditionalData();
        return () => {
            resetAll();
        };
    }, []);

    if (loading || additionalDataLoading) {
        return (
            <Paper elevation={1}>
                <DialogContent isNotModal>
                    <div className={cls.loader}>
                        <CircularProgress />
                    </div>
                </DialogContent>
            </Paper>
        );
    }

    if (!data && !loading) {
        return (
            <Paper elevation={1}>
                <DialogContent isNotModal>
                    <div className={cls.loader}>
                        <Typography variant="body1">
                            ამ ჩანაწერის ინფორმაცია ვერ მოიძებნა
                        </Typography>
                    </div>
                </DialogContent>
            </Paper>
        );
    }

    return (
        <Paper elevation={1}>
            <Dialog
                onClose={closeDialog}
                aria-labelledby="dialog"
                open={dialogIsOpen}
            >
                {dialogContent}
            </Dialog>
            <DialogTitle title={`ჩანაწერის ID: ${activityId}`} isNotModal />
            <DialogContent isNotModal>
                <Grid container spacing={2} className={cls.adminCreatedInfo}>
                    <Grid item xs={12}>
                        <Typography variant="h6">სტრატეგიული მიზანი</Typography>
                        <Typography variant="body2">
                            {data[c.task][c.goal][c.name]}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            სტრატეგიული ამოცანა
                        </Typography>
                        <Typography variant="body2">
                            {data[c.task][c.name]}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">აქტივობა</Typography>
                        <Typography variant="body2">{data[c.name]}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            განხორციელების პერიოდი
                        </Typography>
                        <Typography variant="body2">
                            {data[c.months_text]}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            პასუხისმგებელი სტრუქტურული ერთეული/უფლებამოსილი პირი
                        </Typography>
                        <Typography variant="body2">
                            {data[c.main_user_id][c.job_name]}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            დამხმარე სტრუქტურული ერთეული/უფლებამოსილი პირი
                        </Typography>
                        <Typography variant="body2">
                            {data[c.users] || "არ არის მითითებული"}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider className={cls.divider} />
                <Grid container spacing={2} className={cls.userCreatedInfo}>
                    <IndicatorList data={data} />

                    <Grid item xs={12}>
                        <Typography variant="h6">ადამიანური რესურსი</Typography>
                        <Typography variant="body2">
                            {data[c.human_resource]
                                ? data[c.human_resource][c.name]
                                : "არ არის მითითებული"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">დაფინანსების წყარო</Typography>
                        {
                        !data[c.total_funding] && !data[c.grant_funding] && data[c.other_funding] ?
                        (                            
                            <Typography variant="body2">
                               არ არის მითითებული
                            </Typography>
                        ) : (
                            <>
                                <Typography variant="body2">
                                აქტივობის სრული ბიუჯეტი :  {data[c.total_funding]
                                        ? data[c.total_funding]
                                        : "არ არის მითითებული"}
                                </Typography>
                                <Typography variant="body2">
                                    ცენტრის სახსრები :  {data[c.grant_funding]
                                        ? data[c.grant_funding]
                                        : "არ არის მითითებული"}
                                </Typography>
                                <Typography variant="body2">
                                    დონორი :  {data[c.other_funding]
                                        ? data[c.other_funding]
                                        : "არ არის მითითებული"}
                                </Typography>    
                            </>
                        )     
                        }              
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            მატერიალური რესურსი
                        </Typography>
                        <Typography variant="body2">
                            {data[c.material_resource]
                                ? data[c.material_resource][c.name]
                                : "არ არის მითითებული"}
                        </Typography>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Typography variant="h6">პიარ აქტივობა</Typography>
                        <Typography variant="body2">
                            {data[c.pr_activity] || "არ არის მითითებული"}
                        </Typography>
                    </Grid> */}
                    <Grid item xs={12}>
                        <Typography variant="h6">შენიშვნა</Typography>
                        <Typography variant="body2">
                            {data[c.user_remark] || "არ არის მითითებული"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            კვარტალური აქტივობების შესრულების აღწერა
                        </Typography>
                        <Typography variant="body2">
                            {data[c.comment] || "არ არის მითითებული"}
                        </Typography>
                        {data[c.comment_media].length > 0 && (
                            <Grid container spacing={0}>
                                {data[c.comment_media].map((el, index) => (
                                    <Grid key={index} item xs={12}>
                                        <FileListItem
                                            date={el[c.created_at]}
                                            title={el[c.name]}
                                            url={el[c.full_url]}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        )} 
                    </Grid>
                </Grid>
                <Divider className={cls.divider} />
                <Grid container spacing={2} className={cls.statusInfo}>
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center">
                            სტატუსების ლოგი
                        </Typography>
                    </Grid>
                    {!!data[c.status_log] && data[c.status_log].length > 0 ? (
                        <StatusLogList data={data} />
                    ) : (
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                ჩანაწერი არ მოიძებნა
                            </Typography>
                        </Grid>
                    )}
                </Grid>
                {isAdmin && canStatusChangeAdmin && !isSuperAdmin && !hasAdminStatus ? (
                    <>
                        <Divider className={cls.divider} />
                        <AdminStatusChangeForm formDisabled={hasAdminStatus} />
                    </>
                ) : null
                // <Grid container spacing={2} className={cls.statusInfo}>
                //     {!data[c.status] ||
                //         (!!data[c.status] &&
                //             !data[c.status][c.status] &&
                //             !data[c.status][c.main_status] && (
                //                 <Grid item xs={12} sm={6}>
                //                     <Typography variant="h6">
                //                         აქტივობის სტატუსი - სისტემა
                //                     </Typography>
                //                     <Typography variant="body2">
                //                         {data[c.status_text]}
                //                     </Typography>
                //                 </Grid>
                //             ))}
                //     {!!data[c.status] &&
                //         (data[c.status][c.status] ||
                //             data[c.status][c.main_status]) && (
                //             <>
                //                 <Grid item xs={12} sm={6}>
                //                     <Typography variant="h6">
                //                         აქტივობის სტატუსი - ადმინისტრატორი
                //                     </Typography>
                //                     <Typography variant="body2">
                //                         {data[c.status][c.status]
                //                             ? data[c.status][c.status][
                //                                   c.name
                //                               ]
                //                             : "არ არის მითითებული"}
                //                     </Typography>
                //                 </Grid>
                //                 <Grid item xs={12} sm={6}>
                //                     <Typography variant="h6">
                //                         აქტივობის სტატუსი - სუპერ
                //                         ადმინისტრატორი
                //                     </Typography>
                //                     <Typography variant="body2">
                //                         {data[c.status][c.main_status]
                //                             ? data[c.status][c.main_status][
                //                                   c.name
                //                               ]
                //                             : "არ არის მითითებული"}
                //                     </Typography>
                //                 </Grid>
                //             </>
                //         )}
                //     <Grid item xs={12} sm={6}>
                //         <Typography variant="h6">
                //             შესრულების პროცენტული მაჩვენებელი
                //         </Typography>
                //         <Typography variant="body2">
                //             {data[c.percent]
                //                 ? `${data[c.percent]}%`
                //                 : "არ არის მითითებული"}
                //         </Typography>
                //     </Grid>
                //     <Grid item xs={12}>
                //         <Typography variant="h6">დასაბუთება</Typography>
                //         <Typography variant="body2">
                //             {data[c.remark] || "არ არის მითითებული"}
                //         </Typography>
                //     </Grid>
                // </Grid>
                }

                {isSuperAdmin &&
                    canStatusChangeSuperAdmin &&
                    !hasSuperAdminStatus &&
                    !!data[c.status] &&
                    data[c.status][c.status] && (
                        <>
                            <Divider className={cls.divider} />
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <div className={cls.buttonsList}>
                                        <Button
                                            size="large"
                                            variant="contained"
                                            onClick={() => {
                                                submitStatus({
                                                    payload: {
                                                        [c.activity_id]:
                                                            data[c.id],
                                                        [c.is_accept]: 1
                                                    },
                                                    onSuccess: () => {
                                                        addAlert({
                                                            message: `ხელმძღვანელობა დაეთანხმა შეფასებას`,
                                                            options: {
                                                                variant:
                                                                    "success"
                                                            }
                                                        });
                                                        loadSingle(data[c.id]);
                                                    },
                                                    decision: "yes",
                                                    isSuperAdmin: true
                                                });
                                            }}
                                            className={cls.successButton}
                                            loading={
                                                !dialogIsOpen &&
                                                statusRequesting === "yes"
                                            }
                                            disabled={
                                                !dialogIsOpen &&
                                                statusRequesting === "no"
                                            }
                                        >
                                            ვეთანხმები
                                        </Button>
                                        <Button
                                            loading={
                                                !dialogIsOpen &&
                                                statusRequesting === "no"
                                            }
                                            disabled={
                                                !dialogIsOpen &&
                                                statusRequesting === "yes"
                                            }
                                            size="large"
                                            variant="contained"
                                            className={cls.errorButton}
                                            onClick={() => {
                                                resetStatusChange();

                                                setDialogContent(
                                                    <DialogSuperAdmin
                                                        onClose={closeDialog}
                                                    />
                                                );
                                                openDialog();
                                            }}
                                        >
                                            არ ვეთანხმები
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </>
                    )}
            </DialogContent>
        </Paper>
    );
};

const mapState = state => ({
    data: state.activities.single,
    loading: state.activities.singleLoading,
    additionalData: state.activities.additionalData,
    additionalDataLoading: state.activities.additionalDataLoading,
    statusRequesting: state.activities.statusRequesting
});
const mapDispatch = {
    submitStatus: activitiesStatusChange,
    loadAdditionalData: activitiesAdditionalDataLoading,
    loadSingle: activitiesSingleLoading,
    resetAll: activitiesReset,
    resetStatusChange: activitiesStatusChangeReset,
    addAlert: alertAdd
};

export default connect(mapState, mapDispatch)(ActivityInner);
