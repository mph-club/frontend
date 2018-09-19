import styled from 'styled-components';
import { CustomTheme } from '../../../theme';
import Typography from '@material-ui/core/Typography';
import SecondaryButton from '../../../components/UI/Buttons/SecondayButton/SecondaryButton';

export const StyledDiv = styled.div`
    width: 500px;
    margin: 64px auto;
`

export const StyledTitle = styled(Typography)`
    text-align: center;
`

export const StyleSpan = styled.span`
    color: ${CustomTheme.palette.green}
`

export const StyledP = styled.p`
    text-align: center;
`

export const StyledButtonLayout = styled.div`
    width: 100%;
    margin-bottom: 2.5rem;
`

export const StyledSecondaryButton = styled(SecondaryButton)`
    margin-left: auto;
    margin-right: auto;
`