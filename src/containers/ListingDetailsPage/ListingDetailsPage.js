import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { palette } from '../../theme';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import {
    StyledImageContainer,
    StyledImg,
    StyledGridContainer,
    StyledTitleLayout
} from './styles';
import Footer from '../../components/Navigation/Footer/Footer';
import SummaryApprovalStatus from '../../components/ListingDetailsPageComponents/SummaryApprovalStatus/SummaryApprovalStatus';
import StepComponent from '../../components/UI/StepComponent/StepComponent';
import Notice from '../../components/DashboardComponents/Notice/Notice';
import PricingSetupDialog from '../../components/ListingDetailsPageComponents/PricingSetupDialog/PricingSetupDialog';

class ListingDetailsPage extends Component {

    state = {
        priceSetup: false
    }

    handleOpenPriceSetup = () => {
        this.setState({ priceSetup: true });
    }

    handleClosePriceSetup = () => {
        this.setState({ priceSetup: false });
    }

    goToUploadPictures = () => {
        this.props.history.push('/upload-pictures');
    }

    render() {
        return (
            <React.Fragment>
                <StyledImageContainer>
                    <StyledImg src='https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/6TEUkndvSRqBU7rn_1CbAw.1440x700.jpg' alt='asda' />
                </StyledImageContainer>
                <StyledGridContainer>
                    <StyledTitleLayout>
                        <Notice
                            color={palette.black}
                            label='Pending Approval' />
                        <Typography variant="display1" color="primary" component="h2">Porsche Panamera</Typography>
                        <Typography variant="display1" color="primary" component="h2">2016</Typography>
                    </StyledTitleLayout>
                    <Grid container spacing={40}>
                        <Grid item xs>
                            <Divider />
                            <StepComponent
                                label='Pricing'
                                buttonLabel='Change'
                                color={palette.green}
                                clicked={this.handleOpenPriceSetup}
                            />
                            <Divider />
                            <StepComponent
                                label='Photos'
                                buttonLabel='Add'
                                color={palette.green}
                                clicked={this.goToUploadPictures}
                            />
                            <Divider />
                            <StepComponent
                                label='Details'
                                buttonLabel='Change'
                                color={palette.green}
                            />
                            <Divider />
                            <StepComponent
                                label='Insurance'
                                buttonLabel='Premium'
                                color={palette.green}
                            />
                            <Divider />
                            <StepComponent
                                label='Delivery & airport'
                                buttonLabel='Change'
                                color={palette.green}
                            />
                            <Divider />
                            <StepComponent
                                label='Location'
                                buttonLabel='Change'
                                color={palette.green}
                            />
                            <Divider />
                            <StepComponent
                                label='Trip history'
                                buttonLabel='View details'
                                color={palette.green}
                            />
                            <Divider />
                            <StepComponent
                                label='Trip preference'
                                buttonLabel='Change'
                                color={palette.green}
                            />
                            <Divider style={{ marginBottom: '64px' }} />
                        </Grid>
                        <Grid item xs>
                            <SummaryApprovalStatus />
                        </Grid>
                    </Grid>
                </StyledGridContainer>
                <PricingSetupDialog
                    openForm={this.state.priceSetup}
                    closeForm={this.handleClosePriceSetup} />
                <Footer />
            </React.Fragment >
        );
    }
}

export default withStyles(({}), { withTheme: true })(ListingDetailsPage);


