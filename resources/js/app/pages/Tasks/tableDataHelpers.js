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
    tasksListLoading,
    tasksAddEdit,
    tasksAddEditRemoveValidation,
    tasksAddEditReset,
    tasksRemove
} from "@/redux/actions/tasks";
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
        id: "goal",
        value: "სტრატეგიული მიზანი"
    },
    {
        id: "name",
        value: "სტრატეგიული ამოცანა"
    },
    {
        id: "actions",
        value: "მოქმედებები",
        alignRight: true,
        notSortable: true
    }
];

const initialFormState = {
    [c.goal_id]: "",
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
    loadTasks,
    addAlert,
    resetTaskAddEdit,
    goals,
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
            resetTaskAddEdit();
        };
    }, []);

    return (
        <>
            <DialogTitle
                onClose={onClose}
                title={`ამოცანის ${isEdit ? "რედაქტირება" : "დამატება"}`}
                subtitle={`თქვენ შეგიძლიათ ${
                    isEdit ? "შეცვალოთ" : "დაამატოთ ახალი"
                } ამოცანა`}
            />
            <form
                noValidate
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    submit(payload, () => {
                        addAlert({
                            message: `სტრატეგიული ამოცანა წარმატებით ${
                                isEdit ? "შეინახა" : "შეიქმნა"
                            }`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadTasks();
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
                                error={!!validations[c.goal_id]}
                            >
                                <InputLabel>სტრატეგიული მიზანი</InputLabel>
                                <Select
                                    onChange={e =>
                                        onSingleValueChange(
                                            e.target.value,
                                            c.goal_id
                                        )
                                    }
                                    value={payload[c.goal_id]}
                                    label="სტრატეგიული მიზანი"
                                >
                                    <MenuItem value="">
                                        აირჩეთ სტრატეგიული მიზანი
                                    </MenuItem>
                                    {goals.map((el, index) => (
                                        <MenuItem key={index} value={el[c.id]}>
                                            {el[c.name]}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>
                                    {validations[c.goal_id]}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                multiline
                                rows={4}
                                fullWidth
                                label="სტრატეგიული ამოცანა"
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
    requesting: state.tasks.requesting,
    validations: state.tasks.validations,
    goals: state.tasks.goals
});
const mapDispatchDialog = {
    submit: tasksAddEdit,
    loadTasks: tasksListLoading,
    removeValidation: tasksAddEditRemoveValidation,
    addAlert: alertAdd,
    resetTaskAddEdit: tasksAddEditReset
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
    removeTask,
    loadTasks,
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
                                [c.goal_id]: row.goal_id.value,
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
                    removeTask(row.id.value, () => {
                        addAlert({
                            message: `სტრატეგიული ამოცანა წარმატებით წაიშალა`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadTasks();
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
    removeTask: tasksRemove,
    loadTasks: tasksListLoading,
    addAlert: alertAdd
};

const ActionsWrapper = connect(
    mapStateActions,
    mapDispatchActions
)(_ActionsWrapper);

export const createRow = ({ id, goal_id, goal, name }) => {
    return {
        id: {
            value: id
        },
        goal_id: {
            value: goal_id
        },
        goal: {
            value: goal
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
