import React from 'react';
import { Link } from 'react-router-dom';
import PrimayPriceButton from '../../UI/Buttons/PrimaryPriceButton/PrimaryPriceButton';
import TextButton from '../../../components/UI/Buttons/TextButton/TextButton';
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
        <React.Fragment>
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
                    <form noValidate>
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
                        />
                    </form>
                </div>
                <Divider />
                <div style={{ marginTop: `${space[4]}`, marginBottom: `${space[4]}`}}>
                    <Title component="h4" 
                           style={{ marginBottom: `${space[3]}`}}>PICKP UP AND RETURN</Title>
                    <Typography 
                        variant="h6" 
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
                        variant="h6"
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
        </React.Fragment>
    );
};

export default SummaryTrip