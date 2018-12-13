import React, { Component } from 'react';
import {
    StyledExternalContainer,
    StyledContainer,
    StyledTextFieldContainer,
    StyledButtonsContainer
} from './styles';
import Typography from '@material-ui/core/Typography';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import StyledSecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';
import InputTextField from '../../UI/FormElements/InputTextField/InputTextField';
import FormControl from '@material-ui/core/FormControl';

class CarLocation extends Component {

    state = {
        checkbox: null,
        milesSelected: 10
    }

    handleChange = event => {
        let value = null

        if (event.target.checked) {
            value = event.target.value
        }

        this.setState({ checkbox: value });
    };

    handleCancelButton = () => {
        this.props.history.goBack();
    }

    handleMilesSelected = () => {

    }

    render() {
        return (
            <React.Fragment>
                <StyledExternalContainer>
                    <Typography variant="h4" color="primary" component="h2">Where is your car located?</Typography>
                    <div style={{
                        marginTop: '32px',
                        marginBottom: '32px'
                    }}>
                        <Typography variant="body2" color="primary" component="p">Only guests who have booked your car will see your exact location.</Typography>
                    </div>
                    <form>
                        <FormControl margin="normal" required fullWidth>
                            <InputTextField
                                label="Street*"
                                autoComplete="address-line1"
                                id="outlined-carLocation-street"
                                placeholder="e.g. 900 Southeast Biscayne Boulevard"
                                margin="normal"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                        <FormControl  margin="normal" fullWidth>
                            <InputTextField
                                label="Apt, suite, etc. (optional)"
                                id="outlined-carLocation-suite"
                                placeholder="e.g. Apt 200"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                        <StyledContainer>
                            <StyledTextFieldContainer>
                                <FormControl margin="normal" fullWidth>
                                    <InputTextField
                                        label="City*"
                                        id="outlined-carLocation-city"
                                        placeholder="e.g. Miami"
                                        margin="normal"
                                        autoComplete="address-level2"
                                        fullWidth
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputTextField
                                        label="Postal Code*"
                                        id="outlined-carLocation-zipcode"
                                        placeholder="e.g. 33130"
                                        margin="normal"
                                        fullWidth
                                        autoComplete="postal-code"
                                        style={{ marginTop: '32px' }}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </FormControl>
                            </StyledTextFieldContainer>
                            <StyledTextFieldContainer>
                                <FormControl  margin="normal" fullWidth>
                                    <InputTextField
                                        label="State*"
                                        id="outlined-carLocation-state"
                                        placeholder="e.g. FL"
                                        margin="normal"
                                        fullWidth
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </FormControl>
                            </StyledTextFieldContainer>
                        </StyledContainer>
                        <StyledButtonsContainer>
                            <StyledPrimaryButton type="submit">Save</StyledPrimaryButton>
                            <StyledSecondaryButton
                                style={{ marginLeft: '12px' }}
                                onClick={this.handleCancelButton}>Cancel</StyledSecondaryButton>
                        </StyledButtonsContainer>
                    </form>
                </StyledExternalContainer>
            </React.Fragment>
        );
    }
}

export default CarLocation