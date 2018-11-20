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
    StyledDividerLayout,
    StyledSpan
} from './styles';
import { palette, space } from '../../theme';

import Presenter from '../../helpers/SignUp/Presenter';
import FormHelper from '../../helpers/SignUp/formValidator';

class SignUp extends Component {

    state = {
        email: {
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
        loading: false,
    }

    onSignUpClicked = () => {

        this.togglePostRequest();

        this.setState({
            email: {
                ...this.state.email,
                error: false,
                message: "",
            },
            password: {
                ...this.state.password,
                error: false,
                message: "",
            }
        })

        if (FormHelper.ValidateForm(this)) {
            Presenter.SignUp({
                email: this.state.email.value,
                password: this.state.password.value,
                onFailed: this.onSignupFailed,
                onSuccess: this.onSignupSucceed,
            })

        } else {
            setTimeout(() => this.togglePostRequest(), 400);
            return false;
        }
    }

    togglePostRequest() {
        const prev = this.state.loading
        this.setState({
            loading: !prev
        })
    }

    onSignupSucceed = (result) => {
        this.togglePostRequest();
        this.props.closeSignUp(result)
    }

    onSignupFailed = (err) => {
        this.togglePostRequest();

        if (err.code === "UsernameExistsException") {
            this.setState({ email: { ...this.state.email, error: true, message: err.message + " Log in instead" } })
        } else {
            alert('Ops! Looks like something was wrong')
        }
    }

    emailOnBlur = (event) => {
        // eslint-disable-next-line
        const exp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

        if ((exp.test(event.target.value)) || (this.state.email.value.trim() === "")) {
            this.setState({ email: { ...this.state.email, error: false, message: "" } })
        } else {
            this.setState({ email: { ...this.state.email, error: true, message: "The email address isn't valid" } })
        }
    }

    passwordOnBlur = (event) => {
        const expCounter = new RegExp("^(?=.{8,})")

        const expLowercase = new RegExp("^(?=.*[a-z])")

        const expUppercase = new RegExp("^(?=.*[0-9])")

        if ((expCounter.test(event.target.value)) || (this.state.password.value.trim() === "")) {
            this.setState({ password: { ...this.state.password, error: false, message: "" } })
        } else {
            this.setState({ password: { ...this.state.password, error: true, message: "The password must be eight characters or longer" } })
            return;
        }

        if (expLowercase.test(event.target.value)) {
            this.setState({ password: { ...this.state.password, error: false, message: "" } })
        } else {
            this.setState({ password: { ...this.state.password, error: true, message: "The password must contain at least 1 lowercase alphabetical character" } })
            return;
        }

        if (expUppercase.test(event.target.value)) {
            this.setState({ password: { ...this.state.password, error: false, message: "" } })
        } else {
            this.setState({ password: { ...this.state.password, error: true, message: "The password must contain at least 1 numeric character" } })
        }
    }

    confirmPasswordOnBlur = (event) => {
        if (this.state.password.value === event.target.value) {
            this.setState({ passwordMatch: { error: false, message: "" } })
        } else {
            this.setState({ passwordMatch: { error: true, message: "The passwords don't match" } })
        }
    }

    render() {

        let content = this.props.openSignUp ? <Modal
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
                <StyledForm autoComplete="on">
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
                            )} />
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
                    <Typography style={{ marginTop: space[3] }} color='primary'>By signing up or logging in, you agree to our <StyledSpan>terms of service</StyledSpan> and <StyledSpan>privacy policy</StyledSpan></Typography>
                    <StyledFooter>
                        <StyledFooterButtonLayout>
                            <StyledPrimaryButton
                                fullWidth
                                variant="raised"
                                color="primary"
                                onClick={() => this.onSignUpClicked()}
                            >
                                {this.state.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Sign Up'}
                            </StyledPrimaryButton>
                        </StyledFooterButtonLayout>
                        <StyledDividerLayout>
                            <StyledDivider variant="body2">or</StyledDivider>
                        </StyledDividerLayout>
                        <Typography variant="body1">Already have an account? <StyledSpan onClick={this.props.openLogin}>Log in</StyledSpan>
                        </Typography>
                    </StyledFooter>
                </StyledForm>
            </StyledDiv>
        </Modal> : null;

        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        );
    }
}

export default SignUp