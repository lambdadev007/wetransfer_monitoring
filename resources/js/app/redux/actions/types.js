// LOADING - get; REQUESTING - post/update/delete

const createLoadingAction = (name, { withReset = true } = {}) => ({
    LOADING: `${name}_LOADING`,
    SUCCESS: `${name}_SUCCESS`,
    ERROR: `${name}_ERROR`,
    ...(withReset && {
        RESET: `${name}_RESET`
    })
});

const createRequestingAction = (
    name,
    {
        withReset = true,
        withValidationRemove = false,
        withRemoveAllValidations = false
    } = {}
) => ({
    REQUESTING: `${name}_REQUESTING`,
    SUCCESS: `${name}_SUCCESS`,
    ERROR: `${name}_ERROR`,
    ...(withReset && {
        RESET: `${name}_RESET`
    }),
    ...(withValidationRemove && {
        VALIDATION_REMOVE: `${name}_VALIDATION_REMOVE`
    }),
    ...(withRemoveAllValidations && {
        VALIDATION_REMOVE_ALL: `${name}_VALIDATION_REMOVE_ALL`
    })
});

export const ALERT_ADD = "ALERT_ADD";
export const ALERT_CLOSE = "ALERT_CLOSE";
export const ALERT_REMOVE = "ALERT_REMOVE";

export const LOGIN = createRequestingAction("LOGIN", {
    withValidationRemove: true
});
export const LOGIN_PASSWORD_CHANGE = createRequestingAction(
    "LOGIN_PASSWORD_CHANGE",
    {
        withValidationRemove: true
    }
);

export const PLAN_NAME = createLoadingAction("PLAN_NAME");

export const GOALS = createLoadingAction("GOALS");
export const GOALS_LIST = createLoadingAction("GOALS_LIST");
export const GOALS_ADD_EDIT = createRequestingAction("GOALS_ADD_EDIT", {
    withValidationRemove: true
}); // includes both actions
export const GOALS_DELETE = createRequestingAction("GOALS_DELETE");

export const TASKS = createLoadingAction("TASKS");
export const TASKS_LIST = createLoadingAction("TASKS_LIST");
export const TASKS_ADD_EDIT = createRequestingAction("TASKS_ADD_EDIT", {
    withValidationRemove: true
}); // includes both actions
export const TASKS_DELETE = createRequestingAction("TASKS_DELETE");

export const INDICATORS = createLoadingAction("INDICATORS");
export const INDICATORS_LIST = createLoadingAction("INDICATORS_LIST");
export const INDICATORS_ADD_EDIT = createRequestingAction(
    "INDICATORS_ADD_EDIT",
    {
        withValidationRemove: true
    }
); // includes both actions
export const INDICATORS_DELETE = createRequestingAction("INDICATORS_DELETE");

export const EVIDENCES = createLoadingAction("EVIDENCES");
export const EVIDENCES_LIST = createLoadingAction("EVIDENCES_LIST");
export const EVIDENCES_ADD_EDIT = createRequestingAction("EVIDENCES_ADD_EDIT", {
    withValidationRemove: true
}); // includes both actions
export const EVIDENCES_DELETE = createRequestingAction("EVIDENCES_DELETE");

export const DEPARTMENTS = createLoadingAction("DEPARTMENTS");
export const DEPARTMENTS_LIST = createLoadingAction("DEPARTMENTS_LIST");
export const DEPARTMENTS_ADD_EDIT = createRequestingAction(
    "DEPARTMENTS_ADD_EDIT",
    {
        withValidationRemove: true
    }
); // includes both actions
export const DEPARTMENTS_DELETE = createRequestingAction("DEPARTMENTS_DELETE");

export const USERS = createLoadingAction("USERS");
export const USERS_LIST = createLoadingAction("USERS_LIST");
export const USERS_ADD_EDIT = createRequestingAction("USERS_ADD_EDIT", {
    withValidationRemove: true
}); // includes both actions
export const USERS_DELETE = createRequestingAction("USERS_DELETE");
export const USERS_SELECT_DATA = createLoadingAction("USERS_SELECT_DATA");

