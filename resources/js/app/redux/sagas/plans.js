import { all, fork } from "redux-saga/effects";
import { createLoadingSaga } from "@/helpers/createSaga";
import { PLAN_NAME } from "@/redux/actions/types";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "plans",
                handlerName: "get name",
                apiUrl: "/five/plans/step0",
                watchType: PLAN_NAME.LOADING,
                successType: PLAN_NAME.SUCCESS,
                errorType: PLAN_NAME.ERROR
            })
        )
    ]);
}

export default rootWatcher;
