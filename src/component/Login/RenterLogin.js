import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { hostLogin, renterLogin } from "../../actions/userAction";
import style from "./login.module.css";

// ---Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const SigninSchema = yup.object().shape({
    username: yup
        .string()
        .required()
        .min(3, "Username must have at least 3 characters"),
    password: yup.string().required().min(3, "Password must have at least 3 characters"),
});
// ----------

// ----- Toast --
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// ----- Toast --

function RenterLogin({ path }) {
    const userState = useSelector((state) => state.userState);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SigninSchema),
    });

    // ---- Toast
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    // ---- Toast

    const dispatch = useDispatch();

    const history = useHistory();

    const onSubmit = (data) => {
        try {
            dispatch(renterLogin(data));
            setOpen(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (userState.user != null) {
            setTimeout(() => {
                history.push("/");
            }, 2000);
        } else {
        }
    }, [userState]);

    return (
        <div id={style.login}>
            <div className={style.bg_opacity}>
                <div className={style.login_container}>
                    <form
                        className={style.login_form}
                        onSubmit={handleSubmit(onSubmit)}>
                        <h1 className={style.title}>Log In</h1>
                        <p className={style.type}>as Renter</p>

                        <label for="username">Username</label>
                        <input
                            ref={register}
                            type="text"
                            placeholder="Enter Username"
                            className={style.type_in}
                            id={style.username}
                            name="username"
                        />
                        {errors.username && <p>{errors.username.message}</p>}

                        <label for="password">Password</label>
                        <input
                            ref={register}
                            type="password"
                            placeholder="Enter Password"
                            className={style.type_in}
                            id={style.password}
                            name="password"
                        />
                        {errors.password && <p>{errors.password.message}</p>}

                        <button>
                            <h2>Log in</h2>
                        </button>
                        <p className={style.message}>
                            You are host? <a href="/host/login">Log in</a>| Not
                            registered? <a href="/renter/register">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
            {userState.user != null ? (
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Login successfully !
                    </Alert>
                </Snackbar>
            ) : (
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}>
                    <Alert severity="error" onClose={handleClose}>
                        "Invalid usename or password"
                    </Alert>
                </Snackbar>
            )}
        </div>
    );
}

export default RenterLogin;
