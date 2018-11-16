
import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog'
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import ValidatePhone from '../ValidatePhone/ValidatePhone';
import { StyledExternalContainer } from './styles';


class ValidationWrapper extends Component {

    state = {
        completed: 10,
        activeStep: 0,
    };



    progress = () => {
        const { completed } = this.state;
        if (completed === 100) {
            this.setState({ completed: 0 });
        } else {
            const diff = Math.random() * 10;
            this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    render() {
        const { fullScreen } = this.props.fullScreen

        return (
            <Dialog
                fullScreen={fullScreen}
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Paper style={{ width: '460px', height: '580px' }} elevation={1}>
                    <div style={{ width: '460px' }}>
                        <LinearProgress style={{ height: '16px' }} color="secondary" variant="determinate" value={this.state.completed} />
                    </div>

                    <StyledExternalContainer>
                        <ValidatePhone />
                    </StyledExternalContainer>


                </Paper>
            </Dialog>
        );
    }


}

export default withMobileDialog()(ValidationWrapper)

