import styled from 'styled-components';
import bgImage from '../../assets/images/bg.jpg';
import Typography from '@material-ui/core/Typography';
import { space } from '../../theme';

export const StyledTitle = styled(Typography)`
    color: #fff !important;
    letter-spacing: 2px;
`
export const StyledContainer = styled.div`
    width: 900px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transform: translateY(20vh);

    @media (max-width: 900px) {
        width: 400px;
    }
`

export const StyledSearchBarContainer = styled.div`
    margin-top: ${space[4]};
`

export const StyledHeader = styled.header`
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), (${bgImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImage});
    background-size: cover;
    height: 64vh;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 64px;

    @media(max-width: 600px) {
        && {
            margin-top: 56px;
        }
    }
`