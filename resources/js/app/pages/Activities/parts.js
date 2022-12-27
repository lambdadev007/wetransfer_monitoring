import React, { useState, useEffect } from "react";
import {
    IconButton,
    Typography,
    CircularProgress,
    Fade,
    TextField
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import GetAppIcon from "@material-ui/icons/GetApp";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import FileUpload from "@/components/FileUpload";
import Popconfirm from "@/components/Popconfirm";
import Button from "@/components/Button";
import * as c from "@/constants";
import { alertAdd } from "@/redux/actions/alerts";
import {
    activitiesEvidencesAddEdit,
    activitiesEvidencesAddEditRemoveValidation,
    activitiesIndicatorsEvidencesReset,
    activitiesIndicatorsEvidencesDelete,
    activitiesSingleLoading,
    activitiesIndicatorsEdit,
    activitiesIndicatorsEditRemoveValidation,
    activitiesIndicatorsAdd,
    activitiesIndicatorsAddRemoveValidation
} from "@/redux/actions/activities";

const useSpinnerOverlayStyles = makeStyles(theme => ({
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 10,
        transition: "0.3s",
        backgroundColor: "rgba(0,0,0,0.2)"
    }
}));

const useEvidenceStyles = makeStyles(theme => ({
    main: {
        marginBottom: theme.spacing(1)
    },
    mainInfo: {
        display: "flex",
        alignItems: "center"
    },
    editButtons: {
        display: "flex",
        marginLeft: theme.spacing(1)
    },
    form: {
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        margin: theme.spacing(1, 0)
    },
    evidenceButtons: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingTop: theme.spacing(2),
        "& > *": {
            marginLeft: theme.spacing(2)
        }
    },
    fileList: {
        padding: theme.spacing(2, 10, 2, 3),
        backgroundColor: theme.palette.grey[100],
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(1)
    }
}));

