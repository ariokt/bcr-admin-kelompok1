import React, { useState } from "react";
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
    const [clickedValue, setClickedValue] = useState("");

    const handleOption = (e) => {
        e.preventDefault();
        let bValue = e.target.innerHTML;

        if (bValue === "All") {
            setClickedValue("All");
        } else if (bValue === "2 - 4 people") {
            setClickedValue("2 - 4 orang");
        } else if (bValue === "4 - 6 people") {
            setClickedValue("4 - 6 orang");
        } else if (bValue === "6 - 8 people") {
            setClickedValue("6 - 8 orang");
        }
    }
    
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
                    {carsOption.map((item, y) => <Button key={y} variant="outline-primary" onClick={handleOption}>{item}</Button>)}                  
                </div>
                <CarsContainer option={clickedValue} />
            </div>
        </div>
    )
}

export default Cars