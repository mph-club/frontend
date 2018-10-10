import React from 'react';
import AutomaticIcon from '../../../assets/icons/AutomaticIcon';

import { StyledCarFeatureWrapper } from './styles';
import { Typography } from '@material-ui/core';

const CarFeature = (props) => {
    return (
        <StyledCarFeatureWrapper>
            <div>
                <AutomaticIcon style={{ fontSize: 32 }} />
            </div>
            <div>
                <Typography variatn="body2" component="p">
                    {props.label}
                </Typography>
            </div>
        </StyledCarFeatureWrapper>
    );
}

export default CarFeature