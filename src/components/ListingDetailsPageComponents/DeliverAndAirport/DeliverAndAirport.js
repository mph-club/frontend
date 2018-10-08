import React, { Component } from 'react';
import { StyledExternalContainer } from './styles';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import StyledSecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';
import { space } from '../../../theme';

const miles = [
    {
        value: '10',
        label: '10 miles'
    }, {
        value: '20',
        label: '20 miles',
    }, {
        value: '30',
        label: '30 miles',
    }, {
        value: '40',
        label: '40 miles',
    }
];

class DeliverAndAirport extends Component {

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
                    <Typography variant="display1" color="primary" component="h2">Deliver & Airport</Typography>
                    <div style={{
                        margin: '16px 0'
                    }}>
                        <Typography variant="body1" color="primary" component="p">Offer pickup from the airport or deliver the car for extra earnings</Typography>
                    </div>
                    <div style={{ margin: '16px 0' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Typography variant="headline" component="h5">MIA - Miami, FL</Typography>
                            <Checkbox
                                checked={this.state.checkbox === "checkedMiami" ? true : false}
                                onChange={this.handleChange}
                                value="checkedMiami" />
                        </div>
                        <Typography variant="body1" color="primary" component="p">Miami International Airport.</Typography>
                        <TextField
                            id="outlined-miami-delivery-fee"
                            label="Delivery Fee $"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <Divider />
                    <div style={{ margin: '16px 0' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Typography variant="headline" component="h5">FLL - Fort Lauderdale, FL</Typography>
                            <Checkbox
                                checked={this.state.checkbox === "checkedFLL" ? true : false}
                                onChange={this.handleChange}
                                value="checkedFLL" />
                        </div>
                        <Typography variant="body1" color="primary" component="p">Fort Lauderdale-Hollywood International Airport</Typography>
                        <TextField
                            id="outlined-FLL-delivery-fee"
                            label="Delivery Fee $"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <Divider />
                    <div style={{ margin: '16px 0' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Typography variant="headline" component="h5">Guest's chosen location</Typography>
                            <Checkbox
                                checked={this.state.checkbox === "chosenLocation" ? true : false}
                                onChange={this.handleChange}
                                value="chosenLocation" />
                        </div>
                        <div style={{ display: 'block' }}>
                            <TextField
                                id="outlined-chosenLocation-miles"
                                select
                                placeholder="select one"
                                label="Distance your willing to deliver"
                                value={this.state.milesSelected}
                                onChange={this.handleMilesSelected}
                                SelectProps={{
                                    native: true
                                }}
                                margin="normal"
                                variant="outlined"
                                style={{ width: '240px' }}
                            >
                                {miles.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                id="outlined-chosenLocation-delivery-fee"
                                label="Delivery Fee $"
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        margin: space[4]
                    }}>
                        <StyledPrimaryButton
                            disabled={this.state.checkbox ? false : true}>Save</StyledPrimaryButton>
                        <StyledSecondaryButton 
                            style={{ marginLeft: '12px' }}
                            onClick={this.handleCancelButton}>Cancel</StyledSecondaryButton>
                    </div>
                </StyledExternalContainer>

            </React.Fragment>
        );
    }
}

export default DeliverAndAirport