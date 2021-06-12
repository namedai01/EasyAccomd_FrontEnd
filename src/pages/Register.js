import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import Footer from "../component/Layout/Footer/Footer";
import Nav from "../component/Layout/Nav/Nav";
import HostRegister from "../component/Register/HostRegister";
import RenterRegister from "../component/Register/RenterRegister";

function Register({ match }) {

    console.log(match);
    return (
        <div>
            <Nav />
            {match.path === "/host/register" && <HostRegister />}
            {match.path === "/renter/register" && <RenterRegister />}
            <Footer />
        </div>
    );
}

export default Register;
