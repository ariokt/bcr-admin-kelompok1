import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../BarChart/Index';
import './index.css'

const DataVisual = () => {
    const [carData, setCarData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [bulanGet, setBulanGet] = useState();
    const [parameterNow, setParameterMow] = useState();
    const bulanGeneral = ["Januari", "February", "March", "April", "May", "June", "July","August", "September","October","November", "December"];

    const [newFilter, setNewFilter] = useState()
    console.log("______",bulanGet)
    const getData = () => {
        axios
            .get("https://bootcamp-rent-car.herokuapp.com/admin/order")
            .then((respones) => {
                setCarData(respones.data)
            })
    }
    
    useEffect(() => {
        getData()
    }, [])

    const dataFilter = (bulan, tahun) => {
        let generalDmouth = new Date(tahun, bulan, 1)
        let endDate = new Date(generalDmouth.getFullYear(), generalDmouth.getMonth() , 0)
        endDate = endDate.getDate()
        let shorDataFilter = [] 
        getMonth()

        //iterasi tanggal
        for(let i = 1; i <= endDate; i++){
            let ofTanggal = {
                name: i,
                summary: 0,
            }
            
            // cek bulan
            for(let p = 0; p < carData.length; p++){
                // console.log(carData[p])
                if (tahun > parseInt((carData[p].start_rent_at).substring(0,5)) && tahun < parseInt((carData[p].finish_rent_at).substring(0,5))) {
                    ofTanggal["summary"] = ofTanggal.summary + 1;
                } else if (parseInt((carData[p].start_rent_at).substring(0,5)) === tahun) {
                    if (parseInt((carData[p].start_rent_at).substring(0,5)) === parseInt((carData[p].finish_rent_at).substring(0,5))) {
                        if (bulan > parseInt((carData[p].start_rent_at).substring(5,7)) && bulan < parseInt((carData[p].finish_rent_at).substring(5,7))) {
                            ofTanggal["summary"] = ofTanggal.summary + 1;
                        } else if (bulan === parseInt((carData[p].start_rent_at).substring(5,7))) {
                            if (parseInt((carData[p].start_rent_at).substring(5,7)) === parseInt((carData[p].finish_rent_at).substring(5,7))) {
                                if (i >= parseInt((carData[p].start_rent_at).substring(8,10)) && i <= parseInt((carData[p].finish_rent_at).substring(8,10))) {
                                    ofTanggal["summary"] = ofTanggal.summary + 1;
                                }
                            } else {
                                if (i >= parseInt((carData[p].start_rent_at).substring(8,10))) {
                                    ofTanggal["summary"] = ofTanggal.summary + 1;
                                }
                            }
                        } else if (bulan === parseInt((carData[p].finish_rent_at).substring(5,7))) {
                            if (i <= parseInt((carData[p].finish_rent_at).substring(8,10))) {
                                ofTanggal["summary"] = ofTanggal.summary + 1;
                            }
                        }
                    } else {
                        if (bulan > parseInt((carData[p].start_rent_at).substring(5,7)) && bulan <= 12) {
                            ofTanggal["summary"] = ofTanggal.summary + 1;
                        } else if (bulan === parseInt((carData[p].start_rent_at).substring(5,7))) {
                            if (i >= parseInt((carData[p].start_rent_at).substring(8,10))) {
                                ofTanggal["summary"] = ofTanggal.summary + 1;
                            }
                        }
                    } 
                } else if (parseInt((carData[p].finish_rent_at).substring(0,5)) === tahun) {
                    if (bulan < parseInt((carData[p].finish_rent_at).substring(5,7)) && bulan >= 1) {
                        ofTanggal["summary"] = ofTanggal.summary + 1;
                    } else if (bulan === parseInt((carData[p].finish_rent_at).substring(5,7))) {
                        if (i <= parseInt((carData[p].finish_rent_at).substring(8,10))) {
                            ofTanggal["summary"] = ofTanggal.summary + 1;
                        }
                    }

                }
            }
            shorDataFilter.push(ofTanggal)
        }
        //error in here
        
        //setFilterData(filterData.push(shorDataFilter))
        filterData.push(shorDataFilter)
        // if(filterData != 1){
        //     setFilterData(filterData[1])
        // }

    }

    const getMonth = () => {
        let month = ["Januari", "February", "March", "April", "May", "June", "July","August", "September","October","November", "December"]
        let MyData = []

        for(let i= 0; i < carData.length; i++){
            if(MyData.includes(parseInt(carData[i].start_rent_at.substring(0,5)))){

            } else {
                MyData.push(parseInt(carData[i].start_rent_at.substring(0,5)))
            }

            if(MyData.includes(parseInt(carData[i].finish_rent_at.substring(0,5)))) {

            } else {
                MyData.push(parseInt(carData[i].finish_rent_at.substring(0,5)))
            }
        }

        let myMonth = []

        for(let i = 0; i < MyData.length; i ++){
            for(let p = 0; p < month.length; p++){
                myMonth.push(`${month[p]} - ${MyData[i]}`)
            }
        }

        console.log("THIS MYMONT", myMonth)
        
        bulanGet.push(myMonth)
        // setBulanGet(myMonth)  
        
    }

    const handleChanges = (bulan, tahun) => {
        filterData(bulan, tahun)
        setNewFilter(filterData[filterData.length -1])
    }


    if(carData.length != 0) {
        dataFilter(9, 2022);
        console.log(parseInt((new Date()).getMonth()), parseInt((new Date()).getFullYear()))

        return (<div className='data-visual'>
            <div className='head-data-visual'>
                <span></span>
                <p>Rented Car Data Visualization</p>
            </div>
            <div className='data-month'>
                <p>Mounth</p>
                <div className='filter-month'>
                    <div className="dropdown-filter">
                        <select class="form-select" aria-label="Default select example"  onChange={(e) => setParameterMow(e.target.value)}>
                            <option selected>{(new Date()).getMonth()} - {(new Date()).getFullYear()}</option>
                            {bulanGet.map((month) => 
                                {
                                    return <option value={month}>{month}</option>
                                }
                            )}
                            
                        </select>
                    </div>
                    <div onClick={()=> 
                        console.log("PASSSS")
                        // dataFilter(bulanGeneral.indexOf(parameterNow.split(" - ")[0]) + 1, parseInt(parameterNow.split(" - ")[1]))
                    } className='btn-filter-go'>
                        <p>Go</p>
                    </div>
                </div>
            </div>
            <div>
                {(newFilter.length != 0) ? <BarChart data= {newFilter}/> : <BarChart data= {filterData[1]}/>}
                {/* <BarChart data= {filterData[1]}/> */}
            </div>
        </div>)
        }

    
}

export default DataVisual;
