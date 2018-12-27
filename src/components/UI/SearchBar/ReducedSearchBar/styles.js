import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import StylePrimaryButton from '../../../../components/UI/Buttons/PrimaryButton/PrimaryButton';

export const StyledPaper = styled(Paper)`
    width: 100%;
    height: auto;
    padding: 16px;
`

export const StyleButton = styled(StylePrimaryButton)`
    margin: 12px;
    align-self: flex-end;
`

export const RowContainer = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`