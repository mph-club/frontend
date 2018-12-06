import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';
import {space} from '../../theme';
import { Typography } from '@material-ui/core';

// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS
export const StyledGridList = styled(GridList)`
    && {
        flex-wrap: nowrap;
    }
`

export const ExternalContainer = styled.div`
    max-width: 1350px;
    margin: 0 auto;
`

export const StyledTitle = styled(Typography)`
    && {
        margin-top: ${space[5]};
        margin-bottom: ${space[3]};
    }
`

export const StyledSection = styled.section`
    margin-top: 50px;
    margin-left: ${space[4]};
`

export const StyledDivContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    background-color: #fff;
`