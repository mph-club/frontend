import Cognito from '../../config/cognitoConfigure';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

export default {

    SignUp: function (params) {

        var poolData = {
            UserPoolId: Cognito.COGNITOCONFIG.userPool, // Your user pool id here
            ClientId: Cognito.COGNITOCONFIG.clientId // Your client id here
        };

        var userPool = new CognitoUserPool(poolData);

        var attributeList = [];

        var dataEmail = {
            Name: 'email',
            Value: params.email
        };

        var attributeEmail = new CognitoUserAttribute(dataEmail);
        attributeList.push(attributeEmail);

        userPool.signUp(params.email, params.password, attributeList, null, (err, result) => {
            if (err) {
                params.onFailed(err);
                return;
            }

            params.onSuccess(result)
        });

    },

    UserConfirm: function (params) {

        var poolData = {
            UserPoolId: Cognito.COGNITOCONFIG.userPool, 
            ClientId: Cognito.COGNITOCONFIG.clientId
        };

        var userPool = new CognitoUserPool(poolData);

        var userData = {
            Username: params.email,
            Pool: userPool
        };

        var cognitoUser = new CognitoUser(userData);
        cognitoUser.confirmRegistration(params.confirmCode, true, function (err, result) {
            if (err) {
                params.onFailed(err)
                return;
            }
            params.onSuccess(result);
        });
    },

    changeUserAttribute: function (params) {

        var attributeList = [];
        var attributeItem = {
            Name: params.name,
            Value: params.value
        };

        var attribute = new CognitoUserAttribute(attributeItem);

        attributeList.push(attribute);

        params.cognitoUser.updateAttributes(attributeList, function (err, result) {
            if (err) {
                params.onFailed(err)
                return;
            }
            params.onSuccess(result)
        });
    },
    resendCode: function (params) {

        var poolData = {
            UserPoolId: Cognito.COGNITOCONFIG.userPool,
            ClientId: Cognito.COGNITOCONFIG.clientId
        };

        var userPool = new CognitoUserPool(poolData);

        var userData = {
            Username: params.email,
            Pool: userPool
        };

        var cognitoUser = new CognitoUser(userData);
        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
                alert(err.message)
                return;
            }
            alert('A new 6-digits code was sent to ' + params.email)
        });
    },

}
