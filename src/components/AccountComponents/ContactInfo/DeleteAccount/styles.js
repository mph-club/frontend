import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


export const StyledIconButton = styled(IconButton)`
    margin-left: -12px;
    margin-top: 12px;
`
export const ExternalContainer = styled.div`
    margin-left: 32px;
    margin-right: 32px;
    margin-bottom: 12px;
`

export const DeleteButton = styled(Button)`
    && {
        background-color: #ff4400;
        border-radius: 8px;
        border: 0;
        color: white;
        padding: '8px 24px';
        min-width: 112px;
        min-height: 40px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
        transition: all 0.2s ease-out 0s;
        &:hover {
            cursor: pointer;
            box-shadow: 0 3px 10px rgba(0,0,0,.4);
            background-color: #ff4400;
        }
        &:disabled{
            color: white;
            background-color: #cacaca;
        }
    }
`
