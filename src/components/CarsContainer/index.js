import React, { useEffect } from "react";
import CarCard from "../CarCard";
import { getCars } from "../../actions/carsAction";
import { useDispatch, useSelector } from 'react-redux'
import "./CarsContainer.css"

const CarsContainer = ({ option, idHapus }) => {
    
    const { getListCarResult } = useSelector((state) => state.CarsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch]);

    useEffect(() => {
        if (typeof idHapus === "string") {
            dispatch(getCars());
        }
    }, [idHapus, dispatch])

    return (
        <div className="cars-container">
            {(getListCarResult && (option === "All" || option === "")) && getListCarResult.map((item, y) => (
                <CarCard key={y} data={item} />
            ))}
            {(getListCarResult && option === "2 - 4 orang") && getListCarResult.map((item, y) => {
                if (item.category === option) {
                    return (<CarCard key={y} data={item} />)
                } else {
                    return null;
                }
            })}
            {(getListCarResult && option === "4 - 6 orang") && getListCarResult.map((item, y) => {
                if (item.category === option) {
                    return (<CarCard key={y} data={item} />)
                } else {
                    return null;
                }
            })}
            {(getListCarResult && option === "6 - 8 orang") && getListCarResult.map((item, y) => {
                if (item.category === option) {
                    return (<CarCard key={y} data={item} />)
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default CarsContainer