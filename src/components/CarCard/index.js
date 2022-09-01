import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import "./CarCard.css"


const CarCard = ({ data }) => {

    return (
        <div className="car-card p-4 bg-white">
            <div className="car-card__detail">
                <img src={data.image} />
                <p>{data.name}</p>
                <div className="d-flex flex-column gap-2 mb-3">
                    <p>{data.price}</p>
                    <p>{data.category}</p>
                    <p>{data.updatedAt}</p>
                </div>
                <div className="d-flex gap-2">
                    <Button className="car-card__button d-flex gap-2 align-items-center justify-content-center" variant="outline-danger">
                        <FontAwesomeIcon icon={faTrash} />
                        <p style={{marginBottom:"0"}}>Delete</p>
                    </Button>
                    <Button className="car-card__button d-flex gap-2 align-items-center justify-content-center" variant="success">
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <p style={{marginBottom:"0"}}>Edit</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CarCard