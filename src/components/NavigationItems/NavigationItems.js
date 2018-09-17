import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Login</NavigationItem>
        <NavigationItem link="/">Sign In</NavigationItem>
    </ul>
);

export default navigationItems