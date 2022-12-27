import React, { useState, useEffect } from "react";
import {
    IconButton,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    FormHelperText
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
    indicatorsListLoading,
    indicatorsAddEdit,
    indicatorsAddEditRemoveValidation,
    indicatorsAddEditReset,
    indicatorsRemove
} from "@/redux/actions/indicators";
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
        id: "task",
        value: "სტრატეგიული ამოცანა"
    },
    {
        id: "name",
        value: "ინდიკატორი"
    },
    {
        id: "actions",
        value: "მოქმედებები",
        alignRight: true,
        notSortable: true
    }
];

const initialFormState = {
    [c.task_id]: "",
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
    loadIndicators,
    addAlert,
    resetIndicatorAddEdit,
    tasks,
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
            resetIndicatorAddEdit();
        };
    }, []);

    return (
        <>
            <DialogTitle
                onClose={onClose}
                title={`ინდიკატორის ${isEdit ? "რედაქტირება" : "დამატება"}`}
                subtitle={`თქვენ შეგიძლიათ ${
                    isEdit ? "შეცვალოთ" : "დაამატოთ ახალი"
                } ინდიკატორი`}
            />
            <form
                noValidate
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    submit(payload, () => {
                        addAlert({
                            message: `ინდიკატორი წარმატებით ${
                                isEdit ? "შეინახა" : "შეიქმნა"
                            }`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadIndicators();
                        onClose();
                    });
                }}
            >
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl
                                fullWidth
                                variant="outlined"
                                error={!!validations[c.task_id]}
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
                                    {tasks.map((el, index) => (
                                        <MenuItem key={index} value={el[c.id]}>
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
                                multiline
                                rows={4}
                                fullWidth
                                label="ინდიკატორი"
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
                    </Grid>
                </DialogContent>
                <DialogActions isEdit={isEdit} isSaving={requesting} />
            </form>
        </>
    );
};

const mapStateDialog = state => ({
    requesting: state.indicators.requesting,
    validations: state.indicators.validations,
    tasks: state.indicators.tasks
});
const mapDispatchDialog = {
    submit: indicatorsAddEdit,
    loadIndicators: indicatorsListLoading,
    removeValidation: indicatorsAddEditRemoveValidation,
    addAlert: alertAdd,
    resetIndicatorAddEdit: indicatorsAddEditReset
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
    removeIndicator,
    loadIndicators,
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
                                [c.task_id]: row.task_id.value,
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
                    removeIndicator(row.id.value, () => {
                        addAlert({
                            message: `ინდიკატორი წარმატებით წაიშალა`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadIndicators();
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
    removeIndicator: indicatorsRemove,
    loadIndicators: indicatorsListLoading,
    addAlert: alertAdd
};

const ActionsWrapper = connect(
    mapStateActions,
    mapDispatchActions
)(_ActionsWrapper);

export const createRow = ({ id, task_id, task, name }) => {
    return {
        id: {
            value: id
        },
        task_id: {
            value: task_id
        },
        task: {
            value: task
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
