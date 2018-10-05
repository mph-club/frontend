import React from 'react';
import Title from '../../UI/CustomTypography/Title/Title';

import { StyledUl, 
         StyledUlWrapper } from './styles';

const UnorderedList = (props) => (

    <React.Fragment>
        <Title variant="body2" component="h4">{props.title}</Title>
        <StyledUlWrapper>
            <StyledUl>
                <li><div>{props.itemOne}</div></li>
                <li><div>{props.itemTwo}</div></li>
                <li><div>{props.itemThree}</div></li>
            </StyledUl>
        </StyledUlWrapper>
    </React.Fragment>

);

export default UnorderedList