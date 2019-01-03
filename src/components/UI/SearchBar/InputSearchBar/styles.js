import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';

export const InternalContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledIconButton = styled(IconButton)`
    && {
        padding: 0;
    }

    height: 24px;
    width: 24px;
`