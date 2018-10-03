import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { palette } from '../../../theme';

export const StyledCard = styled(Card)`
    width: 90%;
    margin: 16px auto;

    @media (min-width: 768px) {
        width: 80%
    } 
`
export const StyleNotice = styled(Typography)`
    && {
        color: ${palette.green};
    }
    padding: 0 16px;
`
// export const StyleImage = styled.img`
//     float: rigth;
//     height: 80px;
//     width: 120px;
// `

export const StyledImageDiv = styled.div`
    position: relative;
    width: 200px;
    height: 140px;
    overflow: hidden;
    border-radius: 8px;

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
`

export const StyledNoticeContainer = styled.div`
    border: 2px solid ${palette.green};
    display: inline-block;
    border-radius: 14px; 
`

export const StyledExtContainer = styled.div`
    display: flex;
    justify-content: space-between;
`