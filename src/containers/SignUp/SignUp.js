import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import ClearIcon from '@material-ui/icons/Clear';
import StyledPrimaryButton from '../../components/UI/Buttons/PrimaryButton';

import {
    StyledDiv,
    StyledIconButton,
    StyledForm,
    StyledDivider
} from './styles';

class SignUp extends Component {

    handleClose = () => {
        this.props.history.replace('/');
    };

    render() {

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open
                    disableAutoFocus
                    disableBackdropClick
                >
                    <StyledDiv>
                        <StyledIconButton
                            color="inherit"
                            aria-label="Clear"
                            onClick={this.handleClose}
                        >
                            <ClearIcon />
                        </StyledIconButton>
                        <Typography style={{ marginLeft: '5%' }}
                            variant="title"
                            id="modal-title">Sign Up</Typography>
                        <StyledForm>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                                <Input
                                    name="confirmPassword"
                                    type="password"
                                    id="confirmPassword"
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                                <Input
                                    name="phoneNumber"
                                    type="text"
                                    id="phoneNumber"
                                />
                            </FormControl>
                            <StyledPrimaryButton
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                            >
                                Sign Up
                            </StyledPrimaryButton>
                            <div>
                                <StyledDivider
                                    variant="body2">or
                                </StyledDivider>
                            </div>
                            <Typography variant="body1">Already have an account? <NavLink to="/login">Log in</NavLink>
                            </Typography>
                        </StyledForm>
                    </StyledDiv>
                </Modal>
            </div>
        );
    }
}

export default SignUp