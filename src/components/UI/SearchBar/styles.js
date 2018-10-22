import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import StylePrimaryButton from '../../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import { space } from '../../../theme';

export const StyledPaper = styled(Paper)`
    && {
        width: 100%;
        display: flex;
        padding-top: ${space[2]};
        padding-bottom: ${space[2]};
        padding-right: ${space[3]};
        padding-left: ${space[3]};
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
    }
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