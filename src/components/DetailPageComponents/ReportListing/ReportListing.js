import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import ClearIcon from '@material-ui/icons/Clear';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';

import {
    StyledIconButton,
    StyledRowContainer
} from './styles';


class ReportListing extends Component {

    state = {
        value: null
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.openForm}
                    onClose={this.props.closeForm}
                    scroll={'body'}
                    aria-labelledby="scroll-dialog-reportListing"
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <StyledIconButton onClick={this.props.closeForm}>
                            <ClearIcon />
                        </StyledIconButton>
                    </div>
                    <DialogTitle id="reportListingDialog">Report this listing</DialogTitle>
                    <DialogContent>
                        <FormControl style={{ width: '100%' }}>
                            <RadioGroup
                                aria-label="Reasons"
                                name="reportListing-reasons"
                                value={this.state.value}
                            >
                                <StyledRowContainer>
                                    <FormLabel style={{ alignSelf: 'center' }}>Inappropriate or offensive content.</FormLabel>
                                    <FormControlLabel value="inappriate" control={<Radio />} onChange={this.handleChange} checked={this.state.value === "inappriate" ? true : false} />
                                </StyledRowContainer>
                                <Divider />
                                <StyledRowContainer>
                                    <FormLabel style={{ alignSelf: 'center' }}>Misleading/suspicious information.</FormLabel>
                                    <FormControlLabel value="suspicious" control={<Radio />} onChange={this.handleChange} checked={this.state.value === "suspicious" ? true : false} />
                                </StyledRowContainer>
                                <Divider />
                                <StyledRowContainer>
                                    <FormLabel style={{ alignSelf: 'center' }}>Spam</FormLabel>
                                    <FormControlLabel value="spam" control={<Radio />} onChange={this.handleChange} checked={this.state.value === "spam" ? true : false} />
                                </StyledRowContainer>
                                <Divider />
                                <StyledRowContainer>
                                    <FormLabel style={{ alignSelf: 'center' }}>Other</FormLabel>
                                    <FormControlLabel value="other" control={<Radio />} onChange={this.handleChange} checked={this.state.value === "other" ? true : false} />
                                </StyledRowContainer>
                            </RadioGroup>
                            <Typography>What's the reason</Typography>
                            <OutlinedInput multiline={true} rowsMax="12" labelWidth={10}></OutlinedInput>
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
            </div>
        );
    }
}

export default ReportListing