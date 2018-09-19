import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ClearIcon from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import StyledPrimaryButton from '../../components/UI/Buttons/PrimaryButton';

import {
    StyledDiv,
    StyledIconButton,
    StyledForm,
    StyledDivider,
    StyledFooter,
    StyledDividerLayout,
    StyledFooterButtonLayout
} from './styles';
import { theme } from '../../theme';

class Login extends Component {

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
                            id="modal-title">Login</Typography>
                        <StyledForm>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <StyledFooter>
                                <StyledFooterButtonLayout>
                                    <StyledPrimaryButton
                                        type="submit"
                                        fullWidth
                                        variant="raised"
                                        color="primary"
                                    >
                                        Log in
                                    </StyledPrimaryButton>
                                </StyledFooterButtonLayout>
                                <StyledDividerLayout>
                                    <StyledDivider
                                        variant="body2">or
                                    </StyledDivider>
                                </StyledDividerLayout>
                                <Typography align="center" variant="body1">Don't have an account? <NavLink to="/signup">Sign up</NavLink>
                                </Typography>
                            </StyledFooter>
                        </StyledForm>
                    </StyledDiv>
                </Modal>
            </div>
        );
    }
}

export default Login