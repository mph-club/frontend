
import React, { Component } from 'react';
import { connect } from "react-redux";

import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledExternalContainer, StyledSpan, StyledDivider } from './styles';
import { palette } from '../../../theme';

import * as actions from '../../../store/actions/index';



class ConfirmUser extends Component {

    state = {
        code: ''
    }

    handleVerifyEmail = () => {
        this.props.handleConfirmEmail(this.state.code)   
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                aria-labelledby="responsive-dialog-title"
            >
                <Paper style={{ width: '460px', height: 'auto' }} elevation={1}>
                    <StyledExternalContainer>
                        <Typography variant='title' component='h6'>This user isn't confirmed</Typography>
                        <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>Check your email. We have sent you a 6-digits code to help us verify your email</Typography>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="emailValidator">Enter your code</InputLabel>
                            <Input
                                placeholder='Enter the 6-digit code'
                                name="emailValidator"
                                type="email"
                                error={this.props.error !== null}
                                id="emailValidator"
                                onChange={(event) => this.setState({
                                    code: event.target.value
                                }
                                )}
                            />

                            <Typography color='error'>{this.props.error ? this.props.error.message : null}</Typography>
                        </FormControl>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '32px 0' }}>
                            <StyledPrimaryButton onClick={() => this.handleVerifyEmail()}>
                                {this.props.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Verify'}
                            </StyledPrimaryButton>
                        </div>
                        <Typography align='center'>Din't receive the email? <StyledSpan onClick={() => this.props.handleResendCode()}>Resend Code</StyledSpan></Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 20%' }}>
                            <StyledDivider variant="body2">or</StyledDivider>
                        </div>
                        <Typography align='center'>You want to use another email? <StyledSpan onClick={() => this.props.handleChangeEmail()}>Sign Up</StyledSpan></Typography>
                    </StyledExternalContainer>
                </Paper>
            </Dialog>
        );
    }

}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        open: state.auth.openConfirmEmail,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

const matDispatchToProsp = dispatch => {
    return {
        handleChangeEmail: () => { dispatch(actions.onChangeEmail()) },
        handleConfirmEmail: (code) => { dispatch(actions.onConfirmEmail(code)) },
        handleResendCode: () => { dispatch(actions.onResendEmailCode())}
    }
}

export default connect(mapStateToProps, matDispatchToProsp)(ConfirmUser)