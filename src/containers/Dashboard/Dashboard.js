import React, { Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import TripCard from '../../components/DashboardComponents/TripCard/TripCard';
import Aux from '../../hoc/Aux/Aux';
import {
    StyledAppBar,
    StyledListContainer,
    StyledBadge,
    StyledContainer
} from './styles';


class Dashboard extends Component {

    state = {
        value: 0,
    };

    handleChange = (_, value) => {
        this.setState({ value });
    };

    handleCardClick = () => {
        this.props.history.push('/trip-details-page')
    }

    render() {

        const { value } = this.state
        let content = null

        switch (value) {
            case 0:
                content = <Aux>
                    <TripCard clicked={this.handleCardClick}/>
                    <TripCard clicked={this.handleCardClick}/>
                    <TripCard clicked={this.handleCardClick}/>
                    <TripCard clicked={this.handleCardClick}/>
                    <TripCard clicked={this.handleCardClick}/>
                    <TripCard clicked={this.handleCardClick}/>
                    <TripCard clicked={this.handleCardClick}/>
                    <TripCard clicked={this.handleCardClick}/>
                </Aux>
                break;
            default:
                content = <TripCard />
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
                        <Tab label="Trips" />
                        <Tab label={this.props.activityItems > 0 ? <StyledBadge color="secondary" badgeContent={this.props.activityItems}> Activity</StyledBadge> : "Activity"} />
                        <Tab label={this.props.historyItems > 0 ? <StyledBadge color="secondary" badgeContent={this.props.historyItems}> Activity</StyledBadge> : "History"} />
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

export default Dashboard