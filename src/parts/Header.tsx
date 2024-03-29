import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Logo } from "../images";

const Header = props => {
    const [active, setActive] = useState(false);
    const navigationToggle = () => {
        setActive(!active);
    }
    return(
        <div id="masthead" className={active ? "masthead js-active" : "masthead"}>
            <header className="masthead__header">
                <h1 className="masthead__header-logo">
                    <NavLink to="/">
                        LOGO
                    </NavLink>
                </h1>
                <div
                    onClick={navigationToggle}
                    id="menu"
                    className={active ? "masthead__header-menu meatballs js-active" : "masthead__header-menu meatballs"}
                >
                    <a className="balls" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <p>{active ? "CLOSE" : "MENU"}</p>
                </div>
            </header>
            <nav id="navigation" className={active ? "masthead__navigation js-active" : "masthead__navigation"}>
                <ul className="masthead__navigation-list">
                    <li className="masthead__navigation-item">
                        <NavLink onClick={navigationToggle} className="masthead__navigation-link" to="/about">About</NavLink>
                    </li>
                    <li className="masthead__navigation-item">
                        <NavLink onClick={navigationToggle} className="masthead__navigation-link" to="/projects">Projects</NavLink>
                    </li>
                    <li className="masthead__navigation-item">
                        <NavLink onClick={navigationToggle} className="masthead__navigation-link" to="/research">Research</NavLink>
                    </li>
                    <li className="masthead__navigation-item">
                        <NavLink onClick={navigationToggle} className="masthead__navigation-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Header;