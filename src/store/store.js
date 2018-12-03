
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import signInReducer from './reducers/signIn';
import signUpReducer from './reducers/signUp';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk))
);

export default store