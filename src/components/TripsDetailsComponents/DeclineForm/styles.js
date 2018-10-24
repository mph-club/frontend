import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const StyledIconButton = styled(IconButton)`
    margin-left: -12px;
    margin-top: 12px;
`

export const StyledRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledContainer = styled.div`
    display: block;
    justify-content: center;
    margin: 96px auto;
    max-width: 500px;

    @media(max-width: 499px) {
        margin: 96px 12px;
    }
`