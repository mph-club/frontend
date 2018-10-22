import React from 'react';
import InputRange from 'react-input-range';

import { StyledRangeSlider } from './styles';

const RangeSlider = (props) => {
    return (
        <StyledRangeSlider color={props.color}>
            <InputRange {...props}/>
        </StyledRangeSlider>
    );
};

export default RangeSlider