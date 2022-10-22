import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import dashboard1 from '../../assets/dashboard1.svg'
import DataVisual from "../../components/DataVisual"
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import TableDashboard from "../../components/TableDashboard";
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
                <DataVisual/>
                <div className="dashboard__table">
                    <h2>Dashboard</h2>
                    <p> <img src={dashboard1} alt="" /> List Order</p>
                    <TableDashboard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard