import React from 'react';

import {
    StyledDiv,
    StyledTitle,
    StyleSpan,
    StyledP,
    StyledButtonLayout,
    StyledSecondaryButton,
    StyledDivTwo
} from './styles';

const ListVehicleBanner = () => {
    return (
        <StyledDiv>
            <StyledDivTwo>
                <StyledTitle variant="headline"><StyleSpan>Maximize</StyleSpan> the return on your car investment</StyledTitle>
                <StyledP variant="body2">Earn over $10,000 a year by renting out your car to our select trusted clientele.</StyledP>
                <StyledButtonLayout>
                    <StyledSecondaryButton>List your car</StyledSecondaryButton>
                </StyledButtonLayout>
            </StyledDivTwo>
        </StyledDiv>
    );
}

export default ListVehicleBanner