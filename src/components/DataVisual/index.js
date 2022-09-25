import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../BarChart/index';
import './index.css'

const DataVisual = () => {
    const [carData, setCarData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [filterOption, setFilterOption] = useState([]);
    const [parameterNow, setParameterNow] = useState("");

    const getData = () => {
        axios
            .get("https://bootcamp-rent-car.herokuapp.com/admin/order")
            .then((respones) => {
                setCarData(respones.data)
            })
    }
    
    useEffect(() => {
        getData();
        getMonth();
    }, [])

    const dataFilter = (bulan, tahun) => {
        let generalDmouth = new Date(tahun, bulan, 1)
        let endDate = new Date(generalDmouth.getFullYear(), generalDmouth.getMonth() , 0)
        endDate = endDate.getDate()
        let shorDataFilter = [] 

        //iterasi tanggal
        for(let i = 1; i <= endDate; i++){
            let ofTanggal = {
                name: i,
                summary: 0,
            }
            
            // cek bulan
            for(let p = 0; p < carData.length; p++){
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
        setFilterData(shorDataFilter);   
    }

    const getMonth = () => {
        let month = ["Januari", "February", "March", "April", "May", "June", "July","August", "September","October","November", "December"];

        let myOption = [];

        for(let p = 0; p < month.length; p++){
            myOption.push(`${month[p]} - ${(new Date()).getFullYear()}`);
        }
        
        setFilterOption(myOption);
    }

    // console.log('filter', filterData)
    // console.log('data', carData)

    if(carData.length !== 0) {
        return (
            <div className='data-visual'>
                <div className='head-data-visual'>
                    <span></span>
                    <p>Rented Car Data Visualization</p>
                </div>
                <div className='data-mouth'>
                    <p>Month</p>
                </div>
                <div className='d-flex'>
                    <select className="form-select" aria-label="Default select example"  onChange={(e) => setParameterNow(e.target.value)}>
                        <option>Pilih Option</option>
                        {filterOption.map((option, y) => <option key={y} value={`${y+1} - ${(new Date()).getFullYear()}`}>{option}</option>)}
                    </select>
                    <button onClick={()=>  (dataFilter(parseInt(parameterNow.slice(0,2)), parseInt(parameterNow.slice(4,9))),
                        console.log(parameterNow.slice(0,2), parameterNow.slice(4,9)))} className='btn-filter-go'><p>Go</p></button>
                </div>
                <div>
                    <BarChart data= {filterData}/>
                </div>
            </div>
        );
    }
}

export default DataVisual;