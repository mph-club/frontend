import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { space, palette } from '../../../theme';
import Notice from '../../UI/Notice/Notice';

import {
    StyledCard,
    StyledExtContainer,
    StyledImageDiv
} from './styles';
import RateStars from '../../UI/RateStars/RateStars';

const CarCard = (props) => {

    let body = null

    switch (props.status) {
        case 'approved':
            body = <React.Fragment>
                <Typography variant="h6" color="primary" >Maserati Granturismo</Typography>
                <Typography variant="h6" color="primary" >Convertible 2016</Typography>
                <Typography variant="body2" color="primary" component="h3" style={{ marginTop: space[2]}}>10 trips</Typography>
                <RateStars rate='4'/>
            </React.Fragment>
            break;
        case 'unlisted':
            body = <React.Fragment>
                <Notice
                    color={palette.red}
                    label='Unlisted' />
                <Typography variant="h6" color="primary" component="h2">Maserati Granturismo</Typography>
                <Typography variant="h6" color="primary" component="h2">Convertible 2016</Typography>
                <Typography variant="body2" color="primary" component="h3" style={{ marginTop: space[2]}}>10 trips</Typography>
                <RateStars rate='4'/>
                
            </React.Fragment>
            break;
        case 'pendingListing':
            body = <React.Fragment>
                <Notice
                    color={palette.black}
                    label='Pending approval' />
                <Typography variant="h6" color="primary">Your listing is pending approval</Typography>
                <Typography variant="body2" color="primary" component="h3">Maserati Granturismo Convertible 2016</Typography>
                <span style={{ margin: space[4] }}></span>
                <Typography variant="body1" component="p" style={{ color: `${palette.grey02}` }}>Approvals take up to 72 hours</Typography>
            </React.Fragment>
            break;
        default: break;
    }

    return (
        <StyledCard onClick={props.clicked}>
            <CardContent>
                <StyledExtContainer>
                    <div style={{ marginTop: space[3] }}>
                        {body}
                    </div>
                    <StyledImageDiv>
                        <img src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/rH3L9hymTruCcALiNHs_Mw.1440x700.jpg" alt="label" />
                    </StyledImageDiv>
                </StyledExtContainer>
            </CardContent>
        </StyledCard>
    );
}



export default CarCard