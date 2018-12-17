import * as actionTypes from './actionTypes';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import axios from 'axios';
import COGNITO from '../../config/cognitoConfigure';

const onAccountFechtInfoFailed = error => {
    return {
        type: actionTypes.ACCOUNT_FETCH_INFO_FAILED,
        error: error
    }
}
const onAccountFechtInfoSucceed = user => {
    return {
        type: actionTypes.ACCOUNT_FETCH_INFO_SUCCEED,
        user: user
    }
}
const onAccountFechtInfoStart = () => {
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
const validationPhoneFromAccountStart = () => {
    return {
        type: actionTypes.ACCOUNT_PHONE_VALIDATION_START
    }
}
const validationPhoneFromAccountFailed = (error) => {
    return {
        type: actionTypes.ACCOUNT_PHONE_VALIDATION_FAILED,
        error: error
    }
}
const validationPhoneFromAccountSucceed = () => {
    return {
        type: actionTypes.ACCOUNT_PHONE_VALIDATION_SUCCEED
    }
}
export const onValidatePhoneFromAccount = (code) => {
    return dispatch => {

        dispatch(validationPhoneFromAccountStart())
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


export const openChangePassword = (open) => {
    return {
        type: actionTypes.ACCOUNT_OPEN_CHANGE_PASSWORD,
        open: open
    }
}
const onAccountChangePasswordStart = () => {
    return {
        type: actionTypes.ACCOUNT_CHANGE_PASSWORD_START,
    }
}
const onAccountChangePasswordFailed = (error) => {
    return {
        type: actionTypes.ACCOUNT_CHANGE_PASSWORD_FAILED,
        error: error
    }
}
const onAccountChangePasswordSucceed = (result) => {
    return {
        type: actionTypes.ACCOUNT_CHANGE_PASSWORD_SUCCEED,
        result: result
    }
}
export const onAccountChangePassword = (oldPassword, newPassword) => {
    return dispatch => {

        dispatch(onAccountChangePasswordStart())

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
                user.changePassword(oldPassword, newPassword, (err, result) => {
                    if (err) {
                        dispatch(onAccountChangePasswordFailed(err))
                        return;
                    }
                    dispatch(onAccountChangePasswordSucceed(result))
                    console.log('call result: ' + result);
                });
            }
        });
    }
}
