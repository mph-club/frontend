import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


import Typography from '@material-ui/core/Typography';
import { StyledAvatar } from './styles';
import avatar from '../../../assets/images/avatar.png';
import StyledPrimaryButton from '../../UI/Buttons/PrimaryButton/PrimaryButton';
import StyledSecondaryButton from '../../UI/Buttons/SecondayButton/SecondaryButton';
import { space, palette } from '../../../theme';
import * as actions from '../../../store/actions/index';

class ProfilePhoto extends Component {

    state = {
        selectedPhoto: null
    }

    fileSelectedHandler = (event) => {
        this.setState({
            selectedPhoto: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('photo', this.state.selectedPhoto, this.state.selectedPhoto.name)

        axios.defaults.headers.common['Authorization'] = this.props.accessToken;
        axios.defaults.baseURL = 'http://mphclub.ngrok.io/api/v1/';

        axios.post('uploadUserPhoto',fd).then( response => {
            this.props.handleOnBoardingEnded()
        }).catch( error => {
            alert('Ops! Looks like something was wrong')
            this.props.handleOnBoardingEnded()
        });
    }

    render() {

        return (
            <div>
                <Typography variant='title' component='h6' align='center'>Add a profile photo</Typography>
                <Typography variant='body1' component='p' align='center' style={{ margin: '16px 0' }}>Adding a photo helps build trust among hosts and guests on our platform.</Typography>
                <StyledAvatar
                    alt="user profile"
                    src={this.state.selectedPhoto === null ? avatar : URL.createObjectURL(this.state.selectedPhoto)}>
                </StyledAvatar>

                <input
                    style={{ display: 'none' }}
                    type='file'
                    onChange={this.fileSelectedHandler}
                    ref={fileInput => this.fileInput = fileInput} />

                {
                    this.state.selectedPhoto === null ?
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <StyledPrimaryButton onClick={() => this.fileInput.click()}>Choose photo</StyledPrimaryButton>
                        </div> :
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <StyledSecondaryButton onClick={() => this.fileInput.click()}>Change photo</StyledSecondaryButton>
                            <StyledPrimaryButton style={{ marginLeft: space[3] }} onClick={this.fileUploadHandler}>Upload</StyledPrimaryButton>
                        </div>
                }
                <Typography
                    align='center'
                    style={{ marginTop: space[4], cursor: 'pointer', color: palette.grey01 }}
                    onClick={() => this.props.handleOnBoardingEnded()}>I'll do this later</Typography>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        accessToken: state.auth.accessToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOnBoardingEnded: () => { dispatch(actions.onBoardingEnded()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhoto)