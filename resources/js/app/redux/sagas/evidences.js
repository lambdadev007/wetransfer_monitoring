import { all, fork } from "redux-saga/effects";
import { createLoadingSaga, createRequestingSaga } from "@/helpers/createSaga";
import { validateEvidence } from "@/helpers/validate";
import {
    EVIDENCES_LIST,
    EVIDENCES_ADD_EDIT,
    EVIDENCES,
    EVIDENCES_DELETE
} from "@/redux/actions/types";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "evidences",
                handlerName: "get list",
                apiUrl: "/five/plans/step4",
                watchType: EVIDENCES_LIST.LOADING,
                successType: EVIDENCES_LIST.SUCCESS,
                errorType: EVIDENCES_LIST.ERROR,
                resetTypes: [EVIDENCES.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "evidences",
                handlerName: "add/edit",
                apiUrl: "/five/plans/step4/store",
                watchType: EVIDENCES_ADD_EDIT.REQUESTING,
                successType: EVIDENCES_ADD_EDIT.SUCCESS,
                errorType: EVIDENCES_ADD_EDIT.ERROR,
                resetTypes: [EVIDENCES.RESET, EVIDENCES_ADD_EDIT.RESET],
                withValidation: true,
                validationFunction: validateEvidence
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "evidences",
                handlerName: "delete",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/five/plans/step4/delete/${param}`,
                method: "delete",
                watchType: EVIDENCES_DELETE.REQUESTING,
                successType: EVIDENCES_DELETE.SUCCESS,
                errorType: EVIDENCES_DELETE.ERROR,
                resetTypes: [EVIDENCES.RESET, EVIDENCES_DELETE.RESET]
            })
        )
    ]);
}

export default rootWatcher;
