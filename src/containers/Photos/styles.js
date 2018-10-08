import styled from 'styled-components';
import { space, palette } from '../../theme';
import Card from '@material-ui/core/Card';
import MoreIcon from '@material-ui/icons/Add';
import CardActions from '@material-ui/core/CardActions';
import { CardContent } from '@material-ui/core';

// export const StyledAddButton = styled(Card)`
//     && {
//         display: flex;
//         flex-direction: column;
//         height: 100%;
//         background-color: ${palette.grey04};

//         img{
//             max-width: 100%;
//         }
//     }
// `

export const StyledAddButton = styled(Card)`
    && {
       box-shadow: none;
    }
`

// export const StyledIcon = styled(MoreIcon)`
//     height: 40px;
//     width: 40px;
// `

export const StyledCardContent = styled(CardContent)`
    background-color: ${palette.grey05};
    border: solid 0.5px ${palette.grey03};
    border-radius: 4px;
`

export const StyledIcon = styled(MoreIcon)`
    
`

export const StyledCard = styled(Card)`
    && {
        display: flex;
        flex-direction: column;
        box-shadow: none;

        img {
            max-width: 100%;
            height: auto;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
`

export const StyledCardAction = styled(CardActions)`
    && {
        padding: 0px;
        margin-top: 4px;

        button {
            margin: 0px;
            padding-top: 7px;
            padding-bottom: 7px;
            padding-right: 7px;
            padding-left: 0px;
        }
    }
`

export const StyledExternalContainer = styled.div`
    max-width: 960px;
    display: block;
    margin: 84px auto ${space[4]};
`

export const StyledFooterContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
`