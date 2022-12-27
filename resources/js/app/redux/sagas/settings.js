import { all, fork } from "redux-saga/effects";
import { createLoadingSaga, createRequestingSaga } from "@/helpers/createSaga";
import { validateSettings } from "@/helpers/validate";
import { SETTINGS, SETTINGS_SUBMIT } from "@/redux/actions/types";
import * as c from "@/constants";

function* rootWatcher() {
    yield all([
        fork(
            createLoadingSaga({
                sagaName: "settings",
                handlerName: "get data",
                apiUrl: "/settings",
                watchType: SETTINGS.LOADING,
                successType: SETTINGS.SUCCESS,
                errorType: SETTINGS.ERROR,
                resetTypes: [SETTINGS.RESET]
            })
        ),
        fork(
            createRequestingSaga({
                sagaName: "settings",
                handlerName: "save",
                apiUrl: "/settings/store",
                modifyPayload: payload => ({
                    [c.attributes]: payload
                }),
                watchType: SETTINGS_SUBMIT.REQUESTING,
                successType: SETTINGS_SUBMIT.SUCCESS,
                errorType: SETTINGS_SUBMIT.ERROR,
                resetTypes: [SETTINGS.RESET],
                withValidation: true,
                validationFunction: validateSettings
            })
        )
    ]);
}

export default rootWatcher;
