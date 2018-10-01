import React from 'react';
import { StyledDiv, StyledTitle } from './styles';

const logo = (props) => (
    <StyledDiv style={{ height: props.height }} onClick={props.clicked}>
        <StyledTitle variant="title">mph club</StyledTitle>
    </StyledDiv>
);

export default logo;