import styled from 'styled-components';
import { palette, space } from '../../../theme';

export const StyledExternalContainer = styled.div`
    max-width: 960px;
    display: block;
    margin: 84px auto 250px;
`

export const StyledFooterContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
`

export const StyledContainer = styled.div`
    border: 1px solid ${palette.grey04};
    border-radius: 10px;
    max-width: 460px;
    background-color: #fafafa;
`

export const StyledRowContainer = styled.div`
    justify-content: space-between;
    margin: 16px 0;
    display: flex;
`
export const StyledWhiteContainer = styled.div`
    background-color: white;
    padding: ${space[3]};
    margin-bottom: ${space[4]};
`