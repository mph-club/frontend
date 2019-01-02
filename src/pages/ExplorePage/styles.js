import styled from 'styled-components';
import bgImage from '../../assets/images/bg.jpg';
import Typography from '@material-ui/core/Typography';
import { space, palette } from '../../theme';

export const StyledTitle = styled(Typography)`
   && {
       color: ${palette.white};
       margin-bottom: ${space[4]};

       span {
           color: ${palette.green};
       }
   }
`

export const ExternalContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    max-width: 900px;
    padding: 24vh 20px;
    margin: 0 auto;

    @media (max-width: 900px) {
        padding: 16vh 20px;
    }
`

export const SearchBarContainer = styled.div`
    width: 960px;
    height: 70px; 
    margin: ${space[3]} auto;
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

export const StyledHeader = styled.header`
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.41)), (${bgImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.41)), url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 64px;

    @media(max-width: 600px) {
        && {
            margin-top: 56px;
        }
    }
`