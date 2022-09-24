import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import DataVisual from "../../components/DataVisual";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import "./Dashboard.css"

const Dashboard = () => {
    const value = {name: "DASHBOARD", menus: ["Dashboard"]};
    const breadCrumb = [{name: "Dasboard", link: ""}, {name: "Dasboard"}];
    return (
        <div>
            <Navbar />
            <Header />
            <SideBar inside={value} />
            <div className="dashboard">
                <Breadcrumb items={breadCrumb} />
                <DataVisual />
            </div>
        </div>
    )
}

export default Dashboard