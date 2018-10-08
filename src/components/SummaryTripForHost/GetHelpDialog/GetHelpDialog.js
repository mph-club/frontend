import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import ClearIcon from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import PrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import LettersCounter from '../../UI/LettersCounter/LettersCounter';
import Typography from '@material-ui/core/Typography';

import {
    StyledIconButton,
    StyledDivider,
    StyledPhoneContainer,
    StyledOutlineInput,
    StyledDialogTitle,
    StyledFormLabel,
    StyledDialogContent,
    StyledDialogContentContainer
} from './styles';


class GetHelpDialog extends Component {

    state = {
        length: 0
    }

    handleChange = (event) => {
        this.setState({
            length: event.target.value.length
        })
    }

    render() {

        const inputProps = {
            maxLength: '400'
        }

        return (
            <React.Fragment>
                <Dialog
                    open={this.props.openForm}
                    onClose={this.props.closeForm}
                    fullScreen={this.props.fullScreen}
                    scroll={'body'}
                    aria-labelledby="scroll-dialog-getHelp"
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <StyledIconButton onClick={this.props.closeForm}>
                            <ClearIcon />
                        </StyledIconButton>
                    </div>
                    <StyledDialogContentContainer>
                        <StyledDialogTitle disableTypography id="getHelpDialog">How can we help?</StyledDialogTitle>
                        <StyledDialogContent>
                            <FormControl style={{ width: '100%' }}>
                                <StyledFormLabel>We'll respond back within 24 hours.</StyledFormLabel>
                                <StyledOutlineInput
                                    multiline={true}
                                    rows="14"
                                    onChange={this.handleChange}
                                    labelWidth={0}
                                    inputProps={
                                        inputProps
                                    }
                                ></StyledOutlineInput>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    margin: '-56px 12px 32px'
                                }} >
                                    <LettersCounter length={this.state.length} />
                                </div>
                                <StyledDivider
                                    variant="body2">
                                    or
                                </StyledDivider>
                                <StyledPhoneContainer>
                                    <Typography variant="body2" component="p">If you need immidate assistance, give us a call</Typography>
                                    <a href="tel:+1-800-454-4369">1-800-454-4369</a>
                                </StyledPhoneContainer>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    margin: '12px 12px 12px'
                                }}>
                                    <PrimaryButton>Submit</PrimaryButton>
                                </div>
                            </FormControl>
                        </StyledDialogContent>
                    </StyledDialogContentContainer>
                </Dialog>
            </React.Fragment>
        );
    }
};

export default withMobileDialog()(GetHelpDialog)