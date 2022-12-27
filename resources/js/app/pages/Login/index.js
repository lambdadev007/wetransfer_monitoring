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
    loginRequesting,
    loginValidationRemove,
    loginReset
} from "@/redux/actions/login";
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
    [c.email]: "",
    [c.password]: "",
    [c.remember_me]: false
};

const Login = ({
    requesting,
    validations,
    submitLogin,
    removeValidation,
    resetLogin,
    isInitiallyLoading,
    token,
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
        if (token) {
            props.history.replace("/");
        }
    }, [token]);

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
                <Typography className={cls.header} variant="h5" align="center">
                    ავტორიზაცია
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
                        autoFocus
                        fullWidth
                        id="email-input"
                        label="ელ. ფოსტა"
                        type="email"
                        name={c.email}
                        variant="outlined"
                        onChange={e => {
                            onSingleValueChange(e.target.value, c.email);
                        }}
                        error={!!validations[c.email]}
                        helperText={validations[c.email]}
                        value={payload[c.email]}
                    />
                    <TextField
                        fullWidth
                        id="password-input"
                        label="პაროლი"
                        margin="normal"
                        type="password"
                        name={c.password}
                        variant="outlined"
                        onChange={e => {
                            onSingleValueChange(e.target.value, c.password);
                        }}
                        error={!!validations[c.password]}
                        helperText={validations[c.password]}
                        value={payload[c.password]}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name={c.remember_me}
                                color="primary"
                                checked={payload[c.remember_me]}
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.checked,
                                        c.remember_me
                                    );
                                }}
                            />
                        }
                        label="დამახსოვრება"
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
                </form>
            </Container>
        </div>
    );
};

const mapState = state => ({
    validations: state.login.validations,
    requesting: state.login.requesting,
    token: state.client.token,
    isInitiallyLoading: state.client.isInitiallyLoading
});
const mapDispatch = {
    submitLogin: loginRequesting,
    removeValidation: loginValidationRemove,
    resetLogin: loginReset
};

export default connect(mapState, mapDispatch)(Login);
