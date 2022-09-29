import { GET_CAR_LIST, ADD_CAR, EDIT_CAR } from "../../actions/carsAction";

const initialState = {
    getListCarResult: false,
    getListCarLoading: false,
    getListCarError: false,

    addCarResult: false,
    addCarLoading: false,
    addCarError: false,

    editCarResult: false,
    editCarLoading: false,
    editCarError: false
}

const cars = (state = initialState, action) => {
    switch(action.type) {
        case GET_CAR_LIST:
            return {
                ...state,
                getListCarResult : action.payload.data,
                getListCarLoading : action.payload.loading,
                getListCarError : action.payload.errorMessage,
            }
        case ADD_CAR:
            return {
                ...state,
                addCarResult : action.payload.data,
                addCarLoading : action.payload.loading,
                addCarError : action.payload.errorMessage,
            }
        case EDIT_CAR:
            return {
                ...state,
                editCarResult: action.payload.data,
                editCarLoading: action.payload.loading,
                editCarError: action.payload.errorMessage,
            }
        default:
            return state;
    }
}

export default cars
