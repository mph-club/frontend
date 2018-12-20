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

import * as actions from '../../store/actions/index';
import TextButton from '../UI/Buttons/TextButton/TextButton';


class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleLogin = () => {
        this.props.handleSignIn(this.state.email, this.state.password)
    }

    onChange = (event) => {
        if (event.target) {
            this.setState({
                ...this.state,
                [event.target.id]: event.target.value
            })
        }
    }

    handleForgotPassword = event => {
        event.preventDefault();
        this.props.openForgotPassword();
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
                        variant="h6"
                        id="modal-title">Login</Typography>
                    <StyledForm>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                error={this.props.error !== null}
                                autoComplete="email"
                                autoFocus
                                onChange={(event) => this.onChange(event)} />
                        </FormControl>
                        <div style={{ display: 'flex' }}>
                            <Typography variant="body1" component='p' color='error'>{this.props.error ? this.props.error.message + ' ' : null}</Typography>
                        </div>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(event) => this.onChange(event)}
                            />
                        </FormControl>
                        <StyledFooter>
                            <StyledFooterButtonLayout>
                                <StyledPrimaryButton
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.handleLogin()}
                                >
                                    {this.props.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Log in'}
                                </StyledPrimaryButton>
                            </StyledFooterButtonLayout>
                            <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '16px'}}>
                                <TextButton onClick={event => this.handleForgotPassword(event)}>Forgot password?</TextButton>
                            </div>
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
        open: state.auth.openSignIn,
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSignIn: () => { dispatch(actions.openSignIn(false)) },
        openForgotPassword: () => {
            dispatch(actions.openSignIn(false));
            dispatch(actions.openForgotPassword(true));
        },
        handleSignIn: (email, password) => { dispatch(actions.onSignIn(email, password)) },
        openSignUp: () => {
            dispatch(actions.openSignIn(false));
            dispatch(actions.openSignUp(true));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)