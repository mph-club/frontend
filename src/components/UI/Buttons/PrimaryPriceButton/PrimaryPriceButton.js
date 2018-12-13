import React from 'react';

import { StyledPrimayPriceButton, 
         StyledText,
         StyledPrice,
         StyledDollarSign,
         StyledWrapper,
         StyledPerDay } from './styles';

const PrimaryPriceButton = (props) => {
    return (
        <StyledPrimayPriceButton {...props}>
            <StyledWrapper>
                <StyledText variant="body2">{props.text}</StyledText>
                <StyledDollarSign>{props.dollar}</StyledDollarSign>
                <StyledPrice variant="h4">{props.price}</StyledPrice>
                <StyledPerDay variant="body1">{props.perday}</StyledPerDay>
            </StyledWrapper>
        </StyledPrimayPriceButton>
    );
};

export default PrimaryPriceButton