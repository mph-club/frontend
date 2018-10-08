import styled from 'styled-components';
import { space, palette } from '../../../theme';
import Card from '@material-ui/core/Card';
import MoreIcon from '@material-ui/icons/Add';

export const StyledExternalContainer = styled.div`
    max-width: 960px;
    display: block;
    margin: 84px auto ${space[4]};
`

export const StyledAddButton = styled(Card)`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${palette.grey04} !important;

    img{
        max-width: 100%;
    }
`

export const StyledIcon = styled(MoreIcon)`
    height: 40px;
    width: 40px;
`

export const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;

    img{
        max-width: 100%;
    }
`

export const StyledFooterContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
`