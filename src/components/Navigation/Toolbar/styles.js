import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const StyledAppBar = styled(AppBar)`
    box-shadow: none !important;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1200;
`
export const StyledToolBar = styled(Toolbar)`
    justify-content: space-between;
    background-color: black;

    @media only screen and (min-width: 499) {
        list-style: none;
    }
`

export const StyledNav = styled.nav`
    display: flex;
`