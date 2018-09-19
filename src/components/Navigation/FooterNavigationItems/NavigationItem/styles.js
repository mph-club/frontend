import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLi = styled.li`
    box-sizing: border-box;
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    box-sizing: border-box;
    display: block;
    color: white;
    height: 100%;
    padding: 4px 8px;
    border-bottom: 1px solid transparent;

    &:hover,
    &:active {
        background-color: transparent;
        border-bottom: 1px solid white;
    }
`