import Fingerprint2 from 'fingerprintjs2'
import jwt from 'jsonwebtoken';


export default {

  CreateBrowserSession: (credential) => {
    let values = [];

    Fingerprint2.get(components => {
      values = components.map(function (component) { return component.value })
    })

    let UID = Fingerprint2.x64hash128(values.join(''), 31)

    return (jwt.sign({
      "token": credential.token,
      "name": credential.name,
      "auth": credential.auth,
      "alias": credential.alias,
      "email": credential.email
    }, UID))
  },

  VerifySession: (credential) => {

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
