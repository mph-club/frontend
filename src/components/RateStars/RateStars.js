import React from 'react';

import {StyleOutlineStarIcon, StyledGradeRoundedIcon} from './styles';

const RateStars = (props) => {
    let start = [];

		for (let i = 0; i < 5; i++) {
			if (i < props.rate) {
				start.push(<StyledGradeRoundedIcon key={i}/>)
			} else {
				start.push(<StyleOutlineStarIcon key={i}/>)
			}
        }
        
    return (start);
}

export default RateStars