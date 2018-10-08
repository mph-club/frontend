import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput'; 
import DialogTitle from '@material-ui/core/DialogTitle';
import FormLabel from '@material-ui/core/FormLabel';
import DialogContent from '@material-ui/core/DialogContent';
import { palette, space } from '../../../theme';

export const StyledOutlineInput = styled(OutlinedInput)`
    margin: 32px 0; 
    height: 250px;
`

export const StyledIconButton = styled(IconButton)`
    margin-left: -12px;
    margin-top: 12px;
`

export const StyledDivider = styled(Typography)`
    && {
        width: 100%;
        margin: .7em auto;
        overflow: hidden;
        text-align: center;
        font-weight:200;
        color: ${palette.black};
        &:before, &:after {
            content: "";
            display: inline-block;
            width: 50%;
            margin: 0 .5em 0 -55%;
            vertical-align: middle;
            border-bottom: 1px solid ${palette.grey03};
        }

        &:after {
            margin: 0 -55% 0 .5em;
        }
    }
`

export const StyledDialogTitle = styled(DialogTitle)`
    && {
        font-size: 24px;
        font-weight: 600;
    }
`

export const StyledFormLabel = styled(FormLabel)`
    && {
        font-size: 16px;
        color: ${palette.black};
    }
`

export const StyledDialogContent = styled(DialogContent)`
    && {
        padding: 0 16px 24px;

        @media (min-width: 768px) {
            padding: 0 24px 24px;
        }
    }
`

export const StyledDialogContentContainer = styled.div`

    margin-left: ${space[0]};
    margin-right: ${space[0]};

    @media (min-width: 768px) {
        margin-left: ${space[4]};
        margin-right: ${space[4]};
    }
`

export const StyledPhoneContainer = styled.div`
    display: block;
    margin: 16px 0;
    text-align: center;

    a {
        text-decoration: none;
        color: ${palette.blue};
        font-weight: 600;
    }
`

