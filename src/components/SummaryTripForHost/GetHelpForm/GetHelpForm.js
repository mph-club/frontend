import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import ClearIcon from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';

import {
    StyledIconButton,
    StyledDivider
} from './styles';
import Typography from '@material-ui/core/Typography';


const GetHelpForm = (props) => {

    return (
        <div>
            <Dialog
                open={props.openForm}
                onClose={props.closeForm}
                scroll={'body'}
                aria-labelledby="scroll-dialog-getHelp"
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <StyledIconButton onClick={props.closeForm}>
                        <ClearIcon />
                    </StyledIconButton>
                </div>
                <DialogTitle id="getHelpDialog">Report this listing</DialogTitle>
                <DialogContent>
                    <FormControl style={{ width: '100%' }}>
                        <FormLabel>We'll respond back within 24 hours.</FormLabel>
                        <OutlinedInput multiline={true} rowsMax="12" labelWidth={10}></OutlinedInput>
                        <StyledDivider
                            variant="body2">or
                        </StyledDivider>
                        <div>
                            <Typography>If you need immidate assistance, give us a call</Typography>
                            <Typography>1-800-454-4369</Typography>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            margin: '12px 12px 12px'
                        }}>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default GetHelpForm