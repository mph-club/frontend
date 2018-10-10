import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../theme';

import Grid from '@material-ui/core/Grid';
import RateStars from '../../components/UI/RateStars/RateStars';
import Divider from '@material-ui/core/Divider';
import SummaryTripForHost from '../../components/SummaryTripForHost/SummaryTripForHost';
import ReportListing from '../../components/DetailPageComponents/ReportListing/ReportListing';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';
import avatar from '../../assets/images/avatar.png';
import Footer from '../../components/Navigation/Footer/Footer';
import Notice from '../../components/UI/Notice/Notice';
import Title from '../../components/UI/CustomTypography/Title/Title';
import TextButton from '../../components/UI/Buttons/TextButton/TextButton';
import UnorderedList from '../../components/UI/Lists/UnorderedList';

import {
    StyledImageContainer,
    StyledImg,
    StyledGridContainer,
    StyledTitleLayout,
    StyledRateLayout,
    StyledAvatar,
    StyledExtContainer,
    StyledMiddleContainer,
    StyledGridContainerTwo
} from './styles';



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
            <React.Fragment>
                <StyledImageContainer>
                    <StyledImg src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ainXQzexQZeXQ4g9jM7-gg.1440x700.jpg" alt="asdas" />
                </StyledImageContainer>
                <StyledExtContainer>
                    <StyledMiddleContainer>
                        <StyledTitleLayout>
                            <Notice 
                                color={palette.green} 
                                label='Pending your approval' 
                            />
                            <Typography varaint="body2" component="h2" style={{ color: `${palette.grey02}`, marginBottom: `${space[2]}` }}>Hosted by <span style={{ color: `${palette.black}`, fontWeight: 600}}>you</span></Typography>
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
                    <StyledGridContainerTwo container spacing={40}>
                        <Grid item xs>
                            <div style={{ marginBottom: `${space[4]}` }}>
                                <Title component="h4">Total Earnings</Title>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="title" component="p" style={{ marginTop: `${space[3]}` }} >$2,694</Typography>
                                    <TextButton>View details</TextButton>
                                </div>
                            </div>
                            <Divider />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                                <Typography variant="title" component="p" style={{ fontWeight: 400 }}>Trip photos</Typography>
                                <TextButton>Add</TextButton>
                            </div>
                            <Divider />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                                <Typography variant="title" component="p" style={{ fontWeight: 400 }} >Insurance protection</Typography>
                                <TextButton>Premium</TextButton>
                            </div>
                            <Divider />
                            <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                                <Title component="h4"> Car Details</Title>
                                <Typography variant="title" component="p" style={{ fontWeight: 400, marginTop: `${space[3]}` }}>Maserati Granturismo Convertible 2016</Typography>
                                <TextButton style={{ marginTop: `${space[3]}` }}>View Details</TextButton>
                            </div>
                            <Divider />
                            <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                                <Title>LICENSE PLATE NUMBER</Title>
                                <Typography variant="title" component="p" style={{ fontWeight: 400, marginTop: `${space[3]}` }}>BAASD34</Typography>
                            </div>
                            <Divider />
                            <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                                <Title>PRIMARY DRIVER</Title>
                                <Typography variant="title" component="p" style={{ fontWeight: 400, marginTop: `${space[3]}` }}>Jim Jones</Typography>
                                <Typography variant="body1" component="p" style={{ marginTop: `${space[2]}`, color: `${palette.grey02}` }}>The primary driver must be present for pick up and drop off</Typography>
                            </div>
                            <Divider />
                            <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                                <Title>RESERVATION NUMBER</Title>
                                <Typography variant="title" component="p" style={{ fontWeight: 400, marginTop: `${space[3]}` }}>32424467</Typography>
                            </div>
                            <Divider />
                            <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                               <UnorderedList
                                    title="Guidelines"
                                    itemOne="A deposit will be required"
                                    itemTwo="A minimum of 1 day is required to rent this car"
                                    itemThree="No smoking"
                                />
                            </div>
                            <Divider />
                        </Grid>
                        <Grid item xs>
                            <SummaryTripForHost
                                reportListingClicked={this.openFormToReportListing}
                                checkout={this.goToCheckout} />
                        </Grid>
                    </StyledGridContainerTwo>
                </StyledGridContainer>
                <ReportListing openForm={this.state.reportListing} />
                <Footer />
            </React.Fragment >
        );
    }
}

export default withStyles(({}), { withTheme: true })(TripDetailsPage);


