import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SENDINFO,
} from "../constants/actionTypes.js";

import * as api from "../api/index.js";

export const renterLogin = (loginData) => async (dispatch) => {
    try {
        const resData = await api.renterLogin(loginData);

        if (resData !== null) {
            localStorage.setItem("token", resData.token);

            localStorage.setItem("user", resData.user._id);

            localStorage.setItem("role", resData.role);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: resData,
            });
        } else {
            dispatch({
                type: LOGIN_FAIL,
                payload: {},
            });
        }
    } catch (error) {
        console.log(error.message);
    }
};

export const hostLogin = (loginData) => async (dispatch) => {
    try {
        const resData = await api.hostLogin(loginData);

        localStorage.setItem("token", resData.token);

        localStorage.setItem("user", resData.user._id);

        localStorage.setItem("role", resData.role);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: resData,
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const adminLogin = (loginData) => async (dispatch) => {
    try {
        const resData = await api.adminLogin(loginData);

        localStorage.setItem("token", resData.token);

        localStorage.setItem("role", resData.role);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: resData,
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const renterRegister = (registerData) => async (dispatch) => {
    try {
        const resData = await api.renterRegister(registerData);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: resData,
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const hostRegister = (registerData) => async (dispatch) => {
    try {
        const resData = await api.hostRegister(registerData);
        console.log(resData);

        if (resData.message !== "Saved successfully") {
            dispatch({
                type: REGISTER_FAIL,
                payload: "Invalid Input",
            });
        } else {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: resData,
            });
        }
    } catch (error) {
        console.log(error.message);
    }
};
