
import React from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import logo from '../../../assets/images/logo.png';
import { StyledBackground, StyledExternalContainer } from './styles';
import { palette } from '../../../theme';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';

import * as actions from '../../../store/actions/index';

const WelcomeDialog = (props) => {

    return (
        <Dialog
            open={props.open}
            aria-labelledby="responsive-dialog-title"
            style={{ backgroundColor: 'transparent' }}
        >
            <StyledBackground >
                <StyledExternalContainer>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <Typography variant="h4" style={{ color: palette.white, margin: '32px 0 16px' }}>Welcome to the club</Typography>
                    <Typography variant="body1" component="p" style={{ color: palette.white, maxWidth: '300px', marginBottom: '32px' }}>Keeping our guests and hosts safe is our number one priority. That’s why we need you to confirm a few more details before we can activate your account.</Typography>
                    <StyledPrimaryButton
                        backgroundcolor={palette.green}
                        hovercolor='#2EBB57'
                        onClick={() => props.handleGetStarted()}>Get Started</StyledPrimaryButton>
                </StyledExternalContainer>

            </StyledBackground>

        </Dialog>
    );
}

const mapStateToProps = state => {
    return {
        open: state.auth.openWelcomeDialog
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetStarted: () => { dispatch(actions.onBoardingGetStarted()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeDialog)
