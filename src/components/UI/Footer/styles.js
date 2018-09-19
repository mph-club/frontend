import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const StyledFooter = styled.footer`
    background-color: #000000;
    width: 100%;
    height: 250px;
`

export const StyledPaper = styled(Paper)`
    background-color: #898989 !important;
`   

export const StyledDiv = styled.div`
    background-color: transparent; 
`

export const StyledImg = styled.img`
    heigth: 100%;
`

export const StyledTitle = styled(Typography)`
    && {
        color: #fff;
    }
`

export const StyledHeadLine = styled(Typography)`
    && {
        color: #fff;
    }
`

export const StyledUl = styled.ul`
    list-style: none;
    display: inline-flex;
    float: right;
`