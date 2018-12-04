import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    error: null,
    loading: false,
    open: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNIN_OPEN:
            return updateObject(state, { open: action.open })
        case actionTypes.SIGNIN_START:
            return updateObject(state, { loading: true, error: null })
        case actionTypes.SIGNIN_FAIL:
            return updateObject(state, { loading: false, error: action.error })
        case actionTypes.SIGNIN_SUCCESS:
            return updateObject(state, { loading: false, error: null, open: false })
        default:
            return state
    }
}

export default reducer