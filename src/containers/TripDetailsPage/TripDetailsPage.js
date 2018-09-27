import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { palette } from '../../theme';

import Grid from '@material-ui/core/Grid';
import Aux from '../../hoc/Aux/Aux';
import RateStars from '../../components/RateStars/RateStars';
import Divider from '@material-ui/core/Divider';
import {
    StyledImageContainer,
    StyledImg,
    StyledGridContainer,
    StyledTitleLayout,
    StyledRateLayout,
    StyledAvatar,
    StyledExtContainer,
    StyledMiddleContainer
} from './styles';
import SummaryTripForHost from '../../components/SummaryTripForHost/SummaryTripForHost';
import ReportListing from '../../components/ReportListing/ReportListing';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';
import avatar from '../../assets/images/avatar.png';
import Footer from '../../components/Navigation/Footer/Footer';



class TripDetailsPage extends Component {
    state = {
        reportListing: false,
        value: 0
    };

    handleChange = (_, value) => {
        this.setState({ value });
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
        return (
            <Aux>
                <StyledImageContainer>
                    <StyledImg src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ainXQzexQZeXQ4g9jM7-gg.1440x700.jpg" alt="asdas" />
                </StyledImageContainer>
                <StyledExtContainer>
                    <StyledMiddleContainer>
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
                        <StyledAvatar
                            alt="Steve Jobs"
                            src={avatar}></StyledAvatar>
                    </StyledMiddleContainer>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                    >
                        <Tab label="Trips" />
                        <Tab label={this.props.activityItems > 0 ? <Badge color="secondary" badgeContent={this.props.activityItems}> Activity</Badge> : "Activity"} />
                        <Tab label={this.props.historyItems > 0 ? <Badge color="secondary" badgeContent={this.props.historyItems}> Activity</Badge> : "History"} />
                    </Tabs>
                    <Divider />
                </StyledExtContainer>

                <StyledGridContainer>
                    <Grid container spacing={40}>
                        <Grid item xs>
                            <Typography component="h4">Total Earnings</Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>$2694</Typography>
                                <Typography>View details</Typography>
                            </div>
                            <Divider />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Trip photos</Typography>
                                <Typography>Add</Typography>
                            </div>
                            <Divider />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Insurance protection</Typography>
                                <Typography>Premium</Typography>
                            </div>
                            <Divider />
                            <div>
                                <Typography>Car Details</Typography>
                                <Typography>Maserati Granturismo Convertible 2016</Typography>
                                <Typography>View Details</Typography>
                            </div>
                            <Divider />
                            <div>
                                <Typography>LICENSE PLATE NUMBER</Typography>
                                <Typography>BAASD34</Typography>
                            </div>
                            <Divider />
                            <div>
                                <Typography>PRIMARY DRIVER</Typography>
                                <Typography>Jim Jones</Typography>
                                <Typography>The primary driver must be present for pick up and drop off</Typography>
                            </div>
                            <Divider />
                            <div>
                                <Typography>RESERVATION NUMBER</Typography>
                                <Typography>123123123123</Typography>
                            </div>
                            <Divider />
                            <div>
                                <Typography>GUIDELINES</Typography>
                                <ul>
                                    <li>
                                        A deposit will be required
                                    </li>
                                    <li>
                                        A minimun of 1 day required to rent this car
                                    </li>
                                    <li>
                                        No smoking
                                    </li>
                                </ul>
                            </div>
                            <Divider />
                        </Grid>
                        <Grid item xs>
                            <SummaryTripForHost
                                reportListingClicked={this.openFormToReportListing}
                                checkout={this.goToCheckout} />
                        </Grid>
                    </Grid>
                </StyledGridContainer>
                <ReportListing openForm={this.state.reportListing} />
                <Footer />
            </Aux >

        );
    }
}

export default withStyles(({}), { withTheme: true })(TripDetailsPage);


