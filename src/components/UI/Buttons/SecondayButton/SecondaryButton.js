import React from 'react';
import {StyledButton} from './styles';

const StyledSecondaryButton = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
};

export default StyledSecondaryButton