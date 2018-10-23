import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import { CustomTheme } from '../../../theme';


export const StyledCard = styled(Card)`
  && {
    box-shadow: none;
    max-width: 429px;
    margin-right: ${CustomTheme.space[4]};
  }
`

export const StyledCardMedia = styled(CardMedia)`
  && {
    height: 266px;
    width: 429px;
    border-radius: 8px;
  }
`

export const StyledCardMediaSmall = styled(CardMedia)`
  && {
    height: 266px;
    width: 400px;
    border-radius: 8px;
  }
`

export const StyledCardActions = styled(CardActions)`
  && {
    padding: 0;
    justify-content: space-between;
    margin-top: ${CustomTheme.space[3]};
  }
`

export const StyledTitle = styled.h1`
  && {
    font-size: 1.2rem;
  }
`

export const StyledPrice = styled.div`
  && {
    font-size: 2.25rem;
    font-weight: 600;
  }
`

export const StyledPriceLayout = styled.div`
  && {
    display: flex;
  }
`

export const StyledDollarSign = styled.div`
  && {
    font-size: 1.5rem;
    font-weight: 600;
  }
`

export const StyledPerDay = styled.div`
  && {
    align-self: flex-end;
    margin-bottom: 4px;
  }
`



       

