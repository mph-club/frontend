import React from 'react';

import Button from '@material-ui/core/Button';
// import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../UI/Logo/Logo';
import {
  StyledAppBar,
  StyledToolBar,
  StyledContainer,
  StyledNav
} from './styles';

const ToolBar = (props) => {
  return (
    <StyledContainer>
      <StyledAppBar position="static">
        <StyledToolBar>
          <div>
            <Logo />
          </div>
          <StyledNav>
            {/* <NavigationItems /> */}
            <Button color="inherit" onClick={props.loginClicked}>Login</Button>
            <Button color="inherit" onClick={props.signupClicked}>Sign Up</Button>
          </StyledNav>
        </StyledToolBar>
      </StyledAppBar>
    </StyledContainer>
  );
}

export default ToolBar;