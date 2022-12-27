import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

import { publicRoutes } from "./routes";
import ScrollToTop from "./scrollToTop"; // scroll to top on page change
import PrivateRoute from "./privateRoute";
import { clientLoad, clientUnset } from "@/redux/actions/client";

const useStyles = makeStyles(theme => ({
    main: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
    }
}));

const importedPublicRoutes = publicRoutes.map(({ page }) => {
    return lazy(() => import(`../pages/${page}`));
});

const dashboardImport = lazy(() => import("./dashboardRouting"));

const Router = ({ loadUser, logout, ...props }) => {
    const cls = useStyles();

    useEffect(() => {
        const token = localStorage.token;
        if (token) {
            loadUser({ token });
        } else {
            logout(); // used to set "isInitiallyLoading" to "false" in client reducer for private routes
        }
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <CssBaseline />
            <div className={cls.main}>
                {/* don't remove this div, it's for Main display flex */}
                <div>
                    <Suspense fallback="">
                        <Switch>
                            {publicRoutes.map(({ path }, index) => (
                                <Route
                                    key={index}
                                    exact
                                    path={`/${path}`}
                                    component={importedPublicRoutes[index]}
                                />
                            ))}
                            <PrivateRoute component={dashboardImport} />
                        </Switch>
                    </Suspense>
                </div>
            </div>
        </BrowserRouter>
    );
};

const mapState = state => ({});
const mapDispatch = {
    loadUser: clientLoad,
    logout: clientUnset
};

export default connect(mapState, mapDispatch)(Router);
