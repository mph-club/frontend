import styled from 'styled-components';
import { space } from '../../../theme';
import Typography from '@material-ui/core/Typography';

export const StyledStepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${space[2]};
    margin-bottom: ${space[4]};
`

export const StyledEmailWrapper = styled(Typography)`
    && {
        font-weight: 400;
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (min-width: 768px) {
            max-width: 300px;
        } 
    }
`