import React from 'react';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import ClearIcon from '@material-ui/icons/Clear';
import StyledPrimaryButton from '../../components/UI/Buttons/PrimaryButton/PrimaryButton';

import {
    StyledDiv,
    StyledIconButton,
    StyledForm,
    StyledDivider,
    StyledFooter,
    StyledFooterButtonLayout,
    StyledDividerLayout
} from './styles';

const SignUp = (props) => {
        return (
            <div>
                <Modal
                    aria-labelledby="sign-up-modal"
                    aria-describedby="This is the sign up form"
                    open={props.openSignUp}
                    disableAutoFocus
                    disableBackdropClick
                >
                    <StyledDiv>
                        <StyledIconButton
                            color="inherit"
                            aria-label="Clear"
                            onClick={props.closeSignUp}
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
                            <StyledFooter>
                                <StyledFooterButtonLayout>
                                    <StyledPrimaryButton
                                        type="submit"
                                        fullWidth
                                        variant="raised"
                                        color="primary"
                                    >
                                        Sign Up
                                    </StyledPrimaryButton>
                                </StyledFooterButtonLayout>
                                <StyledDividerLayout>
                                    <StyledDivider
                                        variant="body2">or
                                    </StyledDivider>
                                </StyledDividerLayout>
                                <Typography variant="body1">Already have an account? <button onClick={props.openLogin}>Log in</button>
                                </Typography>
                            </StyledFooter>
                        </StyledForm>
                    </StyledDiv>
                </Modal>
            </div>
        );
}

export default SignUp