import axios from 'axios';

import * as actionTypes from './actionTypes';

export const onCarDetailFetchStart = (carId) => {
    return {
        type: actionTypes.CAR_DETAIL_FETCH_INFO_START,
        carSelectedId: carId
    }
}

export const onCarDetailFetchInfoFailed = (error) => {
    return {
        type: actionTypes.CAR_DETAIL_FETCH_INFO_FAILED,
        error: error
    }
}

export const onCarDetailFetchInfoSucceed = (data) => {
    return {
        type: actionTypes.CAR_DETAIL_FETCH_INFO_SUCCESS,
        data: data
    }
}

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

        dispatch(onCarDetailFetchStart(carId))

        axios.defaults.baseURL = 'http://mphclub.ngrok.io/api/v1/vehicles/';
        axios.get(carId).then( response => {
            dispatch(onCarDetailFetchInfoSucceed(response.data.data.vehicle))
        }).catch( error => {
            dispatch(onCarDetailFetchInfoFailed(error))
        })
    }
}