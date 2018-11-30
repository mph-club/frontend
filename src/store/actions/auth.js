import COGNITO from '../../config/cognitoConfigure';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

import * as actionTypes from './actionTypes';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        };
        console.log(authData);
    };
};

export const signUpStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    };
};

export const signUpSuccess = (result) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        result: result
    };
};

export const signUpFail = (error) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error
    };
};

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

            dispatch(signUpSuccess(result));
        })
    }
}