import styled from 'styled-components';
import { palette } from '../../../../theme';

export const StyledTextButton = styled.button`
    && {
        cursor: pointer;
        padding: 0;
        background-color: transparent;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.color ? props.color : palette.blue};
    }
`

