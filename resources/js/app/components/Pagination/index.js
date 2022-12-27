import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination as MuiPagination } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    main: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        padding: theme.spacing(2)
    }
}));

const Pagination = ({ page, count, onChange, ...props }) => {
    const cls = useStyles();

    return (
        <div className={cls.main}>
            <MuiPagination
                page={page}
                count={count}
                onChange={onChange}
                size="large"
                siblingCount={2}
                {...props}
            />
        </div>
    );
};

export default Pagination;
