import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { space, palette } from '../../../theme';
import TextField from '@material-ui/core/TextField';

export const StyledContainer = styled.div`
    && {
        border: 1px solid;
        border-radius: 8px;
        border-color: ${palette.grey04};
        padding-top: ${space[3]};
        padding-bottom: ${space[4]};
        padding-right: ${space[3]};
        padding-left: ${space[3]};
        margin-right: ${space[0]};
        margin-left: ${space[0]};

        @media (min-width: 768px) {
            margin-right: ${space[4]};
            margin-left: ${space[4]};
        }
    }
`

export const StyledBurbble = styled.div`
    background-color: ${props => props.color};
    width: 12px;
    height: 12px;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 50%;
   
`

export const StyledSelectContainer = styled.div`
    display: 'flex';
    border-radius: 8px !important;
    border: 1px solid #e1e1e1;
    margin-top: 8px;
    border-color: ${props => props.error ? "red" : "#e1e1e1"};
    &:focus {
        border-color: ${props => props.error ? "red" : "black"};
        transition: all 0.2s ease-in 0s;
        outline: none !important;
        outline-style: none !important;
        outline-color: none !important;
    }
`

export const StyledSelect = styled(TextField)`

    && {
        fieldset {
            border: none;
            padding-left: 0;

            &:focus{
                background-color: #fff;
            }
        }

        select{
            padding: 16px 14px 16px 0;
        }
    }
`

export const StyledSpan = styled.span`
    background-color: ${props => props.color};
    width: 20px;
    height: 20px;
`

export const StyledButtonContainer = styled.div`
    text-align: center;
    margin: ${space[3]} auto;
`

export const StyledDivider = styled(Typography)`
    width: 100%;
    margin: .7em auto;
    overflow: hidden;
    text-align: center;
    font-weight:200;
    && {color: ${palette.grey02};}
    &:before, &:after {
        content: "";
        display: inline-block;
        width: 50%;
        margin: 0 .5em 0 -55%;
        vertical-align: middle;
        border-bottom: 1px solid;
    }

    &:after {
        margin: 0 -55% 0 .5em;
    }
`