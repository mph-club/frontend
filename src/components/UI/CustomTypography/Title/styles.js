import styled from 'styled-components';
import { palette } from '../../../../theme';
import { Typography } from '@material-ui/core';

export const StyledTitle = styled(Typography)`
    && {
        text-transform: uppercase;
        color: ${props => props.color ? props.color : palette.grey01};
        font-weight: 600;
    }
`

