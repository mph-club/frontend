import React, { Component } from 'react';


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

import {
    StyledIconButton,
    ExternalContainer
} from './styles';
import StyledPrimaryButton from '../../../UI/Buttons/PrimaryButton/PrimaryButton';

class ChangePassword extends Component {

    state = {
        oldPassword: {
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

    handleSubmit = event => {
        event.preventDefault();
    }

    passwordOnBlur = (event) => {
        const expCounter = new RegExp("^(?=.{8,})")
        const expLowercase = new RegExp("^(?=.*[a-z])")
        const expUppercase = new RegExp("^(?=.*[0-9])")

        if ((expCounter.test(event.target.value)) || (this.state.password.value.trim() === "")) {
            this.setState({ 
                password: { ...this.state.password, error: false, message: "", touched: true } })
        } else {
            this.setState({ 
                password: { ...this.state.password, error: true, message: "The password must be eight characters or longer" , touched: true}})
            return;
        }

        if (expLowercase.test(event.target.value)) {
            this.setState({ 
                password: { ...this.state.password, error: false, message: "" , touched: true} })
        } else {
            this.setState({ 
                password: { ...this.state.password, error: true, message: "The password must contain at least 1 lowercase alphabetical character" , touched: true} })
            return;
        }

        if (expUppercase.test(event.target.value)) {
            this.setState({ 
                password: { ...this.state.password, error: false, message: "" , touched: true} })
        } else {
            this.setState({ 
                password: { ...this.state.password, error: true, message: "The password must contain at least 1 numeric character" , touched: true} })
        }
    }

    confirmPasswordOnBlur = (event) => {
        if (this.state.password.value === event.target.value) {
            this.setState({ 
                passwordMatch: { error: false, message: "" , touched: true} })
        } else {
            this.setState({ 
                passwordMatch: { error: true, message: "The passwords don't match" , touched: true}
            })
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
                        <DialogTitle id="dialog-change-password" style={{ marginTop: '-24px' }}>Change Password</DialogTitle>
                        <DialogContent>
                            <form onSubmit={this.handleSubmit}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="oldPassword">Type your old password</InputLabel>
                                    <Input
                                        name="oldPassword"
                                        type="password"
                                        id="oldPassword"
                                        onChange={(event) => this.setState({
                                            oldPassword: {
                                                value: event.target.value,
                                                touched: true
                                            }
                                        })}
                                    />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="newPassword">Put your new password</InputLabel>
                                    <Input
                                        error={this.state.password.error}
                                        name="newPassword"
                                        type="password"
                                        id="newPassword"
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
                                    <StyledPrimaryButton disabled={ !this.state.password.touched || !this.state.passwordMatch.touched || !this.state.oldPassword.touched || this.state.password.error || this.state.passwordMatch.error } type='submit'>Submit</StyledPrimaryButton>
                                </DialogActions>
                            </form>
                        </DialogContent>
                    </ExternalContainer>
                </Paper>
            </Dialog>
        );
    }
}

export default ChangePassword