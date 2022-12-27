import { CLIENT_SET, CLIENT_UNSET, CLIENT_LOAD } from "./types";

export const clientSet = payload => {
    return {
        type: CLIENT_SET,
        payload
    };
};
export const clientUnset = withoutRequest => {
    return {
        type: CLIENT_UNSET,
        withoutRequest
    };
};
export const clientLoad = (payload, tokenAlreadyExists) => {
    return {
        type: CLIENT_LOAD,
        payload,
        tokenAlreadyExists
    };
};
