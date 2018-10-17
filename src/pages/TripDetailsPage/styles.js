import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { space } from '../../theme';
import Grid from '@material-ui/core/Grid';

export const StyledPaper = styled(Paper)`
    padding: 16px;
    text-align: center;
    color: #323232;
`

export const StyledGridContainerTwo = styled(Grid)`
    && {
        @media(max-width: 768px) {
           flex-direction: column; 
        }
    }
`

export const StyledGridContainer = styled.div`
    && {
        max-width: 960px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        box-sizing: border-box;
        padding-left: ${space[3]};
        padding-right: ${space[3]};
        margin-top: ${space[4]};
        margin-bottom: ${space[6]};
        margin-left: auto;
        margin-right: auto;

        @media (min-width: 768px) {
            padding-left: 0;
            padding-right: 0;
        }
    } 
`

export const StyledImg = styled.img`
    height: auto;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    @media(min-width: 768px) {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`

export const StyledImageContainer = styled.div`
    display: block;
    margin: 64px auto;
    max-width: 960px;

    @media(max-width: 600px) {
        margin: 56px auto;
    }
`

export const StyledTitleLayout = styled.div`
    padding-left: ${space[3]};
    padding-bottom: ${space[4]};
    margin-top: -${space[4]};

    @media(min-width: 768px) {
        padding-left: 0px;
    }
`

export const StyledRateLayout = styled.div`
    padding-top: ${space[2]};
`

export const StyledAvatar = styled.img`
    && {
        max-width: 64px;
        max-height: 64px;
        margin-top: -96px;
        margin-right: 16px;
        border-radius: 50%;
        border: 4px solid #fff;

        @media(min-width: 768px) {
            max-width: 120px;
            max-height: 120px;
            margin-top: -131px;
            margin-right: 32px;  
        }
    }
`

export const StyledMiddleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledExtContainer = styled.div`
    max-width: 960px;
    margin: 16px auto;
`