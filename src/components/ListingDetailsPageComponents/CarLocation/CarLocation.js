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
import { space } from '../../../theme';
import InputTextField from '../../UI/FormElements/InputTextField/InputTextField';

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
                    <Typography variant="display1" color="primary" component="h2">Where is your car located?</Typography>
                    <div style={{
                        marginTop: '32px',
                        marginBottom: '32px'
                    }}>
                        <Typography variant="body2" color="primary" component="p">Only guests who have booked your car will see your exact location.</Typography>
                    </div>
                    <div>
                        <InputTextField
                            label="Street"
                            id="outlined-carLocation-street"
                            placeholder="e.g. 900 Southeast Biscayne Boulevard"
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div style={{ marginTop: space[4] }}>
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
                    </div>
                    <StyledContainer>
                        <StyledTextFieldContainer>
                            <InputTextField
                                label="City"
                                id="outlined-carLocation-city"
                                placeholder="e.g. Miami"
                                margin="normal"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </StyledTextFieldContainer>
                        <StyledTextFieldContainer>
                            <InputTextField
                                label="State"
                                id="outlined-carLocation-state"
                                placeholder="e.g. FL"
                                margin="normal"
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </StyledTextFieldContainer>
                    </StyledContainer>
                    <StyledButtonsContainer>
                        <StyledPrimaryButton>Save</StyledPrimaryButton>
                        <StyledSecondaryButton
                            style={{ marginLeft: '12px' }}
                            onClick={this.handleCancelButton}>Cancel</StyledSecondaryButton>
                    </StyledButtonsContainer>
                </StyledExternalContainer>
            </React.Fragment>
        );
    }
}

export default CarLocation