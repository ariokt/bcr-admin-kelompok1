import React, { useState } from "react";
import { addCar } from "../../actions/carsAction";
import Breadcrumb from "../../components/Breadcrumb";
import { Button, Form } from "react-bootstrap";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AddNewCar.css"

const AddNewCar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const value = {name: "CARS", menus: ["List Car"]};
    const breadCrumb = [{name: "Cars", link: ""}, {name: "List Car", link: "/Cars"}, {name: "Add New Car"}];

    const [namaMobil, setNamaMobil] = useState("");
    const [harga, setHarga] = useState(0);
    const [kategori, setKategori] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState({});
    
    const handleSave = (e) => {
        e.preventDefault();
        if (namaMobil && harga && kategori && status && image) {
            dispatch(addCar(namaMobil, kategori, harga, status, image ,navigate));
        } else {
            window.alert("Data belum lengkah, mohon diperiksa!");
        }
    }

    return (
        <div>
            <Navbar />
            <Header />
            <SideBar inside={value} />
            <div className="add-car">
                <Breadcrumb items={breadCrumb} />
                <h2>Add New Car</h2>
                <Form className="add-car__form">
                    <div className="d-flex gap-1 align-items-center">
                        <p>Nama/Tipe Mobil<i style={{color:"red"}}>*</i></p>
                        <Form.Control type="text" placeholder="Input Nama/Tipe Mobil" onChange={e => setNamaMobil(e.target.value)}/>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <p>Harga<i style={{color:"red"}}>*</i></p>
                        <Form.Control type="text" placeholder="Input Harga Sewa Mobil" onChange={e => setHarga(e.target.value)}/>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <p>Foto<i style={{color:"red"}}>*</i></p>
                        <Form.Control type="file" accept="image/png, image/jpeg" onChange={e => setImage(e.target.files[0])}/>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <p>Kategori<i style={{color:"red"}}>*</i></p>
                        <Form.Select aria-label="Default select example" value={kategori} onChange={e => setKategori(e.target.value)}>
                            <option value="">Pilih Kategori Mobil</option>
                            <option value="2 - 4 orang">2 - 4 orang</option>
                            <option value="4 - 6 orang">4 - 6 orang</option>
                            <option value="6 - 8 orang">6 - 8 orang</option>
                        </Form.Select>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <p>Status<i style={{color:"red"}}>*</i></p>
                        <Form.Select aria-label="Default select example" value={status} onChange={e => setStatus(e.target.value)}>
                            <option value="">Sedang Disewa?</option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </Form.Select>
                    </div>
                </Form>
                <div className="add-car__button d-flex gap-2">
                    <Button variant="outline-primary" onClick={() => navigate('/Cars')}>Cancel</Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default AddNewCar