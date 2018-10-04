import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/UI/CustomTypography/Title/Title';
import { space, palette } from '../../theme';
import TripDates from './TripDates/TripDates';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/UI/Buttons/SecondayButton/SecondaryButton';
import GetHelpForm from './GetHelpForm/GetHelpForm';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import {
    StyledContainer,
    StyledDivider,
    StyledDividerLayout,
    StyledPContainer
} from './styles';

class SummaryTripForHost extends Component {

    state = {
        open: false
    }

    handleGetHelpClicked = () => {
        this.setState({ open: true })
    }

    handleCloseGetHelp = () => {
        this.setState({ open: false })
    }

    render() {

        return (
            <React.Fragment>
                <StyledContainer>
                    <Title 
                        component="h4"
                        style={{
                            marginTop: `${space[3]}`,
                            marginBottom: `${space[3]}`
                        }}
                    >
                        TRIP DATES
                    </Title>
                    <div style={{ marginBottom: `${space[4]}` }}>
                        <TripDates />
                    </div>
                    <Divider />
                    <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}`}}>
                        <Title 
                            component="h4" 
                            style={{ marginBottom: `${space[3]}`}}
                        >
                            PICKP UP AND RETURN
                        </Title>
                        <Typography 
                            variant="title" 
                            component="h5" 
                            style={{ marginBottom: `${space[2]}`}}
                        > 
                            Miami, FL 
                        </Typography>
                        <Typography
                            variant="body1" 
                            component="p" 
                            style={{ color: `${palette.grey02}` }}
                        >
                            Exact address is provided after booking is confirmed.
                        </Typography>
                    </div>
                    <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}`}}>
                        <Title
                          component="h4" 
                          style={{ marginBottom: `${space[3]}`}}  
                        >
                            MILES INCLUDED
                        </Title>
                        <Typography
                            variant="title" 
                            component="h5" 
                            style={{ marginBottom: `${space[2]}`}}
                        >
                            200 mi
                        </Typography>
                        <Typography
                            variant="body1" 
                            component="p" 
                            style={{ color: `${palette.grey02}` }}
                        >
                            $0.45 fee for each additional mile.
                        </Typography>
                    </div>
                    <StyledPContainer>
                        <p>You have 8 hours to respond to Jim's trip request</p>
                    </StyledPContainer>
                    <div>
                        <PrimaryButton>Continue $382/per day</PrimaryButton>
                    </div>
                    <StyledDividerLayout>
                        <StyledDivider
                            variant="body2">or
                        </StyledDivider>
                    </StyledDividerLayout>
                    <div>
                        <SecondaryButton component={Link} to="/decline-trip">Decline trip request</SecondaryButton>
                    </div>
                </StyledContainer>
                <button onClick={this.handleGetHelpClicked}>Get help</button>
                <GetHelpForm
                    openForm={this.state.open}
                    closeForm={this.handleCloseGetHelp} />
            </React.Fragment>
        );
    }

};

export default SummaryTripForHost