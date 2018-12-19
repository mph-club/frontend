import React, { Component } from 'react';
import axios from '../../../shared/axios';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import avatar from '../../../assets/images/avatar.png';
import {
    ExternalContainer,
    StyledAvatar,
    StyledIconButton
} from './styles';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import StyledSecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';
import { palette, space } from '../../../theme';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClearIcon from '@material-ui/icons/Clear';


class UploadPhoto extends Component {

    state = {
        selectedPhoto: null,
        loading: false
    }

    fileSelectedHandler = (event) => {
        this.setState({
            selectedPhoto: event.target.files[0]
        })
    }

    fileUploadHandler = () => {

        this.toogleLoading()
        const fd = new FormData();
        fd.append('photo', this.state.selectedPhoto, this.state.selectedPhoto.name.replace(/\s/g, ''))

        axios.defaults.headers.common['Authorization'] = this.props.accessToken;
        axios.post('uploadUserPhoto', fd).then(response => {
            this.toogleLoading()
            this.props.closeUploadPhoto(true);
        }).catch(error => {
            alert(error.message || JSON.stringify(error))
            this.toogleLoading()
        });
    }

    toogleLoading = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                loading: !prevState.loading
            }
        })
    }

    render() {

        return (
            <Dialog
                open={this.props.open}
                aria-labelledby="responsive-dialog-title"
                onClose={this.props.closeUploadPhoto}
            >
                <Paper style={{ width: '460px', height: 'auto' }} elevation={1}>
                    <StyledIconButton
                        color="inherit"
                        aria-label="Clear"
                        onClick={this.props.closeUploadPhoto}
                    >
                        <ClearIcon />
                    </StyledIconButton>
                    <ExternalContainer>
                        <Typography variant='h6' align='center'>Add a profile photo</Typography>
                        <Typography variant='body1' component='p' align='center' style={{ margin: '16px 0' }}>Adding a photo helps build trust among hosts and guests on our platform.</Typography>
                        <StyledAvatar
                            alt="user profile"
                            src={( !this.state.selectedPhoto ) && ( !this.props.user.profilePhoto ) ? avatar : this.state.selectedPhoto ? URL.createObjectURL(this.state.selectedPhoto) : this.props.user.profilePhoto}>
                        </StyledAvatar>

                        <input
                            style={{ display: 'none' }}
                            type='file'
                            onChange={this.fileSelectedHandler}
                            ref={fileInput => this.fileInput = fileInput} />

                        {
                            (!this.props.user.profilePhoto ) && (!this.state.selectedPhoto ) ?
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <StyledPrimaryButton onClick={() => this.fileInput.click()}>Choose photo</StyledPrimaryButton>
                                </div> :
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <StyledSecondaryButton onClick={() => this.fileInput.click()}>Change photo</StyledSecondaryButton>

                                    <StyledPrimaryButton style={{ marginLeft: space[3] }} onClick={this.fileUploadHandler}>
                                        {this.state.loading ? <CircularProgress size={20} style={{ color: palette.white }} /> : 'Upload'}
                                    </StyledPrimaryButton>
                                </div>
                        }
                    </ExternalContainer>
                </Paper>
            </Dialog>
        );
    }
}

const mapStateToProps = state => {
    return {
        accessToken: state.auth.session.AccessToken,
        user: state.account.user,
    }
}

export default connect(mapStateToProps)(UploadPhoto);