import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { palette } from '../../../../theme';
import Typography  from '@material-ui/core/Typography';

export const StyledCard = styled(Card)`
    && {
        display: flex;
        flex-direction: column;
        box-shadow: none;

        img {
            max-width: 100%;
            height: auto;
            padding: 4px;
            border-radius: 4px;
            box-sizing: border-box;
        }
    }
`

export const StyledSpanContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 24px;
`

export const StyledTypography = styled(Typography)`
    border-radius: 20px;
    padding-right: 8px;
    padding-left: 8px;
    background-color: ${palette.green};
    color: #fff;
`

export const StyledCoverCard = styled(Card)`
    && {
        display: flex;
        flex-direction: column;
        box-shadow: none;

        img {
            max-width: 100%;
            height: auto;
            box-sizing: border-box;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            border: 4px solid ${palette.green};
        }
    }
`


export const StyledCardAction = styled(CardActions)`
    && {
        padding: 0px;
        margin-top: 4px;
        justify-content: space-between;

        button {
            margin: 0px;
            padding-top: 7px;
            padding-bottom: 7px;
            padding-right: 7px;
            padding-left: 0px;
        }
    }
`