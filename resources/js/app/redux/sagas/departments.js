import { all, fork } from "redux-saga/effects";
import { createLoadingSaga, createRequestingSaga } from "@/helpers/createSaga";
import { validateDepartment } from "@/helpers/validate";
import {
    DEPARTMENTS_LIST,
    DEPARTMENTS_ADD_EDIT,
    DEPARTMENTS,
    DEPARTMENTS_DELETE
} from "@/redux/actions/types";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "departments",
                handlerName: "get list",
                apiUrl: "/jobs",
                watchType: DEPARTMENTS_LIST.LOADING,
                successType: DEPARTMENTS_LIST.SUCCESS,
                errorType: DEPARTMENTS_LIST.ERROR,
                resetTypes: [DEPARTMENTS.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "departments",
                handlerName: "add/edit",
                paramsExtractor: action => action,
                apiUrlExtractor: params =>
                    params.isEdit ? `/jobs/${params.payload.id}` : `/jobs`,
                methodExtractor: params => (params.isEdit ? "put" : "post"),
                watchType: DEPARTMENTS_ADD_EDIT.REQUESTING,
                successType: DEPARTMENTS_ADD_EDIT.SUCCESS,
                errorType: DEPARTMENTS_ADD_EDIT.ERROR,
                resetTypes: [DEPARTMENTS.RESET, DEPARTMENTS_ADD_EDIT.RESET],
                withValidation: true,
                validationFunction: validateDepartment
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "departments",
                handlerName: "delete",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/jobs/${param}`,
                method: "delete",
                watchType: DEPARTMENTS_DELETE.REQUESTING,
                successType: DEPARTMENTS_DELETE.SUCCESS,
                errorType: DEPARTMENTS_DELETE.ERROR,
                resetTypes: [DEPARTMENTS.RESET, DEPARTMENTS_DELETE.RESET]
            })
        )
    ]);
}

export default rootWatcher;
