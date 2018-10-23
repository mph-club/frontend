import styled from 'styled-components';
import Backdrop from '@material-ui/core/Backdrop'
import { space } from '../../theme';
import InputRange from 'react-input-range';

export const StyledBackdrop = styled(Backdrop)`
    && {
        z-index: ${ props => props.open ? 1000 : -1};
        top: 133px;
        overflow: hidden;
    }
`

export const StyledInputRange = styled(InputRange)`
    && {
        background-color: green;
    }
`

export const StyledHeaderContainer = styled.div`
    padding-top: 20px;
    background-color: white;
    position: fixed;
    z-index: 1100;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);

    @media (min-width: 900px) {
        top: 30px;
        height: 90px;
    }

    @media (min-width: 500px), (max-width: 900px){
        top: 56px;
        padding-top: ${space[3]};
        padding-bottom: ${space[3]};
    }
`

export const StyledSearchBarContainer = styled.div`
    width: 960px;
    height: 70px; 
    margin: 12px auto;

    @media (max-width: 900px) {
        display: none;
    }
`

export const StyledMidComponents = styled.div`

    margin: 0;

    @media (max-width: 499px), (min-width: 900px) {
        display: none;
    }
`

export const StyledReducedComponents = styled.div`

    @media (min-width: 500px) {
        display: none;
    }
`

export const StyledExternalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    margin: 0 32px;
    
    @media (min-width: 1301px) {
        margin-left: auto;
        margin-right: auto;
    }
`

export const StyledReducedSearchContainer = styled.div`
    background-color: white;
    position: relative;
    width: 100%;
    height: auto;
    z-index: 1100;
`

export const StyledFilterContainer = styled.div`
    position: fixed;
    top: 140px;
    left: auto;
    width: 300px;
    height: 700px;

    @media (min-width: 900px) {
        top: 248px;
    }

    @media (max-width: 500px) {
        display: none;
    }
`

export const StyledRightContainer = styled.div`
    margin-left: 332px;
    padding-top: 170px;


    @media (min-width: 900px) {
        margin-top: ${space[5]};
    }

    @media (max-width: 500px) {
        margin-left: 0;
    }
`

export const StyledSlantedDivider = styled.div`
    width: 2px;
    height: 50px;
   
    background-color: #ccd0d2;
    margin-right: 0;
    margin-left: 0;
`