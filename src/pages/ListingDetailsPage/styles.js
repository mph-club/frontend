import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { space, palette } from '../../theme';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export const StyledPaper = styled(Paper)`
    padding: 16px;
    text-align: center;
    color: #323232;
`

export const StyledCaption = styled(Typography)`
    && {
        text-transform: uppercase;
        color: ${palette.grey01};
        font-weight: 600;
        margin-bottom: ${space[3]};
    }
`

export const StyledGridContainerTwo = styled(Grid)`
    && {
        @media(max-width: 768px) {
           flex-direction: column-reverse; 
        }
    }
`

export const StyledGridContainer = styled.div`
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    margin: ${space[4]} auto;

    @media (max-width: 959px) {
        padding-left: 12px;
        padding-right: 12px;
    } 
`

export const StyledImg = styled.img`
    height: auto;
    width: 100%;
    justify-content: center;
    overflow: hidden;
`

export const StyledImageContainer = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
    margin-top: 56px;

    @media (min-width: 768px) {
        margin-top: 64px;
    }
`

export const StyledTitleLayout = styled.div`
    padding-bottom: ${space[4]};
`

export const StyledRateLayout = styled.div`
    padding-top: ${space[2]};
`



