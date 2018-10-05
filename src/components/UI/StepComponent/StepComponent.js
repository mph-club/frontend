import React from 'react';
import TextButton from '../Buttons/TextButton/TextButton';
import Typography from '@material-ui/core/Typography';
import { StyledStepsContainer } from './styles';

const StepComponent = (props) => {
    return (
        <React.Fragment>
            <StyledStepsContainer>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="title" component="p" style={{ fontWeight: 400 }}>{props.label}</Typography>
                </div>
                <div>
                    <TextButton
                        color={props.color}
                        onClick={props.clicked}
                    >{props.buttonLabel}
                    </TextButton>
                </div>
            </StyledStepsContainer>
        </React.Fragment>
    );
}

export default StepComponent