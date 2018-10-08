import styled from 'styled-components';
import { space } from '../../../theme';

export const StyledExternalContainer = styled.div`
    max-width: 500px;
    display: block;
    margin: 84px auto ${space[4]};
`

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: ${space[4]} 0;
`

export const StyledTextFieldContainer = styled.div`
    width: 45%;
`

export const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: ${space[4]} 0
`