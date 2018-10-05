import styled from 'styled-components';
import { space } from '../../../theme';

export const StyledExtContainer = styled.div`
    && {
        display: flex;
        justify-content: space-between;
    }
`

export const StyledSlantedDivider = styled.div`
    width: 2px;
    height: 37px;
    background-color: #ccd0d2;
    transform: rotate(16deg);
    margin-right: ${space[3]};
    margin-left: ${space[3]};
`

export const StyledDateWrapper = styled.div`
    && {
        display: flex;
        align-items: center;
        align-self: flex-end;
    }
`
