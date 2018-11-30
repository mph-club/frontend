
import React, { Component } from 'react';
import { connect } from "react-redux";

import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog'

import Paper from '@material-ui/core/Paper';
import ValidatePhone from '../ValidatePhone/ValidatePhone';
import { StyledExternalContainer, CustomLinearProgress } from './styles';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import ValidateEmail from '../ValidateEmail/ValidateEmail';

import { CreateUserSessionProperties } from '../../../store/Authentication/Presenter';


class ValidationWrapper extends Component {

    state = {
        completed: 25,
        activeStep: 0,
        user: this.props.user,
        userSession: null
    };

    handleNext = () => {
        this.setState(prevState => ({
            ...this.state,
            activeStep: prevState.activeStep + 1,
            completed: prevState.completed + Math.round(prevState.completed * (prevState.activeStep + 1))
        }));
    };

    handleEmailValidation = (err, result) => {
        if (err) {
            this.props.authenticationFailed();
            return;   
        }

        this.setState({ 
            userSession: result 
        })

        this.props.RunRedux(CreateUserSessionProperties(result));
        this.handleNext()
    }

    render() {
        const { fullScreen } = this.props.fullScreen
        let content = null

        switch (this.state.activeStep) {
            case 0: {
                content = <ValidateEmail 
                    changeEmail={this.props.changeEmail}
                    emailValidationSucceed={(err, result) => this.handleEmailValidation(err, result)}
                    user={this.props.user}/>
                break;
            }
            case 1: {
                content = <ValidatePhone
                    doThisLater={this.handleNext}
                    phoneValidationSucceed={this.handleNext}
                    user={this.state.user.cognitoUser} />
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
                fullScreen={fullScreen}
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Paper style={{ width: '460px', height: 'auto' }} elevation={1}>
                    <div style={{ width: '460px' }}>
                        <CustomLinearProgress style={{ height: '16px' }} color="secondary" variant="determinate" value={this.state.completed} />
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
        SessionReducer: state.SessionReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        RunRedux: (data) => {
            dispatch(data);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withMobileDialog()(ValidationWrapper))

