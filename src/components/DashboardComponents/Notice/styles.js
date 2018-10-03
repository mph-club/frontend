import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const StyledNoticeContainer = styled.div`
    border: 2px solid ${props => props.color};
    display: inline-block;
    border-radius: 14px; 
`

export const StyleNotice = styled(Typography)`
    && {
        color: ${props => props.color};
    }
    padding: 0 16px;
`

