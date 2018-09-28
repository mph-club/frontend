import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';


export const StyledSelectTextField = styled(TextField)`
    && {
        input {
            height: 1em;
        }

        fieldset {
            border-radius: 8px;
        }

        label {
            font-weight: 600;
            color: ${props => props.error ? "#f44336" : "black"};

        }
    }
`

