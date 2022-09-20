import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../BarChart/Index';
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
            for(let p = 0; p < 2; p++){
                if(parseInt((carData[p].start_rent_at).substring(0,5)) <= tahun <= parseInt((carData[p].finish_rent_at).substring(0,5))){
                    //Cek TahunData == tahunFilter:
                    if(parseInt((carData[p].start_rent_at).substring(0,5)) == tahun 
                        && parseInt((carData[p].finish_rent_at).substring(0,5)) == tahun){

                                if(parseInt((carData[p].start_rent_at).substring(5,7)) <= parseInt(bulan) && parseInt(bulan) <= parseInt((carData[p].finish_rent_at).substring(5,7))){
                                    console.log(parseInt((carData[p].start_rent_at).substring(5,7)), "_____", bulan, "______", parseInt((carData[p].finish_rent_at).substring(5,7)))
                                    console.log(carData[p])
                                    if(parseInt((carData[p].start_rent_at).substring(5,7)) == bulan && parseInt((carData[p].finish_rent_at).substring(5,7)) == bulan){
                                        if(parseInt((carData[p].start_rent_at).substring(8,10)) <= i){
                                            console.log(parseInt((carData[p].start_rent_at).substring(8,10)))
                                            ofTanggal['summary'] = ofTanggal.summary + 1;
                                        } else if(parseInt((carData[p].finish_rent_at).substring(8,10)) >= i){
                                            ofTanggal['summary'] = ofTanggal.summary + 1;
                                        }
                                    } else if(parseInt((carData[p].finish_rent_at).substring(5,7)) == bulan){
                                        if(parseInt((carData[p].finish_rent_at).substring(8,10)) >= i){
                                            ofTanggal['summary'] = ofTanggal.summary + 1;
                                        }
                                    } else {
                                            ofTanggal['summary'] = ofTanggal.summary + 1;
                                    }
                                }
                    } else if(parseInt((carData[p].finish_rent_at).substring(0,5))){

                    } else {

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
                
            }
            shorDataFilter.push(ofTanggal)
        }
        //error in here
        
        filterData.push(shorDataFilter)
        console.log("FILTER", filterData)
    }

    if(carData.length != 0) {
        dataFilter(9, 2022);

        return (<div className='data-visual'>
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
        </div>)
        }

    
}

export default DataVisual;
