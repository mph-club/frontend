import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

export const StyledAppBar = styled(AppBar)`
    box-shadow: none !important;
`
export const StyledToolBar = styled(Toolbar)`
    justify-content: space-between;
    background-color: black;

    @media only screen and (min-width: 499) {
        list-style: none;
    }
`
export const StyledIconButton = styled(IconButton)`
    margin-left: -12px;
    margin-right: 20px;

`

export const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
`