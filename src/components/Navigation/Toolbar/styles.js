import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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

export const MenuButtonContainer = styled.div`
    display: none;

    @media (max-width: 600px) {
        display: flex;
    }
`
export const MenuButton = styled(IconButton)`
    margin-left: -12px;
    margin-top: 12px;
`

export const StyledToolBar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    background-color: black;

    @media only screen and (min-width: 499) {
        list-style: none;
    }
`

export const UnAuthNav = styled.nav`
    display: flex;

    @media all and (max-width: 601px) {
        display: none;
    }
`

export const AuthNav = styled.nav`
    display: flex;
`

export const ListVehicleButton = styled(Button)`
   && {
    border: 2px solid white;
    margin-right: 32px;
   }
`