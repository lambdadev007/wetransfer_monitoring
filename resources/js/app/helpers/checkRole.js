import store from "@/redux";
import * as c from "@/constants";
import { isdev } from "@/config";

const checkRole = requiredRoles => {
    try {
        const currentRole = store.getState().client.userInfo[c.role_name];

        if (requiredRoles && requiredRoles.includes(currentRole)) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        isdev && console.error("Error in checkRole ===>", err);
        return false;
    }
};

export default checkRole;
