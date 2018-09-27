import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import theme, { palette, space } from '../../../theme';

export const StyledAvatar = styled(Avatar)`
   && {
        width: 64px;
        height: 64px;
   } 
`

export const StyledAvatarWrapper = styled.div`
   margin-right: ${space[3]};
`

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StyledCaption = styled(Typography)`
    && {
        text-transform: uppercase;
        color: ${palette.grey01};
        font-weight: 600;
        margin-bottom: ${space[3]};
    }
`

export const StyledRentalReviewsReadMoreWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${space[3]};
`

export const StyledReadMoreWrapper = styled.div`
    margin-top: ${space[3]};
`

export const StyledTextButtonWrapper = styled.div`
    margin-right: ${space[3]};
`