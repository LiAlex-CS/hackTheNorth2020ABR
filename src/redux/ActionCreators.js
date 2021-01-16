import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../environment/baseUrl';

// Listings

export const addListings = (listings) =>({
    type: ActionTypes.ADD_LISTINGS,
    payload: listings
});

export const listingsLoading = () =>({
    type: ActionTypes.LISTINGS_LOADING,
});

export const listingsFailed = (errmess) =>({
    type: ActionTypes.LISTINGS_FAILED,
    payload: errmess
});

// Profiles

export const addProfiles = (profiles) =>({
    type: ActionTypes.ADD_PROFILES,
    payload: profiles
});

export const profilesLoading = () =>({
    type: ActionTypes.PROFILES_LOADING,
});

export const profilesFailed = (errmess) =>({
    type: ActionTypes.PROFILES_FAILED,
    payload: errmess
});

// fetching for Listings

export const fetchListings = () => (dispatch) => {
    return fetch(baseUrl + 'listings')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(listings => dispatch(addListings(listings)))
        .catch(error => dispatch(ListingsFailed(error.message)));
}

// fetching for Profiles

export const fetchProfiles = () => (dispatch) => {
    return fetch(baseUrl + 'profiles')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(profiles => dispatch(addProfiles(profiles)))
        .catch(error => dispatch(profilesFailed(error.message)));
}
