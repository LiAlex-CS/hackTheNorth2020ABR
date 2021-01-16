import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
// import reducers





// import forms



export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({

            ...createForms({
                
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}