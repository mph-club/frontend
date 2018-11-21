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
        user: this.props.user,
        phone: {
            value: '',
            message: '',
            error: false
        },
        code: {
            value: '',
            error: false,
            message: ''
        },
        addingNumber: true,
        loading: false
    };

    handleConfirmNumber = (self) => {
        const userData = {
            attributeName: 'phone_number',
            user: self.state.user,
            value: self.state.phone.value,
            onSuccess: self.confirmNumberOnSuccess,
            onFailed: self.onFailed
        }

        Presenter.changeUserAttribute(userData)
    }

    confirmNumberOnSuccess = (err, result) => {

        if (err) {
            alert(err.message)
            this.props.doThisLater();
            return;
        }

        this.handleChangeNumber();
    }

    handleChangeNumber = () => {
        const prev = this.state.addingNumber
        this.setState({ addingNumber: !prev })
    }

    onFailed = (error) => {
         this.setState({ code: { ...this.state.code, error: true, message: error.message } })
    }

    handleVerify = () => {
        const userData = {
            email: this.state.user.username,
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
            user: this.state.user,
            onSuccess: this.resendCodeSuccess,
            onFailed: this.onFailed
        }

        Presenter.resendCode(userData)
    }

    resendCodeSuccess = (response) => {
        alert('A new 6-digits code was sent')
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

    render() {

        return (
            <React.Fragment>
                {this.state.addingNumber ?
                    <div>
                        <Typography variant='title' component='h6'>Confirm your phone number</Typography>
                        <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>We’ll send you a text message with a code to verify your number. We’ll only share your number with your host or guest after a booking is confirmed.</Typography>
                    </div> : <div>
                        <Typography variant='title' component='h6'>Validate your phone number</Typography>
                        <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>We sent you 6-digit code to help us verify your phone number. Code sent to +1 {this.state.phone.value}</Typography>
                    </div>}

                <FormControl margin="normal" fullWidth>
                    <Typography color='primary'>Phone Number</Typography>
                    <Input
                        name="phoneNumber"
                        autoFocus
                        type="tel"
                        disabled={!this.state.addingNumber}
                        error={this.state.phone.error}
                        value={this.state.phone.value}
                        id="phoneNumberValidate"
                        prefix='+1'
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
                    this.state.addingNumber ? null :
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
                        this.state.addingNumber ?
                            <StyledPrimaryButton 
                                onClick={() => this.handleConfirmNumber(this)}>
                                    {this.state.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Confirm phone number'}
                            </StyledPrimaryButton> :
                            <StyledPrimaryButton onClick={this.handleVerify}> {this.state.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Verify'} </StyledPrimaryButton>}
                </div>

                {!this.state.addingNumber ? <div>
                    <Typography align='center'>Din't receive the text? <StyledSpan onClick={this.handelResendCode}>Resend Code</StyledSpan></Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 20%' }}>
                        <StyledDivider variant="body2">or</StyledDivider>
                    </div>
                    <Typography align='center'>Need to change your number? <StyledSpan onClick={this.handleChangeNumber}>Change my number</StyledSpan></Typography>
                </div> : null}

                <Typography align='center' style={{ marginTop: '48px', cursor: 'pointer', color: palette.grey01 }} onClick={this.handleDoThisLater}>I'll do this later</Typography>
            </React.Fragment>
        );
    }
}

export default ValidatePhone