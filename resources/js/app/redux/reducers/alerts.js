import { ALERT_ADD, ALERT_CLOSE, ALERT_REMOVE } from "../actions/types";

const initialState = {
    alerts: []
};

export default function reducer(state = initialState, action) {
    const { type } = action;

    switch (type) {
        case ALERT_ADD:
            return {
                ...state,
                alerts: [
                    ...state.alerts,
                    {
                        key: action.key,
                        ...action.alert
                    }
                ]
            };

        case ALERT_CLOSE:
            return {
                ...state,
                alerts: state.alerts.map(alert =>
                    action.dismissAll || alert.key === action.key
                        ? { ...alert, dismissed: true }
                        : { ...alert }
                )
            };

        case ALERT_REMOVE:
            return {
                ...state,
                alerts: state.alerts.filter(alert => alert.key !== action.key)
            };

        default: {
            return state;
        }
    }
}
