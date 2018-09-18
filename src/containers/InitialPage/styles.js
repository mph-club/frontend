import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

export const StyledGrid = styled(Grid)`
    display: inline-flex !important;
`

export const StyledDateForm = styled.form`
    display: flex;
    flexWrap: wrap;
`

export const StyledTextField = styled(TextField)`
    margin-left: auto,
    margin-right: auto,
    width: 200px,
`

export const StyledNativeTextField = styled(TextField)`
    margin-bottom: 1rem !important;
    label {
        color: ${props => props.error ? "red" : "#000000 !important"};
        font-weight: 600;
    },
    input {
        border-radius: 8px !important;
        border: 1px solid #e1e1e1;
        padding: 11px 10px;
        margin-top: 8px;
        border-color: ${props => props.error ? "red" : "#e1e1e1"};
        &:focus {
            border-color: ${props => props.error ? "red" : "black"};
            transition: all 0.2s ease-in 0s;
            outline: none !important;
            outline-style: none !important;
            outline-color: none !important;
        }
    }
`

export const StyledInputLabel = styled(InputLabel)`
    color: #000000 !important;
    font-weight: 600 !important;
`

export const StyledNativeSelect = styled(NativeSelect)`
    border-radius: 8px !important;
    border: 1px solid #e1e1e1 !important;
    padding: 4px 10px !important;
    border-color: ${props => props.error ? "red" : "#e1e1e1"};
    &:before {
        border-bottom: none !important;
    }
    &:after {
        border-bottom: none !important;
    },
    select {
        &:focus {
            background: transparent !important;
        }
    }
`

export const StyledContainer = styled.div`
    width: 100% !important;
    height: 100vh !important;
    background: url('https://s3.amazonaws.com/design-code-react/Audi.png');
    background-size: cover;
    background-position: center;
    
    @media (max-width: 768px) {
        display: none;
    }
`

export const StyledLeftLayout = styled.div`
    padding: 1rem;

    @media (max-width: 768px) {
        padding: 0;
    }
`
export const StyledTitle = styled.h1`
    font-size: 3rem;
    padding: 2rem;
    margin: 0;
    font-weight: 900;
    max-width: 512px;
    
    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`

export const StyledTitleSpan = styled.span`
    color: #31DA62;
`

export const StyledFormContainer = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 512px;
`

export const StyledDateContainer = styled.div`
    display: flex;
`

export const StyledDateContainerItemOne = styled.div`
    flex-grow: 1;
`

export const StyledDateContainerItemTwo = styled.div`
    flex-grow: 1;
    padding-left: 1rem;
`

export const StyledButtonContainer = styled.div`
    margin-top: 2rem;
    float: right;
`