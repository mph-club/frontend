import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';

// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS
export const StyledGridList = styled(GridList)`
    && {
        flex-wrap: nowrap;
    }
`

export const StyledSection = styled.section`
    margin-top: 50px;
`

export const StyledTitle = styled.h2`
    text-weight: 200;
`

export const StyledDivContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    background-color: #fff;
`