import React from 'react';

import avatar from '../../../assets/images/avatar.png'
import Aux from '../../../hoc/Aux/Aux';
import RateStars from '../../RateStars/RateStars';
import {
    StyledAvatar,
    StyledUl
} from '../OwnedBy/styles';

const OwnedBy = () => {
    return (
        <Aux>
            <h4>Owned By</h4>
            <StyledUl>
                <li>
                    <h5>Mike L.</h5>
                    <RateStars rate='4' />
                    <h6>Response Rate</h6>
                    <h6>90%</h6>
                </li>
                <li>
                    <h6>Response Time</h6>
                    <h6>3 min</h6>
                </li>
                <li>
                    <StyledAvatar
                        alt="Steve Jobs"
                        src={avatar}></StyledAvatar>
                </li>
            </StyledUl>

        </Aux>
    );
}

export default OwnedBy