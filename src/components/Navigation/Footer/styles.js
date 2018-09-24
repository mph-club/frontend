import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const StyledHeadLine = styled(Typography)`
    && {
        color: #fff;
        margin-right: 2.5rem;
    }
`

export const StyledTitle = styled(Typography)`
    && {
        color: #fff;
    }
`

export const StyledPaper = styled(Paper)`
    background-color: #898989 !important;
`  

export const StyledFooter = styled.footer`
    background-color: #000000;
    width: 100%;
    height: auto;
    padding: 1.5rem;
` 

export const StyledDiv = styled.div`
    && {
        display: flex;
        justify-content: center;
        margin-left: -8px;

        @media (min-width: 768px) {
            margin-left: 0;
        }
    }
`

export const StyledDivTwo = styled.div`
    && {
        display: flex;
        flex-direction: column;
    }
`

export const StyledImg = styled.img`
    heigth: 100%;
`

export const StyledSocialUl = styled.ul`
    && {
        padding: 0;
        margin-top: 0;
        display: flex;

        li {
            margin-right: 1rem;
            list-style: none;
        }
    }
`

export const StyledFooterItemOne = styled.div`
    display: flex;
    justify-content: left;

    @media (min-width: 768px) {
        justify-content: center;
    }
`

export const StyledFooterItemTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4px;
`
export const StyleA = styled.a`
    img {
        &:hover {
            text-decoration: none;
            border: 0;
            color: #fff !important;
            -webkit-transition: color 0.2s;
            transition: color 0.2s;
        }
    }
`