import styled from 'styled-components';

export const StyledUl = styled.ul`
    && {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        display: flex;
        flex-flow: column;
        font-size: .875rem;

        a {
            padding-left: 0;
            color: #999999;
            border-bottom: none !important;
            
            &:hover {
                transition: .15s ease-in;
                color: white;
            }
        }
    }
`