const useIndicatorStyles = makeStyles(theme => ({
    main: {
        padding: theme.spacing(2, 0),
        "&:not(:last-child)": {
            borderBottom: `1px solid ${theme.palette.grey[400]}`
        }
    },
    mainInfo: {
        display: "flex",
        alignItems: "center"
    },
    editButtons: {
        display: "flex",
        marginLeft: theme.spacing(1)
    },
    form: {
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        margin: theme.spacing(1, 0)
    },
    indicatorsButtons: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingTop: theme.spacing(2),
        "& > *": {
            marginLeft: theme.spacing(2)
        }
    },
    evidencesList: {
        marginTop: theme.spacing(1)
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

export const SpinnerOverlay = ({ visible, ...props }) => {
    const cls = useSpinnerOverlayStyles();

    return (
        <Fade in={visible} timeout={300}>
            <div className={cls.main}>
                <CircularProgress size={50} />
            </div>
        </Fade>
    );
};

const initialEvidenceFormState = {
    [c.name]: "",
    [c.files]: []
};

const _EvidenceForm = ({
    indicatorId,
    onClose,
    isEdit,
    data,

    requesting,
    validations,
    single,
    submit,
    removeValidation,
    addAlert,
    reset,
    loadSingle,
    ...props
}) => {
    const [payload, setPayload] = useState(
        isEdit
            ? {
                  [c.name]: data[c.name],
                  [c.files]: [],
                  [c.indicator_id]: indicatorId,
                  [c.id]: data[c.id]
              }
            : { ...initialEvidenceFormState, [c.indicator_id]: indicatorId }
    );
    const cls = useEvidenceStyles();

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
        const fd = new FormData();

        for (let key in payload) {
            if (key === c.files) {
                if (payload[c.files].length > 0) {
                    payload[c.files].forEach(file => {
                        fd.append(`${c.files}[]`, file.originFileObj);
                    });
                } else {
                    // dont add this field
                }
            } else {
                fd.append(key, payload[key]);
            }
        }

        submit(fd, () => {
            addAlert({
                message: `მტკიცებულება წარმატებით ${
                    isEdit ? "შეინახა" : "შეიქმნა"
                }`,
                options: {
                    variant: "success"
                }
            });
            loadSingle(single[c.id]);
            onClose();
        });
    };

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    return (
        <div className={cls.form}>
            <TextField
                autoFocus
                multiline
                rows={4}
                fullWidth
                label="მტკიცებულება"
                variant="outlined"
                onChange={e => onSingleValueChange(e.target.value, c.name)}
                value={payload[c.name]}
                error={!!validations[c.name] || !!validations[c.indicator_id]}
                helperText={validations[c.name] || validations[c.indicator_id]}
            />
            <div className={cls.evidenceButtons}>
                <div style={{ width: "300px" }}>
                    <FileUpload
                        multiple
                        fullWidth
                        fileList={payload[c.files]}
                        onChange={obj => {
                            onSingleValueChange(obj.fileList, c.files);
                        }}
                        error={validations[c.files]}
                    >
                        ფაილების დამატება
                    </FileUpload>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    loading={requesting}
                    onClick={handleSubmit}
                >
                    {isEdit ? "შენახვა" : "დამატება"}
                </Button>
                <IconButton onClick={onClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </div>
        </div>
    );
};

const mapStateEvidenceForm = state => ({
    requesting: state.activities.evidencesRequesting,
    validations: state.activities.evidencesValidations,
    single: state.activities.single
});
const mapDispatchEvidenceForm = {
    submit: activitiesEvidencesAddEdit,
    removeValidation: activitiesEvidencesAddEditRemoveValidation,
    addAlert: alertAdd,
    reset: activitiesIndicatorsEvidencesReset,
    loadSingle: activitiesSingleLoading
};

const EvidenceForm = connect(
    mapStateEvidenceForm,
    mapDispatchEvidenceForm
)(_EvidenceForm);

const _Evidence = ({
    indicatorId,
    data,
    setBeingEditedEvidenceId,
    beingEditedEvidenceId,

    submitDelete,
    loadSingle,
    single,
    addAlert,
    ...props
}) => {
    const cls = useEvidenceStyles();

    return (
        <li className={cls.main}>
            {beingEditedEvidenceId === data[c.id] ? (
                <EvidenceForm
                    onClose={() => {
                        setBeingEditedEvidenceId(null);
                    }}
                    indicatorId={indicatorId}
                    isEdit
                    data={data}
                />
            ) : (
                <div className={cls.mainInfo}>
                    <Typography variant="body1">{data[c.name]}</Typography>
                    <div className={cls.editButtons}>
                        <IconButton
                            onClick={() => {
                                setBeingEditedEvidenceId(data[c.id]);
                            }}
                        >
                            <EditIcon />
                        </IconButton>
                        <Popconfirm
                            title="გსურთ მტკიცებულების წაშლა?"
                            onOk={() => {
                                const requestType = "evidence";
                                submitDelete(
                                    data[c.id],
                                    () => {
                                        addAlert({
                                            message: `მტკიცებულება წარმატებით წაიშალა`,
                                            options: {
                                                variant: "success"
                                            }
                                        });
                                        loadSingle(single[c.id]);
                                    },
                                    requestType
                                );
                            }}
                        >
                            <IconButton>
                                <DeleteIcon color="error" />
                            </IconButton>
                        </Popconfirm>
                    </div>
                </div>
            )}
            {!!data[c.files] && data[c.files].length > 0 && (
                <div className={cls.fileList}>
                    {data[c.files].map(el => (
                        <FileListItem
                            key={el[c.id]}
                            date={el[c.created_at]}
                            canDelete
                            title={el[c.name]}
                            url={el[c.full_url]}
                            onRemove={() => {
                                const requestType = "file";
                                submitDelete(
                                    el[c.id],
                                    () => {
                                        addAlert({
                                            message: `ფაილი წარმატებით წაიშალა`,
                                            options: {
                                                variant: "success"
                                            }
                                        });
                                        loadSingle(single[c.id]);
                                    },
                                    requestType
                                );
                            }}
                        />
                    ))}
                </div>
            )}
        </li>
    );
};

const mapStateEvidence = state => ({
    single: state.activities.single
});
const mapDispatchEvidence = {
    submitDelete: activitiesIndicatorsEvidencesDelete,
    addAlert: alertAdd,
    loadSingle: activitiesSingleLoading
};

const Evidence = connect(mapStateEvidence, mapDispatchEvidence)(_Evidence);

// INDICATOR INDICATOR INDICATOR INDICATOR INDICATOR
// INDICATOR INDICATOR INDICATOR INDICATOR INDICATOR

const _IndicatorEditForm = ({
    onClose,
    data,

    requesting,
    validations,
    single,
    submit,
    removeValidation,
    addAlert,
    reset,
    loadSingle,
    ...props
}) => {
    const [payload, setPayload] = useState({
        [c.name]: data[c.name],
        [c.activity_id]: single[c.id],
        [c.id]: data[c.id]
    });
    const cls = useIndicatorStyles();

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
        submit(payload, () => {
            addAlert({
                message: `ინდიკატორი წარმატებით შეინახა`,
                options: {
                    variant: "success"
                }
            });
            loadSingle(single[c.id]);
            onClose();
        });
    };

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    return (
        <div className={cls.form}>
            <TextField
                autoFocus
                multiline
                rows={4}
                fullWidth
                label="ინდიკატორი"
                variant="outlined"
                onChange={e => onSingleValueChange(e.target.value, c.name)}
                value={payload[c.name]}
                error={!!validations[c.name] || !!validations[c.activity_id]}
                helperText={validations[c.name] || validations[c.activity_id]}
            />
            <div className={cls.indicatorsButtons}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    loading={requesting}
                    onClick={handleSubmit}
                >
                    შენახვა
                </Button>
                <IconButton onClick={onClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </div>
        </div>
    );
};

const mapStateIndicatorEditForm = state => ({
    requesting: state.activities.indicatorsEditRequesting,
    validations: state.activities.indicatorsEditValidations,
    single: state.activities.single
});
const mapDispatchIndicatorEditForm = {
    submit: activitiesIndicatorsEdit,
    removeValidation: activitiesIndicatorsEditRemoveValidation,
    addAlert: alertAdd,
    reset: activitiesIndicatorsEvidencesReset,
    loadSingle: activitiesSingleLoading
};

const IndicatorEditForm = connect(
    mapStateIndicatorEditForm,
    mapDispatchIndicatorEditForm
)(_IndicatorEditForm);

const _IndicatorAddForm = ({
    requesting,
    validations,
    single,
    submit,
    removeValidation,
    addAlert,
    reset,
    loadSingle,
    ...props
}) => {
    const [payload, setPayload] = useState({
        [c.name]: "",
        [c.activity_id]: single[c.id]
    });
    const cls = useIndicatorStyles();

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
        submit(payload, () => {
            addAlert({
                message: `ინდიკატორი წარმატებით შეიქმნა`,
                options: {
                    variant: "success"
                }
            });
            loadSingle(single[c.id]);
            setPayload(prev => ({
                ...prev,
                [c.name]: ""
            }));
        });
    };

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    return (
        <div>
            <TextField
                multiline
                rows={4}
                fullWidth
                label="ინდიკატორი"
                margin="normal"
                variant="outlined"
                onChange={e => onSingleValueChange(e.target.value, c.name)}
                value={payload[c.name]}
                error={!!validations[c.name] || !!validations[c.activity_id]}
                helperText={validations[c.name] || validations[c.activity_id]}
            />
            <Button
                variant="contained"
                color="primary"
                size="large"
                loading={requesting}
                onClick={handleSubmit}
            >
                დამატება
            </Button>
        </div>
    );
};

const mapStateIndicatorAddForm = state => ({
    requesting: state.activities.indicatorsAddRequesting,
    validations: state.activities.indicatorsAddValidations,
    single: state.activities.single
});
const mapDispatchIndicatorAddForm = {
    submit: activitiesIndicatorsAdd,
    removeValidation: activitiesIndicatorsAddRemoveValidation,
    addAlert: alertAdd,
    reset: activitiesIndicatorsEvidencesReset,
    loadSingle: activitiesSingleLoading
};

export const IndicatorAddForm = connect(
    mapStateIndicatorAddForm,
    mapDispatchIndicatorAddForm
)(_IndicatorAddForm);

const _Indicator = ({
    data,
    setBeingEditedIndicatorId,
    beingEditedIndicatorId,
    setBeingAddedEvidenceIndicatorId,
    beingAddedEvidenceIndicatorId,
    setBeingEditedEvidenceId,
    beingEditedEvidenceId,

    submitDelete,
    loadSingle,
    single,
    addAlert,
    ...props
}) => {
    const cls = useIndicatorStyles();

    return (
        <li className={cls.main}>
            {beingEditedIndicatorId === data[c.id] ? (
                <IndicatorEditForm
                    onClose={() => {
                        setBeingEditedIndicatorId(null);
                    }}
                    data={data}
                />
            ) : (
                <div className={cls.mainInfo}>
                    <Typography variant="body1">{data[c.name]}</Typography>
                    <div className={cls.editButtons}>
                        <IconButton
                            onClick={() => {
                                setBeingAddedEvidenceIndicatorId(data[c.id]);
                            }}
                        >
                            <AddIcon color="primary" />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                setBeingEditedIndicatorId(data[c.id]);
                            }}
                        >
                            <EditIcon />
                        </IconButton>
                        <Popconfirm
                            title="გსურთ ინდიკატორის წაშლა?"
                            onOk={() => {
                                const requestType = "indicator";
                                submitDelete(
                                    data[c.id],
                                    () => {
                                        addAlert({
                                            message: `ინდიკატორი წარმატებით წაიშალა`,
                                            options: {
                                                variant: "success"
                                            }
                                        });
                                        loadSingle(single[c.id]);
                                    },
                                    requestType
                                );
                            }}
                        >
                            <IconButton>
                                <DeleteIcon color="error" />
                            </IconButton>
                        </Popconfirm>
                    </div>
                </div>
            )}
            {beingAddedEvidenceIndicatorId === data[c.id] && (
                <EvidenceForm
                    indicatorId={data[c.id]}
                    onClose={() => {
                        setBeingAddedEvidenceIndicatorId(null);
                    }}
                />
            )}
            {!!data[c.evidences] && data[c.evidences].length > 0 && (
                <ul className={cls.evidencesList}>
                    {data[c.evidences].map(el => (
                        <Evidence
                            setBeingEditedEvidenceId={setBeingEditedEvidenceId}
                            beingEditedEvidenceId={beingEditedEvidenceId}
                            key={el[c.id]}
                            data={el}
                            indicatorId={data[c.id]}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

const mapStateIndicator = state => ({
    single: state.activities.single
});
const mapDispatchIndicator = {
    submitDelete: activitiesIndicatorsEvidencesDelete,
    addAlert: alertAdd,
    loadSingle: activitiesSingleLoading
};

export const Indicator = connect(
    mapStateIndicator,
    mapDispatchIndicator
)(_Indicator);
