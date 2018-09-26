import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';

export const StyledBadge = styled(Badge)`
    padding: 0 16px;
`

export const StyledAppBar = styled(AppBar)`
    && {
        background-color: #fff;
        top: 64px;
    }
`

export const StyledListContainer = styled.div`
    margin-top: 64px;
`