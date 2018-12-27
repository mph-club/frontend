import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../theme';

export const StyledIconButton = styled(IconButton)`
    margin-left: -12px;
    margin-top: 12px;
`

export const StyledDivider = styled(Typography)`
    width: 100%;
    margin: .7em auto;
    overflow: hidden;
    text-align: center;
    font-weight:200;
    color: #fff;
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

export const ExternalContainer = styled.div`
    height: auto;
    position: fixed;
    padding: 32px;
    width: 70%;
    border-radius: 8px;
    left: 15%;
    top: 10%;
    background-color: #ffffff;
    &:focus {
        outline: none;
    }

    @media (min-width: 600px) {
        width: 460px;
        left: calc(50% - 230px);
    }
`

export const StyledFooter = styled.div`
    margin-top: ${space[3]};
    display: flex;
    flex-direction: column;
`
export const StyledFooterButtonLayout = styled.div`
    margin-top: ${space[3]};
    display: flex;
    justify-content: flex-end;
    margin-bottom: ${space[3]};
`

export const StyledDividerLayout = styled.div`
    margin: 0 10% ${space[3]} 10%;
`
export const StyledSpan = styled.span`
    color: ${palette.blue};
    cursor: pointer;
`