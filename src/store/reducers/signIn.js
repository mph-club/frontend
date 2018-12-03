import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    result: null,
    error: null,
    loading: false,
    open: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNIN_OPEN: 
            return updateObject( state, { open: action.open })
        default:
            return state
    }
}

export default reducer