import styled from 'styled-components';

export const StyledRangeSlider = styled.div`
    .input-range__track--active,
    .input-range__slider {
        background: ${props => props.color}; 
        border-color: ${props => props.color};
    }
`

