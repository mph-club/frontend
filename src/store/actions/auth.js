import COGNITO from '../../config/cognitoConfigure';
import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails } from 'amazon-cognito-identity-js';

import * as actionTypes from './actionTypes';

//GLOBAL ACTION CREATORS
export const openNavDrawer = (open) => {
    return {
        type: actionTypes.OPEN_NAV_DRAWER,
        open: open
    }
}

///SIGN IN ACTION CREATORS
export const openSignIn = (open) => {
    return {
        type: actionTypes.SIGNIN_OPEN,
        open: open
    };
};
export const onSignIn = (email, password) => {
    return dispatch => {

        dispatch({
            type: actionTypes.SIGNIN_START
        });

        var authenticationData = {
            Username: email,
            Password: password
        };

        var authenticationDetails = new AuthenticationDetails(authenticationData);

        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);

        var userData = {
            Username: email,
            Pool: userPool
        };

        var cognitoUser = new CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                dispatch(authStateChecked(handleSession(result)))
                dispatch({
                    type: actionTypes.SIGNIN_SUCCESS
                });
            },

            onFailure: (error) => {
                dispatch({
                    type: actionTypes.SIGNIN_FAIL,
                    error: error,
                    user: cognitoUser,
                    password: password
                });
            },
        });
    };
};
export const openForgotPassword = (open) => {
    return {
        type: actionTypes.SIGNIN_OPEN_FORGOT_PASSWORD,
        open: open
    }
}
export const onSendForgotPasswordCode = (email) => {
    return dispatch => {

        dispatch({ type: actionTypes.SIGNIN_FORGOT_PASSWORD_SEND_CODE_START })
        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);

        var userData = {
            Username: email,
            Pool: userPool
        };

        var user = new CognitoUser(userData);

        user.forgotPassword({
            onSuccess: data => {
                dispatch({ type: actionTypes.SIGNIN_FORGOT_PASSWORD_SEND_CODE_SUCCESS, data: data })
            },
            onFailure: error => {
                dispatch({ type: actionTypes.SIGNIN_FORGOT_PASSWORD_SEND_CODE_FAILED, error: error })
            }
        })
    }
}
export const onForgotPassword = (email, verificationCode, newPassword) => {
    return dispatch => {

        dispatch({ type: actionTypes.SIGNIN_ON_FORGOT_PASSWORD_START })
        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);

        var userData = {
            Username: email,
            Pool: userPool
        };

        var user = new CognitoUser(userData);

        user.confirmPassword(verificationCode, newPassword, {
            onSuccess() {
                dispatch({ type: actionTypes.SIGNIN_ON_FORGOT_PASSWORD_SUCCESS })
            },
            onFailure(error) {
                dispatch({ type: actionTypes.SIGNIN_ON_FORGOT_PASSWORD_FAILED, error: error })
            }
        });
    }
}

///SIGN UP ACTION CREATORS
export const openSignUp = (open) => {
    return {
        type: actionTypes.SIGNUP_OPEN,
        open: open
    }
}
export const onSignUp = (email, password) => {
    return dispatch => {
        dispatch({ type: actionTypes.SIGNUP_START })

        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var dataEmail = {
            Name: 'email',
            Value: email
        };

        var attributeEmail = new CognitoUserAttribute(dataEmail);

        var attributeList = [];
        attributeList.push(attributeEmail);


        var userPool = new CognitoUserPool(poolData);
        userPool.signUp(email, password, attributeList, null, (error, result) => {

            if (error) {
                dispatch({
                    type: actionTypes.SIGNUP_FAIL,
                    error: error
                });
                return;
            }

            dispatch({
                type: actionTypes.SIGNUP_SUCCESS,
                user: result.user,
                password: password
            });
        })
    }
}

