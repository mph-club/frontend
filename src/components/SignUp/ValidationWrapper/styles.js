import styled from 'styled-components';
import { space, palette } from '../../../theme';
import LinearProgress from '@material-ui/core/LinearProgress';

export const StyledExternalContainer = styled.div`
    margin: ${space[5]} ${space[4]};
`

export const CustomLinearProgress = styled(LinearProgress)`
    background-color: #A4E3B7 !important;

    div {
        background-color: ${ palette.green };
    }
`