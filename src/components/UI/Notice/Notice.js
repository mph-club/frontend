import React from 'react';
import {
    StyledNoticeContainer,
    StyleNotice
} from './styles';
import { palette } from '../../../theme';

const Notice = (props) => {

    let label = null;
    let color = null;

    switch (props.status) {
        case 'tripPending':
            label = 'Pending Approval';
            color = palette.black;
            break;
        default:
            label = props.label;
            color = props.color;
            break;
    }

    return (
        <StyledNoticeContainer color={props.color}>
            <StyleNotice color={color}>{label}</StyleNotice>
        </StyledNoticeContainer>
    );
}

export default Notice