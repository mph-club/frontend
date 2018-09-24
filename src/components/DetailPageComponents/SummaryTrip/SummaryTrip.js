import React from 'react';

import {
    StyledDateForm,
    StyledTextField,
    StyledContainer
} from './styles';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import Divider from '@material-ui/core/Divider';
import Aux from '../../../hoc/Aux/Aux';

const SummaryTrip = () => {

    return (
        <Aux>
            <StyledContainer>
                <h4>TRIP DATES</h4>
                <StyledDateForm noValidate fullWidth>
                    <StyledTextField
                        id="fromTextField"
                        label="Start Date"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </StyledDateForm>
                <Divider />
                <StyledDateForm noValidate fullWidth>
                    <StyledTextField
                        id="fromTextField"
                        label="Trip End"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </StyledDateForm>
                <Divider />
                <h4>PICKP UP AND RETURN</h4>
                <h5>Miami, FL</h5>
                <p>Exact address is provided after booking is confirmed</p>
                <h4>MILES INCLUDED</h4>
                <h5>200 mi</h5>
                <p>$0.45 fee for each additional mile</p>
                <div>
                    <PrimaryButton>Continue $382/per day</PrimaryButton>
                </div>
            </StyledContainer>
            <a href=''>Report this listing</a>
        </Aux>
    );
};

export default SummaryTrip