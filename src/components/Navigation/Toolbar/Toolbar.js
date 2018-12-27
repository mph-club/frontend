import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Logo from '../../UI/Logo/Logo';
import UserEntry from '../UserEntry/UserEntry';
import MenuIcon from '@material-ui/icons/Menu';

import {
  StyledAppBar,
  StyledToolBar,
  AuthNav,
  UnAuthNav,
  ListVehicleButton,
  MenuButton,
  MenuButtonContainer
} from './styles';

import * as actions from '../../../store/actions/index';
import { palette } from '../../../theme';

class ToolBar extends Component {

  logoClicked = () => {
    this.props.history.replace('/')
  }

  render() {
    let authItems = null

    if (this.props.location.pathname === '/dashboard') {
      authItems = <Button color="inherit" component={Link} to="/host-dashboard">Host</Button>
    } else if (this.props.location.pathname === '/host-dashboard') {
      authItems = <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
    }

    authItems = <React.Fragment>
      <ListVehicleButton color="inherit" >List your vehicle</ListVehicleButton>
      {authItems}
      <UserEntry />
    </React.Fragment>

    const unAuthItems = <Fragment>
      <ListVehicleButton color="inherit" >List your vehicle</ListVehicleButton>
      <Button color="inherit" onClick={this.props.openSignIn}>Login</Button>
      <Button color="inherit" onClick={this.props.openSignUp}>Sign Up</Button>
    </Fragment>

    return (
      <StyledAppBar position="fixed" >
        <StyledToolBar>
          <Logo clicked={this.logoClicked} />
          {
            this.props.auth ?
              <AuthNav>
                {authItems}
              </AuthNav> :
              <Fragment>
                <UnAuthNav>
                  {unAuthItems}
                </UnAuthNav>
                <MenuButtonContainer>
                  <MenuButton onClick={() => this.props.openDrawer()} >
                    <MenuIcon style={{ color: palette.white }} />
                  </MenuButton>
                </MenuButtonContainer>
              </Fragment>
          }
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
    openSignIn: () => { dispatch(actions.openSignIn(true)) },
    openDrawer: () => { dispatch(actions.openNavDrawer(true)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));