import axios from '../../shared/axios';

import * as actionTypes from './actionTypes';

export const onExploreFetchInfo = () => {
    return dispatch => {

        dispatch({
            type: actionTypes.EXPLORE_FETCH_INFO_START 
        })

        axios.get('explore').then(response => {
            dispatch({
                type: actionTypes.EXPLORE_FETCH_INFO_SUCCESS,
                data: response.data.data
            })
        }).catch(error => {
            dispatch({
                type: actionTypes.EXPLORE_FETCH_INFO_FAILED,
                error: error
            })
        })
    }
}