///SIGN UP ONBOARDING USERS
export const onBoardingGetStarted = () => {
    return {
        type: actionTypes.SIGNUP_ON_BOARDING_GET_STARTED
    }
}
///VALIDATING EMAIL ACTIONS
export const onChangeEmail = () => {
    return {
        type: actionTypes.SIGNUP_CHANGE_EMAIL
    }
}
export const onConfirmEmail = (code) => {

    return (dispatch, getState) => {

        dispatch({
            type: actionTypes.SIGNUP_CONFIRM_EMAIL_START
        })

        const state = getState().auth

        const user = state.user
        const password = state.password

        user.confirmRegistration(code, true, (err, result) => {
            if (err) {
                dispatch({
                    type: actionTypes.SIGNUP_CONFIRM_EMAIL_FAILED,
                    error: err
                })
                return;
            }

            const userData = {
                Username: user.username,
                Password: password
            }

            const authenticationDetails = new AuthenticationDetails(userData);

            user.authenticateUser(authenticationDetails, {
                onSuccess: (result) => {
                    dispatch({
                        type: actionTypes.SIGNUP_CONFIRM_EMAIL_SUCCEED,
                        session: handleSession(result)
                    })
                    dispatch(handleNext())
                },
                onFailure: (err) => {
                    dispatch({
                        type: actionTypes.SIGNUP_CONFIRM_EMAIL_FAILED,
                        error: err
                    })
                }
            })
        });
    }
}
export const handleNext = () => {
    return {
        type: actionTypes.SIGNUP_HANDLE_NEXT_VALIDATION_STEP
    }
}
export const signAuthenticationFailed = () => {
    return {
        type: actionTypes.SIGNUP_AUTHENTICATION_FAILED
    }
}
export const resendEmailCodeFailed = (error) => {
    return {
        type: actionTypes.SIGNUP_RESEND_EMAIL_CODE_FAILED,
        error: error
    }
}
export const onResendEmailCode = () => {

    return (dispatch, getState) => {

        const { user } = getState().auth

        user.resendConfirmationCode((err, result) => {
            if (err) {
                dispatch(resendEmailCodeFailed(err))
                return;
            }

            alert('A new 6-digits code was sent to ' + user.username);
            dispatch({ type: actionTypes.SIGNUP_RESEND_EMAIL_CODE })
            return
        });
    }

}

///ADDING PHONE NUMBER ACTIONS
export const onChangePhoneNumber = () => {
    return {
        type: actionTypes.SIGNUP_CHANGE_PHONE_NUMBER
    }
}
export const onResendPhoneCode = (phoneNumber) => {

    return dispatch => {

        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);
        var user = userPool.getCurrentUser();

        user.getSession((err, session) => {
            if (err) {
                return
            }
            user.getAttributeVerificationCode('phone_number', {
                onSuccess: () => {
                    alert('A 6-digits code was sent to + 1 ' + phoneNumber)
                    dispatch({ type: actionTypes.SIGNUP_RESEND_PHONE_CODE })
                },
                onFailure: (err) => {
                    dispatch({
                        type: actionTypes.SIGNUP_RESEND_PHONE_CODE_FAILED,
                        error: err
                    })
                },
                inputVerificationCode: null
            });
        })
    }
}
export const onAddPhone = (phone) => {
    return dispatch => {

        dispatch({
            type: actionTypes.SIGNUP_ADD_PHONE_START
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
                            type: actionTypes.SIGNUP_ADD_PHONE_FAILED,
                            error: err
                        })
                        return;
                    }

                    user.getAttributeVerificationCode('phone_number', {
                        onSuccess: () => {
                            dispatch({
                                type: actionTypes.SIGNUP_ADD_PHONE_SUCCEED
                            })
                        },
                        onFailure: (err) => {
                            dispatch({
                                type: actionTypes.SIGNUP_ADD_PHONE_FAILED,
                                error: err
                            })
                        },
                        inputVerificationCode: null
                    });
                });
            } else {
                dispatch({
                    type: actionTypes.SIGNUP_ADD_PHONE_FAILED,
                    error: { message: 'User no found' }
                })
            }
        })
    }
}
export const onValidatePhone = (code) => {
    return dispatch => {

        dispatch({
            type: actionTypes.SIGNUP_VALIDATE_PHONE_START
        })

        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);
        var user = userPool.getCurrentUser();

        user.getSession((err, session) => {
            if (err) {
                return
            }
            user.verifyAttribute('phone_number', code, {
                onSuccess: () => {
                    dispatch({
                        type: actionTypes.SIGNUP_VALIDATE_PHONE_SUCCEED
                    });
                    dispatch(handleNext())
                },
                onFailure: (err) => {
                    dispatch({
                        type: actionTypes.SIGNUP_VALIDATE_PHONE_FAILED,
                        error: err
                    })
                }
            });
        })
    }
}

