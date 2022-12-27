import React, { useState, useEffect, useRef, useMemo } from "react";
import { TextField, Grid, Typography, IconButton } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import DeleteIcon from "@material-ui/icons/Delete";
import Popconfirm from "@/components/Popconfirm";
import FileUpload from "@/components/FileUpload";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import {
    DialogTitle,
    DialogContent,
    DialogActions
} from "@/components/DialogParts";
import * as c from "@/constants";
import { alertAdd } from "@/redux/actions/alerts";
import {
    activitiesListLoading,
    activitiesComment,
    activitiesCommentRemoveValidation,
    activitiesCommentReset,
    activitiesDocumentUploadRemoveValidation,
    activitiesCommentFileDelete,
    activitiesCommentFileValidation,
    activitiesCommentFileReset
} from "@/redux/actions/activities";
import { FontDownload } from "@material-ui/icons";

const commentMaxLength = 2000000000000;

const useStyles = makeStyles(theme => ({}));

const initialState = {
    [c.comment]: "",
    [c.photos]: [],
    [c.comment_media]: []
};

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

const DialogContentComment = ({
    onClose,
    activityId,
    currentListQuery,
    userGroup,

    defaultPayload = initialState,
    requesting,
    validations,
    submitDelete,
    resetFiles,
    removeValidation,
    submit,
    loadList,
    addAlert,
    reset,
    ...props
}) => {

    const [payload, setPayload] = useState({
        [c.comment]: defaultPayload[c.comment] ? defaultPayload[c.comment] : '',
    });
    const [photos, setPhotos] = useState(defaultPayload.photos);
    const fileWasDelete = useRef(false);
    const [localValidations, setLocalValidations] = useState({});

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
        const fd = new FormData();

        for (let key in payload) {
            if (key === c.photos) {
                if (payload[c.photos].length > 0) {
                    payload[c.photos].forEach(file => {
                        fd.append(`${c.photos}[]`, file.originFileObj);
                    });
                } else {
                    // dont add this field
                }
            } else {
                fd.append(key, payload[key]);
            }
        }

        submit(fd, activityId, () => {

            addAlert({
                message: `კვარტალური აქტივობების შესრულების აღწერა წარმატებით შეინახა`,
                options: {
                    variant: "success"
                }
            });
            loadList(currentListQuery);
            onClose();
        });
    };

    useEffect(() => {
        return () => {
            reset();
            if(fileWasDelete.current) {
                loadList(currentListQuery)
            } else {
                setPhotos([])
            }
        };
    }, []);

    return (
        <>
            <DialogTitle
                onClose={onClose}
                title="კვარტალური აქტივობების შესრულების აღწერა"
                subtitle="თქვენ შეგიძლიათ შეცვალოთ კვარტალური აქტივობების შესრულების აღწერა"
            />
            <form
                noValidate
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                multiline
                                rows={4}
                                fullWidth
                                label="კომენტარი"
                                margin="normal"
                                variant="outlined"
                                onChange={e => {
                                    if (
                                        e.target.value.length < commentMaxLength
                                    ) {
                                        onSingleValueChange(
                                            e.target.value,
                                            c.comment
                                        );
                                    }
                                }}
                                value={payload[c.comment]}
                                error={!!validations[c.comment]}
                                helperText={validations[c.comment]}
                            />
                            <Grid item xs={12} sm={6}>
                                <FileUpload
                                    fullWidth
                                    multiple
                                    fileList={payload[c.photos]}
                                    onChange={e => {
                                        onSingleValueChange(e.fileList, c.photos);
                                    }}
                                    error={
                                        validations[c.photos] ||
                                        localValidations[c.photos]
                                    }
                                >
                                    ფაილების დამატება
                                </FileUpload>
                            </Grid>

                            <Grid item xs={12}>
                                {photos.length > 0 && (
                                    <Grid container spacing={1}>
                                        {photos.map((el, index) => (
                                            <Grid key={el[c.id]} item xs={12}>
                                                <FileListItem
                                                    date={el[c.created_at]}
                                                    title={el[c.name]}
                                                    canDelete={userGroup}
                                                    url={el[c.full_url]}
                                                    onRemove={() => {
                                                        submitDelete(
                                                            el[c.id],
                                                            () => {
                                                                addAlert({
                                                                    message: `ფაილი წარმატებით წაიშალა`,
                                                                    options: {
                                                                        variant: "success"
                                                                    }
                                                                });
                                                                fileWasDelete.current = true 
                                                                setPhotos(prev => {
                                                                    return prev.filter(file => file[c.id] !== el[c.id])
                                                                })
                                                            }
                                                        );
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions isEdit isSaving={requesting} />
            </form>
        </>
    );
};

const mapState = state => ({
    requesting: state.activities.commentRequesting,
    validations: state.activities.validations
});
const mapDispatch = {
    submit: activitiesComment,
    removeValidation: activitiesDocumentUploadRemoveValidation,
    submitDelete: activitiesCommentFileDelete,
    resetFiles: activitiesListLoading,
    loadList: activitiesListLoading,
    removeValidation: activitiesCommentRemoveValidation,
    addAlert: alertAdd,
    reset: activitiesCommentReset
};

export default connect(mapState, mapDispatch)(DialogContentComment);
