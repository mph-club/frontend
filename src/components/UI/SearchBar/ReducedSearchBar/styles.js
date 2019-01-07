import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import StylePrimaryButton from '../../../../components/UI/Buttons/PrimaryButton/PrimaryButton';

export const StyledPaper = styled(Paper)`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 16px;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyleButton = styled(StylePrimaryButton)`
    margin: 12px;
    align-self: flex-end;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 280px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 8px;
`