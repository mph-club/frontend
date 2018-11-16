
import React from 'react';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog'
import logo from '../../../assets/images/logo.png';
import { StyledBackground, StyledExternalContainer } from './styles';
import { palette } from '../../../theme';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';

const WelcomeDialog = (props) => {

    const { fullScreen } = props.fullScreen

    return (
        <Dialog
            fullScreen={fullScreen}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="responsive-dialog-title"
            style={{ backgroundColor: 'transparent' }}
        >
            <StyledBackground >
                <StyledExternalContainer>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <Typography variant="display1" style={{color: palette.white, margin: '32px 0 16px' }}>Welcome to the club</Typography>
                    <Typography variant="body1" component="p" style={{ color: palette.white, maxWidth: '300px', marginBottom: '32px'}}>Keeping our guests and hosts safe is our number one priority. That’s why we need you to confirm a few more details before we can activate your account.</Typography>
                    <StyledPrimaryButton backgroundcolor={palette.green} hovercolor='#2EBB57'>Get Started</StyledPrimaryButton>
                </StyledExternalContainer>

            </StyledBackground>

        </Dialog>
    );
}

export default withMobileDialog()(WelcomeDialog)
