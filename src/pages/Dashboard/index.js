import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import "./Dashboard.css"

const Dashboard = () => {
    const value = {name: "DASHBOARD", menus: ["Dashboard"]};
    const breadCrumb = ["Dasboard", "Dashboard"];
    return (
        <div>
            <Navbar />
            <Header />
            <SideBar inside={value} />
            <div className="dashboard">
                <Breadcrumb items={breadCrumb} />
            </div>
        </div>
    )
}

export default Dashboard