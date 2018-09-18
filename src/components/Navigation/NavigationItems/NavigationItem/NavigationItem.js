import React from 'react';


import {StyledLi,
        StyledLink
    } from './styles';

const navigationItem = ( props ) => (
    <StyledLi>
        <StyledLink 
            to={props.link}
            exact={props.exact}>{props.children}</StyledLink>
    </StyledLi>
);

export default navigationItem;