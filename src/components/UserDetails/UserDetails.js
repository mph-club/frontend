import React from 'react';

import CarsCollection from '../../pages/CarsCollection/CarsCollection';
import UserSummary from './UserSummary/UserSummary';
import Divider from '@material-ui/core/Divider';
import RenterReviews from '../DetailPageComponents/RenterReviews/RenterReview';
import { StyledRenterReviewsContainer } from './styles';

const UserDetails = () => {
    return (
        <React.Fragment>
            <UserSummary />
            <Divider />
            <StyledRenterReviewsContainer>
                <RenterReviews />
            </StyledRenterReviewsContainer>
            <Divider />
            <CarsCollection title="Mike's Cars"/>
        </React.Fragment>
    );
}

export default UserDetails