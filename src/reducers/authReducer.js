import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../constants/actionTypes.js";

// const user = localStorage.getItem("user");

const userState =  { isLoggedIn: false, user: null };

export default (state = userState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};
