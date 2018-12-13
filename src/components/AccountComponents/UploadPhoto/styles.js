import styled from 'styled-components';
import { space } from '../../../theme';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

export const StyledAvatar = styled(Avatar)`
    && {
        width: 100px;
        height: 100px;
        margin: 32px auto;
    }
`

export const ExternalContainer = styled.div`
    margin: ${space[3]} ${space[4]} ${space[5]} ${space[4]};
`


export const StyledIconButton = styled(IconButton)`
    margin-left: -12px;
    margin-top: 12px;
`