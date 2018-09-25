import React, { Component } from 'react';

import {
    StyledDiv,
    StyledTitle,
    StyleSpan,
    StyledP,
    StyledButtonLayout,
    StyledSecondaryButton,
    StyledDivTwo
} from './styles';

class ListVehicleBanner extends Component {
    render() {
        return (
            <StyledDiv>
                <StyledDivTwo>
                    <StyledTitle variant="headline"><StyleSpan>Maximize</StyleSpan> the return on your vehicle investment</StyledTitle>
                    <StyledP variant="body2">Earn over $10,000 a year by renting out your vehicle to our select trusted clientele.</StyledP>
                    <StyledButtonLayout>
                        <StyledSecondaryButton>List your vehicle</StyledSecondaryButton>
                    </StyledButtonLayout>
                </StyledDivTwo>
            </StyledDiv>
        );
    }
}

export default ListVehicleBanner