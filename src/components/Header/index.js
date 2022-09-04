import React from "react";
import logo from "../../assets/logoipsum.svg"
import Search from "../Search";
import User from "../User";
import "./Header.css"

const Header = () => {
    return (
        <div className="header position-fixed d-flex flex-row justify-content-between">
            <img className="header__logo" src={logo} />
            <div className="d-flex flex-row gap-4"> 
                <Search />
                <User />
            </div>
        </div>
    )
}

export default Header