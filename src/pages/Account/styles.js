import styled from 'styled-components';
import { palette, space } from '../../theme';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';

export const StyledExternalContainer = styled.div`
    max-width: 1060px;
    display: block;
    box-sizing: border-box;
    margin: 120px auto 0px;
    padding-left: ${space[3]};
    padding-right: ${space[3]};
    height: 100vh;
`

export const StyledLeftContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: ${space[3]};

    @media (min-width: 768px) {
        margin-bottom: ${space[0]};
    }
`

export const StyledAvatar = styled(Avatar)`
    && {
        width: 100px;
        height: 100px;
        margin: auto;
    }
`

export const StyledFooterContainer = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
`

export const StyledAvatarWrapper = styled.div`
    position: relative;
    
    button {
        position: absolute;
        right: 20px;
        bottom: -32px;
    }
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
    margin: ${space[4]} 0;
`

export const StyledListItem = styled(ListItem)`
    && {
        padding-bottom: ${space[0]};
    }
`