import { FORM_TRAVEL_SUCCESS, FORM_TRAVEL_FAILURE } from '../actions/form.travel.action';

const inicialState ={
    response_post:[],
    error: ""
}

const FormTravel = (state = inicialState, action)=>{
    switch (action.type){
        case FORM_TRAVEL_SUCCESS:{
            return{
                response_post:action.payload,
                error:[]
            }
        }
        case FORM_TRAVEL_FAILURE:{
            return{
                response_post:[],
                error: action.payload
            }
        }
        default: return state;
    }   
}

export default FormTravel;