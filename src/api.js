import axios from "axios";
import { API_URL } from "./constants";

export const auth = (login, password) => {
    return axios.post(`${API_URL}/auth`, {
        login,
        password,
    });
};
