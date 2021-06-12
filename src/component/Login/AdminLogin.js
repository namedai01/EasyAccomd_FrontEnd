import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { adminLogin, hostLogin, renterLogin } from "../../actions/userAction";
import style from "./login.module.css";

function AdminLogin({ path }) {
    const [loginData, setloginData] = useState({
        username: "",
        password: "",
    });

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(adminLogin(loginData));

            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setloginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div id={style.login}>
            <div className={style.bg_opacity}>
                <div className={style.login_container}>
                    <form className={style.login_form} onSubmit={handleSubmit}>
                        <p className={style.title}>Log In</p>

                        <label for="username">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className={style.type_in}
                            id={style.username}
                            name="username"
                            onChange={handleChange}
                            value={loginData.username}
                        />
                        <label for="password">Password</label>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            className={style.type_in}
                            id={style.password}
                            name="password"
                            onChange={handleChange}
                            value={loginData.password}
                        />

                        <button>
                            <h2>Log in</h2>
                        </button>

                        <p className={style.message}>
                            Not registered?{" "}
                            <a href="/host/register" style={{ color: "red" }}>
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
