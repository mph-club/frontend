import styled from 'styled-components';
import welcomeBackground from '../../../assets/images/welcomeBackground.png';
import { space } from '../../../theme';

export const StyledBackground = styled.div`
    width: 550px;
    height: 550px;
    background-image: url(${welcomeBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const StyledExternalContainer = styled.div`
    padding: ${space[5]} ${space[5]}
`