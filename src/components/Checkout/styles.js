import styled from 'styled-components';
import { space, palette } from '../../theme';

export const StyledGridContainer = styled.div`
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    margin-top: ${space[6]};
    margin-bottom: ${space[6]};
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 959px) {
        padding-left: 12px;
        padding-right: 12px;
    } 
`

export const StyledLeftFirstContainer = styled.div`
    width: 100%;
    height: auto;
    justify-content: space-between;
    margin-top: 16px;
    display: flex;
`

export const SyledImage = styled.img`
    float: rigth;
    width: 120px;
    height: 80px;
    border-radius: 8px;
`


export const StyledStepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${space[4]};
    margin-bottom: ${space[4]};
`

export const StyledRightContainer = styled.div`
    border: 1px solid ${palette.grey04};
    border-radius: 10px;
    background-color: #fafafa;
`

export const StyledRowContainer = styled.div`
    justify-content: space-between;
    margin: 16px 0;
    display: flex;
`
export const StyledWhiteContainer = styled.div`
    background-color: white;
    padding: ${space[3]};
    margin-bottom: ${space[4]};
`

export const StyledButtonWrapper = styled.div`
    && {
        max-width: 460px;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: ${space[3]};
        margin-bottom: ${space[4]};
    } 
`

export const StyledLink = styled.a`
  && {
    cursor: pointer;
    color: ${palette.blue};
    text-decoration: none;
  }
`