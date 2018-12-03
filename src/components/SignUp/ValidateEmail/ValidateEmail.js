import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    StyledSpan,
    StyledDivider
} from './styles';

import Presenter from '../../../helpers/SignUp/Presenter';
import * as actions from '../../../store/actions/index';
import { palette } from '../../../theme';

class ValidateEmail extends PureComponent {

    state = {
        code: {
            value: ''
        }
    };

    handleResendCode = () => {
        const userData = {
            user: this.props.user,
            codeAttribute: 'email'
        }

        Presenter.resendCode(userData)
    }

    handleVerifyEmail = () => {
        this.props.handleConfirmEmail(this.state.code.value)
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant='title' component='h6'>Check your email</Typography>
                <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>We have sent you a 6-digits code to help us verify that "{this.props.user.username}" is your email.</Typography>

                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="emailValidator">Enter your code</InputLabel>
                    <Input
                        placeholder='Enter the 6-digit code'
                        name="emailValidator"
                        type="email"
                        error={this.props.error !== null}
                        id="emailValidator"
                        onChange={(event) => this.setState({
                            code: {
                                value: event.target.value,
                            }
                        }
                        )}
                    />

                    <Typography color='error'>{this.props.error ? this.props.error.message : null}</Typography>
                </FormControl>

                <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '32px 0' }}>
                    <StyledPrimaryButton onClick={() => this.handleVerifyEmail()}>
                        {this.props.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Okay'}
                    </StyledPrimaryButton>
                </div>
                <Typography align='center'>Din't receive the email? <StyledSpan onClick={this.handleResendCode}>Resend Code</StyledSpan></Typography>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 20%' }}>
                    <StyledDivider variant="body2">or</StyledDivider>
                </div>
                <Typography align='center'>Need to change your email? <StyledSpan onClick={() => this.props.handleChangeEmail()}>Change my email</StyledSpan></Typography>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.signUp.user,
        password: state.signUp.password,
        loading: state.signUp.loading,
        error: state.signUp.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleChangeEmail: () => { dispatch(actions.onChangeEmail()) },
        handleConfirmEmail: (code) => { dispatch(actions.onConfirmEmail(code)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ValidateEmail)
