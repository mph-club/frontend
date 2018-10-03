import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Logo from '../../UI/Logo/Logo';
import Aux from '../../../hoc/Aux/Aux';
import UserEntry from '../UserEntry/UserEntry';
import { withRouter, Link } from 'react-router-dom';
import {
  StyledAppBar,
  StyledToolBar,
  StyledNav
} from './styles';

class ToolBar extends Component {

  logoClicked = () => {
    this.props.history.replace('/search-page')
  }

  render() {
    let buttons = null
    if (this.props.auth) {

      if (this.props.location.pathname === '/dashboard') {
        buttons = <Button color="inherit" component={Link} to="/host-dashboard">Host</Button>
      }
      buttons = <Aux>
        {buttons}
        <UserEntry userName={this.props.userName} />
      </Aux>
    } else {
      buttons = <Aux>
        <Button color="inherit" onClick={this.props.loginClicked}>Login</Button>
        <Button color="inherit" onClick={this.props.signupClicked}>Sign Up</Button>
      </Aux>
    }

    return (
      <StyledAppBar position="fixed">
        <StyledToolBar>
          <div>
            <Logo clicked={this.logoClicked} />
          </div>
          <StyledNav>
            {buttons}
          </StyledNav>
        </StyledToolBar>
      </StyledAppBar>
    );
  }
}

export default withRouter(ToolBar);