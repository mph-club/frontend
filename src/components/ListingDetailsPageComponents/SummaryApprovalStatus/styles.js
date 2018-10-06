import styled from 'styled-components';
import { space, palette } from '../../../theme';

export const StyledContainer = styled.div`
    && {
        border: 1px solid;
        border-radius: 8px;
        border-color: ${palette.grey04};
        padding-top: ${space[3]};
        padding-bottom: ${space[4]};
        padding-right: ${space[3]};
        padding-left: ${space[3]};
        margin-right: ${space[0]};
        margin-left: ${space[0]};

        @media (min-width: 768px) {
            margin-right: ${space[4]};
            margin-left: ${space[4]};
        }
    }
`