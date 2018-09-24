import React from 'react';

import avatar from '../../../assets/images/avatar.png';
import RateStars from '../../RateStars/RateStars';
import {
    StyledAvatar,
    StyledUserContainer
} from './styles';
import Aux from '../../../hoc/Aux/Aux';

const UserSummary = () => {
    return (
        <Aux>
            <StyledUserContainer>
                <div>
                    <StyledAvatar
                        alt="Steve Jobs"
                        src={avatar}></StyledAvatar>
                    <h5>Mike L.</h5>
                    <h6>Member since Jan 2018</h6>
                    <RateStars rate='4' />
                </div>
                <div>
                    <h4>VERIFIED INFO</h4>
                    <ul>
                        <li>Phone number verified</li>
                        <li>18 Reviews</li>
                        <li>Email address verified</li>
                        <li>Aproved to drive</li>
                        <li>Listed a car</li>
                    </ul>
                </div>
            </StyledUserContainer>

            
        </Aux>
    );
}

export default UserSummary