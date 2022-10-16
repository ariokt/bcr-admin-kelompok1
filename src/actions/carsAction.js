import axios from "axios";

export const GET_CAR_LIST = "GET_CAR_LIST";
export const ADD_CAR = "ADD_CAR";
export const EDIT_CAR = "EDIT_CAR";

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
        });
        //get cars API
        axios({
            method: "GET",
            url: "https://bootcamp-rent-cars.herokuapp.com/admin/car",
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
                });
            })
            .catch((error) => {
                //gagal mengambil data
                dispatch({
                    type: GET_CAR_LIST,
                    payload:{
                        loading: false,
                        data:false,
                        errorMessage:error
                    }
                })
            })
    } 
}

export const addCar = (nama, kategori, harga, status, image, navigate) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: ADD_CAR,
            payload:{
                loading: true,
                data:false,
                errorMessage:false
            }
        })
        //add car API
        axios({
            method: "POST",
            url: "https://bootcamp-rent-cars.herokuapp.com/admin/car",
            timeout: 120000,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: {
                name: nama,
                category: kategori,
                price: harga,
                status: status,
                image: image
            }
        })
            .then((response) => {
                //api berhasil
                dispatch({
                    type: ADD_CAR,
                    payload:{
                        loading: false,
                        data: response.data,
                        errorMessage:false
                    }
                })
            })
                .then(() => navigate("/Cars", {state: "Data Berhasil Disimpan"}))
                .catch((error) => {
                    //gagal menambah data
                    dispatch({
                        type: ADD_CAR,
                        payload:{
                            loading: false,
                            data:false,
                            errorMessage:error
                        }
                    })
                })
    } 
}

export const editCar = (id, nama, kategori, harga, status, image, navigate) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: EDIT_CAR,
            payload:{
                loading: true,
                data:false,
                errorMessage:false
            }
        })
        //edit car API
        axios({
            method: "PUT",
            url: `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
            timeout: 120000,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: {
                name: nama,
                category: kategori,
                price: harga,
                status: status,
                image: image
            }
        })
            .then((response) => {
                //api berhasil
                dispatch({
                    type: EDIT_CAR,
                    payload:{
                        loading: false,
                        data: response.data,
                        errorMessage:false
                    }
                })
            })
                .then(() => navigate("/Cars", {state: "Data Berhasil Disimpan"}))
                .catch((error) => {
                    //gagal edit data
                    dispatch({
                        type: EDIT_CAR,
                        payload:{
                            loading: false,
                            data:false,
                            errorMessage:error
                        }
                    })
                })
    } 
}