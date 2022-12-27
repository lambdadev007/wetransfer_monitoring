import React, { useState, useEffect, useMemo } from "react";
import {
    TextField,
    FormControl,
    FormHelperText,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Typography,
    CircularProgress
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

import { DialogTitle, DialogContent } from "@/components/DialogParts";
import { SpinnerOverlay, Indicator, IndicatorAddForm } from "./parts";
import Button from "@/components/Button";
import * as c from "@/constants";
import { alertAdd } from "@/redux/actions/alerts";
import {
    activitiesAddEdit,
    activitiesAddEditRemoveValidation,
    activitiesAddEditReset,
    activitiesSingleLoading,
    activitiesSingleReset,
    activitiesListLoading
} from "@/redux/actions/activities";
import { isdev } from "@/config";

const useStyles = makeStyles(theme => ({
    indicatorListWrapper: {
        "& ol li::marker": {
            fontWeight: "bold",
            fontSize: "17px"
        },
        "& *": {
            wordBreak: "break-word"
        }
    }
}));

const initalState = {
    [c.activity_id]: "",
    // [c.pr_activity]: "",
    // [c.source_of_funding_id]: "",
    [c.human_resource_id]: "",
    [c.material_resource_id]: "",
    [c.user_remark]: "",
    [c.total_funding]: "",
    [c.grant_funding]: "",
    [c.other_funding]: ""
};

const DialogContentUser = ({
    onClose,
    activityId,
    currentYearId,

    requesting,
    validations,
    additionalDataRedux,
    additionalDataLoading,
    single,
    singleLoading,
    submit,
    loadActivities,
    removeValidation,
    addAlert,
    resetActivityAddEdit,
    loadSingleActivity,
    resetSingleActivity,
    indicatorsEvidencesDeleting,
    ...props
}) => {
    const [payload, setPayload] = useState(initalState);
    const [beingEditedIndicatorId, setBeingEditedIndicatorId] = useState(null);
    const [
        beingAddedEvidenceIndicatorId,
        setBeingAddedEvidenceIndicatorId
    ] = useState(null);
    const [beingEditedEvidenceId, setBeingEditedEvidenceId] = useState(null);

    const cls = useStyles();

    const additionalData = additionalDataRedux || {};

    const onSingleValueChange = (value, field) => {
        setPayload({
            ...payload,
            [field]: value
        });
        if (validations[field]) {
            removeValidation(field);
        }
    };

    const setBeingValue = (name, id) => {
        switch (name) {
            case "editIndicator": {
                setBeingEditedIndicatorId(id);
                setBeingAddedEvidenceIndicatorId(null);
                setBeingEditedEvidenceId(null);
                break;
            }
            case "addEvidence": {
                setBeingEditedIndicatorId(null);
                setBeingAddedEvidenceIndicatorId(id);
                setBeingEditedEvidenceId(null);
                break;
            }
            case "editEvidence": {
                setBeingEditedIndicatorId(null);
                setBeingAddedEvidenceIndicatorId(null);
                setBeingEditedEvidenceId(id);
                break;
            }
            default: {
                isdev &&
                    console.error(
                        "invalid name provided to setBeingValue, name was: ",
                        name
                    );
                return;
            }
        }
    };

    const handleSubmit = () => {
        const isForUser = true;
        submit(
            payload,
            () => {
                addAlert({
                    message: `აქტივობა წარმატებით შეინახა`,
                    options: {
                        variant: "success"
                    }
                });
                loadSingleActivity(activityId);
            },
            isForUser
        );
    };

    useEffect(() => {
        loadSingleActivity(activityId);

        return () => {
            resetActivityAddEdit();
            resetSingleActivity();
        };
    }, []);

    useEffect(() => {
        if (single && !singleLoading) {
            setPayload({
                [c.activity_id]: activityId,
                // [c.pr_activity]: single[c.pr_activity]
                //     ? single[c.pr_activity]
                //     : "",
                // [c.source_of_funding_id]: single[c.source_of_fundings]
                //     ? single[c.source_of_fundings][c.id]
                //     : "",
                [c.human_resource_id]: single[c.human_resource]
                    ? single[c.human_resource][c.id]
                    : "",
                [c.material_resource_id]: single[c.material_resource]
                    ? single[c.material_resource][c.id]
                    : "",
                [c.user_remark]: single[c.user_remark],
                [c.total_funding]: single[c.total_funding],
                [c.grant_funding]: single[c.grant_funding],
                [c.other_funding]: single[c.other_funding]
            });
        }
    }, [singleLoading]);

    if (singleLoading && !single) {
        return (
            <DialogContent>
                <div style={{ textAlign: "center" }}>
                    <CircularProgress />
                </div>
            </DialogContent>
        );
    }

    if (!single) {
        return (
            <DialogContent>
                <div style={{ textAlign: "center" }}>
                    <Typography variant="body1">
                        ამ ჩანაწერის ინფორმაცია ვერ მოიძებნა
                    </Typography>
                </div>
            </DialogContent>
        );
    }

    return (
        <>
            <SpinnerOverlay
                visible={singleLoading || indicatorsEvidencesDeleting}
            />
            <DialogTitle
                onClose={onClose}
                title="სტრუქტურული ერთეულის აქტივობის დამატება"
                subtitle="თქვენ შეგიძლიათ დაამატოთ სტრუქტურული ერთეულის ახალი აქტივობა"
            />
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            error={!!validations[c.human_resource_id]}
                            fullWidth
                            variant="outlined"
                        >
                            <InputLabel>ადამიანური რესურსი</InputLabel>
                            <Select
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.human_resource_id
                                    );
                                }}
                                value={payload[c.human_resource_id]}
                                label="ადამიანური რესურსი"
                            >
                                <MenuItem value="">
                                    აირჩიეთ ადამიანური რესურსი
                                </MenuItem>
                                {additionalData[c.human_resources] &&
                                    additionalData[c.human_resources].map(
                                        (el, index) => (
                                            <MenuItem
                                                key={index}
                                                value={el[c.id]}
                                            >
                                                {el[c.name]}
                                            </MenuItem>
                                        )
                                    )}
                            </Select>
                            <FormHelperText>
                                {validations[c.human_resource_id]}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    {/* <Grid item xs={12} sm={4}>
                        <FormControl
                            error={!!validations[c.source_of_funding_id]}
                            fullWidth
                            variant="outlined"
                        >
                            <InputLabel>დაფინანსების წყარო</InputLabel>
                            <Select
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.source_of_funding_id
                                    );
                                }}
                                value={payload[c.source_of_funding_id]}
                                label="დაფინანსების წყარო"
                            >
                                <MenuItem value="">
                                    აირჩიეთ დაფინანსების წყარო
                                </MenuItem>
                                {additionalData[c.source_of_fundings] &&
                                    additionalData[c.source_of_fundings].map(
                                        (el, index) => (
                                            <MenuItem
                                                key={index}
                                                value={el[c.id]}
                                            >
                                                {el[c.name]}
                                            </MenuItem>
                                        )
                                    )}
                            </Select>
                            <FormHelperText>
                                {validations[c.source_of_funding_id]}
                            </FormHelperText>
                        </FormControl>
                    </Grid> */}
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            error={!!validations[c.material_resource_id]}
                            fullWidth
                            variant="outlined"
                        >
                            <InputLabel>მატერიალური რესურსი</InputLabel>
                            <Select
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.material_resource_id
                                    );
                                }}
                                value={payload[c.material_resource_id]}
                                label="მატერიალური რესურსი"
                            >
                                <MenuItem value="">
                                    აირჩიეთ მატერიალური რესურსი
                                </MenuItem>
                                {additionalData[c.material_resources] &&
                                    additionalData[c.material_resources].map(
                                        (el, index) => (
                                            <MenuItem
                                                key={index}
                                                value={el[c.id]}
                                            >
                                                {el[c.name]}
                                            </MenuItem>
                                        )
                                    )}
                            </Select>
                            <FormHelperText>
                                {validations[c.material_resource_id]}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            multiline
                            rows={1}
                            fullWidth
                            label="მთლიანი დაფინანსება"
                            margin="normal"
                            variant="outlined"
                            onChange={e =>
                                onSingleValueChange(
                                    e.target.value,
                                    c.total_funding
                                )
                            }
                            value={payload[c.total_funding] || ''}
                            error={!!validations[c.total_funding]}
                            helperText={validations[c.total_funding]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            multiline
                            rows={1}
                            fullWidth
                            label="გრანტი"
                            margin="normal"
                            variant="outlined"
                            onChange={e =>
                                onSingleValueChange(
                                    e.target.value,
                                    c.grant_funding
                                )
                            }
                            value={payload[c.grant_funding] || ''}
                            error={!!validations[c.grant_funding]}
                            helperText={validations[c.grant_funding]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            multiline
                            rows={1}
                            fullWidth
                            label="სხვა"
                            margin="normal"
                            variant="outlined"
                            onChange={e =>
                                onSingleValueChange(
                                    e.target.value,
                                    c.other_funding
                                )
                            }
                            value={payload[c.other_funding] || ''}
                            error={!!validations[c.other_funding]}
                            helperText={validations[c.other_funding]}
                        />
                    </Grid>
                    {/* <Grid item xs={12}>
                        <TextField
                            multiline
                            rows={4}
                            fullWidth
                            label="პიარ აქტივობა"
                            margin="normal"
                            variant="outlined"
                            onChange={e =>
                                onSingleValueChange(
                                    e.target.value,
                                    c.pr_activity
                                )
                            }
                            value={payload[c.pr_activity] || ''}
                            error={!!validations[c.pr_activity]}
                            helperText={validations[c.pr_activity]}
                        />
                    </Grid> */}
                    <Grid item xs={12}>
                        <TextField
                            multiline
                            rows={4}
                            fullWidth
                            label="შენიშვნა"
                            margin="normal"
                            variant="outlined"
                            onChange={e =>
                                onSingleValueChange(
                                    e.target.value,
                                    c.user_remark
                                )
                            }
                            value={payload[c.user_remark] || ''}
                            error={!!validations[c.user_remark]}
                            helperText={validations[c.user_remark]}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            onClick={handleSubmit}
                            color="primary"
                            variant="contained"
                            loading={requesting}
                            size="large"
                        >
                            შენახვა
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            ინდიკატორები / მტკიცებულებები
                        </Typography>
                        <IndicatorAddForm />
                        {!!single[c.indicators] &&
                            single[c.indicators].length > 0 && (
                                <div className={cls.indicatorListWrapper}>
                                    <ol>
                                        {single[c.indicators].map(el => (
                                            <Indicator
                                                key={el[c.id]}
                                                data={el}
                                                beingEditedIndicatorId={
                                                    beingEditedIndicatorId
                                                }
                                                beingAddedEvidenceIndicatorId={
                                                    beingAddedEvidenceIndicatorId
                                                }
                                                beingEditedEvidenceId={
                                                    beingEditedEvidenceId
                                                }
                                                setBeingEditedIndicatorId={id => {
                                                    setBeingValue(
                                                        "editIndicator",
                                                        id
                                                    );
                                                }}
                                                setBeingAddedEvidenceIndicatorId={id => {
                                                    setBeingValue(
                                                        "addEvidence",
                                                        id
                                                    );
                                                }}
                                                setBeingEditedEvidenceId={id => {
                                                    setBeingValue(
                                                        "editEvidence",
                                                        id
                                                    );
                                                }}
                                            />
                                        ))}
                                    </ol>
                                </div>
                            )}
                    </Grid>
                </Grid>
            </DialogContent>
        </>
    );
};

const mapState = state => ({
    requesting: state.activities.requesting,
    validations: state.activities.validations,
    additionalDataRedux: state.activities.additionalData,
    additionalDataLoading: state.activities.additionalDataLoading,
    single: state.activities.single,
    singleLoading: state.activities.singleLoading,
    indicatorsEvidencesDeleting: state.activities.indicatorsEvidencesDeleting
});
const mapDispatch = {
    submit: activitiesAddEdit,
    loadActivities: activitiesListLoading,
    removeValidation: activitiesAddEditRemoveValidation,
    addAlert: alertAdd,
    resetActivityAddEdit: activitiesAddEditReset,
    loadSingleActivity: activitiesSingleLoading,
    resetSingleActivity: activitiesSingleReset
};

export default connect(mapState, mapDispatch)(DialogContentUser);
