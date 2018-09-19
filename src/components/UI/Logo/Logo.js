import React from 'react';
import { StyledDiv, StyledTitle } from './styles';

const logo = (props) => (
    <StyledDiv style={{ height: props.height }}>
        <StyledTitle variant="title">MPH Club</StyledTitle>
    </StyledDiv>
);

export default logo;