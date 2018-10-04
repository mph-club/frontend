import React from 'react';
import {
    StyledNoticeContainer,
    StyleNotice
} from './styles';

const Notice = (props) => {

    return (
        <StyledNoticeContainer color={props.color}>
            <StyleNotice color={props.color}>{props.label}</StyleNotice>
        </StyledNoticeContainer>
    );
}

export default Notice