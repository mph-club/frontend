import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import MaskedInput from 'react-text-mask'
import PropTypes from 'prop-types';
import Presenter from '../../../helpers/SignUp/Presenter';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    StyledSpan,
    StyledDivider
} from './styles';
import { palette } from '../../../theme';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

class ValidatePhone extends Component {

    state = {
        cognitoUser: this.props.cognitoUser,
        phone: {
            value: '7867693202',
            message: '',
            error: false
        },
        code: {
            value: '',
            error: false,
            message: ''
        },
        loading: false,
        changeMyNumber: false
    };

    handleVerify = () => {
        const userData = {
            email: 'juanluis.personal@gmail.com',
            onFailed: this.onFailed,
            onSuccess: this.verificationOnSuccessHandle,
            confirmCode: this.state.code.value
        }

        Presenter.UserConfirm(userData)
    }

    verificationOnSuccessHandle = () => {
        this.props.phoneValidationSucceed()
    }

    handelResendCode = () => {
        const userData = {
            email: 'juanluis.personal@gmail.com',
            onSuccess: this.resendCodeSuccess,
            onFailed: this.onFailed
        }

        Presenter.resendCode(userData)
    }

    resendCodeSuccess = (response) => {
        alert('A new 6-digits code was sent')
    }

    handleChangeNumber = () => {
        const prev = this.state.changeMyNumber
        this.setState({ changeMyNumber: !prev })
    }

    handleDoThisLater = () => {
        this.props.doThisLater();
    }

    handleOnChangeCode = (event) => {
        this.setState({
            code: {
                message: '',
                error: false,
                value: event.target.value,
            }
        })
    }

    handleConfirmNumber = () => {

        const userData = {
            name: 'email',
            cognitoUser: this.state.cognitoUser,
            value: this.state.phone.value,
            onSuccess: this.handelNumberChangedOnSuccess,
            onFailed: this.onFailed
        }

        Presenter.changeUserAttribute(userData)
    }

    handelNumberChangedOnSuccess = (result) => {
        console.log(result);
        this.handleChangeNumber();
    }

    onFailed = (error) => {
        if (error.code === "UserNotFoundException") {
            this.setState({ phone: { ...this.state.phone, error: true, message: error.message + " Check the phone number" } })
        } else if (error.code === "CodeMismatchException") {
            this.setState({ code: { ...this.state.code, error: true, message: error.message } })
        } else {
            console.log(error)
            alert('Ups!!! Looks like something was wrong')
        }
    }

    render() {

        return (
            <React.Fragment>
                {this.state.changeMyNumber ?
                    <div>
                        <Typography variant='title' component='h6'>Confirm your phone number</Typography>
                        <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>We’ll send you a text message with a code to verify your number. We’ll only share your number with your host or guest after a booking is confirmed.</Typography>
                    </div> : <div>
                        <Typography variant='title' component='h6'>Validate your phone number</Typography>
                        <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>We sent you 6-digit code to help us verify your phone number. Code sent +1 {this.state.phone.value}</Typography>
                    </div>}

                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="phoneNumberValidate">Phone Number</InputLabel>
                    <Input
                        name="phoneNumber"
                        type="tel"
                        disabled={!this.state.changeMyNumber}
                        error={this.state.phone.error}
                        value={this.state.phone.value}
                        // onBlur={this.confirmPasswordOnBlur.bind(this)}
                        id="phoneNumberValidate"
                        inputComponent={TextMaskCustom}
                        onChange={(event) => this.setState({
                            phone: {
                                ...this.state.phone,
                                value: event.target.value,
                            }
                        }
                        )}
                    />
                    <Typography color='error'>{this.state.phone.message}</Typography>
                </FormControl>
                {
                    this.state.changeMyNumber ? null :
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="codeValidatorId">Enter your code</InputLabel>
                            <Input
                                placeholder='Enter 6-digit code'
                                name="phoneNumber"
                                type="text"
                                error={this.state.code.error}
                                // onBlur={this.confirmPasswordOnBlur.bind(this)}
                                id="codeValidatorId"
                                onChange={(event) => this.handleOnChangeCode(event)}
                            />
                            <Typography color='error'>{this.state.code.message}</Typography>
                        </FormControl>
                }
                <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '32px 0' }}>
                    {
                        this.state.changeMyNumber ?
                            <StyledPrimaryButton onClick={this.handleConfirmNumber}>Confirm phone number</StyledPrimaryButton> :
                            <StyledPrimaryButton onClick={this.handleVerify}> {this.state.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Verify'} </StyledPrimaryButton>}
                </div>

                {!this.state.changeMyNumber ? <div>
                    <Typography align='center'>Din't receive the text? <StyledSpan onClick={this.handelResendCode}>Resend Code</StyledSpan></Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 20%' }}>
                        <StyledDivider variant="body2">or</StyledDivider>
                    </div>
                    <Typography align='center'>Need to change your number? <StyledSpan onClick={this.handleChangeNumber}>Change my number</StyledSpan></Typography>
                </div> : null}

                <Typography align='center' style={{ marginTop: '32px', cursor: 'pointer', color: palette.grey01 }} onClick={this.handleDoThisLater}>I'll do this later</Typography>
            </React.Fragment>
        );
    }
}

export default ValidatePhone