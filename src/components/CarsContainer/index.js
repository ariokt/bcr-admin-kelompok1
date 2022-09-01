import React, { useEffect, useState } from "react";
import CarCard from "../CarCard";
import { getCars } from "../../actions/carsAction";
import { useDispatch, useSelector } from 'react-redux'
import "./CarsContainer.css"

const CarsContainer = () => {
    const { getListCarResult } = useSelector((state) => state.CarsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars());
    }, [])

    console.log(getListCarResult)


    return (
        <div className="cars-container">
            {getListCarResult && getListCarResult.map((item, y) => (
                <CarCard key={y} data={item} />
            ))}
        </div>
    )
}

export default CarsContainer