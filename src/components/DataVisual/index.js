import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../BarChart/Index';
import './index.css'

const DataVisual = () => {
    const [carData, setCarData] = useState([]);             //data dari api
    const [filterData, setFilterData] = useState([]);       // filter dari api dari users
    const [monthData, setMonthData] = useState([]);         // untuk dropdown
    const [parameterNow, setParameterNow] = useState("");   // untuk show data bulan ini
    let generalMonth = ["Januari", "February", "March", "April", "May", "June", "July","August", "September","October","November", "December"]

    const getData = () => {
        axios
            .get("https://bootcamp-rent-car.herokuapp.com/admin/order")
            .then((respones) => {
                setCarData(respones.data)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    const dataFilter = (bulan, tahun) => {
        let thisMonth = new Date(tahun, bulan, 1)
        let endDate = new Date(thisMonth.getFullYear(), thisMonth.getMonth() , 0)
        endDate = endDate.getDate()
        console.log(endDate)

        let shorDataFilter = [] 
        // getMonth()

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
        setFilterData(shorDataFilter)
        // console.log(filterData)
        // if(filterData != 1){
        //     setFilterData(filterData[1])
        // }

    }


    // dataFilter(9,2022)
    console.log("AAAAAA")

    return(
        <div>

        </div>
    )
}
export default DataVisual;