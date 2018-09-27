import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import CarsCollection from '../../containers/CarsCollection/CarsCollection';
import UserSummary from './UserSummary/UserSummary';
import Divider from '@material-ui/core/Divider';
import RenterReviews from '../DetailPageComponents/RenterReviews/RenterReview';
import { StyledRenterReviewsContainer } from './styles';

const UserDetails = () => {
    return (
        <Aux>
            <UserSummary />
            <Divider />
            <StyledRenterReviewsContainer>
                <RenterReviews />
            </StyledRenterReviewsContainer>
            <Divider />
            <CarsCollection title="Mike's Cars"/>
        </Aux>
    );
}

export default UserDetails