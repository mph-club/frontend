import Cognito from '../../config/cognitoConfigure';

export default {

    SignUp: function (params) {

        console.log(params)

        var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

        var poolData = {
            UserPoolId: Cognito.COGNITOCONFIG.userPool, // Your user pool id here
            ClientId: Cognito.COGNITOCONFIG.clientId // Your client id here
        };

        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var attributeList = [];


        var dataEmail = {
            Name: 'email',
            Value: params.email
        };

        var dataName = {
            Name: 'name',
            Value: params.email
        };

        var phone = params.phone.replace('+1', '')

        var dataPhoneNumber = {
            Name: 'phone_number',
            Value: '+1' + phone
        };

        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        var attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(dataName);
        var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);

        attributeList.push(attributeEmail);
        attributeList.push(attributeName);
        attributeList.push(attributePhoneNumber);

        userPool.signUp(params.email, params.password, attributeList, null, (err, result) => {
            if (err) {
                console.log(result)
                console.log(err.message || JSON.stringify(err))
                //params.onfailed(err.message || JSON.stringify(err));

                return;
            }
            console.log(result)
            var cognitoUser = result.user;
            params.onsuccess(cognitoUser);

        });

    },
    UserConfirm: function (params) {
        var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

        var poolData = {
            UserPoolId: Cognito.COGNITOCONFIG.userPool, // Your user pool id here
            ClientId: Cognito.COGNITOCONFIG.clientId // Your client id here
        };

        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var userData = {
            Username: params.email,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.confirmRegistration(params.confirmcode, true, function (err, result) {
            if (err) {
                params.onfailed(err.message || JSON.stringify(err));
            } else {
                params.onsuccess(result);
            }
        });
    },
    resendCode: function (params) {
        var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

        var poolData = {
            UserPoolId: Cognito.COGNITOCONFIG.userPool, // Your user pool id here
            ClientId: Cognito.COGNITOCONFIG.clientId // Your client id here
        };

        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var userData = {
            Username: params.email,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
                params.onfailed(err.message || JSON.stringify(err));
            } else {
                params.onsuccess(result);
            }
        });
    },

}
