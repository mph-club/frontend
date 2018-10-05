import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { space, palette } from '../../theme';

export const StyledDateForm = styled.form`
    display: flex;
    flexWrap: wrap;
`

export const StyledTextField = styled(TextField)`
    margin-left: auto;
    margin-right: auto;
    width: 200px;
`

export const StyledContainer = styled.div`
    && {
        border: 1px solid;
        border-radius: 8px;
        padding: 4px 8px;
        border-color: ${palette.grey04};
        margin-right: ${space[2]};
        margin-left: ${space[2]};

        @media (min-width: 768px) {
            padding: 4px 16px;
            margin-right: ${space[4]};
            margin-left: ${space[4]};
        }
    }
`

export const StyledDivider = styled(Typography)`
    width: 100%;
    margin: .7em auto;
    overflow: hidden;
    text-align: center;
    font-weight:200;
    color: #fff;
    &:before, &:after {
        content: "";
        display: inline-block;
        width: 20%;
        margin: 0 .5em 0 -55%;
        vertical-align: middle;
        border-bottom: 1px solid ${palette.grey03};
    }

    &:after {
        margin: 0 -55% 0 .5em;
    }
`

export const StyledDividerLayout = styled.div`
    margin-top: ${space[3]};
    margin-bottom: ${space[3]};
`

export const StyledPContainer = styled.div`
    border: 1 solid '#g3g3g3';
    border-radius: 10px;
    padding: 32px;
`

export const StyledNoticeWrapper = styled.div`
    border: 1px solid ${palette.grey03};
    border-radius: 10px;
    padding-top: ${space[3]};
    padding-bottom: ${space[4]};
    padding-left: ${space[3]};
    margin-bottom: ${space[4]};
    background-color: ${palette.grey05};
`

export const StyledReportThisListingWrapper = styled.div`
    && {
        display: flex;
        justify-content: center;
        margin-top: ${space[3]};
    }
`