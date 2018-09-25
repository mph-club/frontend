import React from 'react';

import {
    StyledGridContainer,
    StyledLeftFirstContainer,
    SyledImage,
    StyledStepsContainer,
    StyledRowContainer,
    StyledRightContainer,
    StyledWhiteContainer
} from './styles';
import Aux from '../../hoc/Aux/Aux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import RateStars from '../RateStars/RateStars';
import PrimaryButton from '../UI/Buttons/PrimaryButton/PrimaryButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Footer from '../Navigation/Footer/Footer';

const Checkout = () => {
    return (
        <Aux>
            <Typography variant="title">Checkout</Typography>
            <StyledGridContainer>
                <Grid item xs>
                    <StyledLeftFirstContainer>
                        <div>
                            <Typography>Maserati Granturismo</Typography>
                            <Typography>Convertible 2016</Typography>
                            <Typography>$382/per day</Typography>
                            <RateStars rate='4' />
                        </div>
                        <SyledImage src='https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ainXQzexQZeXQ4g9jM7-gg.1440x700.jpg' alt='car main' />
                    </StyledLeftFirstContainer>
                    <Divider />
                    <div>
                        <Typography>PICKUP AND RETURN</Typography>
                        <Typography>Miami, Fl</Typography>
                        <p>Exact address is provided after booking is confirmed</p>
                    </div>
                    <Divider />
                    <div>
                        <Typography>MILES INCLUDED</Typography>
                        <Typography>200 mi</Typography>
                        <p>$0.45 fee fir each additional mile</p>
                    </div>
                    <Divider />
                    <div>
                        <Typography>STEPS TO BOOK</Typography>
                        <Typography>License information</Typography>
                    </div>
                    <Divider />
                    <StyledStepsContainer>
                        <Typography>Insurance protection</Typography>
                        <label>Premium</label>
                    </StyledStepsContainer>
                    <Divider />
                    <StyledStepsContainer>
                        <Typography>Payment info</Typography>
                        <label>Visa</label>
                    </StyledStepsContainer>
                    <Divider />
                    <div>
                        <Typography>Mike L. needs to confirm this request</Typography>
                        <p>By tapping below, you agree to pay the total shown and to the mph <a href=''>terms of service</a> and <a href=''>cancellation policy</a></p>
                        <PrimaryButton>Request to book this car</PrimaryButton>
                    </div>
                </Grid>
                <Grid item xs>
                    <Typography>FEES AND PRICE DETAILS</Typography>
                    <StyledRightContainer>
                        <StyledRowContainer>
                            <Typography>Trip Price</Typography>
                            <Typography>$382.00/day</Typography>
                        </StyledRowContainer>
                        <StyledRowContainer>
                            <Typography>Trip Fee<InfoIcon /></Typography>
                            <Typography>$39.00/day</Typography>
                        </StyledRowContainer>
                        <StyledRowContainer>
                            <Typography>Total per day</Typography>
                            <Typography>$382.00/day</Typography>
                        </StyledRowContainer>
                        <StyledWhiteContainer>
                            <StyledRowContainer>
                                <Typography>$391.00 x 7 day trip</Typography>
                                <Typography>$2372.00/day</Typography>
                            </StyledRowContainer>
                            <StyledRowContainer>
                                <Typography>Trip Total</Typography>
                                <Typography>$2372.00/day</Typography>
                            </StyledRowContainer>
                            <StyledRowContainer>
                                <div>
                                    <Typography>Refundable deposit<InfoIcon /></Typography>
                                    <Typography>Refundable by Jul 16</Typography>
                                </div>
                                <Typography>$382.00/day</Typography>
                            </StyledRowContainer>
                        </StyledWhiteContainer>
                    </StyledRightContainer>
                </Grid>
            </StyledGridContainer>
            <Footer/>
        </Aux>
    );
}

export default Checkout