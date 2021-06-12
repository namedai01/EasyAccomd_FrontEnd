import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { reducers } from "./reducers/index";
import "./index.css";
import App from "./App";

// axios.defaults.headers.common["Authorization"] =
//     "Bearer " + localStorage.getItem("token");

const store = createStore(reducers, compose(applyMiddleware(thunk)));

axios.defaults.baseURL = 'http://localhost:5000/'

ReactDOM.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
            <App />
        {/* </React.StrictMode> */}
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
