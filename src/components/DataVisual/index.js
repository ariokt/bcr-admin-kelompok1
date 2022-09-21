import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../BarChart/index';
import './index.css'

const DataVisual = () => {
    const [carData, setCarData] = useState([]);
    const [filterData, setFilterData] = useState([]);
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

        //iterasi tanggal
        for(let i = 1; i <= endDate; i++){
            let ofTanggal = {
                name: i,
                summary: 0,
            }
            
            // cek bulan
            for(let p = 0; p < carData.length; p++){
                console.log(carData[p])
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
                // if(parseInt((carData[p].start_rent_at).substring(0,5)) == tahun && parseInt((carData[p].finish_rent_at).substring(0,5)) == tahun){
                //     if(parseInt((carData[p].start_rent_at).substring(5,7)) <= bulan <= parseInt((carData[p].finish_rent_at).substring(5,7))){
                //         console.log(p, " INI BULAN START",parseInt((carData[p].start_rent_at).substring(5,7)))
                //         console.log(p, "INI BULAN MINTA", bulan)
                //         if(parseInt((carData[p].start_rent_at).substring(5,7)) == bulan){
                //             if(parseInt((carData[p].start_rent_at).substring(8,10)) <= i){
                //                 console.log("TANGGAL", i, "DETAIL", carData[p].start_rent_at)
                //                 ofTanggal['summary'] = ofTanggal.summary + 1;
                //             }
                //         } else if(parseInt((carData[p].finish_rent_at).substring(5,7)) == bulan){
                //             if(parseInt((carData[p].finish_rent_at).substring(8,10)) >= i){
                //                 ofTanggal["summary"] = ofTanggal.summary + 1;
                //             }
                //         } else{
                //             ofTanggal["summary"] = ofTanggal.summary + 1;
                //         }
                //     }
                
            
            shorDataFilter.push(ofTanggal)
        }
        //error in here
        
        filterData.push(shorDataFilter)
        
    }

    if(carData.length != 0) {
        dataFilter(9, 2022);

        return (
            <div className='data-visual'>
                <div className='head-data-visual'>
                    <span></span>
                    <p>Rented Car Data Visualization</p>
                </div>
                <div className='data-mouth'>
                    <p>Mounth</p>

                </div>
                <div>
                    <BarChart data= {filterData[1]}/>
                </div>
            </div>
        );
    }
}

export default DataVisual;