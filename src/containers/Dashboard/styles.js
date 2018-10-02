import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';

export const StyledBadge = styled(Badge)`
    padding: 0 16px;
`

export const StyledAppBar = styled(AppBar)`
    && {
        background-color: #fff;
        margin-top: 64px;
        z-index: 1000;
    }

    @media(max-width: 600px) {
        && {
            margin-top: 56px;
        }
    }
`

export const StyledListContainer = styled.div`
    margin-top: 128px;
`

export const StyledContainer = styled.div`
    min-height: 100%;
`