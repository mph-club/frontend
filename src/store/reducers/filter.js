import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    error: null,
    count: 0,
    vehicles: null,
    filter: null,
    location: {
        lat: '',
        lon: ''
    },
    startDate: '',
    endDate: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FILTER_FETCH_INFO_START:
            return updateObject(state, { loading: true, error: null, vehicles: null })
        case actionTypes.FILTER_FETCH_INFO_FAILED:
            return updateObject(state, { loading: false, error: action.error, vehicles: [] })
        case actionTypes.FILTER_FETCH_INFO_SUCCESS:
            return updateObject(state, { loading: false, error: null, count: action.data.count, vehicles: action.data.vehicles })
        case actionTypes.FILTER_PROPERTIES_STORED:
            return updateObject(state, { filter: action.filter })
        case actionTypes.FILTER_SEARCH_TOUCHED:
            return updateObject(state, { location: action.location, startDate: action.startDate, endDate: action.endDate })
        default:
            return state
    }
}

export default reducer