import React from 'react';
import { StyledStepsContainer } from './styles';
import Typography from '@material-ui/core/Typography';
import { palette } from '../../../../theme';
import { Divider } from '@material-ui/core';

const Payout = (props) => {

    return (
        <React.Fragment>
            <StyledStepsContainer>
                <div>
                    <Typography variant="body1" component="p" style={{ fontWeight: 400 }}>{props.userName}</Typography>
                    <Typography variant="body1" component="p" style={{ fontWeight: 400, color: palette.gray02 }}>{props.carMake}</Typography>
                    <Typography variant="body1" component="p" style={{ fontWeight: 400 }}>{props.carYear}</Typography>
                </div>
                <div style={{ textAlign:'end'}}>
                    <Typography variant="body1" component="p" style={{ fontWeight: 400 }}>${props.amount}</Typography>
                    <Typography variant="body1" component="p" style={{ fontWeight: 400, color: (props.status === 'fail') ? palette.red : palette.grey02 }}>{props.status}</Typography>
                    <Typography variant="body1" component="p" style={{ fontWeight: 400 }}>{props.cardNumber}</Typography>
                </div>
            </StyledStepsContainer>
            <Divider />
        </React.Fragment>
    );
}

export default Payout