import * as actionTypes from './actionTypes';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import axios from 'axios';
import COGNITO from '../../config/cognitoConfigure';

export const onAccountFechtInfoFailed = error => {
    return {
        type: actionTypes.ACCOUNT_FETCH_INFO_FAILED,
        error: error
    }
}
export const onAccountFechtInfoSucceed = user => {
    return {
        type: actionTypes.ACCOUNT_FETCH_INFO_SUCCEED,
        user: user
    }
}
export const onAccountFechtInfoStart = () => {
    return {
        type: actionTypes.ACCOUNT_FETCH_INFO_START
    }
}
export const onAccountFetchInfo = (accessToken) => {
    return dispatch => {

        dispatch(onAccountFechtInfoStart())

        axios.defaults.headers.common['Authorization'] = accessToken;
        axios.defaults.baseURL = 'http://mphclub.ngrok.io/api/v1/';

        axios.get('user').then(response => {
            dispatch(onAccountFechtInfoSucceed(response.data.data.user))
        }).catch(error => {
            dispatch(onAccountFechtInfoFailed(error))
        })
    }
}

export const openPhoneValidation = () => {
    return {
        type: actionTypes.ACCOUNT_OPEN_PHONE_VALIDATION
    }
}
export const onResendPhoneCodeFromAccount = () => {

    return dispatch => {

        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);

        var user = userPool.getCurrentUser();

        user.getSession((err, session) => {
            if (err) {
                console.log(err)
                return;
            }

            if (session.isValid()) {
                user.getAttributeVerificationCode('phone_number', {
                    onSuccess: () => {
                        dispatch({ type: actionTypes.ACCOUNT_PHONE_CODE_SENT })
                    },
                    onFailure: (err) => {
                        alert(err.message || JSON.stringify(err))
                    },
                    inputVerificationCode: null
                });
            }
        })
    }
}
export const validationPhoneFromAccountStart = () => {
    return {
        type: actionTypes.ACCOUNT_PHONE_VALIDATION_START
    }
}
export const validationPhoneFromAccountFailed = (error) => {
    return {
        type: actionTypes.ACCOUNT_PHONE_VALIDATION_FAILED,
        error: error
    }
}
export const validationPhoneFromAccountSucceed = () => {
    return {
        type: actionTypes.ACCOUNT_PHONE_VALIDATION_SUCCEED
    }
}
export const onValidatePhoneFromAccount = (code) => {
    return dispatch => {

        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);

        var user = userPool.getCurrentUser();

        user.getSession((err, session) => {
            if (err) {
                console.log(err)
                return;
            }

            if (session.isValid()) { 
                user.verifyAttribute('phone_number', code, {
                    onSuccess: () => {
                        dispatch(validationPhoneFromAccountSucceed())
                    },
                    onFailure: (err) => {
                        alert(err.message || JSON.stringify(err))
                        dispatch(validationPhoneFromAccountFailed(err))
                    }
                });
            } 
        });
    }
}