import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/UI/CustomTypography/Title/Title';
import { space, palette } from '../../theme';
import TripDates from './TripDates/TripDates';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/UI/Buttons/SecondayButton/SecondaryButton';
import TextButton from '../../components/UI/Buttons/TextButton/TextButton';
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
import GetHelpDialog from './GetHelpDialog/GetHelpDialog';

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

        let label = null
        let firstButton = null
        let secondButton = null

        switch (this.props.status) {
            case 'tripPending':
                label = this.props.userName + ' has ' + this.props.hoursRemaining + ' hours left to respond to this booking'
                firstButton = <SecondaryButton large="true">   Change trip   </SecondaryButton>
                secondButton = <TextButton onClick={this.handleGetHelpClicked} style={{ marginRight: `${space[1]}` }}>Cancel Trip</TextButton>
                break;
            default:
                firstButton = <PrimaryButton large="true">Accept Jim's trip request</PrimaryButton>
                secondButton = <SecondaryButton large="true" component={Link} to="/decline-trip">Decline trip request</SecondaryButton>
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
                    <div style={{ textAlign: 'center' }}>
                        {firstButton}
                    </div>
                    <StyledDividerLayout>
                        <StyledDivider variant="body2">or</StyledDivider>
                    </StyledDividerLayout>
                    <div style={{ textAlign: 'center', marginBottom: `${space[4]}` }}>
                        {secondButton}
                    </div>
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

export default SummaryTripForHost