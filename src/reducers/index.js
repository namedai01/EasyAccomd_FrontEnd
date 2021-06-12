import { combineReducers } from "redux";

import userState from "./authReducer";

import posts from "./postReducer";

export const reducers = combineReducers({ userState, posts });

