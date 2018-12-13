import React, { Component } from 'react';
import Footer from '../../Navigation/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../../theme';
import InfoIcon from '@material-ui/icons/Info';
import Divider from '@material-ui/core/Divider';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';

import {
    StyledExternalContainer,
    StyledFooterContainer,
    StyledContainer,
    StyledRowContainer,
    StyledWhiteContainer,
    StyledRoundedContainer
} from './styles';

class CancellationReview extends Component {

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
                        <Typography variant="h4" color="primary" component="h2">Review our cancellation policy</Typography>
                    </div>
                    <div
                        style={{
                            marginTop: '32px',
                            paddingLeft: `${space[3]}`,
                            paddingRight: `${space[3]}`
                        }}>
                        <Grid container spacing={40}>
                            <Grid item xs>
                                <div style={{ margin: '16px 0', display: 'flex' }}>
                                    <StyledRoundedContainer>1</StyledRoundedContainer>
                                    <Typography variant="body2" component="p">If you cancel multiple trips, your account may be removed from our platform</Typography>
                                </div>
                                <div style={{ margin: '16px 0', display: 'flex' }}>
                                    <StyledRoundedContainer>2</StyledRoundedContainer>
                                    <Typography variant="body2" component="p">Non-Refundable trip fee</Typography>
                                </div>
                                <div style={{ margin: '16px 0', display: 'flex' }}>
                                    <StyledRoundedContainer>3</StyledRoundedContainer>
                                    <Typography variant="body2" component="p">Cancellation fee</Typography>
                                </div>
                                <Divider />
                                <StyledRowContainer>
                                    <Typography variant="body2" component="p">Payment Info</Typography>
                                    <Typography variant="body2" component="p" style={{ color: palette.grey02 }}>Visa 4455</Typography>
                                </StyledRowContainer>
                                <Divider />
                                <div style={{ display: 'block', margin: '16px 0', maxWidth: '300px'}}>
                                    <SecondaryButton style={{ marginRight: '16px', marginBottom: '16px', width: '100%' }} onClick={this.handleCancelTrip}>Keep this trip</SecondaryButton>
                                    <PrimaryButton onClick={this.handleKeepTrip} style={{ width: '100%'}}>Accept penalties and cancel</PrimaryButton>
                                </div>
                            </Grid>
                            <Grid item xs>
                                <StyledContainer>
                                    <StyledWhiteContainer>
                                        <StyledRowContainer>
                                            <Typography variant="body2" component="p">${this.state.totalPerDay}.00 x {this.state.tripDays} day trip</Typography>
                                            <Typography variant="body2" component="p">${this.state.totalPerDay * this.state.tripDays}.00/day</Typography>
                                        </StyledRowContainer>
                                        <StyledRowContainer>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography variant="body2" component="p" style={{ marginRight: space[1] }}>Non-Refundable trip fee</Typography>
                                                <InfoIcon style={{ fontSize: 16, color: palette.grey02 }} onClick={this.showDepositDetails} />
                                            </div>
                                            <Typography variant="body2" component="p">-${this.state.tripFee}.00</Typography>
                                        </StyledRowContainer>
                                        <div style={{ marginTop: '-16px', display: 'flex', justifyContent: 'flex-end' }}>
                                            <Typography variant="body1" component="p" style={{ color: palette.grey02 }}>$9.00 x 4 day trip</Typography>
                                        </div>
                                        <StyledRowContainer>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography variant="body2" component="p" style={{ marginRight: space[1] }}>Cancellation fee</Typography>
                                                <InfoIcon style={{ fontSize: 16, color: palette.grey02 }} onClick={this.showDepositDetails} />
                                            </div>
                                            <Typography variant="body2" component="p">-${this.state.cancellationFee}.00</Typography>
                                        </StyledRowContainer>
                                        <StyledRowContainer>
                                            <Typography variant="h6">Your trip refund</Typography>
                                            <Typography variant="h6">${this.state.totalRefund}.00/day</Typography>
                                        </StyledRowContainer>
                                        <div style={{ marginTop: '-8px', width: '200px' }}>
                                            <Typography variant="body1" component="p" style={{ color: palette.grey02 }}>Your deposit of of $1500 will be also refunded</Typography>
                                        </div>
                                    </StyledWhiteContainer>
                                </StyledContainer>
                            </Grid>
                        </Grid>
                    </div>
                </StyledExternalContainer>
                <StyledFooterContainer>
                    <Footer />
                </StyledFooterContainer>
            </React.Fragment>
        );
    }
}

export default CancellationReview