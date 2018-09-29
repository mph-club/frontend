import styled from 'styled-components';
import { space } from '../../theme';

export const StyledContainer = styled.div`

`
// export const StyledGridContainer = styled.div`
//     width: 100%;
//     display: flex;
//     flex-wrap: wrap;
//     box-sizing: border-box;
//     padding-left: 0;
//     padding-right: 0;
//     margin: 32px auto;

//     @media (min-width: 768px) {
//         width: 80%;
//     }
// `

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
`

export const StyledStepsContainer = styled.div`
    justify-content: space-between;
    margin: 32px 0;
    display: flex;
`

export const StyledRightContainer = styled.div`
    border: 1px solid;
    border-radius: 10px;
    background-color: #fafafa;
    padding: 4px 16px;
`

export const StyledRowContainer = styled.div`
    justify-content: space-between;
    margin: 16px 0;
    display: flex;
`
export const StyledWhiteContainer = styled.div`
    background-color: white;
`