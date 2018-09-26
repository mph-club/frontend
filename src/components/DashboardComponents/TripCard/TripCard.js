import React from 'react';
import {
    StyledCard,
    StyledExtContainer,
    StyleNotice,
    StyledNoticeContainer,
    StyleImage
} from './styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const TripCard = (props) => {
    return (
        <StyledCard>
            <CardContent>
                <StyledNoticeContainer>
                    <StyleNotice component="h3">Pending your approval</StyleNotice>
                </StyledNoticeContainer>
                <StyledExtContainer>
                    <div>
                        <Typography color="primary" component="h2">Jim's trip request</Typography>
                        <Typography color="primary" component="h3">Maserati Granturismo Convertible 2016</Typography>
                        <div style={{display: 'flex'}}>
                            <div>
                                <Typography color="primary" component="h5">Start date</Typography>
                                <Typography color="primary" component="h2">Tuesday, Jul 6, 2018</Typography>
                                <Typography color="primary" component="h2">10:00 AM</Typography>
                            </div>
                            <div>
                                <Typography color="primary" component="h5">End date</Typography>
                                <Typography color="primary" component="h2">Friday, Jul 9, 2018</Typography>
                                <Typography color="primary" component="h2">12:00 AM</Typography>
                            </div>
                        </div>
                    </div>
                    <StyleImage src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/rH3L9hymTruCcALiNHs_Mw.1440x700.jpg" alt="label" />
                </StyledExtContainer>
                <Typography color="primary" component="p">You have 8 hours to respond to this booking.</Typography>
            </CardContent>
        </StyledCard>
    );
}

export default TripCard