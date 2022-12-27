import React, { useState, useEffect } from "react";
import {
    Typography,
    Container,
    Paper,
    TextField,
    FormControlLabel,
    Checkbox,
    CircularProgress
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import * as c from "@/constants";
import {
    loginPasswordChangeRequesting,
    loginValidationRemove,
    loginReset
} from "@/redux/actions/login";
import { clientUnset } from "@/redux/actions/client";
import Button from "@/components/Button";

const useStyles = makeStyles(theme => ({
    loading: {
        height: " 100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    main: {
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        "&&": {
            padding: theme.spacing(3)
        }
    },
    logoWrapper: {
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing(3)
    },
    logo: {
        width: "300px",
        objectFit: "contain"
    },
    header: {
        "&&": {
            marginBottom: theme.spacing(4)
        }
    },
    button: {
        "&&": {
            marginTop: theme.spacing(1)
        }
    }
}));

const initialForm = {
    [c.new_password]: "",
    [c.new_password_confirmation]: ""
};

const RequiredPasswordChange = ({
    requesting,
    validations,
    submitLogin,
    removeValidation,
    resetLogin,
    isInitiallyLoading,
    token,
    logout,
    hasChangedPassword,
    userName,
    ...props
}) => {
    const cls = useStyles();
    const [payload, setPayload] = useState(initialForm);

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
            resetLogin();
        };
    }, []);

    useEffect(() => {
        if (!token) {
            props.history.replace("/login");
        }
        if (hasChangedPassword) {
            props.history.replace("/");
        }
    }, [token, hasChangedPassword]);

    if (isInitiallyLoading) {
        return (
            <div className={cls.loading}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className={cls.main}>
            <Container maxWidth="sm">
                <div className={cls.logoWrapper}>
                    <img src="/img/logo.png" className={cls.logo} />
                </div>
                <Typography variant="body1" align="center" gutterBottom>
                    გამარჯობა, {userName}
                </Typography>
                <Typography className={cls.header} variant="h5" align="center">
                    სისტემაში შესვლისთვის გთხოვთ შექმნათ ახალი პაროლი
                </Typography>
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={e => {
                        e.preventDefault();
                        submitLogin(payload);
                    }}
                >
                    <TextField
                        fullWidth
                        id="new-password-input"
                        label="ახალი პაროლი"
                        type="password"
                        name={c.new_password}
                        variant="outlined"
                        onChange={e => {
                            onSingleValueChange(e.target.value, c.new_password);
                        }}
                        error={!!validations[c.new_password]}
                        helperText={validations[c.new_password]}
                        value={payload[c.new_password]}
                    />
                    <TextField
                        fullWidth
                        id="password-confirmation-input"
                        label="ახალი პაროლის დადასტურება"
                        margin="normal"
                        type="password"
                        name={c.new_password_confirmation}
                        variant="outlined"
                        onChange={e => {
                            onSingleValueChange(
                                e.target.value,
                                c.new_password_confirmation
                            );
                        }}
                        error={!!validations[c.new_password_confirmation]}
                        helperText={validations[c.new_password_confirmation]}
                        value={payload[c.new_password_confirmation]}
                    />
                    <Button
                        className={cls.button}
                        fullWidth
                        size="large"
                        variant="contained"
                        color="primary"
                        type="submit"
                        loading={requesting}
                    >
                        შესვლა
                    </Button>
                    <Button
                        className={cls.button}
                        fullWidth
                        size="large"
                        color="primary"
                        type="button"
                        onClick={logout}
                        disabled={requesting}
                    >
                        უკან დაბრუნება
                    </Button>
                </form>
            </Container>
        </div>
    );
};

const mapState = state => ({
    validations: state.login.validations,
    requesting: state.login.requesting,
    token: state.client.token,
    userName: state.client.userInfo[c.job_name],
    hasChangedPassword: state.client.userInfo[c.change_password], // not always will be bool
    isInitiallyLoading: state.client.isInitiallyLoading
});
const mapDispatch = {
    submitLogin: loginPasswordChangeRequesting,
    removeValidation: loginValidationRemove,
    resetLogin: loginReset,
    logout: clientUnset
};

export default connect(mapState, mapDispatch)(RequiredPasswordChange);
