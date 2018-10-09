import styled from 'styled-components';
import { space } from '../../../theme';

import Input from '@material-ui/core/Input';


export const StyledInput = styled(Input)`
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

export const StyledExternalContainer = styled.div`
    max-width: 500px;
    display: block;
    margin: 96px ${space[3]} ${space[6]};

    @media (min-width: 768px) {
        margin: ${space[6]} auto ${space[6]};
    }
`

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledTextFieldContainer = styled.div`
    width: 45%;
`

export const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: ${space[4]} 0
`