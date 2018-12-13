import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { StyledAvatar } from './styles';

import * as actions from '../../../store/actions/index';


class UserEntry extends PureComponent {

    state = {
        open: false,
    };

    componentDidMount() {
        this.props.onAccountFechtInfo(this.props.accessToken)
    }

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    handleLogout = () => {
        this.handleToggle();
        this.props.onLogout();
    }

    render() {
        const { open } = this.state;
        const { user } = this.props
        const DashboardLink = props => <Link to="/dashboard" {...props} />
        const AccountLink = props => <Link to="/account" {...props} />

        return (
            <React.Fragment>
                <Button
                    variant="contained"
                    color="primary"
                    buttonRef={node => {
                        this.anchorEl = node;
                    }}
                    aria-owns={open ? 'menu-list-grow' : null}
                    aria-haspopup="true"
                    onClick={this.handleToggle}>
                    { user.firstName ? user.firstName : 'Menu'}
                    <StyledAvatar 
                        src={user.profilePhoto ? user.profilePhoto : null} 
                        alt='user profile'/>
                </Button>
                <Popper
                    open={open}
                    anchorEl={this.anchorEl}
                    transition
                    disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList>
                                        <MenuItem onClick={this.handleClose} component={DashboardLink}>Dashboard</MenuItem>
                                        <MenuItem onClick={this.handleClose} component={AccountLink}>My account</MenuItem>
                                        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        accessToken: state.auth.session.AccessToken,
        user: state.account.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => { dispatch(actions.onLogout()) },
        onAccountFechtInfo: (accessToken) => { dispatch(actions.onAccountFetchInfo(accessToken)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEntry);