import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { StyledIcon } from './styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {Link} from 'react-router-dom';

class UserEntry extends Component {

    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        const DashboardLink = props => <Link to="/dashboard" {...props} />
        const AccountLink = props => <Link to="/account" {...props}/>

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
                    {this.props.userName}
                    <StyledIcon />
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
                                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
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

export default UserEntry