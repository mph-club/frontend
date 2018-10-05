import styled from 'styled-components';
import { space, palette } from '../../../theme';

export const StyledContainer = styled.div`
    && {
        border: 1px solid;
        border-radius: 8px;
        padding: 4px 8px;
        border-color: ${palette.grey04};
        margin-right: ${space[2]};
        margin-left: ${space[2]};

        @media (min-width: 768px) {
            padding: 4px 16px;
            margin-right: ${space[4]};
            margin-left: ${space[4]};
        }
    }
`

export const StyledInternalContainer = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    text-align: center;
    margin: ${space[2]};
    padding: ${space[3]};
`