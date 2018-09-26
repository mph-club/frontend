import React from 'react';

import Button from '@material-ui/core/Button';
import Logo from '../../UI/Logo/Logo';
import Aux from '../../../hoc/Aux/Aux';
import UserEntry from '../UserEntry/UserEntry';
import {
  StyledAppBar,
  StyledToolBar,
  StyledContainer,
  StyledNav
} from './styles';

const ToolBar = (props) => {

  let buttons = null
  if (props.auth) {
    buttons = <UserEntry userName={props.userName}/>
  } else {
    buttons = <Aux>
      <Button color="inherit" onClick={props.loginClicked}>Login</Button>
      <Button color="inherit" onClick={props.signupClicked}>Sign Up</Button>
    </Aux>
  }

  return (
    <StyledContainer>
      <StyledAppBar position="static">
        <StyledToolBar>
          <div>
            <Logo />
          </div>
          <StyledNav>
            {buttons}
          </StyledNav>
        </StyledToolBar>
      </StyledAppBar>
    </StyledContainer>
  );
}

export default ToolBar;