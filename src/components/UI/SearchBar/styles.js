import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import StylePrimaryButton from '../../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import { space, palette } from '../../../theme';

export const StyledPaper = styled(Paper)`
    && {
        display: flex;
        flex-grow: 1;
        padding: ${space[2]} ${space[3]};
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
    }
`

export const ExternalContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SearchContainer = styled.div`
    flex-basis: 220px;
    flex-shrink: 2;
`

export const StyleButton = styled(StylePrimaryButton)`
    margin-left: 16px !important;
    height: 50px;
`


export const StyledSlantedDivider = styled.div`
    width: 1px;
    background-color: ${palette.grey03};
    margin: ${space[1]} ${space[3]}
`