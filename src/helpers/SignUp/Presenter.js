
import {  CognitoUserAttribute } from 'amazon-cognito-identity-js';

export default {

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

    confirmAttribute: function (params) {

        params.user.verifyAttribute('phone_number', params.confirmCode, {
            onSuccess: function (result) {
                params.onSuccess(result)
            },
            onFailure: function (err) {
                params.onFailed(err)
            }
        });
    }

}
