import * as actionTypes from './actionTypes';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import axios from '../../shared/axios';
import COGNITO from '../../config/cognitoConfigure';

export const onAccountFetchInfo = (accessToken) => {
    return dispatch => {

        dispatch({
            type: actionTypes.ACCOUNT_FETCH_INFO_START
        })

        axios.defaults.headers.common['Authorization'] = accessToken;

        axios.get('user').then(response => {

            let userInfo = {}

            var poolData = {
                UserPoolId: COGNITO.CONFIG.USER_POOL,
                ClientId: COGNITO.CONFIG.CLIENT_ID
            };

            var userPool = new CognitoUserPool(poolData);

            var user = userPool.getCurrentUser();

            user.getSession((error, session) => {
                if (error) {
                    dispatch({
                        type: actionTypes.ACCOUNT_FETCH_INFO_FAILED,
                        error: error
                    })
                    return;
                }

                if (session.isValid()) {
                    user.getUserAttributes((err, attributes) => {
                        if (err) {
                            return;
                        }

                        let result = {}

                        attributes.forEach(attribute => {
                            return result[attribute.getName()] = attribute.getValue()
                        })

                        userInfo = {
                            ...response.data.data.user,
                            email: {
                                value: result.email,
                                email_verified: result.email_verified
                            },
                            phone: {
                                value: result.phone_number ? result.phone_number : null,
                                phone_verified: result.phone_number_verified ? result.phone_number_verified : false
                            }
                        }

                        dispatch({
                            type: actionTypes.ACCOUNT_FETCH_INFO_SUCCEED,
                            user: userInfo
                        })
                    });

                } else {
                    dispatch({
                        type: actionTypes.ACCOUNT_FETCH_INFO_FAILED,
                        error: error
                    })
                }
            })

        }).catch(error => {
            dispatch({
                type: actionTypes.ACCOUNT_FETCH_INFO_FAILED,
                error: error
            })
        })
    }
}

///Phone actions
export const openPhoneValidation = (open, phoneAction) => {
    return {
        type: actionTypes.ACCOUNT_OPEN_PHONE_VALIDATION,
        open: open,
        addingNumber: phoneAction !== 'Validate'
    }
}
export const onAccountChangePhoneNumber = () => {
    return {
        type: actionTypes.ACCOUNT_CHANGE_PHONE_NUMBER
    }
}
export const onAddPhoneFromAccount = (phone) => {
    return dispatch => {

        dispatch({
            type: actionTypes.ACCOUNT_PHONE_VALIDATION_START
        })
        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);

        const phoneNumber = phone.replace(/\D/g, '');

        var attributeItem = {
            Name: 'phone_number',
            Value: '+1' + phoneNumber
        };

        var attribute = new CognitoUserAttribute(attributeItem);

        var attributeList = [];
        attributeList.push(attribute);

        var user = userPool.getCurrentUser();

        user.getSession((err, session) => {
            if (err) {
                return;
            }

            if (session.isValid()) { 
                user.updateAttributes(attributeList, (err, result) => {
                    if (err) {
                        dispatch({
                            type: actionTypes.ACCOUNT_ADD_PHONE_FAILED,
                            error: err
                        })
                        return;
                    }
        
                    user.getAttributeVerificationCode('phone_number', {
                        onSuccess: () => {
                            dispatch({
                                type: actionTypes.ACCOUNT_ADD_PHONE_SUCCEED
                            })
                        },
                        onFailure: (err) => {
                            dispatch({
                                type: actionTypes.ACCOUNT_ADD_PHONE_FAILED,
                                error: err
                            })
                        },
                        inputVerificationCode: null
                    });
                });
            } else {
                dispatch({
                    type: actionTypes.ACCOUNT_ADD_PHONE_FAILED,
                    error: {message: 'User no found'}
                })
            }
        })
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
export const onValidatePhoneFromAccount = (code) => {
    return dispatch => {

        dispatch({
            type: actionTypes.ACCOUNT_PHONE_VALIDATION_START
        })
        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);

        var user = userPool.getCurrentUser();

        user.getSession((err, session) => {
            if (err) {
                return;
            }

            if (session.isValid()) {
                user.verifyAttribute('phone_number', code, {
                    onSuccess: () => {
                        dispatch({
                            type: actionTypes.ACCOUNT_PHONE_VALIDATION_SUCCEED
                        })
                    },
                    onFailure: (err) => {
                        alert(err.message || JSON.stringify(err))
                        dispatch({
                            type: actionTypes.ACCOUNT_PHONE_VALIDATION_FAILED,
                            error: err
                        })
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
export const onAccountChangePassword = (oldPassword, newPassword) => {
    return dispatch => {

        dispatch({
            type: actionTypes.ACCOUNT_CHANGE_PASSWORD_START,
        })

        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);

        var user = userPool.getCurrentUser();

        user.getSession((err, session) => {
            if (err) {
                return;
            }

            if (session.isValid()) {
                user.changePassword(oldPassword, newPassword, (err, result) => {
                    if (err) {
                        dispatch({
                            type: actionTypes.ACCOUNT_CHANGE_PASSWORD_FAILED,
                            error: err
                        })
                        return;
                    }
                    dispatch({
                        type: actionTypes.ACCOUNT_CHANGE_PASSWORD_SUCCEED,
                        result: result
                    })
                });
            }
        });
    }
}
