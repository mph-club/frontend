import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import StylePrimaryButton from '../../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import Grid from '@material-ui/core/Grid';

export const StyledPaper = styled(Paper)`
    width: 80%;
    margin-right: 16px;
`

export const StyledGrid = styled(Grid)`
    display: inline-flex;
    justify-content: center;
`

export const StyleButton = styled(StylePrimaryButton)`
    margin-left: 32px !important;
`

export const StyledContainer = styled.div`
    flex-grow: 1;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transform: translateY(24vh);

    @media (max-width: 500px) {
        display: none;
    }
`