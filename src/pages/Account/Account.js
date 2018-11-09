import React, { Component } from 'react';
import Footer from '../../components/Navigation/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../theme';
import avatar from '../../assets/images/avatar.png';
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

class Account extends Component {

    state = {
        value: 'contactInfo'
    }

    handleListItemClick = (value) => {
        this.setState({ value: value });
    };

    render() {

        let content = null

        switch (this.state.value) {
            case 'contactInfo':
                content = <ContactInfo />
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
                <StyledExternalContainer>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={3} md={3}>
                            <StyledLeftContainer>
                                <div>
                                    <StyledAvatarWrapper>
                                        <StyledAvatar
                                            alt="Steve Jobs"
                                            src={avatar}>
                                        </StyledAvatar>
                                        <IconButton color='primary'>
                                            <CameraIcon fontSize='large' />
                                        </IconButton>
                                    </StyledAvatarWrapper>
                                    <div style={{ marginTop: `${space[3]}`}}>
                                        <Typography variant="title" component="p" align='center' >Mike L.</Typography>
                                        <Typography variant="body1" component="p" align='center' style={{ color: palette.grey02 }}>Member since Jan 2018</Typography>
                                        <div style={{ textAlign: 'center', marginTop: space[2], marginBottom: space[3] }}>
                                            <TextButton style={{ color: palette.green, fontSize: 14 }}>View Profile</TextButton>
                                        </div>
                                    </div>
                                    <StyledListItem
                                        disableGutters
                                        button
                                        value='contactInfo'
                                        onClick={() => this.handleListItemClick('contactInfo')}>
                                        <Typography
                                            variant="body2"
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
                                        value='paymentInfo'
                                        onClick={() => this.handleListItemClick('paymentInfo')}>
                                        <Typography
                                            variant="body2"
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
                                        value='transactionHistory'
                                        onClick={() => this.handleListItemClick('transactionHistory')}>
                                        <Typography
                                            variant="body2"
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

export default Account