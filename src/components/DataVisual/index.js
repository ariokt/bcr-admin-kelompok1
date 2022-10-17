import React, { useEffect, useState } from 'react';
import BarChart from '../BarChart/index';
import './index.css'
import dashboard1 from '../../assets/dashboard1.svg'
import axios from 'axios';


const DataVisual = () => {
    
    const [filterData, setFilterData] = useState([]);
    const [filterOption, setFilterOption] = useState([]);
    const [parameterNow, setParameterNow] = useState("");

    useEffect(() => {
        getMonth();
        if (parameterNow === "") {
            setParameterNow(`${(new Date()).getMonth()+1} - ${(new Date()).getFullYear()}`);
            getData((new Date()).getMonth()+1, (new Date()).getFullYear())
        }
    }, [parameterNow])

    async function getData(month, year){
        let generalMonth = new Date(year, month, 1)
        let endDate = new Date(generalMonth.getFullYear(), generalMonth.getMonth() , 0)
        endDate = endDate.getDate()

        const myData = await axios({
            method: "get",
            url: `https://bootcamp-rent-cars.herokuapp.com/admin/order/reports?from=${year}-${month}-01&until=${year}-${month}-${endDate}`,
            headers:{
                accept: 'application/json',
                access_token: window.localStorage.getItem('token')
            }
        });

        let dataWName = []
        for(let i = 0; i < (myData.data).length; i++){
            let part = {
                date : i+1,
                orderCount: (myData.data)[i].orderCount
            }
            dataWName.push(part)
        }
        setFilterData(dataWName);
    }


    const getMonth = () => {
        let month = ["Januari", "February", "March", "April", "May", "June", "July","August", "September","October","November", "December"];

        let myOption = [];

        for(let p = 0; p < month.length; p++){
            myOption.push(`${month[p]} - ${(new Date()).getFullYear()}`);
        }
        
        setFilterOption(myOption);
    }

    if(filterData.length !== 0) {
        return (
            <div className='data-visual'>
                <p className='head-data-visual'><span> <img src={dashboard1} alt="" /> </span>Rented Car Data Visualization</p>
                <p className='data-mouth'>Month</p>
                <div className='d-flex'>
                    <select className="data-visual__select" aria-label="Default select example"  onChange={(e) => setParameterNow(e.target.value)}>
                        <option>Pilih Option</option>
                        {filterOption.map((option, y) => <option key={y} value={`${y+1} - ${(new Date()).getFullYear()}`}>{option}</option>)}
                    </select>
                    <button onClick={()=>  getData(parseInt(parameterNow.slice(0,2)), parseInt(parameterNow.slice(4,9)))} className='btn-filter-go'><p>Go</p></button>
                </div>
                <div>
                    <BarChart data= {filterData}/>
                </div>
            </div>
        );
    }
}

export default DataVisual;