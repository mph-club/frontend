import COGNITO from '../../config/cognitoConfigure';
import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails } from 'amazon-cognito-identity-js';

import * as actionTypes from './actionTypes';

///SIGN IN ACTION CREATORS
const signInStart = () => {
    return {
        type: actionTypes.SIGNIN_START
    };
};
export const openSignIn = (open) => {
    return {
        type: actionTypes.SIGNIN_OPEN,
        open: open
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
const signInSuccess = (token) => {
    return {
        type: actionTypes.SIGNIN_SUCCESS,
        idToken: token
    };
};
const signInFail = (user, password, error) => {
    return {
        type: actionTypes.SIGNIN_FAIL,
        error: error,
        user: user,
        password: password
    };
};
export const onSignIn = (email, password) => {
    return dispatch => {

        dispatch(signInStart());

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
                dispatch(signInSuccess())
            },

            onFailure: (error) => {
                dispatch(signInFail(cognitoUser, password, error))
            },
        });
    };
};

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
const confirmEmailStart = () => {
    return {
        type: actionTypes.SIGNUP_CONFIRM_EMAIL_START
    }
}
const confirmEmailFailed = (error) => {
    return {
        type: actionTypes.SIGNUP_CONFIRM_EMAIL_FAILED,
        error: error
    }
}
const confirmEmailSucceed = (session) => {
    return {
        type: actionTypes.SIGNUP_CONFIRM_EMAIL_SUCCEED,
        session: session
    }
}
export const onConfirmEmail = (code) => {

    return (dispatch, getState) => {

        dispatch(confirmEmailStart())

        const state = getState().auth

        const user = state.user
        const password = state.password

        user.confirmRegistration(code, true, (err, result) => {
            if (err) {
                dispatch(confirmEmailFailed(err))
                return;
            }

            const userData = {
                Username: user.username,
                Password: password
            }

            const authenticationDetails = new AuthenticationDetails(userData);

            user.authenticateUser(authenticationDetails, {
                onSuccess: (result) => {
                    dispatch(confirmEmailSucceed(handleSession(result)))
                    dispatch(handleNext())
                },
                onFailure: (err) => {
                    dispatch(signAuthenticationFailed())
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
const addPhoneNumberStarted = () => {
    return {
        type: actionTypes.SIGNUP_ADD_PHONE_START
    }
}
const addPhoneNumberSucceed = () => {
    return {
        type: actionTypes.SIGNUP_ADD_PHONE_SUCCEED
    }
}
const addPhoneNumberFailed = (error) => {
    return {
        type: actionTypes.SIGNUP_ADD_PHONE_FAILED,
        error: error
    }
}
export const resendPhoneCodeFailed = (error) => {
    return {
        type: actionTypes.SIGNUP_RESEND_PHONE_CODE_FAILED,
        error: error
    }
}
export const onChangePhoneNumber = () => {
    return {
        type: actionTypes.SIGNUP_CHANGE_PHONE_NUMBER
    }
}
export const onResendPhoneCode = (phoneNumber) => {

    return (dispatch, getState) => {

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
                    dispatch(resendPhoneCodeFailed(err))
                },
                inputVerificationCode: null
            });
        })
    }
}
export const onAddPhone = (phone) => {
    return dispatch => {

        dispatch(addPhoneNumberStarted())
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
                        dispatch(addPhoneNumberFailed(err))
                        return;
                    }

                    user.getAttributeVerificationCode('phone_number', {
                        onSuccess: () => {
                            dispatch(addPhoneNumberSucceed())
                        },
                        onFailure: (err) => {
                            dispatch(addPhoneNumberFailed(err))
                        },
                        inputVerificationCode: null
                    });
                });
            } else {
                dispatch(addPhoneNumberFailed({ message: 'User no found' }))
            }
        })
    }
}
export const validatePhoneStart = () => {
    return {
        type: actionTypes.SIGNUP_VALIDATE_PHONE_START
    }
}
export const validatePhoneFailed = (error) => {
    return {
        type: actionTypes.SIGNUP_VALIDATE_PHONE_FAILED,
        error: error
    }
}
export const validatePhoneSucceed = () => {
    return {
        type: actionTypes.SIGNUP_VALIDATE_PHONE_SUCCEED
    }
}
export const onValidatePhone = (code) => {
    return (dispatch, getState) => {

        dispatch(validatePhoneStart());
        const { user } = getState().auth

        user.verifyAttribute('phone_number', code, {
            onSuccess: () => {
                dispatch(validatePhoneSucceed())
                dispatch(handleNext())
            },
            onFailure: (err) => {
                dispatch(validatePhoneFailed(err))
            }
        });
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

                dispatch(authStateChecked(handleSession(session)))
            });
        } else {
            dispatch(authStateChecked(handleSession(null)))
        }
    };
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
