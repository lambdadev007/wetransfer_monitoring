import { all, fork } from "redux-saga/effects";
import { createRequestingSaga } from "@/helpers/createSaga";
import { validateProfile } from "@/helpers/validate";
import { PROFILE_SUBMIT } from "@/redux/actions/types";
import * as c from "@/constants";

function* rootWatcher() {
    yield all([
        fork(
            createRequestingSaga({
                sagaName: "profile",
                handlerName: "save",
                apiUrl: "/auth/profile-update",
                watchType: PROFILE_SUBMIT.REQUESTING,
                successType: PROFILE_SUBMIT.SUCCESS,
                errorType: PROFILE_SUBMIT.ERROR,
                resetTypes: [PROFILE_SUBMIT.RESET],
                withValidation: true,
                validationFunction: validateProfile
            })
        )
    ]);
}

export default rootWatcher;
