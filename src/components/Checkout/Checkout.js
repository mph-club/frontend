import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import RateStars from '../RateStars/RateStars';
import PrimaryButton from '../UI/Buttons/PrimaryButton/PrimaryButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Footer from '../Navigation/Footer/Footer';
import { space, palette } from '../../theme';
import Title from '../../components/UI/CustomTypography/Title/Title';
import CheckIcon from '../Icons/CheckIcon';
import TextButton from '../UI/Buttons/TextButton/TextButton';

import {
    StyledGridContainer,
    StyledLeftFirstContainer,
    SyledImage,
    StyledStepsContainer,
    StyledRowContainer,
    StyledRightContainer,
    StyledWhiteContainer,
    StyledButtonWrapper,
    StyledLink
} from './styles';
import { FormHelperText } from '@material-ui/core';

const Checkout = () => {
    return (
        <Aux>
            <StyledGridContainer>
                <Grid container spacing={40}>
                    <Grid item xs={12}>
                        <Typography
                            variant="display2"
                            color="primary"
                            component="h1"
                        >
                            Checkout
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <StyledLeftFirstContainer>
                            <div style={{ marginBottom: space[4] }}>
                                <Typography variant="headline" component="h2" style={{ maxWidth: 320 }}>Maserati Granturismo Convertible 2016</Typography>
                                <Typography variant="title" component="div" style={{ fontWeight: 400, marginTop: `${space[2]}` }}>$382/per day</Typography>
                                <div style={{ marginTop: `${space[1]}` }}>
                                    <RateStars rate='4' />
                                </div>
                            </div>
                            <SyledImage src='https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ainXQzexQZeXQ4g9jM7-gg.1440x700.jpg' alt='car main' />
                        </StyledLeftFirstContainer>
                        <Divider />
                        <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                            <Title component="h2">PICKUP AND RETURN</Title>
                            <Typography variant="title" component="p" style={{ marginTop: `${space[3]}` }}>Miami, Fl</Typography>
                            <Typography variant="body1" component="p" style={{ color: `${palette.grey02}`, marginTop: `${space[2]}` }}>Exact address is provided after booking is confirmed</Typography>
                        </div>
                        <Divider />
                        <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                            <Title component="h2">MILES INCLUDED</Title>
                            <Typography variant="title" component="p" style={{ marginTop: `${space[3]}` }}>200 mi</Typography>
                            <Typography variant="body1" component="p" style={{ color: `${palette.grey02}`, marginTop: `${space[2]}` }}>$0.45 fee fir each additional mile</Typography>
                        </div>
                        <Divider />
                        <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                            <Title component="h2">STEPS TO BOOK</Title>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: `${space[3]}` }}>
                                <CheckIcon style={{ fontSize: 16, marginRight: `${space[2]}`, color: `${palette.blue}` }} />
                                <Typography variant="title" component="p" style={{ fontWeight: 400 }}>License information</Typography>
                            </div>
                        </div>
                        <Divider />
                        <StyledStepsContainer>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <CheckIcon style={{ fontSize: 16, color: `${palette.blue}`, marginRight: `${space[2]}` }} />
                                <Typography variant="title" component="p" style={{ fontWeight: 400 }}>Insurance protection</Typography>
                            </div>
                            <div>
                                <TextButton>Premium</TextButton>
                            </div>
                        </StyledStepsContainer>
                        <Divider />
                        <StyledStepsContainer>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <CheckIcon style={{ fontSize: 16, marginRight: `${space[2]}`, color: `${palette.blue}` }} />
                                <Typography variant="title" component="p" style={{ fontWeight: 400 }}>Payment info</Typography>
                            </div>
                            <div>
                                <TextButton>Visa</TextButton>
                            </div>
                        </StyledStepsContainer>
                        <Divider />
                    </Grid>
                    <Grid item xs>
                        <Title component="h2" style={{ marginBottom: `${space[3]}` }}>FEES AND PRICE DETAILS</Title>
                        <StyledRightContainer>
                            <StyledRowContainer style={{ marginLeft: `${space[3]}`, marginRight: `${space[3]}` }}>
                                <Typography variant="body2" component="p">Trip Price</Typography>
                                <Typography variant="body2" component="p">$382.00/day</Typography>
                            </StyledRowContainer>
                            <StyledRowContainer style={{ marginLeft: `${space[3]}`, marginRight: `${space[3]}` }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body2" component="p" style={{ marginRight: `${space[1]}` }}>
                                        Trip Fee
                                    </Typography>
                                    <InfoIcon style={{ fontSize: 16, color: `${palette.grey02}` }} />
                                </div>
                                <Typography variant="body2" component="p">$9.00/day</Typography>
                            </StyledRowContainer>
                            <StyledRowContainer style={{ marginLeft: `${space[3]}`, marginRight: `${space[3]}` }}>
                                <Typography variant="body2" component="p">Total per day</Typography>
                                <Typography variant="body2" component="p">$382.00/day</Typography>
                            </StyledRowContainer>
                            <StyledWhiteContainer>
                                <StyledRowContainer>
                                    <Typography variant="body2" component="p">$391.00 x 7 day trip</Typography>
                                    <Typography variant="body2" component="p">$2,372.00/day</Typography>
                                </StyledRowContainer>
                                <StyledRowContainer>
                                    <Typography variant="title" component="p">Trip Total</Typography>
                                    <Typography variant="title" component="p">$2,372.00/day</Typography>
                                </StyledRowContainer>
                                <StyledRowContainer>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body2" component="p" style={{ marginRight: `${space[1]}` }}>
                                                Refundable deposit
                                            </Typography>
                                            <InfoIcon style={{ fontSize: 16, color: `${palette.grey02}` }} />
                                        </div>
                                        <Typography variant="body1" component="p" style={{ color: `${palette.grey02}`, marginTop: `${space[1]}` }}>Refundable by Jul 16</Typography>
                                    </div>
                                    <Typography variant="body2" component="p">$1,500.00</Typography>
                                </StyledRowContainer>
                            </StyledWhiteContainer>
                        </StyledRightContainer>
                    </Grid>
                    <StyledButtonWrapper>
                        <div style={{marginBottom: `${space[4]}` }}>
                            <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Mike L. needs to confirm this request</Typography>
                            <Typography variant="body1" component="p" style={{ marginTop: `${space[3]}` }}>By clicking below, you agree to pay the total shown and to the mph <StyledLink href=''>terms of service</StyledLink> and <StyledLink href=''>cancellation policy</StyledLink></Typography>
                        </div>
                        <PrimaryButton>Request to book this car</PrimaryButton>
                    </StyledButtonWrapper>
                </Grid>
            </StyledGridContainer>
            <Footer />
        </Aux>
    );
}

export default Checkout