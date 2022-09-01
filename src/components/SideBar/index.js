import React from "react";
import "./SideBar.css"

const SideBar = ({ inside }) => {
    return (
        <div className="side-bar position-fixed d-flex flex-column gap-3">
            <p className="side-bar__title">{inside.name}</p>
            <div>
                {inside.menus.map((item, y) => (
                    <div key={y} className="side-bar__menus">{item}</div>
                ))}
            </div>
        </div>
    )
}

export default SideBar