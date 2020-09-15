import {
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAILURE,
    FETCH_ITTEM_ACTIVE
} from "../actions/menu.action";

const inicialState ={
    list_menu:[],
    ittem_active:'',
    error: ''
}
const menu = (state = inicialState, action)=>{
    switch (action.type){
        case FETCH_MENU_SUCCESS:{
            return{
                list_menu: action.payload,
                ittem_active:action.payload['data'][0]['description_item_menu'],
                error:''
            }
        }
        case FETCH_MENU_FAILURE:{
            return{
                list_menu:[],
                ittem_active:'',
                error: action.payload
            }
        }
        case FETCH_ITTEM_ACTIVE:{
            return{
                ...state,
                ittem_active:action.payload,
                error: ''
            }
        }
        default: return state;
    }   
}

export default menu;