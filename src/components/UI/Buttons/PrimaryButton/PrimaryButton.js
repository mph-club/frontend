import React from 'react';
import {StyledButton} from './styles';

const StyledPrimaryButton = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
};

export default StyledPrimaryButton