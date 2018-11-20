
import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog'

import Paper from '@material-ui/core/Paper';
import ValidatePhone from '../ValidatePhone/ValidatePhone';
import { StyledExternalContainer, CustomLinearProgress } from './styles';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import ValidateEmail from '../ValidateEmail/ValidateEmail';


class ValidationWrapper extends Component {

    state = {
        completed: 33.3,
        activeStep: 0,
        congnitoUser: this.props.cognitoUser
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
            completed: prevState.completed + Math.round(prevState.completed * ( prevState.activeStep + 1))
        }));
    };

    handleDoThisLater = () => {
        this.setState( prevState => ({ 
            activeStep: prevState.activeStep + 1, 
            completed: prevState.completed + Math.round(prevState.completed * ( prevState.activeStep + 1)) 
        }))
    }

    render() {
        const { fullScreen } = this.props.fullScreen
        let content = null 

        switch(this.state.activeStep) {
            case 0: {
            //     content =  <ValidatePhone 
            //         doThisLater={this.handleDoThisLater}
            //         phoneValidationSucceed={this.handleNext}
            //         cognitoUser={this.props.cognitoUser}/>
            //     // content =  <ProfilePhoto doThisLater={this.handleDoThisLater}/>
                content = <ValidateEmail 
                    changeEmail={this.props.changeEmail}
                    emailValidationSucceed={this.handleNext}
                    cognitoUser={this.props.cognitoUser}/>
                break;
            }
            case 1: {
                content =  <ProfilePhoto 
                    doThisLater={this.handleDoThisLater}/>
                break;
            }
            case 2: {
                content = <ValidatePhone doThisLater={this.handleDoThisLater}/>
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

export default withMobileDialog()(ValidationWrapper)

