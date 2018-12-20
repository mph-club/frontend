import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    StyledIconButton,
    ExternalContainer
} from './styles';
import * as actions from '../../../store/actions/index';
import { palette } from '../../../theme';

class ForgotPassword extends Component {

    state = {
        email: {
            value: '',
            error: true
        },
        code: {
            touched: false,
            value: ''
        },
        password: {
            value: '',
            touched: false,
            error: false,
            message: ''
        },
        passwordMatch: {
            touched: false,
            error: false,
            message: ''
        }
    }

    passwordOnBlur = (event) => {
        const expCounter = new RegExp("^(?=.{8,})")
        const expLowercase = new RegExp("^(?=.*[a-z])")
        const expUppercase = new RegExp("^(?=.*[0-9])")

        if ((expCounter.test(event.target.value)) || (this.state.password.value.trim() === "")) {
            this.setState({
                password: { ...this.state.password, error: false, message: "", touched: true }
            })
        } else {
            this.setState({
                password: { ...this.state.password, error: true, message: "The password must be eight characters or longer", touched: true }
            })
            return;
        }

        if (expLowercase.test(event.target.value)) {
            this.setState({
                password: { ...this.state.password, error: false, message: "", touched: true }
            })
        } else {
            this.setState({
                password: { ...this.state.password, error: true, message: "The password must contain at least 1 lowercase alphabetical character", touched: true }
            })
            return;
        }

        if (expUppercase.test(event.target.value)) {
            this.setState({
                password: { ...this.state.password, error: false, message: "", touched: true }
            })
        } else {
            this.setState({
                password: { ...this.state.password, error: true, message: "The password must contain at least 1 numeric character", touched: true }
            })
        }
    }

    confirmPasswordOnBlur = (event) => {
        if (this.state.password.value === event.target.value) {
            this.setState({
                passwordMatch: { error: false, message: "", touched: true }
            })
        } else {
            this.setState({
                passwordMatch: { error: true, message: "The passwords don't match", touched: true }
            })
        }
    }

    handleEmailChange = event => {
        this.setState({
            email: {
                value: event.target.value
            }
        })
    }

    onEmailBlur = event => {
        // eslint-disable-next-line
        const exp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

        if ((exp.test(event.target.value)) || (this.state.email.value.trim() === "")) {
            this.setState(prevState => {
                return {
                    email: { ...prevState.email, error: false, message: "" }
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    email: { ...prevState.email, error: true, message: "The email address isn't valid" }
                }
            })
        }
    }

    handleSendCode = () => {
        this.props.onSendForgotPasswordCode(this.state.email.value)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onForgotPassword(this.state.email.value, this.state.code.value, this.state.password.value)
    }

    render() {

        return (
            <Dialog
                open={this.props.open}
                onClose={() => this.props.closeForm()}
            >
                <Paper style={{ width: '460px', height: 'auto' }} elevation={1}>
                    <StyledIconButton color="inherit" aria-label="Clear" onClick={() => this.props.closeForm()}>
                        <ClearIcon />
                    </StyledIconButton>
                    <ExternalContainer>
                        <DialogTitle id="dialog-change-password" style={{ marginTop: '-24px' }}>Forgot Password</DialogTitle>
                        {
                            this.props.enteringEmail ?
                                <DialogContent>
                                    <form>
                                        <FormControl margin="normal" required fullWidth>
                                            <InputLabel htmlFor="emailForResetPassword">Type your email here</InputLabel>
                                            <Input
                                                name="emailForResetPassword"
                                                type="email"
                                                id="emailForResetPassword"
                                                onBlur={event => this.onEmailBlur(event)}
                                                onChange={event => this.handleEmailChange(event)}
                                            />
                                            <Typography color='error'>{this.state.email.message}</Typography>
                                            <Typography color='error'>{this.props.error ? this.props.error.message : null}</Typography>
                                        </FormControl>
                                        <DialogActions>
                                            <StyledPrimaryButton
                                                disabled={this.state.email.error}
                                                onClick={this.handleSendCode}>
                                                {this.props.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Send code'}
                                            </StyledPrimaryButton>
                                        </DialogActions>
                                    </form>
                                </DialogContent> :
                                <DialogContent>
                                    <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>We have sent you a 6-digits code to {this.props.data ? this.props.data.CodeDeliveryDetails.Destination : null}</Typography>
                                    <form>
                                        <FormControl margin="normal" required fullWidth>
                                            <InputLabel htmlFor="codeForForgotPassword">Type your code here</InputLabel>
                                            <Input
                                                name="codeForForgotPassword"
                                                type="text"
                                                id="codeForForgotPassword"
                                                error={this.props.error !== null}
                                                onChange={(event) => this.setState({
                                                    code: {
                                                        value: event.target.value,
                                                        touched: true
                                                    }
                                                })}
                                            />
                                            <Typography color='error'>{this.props.error ? this.props.error.message : null}</Typography>
                                        </FormControl>
                                        <FormControl margin="normal" required fullWidth>
                                            <InputLabel htmlFor="newPassword">Put your new password</InputLabel>
                                            <Input
                                                name="newPassword"
                                                type="password"
                                                id="newPassword"
                                                error={this.state.password.error}
                                                onBlur={this.passwordOnBlur.bind(this)}
                                                onChange={(event) => this.setState({
                                                    password: {
                                                        ...this.state.password,
                                                        value: event.target.value,
                                                    }
                                                }
                                                )}
                                            />
                                            <Typography color='error'>{this.state.password.message}</Typography>
                                        </FormControl>
                                        <FormControl margin="normal" required fullWidth>
                                            <InputLabel htmlFor="confirmNewPassword">Confirm your new password</InputLabel>
                                            <Input
                                                name="confirmNewPassword"
                                                type="password"
                                                id="confirmNewPassword"
                                                error={this.state.passwordMatch.error}
                                                onBlur={this.confirmPasswordOnBlur.bind(this)}
                                            />
                                            <Typography color='error'>{this.state.passwordMatch.message}</Typography>
                                        </FormControl>
                                        <DialogActions>
                                            <StyledPrimaryButton
                                                disabled={
                                                    !this.state.password.touched ||
                                                    !this.state.passwordMatch.touched ||
                                                    !this.state.code.touched ||
                                                    this.state.password.error ||
                                                    this.state.passwordMatch.error}
                                                onClick={this.handleSubmit}>
                                                {this.props.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Submit'}
                                            </StyledPrimaryButton>
                                        </DialogActions>
                                    </form>
                                </DialogContent>
                        }
                    </ExternalContainer>
                </Paper>
            </Dialog>
        );
    }
}

const mapStateToProps = state => {
    return {
        open: state.auth.openForgotPassword,
        error: state.auth.error,
        loading: state.auth.loading,
        data: state.auth.data,
        enteringEmail: state.auth.enteringEmail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeForm: () => { dispatch(actions.openForgotPassword(false)) },
        onSendForgotPasswordCode: (email) => { dispatch(actions.onSendForgotPasswordCode(email)) },
        onForgotPassword: (email, code, newPassword) => { dispatch(actions.onForgotPassword(email, code, newPassword)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)