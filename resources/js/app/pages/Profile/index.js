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
import { clientSet } from "@/redux/actions/client";
import {
    profileSubmit,
    profileSubmitRemoveValidation,
    profileReset
} from "@/redux/actions/profile";
import * as c from "@/constants";

const useStyles = makeStyles(theme => ({}));

const initialFormState = {
    [c.email]: "",
    [c.phone]: "",
    [c.old_password]: "",
    [c.new_password]: "",
    [c.new_password_confirmation]: ""
};

const Profile = ({
    userInfo,
    requesting,
    validations,
    submit,
    removeValidation,
    reset,
    addAlert,
    setClient,
    ...props
}) => {
    const [payload, setPayload] = useState({
        ...initialFormState,
        [c.email]: userInfo[c.email],
        [c.phone]: userInfo[c.phone]
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
            reset();
        };
    }, []);

    return (
        <Paper elevation={1}>
            <DialogTitle
                isNotModal
                title="ჩემი პროფილი"
                subtitle="შენ შეგიძლია განაახლო შენი პროფილი"
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
                    submit(payloadServer, res => {
                        addAlert({
                            message: `პროფილი წარმატებით შეინახა`,
                            options: {
                                variant: "success"
                            }
                        });
                        setPayload(prev => ({
                            ...prev,
                            [c.old_password]: "",
                            [c.new_password]: "",
                            [c.new_password_confirmation]: ""
                        }));
                        setClient({ userInfo: res.payload });
                    });
                }}
            >
                <DialogContent isNotModal>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="სტრუქტურული ერთეულის სახელი"
                                variant="outlined"
                                disabled
                                value={userInfo[c.job_name]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="ელ. ფოსტა"
                                type="email"
                                variant="outlined"
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="ტელეფონი"
                                variant="outlined"
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
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="ძველი პაროლი"
                                type="password"
                                variant="outlined"
                                value={payload[c.old_password]}
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.old_password
                                    );
                                }}
                                error={!!validations[c.old_password]}
                                helperText={validations[c.old_password]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="ახალი პაროლი"
                                type="password"
                                variant="outlined"
                                value={payload[c.new_password]}
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.new_password
                                    );
                                }}
                                error={!!validations[c.new_password]}
                                helperText={validations[c.new_password]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="გაიმეორე ახალი პაროლი"
                                type="password"
                                variant="outlined"
                                value={payload[c.new_password_confirmation]}
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.new_password_confirmation
                                    );
                                }}
                                error={
                                    !!validations[c.new_password_confirmation]
                                }
                                helperText={
                                    validations[c.new_password_confirmation]
                                }
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
    userInfo: state.client.userInfo,
    requesting: state.profile.requesting,
    validations: state.profile.validations
});
const mapDispatch = {
    submit: profileSubmit,
    removeValidation: profileSubmitRemoveValidation,
    reset: profileReset,
    addAlert: alertAdd,
    setClient: clientSet
};

export default connect(mapState, mapDispatch)(Profile);
