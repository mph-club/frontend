import React from 'react';
import {StyledTextButton} from './styles';

const TextButton = (props) => {
    return (
        <StyledTextButton {...props}>
            {props.children}
        </StyledTextButton>
    );
};

export default TextButton