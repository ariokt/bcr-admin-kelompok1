import axios from "axios";

export const GET_CAR_LIST = "GET_CAR_LIST";

export const getCars = () => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_CAR_LIST,
            payload:{
                loading: true,
                data:false,
                errorMessage:false
            }
        })
        //get API
        axios({
            method: "GET",
            url: "https://bootcamp-rent-car.herokuapp.com/admin/car",
            timeout: 120000,
        })
            .then((response) => {
                //api berhasil
                dispatch({
                    type: GET_CAR_LIST,
                    payload:{
                        loading: false,
                        data: response.data,
                        errorMessage:false
                    }
                })
            })
            .catch((error) => {
                //gagal mengambil data
                dispatch({
                    type: GET_CAR_LIST,
                    payload:{
                        loading: false,
                        data:false,
                        errorMessage:true
                    }
                })
            })
    } 
}