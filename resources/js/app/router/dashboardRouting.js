import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { privateRoutes } from "./routes";
import Layout from "@/components/Layout";

const useStyles = makeStyles(theme => ({
    loading: {
        height: "calc(100vh - 56px - 48px)", // 48px is the vertical padding of content
        [theme.breakpoints.up("sm")]: {
            height: "calc(100vh - 64px - 48px)"
        },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

const importedPrivateRoutes = privateRoutes.map(({ page }) => {
    return lazy(() => import(`../pages/${page}`));
});

const pageNotFoundImport = lazy(() => import("../pages/NotFound"));

const DashboardRouting = ({ ...props }) => {
    const cls = useStyles();

    return (
        <Layout>
            <Suspense
                fallback={
                    <div className={cls.loading}>
                        <CircularProgress />
                    </div>
                }
            >
                <Switch>
                    {privateRoutes.map(({ path }, index) => (
                        <Route
                            key={index}
                            exact
                            path={`/${path}`}
                            component={importedPrivateRoutes[index]}
                        />
                    ))}
                    <Route component={pageNotFoundImport} />
                </Switch>
            </Suspense>
        </Layout>
    );
};

export default DashboardRouting;
