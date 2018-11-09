import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ClearIcon from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import StyledPrimaryButton from '../../components/UI/Buttons/PrimaryButton/PrimaryButton';

import FormHelper from '../../helpers/Login/formValidator';
import Presenter from '../../helpers/Login/Presenter';
import { connect } from "react-redux";

import Cognito from '../../config/cognitoConfigure';
import { CreateUserSessionProperties, RemoveUserSessionProperties } from '../../tools/Store/Authentication/Presenter';

import {
    StyledDiv,
    StyledIconButton,
    StyledForm,
    StyledDivider,
    StyledFooter,
    StyledDividerLayout,
    StyledFooterButtonLayout
} from './styles';

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
        },
        loading: false,
        error: false
    }

    togglePostRequest() {

        const prev = this.state.loading
        this.setState({
            loading: !prev
        })
    }

    onLoginClicked = (self) => {

        this.togglePostRequest();
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

            var AmazonCognitoIdentity = require('amazon-cognito-identity-js');


            var authenticationData = {
                Username: this.state.email.value,
                Password: this.state.password.value,
            };

            var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

            var poolData = {
                UserPoolId: Cognito.COGNITOCONFIG.userPool,
                ClientId: Cognito.COGNITOCONFIG.clientId
            };

            var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

            var userData = {
                Username: this.state.email.value,
                Pool: userPool
            };

            var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function (result) {
                    self.props.RunRedux(CreateUserSessionProperties(result))
                    self.onLoginSucceed(result)
                },

                onFailure: function (err) {
                    self.onLoginFailed(err);
                }
            })

        } else {
            setTimeout(() => this.togglePostRequest(), 400);
            return false;
        }

    }

    onLoginSucceed = (response) => {
        this.togglePostRequest();
    }

    onLoginFailed = (response) => {
        console.log(response.message)

        const prev = this.state.loading
        this.setState({
            error: response.message,
            loading: !prev
        })
    }

    render() {
        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.openLogin}
                    disableAutoFocus
                    disableBackdropClick
                >
                    <StyledDiv>
                        <StyledIconButton
                            color="inherit"
                            aria-label="Clear"
                            onClick={this.props.handleCloseLogin}
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
                                        onClick={() => this.onLoginClicked(this)}
                                    >
                                        Log in
                                    </StyledPrimaryButton>
                                </StyledFooterButtonLayout>
                                <StyledDividerLayout>
                                    <StyledDivider
                                        variant="body2">or
                                    </StyledDivider>
                                </StyledDividerLayout>
                                <Typography align="center" variant="body1">Don't have an account? <button onClick={this.props.openSignUp}>Sign up</button>
                                </Typography>
                            </StyledFooter>
                        </StyledForm>
                    </StyledDiv>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        SessionReducer: state.SessionReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        RunRedux: (data) => {
            dispatch(data);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)