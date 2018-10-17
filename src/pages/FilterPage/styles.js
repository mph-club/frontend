import styled from 'styled-components';
import { space, palette } from '../../theme';

export const StyledExternalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    margin: 0 auto;
`

export const StyledFilterContainer = styled.div`
    position: fixed;
    top: 200px;
    left: auto;
    width: 300px;
    height: 700px;
`

export const StyledRightContainer = styled.div`
    margin-left: 332px;
    margin-top: 200px;
`
export const StyledSearchContainer = styled.div`
    margin: 50px 0;
    padding-top: 20px;
    background-color: white;
    position: fixed;
    z-index: 1100;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    border-bottom: 1px solid ${palette.grey04};
`

export const StyledSlantedDivider = styled.div`
    width: 2px;
    height: 50px;
   
    background-color: #ccd0d2;
    margin-right: ${space[3]};
    margin-left: ${space[3]};
`