import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
// import reducers
import { Listings } from './reducers/Listings';
import { Profiles } from './reducers/Profiles';


// import forms
import { Contact } from './forms';


export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            listings: Listings,
            profiles: Profiles,
            ...createForms({
                contact: Contact
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}