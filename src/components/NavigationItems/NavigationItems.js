import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import {StyledUl} from './styles';

const navigationItems = () => (
    <StyledUl>
        <NavigationItem link="/">Login</NavigationItem>
        <NavigationItem link="/">Sign In</NavigationItem>
    </StyledUl>
);

export default navigationItems