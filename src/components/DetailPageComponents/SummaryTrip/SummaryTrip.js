import React from 'react';
import { Link } from 'react-router-dom';
import PrimayPriceButton from '../../UI/Buttons/PrimaryPriceButton/PrimaryPriceButton';
import TextButton from '../../../components/UI/Buttons/TextButton/TextButton';
import Aux from '../../../hoc/Aux/Aux';
import Title from '../../UI/CustomTypography/Title/Title';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { palette, space } from '../../../theme';
import SelectTextField from '../../UI/FormElements/SelectTextField/SelectTextField';
import FlagOutlineIcon from '@material-ui/icons/FlagOutlined';

import {
    StyledContainer,
    StyledReportThisListingWrapper
} from './styles';

const SummaryTrip = (props) => {

    const MyLink = props => <Link to="/checkout" {...props} />

    return (
        <Aux>
            <StyledContainer>
                <div style={{marginBottom: `${space[4]}`}}>
                    <Title component="h4" 
                           style={{ 
                               marginTop: `${space[3]}`, 
                               marginBottom: `${space[3]}`
                            }}
                    >
                        TRIP DATES
                    </Title>
                    <form noValidate fullWidth>
                        <SelectTextField
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
                        <SelectTextField
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
                            style={{marginBottom: '32px'}}
                        />
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
                    </form>
                </div>
                <Divider />
                <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}`}}>
                    <Title component="h4" 
                           style={{ marginBottom: `${space[3]}`}}>PICKP UP AND RETURN</Title>
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
                        Exact address is provided after booking is confirmed
                    </Typography>
                </div>
                <Divider />
                <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}`}}>
                    <Title component="h4" style={{ marginBottom: `${space[3]}` }}>MILES INCLUDED</Title>
                    <Typography 
                        variant="title" 
                        component="h5" 
                        style={{ 
                            marginBottom: `${space[2]}`
                        }}
                    >
                        200 mi
                    </Typography>
                    <Typography 
                        component="p" 
                        style={{ color: `${palette.grey02}` }}
                    >
                        $0.45 fee for each additional mile
                    </Typography>
                </div>
                <div style={{ textAlign: 'center'}}>
                    <PrimayPriceButton 
                        component={MyLink} 
                        text="Continue"
                        dollar="$" 
                        price="329"
                        perday="/per day"
                        style={{ marginBottom: `${space[4]}`}}
                    />
                </div>
            </StyledContainer>
            <StyledReportThisListingWrapper>
                <TextButton onClick={props.reportListingClicked}>    
                    Report this listing
                </TextButton>
                <FlagOutlineIcon onClick={props.reportListingClicked} style={{ color: `${palette.blue}`, cursor: 'pointer'}} />
            </StyledReportThisListingWrapper>
        </Aux>
    );
};

export default SummaryTrip