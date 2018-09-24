import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Aux from '../../hoc/Aux/Aux';
import { tutorialSteps } from '../CarsCollection/tileData';
import RateStars from '../../components/RateStars/RateStars';
import Divider from '@material-ui/core/Divider';
import CarAttribute from '../../components/CarAttribute/CarAttribute';
import CarFeature from '../../components/CarFeature/CarFeature';
import Footer from '../../components/Navigation/Footer/Footer';
import ReadMore from '../../components/ReadMore/ReadMore';
import RenterReviews from '../../components/DetailPageComponents/RenterReviews/RenterReview';
import {
    StyledImageContainer,
    StyledImg,
    StyledGridContainer
} from './styles';
import OwnedBy from '../../components/DetailPageComponents/OwnedBy/OwnedBy';
import Guidelines from '../../components/DetailPageComponents/Guidelines/Guidelines';
import CarsCollection from '../CarsCollection/CarsCollection';
import SummaryTrip from '../../components/DetailPageComponents/SummaryTrip/SummaryTrip';


class DetailPage extends Component {
    state = {
        activeStep: 0,
        readMore: false
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
                        {tutorialSteps.map(step => (
                            <StyledImg key={step.label} src={step.imgPath} alt={step.label} />
                        ))}
                    </SwipeableViews>
                </StyledImageContainer>
                <StyledGridContainer>
                    <Grid item xs>
                        <Typography variant="title" component="h2">Porsche Panamera</Typography>
                        <Typography variant="title" component="h2">2016</Typography>
                        <div>
                            <div>4 trips</div>
                        </div>
                        <RateStars rate='4' />
                        <Divider />
                        <div style={{ display: 'flex' }}>
                            <CarAttribute />
                            <CarAttribute />
                            <CarAttribute />
                            <CarAttribute />
                        </div>
                        <p>Description</p>
                        <div>
                            <ReadMore >{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</ReadMore>
                        </div>
                        <Divider />
                        <div>
                            <CarFeature />
                            <CarFeature />
                            <CarFeature />
                            <CarFeature />
                        </div>
                        <Divider />
                        <div>


                            <RenterReviews />

                        </div>
                        <Divider />
                        <OwnedBy onwerClicked = {this.goToOwnerDetails}/>
                        <Divider />
                        <Guidelines />
                        <Divider />
                    </Grid>
                    <Grid item xs>
                        <SummaryTrip />
                    </Grid>
                </StyledGridContainer>
                <CarsCollection title="You might also like" />
                <Footer />
            </Aux >
        );
    }
}

export default withStyles(({}), { withTheme: true })(DetailPage);


