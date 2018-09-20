import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FooterNavigationItems from '../../Navigation/FooterNavigationItems/FooterNavigationItems';
import fbIcon from '../../../assets/icons/fb.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import theme, { CustomTheme } from '../../../theme';

import {
    StyledFooter,
    StyledDiv,
    StyledHeadLine,
    StyledSocialUl,
    StyledFooterItemOne,
    StyledFooterItemTwo,
    StyledDivTwo
} from './styles';


const Footer = () => {
    return (
        <StyledFooter>
            <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                    <StyledFooterItemOne>
                        <StyledHeadLine variant="headline">mph club</StyledHeadLine>
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
                                <li><a href="www.facebook.com"><img src={fbIcon}></img></a></li>
                                <li><a href="#"><img src={instagramIcon}></img></a></li>
                                <li><a href="#"><img src={twitterIcon}></img></a></li>
                            </StyledSocialUl>
                        </StyledDivTwo>
                    </StyledDiv>
                </Grid>
            </Grid>
        </StyledFooter>
    );
}

export default Footer