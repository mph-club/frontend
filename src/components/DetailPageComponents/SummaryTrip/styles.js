import styled from 'styled-components';
import { space, palette } from '../../../theme';

export const StyledContainer = styled.div`
    && {
        border: 1px solid;
        border-radius: 8px;
        padding: 4px 16px;
        border-color: ${palette.grey01};
        margin-right: ${space[4]};
        margin-left: ${space[4]};
    }
`

export const StyledReportThisListingWrapper = styled.div`
    && {
        display: flex;
        justify-content: center;
        margin-top: ${space[4]};
    }
`