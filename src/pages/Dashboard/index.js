import React, { useEffect, useState } from "react";
import axios from 'axios';
import Breadcrumb from "../../components/Breadcrumb";
import DataVisual from "../../components/DataVisual";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import "./Dashboard.css"
import OrderTable from "../../components/OrderTable";

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
                <OrderTable />
            </div>
        </div>
    )
}

export default Dashboard