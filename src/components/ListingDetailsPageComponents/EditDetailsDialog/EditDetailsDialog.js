import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import ClearIcon from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import LettersCounter from '../../UI/LettersCounter/LettersCounter';
import SecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';

import {
    StyledIconButton,
    StyledOutlineInput
} from './styles';


class EditDetailsDialog extends Component {

    state = {
        length: 0
    }

    handleChange = (event) => {
        this.setState({
            length: event.target.value.length
        })
    }

    render() {

        const inputProps = {
            maxLength: '400'
        }

        return (
            <React.Fragment>
                <Dialog
                    open={this.props.openForm}
                    onClose={this.props.closeForm}
                    fullScreen={this.props.fullScreen}
                    scroll={'body'}
                    aria-labelledby="scroll-dialog-editDetails"
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <StyledIconButton onClick={this.props.closeForm}>
                            <ClearIcon />
                        </StyledIconButton>
                    </div>
                    <DialogTitle id="getHelpDialog">Details</DialogTitle>
                    <DialogContent>
                        <FormControl style={{ width: '100%' }}>
                            <FormLabel>This description will help guests make a decision on booking your car</FormLabel>
                            <StyledOutlineInput
                                multiline={true}
                                rows="14"
                                labelWidth={10}
                                onChange={this.handleChange}
                                inputProps={
                                    inputProps
                                }
                            ></StyledOutlineInput>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                margin: '-56px 12px 32px'
                            }} >
                                <LettersCounter length={this.state.length} />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                margin: '32px 12px 32px'
                            }}>
                                <PrimaryButton>Save</PrimaryButton>
                                <SecondaryButton
                                    style={{ marginLeft: '12px' }}
                                    onClick={this.props.closeForm}>Cancel</SecondaryButton>
                            </div>
                        </FormControl>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        );
    }
};

export default withMobileDialog()(EditDetailsDialog)