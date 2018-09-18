import React from 'react';
import {StyledLi,
        StyledA
    } from './styles';

const navigationItem = ( props ) => (
    <StyledLi>
        <StyledA 
            href={props.link}>{props.children}</StyledA>
    </StyledLi>
);

export default navigationItem;