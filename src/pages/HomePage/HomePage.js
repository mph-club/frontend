import React, { Component, Fragment } from 'react';

import SearchBar from '../../components/UI/SearchBar/SearchBar';
import appStoreImage from '../../assets/images/appStore.png';
import firstMovilImage from '../../assets/images/1st-phone.png';
import secondtMovilImage from '../../assets/images/2nd-phone.png';
import logo from '../../assets/images/logo.png';
import StyledSecondaryButton from '../../components/UI/Buttons/SecondayButton/SecondaryButton';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import fbIcon from '../../assets/icons/fb.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import {
    Banner,
    BannerSectionContent,
    PrimarySentence,
    SecondarySentence,
    SearchBarContainer,
    AppLinkContainer,
    FirstMovilSection,
    FirstLeftContainer,
    FirstRightContainer,
    FirstContent,
    CenterSection,
    CenterSectionContainer,
    SectionButtonContainer,
    SecondMovilSection,
    SecondLeftContainer,
    SecondRightContainer,
    SecondContent,
    FooterContainer,
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
    StyledSocialUl

} from './styles';
import { palette, space } from '../../theme';


class HomePage extends Component {

    render() {
        return (
            <Fragment>
                <Banner>
                    <BannerSectionContent>
                        <Typography align='center' variant="h4" style={{ fontSize: '40px', color: palette.white, marginBottom: space[3] }}>Drive what you <span style={{ color: palette.green}}>reserve</span>  "not something similar"</Typography>
                        <SecondarySentence align='center' variant='h6'>No lines, no shuttles, the vehicle <span>you rented</span> delivered to you</SecondarySentence>
                        <SearchBarContainer>
                            <SearchBar searchcolor={palette.green} />
                        </SearchBarContainer>
                        <AppLinkContainer>
                            <a href='https://itunes.apple.com/us/app/mph-club/id1411572568'><img src={appStoreImage} alt='app store link' /></a>
                        </AppLinkContainer>
                    </BannerSectionContent>
                </Banner>
                <FirstMovilSection>
                    <FirstLeftContainer>
                        <img style={{ height: '460px', paddingRight: '64px' }} src={firstMovilImage} alt='first homepage movil' />
                    </FirstLeftContainer>
                    <FirstRightContainer>
                        <FirstContent>
                            <PrimarySentence align='center' variant="h4" color="primary">Rent from <span>locals</span></PrimarySentence>
                            <SecondarySentence align='center' variant='h6' color="primary">Private vehicle owners host their cars to provide a world-class sharing experience to all mph club guests</SecondarySentence>
                            <SectionButtonContainer>
                                <StyledSecondaryButton>HOW IT WORKS</StyledSecondaryButton>
                            </SectionButtonContainer>
                        </FirstContent>
                    </FirstRightContainer>
                </FirstMovilSection>
                <CenterSection>
                    <CenterSectionContainer>
                        <PrimarySentence align='center' variant="h4">Worry free<span>driving</span></PrimarySentence>
                        <SecondarySentence align='center' variant='h6'>Drivers renting mph club will be screened, verified, and fully insured. This will give hosts piece if mind while renting cars on mph club.</SecondarySentence>
                        <SectionButtonContainer>
                            <StyledSecondaryButton>HOW IT WORKS</StyledSecondaryButton>
                        </SectionButtonContainer>
                    </CenterSectionContainer>
                </CenterSection>
                <SecondMovilSection>
                    <SecondLeftContainer>
                        <SecondContent>
                            <PrimarySentence align='center' variant="h4" color="primary">Turn <span>your</span> car into <span>income</span></PrimarySentence>
                            <SecondarySentence align='center' variant='h6' color="primary">List your car in less than 10 minutes. When your car is rented, it is fully insured and you are ready to start maximizing on your investment</SecondarySentence>
                            <SectionButtonContainer>
                                <StyledSecondaryButton>List Your Car</StyledSecondaryButton>
                            </SectionButtonContainer>
                        </SecondContent>
                    </SecondLeftContainer>
                    <SecondRightContainer>
                        <img style={{ height: '460px', paddingLeft: '64px' }} src={secondtMovilImage} alt='second homepage movil' />
                    </SecondRightContainer>
                </SecondMovilSection>
                <FooterContainer>
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
                    <FooterCopyRight align='center' variant='p'>&copy; mphclub All rights reserved 2018</FooterCopyRight>
                </FooterContainer>
            </Fragment>
        );
    }
}

export default HomePage