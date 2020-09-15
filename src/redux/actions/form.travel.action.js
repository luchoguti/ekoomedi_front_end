import Axios from "axios";
import {url_host_back} from "../../service/util";

export const FORM_TRAVEL_SUCCESS = "FORM_TRAVEL_SUCCESS";
export const FORM_TRAVEL_FAILURE = "FORM_TRAVEL_FAILURE";

export const formTravelSuccess = (result) => {
    return {
        type: FORM_TRAVEL_SUCCESS,
        payload: result
    }
}

export const formTravelFailure = (error) => {
    return {
        type: FORM_TRAVEL_FAILURE,
        payload: error
    }
}

const fetchForm = (userData) =>{
    return async (dispatch) =>{
        const headers = {
            'Content-Type': 'application/json'
        }
        await Axios.post(`${url_host_back}user`,userData,{headers: headers}).then(response =>{
            dispatch(formTravelSuccess(response.data));
            if(response.data.error){
                dispatch(formTravelFailure(response.data.error));
            }
        })
        .catch(error =>{
            dispatch(formTravelFailure(error.message));
        });
    }   
}

export default fetchForm;