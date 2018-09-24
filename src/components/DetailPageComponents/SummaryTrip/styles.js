import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const StyledDateForm = styled.form`
    display: flex;
    flexWrap: wrap;
`

export const StyledTextField = styled(TextField)`
    margin-left: auto,
    margin-right: auto,
    width: 200px,
`

export const StyledContainer = styled.div`
    border: 1px solid;
    border-radius: 8px;
    padding: 4px 16px;
`