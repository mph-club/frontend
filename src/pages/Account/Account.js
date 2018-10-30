import React, { Component } from 'react';
import Footer from '../../components/Navigation/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { palette, space } from '../../theme';
import avatar from '../../assets/images/avatar.png';
import InfoIcon from '@material-ui/icons/Info';
import CameraIcon from '@material-ui/icons/CameraAlt';
import TextButton from '../../components/UI/Buttons/TextButton/TextButton';
import ListItem from '@material-ui/core/ListItem';
import {
    StyledExternalContainer,
    StyledLeftContainer,
    StyledFooterContainer,
    StyledContainer,
    StyledRowContainer,
    StyledWhiteContainer,
    StyledAvatar
} from './styles';
import IconButton from '@material-ui/core/IconButton';

class Account extends Component {

    state = {
        selectedIndex: 0
    }

    handleListItemClick = (index) => {
        this.setState({ selectedIndex: index });
    };

    render() {
        return (
            <React.Fragment>
                <StyledExternalContainer>
                    <Grid container spacing={16}>
                        <Grid item xs={3}>
                            <StyledLeftContainer>
                                <div>
                                    <StyledAvatar
                                        alt="Steve Jobs"
                                        src={avatar}>
                                    </StyledAvatar>
                                    <IconButton>
                                        <CameraIcon />
                                    </IconButton>
                                    <Typography variant="title" component="p" align='center' >Mike L.</Typography>
                                    <Typography variant="body1" component="p" align='center' style={{ color: palette.grey02 }}>Member since Jan 2018</Typography>
                                    <div style={{ textAlign: 'center', marginTop: space[2], marginBottom: space[4] }}>
                                        <TextButton color={palette.green}>View Profile</TextButton>
                                    </div>
                                    <ListItem
                                        button
                                        onClick={() => this.handleListItemClick(0)}>
                                        <Typography 
                                            variant="body2"
                                            style={{ color: (this.state.selectedIndex === 0) ? palette.green : palette.black}} 
                                            component="p">Contact Info</Typography>
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => this.handleListItemClick(1)}>
                                        <Typography 
                                            variant="body2" 
                                            style={{ color: (this.state.selectedIndex === 1) ? palette.green : palette.black}} 
                                            component="p">Payment Info</Typography>
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => this.handleListItemClick(2)}>
                                        <Typography 
                                            variant="body2" 
                                            style={{ color: (this.state.selectedIndex === 2) ? palette.green : palette.black}} 
                                            component="p">Transaction History</Typography>
                                    </ListItem>
                                </div>

                            </StyledLeftContainer>
                        </Grid>
                        <Grid item xs={6}>
                            <StyledContainer>
                                <StyledWhiteContainer>
                                    <StyledRowContainer>
                                    </StyledRowContainer>
                                    <StyledRowContainer>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body2" component="p" style={{ marginRight: space[1] }}>Non-Refundable trip fee</Typography>
                                            <InfoIcon style={{ fontSize: 16, color: palette.grey02 }} onClick={this.showDepositDetails} />
                                        </div>
                                        <Typography variant="body2" component="p">-${this.state.tripFee}.00</Typography>
                                    </StyledRowContainer>
                                    <div style={{ marginTop: '-16px', display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography variant="body1" component="p" style={{ color: palette.grey02 }}>$9.00 x 4 day trip</Typography>
                                    </div>
                                    <StyledRowContainer>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body2" component="p" style={{ marginRight: space[1] }}>Cancellation fee</Typography>
                                            <InfoIcon style={{ fontSize: 16, color: palette.grey02 }} onClick={this.showDepositDetails} />
                                        </div>
                                        <Typography variant="body2" component="p">-${this.state.cancellationFee}.00</Typography>
                                    </StyledRowContainer>
                                    <StyledRowContainer>
                                        <Typography variant="title" component="p">Your trip refund</Typography>
                                        <Typography variant="title" component="p">${this.state.totalRefund}.00/day</Typography>
                                    </StyledRowContainer>
                                    <div style={{ marginTop: '-8px', width: '200px' }}>
                                        <Typography variant="body1" component="p" style={{ color: palette.grey02 }}>Your deposit of of $1500 will be also refunded</Typography>
                                    </div>
                                </StyledWhiteContainer>
                            </StyledContainer>
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