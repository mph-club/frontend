import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    error: null,
    data: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EXPLORE_FETCH_INFO_START:
            return updateObject( state, { loading: true, error: null })
        case actionTypes.EXPLORE_FETCH_INFO_FAILED:
            return updateObject(state, { loading: false, error: action.error })
        case actionTypes.EXPLORE_FETCH_INFO_SUCCESS:
            return updateObject(state, { loading: false, error: null, data: action.data })
        default: 
            return state
    }
}

export default reducer