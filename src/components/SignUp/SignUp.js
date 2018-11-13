import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import ClearIcon from '@material-ui/icons/Clear';
import StyledPrimaryButton from '../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    StyledDiv,
    StyledIconButton,
    StyledForm,
    StyledDivider,
    StyledFooter,
    StyledFooterButtonLayout,
    StyledDividerLayout
} from './styles';
import { palette } from '../../theme';

import Presenter from '../../helpers/SignUp/Presenter';
import FormHelper from '../../helpers/SignUp/formValidator';

class SignUp extends Component {

    state = {
        email: {
            value: "",
            error: false,
            message: "",
        },
        phone: {
            value: "",
            error: false,
            message: "",
        },
        password: {
            value: "",
            error: false,
            message: "",
        },
        passwordMatch: {
            error: false,
            message: ""
        },
        result: {
            error: false,
            message: "",
        },
        loading: false,
        error: false,
        success: false
    }

    togglePostRequest() {

        const prev = this.state.loading
        this.setState({
            loading: !prev
        })
    }

    onSignUpClicked = (self) => {
        this.setState({
            email: {
                ...self.state.email,
                error: false,
                message: "",
            },
            phone: {
                ...self.state.phone,
                error: false,
                message: "",
            },
            password: {
                ...self.state.password,
                error: false,
                message: "",
            },

        })
        if (FormHelper.ValidateForm(this)) {
            Presenter.SignUp({
                email: this.state.email.value,
                phone: this.state.phone.value,
                password: this.state.password.value,
                RunRedux: this.props.RunRedux,
                onfailed: this.onSignupFailed,
                onsuccess: this.onSignupSucceed,
                self: self
            })
        } else {
            setTimeout(() => this.togglePostRequest(), 400);
            return false;
        }
    }

    onSignupSucceed(response) {
        this.setState({
            success: true
        });
        this.togglePostRequest();
    }

    onSignupFailed(response) {
        const prev = this.state.loading

        this.setState({
            error: response,
            loading: !prev
        })
    }

    emailOnBlur = (event) => {

        // eslint-disable-next-line
        const exp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

        if (exp.test(event.target.value)) {
            this.setState({ email: { ...this.state.email, error: false, message: "" } })
        } else {
            this.setState({ email: { ...this.state.email, error: true, message: "The email address isn't valid" } })
        }
    }

    passwordOnBlur = (event) => {
        const exp = new RegExp("^(?=.{8,})")

        if (exp.test(event.target.value)) {
            this.setState({ password: { ...this.state.password, error: false, message: "" } })
        } else {
            this.setState({ password: { ...this.state.password, error: true, message: "The password must be eight characters or longer" } })
        }
    }

    confirmPasswordOnBlur = (event) => {

        if (this.state.password.value === event.target.value) {
            this.setState({ passwordMatch: { error: false, message: "" }})
        } else {
            this.setState({ passwordMatch: { error: true, message: "The passwords don't match" } })
        }
    }

    render() {
        return (
            <Modal
                aria-labelledby="sign-up-modal"
                aria-describedby="This is the sign up form"
                open={this.props.openSignUp}
                disableAutoFocus
                disableBackdropClick
            >
                <StyledDiv>
                    <StyledIconButton
                        color="inherit"
                        aria-label="Clear"
                        onClick={this.props.closeSignUp}
                    >
                        <ClearIcon />
                    </StyledIconButton>
                    <Typography style={{ marginLeft: '5%' }}
                        variant="title"
                        id="modal-title">Sign Up</Typography>
                    <StyledForm autoComplete="off">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                error={this.state.email.error}
                                onBlur={this.emailOnBlur.bind(this)}
                                onChange={(event) => this.setState({
                                    email: {
                                        ...this.state.email,
                                        value: event.target.value,
                                    }
                                }
                            )}/>
                            <Typography color='error'>{this.state.email.message}</Typography>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                error={this.state.password.error}
                                name="password"
                                type="password"
                                id="password"
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
                            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                            <Input
                                name="confirmPassword"
                                type="password"
                                error={this.state.passwordMatch.error}
                                onBlur={this.confirmPasswordOnBlur.bind(this)}
                                id="confirmPassword"
                            />
                            <Typography color='error'>{this.state.passwordMatch.message}</Typography>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="signUpPhoneNumber">Phone Number</InputLabel>
                            <Input
                                name="phoneNumber"
                                type="tel"
                                id="signUpPhoneNumber"
                            />
                        </FormControl>
                        <StyledFooter>
                            <StyledFooterButtonLayout>
                                <StyledPrimaryButton
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    onClick={() => this.onSignUpClicked(this)}
                                >
                                    {this.state.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Sign Up'}
                                </StyledPrimaryButton>
                            </StyledFooterButtonLayout>
                            <StyledDividerLayout>
                                <StyledDivider variant="body2">or</StyledDivider>
                            </StyledDividerLayout>
                            <Typography variant="body1">Already have an account? <button onClick={this.props.openLogin}>Log in</button>
                            </Typography>
                        </StyledFooter>
                    </StyledForm>
                </StyledDiv>
            </Modal>
        );
    }
}

export default SignUp