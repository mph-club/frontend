import React from 'react';
import {StyledButton} from './styles';

const StyledSecondaryButton = (props) => {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    );
};

export default StyledSecondaryButton