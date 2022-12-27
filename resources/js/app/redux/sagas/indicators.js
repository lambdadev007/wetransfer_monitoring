import { all, fork } from "redux-saga/effects";
import { createLoadingSaga, createRequestingSaga } from "@/helpers/createSaga";
import { validateIndicator } from "@/helpers/validate";
import {
    INDICATORS_LIST,
    INDICATORS_ADD_EDIT,
    INDICATORS,
    INDICATORS_DELETE
} from "@/redux/actions/types";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "indicators",
                handlerName: "get list",
                apiUrl: "/five/plans/step3",
                watchType: INDICATORS_LIST.LOADING,
                successType: INDICATORS_LIST.SUCCESS,
                errorType: INDICATORS_LIST.ERROR,
                resetTypes: [INDICATORS.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "indicators",
                handlerName: "add/edit",
                apiUrl: "/five/plans/step3/store",
                watchType: INDICATORS_ADD_EDIT.REQUESTING,
                successType: INDICATORS_ADD_EDIT.SUCCESS,
                errorType: INDICATORS_ADD_EDIT.ERROR,
                resetTypes: [INDICATORS.RESET, INDICATORS_ADD_EDIT.RESET],
                withValidation: true,
                validationFunction: validateIndicator
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "indicators",
                handlerName: "delete",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/five/plans/step3/delete/${param}`,
                method: "delete",
                watchType: INDICATORS_DELETE.REQUESTING,
                successType: INDICATORS_DELETE.SUCCESS,
                errorType: INDICATORS_DELETE.ERROR,
                resetTypes: [INDICATORS.RESET, INDICATORS_DELETE.RESET]
            })
        )
    ]);
}

export default rootWatcher;
