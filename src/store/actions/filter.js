import axios from 'axios';

import * as actionTypes from './actionTypes';

export const onFilterGetVehiclesStart = () => {
    return {
        type: actionTypes.FILTER_FETCH_INFO_START
    }
}

export const onFilterGetVehiclesFailed = (error) => {
    return {
        type: actionTypes.FILTER_FETCH_INFO_FAILED,
        error: error
    }
}

export const onFilterGetVehiclesSucceed = (data) => {
    return {
        type: actionTypes.FILTER_FETCH_INFO_SUCCESS,
        data: data
    }
}

export const onFilterGetVehicles = () => {
    return dispatch => {

        dispatch(onFilterGetVehiclesStart())

        axios.defaults.baseURL = 'http://mphclub.ngrok.io/api/v1/';
        axios.get('vehicles').then(response => {
            dispatch(onFilterGetVehiclesSucceed(response.data.data))
        }).catch(error => {
            dispatch(onFilterGetVehiclesFailed(error))
        })
    }
}