import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StyledPrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../Buttons/SecondayButton/SecondaryButton';

const Alert = (props) => {

  return (
      <Dialog
        open={props.openAlert}
        onClose={props.handleClose}
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
              <StyledPrimaryButton onClick={this.props.handleOk} color="primary" autoFocus>{props.okTitle}</StyledPrimaryButton>
              <SecondaryButton onClick={this.props.handleClose}>Cancel</SecondaryButton>
            </DialogActions>
          </div>
        </div>
      </Dialog>
  );
}

export default Alert;