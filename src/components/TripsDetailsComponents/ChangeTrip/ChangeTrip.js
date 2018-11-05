import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../../theme';

import {
    StyledExternalContainer,
    StyledContainer,
    StyledWhiteContainer,
    StyledGrayContainer,
    StyledTextField
} from './styles';
import Alert from '../../UI/Alert/Alert';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';
import { hours } from '../../../tools/constants';

class ChangeTrip extends Component {

    state = {
        openAlert: false,
        totalPerDay: 481,
        cancellationFee: 50,
        tripFee: 36,
        tripDays: 4,
        totalRefund: 1838
    }

    handleContinue = () => {
        this.props.history.push('/request-change');
    }

    render() {

        return (
            <React.Fragment>
                <StyledExternalContainer>
                    <div
                        style={{
                            width: '300px',
                            paddingLeft: `${space[3]}`,
                            paddingRight: `${space[3]}`
                        }}>
                        <Typography variant="display1" color="primary" component="h2">You can request to change your dates or time</Typography>
                    </div>
                    <div
                        style={{
                            marginTop: '32px',
                            paddingLeft: `${space[3]}`,
                            paddingRight: `${space[3]}`
                        }}>
                        <StyledContainer>
                            <StyledGrayContainer>
                                <Typography variant="title" component="p" style={{ fontSize: 16, color: palette.grey02 }}>CURRENT TRIP DATES</Typography>
                                <div style={{ display: 'block', marginTop: space[3] }}>
                                    <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Start date</Typography>
                                    <div style={{ display: 'flex' }}>
                                        <StyledTextField
                                            id="changeTrip-fromTextField"
                                            type="date"
                                            fullWidth
                                            style={{ marginRight: '8px' }}
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        <StyledTextField
                                            id="changeTrip-returnTime"
                                            select
                                            fullWidth
                                            SelectProps={{
                                                native: true
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        >{hours.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}</StyledTextField>
                                    </div>
                                    <Typography variant="body1" component="p" style={{ fontWeight: 600, marginTop: '16px' }}>Trip end</Typography>
                                    <div style={{ display: 'flex' }}>
                                        <StyledTextField
                                            id="changeTrip-fromTextField"
                                            type="date"
                                            fullWidth
                                            style={{ marginRight: '8px' }}
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        <StyledTextField
                                            id="changeTrip-returnTime"
                                            select
                                            fullWidth
                                            SelectProps={{
                                                native: true
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        >{hours.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}</StyledTextField>
                                    </div>
                                </div>
                            </StyledGrayContainer>
                            <StyledWhiteContainer>
                                <Typography variant="title" component="p" style={{ fontSize: 16, color: palette.grey02 }}>NEW TRIP DATES</Typography>
                                <div style={{ display: 'block', marginTop: space[3] }}>
                                    <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Start date</Typography>
                                    <div style={{ display: 'flex' }}>
                                        <StyledTextField
                                            id="changeTrip-fromTextField"
                                            type="date"
                                            fullWidth
                                            style={{ marginRight: '8px' }}
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        <StyledTextField
                                            id="changeTrip-returnTime"
                                            select
                                            fullWidth
                                            SelectProps={{
                                                native: true
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        >{hours.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}</StyledTextField>
                                    </div>
                                    <Typography variant="body1" component="p" style={{ fontWeight: 600, marginTop: '16px' }}>Trip end</Typography>
                                    <div style={{ display: 'flex' }}>
                                        <StyledTextField
                                            id="changeTrip-fromTextField"
                                            type="date"
                                            fullWidth
                                            style={{ marginRight: '8px' }}
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        <StyledTextField
                                            id="changeTrip-returnTime"
                                            select
                                            fullWidth
                                            SelectProps={{
                                                native: true
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        >{hours.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}</StyledTextField>
                                    </div>
                                </div>
                                <div style={{ display: 'block', padding: space[3]}}>
                                    <PrimaryButton fullWidth style={{ marginBottom: '16px'}} onClick={this.handleContinue}>Continue</PrimaryButton>
                                    <SecondaryButton fullWidth>Cancel</SecondaryButton>
                                </div>

                            </StyledWhiteContainer>
                        </StyledContainer>
                    </div>
                </StyledExternalContainer>
                <Alert
                    id="delete-photo"
                    title="Delete photo"
                    text="Are you sure you want to delete this photo?"
                    okTitle="Delete"
                    handleOk={this.handleOk}
                    openAlert={this.state.openAlert}
                    handleClose={this.handleCloseAlert}
                />
            </React.Fragment>
        );
    }
}

export default ChangeTrip