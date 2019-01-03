import axios from '../../shared/axios';

import * as actionTypes from './actionTypes';

export const onStoreCardIdSelected = (carSelectedId) => {
    localStorage.setItem('carSelectedId',carSelectedId)

    return {
        type: actionTypes.CAR_DETAIL_ID_STORED,
        id: carSelectedId
    }
}

export const onCarDetailFetchInfo = () => {
    return dispatch => {

        const carId = localStorage.getItem('carSelectedId')

        dispatch({
            type: actionTypes.CAR_DETAIL_FETCH_INFO_START,
            carSelectedId: carId
        })

        axios.get('vehicles/' + carId).then( response => {
            dispatch({
                type: actionTypes.CAR_DETAIL_FETCH_INFO_SUCCESS,
                data: response.data.data.vehicle
            })
        }).catch( error => {
            dispatch({
                type: actionTypes.CAR_DETAIL_FETCH_INFO_FAILED,
                error: error
            })
        })
    }
}