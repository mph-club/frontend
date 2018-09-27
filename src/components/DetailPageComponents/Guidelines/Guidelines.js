import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Title from '../../UI/CustomTypography/Title/Title';

import { StyledUl } from './styles';

const Guidelines = () => (

    <Aux>
        <Title variant="body2" component="h4">GUIDELINES</Title>
        <StyledUl>
            <li>A deposit will be required</li>
            <li>A minimun of 1 day is required to rent this car</li>
            <li>No smoking</li>
        </StyledUl>
    </Aux>

);

export default Guidelines