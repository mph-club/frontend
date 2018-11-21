
import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog'

import Paper from '@material-ui/core/Paper';
import ValidatePhone from '../ValidatePhone/ValidatePhone';
import { StyledExternalContainer, CustomLinearProgress } from './styles';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import ValidateEmail from '../ValidateEmail/ValidateEmail';

import { connect } from "react-redux";
import { CreateUserSessionProperties } from '../../../tools/Store/Authentication/Presenter';


class ValidationWrapper extends Component {

    state = {
        completed: 33.3,
        activeStep: 0,
        user: this.props.user,
        userSession: null
    };


    progress = () => {
        const { completed } = this.state;
        if (completed === 100) {
            console.log('completed')
        }
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
            completed: prevState.completed + Math.round(prevState.completed * (prevState.activeStep + 1))
        }));
    };

    handleDoThisLater = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
            completed: prevState.completed + Math.round(prevState.completed * (prevState.activeStep + 1))
        }))
    }

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
                    doThisLater={this.handleDoThisLater}
                    phoneValidationSucceed={this.handleNext}
                    user={this.state.user.cognitoUser} />
                break;
            }
            case 2: {
                content = <ProfilePhoto
                    doThisLater={this.handleDoThisLater} />
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

