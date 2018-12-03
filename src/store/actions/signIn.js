
import * as actionTypes from './actionTypes';


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

export const signInFail = (error) => {
    return {
        type: actionTypes.SIGNIN_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(signInStart());
        const authData = {
            email: email,
            password: password
        };
        console.log(authData);
    };
};