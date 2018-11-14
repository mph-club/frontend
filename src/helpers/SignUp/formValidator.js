import FormMessage from '../../tools/messages';

export default {

    ValidateForm: function (self) {

        var valid = true

        if (self.state.email.error === true) {
            return false;
        }


        if (self.state.password.error === true) {
            return false;
        }

        if (self.state.email.value.trim() === "") {
            self.setState({
                email: {
                    ...self.state.email,
                    error: true,
                    message: FormMessage.AUTHENTICATION.ERROR.EMAIL.EMPTY,
                }
            })
            valid = false
        }

        if (self.state.phone.value.trim() === "") {
            self.setState({
                phone: {
                    ...self.state.phone,
                    error: true,
                    message: FormMessage.AUTHENTICATION.ERROR.PHONE.EMPTY,
                }
            })
            valid = false
        }

        if (self.state.password.value.trim() === "") {
            self.setState({
                password: {
                    ...self.state.password,
                    error: true,
                    message: FormMessage.AUTHENTICATION.ERROR.PASSWORD.EMPTY,
                }
            })
            valid = false
        }

        return valid
    }
}
