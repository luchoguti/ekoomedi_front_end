import {combineReducers} from 'redux';
import menu from './menu.reducer';
import formTravel from './form.travel.reducer'

const rootReducer = combineReducers({
    menu,formTravel
});

export default rootReducer;