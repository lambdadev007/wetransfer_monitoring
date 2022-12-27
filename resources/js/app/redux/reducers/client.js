import { CLIENT_SET, CLIENT_UNSET } from "../actions/types";
import { isdev } from "@/config";

const initialState = {
    token: "",
    userInfo: {},
    isInitiallyLoading: true // runs once only on initial render.
    // Is used to load client before redirecting from private routes
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CLIENT_SET: {
            isdev &&
                console.log("payload from client_set reducer ===>", payload);

            const { token, userInfo } = payload;
            // conditionally set properties if they are truthy
            return {
                ...state,
                ...(token && { token }),
                ...(userInfo && { userInfo }),
                isInitiallyLoading: false
            };
        }
        case CLIENT_UNSET: {
            // on logout or login error
            return {
                ...initialState,
                isInitiallyLoading: false
            };
        }
        default: {
            return state;
        }
    }
}
