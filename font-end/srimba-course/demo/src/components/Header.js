import React from "react";
import reactLogo from  "../images/be-strong-close-up-message-handwritten-white-background-169511221.jpg";

function Header() {
    return (
        <header>
            <nav className="nav">
            <img src={reactLogo} alt="logo" className="nav-logo" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </header>
    )
}
export default Header;