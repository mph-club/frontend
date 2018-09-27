import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import theme, { space, palette } from '../../../theme';

export const StyledTitleTripDatesWrapper = styled.div`
    margin-top: ${space[3]};
    margin-bottom: ${space[3]};
`

export const StyledFormWrapper = styled.div`
    margin-bottom: ${space[4]};
`

export const StyledTextField = styled(TextField)`
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

export const StyledContainer = styled.div`
    && {
        border: 1px solid;
        border-radius: 8px;
        padding: 4px 16px;
        border-color: ${palette.grey01};
    }
`

export const StyledPickUpReturnWrapper = styled.div`
    margin-top: ${space[4]};
    margin-bottom: ${space[4]}; 
`

export const StyledTitleWrapper = styled.div`
    margin-bottom: ${space[3]};
`

export const StyledLocationWrapper = styled.div`
    margin-bottom: ${space[2]};
`

export const StyledMilesIncludedWrapper = styled.div`
    margin-top: ${space[4]};
    margin-bottom: ${space[4]};
`

export const StyledMilesIncludedTitleWrapper = styled.div`
    margin-bottom: ${space[3]};
`

export const StyledMilesTitleWrapper = styled.div`
    margin-bottom: ${space[2]};
`