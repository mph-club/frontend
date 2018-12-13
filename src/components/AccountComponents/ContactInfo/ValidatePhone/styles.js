import styled from 'styled-components';
import { palette, space } from '../../../../theme';
import Typography from '@material-ui/core/Typography';

export const StyledSpan = styled.span`
    color: ${palette.blue};
    cursor: pointer;
`

export const ExternalContainer = styled.div`
    margin: ${space[5]} ${space[4]};
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