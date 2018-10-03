import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const StyledCard = styled(Card)`
    width: 90%;
    margin: 16px auto;

    @media (min-width: 768px) {
        width: 60%
    } 
`

export const StyleImage = styled.img`
    float: rigth;
    height: 80px;
    width: 120px;
`



export const StyledExtContainer = styled.div`
    display: flex;
    justify-content: space-between;
`