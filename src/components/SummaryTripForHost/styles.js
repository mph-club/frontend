import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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

export const StyledDivider = styled(Typography)`
    width: 100%;
    margin: .7em auto;
    overflow: hidden;
    text-align: center;
    font-weight:200;
    color: #fff;
    &:before, &:after {
        content: "";
        display: inline-block;
        width: 50%;
        margin: 0 .5em 0 -55%;
        vertical-align: middle;
        border-bottom: 1px solid;
    }

    &:after {
        margin: 0 -55% 0 .5em;
    }
`

export const StyledDividerLayout = styled.div`
    margin-bottom: 2rem;
`

export const StyledPContainer = styled.div`
    border: 1 solid #g3g3g3;
    border-radius: 10px;
    padding: 32px;
`   