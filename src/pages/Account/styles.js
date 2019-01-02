import styled from 'styled-components';
import { palette, space } from '../../theme';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

export const ExternalContainer = styled.div`
    max-width: 1060px;
    display: block;
    box-sizing: border-box;
    margin: 120px auto 0px;
    padding-left: ${space[3]};
    padding-right: ${space[3]};
    height: 100vh;
`

export const LeftGrid = styled(Grid)`
    && {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: ${space[3]};
    }
`

export const StyledAvatar = styled(Avatar)`
    && {
        border: 1px solid ${palette.grey01};
        background-color: white;
        width: 100px;
        height: 100px;
        margin: 32px auto;
    }
`

export const AvatarContainer = styled.div`
    display: grid;
    
`

export const CameraButton = styled(IconButton)`
    && {
        position: absolute;
        top: 32px;
        right: 20px;
    }
`

export const StyledListItem = styled(ListItem)`
    /* color: (this.state.value === 'transactionHistory') ? palette.green : palette.grey02, */
                                        /* fontWeight: (this.state.value === 'transactionHistory') ? 900 : 600 */
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