import React from 'react';
import NavigationItem from '../FooterNavigationItems/NavigationItem/NavigationItem';
import {StyledUl} from './styles';

const navigationItems = () => (
    <StyledUl>
        <NavigationItem link="/about-us">About Us</NavigationItem>
        <NavigationItem link="/blog">Blog</NavigationItem>
        <NavigationItem link="/contact-us">Contact Us</NavigationItem>
    </StyledUl>
);

export default navigationItems