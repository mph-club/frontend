import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import StylePrimaryButton from '../../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import { space } from '../../../theme';

export const StyledPaper = styled(Paper)`
    width: 100%;
`

export const StyleButton = styled(StylePrimaryButton)`
    margin-left: 16px !important;
    height: 50px;
`

export const StyledSlantedDivider = styled.div`
    width: 2px;
    height: 50px;
    background-color: #ccd0d2;
    margin-right: ${space[3]};
    margin-left: ${space[3]};
`