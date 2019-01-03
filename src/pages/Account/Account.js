import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Footer from '../../components/Navigation/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../theme';
import CameraIcon from '@material-ui/icons/CameraAlt';
import TextButton from '../../components/UI/Buttons/TextButton/TextButton';
import {
    ExternalContainer,
    LeftGrid,
    StyledAvatar,
    AvatarContainer,
    CameraButton,
    ProgressContainer
} from './styles';
import ContactInfo from '../../components/AccountComponents/ContactInfo/ContactInfo';
import TransactionHistory from '../../components/AccountComponents/TransactionHistory/TransactionHistory';
import CircularProgress from '@material-ui/core/CircularProgress';
import UploadPhoto from '../../components/AccountComponents/UploadPhoto/UploadPhoto';

import * as actions from '../../store/actions/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class Account extends Component {

    state = {
        value: 'contactInfo',
        uploadPhoto: false
    }

    handleListItemClick = (value) => {
        this.setState({ value: value });
    };

    handleOpenUploadPhoto = (refreshData) => {
        this.setState(prevState => {
            return {
                ...prevState,
                uploadPhoto: !prevState.uploadPhoto
            }
        })

        if (refreshData) {
            this.props.onAccountFechtInfo(this.props.accessToken)
        }
    }

    render() {

        const { user } = this.props
        let content = null

        const circularProgress = < ProgressContainer >
            <CircularProgress size={40} style={{ color: palette.green }} />
        </ProgressContainer >


        switch (this.state.value) {
            case 'contactInfo':
                content = this.props.loading ? circularProgress : <ContactInfo />
                break;
            case 'paymentInfo':
                break;
            case 'transactionHistory':
                content = <TransactionHistory />
                break;
            default:
                break;
        }

        return (
            <Fragment>
                <UploadPhoto
                    open={this.state.uploadPhoto}
                    closeUploadPhoto={this.handleOpenUploadPhoto} />
                <ExternalContainer>
                    <Grid container spacing={16}>
                        <LeftGrid item xs={12} sm={3} md={3}>
                            <AvatarContainer>
                                <CameraButton color='primary' onClick={this.handleOpenUploadPhoto}>
                                    <CameraIcon fontSize='large' />
                                </CameraButton>
                                <StyledAvatar alt="user profile" src={user.profile_photo} />
                                <Typography variant="h6" align='center' >{this.props.user.userName}</Typography>
                                <Typography variant="body1" component="p" align='center' style={{ color: palette.grey02 }}>Member since Jan 2018</Typography>
                                <div style={{ textAlign: 'center', marginTop: space[2], marginBottom: space[3] }}>
                                    <TextButton style={{ color: palette.green, fontSize: 14 }} onClick={() => this.props.history.push('/user-details')}>View Profile</TextButton>
                                </div>
                            </AvatarContainer>
                            <List>
                                <ListItem
                                    disableGutters
                                    button
                                    selected={this.state.value === 'contactInfo'}
                                    value='contactInfo'
                                    onClick={() => this.handleListItemClick('contactInfo')}>
                                    <Typography
                                        variant="body1"
                                        style={{
                                            color: (this.state.value === 'contactInfo') ? palette.green : palette.grey02,
                                            fontWeight: (this.state.value === 'contactInfo') ? 900 : 600,
                                        }}
                                        component="p">CONTACT INFO</Typography>
                                </ListItem>
                                <ListItem
                                    disableGutters
                                    button
                                    disabled
                                    selected={this.state.value === 'paymentInfo'}
                                    value='paymentInfo'
                                    onClick={() => this.handleListItemClick('paymentInfo')}>
                                    <Typography
                                        variant="body1"
                                        style={{
                                            color: (this.state.value === 'paymentInfo') ? palette.green : palette.grey02,
                                            fontWeight: (this.state.value === 'paymentInfo') ? 900 : 600,
                                        }}
                                        component="p">PAYMENT INFO</Typography>
                                </ListItem>
                                <ListItem
                                    disableGutters
                                    button
                                    selected={this.state.value === 'transactionHistory'}
                                    disabled
                                    value='transactionHistory'
                                    onClick={() => this.handleListItemClick('transactionHistory')}>
                                    <Typography
                                        variant="body1"
                                        style={{
                                            color: (this.state.value === 'transactionHistory') ? palette.green : palette.grey02,
                                            fontWeight: (this.state.value === 'transactionHistory') ? 900 : 600,
                                        }}
                                        component="p">TRANSACTION HISTORY</Typography>
                                </ListItem>
                            </List>
                        </LeftGrid>
                        <Grid item xs={12} sm={8} md={8}>
                            {content}
                        </Grid>
                    </Grid>
                </ExternalContainer>
                <Footer />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        accessToken: state.auth.session.AccessToken,
        user: state.account.user,
        loading: state.account.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAccountFechtInfo: (accessToken) => { dispatch(actions.onAccountFetchInfo(accessToken)) }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account))