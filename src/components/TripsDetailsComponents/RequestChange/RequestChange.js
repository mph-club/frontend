import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../../theme';

import {
    StyledExternalContainer,
    StyledContainer,
    StyledWhiteContainer,
    StyledRowContainer,
    StyledSlantedDivider,
    StyledDateWrapper
} from './styles';
import Alert from '../../UI/Alert/Alert';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';
import { hours } from '../../../tools/constants';
import InfoIcon from '@material-ui/icons/Info';
import Title from '../../UI/CustomTypography/Title/Title';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';

class RequestChange extends Component {

    state = {
        openAlert: false,
        totalPerDay: 481,
        cancellationFee: 50,
        tripFee: 36,
        tripDays: 4,
        totalRefund: 1838
    }

    render() {
        return (
            <React.Fragment>
                <StyledExternalContainer>
                    <div
                        style={{
                            width: '300px',
                            paddingLeft: `${space[3]}`,
                            paddingRight: `${space[3]}`
                        }}>
                        <Typography variant="display1" color="primary" component="h2">Request change</Typography>
                    </div>
                    <div
                        style={{
                            marginTop: '32px',
                            paddingLeft: `${space[3]}`,
                            paddingRight: `${space[3]}`
                        }}>
                        <Typography variant="title" component="p" style={{ fontSize: 16, color: palette.grey02 }}>TRIP DATES</Typography>
                        <StyledDateWrapper>
                            <div>
                                <Typography variant="body1" color="primary" component="h5" style={{ color: `${palette.grey02}`, fontWeight: 600, marginBottom: `${space[1]}` }}>Start date</Typography>
                                <Typography variant="title" component="h2">Tue, Jul 6, 2018</Typography>
                                <Typography variant="body2" component="h2" style={{ fontWeight: 600 }}>10 AM</Typography>
                            </div>
                            <StyledSlantedDivider />
                            <div>
                                <Typography variant="body1" color="primary" component="h5" style={{ color: `${palette.grey02}`, fontWeight: 600, marginBottom: `${space[1]}` }}>End date</Typography>
                                <Typography variant="title" component="h2">Fri, Jul 9, 2018</Typography>
                                <Typography variant="body2" component="h2" style={{ fontWeight: 600 }}>12 PM</Typography>
                            </div>
                        </StyledDateWrapper>
                        <Divider style={{ maxWidth: '340px', margin: '24px 0' }} />
                        <Title component="h2" style={{ marginBottom: space[2], marginTop: space[3] }}>FEES AND PRICE DETAILS</Title>
                        <StyledContainer>
                            <StyledRowContainer style={{ marginLeft: space[3], marginRight: space[3] }}>
                                <Typography variant="body2" component="p">Trip Price</Typography>
                                <Typography variant="body2" component="p">${this.state.tripPrice}.00/day</Typography>
                            </StyledRowContainer>
                            <StyledRowContainer style={{ marginLeft: space[3], marginRight: space[3] }}>
                                <Typography variant="body2" component="p">Premium protection</Typography>
                                <Typography variant="body2" component="p">${this.state.premiumProtection}.00/day</Typography>
                            </StyledRowContainer>
                            <StyledRowContainer style={{ marginLeft: space[3], marginRight: space[3] }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body2" component="p" style={{ marginRight: space[1] }}>Trip Fee</Typography>
                                    <Tooltip disableFocusListener disableTouchListener title="This fee helps us run the platform and provide security services such as background checks, and valid identifications.">
                                        <InfoIcon style={{ fontSize: 16, color: palette.grey02 }} />
                                    </Tooltip>
                                </div>
                                <Typography variant="body2" component="p">${this.state.tripFee}.00/day</Typography>
                            </StyledRowContainer>
                            <StyledRowContainer style={{ marginLeft: space[3], marginRight: space[3] }}>
                                <Typography variant="body2" component="p">Total per day</Typography>
                                <Typography variant="body2" component="p">${this.state.totalPerDay}.00/day</Typography>
                            </StyledRowContainer>
                            <StyledWhiteContainer>
                                <StyledRowContainer>
                                    <Typography variant="body2" component="p">${this.state.totalPerDay}.00 x {this.state.tripDays} day trip</Typography>
                                    <Typography variant="body2" component="p">${this.state.totalPerDay * this.state.tripDays}.00/day</Typography>
                                </StyledRowContainer>
                                <StyledRowContainer>
                                    <Typography variant="title" component="p">Trip Total</Typography>
                                    <Typography variant="title" component="p">${this.state.totalPerDay * this.state.tripDays}.00/day</Typography>
                                </StyledRowContainer>
                                <StyledRowContainer>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body2" component="p" style={{ marginRight: space[1] }}>Refundable deposit</Typography>
                                            <InfoIcon style={{ fontSize: 16, color: palette.grey02 }} onClick={this.showDepositDetails} />
                                        </div>
                                        <Typography variant="body1" component="p" style={{ color: palette.grey02, marginTop: space[1] }}>Refundable by Jul 16</Typography>
                                    </div>
                                    <Typography variant="body2" component="p">${this.state.deposit}.00</Typography>
                                </StyledRowContainer>
                            </StyledWhiteContainer>
                        </StyledContainer>
                        <Divider style={{ margin: '24px 0', maxWidth: '340px' }} />
                        <StyledRowContainer maxWidth='340px'>
                            <Typography variant="body2" component="p">Payment Info</Typography>
                            <Typography variant="body2" component="p" style={{ color: palette.grey02 }}>Visa 4455</Typography>
                        </StyledRowContainer>
                        <Divider style={{ margin: '24px 0', maxWidth: '340px' }} />
                        <div style={{ display: 'block', maxWidth: '240px' }}>
                            <Typography variant="body1" component="p" style={{ fontWeight: 500 }}>Mike needs to confirm this request.</Typography>
                            <Typography variant="body1" component="p" style={{ fontWeight: 500, margin: '16px 0',color: palette.grey02, textAlign:'justify' }}>By tapping below, you agree to pay the total show and to the mph terms of service and cancellation policy.</Typography>
                            <PrimaryButton fullWidth style={{ marginBottom: '16px' }} onClick={this.handleContinue}>Request change</PrimaryButton>
                            <SecondaryButton fullWidth>Cancel</SecondaryButton>
                        </div>
                    </div>
                </StyledExternalContainer>
                <Alert
                    id="delete-photo"
                    title="Delete photo"
                    text="Are you sure you want to delete this photo?"
                    okTitle="Delete"
                    handleOk={this.handleOk}
                    openAlert={this.state.openAlert}
                    handleClose={this.handleCloseAlert}
                />
            </React.Fragment>
        );
    }
}

export default RequestChange