import React from 'react';
import DefaultNote from '../../UI/Notes/DefaultNote/DefaultNote';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import {
    StyledContainer,
    StyledDivider,
    StyledButtonContainer,
    StyledSpan
} from './styles';
import { space, palette } from '../../../theme';
import Button from '@material-ui/core/Button';

const SummaryApprovalStatus = (props) => {

    const statusList = [{
        value: 'listed',
        label: 'Listed'
    }, {
        value: 'unlisted',
        label: 'Unlisted',
    }];

    let message = ''

    switch (props.status) {
        case 'approved':
            message = 'Your car listing is live'
            break;
        case 'penddingApproval':
            message = 'Listing pending approval. Approvals take up to 72 hours'
            break;
        case 'unlisted':
            message = 'Your car is unlisted. It won\'t show up in our search results and can\'t be requested'
            break;
        default: break;
    }

    return (
        <React.Fragment>
            <StyledContainer>
                <DefaultNote>
                    {message}
                </DefaultNote>
                <div style={{ marginTop: space[4] }}>
                    <div style={{display: 'flex'}}>
                        <StyledSpan>a</StyledSpan>
                        <Typography variant="body2" color="primary" component="h2">LISTING STATUS</Typography>
                    </div>

                    <TextField
                        id="outlined-tripPreference-longest"
                        fullWidth
                        select
                        margin="normal"
                        variant="outlined"
                        SelectProps={{
                            native: true
                        }}
                    >{statusList.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}</TextField>
                </div>

                <StyledButtonContainer>
                    <div style={{ width: '80%', display: 'inline-flex' }}>
                        <StyledDivider
                            variant="body2">or
                        </StyledDivider>
                    </div><Button style={{ color: palette.red }}>Delete listing</Button>
                </StyledButtonContainer>
                <Typography
                    variant="body1"
                    component="p"
                    style={{
                        color: palette.grey02,
                        marginLeft: '12px',
                        marginRight: '12px',
                        textAlign: 'center'
                    }}>Deleting a listing will permanently remove it from our platform.</Typography>
            </StyledContainer>
        </React.Fragment>
    );
};

export default SummaryApprovalStatus