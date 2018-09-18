import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

export const StyledIconButton = styled(IconButton)`
    margin-left: -12px;
    margin-top: 12px;

`

export const StyledForm = styled.form`
    width: '90%'; // Fix IE11 issue.
    margin-top: 8px;
    margin-left: 5%;
    margin-right: 5%;
`

export const StyledDiv = styled.div`
    position: fixed;
    padding: 16px;
    width: 70%;
    border-radius: 8px;
    left: 15%;
    top: 30%;
    background-color: #ffffff;
    &:focus {
        outline: none;
    }

    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
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