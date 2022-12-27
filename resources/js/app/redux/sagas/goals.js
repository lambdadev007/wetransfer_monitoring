import { all, fork } from "redux-saga/effects";
import { createLoadingSaga, createRequestingSaga } from "@/helpers/createSaga";
import { validateGoal } from "@/helpers/validate";
import {
    GOALS_LIST,
    GOALS_ADD_EDIT,
    GOALS,
    GOALS_DELETE
} from "@/redux/actions/types";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "goals",
                handlerName: "get list",
                apiUrl: "/five/plans/step1",
                watchType: GOALS_LIST.LOADING,
                successType: GOALS_LIST.SUCCESS,
                errorType: GOALS_LIST.ERROR,
                resetTypes: [GOALS.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "goals",
                handlerName: "add/edit",
                apiUrl: "/five/plans/step1/store",
                watchType: GOALS_ADD_EDIT.REQUESTING,
                successType: GOALS_ADD_EDIT.SUCCESS,
                errorType: GOALS_ADD_EDIT.ERROR,
                resetTypes: [GOALS.RESET, GOALS_ADD_EDIT.RESET],
                withValidation: true,
                validationFunction: validateGoal
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "goals",
                handlerName: "delete",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/five/plans/step1/delete/${param}`,
                method: "delete",
                watchType: GOALS_DELETE.REQUESTING,
                successType: GOALS_DELETE.SUCCESS,
                errorType: GOALS_DELETE.ERROR,
                resetTypes: [GOALS.RESET, GOALS_DELETE.RESET]
            })
        )
    ]);
}

export default rootWatcher;
