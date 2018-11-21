import Cognito from '../../config/cognitoConfigure';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

export default {

    SignUp: function (params) {

        var poolData = {
            UserPoolId: Cognito.COGNITOCONFIG.userPool,
            ClientId: Cognito.COGNITOCONFIG.clientId
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
        })
    },

    UserConfirm: function (params) {

        params.user.confirmRegistration(params.confirmCode, true, function (err, result) {
            if (err) {
                params.onFailed(err)
                return;
            }

            params.onSuccess(result, params.self)
        });
    },

    changeUserAttribute: function (params) {

        var attributeList = [];

        let phoneNumber = params.value.replace(/\D/g, '');

        var attributeItem = {
            Name: params.attributeName,
            Value: '+1' + phoneNumber
        };

        var attribute = new CognitoUserAttribute(attributeItem);

        attributeList.push(attribute);

        params.user.updateAttributes(attributeList, function (err, result) {
            if (err) {
                params.onFailed(err)
                return;
            }
            
            params.user.getAttributeVerificationCode('phone_number', {
                onSuccess: function (result) {
                    params.onSuccess(null, result)
                },
                onFailure: function(err) {
                    params.onSuccess(err, null)
                },
                inputVerificationCode: null
            });
        });
    },

    resendCode: function (params) {


        if (params.codeAttribute === 'email') {
            params.user.resendConfirmationCode(function (err, result) {
                if (err) {
                    alert(err.message)
                    return;
                }
    
                alert('A new 6-digits code was sent to ' + params.user.username);
            });
        } else {
            params.user.getAttributeVerificationCode('phone_number', {
                onSuccess: function (result) {
                    params.onSuccess(null, result)
                },
                onFailure: function(err) {
                    params.onSuccess(err, null)
                },
                inputVerificationCode: null
            });
        }
    },

}
