import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Contact Us</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
        <NavigationItem link="/">Sign In</NavigationItem>
        <NavigationItem link="/">Login</NavigationItem>
    </ul>
);

export default navigationItems