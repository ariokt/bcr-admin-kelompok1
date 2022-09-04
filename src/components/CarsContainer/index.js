import React, { useEffect, useState } from "react";
import CarCard from "../CarCard";
import { getCars } from "../../actions/carsAction";
import { useDispatch, useSelector } from 'react-redux'
import "./CarsContainer.css"

const CarsContainer = ({ option }) => {
    
    const { getListCarResult } = useSelector((state) => state.CarsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars());
    }, [])

    return (
        <div className="cars-container">
            {(getListCarResult && (option === "All" || option === "")) && getListCarResult.map((item, y) => (
                <CarCard key={y} data={item} />
            ))}
            {(getListCarResult && option === "2 - 4 orang") && getListCarResult.map((item, y) => {
                if (item.category === option) {
                    return (<CarCard key={y} data={item} />)
                }
            })}
            {(getListCarResult && option === "4 - 6 orang") && getListCarResult.map((item, y) => {
                if (item.category === option) {
                    return (<CarCard key={y} data={item} />)
                }
            })}
            {(getListCarResult && option === "6 - 8 orang") && getListCarResult.map((item, y) => {
                if (item.category === option) {
                    return (<CarCard key={y} data={item} />)
                }
            })}
        </div>
    )
}

export default CarsContainer