import axios from "axios";

export const setAxiosToken = token => {
    if (token) {
        // Apply to every request
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const setLocalStorageToken = token => {
    if (token) {
        localStorage.setItem("token", token);
    } else {
        localStorage.removeItem("token");
    }
};

export default setLocalStorageToken;
