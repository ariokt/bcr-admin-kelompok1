import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

import "./Cars.css"
import CarsContainer from "../../components/CarsContainer";

const Cars = () => {
    const value = {name: "CARS", menus: ["List Car"]};
    const breadCrumb = ["Cars", "List Car"];
    const carsOption = ["All", "2 - 4 people", "4 - 6 people", "6 - 8 people"];
    
    return (
        <div>
            <Navbar />
            <Header />
            <SideBar inside={value} />
            <div className="cars">
                <Breadcrumb items={breadCrumb} />
                <div className="cars__top d-flex justify-content-between">
                    <h2 style={{fontSize:"20px"}}>List Car</h2>
                    <button className="cars__add d-flex gap-2 align-items-center">
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Add New Car</p>
                    </button>
                </div>
                <div className="cars__option">
                    {carsOption.map((item, y) => <Button key={y} variant="outline-primary">{item}</Button>)}                  
                </div>
                <CarsContainer />
            </div>
        </div>
    )
}

export default Cars