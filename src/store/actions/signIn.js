import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

import * as actionTypes from './actionTypes';
import COGNITO from '../../config/cognitoConfigure';

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

export const onSingIn = (email, password) => {
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
                dispatch(signInSuccess())
            },

            onFailure: (error) => {
                alert(error.message || JSON.stringify(error))
                dispatch(signInFail(error))
            },
        });
    };
};