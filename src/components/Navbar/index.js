import React from "react";
import "./Navbar.css"
import logo from "../../assets/logo.svg"
import dashboard from "../../assets/dashboard.svg"
import cars from "../../assets/cars.svg"
import Menu from "../Menu";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const menuOptions = [
        {
            img: dashboard,
            text: "Dashboard",
            link: "/"
        },
        {
            img: cars,
            text: "Cars",
            link: "/Cars"
        }
    ]

    return (
        <div className="navigation d-flex flex-column align-items-center position-fixed">
            <img src={logo} />
            <div>
                {menuOptions.map((option, y) => 
                <NavLink to={option.link} 
                  className={({ isActive }) => "menu d-flex flex-column align-items-center" + ( isActive ? " link-active" : "")}>
                  <Menu key={y} option={option} />
                </NavLink>)}
            </div>
        </div>
    )
}

export default Navbar