import COGNITO from '../../config/cognitoConfigure';
import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails } from 'amazon-cognito-identity-js';

import * as actionTypes from './actionTypes';

///SIGN IN ACTION CREATORS
export const signInStart = () => {
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
export const signInSuccess = (token) => {
    return {
        type: actionTypes.SIGNIN_SUCCESS,
        idToken: token
    };
};
export const signInFail = (user, password, error) => {
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
        dispatch(signUpStart())

        var poolData = {
            UserPoolId: COGNITO.CONFIG.USER_POOL,
            ClientId: COGNITO.CONFIG.CLIENT_ID
        };

        var dataEmail = {
            Name: 'email',
            Value: email
        };

        // var dataPhoneNumber = {
        //     Name : 'phone_number',
        //     Value : '+15555555555'
        // }

        var attributeEmail = new CognitoUserAttribute(dataEmail);
        //var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);

        var attributeList = [];
        attributeList.push(attributeEmail);


        var userPool = new CognitoUserPool(poolData);
        userPool.signUp(email, password, attributeList, null, (err, result) => {

            if (err) {
                dispatch(signUpFail(err));
                return;
            }

            dispatch(signUpSuccess(result.user, password));
        })
    }
}
export const signUpStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    };
};
export const signUpSuccess = (user, password) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        user: user,
        password: password
    };
};
export const signUpFail = (error) => {

    alert(error.message || JSON.stringify(error))

    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error
    };
};

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
export const confirmEmailStart = () => {
    return {
        type: actionTypes.SIGNUP_CONFIRM_EMAIL_START
    }
}
export const confirmEmailFailed = (error) => {
    return {
        type: actionTypes.SIGNUP_CONFIRM_EMAIL_FAILED,
        error: error
    }
}
export const confirmEmailSucceed = (session) => {
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
                    alert(err.message || JSON.stringify(err))
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
export const addPhoneNumberStarted = () => {
    return {
        type: actionTypes.SIGNUP_ADD_PHONE_START
    }
}
export const addPhoneNumberSucceed = () => {
    return {
        type: actionTypes.SIGNUP_ADD_PHONE_SUCCEED
    }
}
export const addPhoneNumberFailed = (error) => {
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

        const { user } = getState().auth

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
    }
}
export const onAddPhone = (phone) => {
    return (dispatch, getState) => {

        dispatch(addPhoneNumberStarted())
        const { user } = getState().auth;
        const phoneNumber = phone.replace(/\D/g, '');

        var attributeItem = {
            Name: 'phone_number',
            Value: '+1' + phoneNumber
        };

        var attribute = new CognitoUserAttribute(attributeItem);

        var attributeList = [];
        attributeList.push(attribute);

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

        user.getSession((err, session) => {
            if (err) {
                dispatch(authStateChecked(handleSession(null)))
            }


            user.deleteUser(function (err, result) {
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
