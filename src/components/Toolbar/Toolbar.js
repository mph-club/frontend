import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavigationItems from '../NavigationItems/NavigationItems'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './Toolbar.css';

const ButtonAppBar = () => {
  return (
    <div className={classes.root}>
      <AppBar position="static" className = {classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <NavigationItems/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;