import styled from 'styled-components';
import bgImage from '../../assets/images/home-bg-reduced.png';
import centerImage from '../../assets/images/center-reduced.png';
import { space, palette } from '../../theme';
import Typography from '@material-ui/core/Typography';


export const Banner = styled.section`
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.41)), (${bgImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.41)), url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const BannerSectionContent = styled.div`
    display: block;
    width: 100%; 
    box-sizing: border-box;
    padding-top: 24vh;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 450px) {
        padding-top: 12vh;
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

export const SmallSearchBarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;

    @media (min-width: 981px) {
        display: none
    }
`

export const AppLinkContainer = styled.div`
    display: flex; 
    justify-content: space-around;
    margin: 64px auto;
    padding-bottom: 12vh;
`

//Second Section
export const FirstMovilSection = styled.section`
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

    img {
        padding-right: 64px;
    }

    @media (max-width: 600px) {
        width: 100%;
        padding: 64px 0 0;
        justify-content: space-around;
        margin: 0 auto;

        img {
        padding-right: 0;
    }
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
        padding-left: 16px;
        padding-right: 16px;
    }
`

export const CenterSection = styled.section`
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.41)), (${centerImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.41)), url(${centerImage});
    background-size: cover;

    background-position: center;
    background-repeat: no-repeat;
`

export const CenterSectionContainer = styled.div`
    justify-content: space-around;
    max-width: 400px;
    margin: 0 auto;
    padding-top: 48px;

    @media (max-width: 600px) { 
        padding-left: 16px;
        padding-right: 16px;
    }
`

export const SectionButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 32px;
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
    box-sizing: border-box;
    justify-content: flex-end;
    padding-top: 150px;

    @media (max-width: 600px) {
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
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

    img {
        padding-left: 64px;
    }

    @media (max-width: 600px) {
        width: 100%;
        padding: 64px 0 0;
        justify-content: space-around;
        margin: 0 auto;

        img {
            padding-left: 0;
            padding-bottom: 32px;
        }
    }
`