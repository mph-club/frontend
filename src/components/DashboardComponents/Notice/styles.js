import styled from 'styled-components';
import { space } from '../../../theme';

export const StyledNoticeContainer = styled.div`
    border: 2px solid ${props => props.color};
    display: inline-block;
    border-radius: 14px; 
    margin-bottom: ${space[3]};
`

export const StyleNotice = styled.p`
    && {
        color: ${props => props.color};
        padding: 0px 16px;
        font-weight: 480;
        margin: 4px 0;
    }
`

