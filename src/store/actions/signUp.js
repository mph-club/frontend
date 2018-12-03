import COGNITO from '../../config/cognitoConfigure';
import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails } from 'amazon-cognito-identity-js';

import * as actionTypes from './actionTypes';

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

export const openSignUp = (open) => {
    return {
        type: actionTypes.SIGNUP_OPEN,
        open: open
    }
}

export const onBoardingGetStarted = () => {
    return {
        type: actionTypes.SIGNUP_ON_BOARDING_GET_STARTED
    }
}

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


export const confirmEmailSucceed = () => {
    return {
        type: actionTypes.SIGNUP_CONFIRM_EMAIL_SUCCEED
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

export const onResendEmailCode = () => {
    return {
        type: actionTypes.SIGNUP_RESEND_EMAIL_CODE
    }
}

export const onConfirmEmail = (code) => {

    return (dispatch, getState) => {

        dispatch(confirmEmailStart())

        const state = getState().signUp

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
                    localStorage.setItem('accessToken', result.accessToken.jwtToken)
                    localStorage.setItem('expirationDate', result.accessToken.payload.exp)
                    localStorage.setItem('idToken', result.idToken.jwtToken)
                    localStorage.setItem('refreshToken', result.refreshToken.token)
                    dispatch(confirmEmailSucceed())
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

export const signUp = (email, password) => {
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

        var attributeEmail = new CognitoUserAttribute(dataEmail);

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

        const { user } = getState().signUp

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
        const user = getState().signUp.user;
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
        const { user } = getState().signUp

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