import React, { Component } from 'react';
import {
    StyledExternalContainer,
    StyledContainer,
    StyledTextFieldContainer,
    StyledButtonsContainer
} from './styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import StyledSecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';
import { space } from '../../../theme';

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
                        margin: '16px 0'
                    }}>
                        <Typography variant="body1" color="primary" component="p">Only guests who have booked your car will see your exact location</Typography>
                    </div>
                    <div style={{ marginTop: space[4] }}>
                        <Typography variant="body2" color="primary" component="p">Street</Typography>
                        <TextField
                            id="outlined-carLocation-street"
                            placeholder="900 Southeast Biscayne Boulevard"
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                    <div style={{ marginTop: space[4] }}>
                        <Typography variant="body2" color="primary" component="p">Apt, suite, etc. (optional)</Typography>
                        <TextField
                            id="outlined-carLocation-suite"
                            placeholder="e.g. Apt 200"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <StyledContainer>
                        <StyledTextFieldContainer>
                            <Typography variant="body2" color="primary" component="p">City</Typography>
                            <TextField
                                id="outlined-carLocation-city"
                                placeholder="Miami"
                                margin="normal"
                                fullWidth
                                variant="outlined"
                            />
                        </StyledTextFieldContainer>
                        <StyledTextFieldContainer>
                            <Typography variant="body2" color="primary" component="p">State</Typography>
                            <TextField
                                id="outlined-carLocation-state"
                                placeholder="FL"
                                margin="normal"
                                fullWidth
                                variant="outlined"
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