import React from 'react';
import {
    StyledNoticeContainer,
    StyleNotice
} from './styles';
import { palette } from '../../../theme';

const Notice = (props) => {

    let label = null;
    let color = null;
    let shouldMount = true

    switch (props.status) {
        case 'tripRequestPending':
            label = 'Pending Approval';
            color = palette.black;
            break;
        case 'tripConfirmed':
            shouldMount = false
            break;
        default:
            label = props.label;
            color = props.color;
            break;
    }
    return (
        shouldMount ? <StyledNoticeContainer color={color}>
            <StyleNotice color={color}>{label}</StyleNotice>
        </StyledNoticeContainer> : null
    );
}

export default Notice