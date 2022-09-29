import React, { useEffect, useState } from "react";
import axios from 'axios';
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import TableDashboard from "../../components/TableDashboard";
import "./Dashboard.css"
import dashboard1 from '../../assets/dashboard1.svg'
import DataVisual from "../../components/DataVisual"

const Dashboard = () => {
    const value = {name: "DASHBOARD", menus: ["Dashboard"]};
    const breadCrumb = [{name: "Dasboard", link: ""}, {name: "Dasboard"}];
    const [carData, setCarData] = useState([]);

    const getData = () => {
        axios
            .get("https://bootcamp-rent-car.herokuapp.com/admin/order")
            .then((respones) => {
                setCarData(respones.data)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Navbar />
            <Header />
            <SideBar inside={value} />
            <div className="dashboard">
                <Breadcrumb items={breadCrumb} />
                <DataVisual carData={carData}/>
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