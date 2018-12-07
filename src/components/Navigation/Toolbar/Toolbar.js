import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Logo from '../../UI/Logo/Logo';
import UserEntry from '../UserEntry/UserEntry';
import {
  StyledAppBar,
  StyledToolBar,
  StyledNav
} from './styles';

import * as actions from '../../../store/actions/index';

class ToolBar extends Component {

  logoClicked = () => {
    this.props.history.replace('/')
  }

  render() {
    let buttons = null
    if (this.props.auth) {

      if (this.props.location.pathname === '/dashboard') {
        buttons = <Button color="inherit" component={Link} to="/host-dashboard">Host</Button>
      } else if (this.props.location.pathname === '/host-dashboard') {
        buttons = <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
      }

      buttons = <React.Fragment>
        {buttons}
        <UserEntry/>
      </React.Fragment>
    } else {
      buttons = <React.Fragment>
        <Button color="inherit" onClick={this.props.openSignIn}>Login</Button>
        <Button color="inherit" onClick={this.props.openSignUp}>Sign Up</Button>
      </React.Fragment>
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

const mapStateToProps = state => {
  return {
    auth: state.auth.session.isValid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSignUp: () => { dispatch(actions.openSignUp(true)) },
    openSignIn: () => { dispatch(actions.openSignIn(true)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));