import React from 'react';
import { StyledStepsWrapper, 
         StyledPaymentWrapper } from './styles';
import Typography from '@material-ui/core/Typography';
import { palette } from '../../../../theme';
import { Divider } from '@material-ui/core';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import IconButton from '@material-ui/core/IconButton';

const Payout = (props) => {

    return (
        <React.Fragment>
            <StyledStepsWrapper>
                <div>
                    <Typography variant="title" component="p">{props.userName}</Typography>
                    <Typography variant="body1" component="p" style={{ color: palette.grey02 }}>{props.carMake}</Typography>
                    <Typography variant="body1" component="p" style={{ color: palette.grey02 }}>{props.carYear}</Typography>
                </div>
                <StyledPaymentWrapper>
                    <div style={{ textAlign:'end'}}>
                        <Typography variant="title" component="p">${props.amount}</Typography>
                        <Typography 
                            variant="body1" 
                            component="p" 
                            style={{ 
                                color: (props.status === 'Payment-failed') ? palette.red : palette.grey02,
                                fontStyle: (props.status === 'In-progress') ? 'italic' : 'normal'
                            }}
                        >
                            {props.status}
                        </Typography>
                        <Typography 
                            variant="body1" 
                            component="p"
                            style={{
                                color: palette.grey02,
                                fontStyle: (props.status === 'In-progress') ? 'italic' : 'normal'
                            }}
                        >
                            {props.cardNumber}
                        </Typography>
                    </div>
                    <div style={{ paddingLeft: 32 }}>
                        <IconButton>
                            <ChevronRightRoundedIcon fontSize="large" style={{ color: palette.grey03 }} />
                        </IconButton>
                    </div>
                </StyledPaymentWrapper>
            </StyledStepsWrapper>
            <Divider />
        </React.Fragment>
    );
}

export default Payout