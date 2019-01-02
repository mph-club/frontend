import React, { Component, Fragment } from 'react';

import SearchBar from '../../components/UI/SearchBar/SearchBar';
import appStoreImage from '../../assets/images/appStore.png';
import firstMovilImage from '../../assets/images/1st-phone.png';
import secondtMovilImage from '../../assets/images/2nd-phone.png';
import StyledSecondaryButton from '../../components/UI/Buttons/SecondayButton/SecondaryButton';
import Typography from '@material-ui/core/Typography';

import {
    Banner,
    BannerSectionContent,
    PrimarySentence,
    SecondarySentence,
    SearchBarContainer,
    SmallSearchBarContainer,
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
    SecondContent

} from './styles';
import { palette, space } from '../../theme';
import ReduceSearchBar from '../../components/UI/SearchBar/ReducedSearchBar/ReducedSearchBar';
import Footer from '../../components/Navigation/Footer/Footer';


class HomePage extends Component {

    state = {
        city: '',
        query: '',
    }

    render() {
        return (
            <Fragment>
                <Banner>
                    <BannerSectionContent>
                        <Typography align='center' variant="h4" style={{ fontSize: '40px', color: palette.white, marginBottom: space[3] }}>Drive what you <span style={{ color: palette.green }}>reserve</span>  "not something similar"</Typography>
                        <SecondarySentence align='center' variant='h6'>No lines, no shuttles, the vehicle <span>you rented</span> delivered to you</SecondarySentence>
                        <SearchBarContainer>
                            <SearchBar searchcolor={palette.green} />
                        </SearchBarContainer>
                        <SmallSearchBarContainer>
                            <ReduceSearchBar />
                        </SmallSearchBarContainer>
                        <AppLinkContainer>
                            <a href='https://itunes.apple.com/us/app/mph-club/id1411572568'><img src={appStoreImage} alt='app store link' /></a>
                        </AppLinkContainer>
                    </BannerSectionContent>
                </Banner>
                <FirstMovilSection>
                    <FirstLeftContainer>
                        <img style={{ height: '460px' }} src={firstMovilImage} alt='first homepage movil' />
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
                        <img style={{ height: '460px' }} src={secondtMovilImage} alt='second homepage movil' />
                    </SecondRightContainer>
                </SecondMovilSection>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage