import * as ActionTypes from '../ActionTypes';

export const Listings = (state = {
        isLoading: true,
        errMess: null,
        listings: []
    }, action) => {
    switch(action.type){
        case ActionTypes.ADD_LISTINGS:
            return{...state, isLoading: false, errMess: null, listings: action.payload}
        case ActionTypes.LISTINGS_LOADING:
            return{...state, isLoading: true, errMess: null, listings: []}
        case ActionTypes.LISTINGS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, listings: []}
        default:
            return state;
    }
}
