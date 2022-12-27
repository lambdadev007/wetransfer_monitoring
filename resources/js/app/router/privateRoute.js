import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useIdleTimer } from "react-idle-timer";

import { clientUnset } from "../redux/actions/client";
import { alertAdd } from "../redux/actions/alerts";
import * as c from "@/constants";
import { logoutIdleTimeout } from "@/config";

const useStyles = makeStyles(theme => ({
    loading: {
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

const PrivateRoute = ({
    component: Component,
    token,
    isLoading,
    logout,
    onlyFor,
    hasChangedPassword,
    addAlert,
    ...props
}) => {
    const cls = useStyles();

    useIdleTimer({
        timeout: logoutIdleTimeout,
        onIdle: () => {
            addAlert({
                message:
                    "თქვენ ავტომატურად გახვედით სისტემიდან არააქტივობის გამო",
                options: {
                    variant: "info"
                }
            });
            logout();
        },
        debounce: 1000
    });

    useEffect(() => {
        // TODO check for auth on every page render
        if (!isLoading && !localStorage.token) {
            logout();
        }
    }, [token]);

    // when user first enters url to private route, if there is a token in LS, the request
    // to load user will be sent and while it's sent, the user should be on this page before
    // it's determined whether he can view this page or to redirect him if he is not authorized.

    return (
        <Route
            {...props}
            render={props =>
                isLoading ? (
                    <div className={cls.loading}>
                        <CircularProgress />
                    </div>
                ) : token && hasChangedPassword ? (
                    <Component {...props} />
                ) : !token ? (
                    <Redirect to="/login" />
                ) : (
                    <Redirect to="/required-password-change" />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.object.isRequired,
    token: PropTypes.string,
    logout: PropTypes.func
};

const mapState = state => ({
    token: state.client.token,
    hasChangedPassword: state.client.userInfo[c.change_password], // not always will be bool
    isLoading: state.client.isInitiallyLoading
});
const mapDispatch = {
    logout: clientUnset,
    addAlert: alertAdd
};

export default connect(mapState, mapDispatch)(PrivateRoute);
