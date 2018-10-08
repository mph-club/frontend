import React from 'react';
import Typography from '@material-ui/core/Typography';
import { palette } from '../../../../theme';

import {
    StyledNoticeWrapper
} from './styles';

const DefaultNote = (props) => {

    return (
        <StyledNoticeWrapper>
            <Typography
                variant="body1"
                component="p"
                style={{ color: `${palette.grey02}` }}
            >
                {props.children}
            </Typography>
        </StyledNoticeWrapper>
    );
}

export default DefaultNote