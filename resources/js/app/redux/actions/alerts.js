import { ALERT_ADD, ALERT_CLOSE, ALERT_REMOVE } from "./types";
import uniqueId from "lodash/uniqueId";

export const alertAdd = alert => {
    const key = alert.options && alert.options.key;

    return {
        type: ALERT_ADD,
        alert: {
            ...alert,
            key: key || uniqueId("alert-")
        }
    };
};

export const alertClose = key => ({
    type: ALERT_CLOSE,
    dismissAll: !key, // dismiss all if no key provided
    key
});

export const alertRemove = key => ({
    type: ALERT_REMOVE,
    key
});