///SIGN UP ONBOARDING ENDED
export const onBoardingEnded = () => {
    return {
        type: actionTypes.SIGNUP_ON_BOARDING_ENDED
    }
}

///LOAGOUT AND SESSION ACTIONS
const authStateChecked = (session) => {
    return {
        type: actionTypes.SIGNIN_AUTH_STATE_CHECKED,
        session: session
    }
}
const handleSession = (session) => {
    return {
        IdToken: session ? session.getIdToken().getJwtToken() : null,
        AccessToken: session ? session.getAccessToken().getJwtToken() : null,
        RefreshToken: session ? session.getRefreshToken().getToken() : null,
        isValid: session ? session.isValid() : false,
    }
}
export const onAuthCheckState = () => {
    return dispatch => {

        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);
        var cognitoUser = userPool.getCurrentUser();

        if (cognitoUser != null) {

            cognitoUser.getSession((err, session) => {
                if (err) {
                    dispatch(authStateChecked(handleSession(null)))
                    return;
                }

                if (new Date() < new Date(session.accessToken.payload.exp * 1000)) {
                    dispatch(authStateChecked(handleSession(session)))
                } else {
                    dispatch(onRefreshToken())
                }
            });
        } else {
            dispatch(authStateChecked(handleSession(null)))
        }
    };
}

export const onRefreshToken = () => {

    return dispatch => {
        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);
        var cognitoUser = userPool.getCurrentUser();

        cognitoUser.getSession((err, session) => {
            if (err) {
                dispatch(authStateChecked(handleSession(null)))
                return;
            }

            const token = session.getRefreshToken();

            cognitoUser.refreshSession(token, (err, session) => {
                if (err) {
                    dispatch(authStateChecked(handleSession(null)))
                    return;
                }

                dispatch(authStateChecked(handleSession(session)))
                dispatch({ type: actionTypes.SESSION_REFRESHED })
            });
        })
    }
}

export const onCloseEndedDialog = () => {
    return {
        type: actionTypes.SIGNUP_CLOSE_ON_ENDED_DIALOG
    }
}
export const onLogout = () => {

    return dispatch => {

        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);

        var cognitoUser = userPool.getCurrentUser();

        if (cognitoUser != null) {

            cognitoUser.getSession((err, session) => {
                if (err) {
                    dispatch(authStateChecked(handleSession(null)))
                }

                if (session.isValid()) {
                    cognitoUser.globalSignOut({
                        onSucces: (message) => {
                            dispatch(onAuthCheckState())
                            dispatch({ type: actionTypes.SIGNIN_LOGOUT })

                        }, onFailure: (error) => {
                            dispatch(authStateChecked(handleSession(null)))
                            dispatch({ type: actionTypes.SIGNIN_LOGOUT })
                        }
                    });
                } else {
                    dispatch(onAuthCheckState())
                }
            });
        }
    }
}
export const onDeleteAccount = () => {
    return dispatch => {
        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var userPool = new CognitoUserPool(poolData);
        var user = userPool.getCurrentUser();

        user.getSession((err, _) => {
            if (err) {
                dispatch(authStateChecked(handleSession(null)))
            }

            user.deleteUser((err, _) => {
                if (err) {
                    dispatch(authStateChecked(handleSession(null)))
                    return;
                }

                dispatch(onAuthCheckState())
            });
        })

        dispatch({ type: actionTypes.ACCOUNT_DELETE })
    }
}
