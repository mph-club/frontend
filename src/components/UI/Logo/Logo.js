import React from 'react';

import mainLogo from '../../../assets/images/mph-logo.svg';
import {StyledDiv, StyledImg} from './styles';

const logo = (props) => (
    <StyledDiv style={{height: props.height}}>
        <StyledImg src={mainLogo} alt="main-logo"/>
    </StyledDiv>
);

export default logo;