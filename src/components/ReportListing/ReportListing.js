import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import ClearIcon from '@material-ui/icons/Clear';

import {
    StyledIconButton
} from './styles';

const ReportListing = (props) => {

        return (
            <div>
            <StyledIconButton>
                <ClearIcon/>
            </StyledIconButton>
                <Dialog
                    open={props.openForm}
                    onClose={props.closeForm}
                    scroll={'body'}
                    aria-labelledby="scroll-dialog-reportListing"
                >
                    <DialogTitle id="reportListingDialog">Report this listing</DialogTitle>
                    <DialogContent>
                        
                    </DialogContent>
                </Dialog>
            </div>
        );
}

export default ReportListing