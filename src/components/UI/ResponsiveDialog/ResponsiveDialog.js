import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StyledPrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import Aux from '../../../hoc/Aux/Aux';


const ConfirmReportDialog = (props) => {

  return (
    <Aux>
      <Dialog
        open={props.openConfirmDialog}
        onClose={props.closeConfirmDialog}
        aria-labelledby={"dialog-" + props.labelled}
      >
        <div style={{ display: 'flex' }}>
          <div>logo</div>
          <div>
            <DialogTitle id={"dialog-" + props.id}>{props.title}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {props.text}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <StyledPrimaryButton onClick={this.handleClose} color="primary" autoFocus>Okey</StyledPrimaryButton>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </Aux>
  );
}

export default ConfirmReportDialog;