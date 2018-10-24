import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { space, palette } from '../../../theme';
import Notice from '../../UI/Notice/Notice';

import {
    StyledCard,
    StyledExtContainer,
    StyledImageDiv,
    StyledSlantedDivider,
    StyledDateWrapper
} from './styles';

const TripCard = (props) => {

    let notice = null
    let title = null
    let message = null
    let styles = null

    switch (props.status) {
        case 'tripRequestCancelled':
            title = 'You cancelled your trip request on Jul 28'
            styles = { textDecoration: 'line-through', color: palette.grey02 }
            message = 'CANCELATION NUMBER: KDHIU278'
            break;
        case 'tripConfirmed':
            title = 'Your trip is confirmed'
            message = 'Your trips starts in 2 days'
            break;
        case 'unlisted':
            notice = <React.Fragment>
                <Notice
                    color={palette.red}
                    label='Pending your approval' />
            </React.Fragment>
            break;
        case 'tripPending':
            notice = <React.Fragment>
                <Notice
                    color={palette.black}
                    label='Pending approval' />
            </React.Fragment>
            styles = { color: palette.black }
            title = 'Your trip pending'
            message = 'Mike L has 2 hours left to respond to this booking'
            break;
        default:
            title = 'Jim\'s trip request'
            message = 'You have 8 hours to respond to this booking.'
            break;
    }

    return (
        <StyledCard onClick={props.clicked}>
            <CardContent>
                {notice}
                <StyledExtContainer>
                    <div>
                        <Typography variant="title" color="primary" component="h2">{title}</Typography>
                        <Typography variant="body2" style={styles} component="h3">Maserati Granturismo Convertible 2016</Typography>
                        <StyledDateWrapper>
                            <div>
                                <Typography variant="body1" color="primary" component="h5" style={{ color: `${palette.grey02}`, fontWeight: 600, marginBottom: `${space[1]}` }}>Start date</Typography>
                                <Typography variant="title" style={styles} component="h2">Tue, Jul 6, 2018</Typography>
                                <Typography variant="body2" component="h2" style={{ ...styles, fontWeight: 600 }}>10 AM</Typography>
                            </div>
                            <StyledSlantedDivider />
                            <div>
                                <Typography variant="body1" color="primary" component="h5" style={{ color: `${palette.grey02}`, fontWeight: 600, marginBottom: `${space[1]}` }}>End date</Typography>
                                <Typography variant="title" style={styles} component="h2">Fri, Jul 9, 2018</Typography>
                                <Typography variant="body2" component="h2" style={{ ...styles, fontWeight: 600 }}>12 PM</Typography>
                            </div>
                        </StyledDateWrapper>
                    </div>
                    <StyledImageDiv>
                        <img src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/rH3L9hymTruCcALiNHs_Mw.1440x700.jpg" alt="label" />
                    </StyledImageDiv>
                </StyledExtContainer>
                <Typography variant="body1" component="p" style={{ color: `${palette.grey02}` }}>{message}</Typography>
            </CardContent>
        </StyledCard>
    );
}



export default TripCard