import React from 'react';

import Grid from '@material-ui/core/Grid';
import FooterNavigationItems from '../../Navigation/FooterNavigationItems/FooterNavigationItems';
import Logo from '../Logo/Logo';
import fbIcon from '../../../assets/icons/fb.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';

import {
    StyledFooter,
    StyledDiv,
    StyledHeadLine,
    StyledUl
} from './styles';


const Footer = () => {
    return (
        <StyledFooter>
            <Grid container spacing={12}>
                <Grid item xs={12} sm={6}>
                    <Grid item xs={6}>
                        <Logo />
                    </Grid>
                    <Grid item xs={6}>
                        <StyledHeadLine variant="headline">MPH Club</StyledHeadLine>
                        <FooterNavigationItems />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <StyledDiv>
                        <StyledHeadLine variant="headline">Follow Us</StyledHeadLine>
                        <StyledUl class="social-links">
                            <li><a href="www.facebook.com"><img src={fbIcon}></img></a></li>
                            <li><a href="#"><img src={instagramIcon}></img></a></li>
                            <li><a href="#"><img src={twitterIcon}></img></a></li>
                        </StyledUl>
                    </StyledDiv>
                </Grid>
            </Grid>
        </StyledFooter>
    );
}

export default Footer