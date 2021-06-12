import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./nav.module.css";
import NavLogin from "./NavLogin";
import NavLogout from "./NavLogout";
import NavAdmin from "./NavAdmin";

function Nav({ layout }) {
    const userState = useSelector((state) => state.userState);
    return (
        <div>
            {/* <NavLogin /> */}
            {/* {console.log(userState.user)} */}
            {!userState.isLoggedIn && <NavLogin />}
            {localStorage.getItem("role") === null && <NavLogin />}
            {localStorage.getItem("role") === "renter" && <NavLogout />}
            {localStorage.getItem("role") === "host" && <NavLogout />}
            {localStorage.getItem("role") === "admin" && <NavAdmin />}
        </div>
    );
}

export default Nav;
