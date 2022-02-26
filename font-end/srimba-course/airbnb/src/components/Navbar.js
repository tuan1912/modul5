import React from "react";
import Logo from "../images/logo192.png";

export default function Navbar(){
    return (
        <nav>
            <img className="nav--logo" src={Logo} alt="logo" />
        </nav>
    )
}