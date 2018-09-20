import styled from 'styled-components';
import { CustomTheme } from '../../../theme';
import Typography from '@material-ui/core/Typography';
import SecondaryButton from '../../../components/UI/Buttons/SecondayButton/SecondaryButton';

export const StyledTitle = styled(Typography)`
    text-align: center;
`

export const StyledSecondaryButton = styled(SecondaryButton)`
    margin-left: auto;
    margin-right: auto;
`

export const StyledDiv = styled.div`
    width: 100%;
    margin: 64px auto;
    display: flex;
    flex-direction: column;
`

export const StyleSpan = styled.span`
    color: ${CustomTheme.palette.green}
`

export const StyledP = styled.p`
    text-align: center;
`

export const StyledButtonLayout = styled.div`
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    align-self: center;

`