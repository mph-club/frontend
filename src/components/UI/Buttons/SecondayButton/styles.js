
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const StyledButton = styled(Button)`
    && {
        padding: ${props=> props.large ? '16px 24px' : '8px 24px' };
        min-width: 112px;
        min-height: 40px;
        cursor: pointer;
        border-radius: 8px;
        color: black;
        background-color: white;
        text-align: center;
        border: 1px solid rgba(0,0,0,.05);
        box-shadow: 0 1px 4px rgba(0,0,0,.1);
        outline: 0;
        transition: .2s ease-out all;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px;
            background-color: transparent;
        }
    }
`

