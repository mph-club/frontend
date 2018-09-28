import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../../../theme';


export const StyledPrimayPriceButton = styled(Button)`
    && {
        background-color: #000000;
        border-radius: 8px;
        border: 0;
        color: white;
        padding: 8px 24px;
        min-width: 112px;
        min-height: 40px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
        transition: all 0.2s ease-out 0s
        &:hover {
            cursor: pointer;
            box-shadow: 0 3px 10px rgba(0,0,0,.4);
            background-color: black;
        }
    }
`

export const StyledText = styled(Typography)`
    && {
        color: ${palette.white};
        margin-right: ${space[3]};
    }
`

export const StyledPrice = styled(Typography)`
    && {
        color: ${palette.white};
    } 
`

export const StyledDollarSign = styled.div`
    && {
        color: ${palette.white};
        font-size: 1.25rem;
        align-self: flex-start;
    }
`

export const StyledWrapper = styled.div`
    && {
        display: flex;
        align-items: center;
    }
`

export const StyledPerDay = styled(Typography)`
    && {
        color: ${palette.white};
        align-self: flex-end;
    }
`

