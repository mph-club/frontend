
import React, { Component } from 'react';
import { connect } from "react-redux";

import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import ValidatePhone from '../ValidatePhone/ValidatePhone';
import { StyledExternalContainer, CustomLinearProgress } from './styles';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import ValidateEmail from '../ValidateEmail/ValidateEmail';

import { CreateUserSessionProperties } from '../../../store/Authentication/Presenter';


class ValidationWrapper extends Component {

    handleEmailValidation = (err, result) => {
        //this.props.RunRedux(CreateUserSessionProperties(result));
        this.handleNext()
    }

    render() {

        let content = null

        switch (this.props.activeStep) {
            case 0: {
                content = <ValidateEmail/>
                break;
            }
            case 1: {
                content = <ValidatePhone />
                break;
            }
            case 2: {
                content = <ProfilePhoto
                    doThisLater={this.props.getStartedEnded} />
                break;
            }
            default: {
                break;
            }
        }

        return (
            <Dialog
                open={this.props.open}
                aria-labelledby="responsive-dialog-title"
            >
                <Paper style={{ width: '460px', height: 'auto' }} elevation={1}>
                    <div style={{ width: '460px' }}>
                        <CustomLinearProgress style={{ height: '16px' }} color="secondary" variant="determinate" value={this.props.completed} />
                    </div>
                    <StyledExternalContainer>
                        {content}
                    </StyledExternalContainer>
                </Paper>
            </Dialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.signUp.openValidationWrapper,
        activeStep: state.signUp.activeStep,
        completed: state.signUp.completed
    };
};

export default connect(mapStateToProps)(ValidationWrapper)

