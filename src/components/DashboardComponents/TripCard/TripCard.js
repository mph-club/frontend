import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import theme, { space, palette } from '../../../theme';

import {
    StyledCard,
    StyledExtContainer,
    StyleNotice,
    StyledNoticeContainer,
    StyledImageDiv,
    StyledSlantedDivider
} from './styles';

const TripCard = (props) => {
    return (
        <StyledCard onClick={props.clicked}>
            <CardContent>
                <StyledNoticeContainer style={{ marginBottom: `${space[3]}` }}>
                    <StyleNotice variant="body1" component="h3">Pending your approval</StyleNotice>
                </StyledNoticeContainer>
                <StyledExtContainer>
                    <div>
                        <Typography variant="title" color="primary" component="h2">Jim's trip request</Typography>
                        <Typography variant="body2" color="primary" component="h3">Maserati Granturismo Convertible 2016</Typography>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: `${space[3]}`, marginBottom: `${space[3]}`}}>
                            <div>
                                <Typography variant="body1" color="primary" component="h5" style={{ color: `${palette.grey02}`, fontWeight: 600, marginBottom: `${space[1]}` }}>Start date</Typography>
                                <Typography variant="title" color="primary" component="h2">Tuesday, Jul 6, 2018</Typography>
                                <Typography variant="body2" color="primary" component="h2" style={{ fontWeight: 600 }}>10 AM</Typography>
                            </div>
                            <StyledSlantedDivider />
                            <div>
                                <Typography variant="body1" color="primary" component="h5" style={{ color: `${palette.grey02}`, fontWeight: 600, marginBottom: `${space[1]}` }}>End date</Typography>
                                <Typography variant="title" color="primary" component="h2">Friday, Jul 9, 2018</Typography>
                                <Typography variant="body2" color="primary" component="h2" style={{ fontWeight: 600 }}>12 PM</Typography>
                            </div>
                        </div>
                    </div>
                    <StyledImageDiv>
                        <img src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/rH3L9hymTruCcALiNHs_Mw.1440x700.jpg" alt="label" />
                    </StyledImageDiv>
                </StyledExtContainer>
                <Typography variant="body1" component="p" style={{ color: `${palette.grey02}` }}>You have 8 hours to respond to this booking.</Typography>
            </CardContent>
        </StyledCard>
    );
}

export default TripCard