import React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import logo from '../../../assets/images/logo.png';
import fbIcon from '../../../assets/icons/fb.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import {
    FooterContainer,
    Container,
    FooterSidesContainer,
    FooterSide,
    FooterSideTitle,
    FooterTwoColumnsContainer,
    FooterAnchor,
    FooterList,
    FooterItem,
    FooterTopContainer,
    FooterLeftTopContainer,
    FooterCopyRight,
    StyleA,
    StyledDivTwo,
    StyledSocialUl,
    SecondarySentence
} from './styles';
import { palette } from '../../../theme';



const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <FooterTopContainer>
                    <FooterLeftTopContainer>
                        <img src={logo} alt='logo' style={{ height: '40px', width: '100px', marginRight: '16px' }} />
                        <SecondarySentence align='left' variant='h6' style={{ color: palette.grey02, marginTop: '8px' }}>List your car. Rent a car. Earn money, simple.</SecondarySentence>
                    </FooterLeftTopContainer>
                    <StyledDivTwo>
                        <Typography variant="subtitle1" style={{ color: palette.white }}>Follow us </Typography>
                        <StyledSocialUl>
                            <li><StyleA href="https://www.facebook.com/mphclub"><img src={fbIcon} alt="Facebook"></img></StyleA></li>
                            <li><StyleA href="https://www.instagram.com/mphclub"><img src={instagramIcon} alt="Instagram"></img></StyleA></li>
                            <li><StyleA href="https://twitter.com/mphclub"><img src={twitterIcon} alt="twitter"></img></StyleA></li>
                        </StyledSocialUl>
                    </StyledDivTwo>
                </FooterTopContainer>
                <Divider style={{ backgroundColor: '#FEFFFE', marginBottom: '16px' }} />
                <FooterSidesContainer>
                    <FooterSide>
                        <FooterSideTitle align='left' variant='h5'>Resources</FooterSideTitle>
                        <FooterTwoColumnsContainer>
                            <FooterList>
                                <FooterItem>
                                    <FooterAnchor>About us</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>How it works</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Tips</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Blog</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Help Center</FooterAnchor>
                                </FooterItem>
                            </FooterList>
                            <FooterList>
                                <FooterItem>
                                    <FooterAnchor>Insurence</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Terms of service</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Privacy policy</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Site Navigation</FooterAnchor>
                                </FooterItem>
                            </FooterList>
                        </FooterTwoColumnsContainer>

                    </FooterSide>
                    <FooterSide>
                        <FooterSideTitle align='left' variant='h5'>Drive in Florida</FooterSideTitle>
                        <FooterTwoColumnsContainer>
                            <FooterList>
                                <FooterItem>
                                    <FooterAnchor>Miami</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Miami Beach</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Ft. Lauderdale</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Key West</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Orlando</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Tampa</FooterAnchor>
                                </FooterItem>
                            </FooterList>
                            <FooterList>
                                <FooterItem>
                                    <FooterAnchor>Saint Petersburg</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Panama City Beach</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Boca Raton</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Jacksonville</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Tallahassee</FooterAnchor>
                                </FooterItem>
                                <FooterItem>
                                    <FooterAnchor>Pensacola</FooterAnchor>
                                </FooterItem>
                            </FooterList>
                        </FooterTwoColumnsContainer>
                    </FooterSide>
                </FooterSidesContainer>
                <FooterCopyRight align='center' variant='body1'>&copy; mphclub All rights reserved 2018</FooterCopyRight>
            </Container>
        </FooterContainer>
    );
}

export default Footer