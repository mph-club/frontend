
import { CreateUserSessionProperties, RemoveUserSessionProperties } from '../../tools/Store/Authentication/Presenter';
import Cognito from '../../config/cognitoConfigure';

export default {
  Auth: function (params) {

      var AmazonCognitoIdentity = require('amazon-cognito-identity-js');


      var authenticationData = {
        Username: params.emailuser,
        Password: params.password,
      };

      var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

      var poolData = {
        UserPoolId: Cognito.COGNITOCONFIG.userPool, // Your user pool id here
        ClientId: Cognito.COGNITOCONFIG.clientId // Your client id here
      };

      var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

      var userData = {
        Username: params.emailuser,
        Pool: userPool
      };

      var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {

          params.RunRedux(CreateUserSessionProperties(result)) //run redux method
          params.onsuccess(result)//direct to dashboard page
        },

        onFailure: function (error) {
          params.onfailed(error);
        },
      });
  },

  Logout: function (self) {

    self.props.RunRedux(RemoveUserSessionProperties()) //run redux method

    localStorage.clear();
    window.location = "./";

  },

  // ClientDetails: function (params) {
  //   Model.ClientDetails(params)
  // }
}