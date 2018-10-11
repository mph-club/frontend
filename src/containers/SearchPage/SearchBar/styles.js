import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import StylePrimaryButton from '../../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import { space } from '../../../theme';

export const StyledPaper = styled(Paper)`
    width: 100%;
`

export const StyleButton = styled(StylePrimaryButton)`
    margin-left: 16px !important;
`


export const StyledContainer = styled.div`
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(24vh);

    @media (max-width: 500px) {
        display: none;
    }
`

export const StyledSlantedDivider = styled.div`
    width: 2px;
    height: 50px;
    background-color: #ccd0d2;
    margin-right: ${space[3]};
    margin-left: ${space[3]};
`