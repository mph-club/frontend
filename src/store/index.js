
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import SessionReducer from './Authentication/Session.js'
import authReducer from './reducers/auth';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    auth: authReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk))
);

export default store