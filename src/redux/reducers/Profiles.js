import * as ActionTypes from '../ActionTypes';

export const Profiles = (state = {
        isLoading: true,
        errMess: null,
        profiles: []
    }, action) =>{
    switch(action.type){
        case ActionTypes.ADD_PROFILES:
            return {...state, isLoading: false, errMess: null, profiles: action.payload}
        case ActionTypes.PROFILES_LOADING:
            return {...state, isLoading: true, errMess: null, profiles: []}
        case ActionTypes.PROFILES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, profiles: []}
        default:
            return state;
    }
}