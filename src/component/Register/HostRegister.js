import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { hostRegister, login } from "../../actions/userAction";
import style from "./host.register.module.css";

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
        .min(999999999, "This input must have at least 10 characters"),
    password: yup.string().required().min(3, "Password is too weak"),
    email: yup.string().email().required(),
    fullName: yup.string().trim().ensure().required(),
    idNumber: yup
        .number()
        .positive()
        .integer()
        .required()
        .min(999999999, "This input must have at least 10 characters"),
});

// ----- Toast --
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// ----

function HostRegister() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema),
    });

    const dispatch = useDispatch();

    const history = useHistory();

    const userState = useSelector((state) => state.userState);

    const onSubmit = (data) => {
        try {
            dispatch(hostRegister(data));
            console.log(data);
            setOpen(true);
            // setTimeout(() => {
            //     history.push("/host/login");
            // }, 2000);
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
            {console.log(userState)}

            <div className={style.bg_opacity}>
                <div className={style.info_container}>
                    <div className={style.info}></div>
                </div>

                <div className={style.signup_container}>
                    <div className={style.form_container}>
                        <form
                            className={style.signup_form}
                            onSubmit={handleSubmit(onSubmit)}>
                            <h1>Create an account</h1>
                            <p>
                                Already have an account?{" "}
                                <a href="/host/login">Log in</a>
                            </p>
                            <label for="name">Full name</label>

                            <input
                                ref={register}
                                type="text"
                                placeholder="John Doe"
                                className={style.type_in}
                                id={style.name}
                                name="fullName"
                            />
                            {errors.fullName && (
                                <p>{errors.fullName.message}</p>
                            )}

                            <label for="id">ID number</label>
                            <input
                                ref={register}
                                type="text"
                                placeholder="123456789"
                                className={style.type_in}
                                id={style.id}
                                name="idNumber"
                            />
                            {errors.idNumber && (
                                <p>{errors.idNumber.message}</p>
                            )}

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

                            <label for="email">Email</label>
                            <input
                                ref={register}
                                type="text"
                                placeholder="abc@xyz.com"
                                className={style.type_in}
                                id={style.email}
                                name="email"
                            />
                            {errors.email && <p>{errors.email.message}</p>}

                            <label for="username">Username</label>
                            <input
                                ref={register}
                                type="text"
                                placeholder="Johndoe123"
                                className={style.type_in}
                                id={style.username}
                                name="username"
                            />
                            {errors.username && (
                                <p>{errors.username.message}</p>
                            )}

                            <label for="password">Password</label>
                            <input
                                ref={register}
                                type="password"
                                className={style.type_in}
                                id={style.password}
                                name="password"
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
                <Alert
                    onClose={handleClose}
                    severity={userState.isLoggedIn ? "success" : "error"}>
                    {userState.isLoggedIn
                        ? "Register successfully ! You need to await admin to accept !!!"
                        : "Invalid Input, you must input again !!!"}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default HostRegister;
