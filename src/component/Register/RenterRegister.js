import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { renterRegister } from "../../actions/userAction";
import style from "./renter.register.module.css";

// ---Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const SignupSchema = yup.object().shape({
    username: yup
        .string()
        .required()
        .min(3, "Username must have at least 3 characters"),
    phoneNumber: yup
        .number()
        .positive()
        .integer()
        .required()
        .min(999999999, "Must have at least 10 characters"),
    password: yup.string().required().min(3, "Password is too weak"),
});

// ----- Toast --
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// ----

function RenterRegister() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema),
    });

    const dispatch = useDispatch();

    const history = useHistory();

    const onSubmit = (data) => {
        try {
            dispatch(renterRegister(data));
            setOpen(true);

            setTimeout(() => {
                history.push("/renter/login");
            }, 2000);
            
        } catch (error) {
            console.log(error);
        }
    };

    // ---- Toast
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    // ----
    return (
        <div id={style.container}>
            <div className={style.bg_opacity}>
                <div className={style.info_container}>
                    <div className={style.info}>
                    </div>
                </div>

                <div className={style.signup_container}>
                    <div className={style.form_container}>
                        <form
                            className={style.signup_form}
                            onSubmit={handleSubmit(onSubmit)}>
                            <h1>Create an account</h1>
                            <p>
                                Already have an account?{" "}
                                <a href="/renter/login">Log in</a>
                            </p>

                            <label for="phone">Phone number</label>
                            <input
                                ref={register}
                                type="text"
                                placeholder="123456789"
                                className={style.type_in}
                                id={style.phone}
                                name="phoneNumber"
                            />
                            {errors.phoneNumber && (
                                <p>{errors.phoneNumber.message}</p>
                            )}

                            <label for="username">Username</label>
                            <input
                                ref={register}
                                type="text"
                                name="username"
                                placeholder="Johndoe123"
                                className={style.type_in}
                                id={style.username}
                            />
                            {errors.username && (
                                <p>{errors.username.message}</p>
                            )}

                            <label for="password">Password</label>
                            <input
                                ref={register}
                                type="password"
                                name="password"
                                className={style.type_in}
                                id={style.password}
                            />
                            {errors.password && (
                                <p>{errors.password.message}</p>
                            )}

                            <button className={style.signup_button}>
                                <p>Create Account</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Register successfully !
                </Alert>
            </Snackbar>
        </div>
    );
}

export default RenterRegister;
