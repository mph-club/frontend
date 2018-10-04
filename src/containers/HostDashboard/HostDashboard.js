import React, { Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import TripCard from '../../components/DashboardComponents/TripCard/TripCard';
import {
    StyledAppBar,
    StyledListContainer,
    StyledBadge,
    StyledContainer
} from './styles';


class HostDashboard extends Component {

    state = {
        value: 0,
    };

    handleChange = (_, value) => {
        this.setState({ value });
    };

    handleCardClick = () => {
        this.props.history.push('/listing-pending')
    }

    render() {

        const { value } = this.state
        let content = null

        switch (value) {
            case 0:
                content = <React.Fragment>
                    <TripCard clicked={this.handleCardClick} status='pendingListing'/>
                    <TripCard clicked={this.handleCardClick} status='pendingListing'/>
                    <TripCard clicked={this.handleCardClick} status='pendingListing'/>
                </React.Fragment>
                break;
            default:
                content = <TripCard clicked={this.handleCardClick} status='pendingListing'/>
                break;
        }

        return (
            <StyledContainer>
                <StyledAppBar position="fixed">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        centered
                    >
                        <Tab label="Vehicles" />
                        <Tab label={this.props.activityItems > 0 ? <StyledBadge color="secondary" badgeContent={this.props.activityItems}> Activity</StyledBadge> : "Activity"} />
                        <Tab label={this.props.historyItems > 0 ? <StyledBadge color="secondary" badgeContent={this.props.historyItems}>History</StyledBadge> : "History"} />
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

export default HostDashboard