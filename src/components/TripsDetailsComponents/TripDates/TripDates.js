import React, { Component } from 'react';
import { space, palette } from '../../../theme';
import Typography from '@material-ui/core/Typography';

import {
    StyledExtContainer,
    StyledSlantedDivider,
    StyledDateWrapper
} from './styles';

class TripDates extends Component {

    render() {

        return (
            <StyledExtContainer>
                <StyledDateWrapper>
                    <div>
                        <Typography variant="body1" color="primary" component="h5" style={{ color: `${palette.grey02}`, fontWeight: 600, marginBottom: `${space[1]}` }}>Start date</Typography>
                        <Typography variant="h6" color="primary">Tue, Jul 6, 2018</Typography>
                        <Typography variant="body2" color="primary" component="h2" style={{ fontWeight: 600 }}>10 AM</Typography>
                    </div>
                    <StyledSlantedDivider />
                    <div>
                        <Typography variant="body1" color="primary" component="h5" style={{ color: `${palette.grey02}`, fontWeight: 600, marginBottom: `${space[1]}` }}>End date</Typography>
                        <Typography variant="h6" color="primary">Fri, Jul 9, 2018</Typography>
                        <Typography variant="body2" color="primary" component="h2" style={{ fontWeight: 600 }}>12 PM</Typography>
                    </div>
                </StyledDateWrapper>
            </StyledExtContainer>
        );
    }
}

export default TripDates