import React from 'react';
import DefaultNote from '../../UI/Notes/DefaultNote/DefaultNote';

import {
    StyledContainer
} from './styles';

const SummaryApprovalStatus = (props) => {
    
    return (
        <React.Fragment>
            <StyledContainer>
                <DefaultNote>
                    Listing pending approval. Approvals take up to 72 hours
                </DefaultNote>
            </StyledContainer>
        </React.Fragment>
    );
};

export default SummaryApprovalStatus