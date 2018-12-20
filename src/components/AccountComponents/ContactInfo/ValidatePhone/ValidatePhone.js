import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import StyledPrimaryButton from '../../../UI/Buttons/PrimaryButton/PrimaryButton';
import MaskedInput from 'react-text-mask'
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClearIcon from '@material-ui/icons/Clear';

import {
    StyledSpan,
    StyledDivider,
    ExternalContainer,
    StyledIconButton
} from './styles';
import { palette } from '../../../../theme';
import * as actions from '../../../../store/actions/index';

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
        firstCodeSent: false
    };

    handleConfirmNumber = () => {
        this.props.handleAddPhone(this.state.phone.value )
    }

    handleVerifyPhone = () => {
        if (!this.state.firstCodeSent) {
            this.props.onResendCode(this.props.user.phone.value)

            this.setState(prevState => {
                return {
                    phone: {
                        ...prevState.phone
                    },
                    code: {
                        ...prevState.code
                    },
                    firstCodeSent: true
                }
            })
        } else {
            this.props.handleValidatePhone(this.state.code.value)
        }
    }

    render() {

        return (
            <Dialog
                open={this.props.open}
                aria-labelledby="responsive-dialog-title"
                onClose={this.props.handleClose}
            >
                <Paper style={{ width: '460px', height: 'auto' }} elevation={1}>
                    <StyledIconButton color="inherit" aria-label="Clear" onClick={this.props.handleClose}>
                        <ClearIcon />
                    </StyledIconButton>
                    <ExternalContainer>
                        {this.props.addingNumber ?
                            <div>
                                <Typography variant='h6'>Confirm your phone number</Typography>
                                <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>We’ll send you a text message with a code to verify your number. We’ll only share your number with your host or guest after a booking is confirmed.</Typography>
                            </div> : <div>
                                <Typography variant='h6'>Validate your phone number</Typography>
                                <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>We will send you a 6-digit code to help us verify your phone number</Typography>
                            </div>}

                        <FormControl margin="normal" fullWidth>
                            <Typography color='primary'>Phone Number</Typography>
                            <Input
                                name="phoneNumber"
                                autoFocus
                                type="tel"
                                disabled={!this.props.addingNumber}
                                error={this.props.error !== null}
                                value={
                                    this.props.addingNumber ? this.state.phone.value : this.props.user.phone.value ? this.props.user.phone.value.replace('+1', '') : null }
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
                            <Typography color='error'>{this.props.error ? this.props.error.message : null}</Typography>
                        </FormControl>
                        {
                            this.props.addingNumber ? null :
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="codeValidatorId">Enter your code</InputLabel>
                                    <Input
                                        placeholder='Enter 6-digit code'
                                        name="phoneNumber"
                                        type="text"
                                        error={this.props.error !== null}
                                        id="codeValidatorId"
                                        onChange={(event) => this.setState({
                                            code: {
                                                message: '',
                                                value: event.target.value,
                                            }
                                        })
                                        }
                                    />
                                    <Typography color='error'>{this.props.error ? this.props.error.message : null}</Typography>
                                </FormControl>
                        }
                        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '32px 0' }}>
                            {
                                this.props.addingNumber ?
                                    <StyledPrimaryButton
                                        onClick={() => this.handleConfirmNumber()}>
                                        {this.props.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Confirm phone number'}
                                    </StyledPrimaryButton> :
                                    <StyledPrimaryButton
                                        onClick={() => this.handleVerifyPhone()}>
                                        {this.props.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : this.state.firstCodeSent ? 'Verify' : 'Send Code'}
                                    </StyledPrimaryButton>}
                        </div>

                        {!this.props.addingNumber ? <div>
                            <Typography align='center'>Din't receive the text? <StyledSpan onClick={() => this.props.handleResendCode(this.state.phone.value)}>Resend Code</StyledSpan></Typography>
                            <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 20%' }}>
                                <StyledDivider variant="body2">or</StyledDivider>
                            </div>
                            <Typography align='center'>Need to change your number? <StyledSpan onClick={this.props.handleChangePhoneNumber}>Change my number</StyledSpan></Typography>
                        </div> : null}
                    </ExternalContainer>
                </Paper>
            </Dialog>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.account.user,
        loading: state.account.phoneFeatures.loading,
        error: state.account.phoneFeatures.error,
        open: state.account.phoneFeatures.open,
        addingNumber: state.account.phoneFeatures.addingNumber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddPhone: (phone) => { dispatch(actions.onAddPhoneFromAccount(phone)) },
        onResendCode: () => { dispatch(actions.onResendPhoneCodeFromAccount()) },
        handleChangePhoneNumber: () => { dispatch(actions.onAccountChangePhoneNumber()) },
        handleResendCode: (phone) => { dispatch(actions.onResendPhoneCode(phone)) },
        handleValidatePhone: (code) => { dispatch(actions.onValidatePhoneFromAccount(code)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ValidatePhone)