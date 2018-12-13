import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../theme';

import Grid from '@material-ui/core/Grid';
import RateStars from '../../components/UI/RateStars/RateStars';
import Divider from '@material-ui/core/Divider';
import SummaryTripByUser from '../../components/TripsDetailsComponents/SummaryTripByUser/SummaryTripByUser';
import ReportListing from '../../components/DetailPageComponents/ReportListing/ReportListing';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
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
        status: 'tripRequestPending',
        unreadMessages: 0,
        host: {
            userName: 'Mike L',
            phoneNumber: '+1 (786) 769-3202'
        },
        carDetails: {
            make: 'Porshe',
            model: 'Panamera',
            year: 2016,
            trips: 4,
            rate: 4,
            distance: 8
        },
        tripDetails: {
            total: 1924,
            deposit: 1500
        },
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

    handleViewDetails = () => {
        if (this.state.status === 'tripPending' || this.state.status === 'tripPast'){
            this.props.history.push('/total-cost')
        }
    }

    handleAddPhotos = () => {
        this.props.history.push('/upload-pictures')
    }

    handleCarDetails = () => {
        this.props.history.push('/car-details')
    }

    handleCancelTrip = () => {
        this.props.history.push('/cancel-trip')
    }

    handleChangeTrip = () => {
        this.props.history.push('/change-trip')
    }

    render() {

        let firstRowTitle = null
        let firstRowDetails = null
        let showContactInfo = true

        switch (this.state.status) {
            case 'tripPending':
                showContactInfo = false
                firstRowTitle = 'TOTAL COST';
                firstRowDetails = 'Trip total does not include your deposit of $' + this.state.tripDetails.deposit;
                break;
            case 'tripPast':
                showContactInfo = false
                firstRowTitle = 'TOTAL COST';
                break;
            default:
                break;
        }

        let leftContent = null

        switch (this.state.value) {
            case 0:
                leftContent = <Grid item xs>
                    <div style={{ marginBottom: space[3] }}>
                        <Title component="h4">{firstRowTitle}</Title>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: `${space[3]}`, marginTop: space[3] }}>
                            <Typography variant="h6" >${this.state.tripDetails.total}.00</Typography>
                            <TextButton onClick={this.handleViewDetails}>View details</TextButton>
                        </div>
                        <Typography
                            variant="body1"
                            component="p"
                            style={{ color: `${palette.grey02}` }}>{firstRowDetails}</Typography>
                    </div>
                    <Divider />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                        <Typography variant="h6"  style={{ fontWeight: 400 }}>Trip photos</Typography>
                        <TextButton onClick={this.handleAddPhotos}>Add</TextButton>
                    </div>
                    <Divider />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                        <Typography variant="h6" style={{ fontWeight: 400 }} >Insurance protection</Typography>
                        <TextButton>Premium</TextButton>
                    </div>
                    <Divider />
                    <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                        <Title component="h4"> Car Details</Title>
                        <Typography variant="h6" style={{ fontWeight: 400, marginTop: `${space[3]}` }}>Maserati Granturismo Convertible 2016</Typography>
                        <TextButton style={{ marginTop: `${space[3]}` }} onClick={this.handleCarDetails}>View Details</TextButton>
                    </div>
                    <Divider />
                    <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                        <Title>LICENSE PLATE NUMBER</Title>
                        <Typography variant="h6" style={{ fontWeight: 400, marginTop: `${space[3]}` }}>BAASD34</Typography>
                    </div>
                    <Divider />
                    <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                        <Title>PRIMARY DRIVER</Title>
                        <Typography variant="h6" style={{ fontWeight: 400, marginTop: `${space[3]}` }}>Jim Jones</Typography>
                        <Typography variant="body1" component="p" style={{ marginTop: `${space[2]}`, color: `${palette.grey02}` }}>The primary driver must be present for pick up and drop off</Typography>
                    </div>
                    <Divider />
                    <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                        <Title>RESERVATION NUMBER</Title>
                        <Typography variant="h6" style={{ fontWeight: 400, marginTop: `${space[3]}` }}>32424467</Typography>
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
                break;
            case 1:
                leftContent = <Grid item xs>
                    <div>
                        <TextField
                            id="outlined-tripDetailsPage-PhoneContact"
                            label="Phone"
                            fullWidth
                            defaultValue={this.state.host.phoneNumber}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                    </div>
                </Grid>
                break;
            default:
                break;
        }

        return (
            <React.Fragment>
                <StyledImageContainer>
                    <StyledImg src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ainXQzexQZeXQ4g9jM7-gg.1440x700.jpg" alt="asdas" />
                </StyledImageContainer>
                <StyledExtContainer>
                    <StyledMiddleContainer>
                        <StyledTitleLayout>
                            <Notice
                                status={this.state.status}
                            />
                            <Typography varaint="body2" component="h2" style={{ color: `${palette.grey02}`, marginBottom: `${space[2]}` }}>Hosted by <span style={{ color: `${palette.black}`, fontWeight: 600 }}>{this.state.host.userName}</span></Typography>
                            <Typography variant="h4" color="primary">{this.state.carDetails.make + ' ' + this.state.carDetails.model}</Typography>
                            <Typography variant="h4" color="primary">{this.state.carDetails.year}</Typography>
                            <StyledRateLayout>
                                <div>{this.state.carDetails.trips} trips</div>
                                <div><RateStars rate={this.state.carDetails.rate.toString()} /></div>
                                <div>
                                    <Typography variant="body1" style={{ color: `${palette.grey02}` }}>{this.state.carDetails.distance} mi</Typography>
                                </div>
                            </StyledRateLayout>
                        </StyledTitleLayout>
                        <StyledAvatar
                            alt="Steve Jobs"
                            src={avatar} />
                    </StyledMiddleContainer>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                    >
                        <Tab label="Trip Info" />
                        {/* <Tab label={this.state.unreadMessages > 0 ? <Badge color="secondary" badgeContent={this.state.unreadMessages}> Messages</Badge> : "Messages"} /> */}
                        <Tab disabled={showContactInfo} label="Contact" />
                    </Tabs>
                    <Divider />
                </StyledExtContainer>

                <StyledGridContainer>
                    <StyledGridContainerTwo container spacing={40}>
                        {leftContent}
                        <Grid item xs>
                            <SummaryTripByUser
                                status={this.state.status}
                                userName={this.state.host.userName}
                                hoursRemaining={2}
                                handleChangeTrip={this.handleChangeTrip}
                                reportListingClicked={this.openFormToReportListing}
                                checkout={this.goToCheckout}
                                handleCancelTrip={this.handleCancelTrip} />
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


