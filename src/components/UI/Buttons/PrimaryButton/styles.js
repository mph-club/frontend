import styled from 'styled-components';
import Button from '@material-ui/core/Button';


export const StyledButton = styled(Button)`
    && {
        background-color: #000000;
        border-radius: 8px;
        border: 0;
        color: white;
        padding: ${props=> props.large ? '16px 24px' : '8px 24px' };
        min-width: 112px;
        min-height: 40px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
        transition: all 0.2s ease-out 0s
        &:hover {
            cursor: pointer;
            box-shadow: 0 3px 10px rgba(0,0,0,.4);
            background-color: black;
        }
        &:disabled{
            color: white;
            background-color: #cacaca;
        }
    }
`

