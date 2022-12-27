import React from "react";
import { Button as MuiButton, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    progress: {
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12
    }
}));

const Button = ({ loading, children, disabled, ...props }) => {
    const cls = useStyles();
    return (
        <MuiButton disabled={disabled || loading} {...props}>
            {children}
            {loading && <CircularProgress size={24} className={cls.progress} />}
        </MuiButton>
    );
};

export default Button;
