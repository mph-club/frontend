import React from 'react';
import Modal from '@material-ui/core/Modal';
import ClearIcon from '@material-ui/icons/Clear';

import {
    StyledDiv,
    StyledIconButton
} from './styles';

const ReportListing = (props) => {
    return (
        <div>
            <Modal aria-labelledby="Form"
                aria-describedby="Form to report a car listed in mph club"
                open={props.openForm}
                disableAutoFocus
                disableBackdropClick>
                <StyledDiv>
                    <StyledIconButton
                        color="inherit"
                        aria-label="Clear"
                        onClick={props.closeSignUp}
                    >
                        <ClearIcon />
                    </StyledIconButton>
                    <h1>Reporting this listing</h1>

                </StyledDiv>
            </Modal>
        </div>
    );
}

export default ReportListing