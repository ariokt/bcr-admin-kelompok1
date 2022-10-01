import React, { useContext } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { DeleteCarContext } from "../../pages/Cars";
import Image from "../../assets/popup-hapus.svg";
import "./PopupHapus.css";

const PopupHapus = ({ idHapus }) => {

    const setIdHapus = useContext(DeleteCarContext);

    async function deleteCar(id) {
        try {
            await axios({
                method:"delete",
                url:`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`
            });
            setIdHapus("Data Berhasil Dihapus");
            window.scrollTo(0,0);
        } catch (error) {
            window.alert("Error "+error);
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteCar(idHapus); 
    }

    return (
        <div className="popup-hapus__background">
            <div className="popup-hapus">
                <img src={Image} alt=""/>
                <div className="popup-hapus__text">
                    <p>Menghapus Data Mobil</p>
                    <p>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
                </div>
                <div className="d-flex gap-3">
                    <Button onClick={handleDelete}>Ya</Button>
                    <Button variant="outline-primary" onClick={() => setIdHapus(null)}>Tidak</Button>
                </div>
            </div>
        </div>
    )
}

export default PopupHapus