import React from "react";
import { Button } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    main: {
        height: "100vh",
        width: "100%",
        backgroundColor: "#fbfbfb",
        padding: "100px 30px",
        textAlign: "center"
    },
    description: {
        fontSize: "24px",
        fontWeight: "bold"
    },
    error: {
        color: "#f44336",
        marginBottom: "30px"
    }
});

const ErrorBoundaryFallback = ({ error, resetErrorBoundary, ...props }) => {
    const cls = useStyles();

    return (
        <div className={cls.main}>
            <ErrorIcon style={{ fontSize: "50px" }} color="error" />
            <p className={cls.description}>
                დაფიქსირდა შეცდომა. ბოდიშს გიხდით შეფერხებისთვის. შეცდომა:
            </p>
            <p className={cls.error}>
                {error?.message || "არ არის შეცდომის აღწერა"}
            </p>
            <Button
                variant="contained"
                color="default"
                onClick={resetErrorBoundary}
            >
                გვერდის აღდგენა
            </Button>
        </div>
    );
};

export default ErrorBoundaryFallback;
