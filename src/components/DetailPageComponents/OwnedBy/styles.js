import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { space } from '../../../theme';

export const StyledAvatar = styled(Avatar)`
    && {
        width: 128px;
        height: 128px;
    } 
`

export const StyledUl = styled.ul`
    && {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
`

export const StyledNameWrapper = styled.div`
    && {
        margin-bottom: ${space[3]};
    }
`

export const StyledLIRresponseTimeWrapper = styled.li`
    && {
        align-self: flex-end;
        padding-bottom: 10px;
    }
`