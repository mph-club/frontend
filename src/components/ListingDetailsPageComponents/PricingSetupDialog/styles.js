import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import FormLabel from '@material-ui/core/FormLabel';
import DialogTitle from '@material-ui/core/DialogTitle';
import { palette } from '../../../theme';

export const StyledIconButton = styled(IconButton)`
    margin-left: -12px;
    margin-top: 12px;
`

export const StyledFormLabel = styled(FormLabel)`
    && {
        font-size: 20px;
        font-weight: 600;
        color: ${palette.black};
    }
`

export const StyledDialogTitle = styled(DialogTitle)`
    && {
        font-size: 24px;
        font-weight: 600;
    }
`

export const StyledRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
`