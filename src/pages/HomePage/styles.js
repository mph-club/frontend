import styled from 'styled-components';
import bgImage from '../../assets/images/home-bg-reduced.png';
import centerImage from '../../assets/images/center-reduced.png';
import { space, palette } from '../../theme';
import Typography from '@material-ui/core/Typography';


export const Banner = styled.section`
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.41)), (${bgImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.41)), url(${bgImage});
    background-size: cover;
    height: 64vh;
    background-position: center;
    background-repeat: no-repeat;

    @media(max-width: 600px) {
        && {
            margin-top: 56px;
        }
    }
`

export const BannerSectionContent = styled.div`
    position: absolute;
    display: block;
    top: 16vh;
    width: 100%; 

    @media (max-width: 1150px) {
        top: 120px;
    }
`

export const PrimarySentence = styled(Typography)`
   && {
       max-width: 460px;
       margin: 0 auto;
       font-size: 40px;
       color: ${props => props.color ? props.color : palette.white};
       margin-bottom: ${space[3]};

       span {
           color: ${palette.green};
       }
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

export const SearchBarContainer = styled.div`
    width: 960px;
    height: 70px; 
    margin: 12px auto;
    text-align: left;

    @media (max-width: 980px) {
        display: none;
    }
`

export const AppLinkContainer = styled.div`
    display: flex; 
    justify-content: space-around;
    margin: 64px auto;
`

//Second Section
export const FirstMovilSection = styled.div`
    background-color: #FEFFFE;
    display: flex;

    @media (max-width: 600px) {
        display: block;
    }
`

export const FirstLeftContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 64px 64px 64px;
    width: 50%;

    @media (max-width: 600px) {
        width: 100%;
        padding: 64px 0 0;
        justify-content: space-around;
        margin: 0 auto;
    }
`

export const FirstRightContainer = styled.div`
    width: 50%;
    padding-top: 150px;

    @media (max-width: 600px) {
        width: 100%;
    }
`

export const FirstContent = styled.div`
    display: block;
    max-width: 440px;
    justify-content: space-around;
    margin-top: 0;

    @media (max-width: 600px) {
        margin: 0 auto;
        margin-bottom: 64px;
    }
`

export const CenterSection = styled.section`
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.41)), (${centerImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.41)), url(${centerImage});
    background-size: cover;
    height: 34vh;
    background-position: center;
    background-repeat: no-repeat;
`

export const CenterSectionContainer = styled.div`
    justify-content: space-around;
    width: 400px;
    margin: 0 auto;
    padding-top: 48px;
`

export const SectionButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const SecondMovilSection = styled.section`
    background-color: #FEFFFE;
    display: flex;

    @media (max-width: 600px) {
        display: block;
    }
`

export const SecondLeftContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-top: 150px;

    @media (max-width: 600px) {
        width: 100%;
        justify-content: space-around;
    }
`

export const SecondContent = styled.div`
    display: block;
    max-width: 440px;
    margin-top: 0;

    @media (max-width: 600px) {
        margin: 0 auto;
        margin-bottom: 64px;
    }
`

export const SecondRightContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 64px 0 64px 64px;
    width: 50%;

    @media (max-width: 600px) {
        width: 100%;
        padding: 64px 0 0;
        justify-content: space-around;
        margin: 0 auto;
    }
`

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