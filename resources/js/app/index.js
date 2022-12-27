import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import { makeStyles } from "@material-ui/core/styles";

import ErrorBoundaryFallback from "@/components/ErrorBoundaryFallback";
import Notifier from "@/components/Notifier";
import MainApp from "@/router";
import theme from "@/config/theme";
import store from "@/redux";
import moment from "moment";
moment.locale("ka");

const useStyles = makeStyles(theme => ({
    "@global": {
        "*": {
            boxSizing: "border-box",
            fontFamily:
                "Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, sans-serif"
        },
        "html, body": {
            padding: 0,
            margin: 0,
            fontFamily:
                "Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, sans-serif"
        },
        "ol ul": {
            listStyleType: "disc"
        },
        body: {
            backgroundColor: "#F4F6F8"
        },
        a: {
            color: "inherit",
            textDecoration: "none"
        },
        "@font-face": {
            fontFamily: "Helvetica Neue",
            src: `url("/fonts/Helvetica-Neue.woff2")`
        },
        ".MuiButton-contained.Mui-disabled": {
            color: "rgba(0, 0, 0, 0.26) !important",
            backgroundColor: "rgba(0, 0, 0, 0.12) !important"
        }
    }
}));

const App = () => {
    useStyles();
    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
            <ReduxProvider store={store}>
                <SnackbarProvider
                    anchorOrigin={{
                        horizontal: "center",
                        vertical: "bottom"
                    }}
                    maxSnack={4}
                >
                    <MainApp />
                    <Notifier />
                </SnackbarProvider>
            </ReduxProvider>
        </ErrorBoundary>
    );
};

const CompleteApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
};

export default CompleteApp;
