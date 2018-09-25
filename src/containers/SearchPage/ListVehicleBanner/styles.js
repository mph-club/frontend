import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import SecondaryButton from '../../../components/UI/Buttons/SecondayButton/SecondaryButton';

import { palette } from '../../../theme';

export const StyledTitle = styled(Typography)`
    text-align: center;
    max-width: 544px;
`

export const StyledSecondaryButton = styled(SecondaryButton)`
    margin-left: auto;
    margin-right: auto;
`

export const StyledP = styled(Typography)`
    text-align: center;
    max-width: 480px;
`

export const StyledDiv = styled.div`
    && {
        padding-top: 80px;
        padding-bottom: 80px;
        display: flex;
        justify-content: center;
    }
`

export const StyledDivTwo = styled.div`
    && {
        display: flex;
        flex-direction: column;
    }
`

export const StyleSpan = styled.span`
    color: ${palette.green}
`

export const StyledButtonLayout = styled.div`
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    align-self: center;

`