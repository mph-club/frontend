import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { space, palette } from '../../theme';
import { Typography } from '@material-ui/core';

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


export const StyledGridContainer = styled.div`
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    margin-top: ${space[4]};
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 959px) {
        padding-left: 16px;
        padding-right: 16px;
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

export const StyledDescriptionIconsLayout = styled.div`
    display: flex;
    padding-top: ${space[4]};
    padding-bottom: ${space[4]};
`

export const StyledDescriptionLayout = styled.div`
    margin-top: ${space[3]};
    padding-bottom: ${space[4]};
`

export const StyledIcons = styled.div`
    margin-right: ${space[3]};
`

export const StyledCarFeatureWrapper = styled.div`
    margin-top: ${space[3]};
`

export const StyledCarFeatureContainer = styled.div`
    padding-top: ${space[4]};
    padding-bottom: ${space[4]};
`

export const StyledRenterReviewsWrapper = styled.div`
    padding-top: ${space[4]};
    padding-bottom: ${space[4]};
`

export const StyledOwnedByWrapper = styled.div`
    padding-top: ${space[4]};
    padding-bottom: ${space[4]};
`

export const StyledGuideLinesWrapper = styled.div`
    padding-top: ${space[4]};
    padding-bottom: ${space[4]};
`