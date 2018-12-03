import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ClearIcon from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import StyledPrimaryButton from '../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    StyledDiv,
    StyledIconButton,
    StyledForm,
    StyledDivider,
    StyledFooter,
    StyledDividerLayout,
    StyledFooterButtonLayout,
    StyledSpan
} from './styles';
import { palette } from '../../theme';

import FormHelper from '../../helpers/Login/formValidator';
import Presenter from '../../helpers/Login/Presenter';
import * as actions from '../../store/actions/index';


class Login extends Component {

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
        result: {
            error: false,
            message: "",
        }
    }

    handleLogin = (self) => {

        this.setState({
            email: {
                ...this.state.email,
                error: false,
                message: ""
            },
            password: {
                ...this.state.password,
                error: false,
                message: ""
            }
        })

        if (FormHelper.ValidateForm(this)) {

            Presenter.Auth({
                emailuser: this.state.email.value,
                password: this.state.password.value,
                RunRedux: this.props.RunRedux,
                onfailed: this.onLoginFailed,
                onsuccess: this.onLoginSucceed,
                self: self
            })

        } else {
            alert('Ops! Looks like something was wrong');
        }

    }

    render() {
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.open}
                disableAutoFocus
                disableBackdropClick
            >
                <StyledDiv>
                    <StyledIconButton
                        color="inherit"
                        aria-label="Clear"
                        onClick={() => this.props.closeSignIn()}
                    >
                        <ClearIcon />
                    </StyledIconButton>
                    <Typography style={{ marginLeft: '5%' }}
                        variant="title"
                        id="modal-title">Login</Typography>
                    <StyledForm>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(event) => this.setState({
                                    email: {
                                        ...this.state.email,
                                        value: event.target.value,
                                    }
                                }
                                )} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(event) => this.setState({
                                    password: {
                                        ...this.state.email,
                                        value: event.target.value,
                                    }
                                }
                                )}
                            />
                        </FormControl>
                        <StyledFooter>
                            <StyledFooterButtonLayout>
                                <StyledPrimaryButton
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    onClick={() => this.handleLogin(this)}
                                >
                                    {this.props.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Log in'}
                                </StyledPrimaryButton>
                            </StyledFooterButtonLayout>
                            <StyledDividerLayout>
                                <StyledDivider variant="body2">or</StyledDivider>
                            </StyledDividerLayout>
                            <Typography align="center" variant="body1">Don't have an account? <StyledSpan onClick={() => this.props.openSignUp()}>Sign up</StyledSpan> </Typography>
                        </StyledFooter>
                    </StyledForm>
                </StyledDiv>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        open: state.signIn.open,
        loading: state.signIn.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSignIn: () => { dispatch(actions.openSignIn(false)) },
        openSignUp: () => {
            dispatch(actions.openSignIn(false));
            dispatch(actions.openSignUp(true));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)