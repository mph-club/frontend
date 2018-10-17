import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';

export const StyledBadge = styled(Badge)`
    padding: 0 16px;
`

export const StyledAppBar = styled(AppBar)`
    && {
        background-color: #fff;
        padding-top: 96px;
        z-index: 1000;
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
    }
`

export const StyledListContainer = styled.div`
    margin-top: 192px;
`

export const StyledContainer = styled.div`
    min-height: 100%;
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
`