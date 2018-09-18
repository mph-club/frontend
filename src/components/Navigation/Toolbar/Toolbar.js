import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {StyledAppBar,
        StyledToolBar,
        StyledContainer
      } from './styles';

const ButtonAppBar = () => {
  return (
    <StyledContainer>
      <StyledAppBar position="static">
        <StyledToolBar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <NavigationItems/>
        </StyledToolBar>
      </StyledAppBar>
    </StyledContainer>
  );
}

export default ButtonAppBar;