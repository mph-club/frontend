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

const longestValues = [
    {
        value: '1',
        label: '1 day'
    }, {
        value: '2',
        label: '2 days',
    }, {
        value: '3',
        label: '3 days',
    }, {
        value: '4',
        label: '4 days',
    }
];

const noticeTimes = [
    {
        value: '1',
        label: '1 hour'
    }, {
        value: '2',
        label: '2 hours',
    }, {
        value: '3',
        label: '3 hours',
    }, {
        value: '4',
        label: '4 hours',
    }
];



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
                            select
                            variant="outlined"
                            SelectProps={{
                                native: true
                            }}
                        >{noticeTimes.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}</TextField>
                    </div>
                    <div style={{ marginTop: space[4] }}>
                        <Typography variant="body2" color="primary" component="p">Shortest possible trip?</Typography>
                        <TextField
                            id="outlined-tripPreference-duration"
                            fullWidth
                            select
                            margin="normal"
                            variant="outlined"
                            SelectProps={{
                                native: true
                            }}
                        >{longestValues.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}</TextField>
                    </div>
                    <div style={{ marginTop: space[4] }}>
                        <Typography variant="body2" color="primary" component="p">Longest possible trip?</Typography>
                        <TextField
                            id="outlined-tripPreference-longest"
                            fullWidth
                            select
                            margin="normal"
                            variant="outlined"
                            SelectProps={{
                                native: true
                            }}
                        >{longestValues.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}</TextField>
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