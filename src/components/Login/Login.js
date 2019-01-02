import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClearIcon from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import StyledPrimaryButton from '../UI/Buttons/PrimaryButton/PrimaryButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import {
    StyledIconButton,
    StyledDivider,
    StyledFooter,
    StyledDialogContent,
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

    handleLogin = event => {
        event.preventDefault();
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

    handleForgotPassword = () => {
        this.props.openForgotPassword();
    }

    render() {

        return (
            <Dialog
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.open}
                onClose={() => this.props.closeSignIn()}
                fullScreen={this.props.fullScreen}
            >
                <StyledIconButton color="inherit" aria-label="Clear" onClick={() => this.props.closeSignIn()}>
                    <ClearIcon />
                </StyledIconButton>
                <DialogTitle id="login-title-id">Login</DialogTitle>
                <StyledDialogContent>
                    <form onSubmit={this.handleLogin} method='POST'>
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
                        <StyledFooterButtonLayout>
                            <StyledPrimaryButton variant="contained" color="primary" type="submit">
                                {this.props.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Log in'}
                            </StyledPrimaryButton>
                        </StyledFooterButtonLayout>
                    </form>
                    <StyledFooter>
                        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '16px' }}>
                            <TextButton onClick={this.handleForgotPassword}>Forgot password?</TextButton>
                        </div>
                        <StyledDividerLayout>
                            <StyledDivider variant="body2">or</StyledDivider>
                        </StyledDividerLayout>
                        <Typography align="center" variant="body1">Don't have an account? <StyledSpan onClick={() => this.props.openSignUp()}>Sign up</StyledSpan> </Typography>
                    </StyledFooter>
                </StyledDialogContent>
            </Dialog>
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

Login.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(connect(mapStateToProps, mapDispatchToProps)(Login))