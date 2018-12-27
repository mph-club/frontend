import React from 'react';
import { StyledDiv } from './styles';
import logoPNG from '../../../assets/icons/logo.png';

const logo = (props) => (
    <StyledDiv onClick={props.clicked}>
        <img src={logoPNG} alt='logo' style={{ heigth: '40px', width: '80px'}} />
    </StyledDiv>
);

export default logo;