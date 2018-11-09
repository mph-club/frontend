import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import TripCard from '../../components/DashboardComponents/TripCard/TripCard';
import {
    StyledAppBar,
    StyledListContainer,
    StyledBadge,
    StyledContainer,
    StyleNoVehiclesContainer
} from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { space, palette } from '../../theme';
import CarCard from '../../components/HostDashboardComponents/CarCard/CarCard';
import Tabs from '@material-ui/core/Tabs';

const styles = theme => ({
    root: {
        color: palette.green
    },
    tabsIndicator: {
        backgroundColor: palette.green
    }
})

class HostDashboard extends Component {

    state = {
        value: 0,
        vehiclesList: [1],
        pendingApproval: 4
    };

    handleChange = (_, value) => {
        this.setState({ value });
    };

    handleCardClick = (status) => {
        console.log(status)
        this.props.history.push('/listing-pending')
    }

    render() {

        const { classes } = this.props
        const { value } = this.state
        let content = null

        const noVehicles = <StyleNoVehiclesContainer>
            <Typography variant="display1" color="primary">No listings</Typography>
            <Typography
                variant="body1"
                color="primary"
                component="p"
                style={{ marginTop: space[4] }}>Earn over $10,000 a year by renting out your vehicle to our selective luxury clientele.</Typography>
        </StyleNoVehiclesContainer>

        switch (value) {
            case 0:
                content = this.state.vehiclesList.length === 0 ?
                    noVehicles :
                    <React.Fragment>
                        <CarCard clicked={() => this.handleCardClick('pendingListing')} status='pendingListing' />
                        <CarCard clicked={() => this.handleCardClick('approved')} status='approved' />
                        <CarCard clicked={() => this.handleCardClick('approved')} status='approved' />
                    </React.Fragment>
                break;
            case 1:
                content = <React.Fragment>
                    <TripCard clicked={this.handleCardClick} status='pendingTrip' />
                    <TripCard clicked={this.handleCardClick} status='pendingTrip' />
                    <TripCard clicked={this.handleCardClick} status='pendingTrip' />
                    <TripCard clicked={this.handleCardClick} status='pendingTrip' />
                </React.Fragment>
                break;
            default:
                break;
        }        


        return (
            <StyledContainer>
                <StyledAppBar position="fixed">
                    <Tabs
                        classes={{ indicator: classes.tabsIndicator, root: classes.root }}
                        value={this.state.value}
                        onChange={this.handleChange}
                        centered
                    >
                        <Tab label="Vehicles" />
                        <Tab label={this.state.pendingApproval > 0 ? <StyledBadge badgeContent={this.state.pendingApproval}> Requests</StyledBadge> : "Requests"} />
                        <Tab label={this.props.historyItems > 0 ? <StyledBadge badgeContent={this.props.historyItems}>History</StyledBadge> : "History"} />
                    </Tabs>
                </StyledAppBar>
                <Divider />
                <StyledListContainer>
                    {content}
                </StyledListContainer>
            </StyledContainer>
        );
    }
}

export default withStyles(styles)(HostDashboard)