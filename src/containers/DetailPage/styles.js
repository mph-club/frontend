import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import theme, { space } from '../../theme';

export const StyledPaper = styled(Paper)`
    padding: 16px;
    text-align: center;
    color: #323232;
`

export const StyledGridContainer = styled.div`
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    margin-top: ${space[4]};
    margin-left: auto;
    margin-right: auto;
`
export const StyledImg = styled.img`
    height: auto;
    width: 100%;
    justify-content: center;
    overflow: hidden;
`

export const StyledImageContainer = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
`

export const StyledTitleLayout = styled.div`
    padding-bottom: ${space[4]};
`

export const StyledRateLayout = styled.div`
    padding-top: ${space[2]};
`