import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems'
import MenuIcon from '@material-ui/icons/Menu';
import {StyledAppBar,
        StyledToolBar,
        StyledIconButton,
        StyledContainer
      } from './styles';

const ButtonAppBar = () => {
  return (
    <StyledContainer>
      <StyledAppBar position="static">
        <StyledToolBar>
          <StyledIconButton color="inherit" aria-label="Menu">
            <MenuIcon/>
          </StyledIconButton>
          <NavigationItems/>
        </StyledToolBar>
      </StyledAppBar>
    </StyledContainer>
  );
}

export default ButtonAppBar;