import React from 'react';

import avatar from '../../../assets/images/avatar.png'
import {
    StyledAvatar,
    StyledContainer
} from './styles';
import Aux from '../../../hoc/Aux/Aux';
import ReadMore from '../../ReadMore/ReadMore';

const RenterReviews = () => {
    return (
        <Aux>
            <h4>Renter Reviews</h4>
            <StyledContainer>
                <div>
                    <StyledAvatar
                        alt="Steve Jobs"
                        src={avatar}></StyledAvatar>
                </div>
                <div>
                    <h5>Jenny S</h5>
                    <h6>Apr 2018</h6>
                </div>
            </StyledContainer>
            <div>
                <ReadMore >{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</ReadMore>
            </div>
            <button>Read all 18 reviews</button>

        </Aux>
    );
}

export default RenterReviews
