import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    StyledSpan,
    StyledDivider
} from './styles';

import Presenter from '../../../helpers/SignUp/Presenter';

import { AuthenticationDetails } from 'amazon-cognito-identity-js';
import { palette } from '../../../theme';

class ValidateEmail extends PureComponent {

    state = {
        user: this.props.user,
        email: this.props.user.cognitoUser.username,
        code: {
            value: '',
            message: '',
            error: false
        },
        loading: false
    };

    handleResendCode = () => {
        const userData = {
            user: this.props.user.cognitoUser,
            codeAttribute: 'email'
        }

        Presenter.resendCode(userData)
    }

    handleChangeEmail = () => {
        this.props.changeEmail();
    }

    handleVerifyEmail = (self) => {

        self.setState({ loading: true })
        const userData = {
            user: self.state.user.cognitoUser,
            onFailed: self.verificationOnFailed,
            onSuccess: self.verificationOnSuccess,
            confirmCode: self.state.code.value,
            self: self
        }

        Presenter.UserConfirm(userData)
    }

    verificationOnFailed = (err) => {
        this.setState({
            code: {
                ...this.state.code,
                error: true,
                message: err.message
            },
            loading: false
        })
    }

    verificationOnSuccess = (response, self) => {

        const userData = {
            Username: this.state.user.cognitoUser.username,
            Password: this.state.user.password.value
        }
        const authenticationDetails = new AuthenticationDetails(userData);

        this.state.user.cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                self.props.emailValidationSucceed(null, result);
            },
            onFailure: function (err) {
                self.props.emailValidationSucceed(err, null);
            }
        })

        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant='title' component='h6'>Check your email</Typography>
                <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>We have sent you a 6-digits code to help us verify that "{this.state.email}" is your email.</Typography>

                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="emailValidator">Enter your code</InputLabel>
                    <Input
                        placeholder='Enter the 6-digit code'
                        name="emailValidator"
                        type="email"
                        error={this.state.code.error}
                        id="emailValidator"
                        onChange={(event) => this.setState({
                            code: {
                                ...this.state.code,
                                error: false,
                                value: event.target.value,
                            }
                        }
                        )}
                    />
                    <Typography color='error'>{this.state.code.message}</Typography>
                </FormControl>

                <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '32px 0' }}>
                    <StyledPrimaryButton onClick={() => this.handleVerifyEmail(this)}>
                        {this.state.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Okay'}
                    </StyledPrimaryButton>
                </div>
                <Typography align='center'>Din't receive the email? <StyledSpan onClick={this.handleResendCode}>Resend Code</StyledSpan></Typography>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 20%' }}>
                    <StyledDivider variant="body2">or</StyledDivider>
                </div>
                <Typography align='center'>Need to change your email? <StyledSpan onClick={this.handleChangeEmail}>Change my email</StyledSpan></Typography>
            </React.Fragment>
        );
    }
}

export default ValidateEmail
