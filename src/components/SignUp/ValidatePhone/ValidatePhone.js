import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import { space } from '../../../theme';
import {
    StyledSpan,
    StyledDivider
} from './styles';

class ValidatePhone extends Component {

    state = {
        phone: {
            disabled: true,
            value: '123123414',
            message: '',
            error: false
        },
        code: {
            value: '',
            disabled: false,
            error: false,
            message: ''
        }
    };

    handelResendCode = () => {

    }

    handleChangeNumber = () => {

    }

    handleDoThisLater = () => {
        
    }

    render() {


        return (
            <React.Fragment>
                <Typography variant='body1' component='h3'>Verify your phone number</Typography>
                <Typography variant='body1' component='p' style={{ margin: '16px 0' }}>We sent you 4-digit code to help us verify your phone number. Code sent +1 {this.state.phone.value}</Typography>

                <form>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="phoneNumberValidate">Phone Number</InputLabel>
                        <Input
                            name="phoneNumber"
                            type="tel"
                            disabled={this.state.phone.disabled}
                            error={this.state.phone.error}
                            value={this.state.phone.value}
                            // onBlur={this.confirmPasswordOnBlur.bind(this)}
                            id="phoneNumberValidate"
                            onChange={(event) => this.setState({
                                phone: {
                                    ...this.state.phone,
                                    value: event.target.value,
                                }
                            }
                            )}
                        />
                        <Typography color='error'>{this.state.phone.message}</Typography>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="codeValidatorId">Enter you code</InputLabel>
                        <Input
                            placeholder='Enter 4-digit code'
                            name="phoneNumber"
                            type="text"
                            error={this.state.code.error}
                            disabled={this.state.code.disabled}
                            // onBlur={this.confirmPasswordOnBlur.bind(this)}
                            id="codeValidatorId"
                            onChange={(event) => this.setState({
                                code: {
                                    ...this.state.code,
                                    value: event.target.value,
                                }
                            }
                            )}
                        />
                        <Typography color='error'>{this.state.code.message}</Typography>
                    </FormControl>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '32px 0' }}>
                        <StyledPrimaryButton>Verify</StyledPrimaryButton>
                    </div>
                    <Typography align='center'>Din't receive the text? <StyledSpan onClick={this.handelResendCode}>Resend Code</StyledSpan></Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 20%' }}>
                        <StyledDivider variant="body2">or</StyledDivider>
                    </div>
                    <Typography align='center'>Need to change your number? <StyledSpan onClick={this.handleChangeNumber}>Change my number</StyledSpan></Typography>
                    <Typography align='center' style={{ marginTop: '16px', cursor: 'pointer'}} onClick={this.handleDoThisLater}>I'll do this later</Typography>
                </form>

            </React.Fragment>
        );
    }
}

export default ValidatePhone