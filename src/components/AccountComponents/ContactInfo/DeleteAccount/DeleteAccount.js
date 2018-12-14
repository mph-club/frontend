import React, { Component } from 'react'
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { space } from '../../../../theme';
import {
    StyledIconButton,
    DeleteButton
} from './styles';
import ClearIcon from '@material-ui/icons/Clear';
import SecondaryButton from '../../../UI/Buttons/SecondayButton/SecondaryButton';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as actions from '../../../../store/actions/index';

class DeleteAccount extends Component {

    state = {
        deleteAccount: false
    }

    handleChange = () => event => {
        this.setState({ deleteAccount: event.target.checked });
    };

    handleCancel = () => {
        this.setState({ deleteAccount: false })
        this.props.handleClose();
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <StyledIconButton onClick={this.handleCancel}>
                        <ClearIcon />
                    </StyledIconButton>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginLeft: '32px',
                    marginRight: '32px',
                    marginBottom: '12px'
                }}>
                    <div>
                        <DialogTitle id="dialog-delete-account" style={{ marginTop: '-24px' }}>Are you sure you want to close your account?</DialogTitle>
                        <DialogContent>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.deleteAccount}
                                        onChange={this.handleChange()}
                                        value="deleteAccount"
                                    />
                                }
                                label="This action is irreversible. You will no longer be able to list or book a vehicle on mph club."
                            />
                        </DialogContent>
                        <DialogActions>
                            <SecondaryButton onClick={this.handleCancel} style={{ marginLeft: space[2] }}>Cancel</SecondaryButton>
                            <DeleteButton disabled={!this.state.deleteAccount} onClick={() => this.props.onDeleteAccount()}>Delete this account</DeleteButton>
                        </DialogActions>
                    </div>
                </div>
            </Dialog>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteAccount: () => { dispatch(actions.onDeleteAccount()) }
    }
}

export default connect(null, mapDispatchToProps)(DeleteAccount);