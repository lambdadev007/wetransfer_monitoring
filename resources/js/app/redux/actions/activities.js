import {
    ACTIVITIES,
    ACTIVITIES_LIST,
    ACTIVITIES_ADD_EDIT,
    ACTIVITIES_ADDITIONAL_DATA,
    ACTIVITIES_DELETE,
    ACTIVITIES_YEARS_SELECT_DATA,
    ACTIVITIES_DOCUMENTS,
    ACTIVITIES_DOCUMENT_UPLOAD,
    ACTIVITIES_DOCUMENT_DELETE,
    ACTIVITIES_SINGLE,
    ACTIVITIES_STATUS_CHANGE,
    ACTIVITIES_INDICATORS_ADD,
    ACTIVITIES_INDICATORS_EDIT,
    ACTIVITIES_EVIDENCES_ADD_EDIT,
    ACTIVITIES_INDICATORS_EVIDENCES,
    ACTIVITIES_INDICATORS_EVIDENCES_DELETE,
    ACTIVITIES_COMMENT,
    ACTIVITIES_COMMENT_FILE_DELETE
} from "./types";

export const activitiesListLoading = query => {
    return {
        type: ACTIVITIES_LIST.LOADING,
        payload: query
    };
};
export const activitiesSingleLoading = id => {
    return {
        type: ACTIVITIES_SINGLE.LOADING,
        payload: id
    };
};
export const activitiesSingleReset = () => {
    return {
        type: ACTIVITIES_SINGLE.RESET
    };
};
export const activitiesAdditionalDataLoading = () => {
    return {
        type: ACTIVITIES_ADDITIONAL_DATA.LOADING
    };
};
export const activitiesAddEdit = (payload, onSuccess, isForUser) => {
    return {
        type: ACTIVITIES_ADD_EDIT.REQUESTING,
        payload,
        onSuccess,
        isForUser
    };
};
export const activitiesAddEditRemoveValidation = payload => {
    return {
        type: ACTIVITIES_ADD_EDIT.VALIDATION_REMOVE,
        payload
    };
};
export const activitiesAddEditReset = () => {
    return {
        type: ACTIVITIES_ADD_EDIT.RESET
    };
};

export const activitiesIndicatorsAdd = (payload, onSuccess) => {
    return {
        type: ACTIVITIES_INDICATORS_ADD.REQUESTING,
        payload,
        onSuccess
    };
};
export const activitiesIndicatorsAddRemoveValidation = payload => {
    return {
        type: ACTIVITIES_INDICATORS_ADD.VALIDATION_REMOVE,
        payload
    };
};
export const activitiesIndicatorsEdit = (payload, onSuccess) => {
    return {
        type: ACTIVITIES_INDICATORS_EDIT.REQUESTING,
        payload,
        onSuccess
    };
};
export const activitiesIndicatorsEditRemoveValidation = payload => {
    return {
        type: ACTIVITIES_INDICATORS_EDIT.VALIDATION_REMOVE,
        payload
    };
};

export const activitiesEvidencesAddEdit = (payload, onSuccess) => {
    return {
        type: ACTIVITIES_EVIDENCES_ADD_EDIT.REQUESTING,
        payload,
        onSuccess
    };
};
export const activitiesEvidencesAddEditRemoveValidation = payload => {
    return {
        type: ACTIVITIES_EVIDENCES_ADD_EDIT.VALIDATION_REMOVE,
        payload
    };
};
export const activitiesEvidencesAddEditReset = () => {
    return {
        type: ACTIVITIES_EVIDENCES_ADD_EDIT.RESET
    };
};

export const activitiesIndicatorsEvidencesReset = () => {
    return {
        type: ACTIVITIES_INDICATORS_EVIDENCES.RESET
    };
};
export const activitiesIndicatorsEvidencesDelete = (
    payload,
    onSuccess,
    requestType
) => {
    return {
        type: ACTIVITIES_INDICATORS_EVIDENCES_DELETE.REQUESTING,
        payload,
        onSuccess,
        requestType
    };
};

export const activitiesRemove = (payload, onSuccess) => {
    return {
        type: ACTIVITIES_DELETE.REQUESTING,
        payload,
        onSuccess
    };
};

export const activitiesStatusChange = ({
    payload,
    onSuccess,
    decision,
    isSuperAdmin
}) => {
    return {
        type: ACTIVITIES_STATUS_CHANGE.REQUESTING,
        payload,
        onSuccess,
        decision,
        isSuperAdmin
    };
};
export const activitiesStatusChangeRemoveValidation = payload => {
    return {
        type: ACTIVITIES_STATUS_CHANGE.VALIDATION_REMOVE,
        payload
    };
};
export const activitiesStatusChangeReset = () => {
    return {
        type: ACTIVITIES_STATUS_CHANGE.RESET
    };
};

export const activitiesYearsSelectDataLoading = () => {
    return {
        type: ACTIVITIES_YEARS_SELECT_DATA.LOADING
    };
};
export const activitiesDocumentsLoading = payload => {
    return {
        type: ACTIVITIES_DOCUMENTS.LOADING,
        payload
    };
};
export const activitiesDocumentUpload = (payload, onSuccess) => {
    return {
        type: ACTIVITIES_DOCUMENT_UPLOAD.REQUESTING,
        payload,
        onSuccess
    };
};
export const activitiesDocumentUploadRemoveValidation = payload => {
    return {
        type: ACTIVITIES_DOCUMENT_UPLOAD.VALIDATION_REMOVE,
        payload
    };
};
export const activitiesDocumentDelete = (payload, onSuccess) => {
    return {
        type: ACTIVITIES_DOCUMENT_DELETE.REQUESTING,
        payload,
        onSuccess
    };
};
export const activitiesComment = (payload, id, onSuccess) => {
    return {
        type: ACTIVITIES_COMMENT.REQUESTING,
        payload,
        id,
        onSuccess
    };
};
export const activitiesCommentRemoveValidation = payload => {
    return {
        type: ACTIVITIES_COMMENT.VALIDATION_REMOVE,
        payload
    };
};
export const activitiesCommentReset = () => {
    return {
        type: ACTIVITIES_COMMENT.RESET
    };
};
export const activitiesCommentFileDelete = (payload, onSuccess) => {
    return {
        type: ACTIVITIES_COMMENT_FILE_DELETE.REQUESTING,
        payload,
        onSuccess
    };
}
export const activitiesCommentFileReset = payload => {
    return {
        type: ACTIVITIES.RESET,
        payload
    };
}

export const activitiesDocumentsReset = () => {
    return {
        type: ACTIVITIES_DOCUMENTS.RESET
    };
};
export const activitiesReset = () => {
    return {
        type: ACTIVITIES.RESET
    };
};
