import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    error: null,
    vehicle: null,
    carSelectedId: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CAR_DETAIL_ID_STORED:
            return updateObject(state, { carSelectedId: action.id })
        case actionTypes.CAR_DETAIL_FETCH_INFO_START:
            return updateObject(state, { loading: true, error: null, carSelectedId: action.carSelectedId })
        case actionTypes.CAR_DETAIL_FETCH_INFO_FAILED:
            return updateObject(state, { loading: false, error: action.error, data: null })
        case actionTypes.CAR_DETAIL_FETCH_INFO_SUCCESS:
            return updateObject(state, { loading: false, error: null, vehicle: action.data })
        default:
            return state
    }
}

export default reducer