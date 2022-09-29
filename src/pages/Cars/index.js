import React, { createContext, useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import CarsContainer from "../../components/CarsContainer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "./Cars.css"
import PopupHapus from "../../components/PopupHapus";

export const DeleteCarContext = createContext(null);

const Cars = () => {
    const value = {name: "CARS", menus: ["List Car"]};
    const breadCrumb = [{name: "Cars", link: ""}, {name: "List Car"}];
    const carsOption = ["All", "2 - 4 people", "4 - 6 people", "6 - 8 people"];
    const [clickedValue, setClickedValue] = useState("");
    const [idHapus, setIdHapus] = useState(null);
    const [notifHapus, setNotifHapus] = useState(false);
    const [notifAdd, setNotifAdd] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    

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

    useEffect(()=> {
        if (typeof idHapus === "string") {
            setNotifHapus(true);
            setTimeout(() => {
                setNotifHapus(false);
            }, 3000)
        }
    }, [idHapus])

    useEffect(() => {
        if (location.state === "Data Berhasil Disimpan") {
            setNotifAdd(true);
            setTimeout(() => {
                setNotifAdd(false);
                navigate(".", { replace: true }); //edit state jadi null kembali setelah popup
            }, 3000)
        }
    }, [location])
    
    return (
        <DeleteCarContext.Provider value={setIdHapus}>
            {typeof idHapus === "number" && <PopupHapus idHapus={idHapus} />}
            <Navbar />
            <Header />
            <SideBar inside={value} />
            <div className="cars">
                {notifHapus && <div className="cars__notif--delete">{idHapus}</div>}
                {notifAdd && <div className="cars__notif--add">{location.state}</div>}
                <Breadcrumb items={breadCrumb} />
                <div className="cars__top d-flex justify-content-between">
                    <h2 style={{fontSize:"20px"}}>List Car</h2>
                    <button className="cars__add d-flex gap-2 align-items-center" onClick={() => navigate('/Cars/Add-New-Car')}>
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Add New Car</p>
                    </button>
                </div>
                <div className="cars__option">
                    {carsOption.map((item, y) => <Button key={y} variant="outline-primary" onClick={handleOption}>{item}</Button>)}                  
                </div>
                <CarsContainer idHapus={idHapus} option={clickedValue} />
            </div>
        </DeleteCarContext.Provider>
    )
}

export default Cars