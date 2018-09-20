import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Logo from '../../UI/Logo/Logo';
import {
  StyledAppBar,
  StyledToolBar,
  StyledContainer,
  StyledNav
} from './styles';

class ToolBar extends Component {

  logoClickedHandler = () => {
    console.log(this.props);
    // this.props.history.replace('/')
  }
  render() {
    return (
      <StyledContainer>
        <StyledAppBar position="static">
          <StyledToolBar>
            <div>
              <Logo clicked={this.logoClickedHandler} />
            </div>
            <StyledNav>
              <Button color="inherit" onClick={this.props.loginClicked}>Login</Button>
              <Button color="inherit" onClick={this.props.signupClicked}>Sign Up</Button>
            </StyledNav>
          </StyledToolBar>
        </StyledAppBar>
      </StyledContainer>
    );
  }
}

export default ToolBar;