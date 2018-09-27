import React from 'react';
import { Link } from 'react-router-dom';

import {
    StyledTextField,
    StyledContainer,
    StyledPickUpReturnWrapper,
    StyledTitleWrapper,
    StyledLocationWrapper,
    StyledMilesIncludedWrapper,
    StyledMilesIncludedTitleWrapper,
    StyledMilesTitleWrapper,
    StyledFormWrapper,
    StyledTitleTripDatesWrapper
} from './styles';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import Aux from '../../../hoc/Aux/Aux';
import Title from '../../UI/CustomTypography/Title/Title';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { palette } from '../../../theme';

const SummaryTrip = (props) => {

    const MyLink = props => <Link to="/checkout" {...props} />

    return (
        <Aux>
            <StyledContainer>
                <StyledFormWrapper>
                    <StyledTitleTripDatesWrapper>
                        <Title component="h4">TRIP DATES</Title>
                    </StyledTitleTripDatesWrapper>
                    <form noValidate fullWidth>
                        <StyledTextField
                            fullWidth
                            id="startTextField"
                            label="Start date"
                            type="date"
                            defaultValue="2017-05-24"
                            variant="outlined"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                    <form noValidate fullWidth>
                        <StyledTextField
                            fullWidth
                            id="endTextField"
                            label="End date"
                            type="date"
                            defaultValue="2017-05-24"
                            variant="outlined"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </StyledFormWrapper>
                <Divider />
                <StyledPickUpReturnWrapper>
                    <StyledTitleWrapper>
                        <Title component="h4">PICKP UP AND RETURN</Title>
                    </StyledTitleWrapper>
                    <StyledLocationWrapper>
                        <Typography variant="title" component="h5">Miami, FL</Typography>
                    </StyledLocationWrapper>
                    <Typography variant="body1" component="p" style={{ color: `${palette.grey02}` }}>Exact address is provided after booking is confirmed</Typography>
                </StyledPickUpReturnWrapper>
                <Divider />
                <StyledMilesIncludedWrapper>
                    <StyledMilesIncludedTitleWrapper>
                        <Title component="h4">MILES INCLUDED</Title>
                    </StyledMilesIncludedTitleWrapper>
                    <StyledMilesTitleWrapper>
                        <Typography variant="title" component="h5">200 mi</Typography>
                    </StyledMilesTitleWrapper>
                    <Typography component="p" style={{ color: `${palette.grey02}` }}>$0.45 fee for each additional mile</Typography>
                </StyledMilesIncludedWrapper>
                <div>
                    <PrimaryButton component={MyLink}>Continue $382/per day</PrimaryButton>
                </div>
            </StyledContainer>
            <button onClick={props.reportListingClicked}>Report this listing</button>
        </Aux>
    );
};

export default SummaryTrip