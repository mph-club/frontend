import React from 'react';
import {
    StyledCard,
    StyledExtContainer,
    StyleImage
} from './styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Notice from '../Notice/Notice';
import Aux from '../../../hoc/Aux/Aux';
import { palette } from '../../../theme';

const TripCard = (props) => {

    let notice = null

    switch (props.status) {
        case 'pendingTrip':
            notice = <Aux>
                <Notice
                    color={palette.green} 
                    label='Pending your approval'/>
            </Aux>
            break;
        case 'pendingListing':
            notice = <Aux>
                <Notice
                    color={palette.black} 
                    label='Pending approval'/>
            </Aux>
            break;
        default: break;
    }

    return (
        <StyledCard onClick={props.clicked}>
            <CardContent>
                {notice}
                <StyledExtContainer>
                    <div>
                        <Typography color="primary" component="h2">Jim's trip request</Typography>
                        <Typography color="primary" component="h3">Maserati Granturismo Convertible 2016</Typography>
                        <div style={{ display: 'flex' }}>
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