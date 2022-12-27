import React, { useEffect, useState } from "react";
import { IconButton, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import {
    DialogTitle,
    DialogContent,
    DialogActions
} from "@/components/DialogParts";
import { alertAdd } from "@/redux/actions/alerts";
import {
    goalsListLoading,
    goalsAddEdit,
    goalsAddEditRemoveValidation,
    goalsAddEditReset,
    goalsRemove
} from "@/redux/actions/goals";
import Popconfirm from "@/components/Popconfirm";
import * as c from "@/constants";

const useStyles = makeStyles(theme => ({
    actionsWrapper: {
        display: "flex",
        justifyContent: "flex-end"
    }
}));

export const columns = [
    {
        id: "name",
        value: "სტრატეგიული მიზანი"
    },
    {
        id: "actions",
        value: "მოქმედებები",
        alignRight: true,
        notSortable: true
    }
];

const initialFormState = {
    [c.name]: ""
};

const _DialogForm = ({
    onClose,
    isEdit,
    defaultPayload = initialFormState,
    requesting,
    submit,
    validations,
    removeValidation,
    loadGoals,
    addAlert,
    resetGoalAddEdit,
    ...props
}) => {
    const [payload, setPayload] = useState(defaultPayload);
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
        return () => {
            resetGoalAddEdit();
        };
    }, []);

    return (
        <>
            <DialogTitle
                onClose={onClose}
                title={`სტრატეგიული მიზნის ${
                    isEdit ? "რედაქტირება" : "დამატება"
                }`}
                subtitle={`თქვენ შეგიძლიათ ${
                    isEdit ? "შეცვალოთ" : "დაამატოთ ახალი"
                } სტრატეგიული მიზანი`}
            />
            <form
                noValidate
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    submit(payload, () => {
                        addAlert({
                            message: `სტრატეგიული მიზანი წარმატებით ${
                                isEdit ? "შეინახა" : "შეიქმნა"
                            }`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadGoals();
                        onClose();
                    });
                }}
            >
                <DialogContent>
                    <TextField
                        autoFocus
                        multiline
                        rows={4}
                        fullWidth
                        label="სტრატეგიული მიზანი"
                        margin="normal"
                        variant="outlined"
                        name={c.name}
                        value={payload[c.name]}
                        onChange={e => {
                            onSingleValueChange(e.target.value, c.name);
                        }}
                        error={!!validations[c.name]}
                        helperText={validations[c.name]}
                    />
                </DialogContent>
                <DialogActions isEdit={isEdit} isSaving={requesting} />
            </form>
        </>
    );
};

const mapStateDialog = state => ({
    requesting: state.goals.requesting,
    validations: state.goals.validations
});
const mapDispatchDialog = {
    submit: goalsAddEdit,
    loadGoals: goalsListLoading,
    removeValidation: goalsAddEditRemoveValidation,
    addAlert: alertAdd,
    resetGoalAddEdit: goalsAddEditReset
};

export const DialogForm = connect(
    mapStateDialog,
    mapDispatchDialog
)(_DialogForm);

const _ActionsWrapper = ({
    setDialogContent,
    openDialog,
    closeDialog,
    row,
    removeGoal,
    loadGoals,
    addAlert,
    ...props
}) => {
    const cls = useStyles();

    return (
        <div className={cls.actionsWrapper}>
            <IconButton
                onClick={() => {
                    setDialogContent(
                        <DialogForm
                            isEdit
                            defaultPayload={{
                                [c.id]: row.id.value,
                                [c.name]: row.name.value
                            }}
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
                    removeGoal(row.id.value, () => {
                        addAlert({
                            message: `სტრატეგიული მიზანი წარმატებით წაიშალა`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadGoals();
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

const mapStateActions = state => ({});
const mapDispatchActions = {
    removeGoal: goalsRemove,
    loadGoals: goalsListLoading,
    addAlert: alertAdd
};

const ActionsWrapper = connect(
    mapStateActions,
    mapDispatchActions
)(_ActionsWrapper);

export const createRow = ({ id, name }) => {
    return {
        id: {
            value: id
        },
        name: {
            value: name
        },
        actions: {
            value: "",
            render: (
                cell,
                { setDialogContent, openDialog, closeDialog, row, ...props }
            ) => {
                return (
                    <ActionsWrapper
                        setDialogContent={setDialogContent}
                        openDialog={openDialog}
                        closeDialog={closeDialog}
                        row={row}
                    />
                );
            }
        }
    };
};
