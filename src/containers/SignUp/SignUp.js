import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ClearIcon from '@material-ui/icons/Clear';

import {
    StyledDiv,
    StyledIconButton
} from './styles';

class SignUp extends Component {
    state = {
        open: true,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.props.history.replace('/');
    };

    render() {

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    disableAutoFocus
                    disableBackdropClick
                >
                    <StyledDiv>
                        <StyledIconButton
                            color="inherit"
                            aria-label="Clear"
                            onClick={this.handleClose}
                        >
                            <ClearIcon />
                        </StyledIconButton>
                        <Typography style={{ marginLeft: '5%' }}
                            variant="title"
                            id="modal-title">Sign Up</Typography>
                        
                    </StyledDiv>
                </Modal>
            </div>
        );
    }
}

export default SignUp