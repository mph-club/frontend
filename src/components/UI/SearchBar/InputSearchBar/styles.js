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

export const SuggestionsContainer = styled.div`
    background-color: #fff;
    padding: 16px;
    margin-left: -16px;
    margin-right: -16px;
    border-radius: 4px;
`