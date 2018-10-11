import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { space, palette } from '../../../theme';

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

export const StyledSpan = styled.span`
    
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