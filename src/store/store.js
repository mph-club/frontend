
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import authReducer from './reducers/auth';
import accountReducer from './reducers/account';
import exploreReducer from './reducers/explore';
import filterReducer from './reducers/filter';
import carDetailReducer from './reducers/carDetail';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    account: accountReducer,
    explore: exploreReducer,
    filter: filterReducer,
    carDetails: carDetailReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk))
);

export default store