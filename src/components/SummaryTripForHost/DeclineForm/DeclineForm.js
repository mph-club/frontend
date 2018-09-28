import React from 'react';
import {
    StyledContainer
} from './styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const DeclineForm = () => {
    return (
        <StyledContainer>
            <FormControl>
                <FormLabel component="h1">Why are you declining Jim Jones' trip request?</FormLabel>
                <RadioGroup
                    aria-label="Reasons"
                    name="decline-reasons"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} />
                    <FormControlLabel value="male" control={<Radio />} />
                    <FormControlLabel value="other" control={<Radio />} />
                </RadioGroup>
            </FormControl>
        </StyledContainer>
    );
}

export default DeclineForm