import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export const StyledAppBar = styled(AppBar)`
    && {
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1200;
    } 
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

export const ListVehicleButton = styled(Button)`
   && {
    border: 2px solid white;
    margin-right: 32px;
   }
`