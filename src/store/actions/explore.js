import axios from '../../shared/axios';

import * as actionTypes from './actionTypes';

export const onExploreFetchStart = () => {
    return {
        type: actionTypes.EXPLORE_FETCH_INFO_START 
    }
}

export const onExploreFetchInfoSucceed = (data) => {
    return {
        type: actionTypes.EXPLORE_FETCH_INFO_SUCCESS,
        data: data
    }
}

export const onExploreFetchInfoFailed = (error) => {
    return {
        type: actionTypes.EXPLORE_FETCH_INFO_FAILED,
        error: error
    }
}

export const onExploreFetchInfo = () => {
    return dispatch => {

        dispatch(onExploreFetchStart())

        axios.get('explore').then(response => {
            dispatch(onExploreFetchInfoSucceed(response.data.data))
        }).catch(error => {
            dispatch(onExploreFetchInfoFailed(error))
        })
    }
}