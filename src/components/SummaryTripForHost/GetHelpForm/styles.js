import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput'; 

export const StyledOutlineInput = styled(OutlinedInput)`
    margin: 32px 0; 
    height: 250px;
`

export const StyledIconButton = styled(IconButton)`
    margin-left: -12px;
    margin-top: 12px;
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

export const StyledPhoneContainer = styled.div`
    display: block;
    margin: 16px 0;
    text-align: center;
`