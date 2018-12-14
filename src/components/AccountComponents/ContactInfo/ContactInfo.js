import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaskedInput from 'react-text-mask'

import { StyledStepsContainer, StyledEmailWrapper } from './styles';
import Typography from '@material-ui/core/Typography';
import TextButton from '../../UI/Buttons/TextButton/TextButton';
import { palette, space } from '../../../theme';
import { Divider } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Title from '../../UI/CustomTypography/Title/Title';
import ValidatePhone from './ValidatePhone/ValidatePhone';

import * as actions from '../../../store/actions/index';
import DeleteAccount from './DeleteAccount/DeleteAccount';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            readOnly
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

class ContactInfo extends Component {

    state = {
        openDeleteAccount: false
    }

    handlePhoneActions = () => {

    }

    render() {

        const { user } = this.props
        let phoneAction = ''

        if (!user.phone.value) {
            phoneAction = 'Add'
        } else {
            if (user.phone.verified) {
                phoneAction = 'Change'
            } else {
                phoneAction = 'Validate'
            }
        }

        return (
            <React.Fragment>
                <ValidatePhone />
                <DeleteAccount 
                    open={this.state.openDeleteAccount} 
                    handleClose={() => this.setState({ openDeleteAccount: false})}/>
                <Title component="p" style={{ marginBottom: `${space[3]}` }}>EMAIL</Title>
                <StyledStepsContainer>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <StyledEmailWrapper variant="h6">{user.email.value} </StyledEmailWrapper>
                    </div>
                    <div>
                        <TextButton color={palette.green}>Change</TextButton>
                    </div>
                </StyledStepsContainer>
                <Divider />
                <Title component="p" style={{ marginBottom: `${space[3]}`, marginTop: `${space[4]}` }}>PHONE NUMBER</Title>
                <StyledStepsContainer>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input
                            type="tel"
                            readOnly
                            disableUnderline
                            value={user.phone.value ? user.phone.value.replace('+1', '') : null}
                            id="phoneNumberValidate"
                            style={{ fontWeight: 400, fontSize: 18 }}
                            inputComponent={TextMaskCustom}
                        />
                    </div>
                    <div>
                        <TextButton color={palette.green} onClick={() => this.handlePhoneActions()}>{phoneAction}</TextButton>
                    </div>
                </StyledStepsContainer>
                <Divider />
                <StyledStepsContainer>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: `${space[3]}` }}>
                        <Typography variant="h6" style={{ fontWeight: 400 }}>Password</Typography>
                    </div>
                    <div style={{ marginTop: `${space[3]}` }}>
                        <TextButton color={palette.green}>Change</TextButton>
                    </div>
                </StyledStepsContainer>
                <Divider />
                <StyledStepsContainer>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: `${space[3]}` }}>
                        <Typography variant="h6" style={{ fontWeight: 400 }}>Close Account</Typography>
                    </div>
                    <div style={{ marginTop: `${space[3]}` }}>
                        <TextButton color={palette.red} onClick={() => this.setState({ openDeleteAccount: true})}>Delete my account</TextButton>
                    </div>
                </StyledStepsContainer>
                <Divider />
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        user: state.account.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openValidationDialog: () => { dispatch(actions.openPhoneValidation()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo)