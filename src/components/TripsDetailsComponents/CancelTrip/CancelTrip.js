import React, { Component } from 'react';
import {
    StyledContainer,
    StyledRowContainer
} from './styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import LettersCounter from '../../UI/LettersCounter/LettersCounter';
import Title from '../../UI/CustomTypography/Title/Title';
import { StyledSecondaryButton } from '../../ListingDetailsPageComponents/ListVehicleBanner/styles';

class CancelTrip extends Component {

    state = {
        value: '0',
        length: 0
    }

    handleChange = event => {
        if (event.target.type === 'radio') {
            this.setState({ value: event.target.value });
        } else {
            //if someone else is added to this method we need a way to filter the target
            this.setState({ length: event.target.value.length });
        }

    };

    render() {
        const inputProps = {
            maxLength: '400'
        }

        return (
            <StyledContainer>
                <Title component="h1" variant="title" color="primary">Why are you canceling your trip request?</Title>
                <FormControl style={{ width: '100%' }}>
                    <RadioGroup
                        aria-label="Reasons"
                        name="reportListing-reasons"
                        value={this.state.value}
                    >
                        <StyledRowContainer>
                            <FormLabel style={{ alignSelf: 'center' }}>My plans have changed</FormLabel>
                            <FormControlLabel
                                value="plansChanged"
                                control={<Radio />}
                                onChange={this.handleChange}
                                checked={this.state.value === "plansChanged" ? true : false} />
                        </StyledRowContainer>
                        <Divider />
                        <StyledRowContainer>
                            <FormLabel style={{ alignSelf: 'center' }}>My dates have changed</FormLabel>
                            <FormControlLabel
                                value="datesChanged"
                                control={<Radio />}
                                onChange={this.handleChange}
                                checked={this.state.value === "datesChanged" ? true : false} />
                        </StyledRowContainer>
                        <Divider />
                        <StyledRowContainer>
                            <FormLabel style={{ alignSelf: 'center' }}>Other</FormLabel>
                            <FormControlLabel
                                value="other"
                                control={<Radio />}
                                onChange={this.handleChange}
                                checked={this.state.value === "other" ? true : false} />
                        </StyledRowContainer>
                    </RadioGroup>
                    <Typography>What's the reason</Typography>
                    <OutlinedInput
                        multiline={true}
                        rows="9"
                        labelWidth={10}
                        inputProps={inputProps}
                        onChange={this.handleChange}
                        style={{ height: '160px' }}>
                    </OutlinedInput>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        margin: '-24px 12px 32px'
                    }} >
                        <LettersCounter length={this.state.length} />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        margin: '12px'
                    }}>
                        <StyledSecondaryButton style={{marginRight: '12px'}}>Cancel this trip</StyledSecondaryButton>
                        <PrimaryButton>Keep this trip</PrimaryButton>
                    </div>
                </FormControl>
            </StyledContainer>
        );
    }
}

export default CancelTrip