import { all, fork } from "redux-saga/effects";
import { createLoadingSaga, createRequestingSaga } from "@/helpers/createSaga";
import { validateTask } from "@/helpers/validate";
import {
    TASKS_LIST,
    TASKS_ADD_EDIT,
    TASKS,
    TASKS_DELETE
} from "@/redux/actions/types";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "tasks",
                handlerName: "get list",
                apiUrl: "/five/plans/step2",
                watchType: TASKS_LIST.LOADING,
                successType: TASKS_LIST.SUCCESS,
                errorType: TASKS_LIST.ERROR,
                resetTypes: [TASKS.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "tasks",
                handlerName: "add/edit",
                apiUrl: "/five/plans/step2/store",
                watchType: TASKS_ADD_EDIT.REQUESTING,
                successType: TASKS_ADD_EDIT.SUCCESS,
                errorType: TASKS_ADD_EDIT.ERROR,
                resetTypes: [TASKS.RESET, TASKS_ADD_EDIT.RESET],
                withValidation: true,
                validationFunction: validateTask
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "tasks",
                handlerName: "delete",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: param => `/five/plans/step2/delete/${param}`,
                method: "delete",
                watchType: TASKS_DELETE.REQUESTING,
                successType: TASKS_DELETE.SUCCESS,
                errorType: TASKS_DELETE.ERROR,
                resetTypes: [TASKS.RESET, TASKS_DELETE.RESET]
            })
        )
    ]);
}

export default rootWatcher;
