import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../../components/Navigation/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../theme';
import CameraIcon from '@material-ui/icons/CameraAlt';
import TextButton from '../../components/UI/Buttons/TextButton/TextButton';
import {
    StyledExternalContainer,
    StyledLeftContainer,
    StyledFooterContainer,
    StyledAvatar,
    StyledAvatarWrapper,
    StyledListItem
} from './styles';
import IconButton from '@material-ui/core/IconButton';
import ContactInfo from '../../components/AccountComponents/ContactInfo/ContactInfo';
import TransactionHistory from '../../components/AccountComponents/TransactionHistory/TransactionHistory';
import CircularProgress from '@material-ui/core/CircularProgress';
import UploadPhoto from '../../components/AccountComponents/UploadPhoto/UploadPhoto';

import * as actions from '../../store/actions/index';

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

        const circularProgress = <div style={{
            margin: '12px auto',
            justifyContent: 'space-between',
            display: 'flex',
            maxWidth: 'fit-content'
        }}>
            <CircularProgress size={40} style={{ color: palette.green }} />
        </div>

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
            <React.Fragment>
                <UploadPhoto
                    open={this.state.uploadPhoto}
                    closeUploadPhoto={this.handleOpenUploadPhoto} />
                <StyledExternalContainer>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={3} md={3}>
                            <StyledLeftContainer>
                                <div>
                                    <StyledAvatarWrapper>
                                        <StyledAvatar
                                            alt="user profile"
                                            src={user.profile_photo}>
                                        </StyledAvatar>
                                        <IconButton color='primary' onClick={this.handleOpenUploadPhoto}>
                                            <CameraIcon fontSize='large' />
                                        </IconButton>
                                    </StyledAvatarWrapper>
                                    <div style={{ marginTop: `${space[3]}` }}>
                                        <Typography variant="h6" align='center' >{this.props.user.userName}</Typography>
                                        <Typography variant="body1" component="p" align='center' style={{ color: palette.grey02 }}>Member since Jan 2018</Typography>
                                        <div style={{ textAlign: 'center', marginTop: space[2], marginBottom: space[3] }}>
                                            <TextButton style={{ color: palette.green, fontSize: 14 }} onClick={() => this.props.history.push('/user-details')}>View Profile</TextButton>
                                        </div>
                                    </div>
                                    <StyledListItem
                                        disableGutters
                                        button
                                        value='contactInfo'
                                        onClick={() => this.handleListItemClick('contactInfo')}>
                                        <Typography
                                            variant="body1"
                                            style={{
                                                textTransform: 'uppercase',
                                                color: (this.state.value === 'contactInfo') ? palette.green : palette.grey02,
                                                fontWeight: (this.state.value === 'contactInfo') ? 900 : 600,
                                            }}
                                            component="p">Contact Info</Typography>
                                    </StyledListItem>
                                    <StyledListItem
                                        disableGutters
                                        button
                                        disabled
                                        value='paymentInfo'
                                        onClick={() => this.handleListItemClick('paymentInfo')}>
                                        <Typography
                                            variant="body1"
                                            style={{
                                                textTransform: 'uppercase',
                                                color: (this.state.value === 'paymentInfo') ? palette.green : palette.grey02,
                                                fontWeight: (this.state.value === 'paymentInfo') ? 900 : 600
                                            }}
                                            component="p">Payment Info</Typography>
                                    </StyledListItem>
                                    <StyledListItem
                                        disableGutters
                                        button
                                        disabled
                                        value='transactionHistory'
                                        onClick={() => this.handleListItemClick('transactionHistory')}>
                                        <Typography
                                            variant="body1"
                                            style={{
                                                textTransform: 'uppercase',
                                                color: (this.state.value === 'transactionHistory') ? palette.green : palette.grey02,
                                                fontWeight: (this.state.value === 'transactionHistory') ? 900 : 600
                                            }}
                                            component="p">Transactions</Typography>
                                    </StyledListItem>
                                </div>

                            </StyledLeftContainer>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            {content}
                        </Grid>
                    </Grid>
                </StyledExternalContainer>
                <StyledFooterContainer>
                    <Footer />
                </StyledFooterContainer>
            </React.Fragment>
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


export default connect(mapStateToProps, mapDispatchToProps)(Account)