import Fingerprint2 from 'fingerprintjs2'
import jwt from 'jsonwebtoken';


export default {

  __SESSION_KEY__: '_props_',

  CreateBrowserSession: function (credential) {

    let values = [];

    Fingerprint2.get(function (components) {
      values = components.map(function (component) { return component.value })
    })

    let UID = Fingerprint2.x64hash128(values.join(''), 31)

    return (jwt.sign({
      "token": credential.token,
      "name": credential.name,
      "auth": credential.auth, // to check user is logged in or not
      "alias": credential.alias,
      "email": credential.email,
      "admin": credential.admin // true/false to check admin or client login
    }, UID))
  },

  VerifySession: function (credential) {

    let values = [];

    Fingerprint2.get(function (components) {
      values = components.map(function (component) { return component.value })
    })

    let UID = Fingerprint2.x64hash128(values.join(''), 31)

    try {
      return jwt.verify(credential, UID);
    } catch (e) {
      return false
    }
  }
}
