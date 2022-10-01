import axios from "axios";
import Breadcrumb from "../../components/Breadcrumb";
import { editCar } from "../../actions/carsAction";
import { Button, Form } from "react-bootstrap";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./EditCar.css"


const EditCar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    
    const value = {name: "CARS", menus: ["List Car"]};
    const breadCrumb = [{name: "Cars", link: ""}, {name: "List Car", link: "/Cars"}, {name: "Edit Car"}];
    
    const [namaMobil, setNamaMobil] = useState("");
    const [harga, setHarga] = useState(0);
    const [kategori, setKategori] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState();

    useEffect(() => {
        async function getCar(id) {
            try {
                const res = await axios({
                    method: "get",
                    url: `https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`
                });
                setNamaMobil(res.data.name);
                setHarga(res.data.price);
                setKategori(res.data.category);
                setStatus(res.data.status);
                // setImage(res.data.image)
                
            } catch (error) {
                window.alert("Error "+error);
            }
        }
        getCar(id);
    }, [id])

    const handleEdit = (e) => {
        e.preventDefault();
        if (!image) {
            window.alert("Mohon upload ulang foto product terakhir!")
        } else {
            dispatch(editCar(id, namaMobil, kategori, harga, status, image ,navigate));
        }
    }

    return (
        <div>
            <Navbar />
            <Header />
            <SideBar inside={value} />
            <div className="edit-car">
            <Breadcrumb items={breadCrumb} />
                <h2>Edit Car</h2>
                <Form className="edit-car__form">
                    <div className="d-flex gap-1 align-items-center">
                        <p>Nama/Tipe Mobil<i style={{color:"red"}}>*</i></p>
                        <Form.Control type="text" placeholder="Input Nama/Tipe Mobil" value={namaMobil} onChange={e => setNamaMobil(e.target.value)}/>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <p>Harga<i style={{color:"red"}}>*</i></p>
                        <Form.Control type="text" placeholder="Input Harga Sewa Mobil" value={harga} onChange={e => setHarga(e.target.value)}/>
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
                <div className="edit-car__button d-flex gap-2">
                    <Button variant="outline-primary" onClick={() => navigate('/Cars')}>Cancel</Button>
                    <Button variant="primary" onClick={handleEdit}>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default EditCar