import React, { Component } from 'react';
import {
    StyledExternalContainer,
    StyledButtonsContainer
} from './styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import StyledSecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';
import { space } from '../../../theme';

class TripPreference extends Component {

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
                    <Typography variant="display1" color="primary" component="h2">Trip Preference</Typography>
                    <div style={{
                        margin: '16px 0'
                    }}>
                        <Typography variant="body1" color="primary" component="p">Block trips that don't give you enough advance notice</Typography>
                    </div>
                    <div style={{ marginTop: space[4] }}>
                        <Typography variant="body2" color="primary" component="p">How much advance notice do you need to confirm this trip request?</Typography>
                        <TextField
                            id="outlined-tripPreference-advanceNotice"
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                    <div style={{ marginTop: space[4] }}>
                        <Typography variant="body2" color="primary" component="p">Shortest possible trip?</Typography>
                        <TextField
                            id="outlined-tripPreference-duration"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div style={{ marginTop: space[4] }}>
                        <Typography variant="body2" color="primary" component="p">Longest possible trip?</Typography>
                        <TextField
                            id="outlined-tripPreference-longest"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
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

export default TripPreference