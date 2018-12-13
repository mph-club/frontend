import React from 'react';
import { StyledDiv } from './styles';
import logoPNG from '../../../assets/icons/logo.png';

const logo = (props) => (
    <StyledDiv style={{ height: props.height }} onClick={props.clicked}>
        <img src={logoPNG} alt='logo' />
    </StyledDiv>
);

export default logo;