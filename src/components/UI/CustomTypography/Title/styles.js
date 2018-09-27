import styled from 'styled-components';
import { palette, space } from '../../../../theme';
import { Typography } from '@material-ui/core';

export const StyledTitle = styled(Typography)`
    && {
        text-transform: uppercase;
        color: ${palette.grey01};
        font-weight: 600;
    }
`

