import React, { useEffect, useState } from "react";
import {
    IconButton,
    TextField,
    Grid,
    FormControlLabel,
    Checkbox
} from "@material-ui/core";
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
    departmentsListLoading,
    departmentsAddEdit,
    departmentsAddEditRemoveValidation,
    departmentsAddEditReset,
    departmentsRemove
} from "@/redux/actions/departments";
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
        id: "status",
        value: "სტატუსი"
    },
    {
        id: "name",
        value: "სტრუქტურული ერთეულის დასახელება"
    },
    {
        id: "actions",
        value: "მოქმედებები",
        alignRight: true,
        notSortable: true
    }
];

const initialFormState = {
    [c.name]: "",
    [c.is_active]: true
};

const _DialogForm = ({
    onClose,
    isEdit,
    defaultPayload = initialFormState,
    requesting,
    submit,
    validations,
    removeValidation,
    loadDepartments,
    addAlert,
    resetDepartmentAddEdit,
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
            resetDepartmentAddEdit();
        };
    }, []);

    return (
        <>
            <DialogTitle
                onClose={onClose}
                title={`სტრუქტურული ერთეულის ${
                    isEdit ? "რედაქტირება" : "დამატება"
                }`}
                subtitle={`თქვენ შეგიძლიათ ${
                    isEdit ? "შეცვალოთ" : "დაამატოთ ახალი"
                } სტრუქტურული ერთეული`}
            />
            <form
                noValidate
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    submit(
                        payload,
                        () => {
                            addAlert({
                                message: `სტრუქტურული ერთეული წარმატებით ${
                                    isEdit ? "შეინახა" : "შეიქმნა"
                                }`,
                                options: {
                                    variant: "success"
                                }
                            });
                            loadDepartments();
                            onClose();
                        },
                        isEdit
                    );
                }}
            >
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                multiline
                                rows={4}
                                fullWidth
                                label="სტრუქტურული ერთეული"
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
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={payload[c.is_active]}
                                        onChange={e =>
                                            onSingleValueChange(
                                                e.target.checked,
                                                c.is_active
                                            )
                                        }
                                        color="primary"
                                    />
                                }
                                label="აქტიური"
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions isEdit={isEdit} isSaving={requesting} />
            </form>
        </>
    );
};

const mapStateDialog = state => ({
    requesting: state.departments.requesting,
    validations: state.departments.validations
});
const mapDispatchDialog = {
    submit: departmentsAddEdit,
    loadDepartments: departmentsListLoading,
    removeValidation: departmentsAddEditRemoveValidation,
    addAlert: alertAdd,
    resetDepartmentAddEdit: departmentsAddEditReset
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
    removeDepartment,
    loadDepartments,
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
                                [c.name]: row.name.value,
                                [c.is_active]: row.status.value
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
                    removeDepartment(row.id.value, () => {
                        addAlert({
                            message: `სტრუქტურული ერთეული წარმატებით წაიშალა`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadDepartments();
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
    removeDepartment: departmentsRemove,
    loadDepartments: departmentsListLoading,
    addAlert: alertAdd
};

const ActionsWrapper = connect(
    mapStateActions,
    mapDispatchActions
)(_ActionsWrapper);

export const createRow = ({ id, status, name }) => {
    return {
        id: {
            value: id
        },
        status: {
            value: status,
            render: cell => (cell.value ? `აქტიური` : "გამორთული")
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
