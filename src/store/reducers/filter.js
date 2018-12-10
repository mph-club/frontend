import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    error: null,
    count: 0,
    vehicles: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case actionTypes.FILTER_FETCH_INFO_START:
            return updateObject(state, { loading: true, error: null, vehicles: null })
        case actionTypes.FILTER_FETCH_INFO_FAILED:
            return updateObject(state, { loading: false, error: action.error, vehicles: [] })
        case actionTypes.FILTER_FETCH_INFO_SUCCESS:
            return updateObject(state, {loading: false, error: null, count: action.data.count, vehicles: action.data.vehicles })
        default:
            return state
    }
}

export default reducer