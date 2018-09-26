import React, { Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import TripCard from '../../components/DashboardComponents/TripCard/TripCard';
import Aux from '../../hoc/Aux/Aux';
import {
    StyledAppBar,
    StyledListContainer
} from './styles';


class Dashboard extends Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        const { value } = this.state
        let content = null

        switch (value) {
            case 0:
                content = <Aux>
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                </Aux>
                break;
            default:
                content = <TripCard />
                break;
        }

        return (
            <div>
                <StyledAppBar position="fixed">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        centered
                    >
                        <Tab label="Trips" />
                        <Tab label="Activity" />
                        <Tab label="History" />
                    </Tabs>
                </StyledAppBar>
                <Divider />
                <StyledListContainer>
                    {content}
                </StyledListContainer>

            </div>
        );
    }
}

export default Dashboard