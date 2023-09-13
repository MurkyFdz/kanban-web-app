import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    loading: false,
}


const errorReducer = (state = initialState.error, action) => {
    switch (action.type) {
        case actionTypes.ERROR:
            return action.error;

        default:
            return state;
    }
}


const loadingReducer = (state = initialState.loading, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return true;

        case actionTypes.LOADED:
        case actionTypes.ERROR:
            return false;


        default:
            return state;
    }
}


const reducer = combineReducers({
    error: errorReducer,
    loading: loadingReducer
})

export default reducer;