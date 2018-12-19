import * as actionTypes from './actionTypes';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import axios from '../../shared/axios';
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
                    dispatch(onAccountFechtInfoFailed(error))
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

                        dispatch(onAccountFechtInfoSucceed(userInfo))
                    });

                } else {
                    dispatch(onAccountFechtInfoFailed(error))
                }
            })

        }).catch(error => {
            dispatch(onAccountFechtInfoFailed(error))
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
const addPhoneFromAccountSucceed = () => {
    return {
        type: actionTypes.ACCOUNT_ADD_PHONE_SUCCEED
    }
}
const addPhoneFromAccountFailed = (error) => {
    return {
        type: actionTypes.ACCOUNT_ADD_PHONE_FAILED,
        error: error
    }
}
const addPhoneFromAccountStarted = () => {
    return {
        type: actionTypes.ACCOUNT_PHONE_VALIDATION_START
    }
}
export const onAddPhoneFromAccount = (phone) => {
    return dispatch => {

        dispatch(addPhoneFromAccountStarted())
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
                        dispatch(addPhoneFromAccountFailed(err))
                        return;
                    }
        
                    user.getAttributeVerificationCode('phone_number', {
                        onSuccess: () => {
                            dispatch(addPhoneFromAccountSucceed())
                        },
                        onFailure: (err) => {
                            dispatch(addPhoneFromAccountFailed(err))
                        },
                        inputVerificationCode: null
                    });
                });
            } else {
                dispatch(addPhoneFromAccountFailed({message: 'User no found'}))
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
                return;
            }

            if (session.isValid()) {
                user.changePassword(oldPassword, newPassword, (err, result) => {
                    if (err) {
                        dispatch(onAccountChangePasswordFailed(err))
                        return;
                    }
                    dispatch(onAccountChangePasswordSucceed(result))
                });
            }
        });
    }
}
