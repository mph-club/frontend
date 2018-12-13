import styled from 'styled-components';
import { space } from '../../../../theme';

export const StyledStepsWrapper = styled.div`
    && {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: ${space[4]};
        margin-bottom: ${space[4]};
    }
`

export const StyledPaymentWrapper = styled.div`
    && {
        display: flex;
        align-items: center;
    }
`