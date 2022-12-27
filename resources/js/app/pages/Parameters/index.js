import React, { useState, useEffect } from "react";
import { Paper, TextField, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";

import {
    DialogTitle,
    DialogContent,
    DialogActions
} from "@/components/DialogParts";
import { alertAdd } from "@/redux/actions/alerts";
import {
    settingsLoading,
    settingsSubmit,
    settingsSubmitRemoveValidation,
    settingsReset
} from "@/redux/actions/settings";
import * as c from "@/constants";

const useStyles = makeStyles(theme => ({}));

const initialFormState = {
    [c.name]: "",
    [c.description]: "",
    [c.email]: "",
    [c.phone]: ""
};

const Parameters = ({
    loading,
    data,
    requesting,
    validations,
    loadData,
    submit,
    removeValidation,
    reset,
    addAlert,
    ...props
}) => {
    const [payload, setPayload] = useState(initialFormState);
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
        if (!loading && data) {
            setPayload({ ...payload, ...data });
        }
    }, [loading]);
    useEffect(() => {
        loadData();
        return () => {
            reset();
        };
    }, []);

    return (
        <Paper elevation={1}>
            <DialogTitle
                isNotModal
                title="პორტალის პარამეტრები"
                subtitle="შენ შეგიძლია განაახლო პორტალის პარამეტრები"
            />
            <form
                noValidate
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    let payloadServer = { ...payload };
                    for (let key in payloadServer) {
                        if (!payloadServer[key]) {
                            delete payloadServer[key];
                        }
                    }
                    submit(payloadServer, () => {
                        addAlert({
                            message: `პარამეტრები წარმატებით შეინახა`,
                            options: {
                                variant: "success"
                            }
                        });
                    });
                }}
            >
                <DialogContent isNotModal>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="პორტალის დასახელება"
                                variant="outlined"
                                name={c.name}
                                value={payload[c.name]}
                                onChange={e => {
                                    onSingleValueChange(e.target.value, c.name);
                                }}
                                error={!!validations[c.name]}
                                helperText={validations[c.name]}
                                disabled={loading}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                multiline
                                rows={4}
                                fullWidth
                                label="პორტალის აღწერა"
                                variant="outlined"
                                name={c.description}
                                value={payload[c.description]}
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.description
                                    );
                                }}
                                error={!!validations[c.description]}
                                helperText={validations[c.description]}
                                disabled={loading}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="ადმინისტრაციის ელ. ფოსტა"
                                type="email"
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
                                disabled={loading}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="ადმინისტრაციის ტელეფონის ნომერი"
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
                                disabled={loading}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions isEdit isSaving={requesting} />
            </form>
        </Paper>
    );
};

const mapState = state => ({
    loading: state.settings.loading,
    data: state.settings.data,
    requesting: state.settings.requesting,
    validations: state.settings.validations
});
const mapDispatch = {
    loadData: settingsLoading,
    submit: settingsSubmit,
    removeValidation: settingsSubmitRemoveValidation,
    reset: settingsReset,
    addAlert: alertAdd
};

export default connect(mapState, mapDispatch)(Parameters);
