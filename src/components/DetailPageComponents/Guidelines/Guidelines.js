import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Title from '../../UI/CustomTypography/Title/Title';

import { StyledUl, 
         StyledUlWrapper } from './styles';

const Guidelines = () => (

    <Aux>
        <Title variant="body2" component="h4">GUIDELINES</Title>
        <StyledUlWrapper>
            <StyledUl>
                <li><div>A deposit will be required</div></li>
                <li><div>A minimun of 1 day is required to rent this car</div></li>
                <li><div>No smoking</div></li>
            </StyledUl>
        </StyledUlWrapper>
    </Aux>

);

export default Guidelines