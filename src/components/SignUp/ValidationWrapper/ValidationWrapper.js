
import React from 'react';
import { connect } from "react-redux";

import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import ValidatePhone from '../ValidatePhone/ValidatePhone';
import { StyledExternalContainer, CustomLinearProgress } from './styles';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import ValidateEmail from '../ValidateEmail/ValidateEmail';


const ValidationWrapper = (props) => {

        let content = null

        switch (props.activeStep) {
            case 0: {
                content = <ValidateEmail/>
                break;
            }
            case 1: {
                content = <ValidatePhone />
                break;
            }
            case 2: {
                content = <ProfilePhoto/>
                break;
            }
            default: {
                break;
            }
        }

        return (
            <Dialog
                open={props.open}
                aria-labelledby="responsive-dialog-title"
            >
                <Paper style={{ width: '460px', height: 'auto' }} elevation={1}>
                    <div style={{ width: '460px' }}>
                        <CustomLinearProgress style={{ height: '16px' }} color="secondary" variant="determinate" value={props.completed} />
                    </div>
                    <StyledExternalContainer>
                        {content}
                    </StyledExternalContainer>
                </Paper>
            </Dialog>
        );
}

const mapStateToProps = (state) => {
    return {
        open: state.auth.openValidationWrapper,
        activeStep: state.auth.activeStep,
        completed: state.auth.completed
    };
};

export default connect(mapStateToProps)(ValidationWrapper)

