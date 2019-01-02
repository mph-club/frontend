import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import { space, palette } from '../../../theme';

export const FooterContainer = styled.footer`
    background-color: #000;
    padding: 32px 64px;
`

export const FooterSidesContainer = styled.div`
    display: flex;

    @media (max-width: 600px) {
       flex-direction: column;
    }
`

export const FooterSide = styled.div`
    width: 50%;
    display: block;

    @media (max-width: 600px) {
       width: 100%;
    }
`

export const SecondarySentence = styled(Typography)`
   && {
       color: ${props => props.color ? props.color : palette.white};
       margin-bottom: ${space[4]};
       font-size: 16px;

       span {
           color: ${palette.green};
       }
   }
`

export const FooterSideTitle = styled(Typography)`
    && {
        color: ${palette.white};
        font-size: 17px;
    }
`

export const FooterCopyRight = styled(Typography)`
    && {
        color: ${palette.white};
        font-size: 12px;
    }
`

export const FooterList = styled.ul`
    && {
        padding-left: 0;
        width: 50%;
    }
`

export const FooterItem = styled.li`
    && {
        margin-bottom: 16px;
    }
`

export const FooterTwoColumnsContainer = styled.div`
    display: flex;
`

export const FooterAnchor = styled.a`
    color: #fff;
    font-size: 14px;
    :hover {
        cursor: pointer;
    }
`

export const FooterTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FooterLeftTopContainer = styled.div`
    display: flex;

    @media (max-width: 600px) {
       flex-direction: column;
    }
`

export const StyleA = styled.a`

    img {
        height: 20px;

        &:hover {
            text-decoration: none;
            border: 0;
            color: #fff !important;
            -webkit-transition: color 0.2s;
            transition: color 0.2s;
        }
    }
`


export const StyledSocialUl = styled.ul`
    && {
        display: flex;
        padding-left: 0;
        margin-left: 0;

        li {
            margin-right: 24px;
            list-style: none;
        }
    }
`

export const StyledDivTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`