import { all, fork } from "redux-saga/effects";

import { createLoadingSaga, createRequestingSaga } from "@/helpers/createSaga";
import {
    ACTIVITIES,
    ACTIVITIES_LIST,
    ACTIVITIES_ADDITIONAL_DATA,
    ACTIVITIES_ADD_EDIT,
    ACTIVITIES_DELETE,
    ACTIVITIES_YEARS_SELECT_DATA,
    ACTIVITIES_DOCUMENTS,
    ACTIVITIES_DOCUMENT_UPLOAD,
    ACTIVITIES_DOCUMENT_DELETE,
    ACTIVITIES_STATUS_CHANGE,
    ACTIVITIES_SINGLE,
    ACTIVITIES_INDICATORS_ADD,
    ACTIVITIES_INDICATORS_EDIT,
    ACTIVITIES_EVIDENCES_ADD_EDIT,
    ACTIVITIES_INDICATORS_EVIDENCES,
    ACTIVITIES_INDICATORS_EVIDENCES_DELETE,
    ACTIVITIES_COMMENT,
    ACTIVITIES_COMMENT_FILE_DELETE
} from "@/redux/actions/types";
import {
    validateActivityAdmin,
    validateActivityIndicator,
    validateActivityStatusAdmin
} from "@/helpers/validate";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "activities",
                handlerName: "get list",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: query => `/activities?${query}`,
                watchType: ACTIVITIES_LIST.LOADING,
                successType: ACTIVITIES_LIST.SUCCESS,
                errorType: ACTIVITIES_LIST.ERROR,
                resetTypes: [ACTIVITIES.RESET]
            })
        ),
        fork(
            createLoadingSaga({
                sagaName: "activities",
                handlerName: "get single",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: id => `/activities/show/${id}`,
                watchType: ACTIVITIES_SINGLE.LOADING,
                successType: ACTIVITIES_SINGLE.SUCCESS,
                errorType: ACTIVITIES_SINGLE.ERROR,
                resetTypes: [ACTIVITIES.RESET, ACTIVITIES_SINGLE.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "add/edit",
                paramsExtractor: action => action.isForUser,
                apiUrlExtractor: isForUser =>
                    isForUser
                        ? "/activities/create-or-update-for-user"
                        : "/activities/create-or-update-for-admin",
                watchType: ACTIVITIES_ADD_EDIT.REQUESTING,
                successType: ACTIVITIES_ADD_EDIT.SUCCESS,
                errorType: ACTIVITIES_ADD_EDIT.ERROR,
                resetTypes: [ACTIVITIES.RESET, ACTIVITIES_ADD_EDIT.RESET],
                withValidation: true,
                validationFunction: (payload, action) =>
                    action.isForUser
                        ? null // doesn't check for validation
                        : validateActivityAdmin(payload)
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "add indicator",
                apiUrl: "/activities/indicators/save",
                watchType: ACTIVITIES_INDICATORS_ADD.REQUESTING,
                successType: ACTIVITIES_INDICATORS_ADD.SUCCESS,
                errorType: ACTIVITIES_INDICATORS_ADD.ERROR,
                resetTypes: [
                    ACTIVITIES.RESET,
                    ACTIVITIES_INDICATORS_ADD.RESET,
                    ACTIVITIES_INDICATORS_EVIDENCES.RESET,
                    ACTIVITIES_ADD_EDIT.RESET
                ],
                withValidation: true,
                validationFunction: validateActivityIndicator
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "edit indicator",
                apiUrl: "/activities/indicators/save",
                watchType: ACTIVITIES_INDICATORS_EDIT.REQUESTING,
                successType: ACTIVITIES_INDICATORS_EDIT.SUCCESS,
                errorType: ACTIVITIES_INDICATORS_EDIT.ERROR,
                resetTypes: [
                    ACTIVITIES.RESET,
                    ACTIVITIES_INDICATORS_EDIT.RESET,
                    ACTIVITIES_INDICATORS_EVIDENCES.RESET,
                    ACTIVITIES_ADD_EDIT.RESET
                ],
                withValidation: true,
                validationFunction: validateActivityIndicator
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "add/edit evidence",
                apiUrl: "/activities/indicators/evidence/save",
                watchType: ACTIVITIES_EVIDENCES_ADD_EDIT.REQUESTING,
                successType: ACTIVITIES_EVIDENCES_ADD_EDIT.SUCCESS,
                errorType: ACTIVITIES_EVIDENCES_ADD_EDIT.ERROR,
                resetTypes: [
                    ACTIVITIES.RESET,
                    ACTIVITIES_EVIDENCES_ADD_EDIT.RESET,
                    ACTIVITIES_INDICATORS_EVIDENCES.RESET,
                    ACTIVITIES_ADD_EDIT.RESET
                ],
                withValidation: true
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "delete indicator/evidence/file",
                paramsExtractor: action => action,
                apiUrlExtractor: action => {
                    const id = action.payload;
                    return action.requestType === "indicator"
                        ? `/activities/indicators/delete/${id}`
                        : action.requestType === "evidence"
                        ? `/activities/indicators/evidence/delete/${id}`
                        : `/activities/delete/file/${id}`;
                },
                method: "delete",
                watchType: ACTIVITIES_INDICATORS_EVIDENCES_DELETE.REQUESTING,
                successType: ACTIVITIES_INDICATORS_EVIDENCES_DELETE.SUCCESS,
                errorType: ACTIVITIES_INDICATORS_EVIDENCES_DELETE.ERROR,
                resetTypes: [
                    ACTIVITIES.RESET,
                    ACTIVITIES_INDICATORS_EVIDENCES_DELETE.RESET,
                    ACTIVITIES_INDICATORS_EVIDENCES.RESET,
                    ACTIVITIES_ADD_EDIT.RESET
                ]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "status change",
                paramsExtractor: action => action.isSuperAdmin,
                apiUrlExtractor: isSuperAdmin =>
                    isSuperAdmin
                        ? "/activity/status/confirm"
                        : "/activity/status/join",
                watchType: ACTIVITIES_STATUS_CHANGE.REQUESTING,
                successType: ACTIVITIES_STATUS_CHANGE.SUCCESS,
                errorType: ACTIVITIES_STATUS_CHANGE.ERROR,
                resetTypes: [ACTIVITIES.RESET, ACTIVITIES_STATUS_CHANGE.RESET],
                withValidation: true,
                validationFunction: (payload, action) =>
                    action.isSuperAdmin
                        ? null
                        : validateActivityStatusAdmin(payload)
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "delete",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/activities/delete/${param}`,
                method: "delete",
                watchType: ACTIVITIES_DELETE.REQUESTING,
                successType: ACTIVITIES_DELETE.SUCCESS,
                errorType: ACTIVITIES_DELETE.ERROR,
                resetTypes: [ACTIVITIES.RESET, ACTIVITIES_DELETE.RESET]
            })
        ),
        fork(
            createLoadingSaga({
                sagaName: "activities",
                handlerName: "get additional data",
                apiUrl: "/activities/additional-data",
                watchType: ACTIVITIES_ADDITIONAL_DATA.LOADING,
                successType: ACTIVITIES_ADDITIONAL_DATA.SUCCESS,
                errorType: ACTIVITIES_ADDITIONAL_DATA.ERROR,
                resetTypes: [ACTIVITIES.RESET]
            })
        ),
        fork(
            createLoadingSaga({
                sagaName: "activities",
                handlerName: "get years select data",
                apiUrl: "/select-year-data",
                watchType: ACTIVITIES_YEARS_SELECT_DATA.LOADING,
                successType: ACTIVITIES_YEARS_SELECT_DATA.SUCCESS,
                errorType: ACTIVITIES_YEARS_SELECT_DATA.ERROR,
                resetTypes: [ACTIVITIES.RESET]
            })
        ),
        fork(
            createLoadingSaga({
                sagaName: "activities",
                handlerName: "get documents",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/get-files-by-year/${param}`,
                responseExtractor: res => res.data,
                watchType: ACTIVITIES_DOCUMENTS.LOADING,
                successType: ACTIVITIES_DOCUMENTS.SUCCESS,
                errorType: ACTIVITIES_DOCUMENTS.ERROR,
                resetTypes: [ACTIVITIES.RESET, ACTIVITIES_DOCUMENTS.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "upload document",
                apiUrl: "/upload-file-per-year",
                watchType: ACTIVITIES_DOCUMENT_UPLOAD.REQUESTING,
                successType: ACTIVITIES_DOCUMENT_UPLOAD.SUCCESS,
                errorType: ACTIVITIES_DOCUMENT_UPLOAD.ERROR,
                resetTypes: [ACTIVITIES.RESET, ACTIVITIES_DOCUMENTS.RESET],
                isFormData: true,
                withValidation: true
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "delete document",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/delete-file-per-year/${param}`,
                method: "delete",
                watchType: ACTIVITIES_DOCUMENT_DELETE.REQUESTING,
                successType: ACTIVITIES_DOCUMENT_DELETE.SUCCESS,
                errorType: ACTIVITIES_DOCUMENT_DELETE.ERROR,
                resetTypes: [ACTIVITIES.RESET, ACTIVITIES_DOCUMENTS.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "comment",
                paramsExtractor: action => action.id,
                apiUrlExtractor: id => `/activities/comment/${id}`,
                watchType: ACTIVITIES_COMMENT.REQUESTING,
                successType: ACTIVITIES_COMMENT.SUCCESS,
                errorType: ACTIVITIES_COMMENT.ERROR,
                resetTypes: [ACTIVITIES.RESET, ACTIVITIES_COMMENT.RESET],
                withValidation: true
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "activities",
                handlerName: "delete",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/activities/delete/comment-file/${param}`,
                method: "delete",
                watchType: ACTIVITIES_COMMENT_FILE_DELETE.REQUESTING,
                successType: ACTIVITIES_COMMENT_FILE_DELETE.SUCCESS,
                errorType: ACTIVITIES_COMMENT_FILE_DELETE.ERROR,
                resetTypes: ACTIVITIES.RESET,
            })
        ),
    ]);
}

export default rootWatcher;
