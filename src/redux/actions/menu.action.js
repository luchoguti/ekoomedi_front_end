import Axios from "axios";
import {url_host_back} from "../../service/util";

export const FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS";
export const FETCH_MENU_FAILURE = "FETCH_MENU_FAILURE";
export const FETCH_ITTEM_ACTIVE = "FETCH_ITTEM_ACTIVE";


export const fetchMenuSuccess = (listMenu) => {
    return {
        type: FETCH_MENU_SUCCESS,
        payload: listMenu
    }
}
export const fetchIttemActive = (ittemActive) => {
    return {
        type: FETCH_ITTEM_ACTIVE,
        payload: ittemActive
    }
}
export const fetchMenuFailure = (error) => {
    return {
        type: FETCH_MENU_FAILURE,
        payload: error
    }
}
const fetchMenu = () =>{
    return async (dispatch) =>{
        await Axios.get(`${url_host_back}item_menu`).then(response =>{
            dispatch(fetchMenuSuccess(response.data));
        })
        .catch(error =>{
            dispatch(fetchMenuFailure('No se encontraron items del menu'));
        });
    }   
}
export default fetchMenu;