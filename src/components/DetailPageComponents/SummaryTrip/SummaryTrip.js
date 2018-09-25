import React from 'react';
import { Link } from 'react-router-dom';

import {
    StyledDateForm,
    StyledTextField,
    StyledContainer
} from './styles';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import Divider from '@material-ui/core/Divider';
import Aux from '../../../hoc/Aux/Aux';

const SummaryTrip = (props) => {

    const MyLink = props => <Link to="/checkout" {...props} />

    return (
        <Aux>
            <StyledContainer>
                <h4>TRIP DATES</h4>
                <StyledDateForm noValidate fullWidth>
                    <StyledTextField
                        id="startTextField"
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
                        id="endTextField"
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
                    <PrimaryButton component={MyLink}>Continue $382/per day</PrimaryButton>
                </div>
            </StyledContainer>
            <button onClick={props.reportListingClicked}>Report this listing</button>
        </Aux>
    );
};

export default SummaryTrip