import React from 'react';

import avatar from '../../../assets/images/avatar.png'
import RateStars from '../../UI/RateStars/RateStars';
import Title from '../../../components/UI/CustomTypography/Title/Title';
import { Typography } from '@material-ui/core';


import {
    StyledAvatar,
    StyledUl,
    StyledNameWrapper,
    StyledLIRresponseTimeWrapper
} from '../OwnedBy/styles';

const OwnedBy = (props) => {
    return (
        <div onClick={props.onwerClicked}>
            <Title variant="body2" component="h4"> Owned By</Title>
            <StyledUl>
                <li>
                    <StyledNameWrapper>
                        <Typography variant="headline" component="h5">Mike L.</Typography>
                        <RateStars rate='4' />
                    </StyledNameWrapper>
                    <Typography variant="body1" component="h6" style={{fontWeight: 600}}>Response Rate</Typography>
                    <Typography variant="body2" component="h6">90%</Typography>
                </li>
                <StyledLIRresponseTimeWrapper>
                    <Typography variant="body1" component="h6" style={{fontWeight: 600}}>Response Time</Typography>
                    <Typography variant="body2" component="h6">3 min</Typography>
                </StyledLIRresponseTimeWrapper>
                <li>
                    <StyledAvatar
                        alt="Steve Jobs"
                        src={avatar}></StyledAvatar>
                </li>
            </StyledUl>
        </div>
    );
}

export default OwnedBy