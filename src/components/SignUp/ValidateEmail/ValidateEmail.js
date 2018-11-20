import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';

import {
    StyledSpan,
    StyledDivider
} from './styles';

import Presenter from '../../../helpers/SignUp/Presenter';

class ValidateEmail extends Component {

    state = {
        cognitoUser: this.props.cognitoUser,
        email: 'juanluis.personal@gmail.com',
        code: {
            value: '',
            message: '',
            error: false
        }
    };

    handleResendCode = () => {
        const userData = {
            email: this.state.email
        }

        Presenter.resendCode(userData)
    }

    handleChangeEmail = () => {
        this.props.changeEmail();
    }

    handleVerifyEmail = () => {
        const userData = {
            email: this.state.email,
            onFailed: this.verificationOnFailed,
            onSuccess: this.verificationOnSuccess,
            confirmCode: this.state.code.value
        }

        Presenter.UserConfirm(userData)
    }

    verificationOnFailed = (err) => {
        this.setState({ code: {
            ...this.state.code,
            error: true,
            message: err.message
        }})
    }

    verificationOnSuccess = (response) => {
        this.props.emailValidationSucceed();
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
                        <StyledPrimaryButton onClick={this.handleVerifyEmail}>Okay</StyledPrimaryButton>
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
