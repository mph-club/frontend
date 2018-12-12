import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../theme';

import Grid from '@material-ui/core/Grid';
import { tutorialSteps } from '../CarsCollection/tileData';
import RateStars from '../../components/UI/RateStars/RateStars';
import Divider from '@material-ui/core/Divider';
import CarFeature from '../../components/DetailPageComponents/CarFeature/CarFeature';
import ReadMore from '../../components/UI/ReadMore/ReadMore';
import RenterReviews from '../../components/DetailPageComponents/RenterReviews/RenterReview';
import OwnedBy from '../../components/DetailPageComponents/OwnedBy/OwnedBy';
import CarsCollection from '../CarsCollection/CarsCollection';
import SummaryTrip from '../../components/DetailPageComponents/SummaryTrip/SummaryTrip';
import ReportListing from '../../components/DetailPageComponents/ReportListing/ReportListing';
import SeatIcon from '../../assets/icons/SeatIcon';
import DoorIcon from '../../assets/icons/DoorIcon';
import GasIcon from '../../assets/icons/GasIcon';
import GPSIcon from '../../assets/icons/GPSIcon';
import UnorderedList from '../../components/UI/Lists/UnorderedList';

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

    closeFormReportListing = () => {
        this.setState({
            reportListing: false
        })
    }

    render() {
        const { theme } = this.props;

        return (
            <React.Fragment>
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
                                    <div><Typography variant="body1" style={{ color: `${palette.grey02}` }}> 8 mi</Typography></div>
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
                                <UnorderedList
                                    title="Guidelines"
                                    itemOne="A desposit will be required"
                                    itemTwo="A minimum of 1 day is required to rent this car"
                                    itemThree="No smoking"
                                />
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
                <div style={{marginBottom:space[4]}}>
                    <CarsCollection title="You might also like" />
                </div>
                <ReportListing
                    openForm={this.state.reportListing}
                    closeForm={this.closeFormReportListing} />
                <Footer />
            </React.Fragment >
        );
    }
}

export default withStyles(({}), { withTheme: true })(DetailPage);

