import React, { useEffect } from "react";
import { Typography, Grid, Paper, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";

import { DialogTitle, DialogContent } from "@/components/DialogParts";
import { settingsLoading, settingsReset } from "@/redux/actions/settings";
import * as c from "@/constants";

const useStyles = makeStyles(theme => ({
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }
}));

const ContactInfo = ({ data, loading, loadData, reset, ...props }) => {
    const cls = useStyles();

    useEffect(() => {
        loadData();
        return () => {
            reset();
        };
    }, []);

    if (loading) {
        return (
            <Paper>
                <DialogContent isNotModal>
                    <div className={cls.loading}>
                        <CircularProgress />
                    </div>
                </DialogContent>
            </Paper>
        );
    }

    return (
        <Paper elevation={1}>
            <DialogTitle title="საკონტაქტო ინფორმაცია" isNotModal />
            <DialogContent isNotModal>
                <Grid container spacing={2}>
                    {(!!data[c.name] || !!data[c.description]) && (
                        <Grid item xs={12}>
                            {!!data[c.name] && (
                                <Typography variant="h6">
                                    {data[c.name]}
                                </Typography>
                            )}
                            {!!data[c.description] && (
                                <Typography variant="body2">
                                    {data[c.description]}
                                </Typography>
                            )}
                        </Grid>
                    )}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">
                            ადმინისტრაციის ელ. ფოსტა
                        </Typography>
                        <Typography variant="body2">
                            {data[c.email] || "არ არის მითითებული"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">
                            ადმინისტრაციის ტელეფონის ნომერი
                        </Typography>
                        <Typography variant="body2">
                            {data[c.phone] || "არ არის მითითებული"}
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>
        </Paper>
    );
};

const mapState = state => ({
    loading: state.settings.loading,
    data: state.settings.data
});
const mapDispatch = {
    loadData: settingsLoading,
    reset: settingsReset
};

export default connect(mapState, mapDispatch)(ContactInfo);
