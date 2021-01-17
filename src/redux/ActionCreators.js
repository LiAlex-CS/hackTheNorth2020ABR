import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../environment/baseUrl';

function jsonToURI(json){ return encodeURIComponent(JSON.stringify(json)); }
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
        .catch(error => dispatch(listingsFailed(error.message)));
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


// sign up

export const requestSignUp = (creds) => {
    return {
        type: ActionTypes.SIGN_UP_REQUEST,
        creds
    }
}
  
export const receiveSignUp = (response) => {
    return {
        type: ActionTypes.SIGN_UP_SUCCESS,
        token: response.token
    }
}
  
export const signUpError = (message) => {
    return {
        type: ActionTypes.SIGN_UP_FAILURE,
        message
    }
}

export const signUpUser = (creds) => (dispatch) => {
    dispatch(requestSignUp(creds));
    const rawData = new URLSearchParams(Object.keys(creds).map(key=>[key,creds[key]]));
    console.log(rawData.toString());
    return fetch(baseUrl + 'register', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/x-www-form-urlencoded' 
        },
        body: rawData.toString()
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            alert('there has been an error during sign up');
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        // If signUp was successful
        localStorage.setItem('token', response.token);
        localStorage.setItem('creds', JSON.stringify(creds));
        // Dispatch the success action
        dispatch(receiveSignUp(response));
    })
    .catch(error => dispatch(signUpError(error.message)))
};

// log in
export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    dispatch(requestLogin(creds));
    const rawData = new URLSearchParams(Object.keys(creds).map(key=>[key,creds[key]]));

    return fetch(baseUrl + 'login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/x-www-form-urlencoded' 
        },
        body: rawData.toString()
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            alert('incorrect information');
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        // If login was successful
        localStorage.setItem('token', response.token);
        localStorage.setItem('creds', JSON.stringify(creds));
        // Dispatch the success action
        dispatch(receiveLogin(response));
    })
    .catch(error => dispatch(loginError(error.message)))
};


// Logging out

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout())
}