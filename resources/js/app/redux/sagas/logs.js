import { all, fork } from "redux-saga/effects";
import { createLoadingSaga } from "@/helpers/createSaga";
import { LOGS, LOGS_LIST } from "@/redux/actions/types";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "logs",
                handlerName: "get list",
                paramsExtractor: action => action.payload,
                apiUrlExtractor: query => `/logs?${query}`,
                watchType: LOGS_LIST.LOADING,
                successType: LOGS_LIST.SUCCESS,
                errorType: LOGS_LIST.ERROR,
                resetTypes: [LOGS.RESET]
            })
        )
    ]);
}

export default rootWatcher;
