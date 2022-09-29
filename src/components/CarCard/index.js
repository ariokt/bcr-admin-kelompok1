import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import iconUser from "../../assets/fi_users.svg"
import iconTime from "../../assets/fi_clock.svg"
import { useNavigate } from "react-router-dom";
import { DeleteCarContext } from "../../pages/Cars";
import "./CarCard.css"


const CarCard = ({ data }) => {
    const navigate = useNavigate();
    const setIdHapus = useContext(DeleteCarContext);
    

    const handleMonth = (value) => {
        if (value === "01") {
            return "Jan"
        } else if (value === "02") {
            return "Feb"
        } else if (value === "03") {
            return "Mar"
        } else if (value === "04") {
            return "Apr"
        } else if (value === "05") {
            return "Mei"
        } else if (value === "06") {
            return "Jun"
        } else if (value === "07") {
            return "Jul"
        } else if (value === "08") {
            return "Aug"
        } else if (value === "09") {
            return "Sep"
        } else if (value === "10") {
            return "Oct"
        } else if (value === "11") {
            return "Nov"
        } else if (value === "12") {
            return "Des"
        }
    }

    const handleEdit = (id) => {
        navigate(`/Cars/Edit-Car-${id}`);
    } 

    const handleDelete = (id) => {
        setIdHapus(id);
    }

    return (
        <div className="car-card p-4 bg-white">
            <div className="car-card__detail">
                <img src={data.image} alt="gambar mobil"/>
                <p>{data.name}</p>
                <div className="d-flex flex-column gap-2 mb-3">
                    <p className="car-card__harga">Rp {Intl.NumberFormat('ID').format(data.price)} / hari</p>
                    <div className="car-card__kategori d-flex gap-1">
                        <img src={iconUser} alt=""/>
                        <p>{data.category}</p>
                    </div>
                    <div className="car-card__update d-flex gap-1">
                        <img src={iconTime} alt=""/>
                        <p>Updated at {data.updatedAt.substring(8,10)} {handleMonth(data.updatedAt.substring(5,7))} {data.updatedAt.substring(0,4)}, {data.updatedAt.substring(11,16)}</p>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <Button className="car-card__button d-flex gap-2 align-items-center justify-content-center" variant="outline-danger" onClick={() => handleDelete(data.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                        <p style={{marginBottom:"0"}}>Delete</p>
                    </Button>
                    <Button className="car-card__button d-flex gap-2 align-items-center justify-content-center" variant="success" onClick={() => handleEdit(data.id)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <p style={{marginBottom:"0"}}>Edit</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CarCard