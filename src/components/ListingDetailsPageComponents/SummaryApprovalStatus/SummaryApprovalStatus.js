import React, { Component } from 'react';
import DefaultNote from '../../UI/Notes/DefaultNote/DefaultNote';
import Typography from '@material-ui/core/Typography';


import {
    StyledContainer,
    StyledDivider,
    StyledButtonContainer,
    StyledSelectContainer,
    StyledSelect,
    StyledBurbble
} from './styles';
import { palette, space } from '../../../theme';
import Button from '@material-ui/core/Button';

const statusList = [
    {
        value: 'listed',
        label: 'Listed'
    }, {
        value: 'unlisted',
        label: 'Unlisted'
    }
];

let message = ''

class SummaryApprovalStatus extends Component {


    state = {
        status: this.props.status
    }

    handleChange = (event) => {
        this.setState({
            status: event.target.value
        })
    }

    render() {
        switch (this.props.status) {
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
                       <div style={{ display: 'flex' }}>
                           <Typography variant="body2" color="primary" component="h2">LISTING STATUS</Typography>
                       </div>
                       <StyledSelectContainer style={{ display: 'flex' }}>
                           <div style={{
                               width: '30px',
                               display: 'flex',
                               alignItems: 'center'
                           }}>
                               <StyledBurbble color={this.state.status === 'unlisted' ? palette.red : palette.green} />
                           </div>
       
                           <StyledSelect
                               id="outlined-tripPreference-longest"
                               fullWidth
                               select
                               SelectProps={{
                                   native: true
                               }}
                               onChange={this.handleChange}
                               variant="outlined"
                           >{statusList.map(option => (
                               <option key={option.value} value={option.value}>
                                   {option.label}
                               </option>
                           ))}</StyledSelect>
                       </StyledSelectContainer>
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
    }

};

export default SummaryApprovalStatus