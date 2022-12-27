import React from "react";
import {
    DialogTitle as MuiDialogTitle,
    DialogContent as MuiDialogContent,
    DialogActions as MuiDialogActions,
    Typography,
    IconButton
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@/components/Button";

const useStyles = makeStyles(theme => ({
    titleWrapper: {
        "&&": {
            padding: theme.spacing(2),
            position: "relative"
        }
    },
    title: {
        "&&": {
            paddingRight: theme.spacing(6)
        }
    },
    closeButton: {
        "&&": {
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1)
        }
    },
    content: {
        padding: theme.spacing(2),
        overflowY: props => (props.isNotModal ? "unset" : "auto")
    },
    actions: {
        margin: 0,
        padding: theme.spacing(2)
    }
}));

export const DialogTitle = ({
    title,
    subtitle,
    onClose,
    isNotModal,
    ...props
}) => {
    const cls = useStyles();

    return (
        <MuiDialogTitle disableTypography className={cls.titleWrapper}>
            <Typography variant="h6" className={cls.title}>
                {title}
            </Typography>
            <Typography variant="body2" className={cls.title}>
                {subtitle}
            </Typography>
            {isNotModal ? null : (
                <IconButton
                    aria-label="close"
                    className={cls.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            )}
        </MuiDialogTitle>
    );
};
export const DialogContent = ({ isNotModal, ...props }) => {
    const cls = useStyles({ isNotModal });

    return (
        <MuiDialogContent dividers className={cls.content}>
            {props.children}
        </MuiDialogContent>
    );
};
export const DialogActions = ({
    onSave,
    isSaving,
    isEdit,
    customActions,
    isDisabled,
    ...props
}) => {
    const cls = useStyles();

    return (
        <MuiDialogActions className={cls.actions}>
            {customActions ? (
                customActions
            ) : (
                <Button
                    onClick={onSave}
                    color="primary"
                    variant="contained"
                    loading={isSaving}
                    disabled={isDisabled}
                    size="large"
                    type="submit"
                >
                    {isEdit ? "შენახვა" : "დამატება"}
                </Button>
            )}
        </MuiDialogActions>
    );
};
