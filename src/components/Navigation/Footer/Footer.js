import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FooterNavigationItems from '../../Navigation/FooterNavigationItems/FooterNavigationItems';
import fbIcon from '../../../assets/icons/fb.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import { CustomTheme } from '../../../theme';
import {
    StyledFooter,
    StyledDiv,
    StyledSocialUl,
    StyledFooterItemOne,
    StyledFooterItemTwo,
    StyledDivTwo,
    StyleA
} from './styles';
import Logo from '../../UI/Logo/Logo';


const Footer = () => {
    return (
        <StyledFooter>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <StyledFooterItemOne>
                        <Logo/>
                        <StyledFooterItemTwo>
                            <Typography variant="subheading" style={{color: CustomTheme.palette.white}} gutterBottom>
                                mph club
                            </Typography>
                            <FooterNavigationItems />
                        </StyledFooterItemTwo>
                    </StyledFooterItemOne>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <StyledDiv>
                        <StyledDivTwo>
                            <Typography variant="subheading" style={{color: CustomTheme.palette.white}} gutterBottom>
                                Follow us
                            </Typography>
                            <StyledSocialUl>
                                <li><StyleA href="https://www.facebook.com/mphclub"><img src={fbIcon} alt="Facebook"></img></StyleA></li>
                                <li><StyleA href="https://www.instagram.com/mphclub"><img src={instagramIcon} alt="Instagram"></img></StyleA></li>
                                <li><StyleA href="https://twitter.com/mphclub"><img src={twitterIcon} alt="twitter"></img></StyleA></li>
                            </StyledSocialUl>
                        </StyledDivTwo>
                    </StyledDiv>
                </Grid>
            </Grid>
        </StyledFooter>
    );
}

export default Footer