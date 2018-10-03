import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { space } from '../../../theme';

export const StyledNoticeContainer = styled.div`
    border: 2px solid ${props => props.color};
    display: inline-block;
    border-radius: 14px; 
    margin-bottom: ${space[3]}
`

export const StyleNotice = styled(Typography)`
    && {
        color: ${props => props.color};
        padding: 0 16px;
        font-weight: 600;
    }
`

