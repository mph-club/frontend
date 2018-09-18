import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import {StyledUl} from './styles';

const navigationItems = () => (
    <StyledUl>
        <NavigationItem link="/login">Login</NavigationItem>
        <NavigationItem link="/signup">Sign Up</NavigationItem>
    </StyledUl>
);

export default navigationItems