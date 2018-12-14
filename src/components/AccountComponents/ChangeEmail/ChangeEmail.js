import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';

import { StyledIconButton } from './styles';

class ChangeEmail extends Component {

    render() {
        return (
            <Dialog
                open={this.props.open}
                aria-labelledby="responsive-dialog-title"
                onClose={this.props.closeUploadPhoto}
            >
                <Paper style={{ width: '460px', height: 'auto' }} elevation={1}>
                    <StyledIconButton
                        color="inherit"
                        aria-label="Clear"
                        onClick={this.props.closeUploadPhoto}
                    >
                        <ClearIcon />
                    </StyledIconButton>
                </Paper>
            </Dialog>
        );
    }
}

export default ChangeEmail