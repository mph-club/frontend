import React from 'react';

import {
    StyledContainer,
    StyledInternalContainer
} from './styles';
import Typography from '@material-ui/core/Typography';

const SummaryApprovalStatus = (props) => {


    return (
        <React.Fragment>
            <StyledContainer>
                <StyledInternalContainer>
                    <Typography>Listing pending approval. Approvals take up to 72 hours</Typography>
                </StyledInternalContainer>
            </StyledContainer>
        </React.Fragment>
    );
};

export default SummaryApprovalStatus