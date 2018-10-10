import React from 'react';

import {StyleOutlineStarIcon, StyledGradeRoundedIcon} from './styles';

const RateStars = (props) => {
    let start = [];

		for (let i = 0; i < 5; i++) {
			if (i < props.rate) {
				start.push(<StyledGradeRoundedIcon fontSize="small" key={i}/>)
			} else {
				start.push(<StyleOutlineStarIcon fontSize="small" key={i}/>)
			}
        }
        
    return (start);
}

export default RateStars