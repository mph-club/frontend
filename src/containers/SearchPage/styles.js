import styled from 'styled-components';
import bgImage from '../../assets/images/bg.jpg';

export const StyledHeader = styled.header`
    background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), (${bgImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImage});
    background-size: cover;
    background-position: bottom;
    height: 80vh;
    background-attachment: fixed;
`