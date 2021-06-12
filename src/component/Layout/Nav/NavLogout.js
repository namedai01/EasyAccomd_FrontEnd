import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./nav.module.css";

import logo from "../../../assets/nabar.png";

function NavLogout({ layout }) {
    const [navbg, setNavbg] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();

    const [layoutNav, setLayoutNav] = useState(layout);

    const handleScroll = () => {
        if (window.pageYOffset >= 100) {
            setNavbg({
                backgroundColor: "white",
                color: "black",
                boxShadow: "0 -4px 25px -5px rgba(0, 0, 0, 0.274)",
            });
        } else {
            setNavbg({
                boxShadow: "none",
                color: "white",
            });
        }
    };

    useEffect(() => {
        if (layout === "Home") {
            setNavbg({
                boxShadow: "none",
                color: "white",
            });
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            setNavbg({
                position: "fixed",
                backgroundColor: "white",
                color: "black",
                boxShadow: "0 -4px 25px -5px rgba(0, 0, 0, 0.274)",
            });
        }
    }, [layout]);

    return (
        <nav style={navbg} className={style.navbar}>
            <label className={style.burger} tabindex="0">
                <div className={style.line}></div>
                <div className={style.line}></div>
                <div className={style.line}></div>
            </label>
            <div className={style.logo}>
                <img src={logo} alt="" style={{ height: "8vh" }} />
            </div>
            <ul className={style.smallNav}>
                <li>
                    <NavLink
                        exact={true}
                        to="/"
                        activeClassName={style.selected}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact={true}
                        to="/posts"
                        activeClassName={style.selected}>
                        Listing
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        exact={true}
                        to="/#"
                        activeClassName={style.selected}
                        onClick={() => {
                            localStorage.clear();
                            dispatch({ type: "LOGOUT" });
                        }}>
                        Log out
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        exact={true}
                        to="/profile"
                        activeClassName={style.selected}>
                        Profile
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavLogout;
