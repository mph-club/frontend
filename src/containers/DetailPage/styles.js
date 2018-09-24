import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const StyledPaper = styled(Paper)`
    padding: 16px;
    text-align: center;
    color: #323232;
`

export const StyledGridContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        width: 80%;
    }
`
export const StyledImg = styled.img`
    height: 60vh;
    width: 100%;
    justify-content: center;
    overflow: hidden;
`

export const StyledImageContainer = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
`