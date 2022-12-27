import React, { useEffect, useState } from "react";
import {
    IconButton,
    TextField,
    FormControl,
    FormLabel,
    FormControlLabel,
    FormHelperText,
    RadioGroup,
    Radio,
    Checkbox,
    InputLabel,
    Select,
    Menu,
    MenuItem,
    Grid
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
    usersListLoading,
    usersSelectDataLoading,
    usersAddEdit,
    usersAddEditRemoveValidation,
    usersAddEditReset,
    usersRemove
} from "@/redux/actions/users";
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
        id: "department",
        value: "სტრუქტურული ერთეული"
    },
    {
        id: "name",
        value: "სახელი გვარი"
    },
    {
        id: "email",
        value: "ელ. ფოსტა"
    },
    {
        id: "phone",
        value: "ტელეფონი"
    },
    {
        id: "is_active",
        value: "სტატუსი"
    },
    {
        id: "role",
        value: "როლი"
    },
    {
        id: "actions",
        value: "მოქმედებები",
        alignRight: true,
        notSortable: true
    }
];

const roles = [
    {
        value: c.super_administrator,
        title: "სუპერ ადმინისტრატორი"
    },
    {
        value: c.admin,
        title: "ადმინისტრატორი"
    },
    {
        value: c.users,
        title: "სტრუქტურული ერთეული"
    }
];
const rolesKeys = {
    [c.super_administrator]: "სუპერ ადმინისტრატორი",
    [c.admin]: "ადმინისტრატორი",
    [c.users]: "სტრუქტურული ერთეული"
};

const initialFormState = {
    [c.name]: "",
    [c.phone]: "",
    [c.email]: "",
    [c.job_id]: "",
    [c.is_active]: true,
    [c.role_name]: c.users
};

const _DialogForm = ({
    onClose,
    isEdit,
    defaultPayload = initialFormState,
    requesting,
    submit,
    validations,
    removeValidation,
    loadUsers,
    addAlert,
    resetUserAddEdit,
    departments,
    departmentsLoading,
    loadDepartments,
    ...props
}) => {
    const [payload, setPayload] = useState({
        ...defaultPayload,
        ...(isEdit ? { [c.password]: "" } : {})
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
        return () => {
            resetUserAddEdit();
        };
    }, []);

    return (
        <>
            <DialogTitle
                onClose={onClose}
                title={`მომხმარებლის ${isEdit ? "რედაქტირება" : "დამატება"}`}
                subtitle={`თქვენ შეგიძლიათ ${
                    isEdit ? "შეცვალოთ" : "დაამატოთ ახალი"
                } მომხმარებელი`}
            />
            <form
                noValidate
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    let modifiedPayload = { ...payload };
                    if (!modifiedPayload[c.password]) {
                        delete modifiedPayload[c.password];
                    }
                    submit(
                        modifiedPayload,
                        () => {
                            addAlert({
                                message: `მომხმარებელი წარმატებით ${
                                    isEdit ? "შეინახა" : "შეიქმნა"
                                }`,
                                options: {
                                    variant: "success"
                                }
                            });
                            loadUsers();
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
                            <FormControl
                                fullWidth
                                variant="outlined"
                                error={!!validations[c.job_id]}
                            >
                                <InputLabel>სტრუქტურული ერთეული</InputLabel>
                                <Select
                                    onChange={e =>
                                        onSingleValueChange(
                                            e.target.value,
                                            c.job_id
                                        )
                                    }
                                    value={payload[c.job_id]}
                                    label="სტრუქტურული ერთეული"
                                    disabled={departmentsLoading}
                                >
                                    <MenuItem value="">
                                        აირჩეთ სტრუქტურული ერთეული
                                    </MenuItem>
                                    {departments &&
                                        departments.map((el, index) => (
                                            <MenuItem
                                                disabled={el[c.disabled]}
                                                key={index}
                                                value={el[c.id]}
                                            >
                                                {el[c.name]}
                                            </MenuItem>
                                        ))}
                                </Select>
                                <FormHelperText>
                                    {validations[c.job_id]}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="სახელი გვარი"
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
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                type="email"
                                label="ელ. ფოსტა"
                                margin="normal"
                                variant="outlined"
                                name={c.email}
                                value={payload[c.email]}
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.email
                                    );
                                }}
                                error={!!validations[c.email]}
                                helperText={validations[c.email]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="ტელეფონი"
                                margin="normal"
                                variant="outlined"
                                name={c.phone}
                                value={payload[c.phone]}
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.phone
                                    );
                                }}
                                error={!!validations[c.phone]}
                                helperText={validations[c.phone]}
                            />
                        </Grid>
                        {isEdit && (
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    label="პაროლი"
                                    margin="normal"
                                    variant="outlined"
                                    name={c.password}
                                    value={payload[c.password]}
                                    type="password"
                                    onChange={e => {
                                        onSingleValueChange(
                                            e.target.value,
                                            c.password
                                        );
                                    }}
                                    error={!!validations[c.password]}
                                    helperText={validations[c.password]}
                                />
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="აირჩიეთ როლი"
                                    name="აირჩეთ როლი"
                                    value={payload[c.role_name]}
                                    onChange={e =>
                                        onSingleValueChange(
                                            e.target.value,
                                            c.role_name
                                        )
                                    }
                                >
                                    {roles.map((el, index) => (
                                        <FormControlLabel
                                            key={index}
                                            value={el.value}
                                            control={<Radio color="primary" />}
                                            label={el.title}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
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
    requesting: state.users.requesting,
    validations: state.users.validations,
    departments: state.users.departments,
    departmentsLoading: state.users.departmentsLoading
});
const mapDispatchDialog = {
    submit: usersAddEdit,
    loadUsers: usersListLoading,
    loadDepartments: usersSelectDataLoading,
    removeValidation: usersAddEditRemoveValidation,
    addAlert: alertAdd,
    resetUserAddEdit: usersAddEditReset
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
    removeUser,
    loadUsers,
    addAlert,
    loadDepartments,
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
                                [c.is_active]: row.is_active.value,
                                [c.phone]: row.phone.value,
                                [c.email]: row.email.value,
                                [c.job_id]: row.job_id.value,
                                [c.role_name]: row.role.value
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
                    removeUser(row.id.value, () => {
                        addAlert({
                            message: `მომხმარებელი წარმატებით წაიშალა`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadUsers();
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
    removeUser: usersRemove,
    loadUsers: usersListLoading,
    loadDepartments: usersSelectDataLoading,
    addAlert: alertAdd
};

const ActionsWrapper = connect(
    mapStateActions,
    mapDispatchActions
)(_ActionsWrapper);

export const createRow = ({
    id,
    is_active,
    name,
    phone,
    email,
    job_id,
    department,
    role
}) => {
    return {
        id: {
            value: id
        },
        is_active: {
            value: is_active,
            render: cell => (cell.value ? `აქტიური` : "გამორთული")
        },
        name: {
            value: name
        },
        phone: {
            value: phone
        },
        email: {
            value: email
        },
        job_id: {
            value: job_id
        },
        department: {
            value: department
        },
        role: {
            value: role,
            render: cell => rolesKeys[cell.value]
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
