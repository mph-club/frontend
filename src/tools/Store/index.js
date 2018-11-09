import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import SessionReducer from './Authentication/Session.js'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ 
    SessionReducer 
  }),
  composeEnhancer(applyMiddleware(thunk))
);

export default store