import React from 'react';

import Grid from '@material-ui/core/Grid';

import {
    StyledContainer,
    StyleButton,
    StyledPaper,
    StyledGrid
} from './styles';

const ReduceSearchBar = () => {
    return (
        <StyledContainer>
            <Grid container spacing={24}>
                <StyledGrid item xs={12}>
                    <StyledPaper></StyledPaper>
                    <StyleButton>Search</StyleButton>
                </StyledGrid>
            </Grid>
        </StyledContainer>
    );
}

export default ReduceSearchBar