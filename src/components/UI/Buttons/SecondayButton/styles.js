
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


export const StyledButton = styled(Button)`
    background-color: white !important;
    border-radius: 8px !important;
    border: 2px solid !important;
    height: 46px !important;
    width: 200px !important;
    padding: 0 16px !important;
    text-transform: none !important;
    font-size: 1rem !important;
    transition: all 0.2s ease-out 0s;
    &:hover {
        box-shadow: 0 3px 10px rgba(0,0,0,.4);
        transition: all 0.2s ease-in 0s;
    }
`