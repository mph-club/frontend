import styled from 'styled-components';
import { palette, space } from '../../../theme';
import TextField from '@material-ui/core/TextField';

export const StyledExternalContainer = styled.div`
    max-width: 960px;
    display: block;
    margin: 84px auto 250px;
`
export const StyledGrayContainer = styled.div`
    margin: ${space[2]} ${space[3]};
`

export const StyledContainer = styled.div`
    border: 1px solid ${palette.grey04};
    border-radius: 10px;
    max-width: 340px;
    background-color: #fafafa;
`

export const StyledRowContainer = styled.div`
    justify-content: space-between;
    margin: 16px 0;
    display: flex;
    max-width: ${ props => props.maxWidth ? props.maxWidth : 'inherit'};
`
export const StyledWhiteContainer = styled.div`
    background-color: white;
    padding: ${space[3]};
    margin: ${space[4]} 0;
`

export const StyledTextField = styled(TextField)`
    && {
        padding-left: ${space[2]}
        border: 1px solid ${palette.grey01};
        border-radius: 4px;
    }
`

export const StyledSlantedDivider = styled.div`
    width: 2px;
    height: 37px;
    background-color: #ccd0d2;
    transform: rotate(16deg);
    margin-right: ${space[3]};
    margin-left: ${space[3]};
`

export const StyledDateWrapper = styled.div`
    && {
        display: flex;
        align-items: center;
        margin-top: ${space[3]};
        margin-bottom: ${space[3]};
        align-self: flex-end;
    }
`