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
    evidencesListLoading,
    evidencesAddEdit,
    evidencesAddEditRemoveValidation,
    evidencesAddEditReset,
    evidencesRemove
} from "@/redux/actions/evidences";
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
        id: "indicator",
        value: "ინდიკატორი"
    },
    {
        id: "name",
        value: "მტკიცებულება"
    },
    {
        id: "actions",
        value: "მოქმედებები",
        alignRight: true,
        notSortable: true
    }
];

const initialFormState = {
    [c.indicator_id]: "",
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
    loadEvidences,
    addAlert,
    resetEvidenceAddEdit,
    indicators,
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
            resetEvidenceAddEdit();
        };
    }, []);

    return (
        <>
            <DialogTitle
                onClose={onClose}
                title={`მტკიცებულების ${isEdit ? "რედაქტირება" : "დამატება"}`}
                subtitle={`თქვენ შეგიძლიათ ${
                    isEdit ? "შეცვალოთ" : "დაამატოთ ახალი"
                } მტკიცებულება`}
            />
            <form
                noValidate
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    submit(payload, () => {
                        addAlert({
                            message: `მტკიცებულება წარმატებით ${
                                isEdit ? "შეინახა" : "შეიქმნა"
                            }`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadEvidences();
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
                                error={!!validations[c.indicator_id]}
                            >
                                <InputLabel>ინდიაკატორი</InputLabel>
                                <Select
                                    onChange={e =>
                                        onSingleValueChange(
                                            e.target.value,
                                            c.indicator_id
                                        )
                                    }
                                    value={payload[c.indicator_id]}
                                    label="ინდიაკატორი"
                                >
                                    <MenuItem value="">
                                        აირჩეთ ინდიაკატორი
                                    </MenuItem>
                                    {indicators.map((el, index) => (
                                        <MenuItem key={index} value={el[c.id]}>
                                            {el[c.name]}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>
                                    {validations[c.indicator_id]}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                multiline
                                rows={4}
                                fullWidth
                                label="მტკიცებულება"
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
    requesting: state.evidences.requesting,
    validations: state.evidences.validations,
    indicators: state.evidences.indicators
});
const mapDispatchDialog = {
    submit: evidencesAddEdit,
    loadEvidences: evidencesListLoading,
    removeValidation: evidencesAddEditRemoveValidation,
    addAlert: alertAdd,
    resetEvidenceAddEdit: evidencesAddEditReset
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
    removeEvidence,
    loadEvidences,
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
                                [c.indicator_id]: row.indicator_id.value,
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
                    removeEvidence(row.id.value, () => {
                        addAlert({
                            message: `მტკიცებულება წარმატებით წაიშალა`,
                            options: {
                                variant: "success"
                            }
                        });
                        loadEvidences();
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
    removeEvidence: evidencesRemove,
    loadEvidences: evidencesListLoading,
    addAlert: alertAdd
};

const ActionsWrapper = connect(
    mapStateActions,
    mapDispatchActions
)(_ActionsWrapper);

export const createRow = ({ id, indicator_id, indicator, name }) => {
    return {
        id: {
            value: id
        },
        indicator_id: {
            value: indicator_id
        },
        indicator: {
            value: indicator
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
