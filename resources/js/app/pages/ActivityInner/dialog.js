import React, { useState, useMemo } from "react";
import {
    Grid,
    FormControl,
    InputLabel,
    TextField,
    Select,
    FormHelperText,
    MenuItem
} from "@material-ui/core";
import { connect } from "react-redux";

import {
    DialogTitle,
    DialogContent,
    DialogActions
} from "@/components/DialogParts";
import * as c from "@/constants";
import { alertAdd } from "@/redux/actions/alerts";
import {
    activitiesSingleLoading,
    activitiesStatusChange,
    activitiesStatusChangeRemoveValidation,
    activitiesStatusChangeReset
} from "@/redux/actions/activities";

const days = [
    {
        value: "10",
        title: "10 დღით"
    },
    {
        value: "15",
        title: "15 დღით"
    },
    {
        value: "30",
        title: "30 დღით"
    }
];

const percents = [
    { value: 25, title: "25%" },
    { value: 50, title: "50%" },
    { value: 75, title: "75%" },
    { value: 100, title: "100%" }
];

const Dialog = ({
    onClose,

    data,
    additionalData,
    validations,
    statusRequesting,
    submit,
    loadSingle,
    addAlert,
    removeValidation,
    ...props
}) => {
    const [payload, setPayload] = useState({
        [c.activity_id]: data[c.id],
        [c.main_status_id]: "",
        [c.moved]: "",
        [c.day]: "",
        [c.percent]: "",
        [c.remark]: ""
    });

    const completedOptionId = useMemo(() => {
        return additionalData[c.statuses].find(
            el => el[c.slug] === c.completed
        )[c.id];
    }, [additionalData]);

    const onSingleValueChange = (value, field) => {
        setPayload({
            ...payload,
            [field]: value
        });
        if (validations[field]) {
            removeValidation(field);
        }
    };

    const handleSubmit = () => {
        const modifiedPayload = {
            ...payload,
            [c.moved]:
                payload[c.main_status_id] === completedOptionId
                    ? 2
                    : payload[c.moved]
        };
        submit({
            payload: modifiedPayload,
            onSuccess: () => {
                addAlert({
                    message: `ხელმძღვანელობა არ დაეთანხმა შეფასებას`,
                    options: {
                        variant: "success"
                    }
                });
                onClose();
                loadSingle(data[c.id]);
            },
            decision: "no",
            isSuperAdmin: true
        });
    };

    return (
        <>
            <DialogTitle
                onClose={onClose}
                title="აქტივობის საბოლოო სტატუსი"
                subtitle="თქვენ შეგიძლიათ შეცვალოთ აქტივობის საბოლოო სტატუსი"
                
            />
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            error={!!validations[c.main_status_id]}
                            fullWidth
                            variant="outlined"
                        >
                            <InputLabel>სტატუსი</InputLabel>
                            <Select
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.main_status_id
                                    );
                                    if (e.target.value === completedOptionId) {
                                        setPayload(prev => ({
                                            ...prev,
                                            [c.moved]: "",
                                            [c.day]: ""
                                        }));
                                        if (validations[c.moved]) {
                                            removeValidation(c.moved);
                                        }
                                        if (validations[c.day]) {
                                            removeValidation(c.day);
                                        }
                                    }
                                }}
                                value={payload[c.main_status_id]}
                                label="სტატუსი"
                            >
                                <MenuItem value="">აირჩეთ სტატუსი</MenuItem>
                                {additionalData[c.statuses].map((el, index) => (
                                    <MenuItem key={index} value={el[c.id]}>
                                        {el[c.name]}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>
                                {validations[c.main_status_id]}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            error={!!validations[c.moved]}
                            disabled={
                                !payload[c.main_status_id] ||
                                payload[c.main_status_id] === completedOptionId
                            }
                            fullWidth
                            variant="outlined"
                        >
                            <InputLabel>აქტივობის გადატანა</InputLabel>
                            <Select
                                onChange={e => {
                                    onSingleValueChange(
                                        e.target.value,
                                        c.moved
                                    );
                                    if (e.target.value === 2) {
                                        setPayload(prev => ({
                                            ...prev,
                                            [c.day]: ""
                                        }));
                                        if (validations[c.day]) {
                                            removeValidation(c.day);
                                        }
                                    }
                                }}
                                value={payload[c.moved]}
                                label="აქტივობის გადატანა"
                            >
                                <MenuItem value="">
                                    აირჩიეთ გსურთ თუ არა აქტივობის გადატანა
                                </MenuItem>
                                <MenuItem value={1}>
                                    გადავიდეს როგორც ახალი ამოცანა
                                </MenuItem>
                                <MenuItem value={2}>დაიხუროს ამოცანა</MenuItem>
                            </Select>
                            <FormHelperText>
                                {validations[c.moved]}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            error={!!validations[c.percent]}
                            fullWidth
                            variant="outlined"
                        >
                            <InputLabel>
                                შესრულების პროცენტული მაჩვენებელი
                            </InputLabel>
                            <Select
                                label="შესრულების პროცენტული მაჩვენებელი"
                                onChange={e => {
                                    onSingleValueChange(e.target.value, c.percent);
                                }}
                                value={payload[c.percent]}
                            >
                                <MenuItem value="">
                                    აირჩეთ შესრულების პროცენტული მაჩვენებელი
                                </MenuItem>
                                {percents.map((el, index) => (
                                    <MenuItem key={index} value={el.value}>
                                        {el.title}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>
                                {validations[c.percent]}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            error={!!validations[c.day]}
                            disabled={
                                !payload[c.moved] || payload[c.moved] === 2
                            }
                            fullWidth
                            variant="outlined"
                        >
                            <InputLabel>გადავადების დრო</InputLabel>
                            <Select
                                onChange={e =>
                                    onSingleValueChange(e.target.value, c.day)
                                }
                                value={payload[c.day]}
                                label="გადავადების დრო"
                            >
                                <MenuItem value="">
                                    აირჩეთ გადავადების დრო
                                </MenuItem>
                                {days.map((el, index) => (
                                    <MenuItem key={index} value={el.value}>
                                        {el.title}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>
                                {validations[c.day]}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            multiline
                            rows={4}
                            fullWidth
                            label="დასაბუთება"
                            variant="outlined"
                            onChange={e =>
                                onSingleValueChange(e.target.value, c.remark)
                            }
                            value={payload[c.remark]}
                            error={!!validations[c.remark]}
                            helperText={validations[c.remark]}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions
                isEdit
                onSave={handleSubmit}
                isSaving={!!statusRequesting}
            />
        </>
    );
};

const mapState = state => ({
    data: state.activities.single,
    additionalData: state.activities.additionalData,
    validations: state.activities.validations,
    statusRequesting: state.activities.statusRequesting
});
const mapDispatch = {
    submit: activitiesStatusChange,
    loadSingle: activitiesSingleLoading,
    removeValidation: activitiesStatusChangeRemoveValidation,
    addAlert: alertAdd
};

export default connect(mapState, mapDispatch)(Dialog);
