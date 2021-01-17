import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
// import reducers
import { Listings } from './reducers/Listings';
import { Profiles } from './reducers/Profiles';
import { Auth } from './reducers/auth';

// import forms
import { Contact, SignUp } from './forms';


export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            listings: Listings,
            profiles: Profiles,
            auth: Auth,
            ...createForms({
                contact: Contact
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}