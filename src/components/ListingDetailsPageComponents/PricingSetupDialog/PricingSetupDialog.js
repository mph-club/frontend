import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ClearIcon from '@material-ui/icons/Clear';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import TextField from '@material-ui/core/TextField';

import { StyledSecondaryButton } from '../../../containers/SearchPage/ListVehicleBanner/styles';
import { Typography } from '@material-ui/core';

import {
    StyledIconButton,
    StyledRowContainer,
    StyledFormLabel,
    StyledDialogTitle
} from './styles';


class PricingSetupDialog extends Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
      }

    state = {
        value: 'recommended'
    };

    handleChange = event => {
        this.focusTextInput()
        this.setState({ value: event.target.value });
    };

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        console.log(this.textInput)
    }

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
                    <StyledDialogTitle disableTypography id="pricingSetupDialog">Choose your price setup</StyledDialogTitle>
                    <DialogContent>
                        <FormControl style={{ width: '100%' }}>
                            <RadioGroup
                                aria-label="Reasons"
                                name="pricesSetup"
                                value={this.state.value}
                            >
                                <StyledRowContainer>
                                    <StyledFormLabel style={{ alignSelf: 'center' }}>Recommended pricing</StyledFormLabel>
                                    <FormControlLabel
                                        value="recommended"
                                        control={<Radio color="primary" />}
                                        onChange={this.handleChange}
                                        checked={this.state.value === "recommended" ? true : false} />
                                </StyledRowContainer>
                                <div style={{ width: '60%' }}>
                                    <Typography variant="body2" component="p" >We adjust your listing's daily prices automatically to maximize your earnings</Typography>
                                </div>
                                <TextField
                                    id="outlined-read-only-input"
                                    defaultValue="$155"
                                    margin="normal"
                                    autoFocus
                                    disabled={this.state.value !== 'recommended'}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="outlined"
                                />
                                <Divider />
                                <StyledRowContainer>
                                    <StyledFormLabel style={{ alignSelf: 'center' }}>Fixed Pricing</StyledFormLabel>
                                    <FormControlLabel
                                        value="fixed"
                                        control={<Radio color="primary" />}
                                        onChange={this.handleChange}
                                        checked={this.state.value === "fixed" ? true : false} />
                                </StyledRowContainer>
                                <div style={{ width: '60%' }}>
                                    <Typography variant="body2" component="p">You can set a custom per day price.</Typography>
                                </div>
                                <TextField
                                    id="outlined-read-only-input"
                                    defaultValue="$155"
                                    disabled={this.state.value === 'recommended'}
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