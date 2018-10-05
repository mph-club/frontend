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
import FormLabel from '@material-ui/core/FormLabel';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import TextField from '@material-ui/core/TextField';

import {
    StyledIconButton,
    StyledRowContainer
} from './styles';
import { StyledSecondaryButton } from '../../../containers/SearchPage/ListVehicleBanner/styles';
import { Typography } from '@material-ui/core';


class PricingSetupDialog extends Component {

    state = {
        value: 'recommended'
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
                    <DialogTitle id="pricingSetupDialog">Choose your price setup</DialogTitle>
                    <DialogContent>
                        <FormControl style={{ width: '100%' }}>
                            <RadioGroup
                                aria-label="Reasons"
                                name="pricesSetup"
                                value={this.state.value}
                            >
                                <StyledRowContainer>
                                    <FormLabel style={{ alignSelf: 'center' }}>Recommended pricing.</FormLabel>
                                    <FormControlLabel
                                        value="recommended"
                                        control={<Radio color="primary" />}
                                        onChange={this.handleChange}
                                        checked={this.state.value === "recommended" ? true : false} />
                                </StyledRowContainer>
                                <div style={{ width: '60%' }}>
                                    <Typography>We adjust your listing's daily prices automatically to maximize your earnings</Typography>
                                </div>
                                <TextField
                                    id="outlined-read-only-input"
                                    defaultValue="$155"
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="outlined"
                                />
                                <Divider />
                                <StyledRowContainer>
                                    <FormLabel style={{ alignSelf: 'center' }}>Fixed Pricing</FormLabel>
                                    <FormControlLabel
                                        value="fixed"
                                        control={<Radio color="primary" />}
                                        onChange={this.handleChange}
                                        checked={this.state.value === "fixed" ? true : false} />
                                </StyledRowContainer>
                                <div style={{ width: '60%' }}>
                                    <Typography>We adjust your listing's daily prices automatically to maximize your earnings</Typography>
                                </div>
                                <TextField
                                    id="outlined-read-only-input"
                                    defaultValue="$155"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </RadioGroup>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                margin: '12px 12px 12px'
                            }}>
                                <PrimaryButton>Save</PrimaryButton>
                                <StyledSecondaryButton style={{ marginLeft: '12px' }}>Cancel</StyledSecondaryButton>
                            </div>
                        </FormControl>
                    </DialogContent>
                </Dialog>
            </div >
        );
    }
}

export default PricingSetupDialog