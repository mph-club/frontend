import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../UI/CustomTypography/Title/Title';
import { space, palette } from '../../../theme';
import TripDates from '../TripDates/TripDates';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';
import TextButton from '../../UI/Buttons/TextButton/TextButton';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import {
    StyledContainer,
    StyledDivider,
    StyledDividerLayout,
    StyledNoticeWrapper,
    StyledReportThisListingWrapper
} from './styles';
import GetHelpDialog from '../GetHelpDialog/GetHelpDialog';

class SummaryTripByUser extends Component {

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

        let label = null
        let actions = null

        switch (this.props.status) {
            case 'tripRequestPending':
                label = this.props.userName + ' has ' + this.props.hoursRemaining + ' hours left to respond to this booking'
                actions = <React.Fragment>
                    <div style={{ textAlign: 'center' }}>
                        <SecondaryButton large="true" onClick={this.props.handleChangeTrip}>Change trip</SecondaryButton>
                    </div>
                    <StyledDividerLayout>
                        <StyledDivider variant="body2">or</StyledDivider>
                    </StyledDividerLayout>
                    <div style={{ textAlign: 'center', marginBottom: `${space[4]}` }}>
                        <TextButton onClick={this.props.handleCancelTrip} style={{ marginRight: `${space[1]}` }}>Cancel Trip</TextButton>
                    </div>
                </React.Fragment>
                break;
            case 'tripConfirmed':
                label = 'Your trip starts in 2 days.'
                actions = <React.Fragment>
                    <div style={{ textAlign: 'center' }}>
                        <SecondaryButton large="true">Change trip</SecondaryButton>
                    </div>
                    <StyledDividerLayout>
                        <StyledDivider variant="body2">or</StyledDivider>
                    </StyledDividerLayout>
                    <div style={{ textAlign: 'center', marginBottom: `${space[4]}` }}>
                        <TextButton onClick={this.props.handleCancelTrip} style={{ marginRight: `${space[1]}` }}>Cancel Trip</TextButton>
                    </div>
                </React.Fragment>
                break;
            case 'tripPast':
                label = 'Past trip'
                break;
            default:

                actions = [<PrimaryButton large="true">Accept Jim's trip request</PrimaryButton>,
                <SecondaryButton large="true" component={Link} to="/decline-trip">Decline trip request</SecondaryButton>]
                break;
        }

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
                    <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                        <Title
                            component="h4"
                            style={{ marginBottom: `${space[3]}` }}
                        >
                            PICKP UP AND RETURN
                        </Title>
                        <Typography
                            variant="title"
                            component="h5"
                            style={{ marginBottom: `${space[2]}` }}
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
                    <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}` }}>
                        <Title
                            component="h4"
                            style={{ marginBottom: `${space[3]}` }}
                        >
                            MILES INCLUDED
                        </Title>
                        <Typography
                            variant="title"
                            component="h5"
                            style={{ marginBottom: `${space[2]}` }}
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
                    <StyledNoticeWrapper>
                        <Typography
                            variant="body1"
                            component="p"
                            style={{ color: `${palette.grey02}` }}
                        >
                            {label}
                        </Typography>
                    </StyledNoticeWrapper>
                    {actions}
                </StyledContainer>
                <StyledReportThisListingWrapper>
                    <TextButton
                        onClick={this.handleGetHelpClicked}
                        style={{ marginRight: `${space[1]}` }}
                    >
                        Get help
                    </TextButton>
                    <HelpOutlineIcon
                        fontSize="small"
                        style={{
                            color: `${palette.blue}`,
                            cursor: 'pointer'
                        }}
                    />
                </StyledReportThisListingWrapper>
                <GetHelpDialog
                    openForm={this.state.open}
                    closeForm={this.handleCloseGetHelp} />
            </React.Fragment>
        );
    }

};

export default SummaryTripByUser