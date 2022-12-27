import { all } from "redux-saga/effects";
import client from "./client";
import login from "./login";
import goals from "./goals";
import tasks from "./tasks";
import indicators from "./indicators";
import evidences from "./evidences";
import departments from "./departments";
import users from "./users";
import plans from "./plans";
import activities from "./activities";
import logs from "./logs";
import reports from "./reports";
import settings from "./settings";
import profile from "./profile";

export default function* indexSaga() {
    yield all([
        client(),
        login(),
        goals(),
        tasks(),
        indicators(),
        evidences(),
        departments(),
        users(),
        plans(),
        activities(),
        logs(),
        reports(),
        settings(),
        profile()
    ]);
}
