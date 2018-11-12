import styled from 'styled-components';
import { space } from '../../../theme';
import Tab from '@material-ui/core/Tab';

export const StyledStepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${space[2]};
    margin-bottom: ${space[4]};
`

export const StyledTab = styled(Tab)`
    && {
        font-size: 16px;
        font-weight: 600;
    }
`

export const StyledTabContainer = styled.div`
    position: fixed
`