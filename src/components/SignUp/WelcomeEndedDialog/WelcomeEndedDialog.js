import React from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import logo from '../../../assets/images/logo.png';
import { StyledBackground, StyledExternalContainer } from './styles';
import { palette } from '../../../theme';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';

import * as actions from '../../../store/actions/index';

const WelcomeEndedDialog = (props) => {


    return (
        <Dialog
            open={props.open}
            onClose={() => props.handleClose()}
            aria-labelledby="responsive-dialog-title"
            style={{ backgroundColor: 'transparent' }}
        >
            <StyledBackground >
                <StyledExternalContainer>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <Typography variant="h4" style={{ color: palette.white, margin: '32px 0 16px' }}>You're ready to go!</Typography>
                    <Typography variant="body1" component="p" style={{ color: palette.white, maxWidth: '260px', marginBottom: '32px' }}>Continue exploring our host's cars or become a host yourself by listing your car.</Typography>

                    <div style={{ maxWidth: '220px'}}>
                        <StyledPrimaryButton
                            backgroundcolor={palette.green}
                            onClick={() => props.handleClose()}
                            hovercolor='#2EBB57' style={{ width: '100%' }}>
                                Continue exploring
                        </StyledPrimaryButton>
                        {/* <StyledSecondaryButton 
                            style={{ width: '100%', marginTop: space[3] }}>
                                List your card
                        </StyledSecondaryButton> */}
                    </div>
                </StyledExternalContainer>
            </StyledBackground>
        </Dialog>
    );
}

const mapStateToProps = state => {
    return {
        open: state.auth.openWelcomeEndedDialog
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClose: () => { dispatch( actions.onCloseEndedDialog() )}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeEndedDialog)