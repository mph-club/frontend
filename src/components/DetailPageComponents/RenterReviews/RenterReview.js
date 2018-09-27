import React from 'react';

import avatar from '../../../assets/images/avatar.png'
import Aux from '../../../hoc/Aux/Aux';
import ReadMore from '../../ReadMore/ReadMore';
import RateStars from '../../RateStars/RateStars';
import TextButton from '../../UI/Buttons/TextButton/TextButton';
import { Typography } from '@material-ui/core';
import { palette } from '../../../theme';

import {
    StyledAvatar,
    StyledContainer,
    StyledCaption,
    StyledAvatarWrapper,
    StyledRentalReviewsReadMoreWrapper,
    StyledReadMoreWrapper,
    StyledTextButtonWrapper
} from './styles';

const RenterReviews = () => {
    return (
        <Aux>
            <StyledCaption variant="body2" component="p">Renter Reviews</StyledCaption>
            <StyledContainer>
                <StyledAvatarWrapper>
                    <StyledAvatar
                        alt="Renter name"
                        src={avatar}>
                    </StyledAvatar>
                </StyledAvatarWrapper>
                <div>
                    <Typography variant="body2" component="h5" style={{ fontWeight: 600 }}>Jenny S</Typography>
                    <Typography variant="body1" component="h6" style={{ color: `${palette.grey02}` }}>Apr 2018</Typography>
                </div>
            </StyledContainer>
            <StyledReadMoreWrapper>
                <Typography variant="body2" component="p">
                    <ReadMore>
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                    </ReadMore>
                </Typography>
            </StyledReadMoreWrapper>
            <StyledRentalReviewsReadMoreWrapper>
                <StyledTextButtonWrapper>
                    <TextButton>
                        Read all 18 reviews
                    </TextButton>
                </StyledTextButtonWrapper>
                <div>
                    <RateStars />
                </div>
            </StyledRentalReviewsReadMoreWrapper>
        </Aux>
    );
}

export default RenterReviews
