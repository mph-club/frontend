import axios from '../../shared/axios';

import * as CONSTANTS from '../../shared/constants';
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

        let properties = JSON.parse(localStorage.getItem(CONSTANTS.FILTER_PROPERTIES))
        let type = null

        if ( properties ) {
            type = properties['type']
        }

        const url = (type && type !== 'all') ? 'vehicles?type=' + type : 'vehicles'

        axios.get(url).then(response => {
            dispatch(onFilterGetVehiclesSucceed(response.data.data))
        }).catch(error => {
            dispatch(onFilterGetVehiclesFailed(error))
        })
    }
}

export const onStoreFilterProperty = (key, value) => {
    
    let properties = JSON.parse(localStorage.getItem(CONSTANTS.FILTER_PROPERTIES)) || {}
        properties[key] = value
    
    localStorage.setItem(CONSTANTS.FILTER_PROPERTIES, JSON.stringify(properties))

    return {
        type: actionTypes.FILTER_PROPERTIES_STORED,
        filter: properties
    }
}