import React from 'react';
import { Link } from 'react-router-dom';

import {
    StyledDateForm,
    StyledTextField,
    StyledContainer,
    StyledDivider,
    StyledDividerLayout,
    StyledPContainer
} from './styles';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/UI/Buttons/SecondayButton/SecondaryButton';
import Aux from '../../hoc/Aux/Aux';

const SummaryTripForHost = (props) => {

    const MyLink = props => <Link to="/get-help" {...props} />

    return (
        <Aux>
            <StyledContainer>
                <h4>TRIP DATES</h4>
                <div style={{display: 'flex'}}>
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
                </div>
                <h4>PICKP UP AND RETURN</h4>
                <h5>Miami, FL</h5>
                <p>Exact address is provided after booking is confirmed</p>
                <h4>MILES INCLUDED</h4>
                <h5>200 mi</h5>
                <p>$0.45 fee for each additional mile</p>
                <StyledPContainer>
                    <p>You have 8 hours to respond to Jim's trip request</p>
                </StyledPContainer>
                <div>
                    <PrimaryButton component={MyLink}>Continue $382/per day</PrimaryButton>
                </div>
                <StyledDividerLayout>
                    <StyledDivider
                        variant="body2">or
                    </StyledDivider>
                </StyledDividerLayout>
                <div>
                    <SecondaryButton component={MyLink}>Decline trip request</SecondaryButton>
                </div>
            </StyledContainer>
            <button onClick={props.reportListingClicked}>Get help</button>
        </Aux>
    );
};

export default SummaryTripForHost