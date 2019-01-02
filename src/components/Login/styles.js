import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import { palette, space } from '../../theme';

export const StyledIconButton = styled(IconButton)`
    margin-left: -20px;
    margin-top: 20px;
    width: 48px;
    height: 48px;
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

export const StyledDialogContent = styled(DialogContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    width: 450px; 

    @media (max-width: 600px) {
        width: auto;
    }
`

export const StyledFooter = styled.div`
    margin-top: ${space[3]};;
    display: flex;
    flex-direction: column;
`
export const StyledFooterButtonLayout = styled.div`
    display: flex;
    margin-top: ${space[3]};
    justify-content: flex-end;
    margin-bottom: ${space[3]};
`

export const StyledDividerLayout = styled.div`
    margin: 8px 10% 16px 10%;
`

export const StyledSpan = styled.span`
    color: ${palette.blue};
    cursor: pointer;
`