export const ACTIVITIES = createLoadingAction("ACTIVITIES");
export const ACTIVITIES_YEARS_SELECT_DATA = createLoadingAction(
    "ACTIVITIES_YEARS_SELECT_DATA"
);
export const ACTIVITIES_DOCUMENTS = createLoadingAction("ACTIVITIES_DOCUMENTS");
export const ACTIVITIES_DOCUMENT_UPLOAD = createRequestingAction(
    "ACTIVITIES_DOCUMENT_UPLOAD",
    { withValidationRemove: true }
);
export const ACTIVITIES_DOCUMENT_DELETE = createRequestingAction(
    "ACTIVITIES_DOCUMENT_DELETE"
);
export const ACTIVITIES_LIST = createLoadingAction("ACTIVITIES_LIST");
export const ACTIVITIES_ADDITIONAL_DATA = createLoadingAction(
    "ACTIVITIES_ADDITIONAL_DATA"
);
export const ACTIVITIES_ADD_EDIT = createRequestingAction(
    "ACTIVITIES_ADD_EDIT",
    {
        withValidationRemove: true
    }
); // includes both actions
export const ACTIVITIES_DELETE = createRequestingAction("ACTIVITIES_DELETE");
export const ACTIVITIES_SINGLE = createLoadingAction("ACTIVITIES_SINGLE");

export const ACTIVITIES_STATUS_CHANGE = createRequestingAction(
    "ACTIVITIES_STATUS_CHANGE",
    { withValidationRemove: true }
);

export const ACTIVITIES_INDICATORS_ADD = createRequestingAction(
    "ACTIVITIES_INDICATORS_ADD",
    {
        withValidationRemove: true
    }
);
export const ACTIVITIES_INDICATORS_EDIT = createRequestingAction(
    "ACTIVITIES_INDICATORS_EDIT",
    {
        withValidationRemove: true
    }
);

export const ACTIVITIES_EVIDENCES_ADD_EDIT = createRequestingAction(
    "ACTIVITIES_EVIDENCES_ADD_EDIT",
    {
        withValidationRemove: true
    }
);
export const ACTIVITIES_INDICATORS_EVIDENCES = createRequestingAction(
    "ACTIVITIES_INDICATORS_EVIDENCES"
);

export const ACTIVITIES_INDICATORS_EVIDENCES_DELETE = createRequestingAction(
    "ACTIVITIES_INDICATORS_EVIDENCES_DELETE"
);
export const ACTIVITIES_COMMENT = createRequestingAction("ACTIVITIES_COMMENT", {
    withValidationRemove: true
});

export const ACTIVITIES_COMMENT_FILE_DELETE = createRequestingAction(
    "ACTIVITIES_COMMENT_FILE_DELETE"
);

export const REPORTS = createLoadingAction("REPORTS");
export const REPORTS_FILTER_DATA = createLoadingAction("REPORTS_FILTER_DATA");
export const REPORTS_LIST = createLoadingAction("REPORTS_LIST");
export const REPORTS_GENERATE = createRequestingAction("REPORTS_GENERATE");
export const REPORTS_DELETE = createRequestingAction("REPORTS_DELETE");
export const REPORTS_DOWNLOAD = createRequestingAction("REPORTS_DOWNLOAD");

export const SETTINGS = createLoadingAction("SETTINGS");
export const SETTINGS_SUBMIT = createRequestingAction("SETTINGS_SUBMIT", {
    withValidationRemove: true
});

export const PROFILE_SUBMIT = createRequestingAction("PROFILE_SUBMIT", {
    withValidationRemove: true
});

export const LOGS = createLoadingAction("LOGS");
export const LOGS_LIST = createLoadingAction("LOGS_LIST");

export const CLIENT_SET = "CLIENT_SET";
export const CLIENT_UNSET = "CLIENT_UNSET";
export const CLIENT_LOAD = "CLIENT_LOAD";
