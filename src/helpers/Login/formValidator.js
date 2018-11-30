import Messages from '../../shared/messages';

export default {

  ValidateForm: function (self) {

    var valid = true

    if (self.state.email.value.trim() === "") {
      self.setState({
        email: {
          ...self.state.email,
          error: true,
          message: Messages.AUTHENTICATION.ERROR.EMAIL.EMPTY,
        }
      })
      valid = false

    } else if (!this.isValid(self.state.email.value.trim())) {
      self.setState({
        email: {
          ...self.state.email,
          error: true,
          message: Messages.AUTHENTICATION.ERROR.EMAIL.INVALID,
        }
      })
      valid = false
    }

    if (self.state.password.value.trim() === "") {
      self.setState({
        password: {
          ...self.state.password,
          error: true,
          message: Messages.AUTHENTICATION.ERROR.PASSWORD.EMPTY,
        }
      })
      valid = false
    }

    return valid
  },

  isValid(email) {
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
