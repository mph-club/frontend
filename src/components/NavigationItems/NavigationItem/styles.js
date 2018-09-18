import styled from 'styled-components';

export const StyledLi = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;

    @media only screen and (min-width: 500px){
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }
`

export const StyledA = styled.a`
    color: transparent;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    &:hover,
    &:active {
        color: white;
    }

    @media only screen and (min-width: 500px) {
        color: white;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 2px solid transparent;

        &:hover,
        &:active {
            background-color: transparent;
            border-bottom: 2px solid white;
            color: white;
        }
    }
`