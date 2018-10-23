import React, { Component } from 'react';
import Footer from '../../Navigation/Footer/Footer';
import Typography from '@material-ui/core/Typography';
import { space, palette } from '../../../theme';
import InfoIcon from '@material-ui/icons/Info';
import Title from '../../UI/CustomTypography/Title/Title';
import Tooltip from '@material-ui/core/Tooltip';

import {
    StyledExternalContainer,
    StyledFooterContainer,
    StyledContainer,
    StyledWhiteContainer,
    StyledRowContainer
} from './styles';

class TotalCost extends Component {

    state = {
        tripPrice: 382,
        premiumProtection: 90,
        tripFee: 9,
        totalPerDay: 481,
        tripDays: 4,
        totalCost: 1924,
        deposit: 1500
    }

    showDepositDetails = () => {
        console.log('works')
    }

    render() {

        return (
            <React.Fragment>
                <StyledExternalContainer>
                    <div
                        style={{
                            paddingLeft: space[3],
                            paddingRight: space[3]
                        }}>
                        <Typography variant="display1" color="primary" component="h2">Total Cost</Typography>
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
                                            <Typography variant="body2" component="p" style={{ marginRight: space[1] }}>
                                                Refundable deposit
                                                </Typography>
                                                <InfoIcon style={{ fontSize: 16, color: palette.grey02 }} onClick={this.showDepositDetails}/>
                                        </div>
                                        <Typography variant="body1" component="p" style={{ color: palette.grey02, marginTop: space[1] }}>Refundable by Jul 16</Typography>
                                    </div>
                                    <Typography variant="body2" component="p">${this.state.deposit}.00</Typography>
                                </StyledRowContainer>
                            </StyledWhiteContainer>
                        </StyledContainer>
                    </div>
                </StyledExternalContainer>
                <StyledFooterContainer>
                    <Footer />
                </StyledFooterContainer>
            </React.Fragment>
        );
    }
}

export default TotalCost