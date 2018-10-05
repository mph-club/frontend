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

import {
    StyledIconButton,
    StyledDivider,
    StyledPhoneContainer,
    StyledOutlineInput
} from './styles';
import Typography from '@material-ui/core/Typography';


class GetHelpDialog extends Component {

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
                    aria-labelledby="scroll-dialog-getHelp"
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <StyledIconButton onClick={this.props.closeForm}>
                            <ClearIcon />
                        </StyledIconButton>
                    </div>
                    <DialogTitle id="getHelpDialog">How can we help?</DialogTitle>
                    <DialogContent>
                        <FormControl style={{ width: '100%' }}>
                            <FormLabel>We'll respond back within 24 hours.</FormLabel>
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
                            <StyledDivider
                                variant="body2">or
                            </StyledDivider>
                            <StyledPhoneContainer>
                                <Typography>If you need immidate assistance, give us a call</Typography>
                                <a href="tel:+1-800-454-4369">1-800-454-4369</a>
                            </StyledPhoneContainer>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                margin: '12px 12px 12px'
                            }}>
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </FormControl>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        );
    }
};

export default withMobileDialog()(GetHelpDialog)