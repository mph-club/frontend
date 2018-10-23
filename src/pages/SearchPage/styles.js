import styled from 'styled-components';
import bgImage from '../../assets/images/bg.jpg';
import Typography from '@material-ui/core/Typography';
import { space, palette } from '../../theme';

export const StyledTitle = styled(Typography)`
   && {
       color: ${palette.white};
       max-width: 544px;
       margin-bottom: ${space[4]};

       span {
           color: ${palette.green};
       }
   }
`

export const StyledContainer = styled.div`
    width: 900px;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(20vh);

    @media (max-width: 900px) {
        width: 400px;
    }
`

export const StyledSearchBarContainer = styled.div`
    width: 960px;
    margin-top: ${space[3]};
    height: 70px; 
    margin: 12px auto;
    text-align: left;

    @media (max-width: 900px) {
        display: none;
    }
`

export const StyledHeader = styled.header`
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), (${bgImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImage});
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