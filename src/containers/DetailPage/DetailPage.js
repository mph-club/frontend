import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import { palette } from '../../theme';

import Grid from '@material-ui/core/Grid';
import Aux from '../../hoc/Aux/Aux';
import { tutorialSteps } from '../CarsCollection/tileData';
import RateStars from '../../components/RateStars/RateStars';
import Divider from '@material-ui/core/Divider';
import CarFeature from '../../components/CarFeature/CarFeature';
import ReadMore from '../../components/ReadMore/ReadMore';
import RenterReviews from '../../components/DetailPageComponents/RenterReviews/RenterReview';
import OwnedBy from '../../components/DetailPageComponents/OwnedBy/OwnedBy';
import Guidelines from '../../components/DetailPageComponents/Guidelines/Guidelines';
import CarsCollection from '../CarsCollection/CarsCollection';
import SummaryTrip from '../../components/DetailPageComponents/SummaryTrip/SummaryTrip';
import ReportListing from '../../components/ReportListing/ReportListing';
import SeatIcon from '../../components/Icons/SeatIcon';
import DoorIcon from '../../components/Icons/DoorIcon';
import GasIcon from '../../components/Icons/GasIcon';
import GPSIcon from '../../components/Icons/GPSIcon';

import {
    StyledImageContainer,
    StyledImg,
    StyledGridContainer,
    StyledTitleLayout,
    StyledRateLayout,
    StyledDescriptionIconsLayout,
    StyledIcons,
    StyledCaption,
    StyledDescriptionLayout,
    StyledCarFeatureWrapper,
    StyledCarFeatureContainer,
    StyledRenterReviewsWrapper,
    StyledOwnedByWrapper,
    StyledGuideLinesWrapper
} from './styles';
import Footer from '../../components/Navigation/Footer/Footer';



class DetailPage extends Component {
    state = {
        activeStep: 0,
        readMore: false,
        reportListing: false,
        features: [
            {
                label: 'Manual',
                image: 'svg'
            }, {
                label: 'Bluetooth',
                image: 'svg'
            },
            {
                label: 'Sunroof',
                image: 'svg'
            }
        ]
    };

    expandedText = () => {
        this.setState(() => {
            const value = this.state.readMore;
            return { readMore: !value }
        });
    }

    getMoreTextDiv = () => {
        if (this.state.readMore) {
            return <span>erisque enim ligula venenibus pulvinar nibh tempor porta </span>;
        } else {
            return null;
        }
    }

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    goToOwnerDetails = () => {
        this.props.history.push('/user-details');
    }

    openFormToReportListing = () => {
        this.setState({
            reportListing: true
        })
    }

    render() {
        const { theme } = this.props;

        return (
            <Aux>
                <StyledImageContainer>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                    >
                        {tutorialSteps.map((step, index) => (
                            <StyledImg key={index} src={step.imgPath} alt={step.label} />
                        ))}
                    </SwipeableViews>
                </StyledImageContainer>
                <StyledGridContainer>
                    <Grid container spacing={40}>
                        <Grid item xs>
                            <StyledTitleLayout>
                                <Typography variant="display1" color="primary" component="h2">Porsche Panamera</Typography>
                                <Typography variant="display1" color="primary" component="h2">2016</Typography>
                                <StyledRateLayout>
                                    <div>4 trips</div>
                                    <div><RateStars rate='4' /></div>
                                    <div>
                                        <Typography variant="body1" style={{ color: `${palette.grey02}` }}>
                                            8 mi
                                        </Typography>
                                    </div>
                                </StyledRateLayout>
                            </StyledTitleLayout>
                            <Divider />
                            <StyledDescriptionIconsLayout>
                                <StyledIcons>
                                    <SeatIcon style={{ fontSize: 64 }} />
                                    <Typography variant="body2" component="p">2 Seats</Typography>
                                </StyledIcons>
                                <StyledIcons>
                                    <DoorIcon style={{ fontSize: 64 }} />
                                    <Typography variant="body2" component="p">2 Door</Typography>
                                </StyledIcons>
                                <StyledIcons>
                                    <GasIcon style={{ fontSize: 64 }} />
                                    <Typography variant="body2" component="p">13 MPG</Typography>
                                </StyledIcons>
                                <div>
                                    <GPSIcon style={{ fontSize: 64 }} />
                                    <Typography variant="body2" component="p">2 Seats</Typography>
                                </div>
                            </StyledDescriptionIconsLayout>
                            <StyledDescriptionLayout>
                                <StyledCaption variant="body2" component="p">Description</StyledCaption>
                                <Typography variant="body2" component="div">
                                    <ReadMore>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </ReadMore>
                                </Typography>
                            </StyledDescriptionLayout>
                            <Divider />
                            <StyledCarFeatureContainer>
                                <StyledCaption variant="body2" component="p">Features</StyledCaption>
                                {this.state.features.map((feature, index) => {
                                    return (
                                        <StyledCarFeatureWrapper key={index}>
                                            <CarFeature
                                                label={feature.label}
                                                image={feature.image} />
                                        </StyledCarFeatureWrapper>
                                    );
                                })}
                            </StyledCarFeatureContainer>
                            <Divider />
                            <StyledRenterReviewsWrapper>
                                <RenterReviews />
                            </StyledRenterReviewsWrapper>
                            <Divider />
                            <StyledOwnedByWrapper>
                                <OwnedBy onwerClicked={this.goToOwnerDetails} />
                            </StyledOwnedByWrapper>
                            <Divider />
                            <StyledGuideLinesWrapper>
                                <Guidelines />
                            </StyledGuideLinesWrapper>
                            <Divider />
                        </Grid>
                        <Grid item xs>
                            <SummaryTrip
                                reportListingClicked={this.openFormToReportListing}
                                checkout={this.goToCheckout} />
                        </Grid>
                    </Grid>
                </StyledGridContainer>
                <CarsCollection title="You might also like" />
                <ReportListing openForm={this.state.reportListing} />
                <Footer/>
            </Aux >
        );
    }
}

export default withStyles(({}), { withTheme: true })(DetailPage);


