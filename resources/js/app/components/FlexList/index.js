import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    list: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: props =>
            props.justify === "right" ? "flex-end" : "flex-start",
        margin: props =>
            props.justify === "right"
                ? theme.spacing(0, 0, -props.vertical, -props.horizontal)
                : theme.spacing(0, -props.horizontal, -props.vertical, 0),
        "& > *": {
            margin: props =>
                props.justify === "right"
                    ? theme.spacing(0, 0, props.vertical, props.horizontal)
                    : theme.spacing(0, props.horizontal, props.vertical, 0)
        }
    }
}));

const FlexList = ({ h, v, spacing, className, justify, ...props }) => {
    const cls = useStyles({
        horizontal: spacing || h,
        vertical: spacing || v,
        justify
    });

    return (
        <div className={clsx(cls.list, className)} {...props}>
            {props.children}
        </div>
    );
};

export default FlexList;
