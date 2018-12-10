import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../theme';

import Grid from '@material-ui/core/Grid';
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

import * as actions from '../../store/actions/index';


class DetailPage extends Component {

    state = {
        activeStep: 0,
        readMore: false,
        reportListing: false
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

    componentWillMount() {
        this.props.onFetchCarDetails();
    }

    render() {
        const { theme } = this.props;
        const { vehicle } = this.props

        let content = this.props.loading ?
            null :
            <React.Fragment>
                <StyledImageContainer>
                    {vehicle ? <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                    >
                        {vehicle.photos.map((path, index) => (
                            <StyledImg key={index} src={path} alt={'vehicle_picture_' + index} />
                        ))}
                    </SwipeableViews> : null}

                </StyledImageContainer>
                {vehicle ?
                    <StyledGridContainer>
                        <Grid container spacing={40}>
                            <Grid item xs>
                                <StyledTitleLayout>
                                    <Typography variant="display1" color="primary" component="h2">{vehicle.make + ' ' + vehicle.model}</Typography>
                                    <Typography variant="display1" color="primary" component="h2">{vehicle.year}</Typography>
                                    <StyledRateLayout>
                                        <div>{vehicle.trips}</div>
                                        {vehicle.rate ? <div><RateStars rate={vehicle.rate} /></div> : null}
                                        <div><Typography variant="body1" style={{ color: `${palette.grey02}` }}>{vehicle.distance}</Typography></div>
                                    </StyledRateLayout>
                                </StyledTitleLayout>
                                <Divider />
                                {
                                    vehicle.structuraFeatures ? <StyledDescriptionIconsLayout>
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
                                    </StyledDescriptionIconsLayout> : null
                                }
                                {
                                    vehicle.description ? <StyledDescriptionLayout>
                                        <StyledCaption variant="body2" component="p">Description</StyledCaption>
                                        <Typography variant="body2" component="div">
                                            <ReadMore>
                                                <p>{vehicle.description.charAt(0).toUpperCase() + vehicle.description.slice(1)}</p>
                                            </ReadMore>
                                        </Typography>
                                    </StyledDescriptionLayout> : null
                                }
                                {
                                    vehicle.features ? <React.Fragment>
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
                                    </React.Fragment> : null
                                }
                                {
                                    vehicle.reviews ? <React.Fragment>
                                        <Divider />
                                        <StyledRenterReviewsWrapper>
                                            <RenterReviews />
                                        </StyledRenterReviewsWrapper>
                                    </React.Fragment> : null
                                }
                                {
                                    vehicle.ownerId ? <React.Fragment>
                                        <Divider />
                                        <StyledOwnedByWrapper>
                                            <OwnedBy onwerClicked={this.goToOwnerDetails} />
                                        </StyledOwnedByWrapper>
                                    </React.Fragment> : null
                                }


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
                    </StyledGridContainer> : null}
                <div style={{ marginBottom: space[4] }}>
                    {/* <CarsCollection title="You might also like" /> */}
                </div>
                <ReportListing
                    openForm={this.state.reportListing}
                    closeForm={this.closeFormReportListing} />
                <Footer />
            </React.Fragment >

        return content
    }
}

const mapStateToProps = state => {
    return {
        loading: state.carDetails.loading,
        error: state.carDetails.error,
        vehicle: state.carDetails.vehicle
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCarDetails: () => { dispatch(actions.onCarDetailFetchInfo()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(null, { withTheme: true })(DetailPage));


