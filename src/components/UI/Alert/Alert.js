import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StyledPrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../Buttons/SecondayButton/SecondaryButton';
import { space } from '../../../theme';
import { StyledIconButton } from './styles';
import ClearIcon from '@material-ui/icons/Clear';

const Alert = (props) => {

  const logo = <div>{props.logo}</div>

  return (
    <Dialog
      open={props.openAlert}
      onClose={props.handleClose}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <StyledIconButton onClick={props.handleClose}>
          <ClearIcon />
        </StyledIconButton>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '12px',
        marginRight: '12px',
        marginBottom: '12px'
      }}>
        {logo}
        <div>
          <DialogTitle id={"dialog-" + props.id} style={{marginTop: '-24px'}}>{props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {props.text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <StyledPrimaryButton onClick={props.handleOk} color="primary" autoFocus>{props.okTitle}</StyledPrimaryButton>
            <SecondaryButton onClick={props.handleClose} style={{ marginLeft: space[2] }}>Cancel</SecondaryButton>
          </DialogActions>
        </div>
      </div>
    </Dialog>
  );
}

export default Alert;