import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { space, palette } from '../../../theme';

export const StyledCard = styled(Card)`
    && {
        width: 90%;
        margin: ${space[4]} auto;
       
        /* box-shadow: 0px 4px 12px 0px rgba(22, 23, 26, 0.15); */
        box-shadow: none;
        border: solid 1px ${palette.grey04}
        border-radius: 8px;

        @media (min-width: 768px) {
            width: 80%
        } 
    }
`

export const StyledImageDiv = styled.div`
    position: relative;
    width: 200px;
    height: 74px;
    overflow: hidden;
    border-radius: 8px;
    margin-top: ${space[3]}

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100%;
        width: auto;
        -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
    }

    @media (min-width: 768px) {
        height: 140px;
    }

`

export const StyledExtContainer = styled.div`
    
    && {
        display: flex;
        justify-content: space-between;
    }
`