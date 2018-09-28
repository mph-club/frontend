import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ClearIcon from '@material-ui/icons/Clear';

import {
    StyledDiv,
    StyledIconButton
} from './styles';

const ReportListing = (props) => {


    return (
        <div>
            <Dialog
                open={props.open}
                scroll={'body'}
                aria-labelledby="scroll-dialog-reportListing"
            >
                <DialogTitle id="reportListingDialog">Report this listing</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
                        nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras
                        mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ReportListing