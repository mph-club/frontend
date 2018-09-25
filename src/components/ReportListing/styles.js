import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const StyledIconButton = styled(IconButton)`
    margin-left: -12px;
    margin-top: 12px;
`

export const StyledDiv = styled.div`
    height: 574px;
    position: fixed;
    padding: 16px;
    width: 70%;
    border-radius: 8px;
    left: 15%;
    top: 10%;
    background-color: #ffffff;
    &:focus {
        outline: none;
    }

    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`