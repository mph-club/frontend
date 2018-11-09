import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import {
    StyleButton,
    StyledPaper,
    StyledSlantedDivider
} from './styles';
import Typography from '@material-ui/core/Typography';
import { hours } from '../../../tools/constants';

class SearchBar extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.props.location.pathname === '/search-page') { 
            this.props.history.push('/filter');
        } 
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <StyledPaper>
                        <div style={{ display: 'block' }}>
                            <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Where</Typography>
                            <TextField
                                id="searchPage-search"
                                type="search"
                                placeholder="Enter a city in FL"
                                InputProps={{
                                    disableUnderline: true
                                }}
                                style={{ width: '200px' }}
                            />
                        </div>
                        <StyledSlantedDivider />
                        <div style={{ display: 'block' }}>
                            <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Trip start</Typography>
                            <div style={{ display: 'flex' }}>
                                <TextField
                                    id="searchPage-fromTextField"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                                <TextField
                                    id="searchPage-pickupTime"
                                    select
                                    SelectProps={{
                                        native: true
                                    }}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                >{hours.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}</TextField>
                            </div>
    
                        </div>
                        <StyledSlantedDivider />
                        <div style={{ display: 'block' }}>
                            <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Trip end</Typography>
                            <div style={{ display: 'flex' }}>
                                <TextField
                                    id="searchPage-fromTextField"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                                <TextField
                                    id="searchPage-returnTime"
                                    select
                                    SelectProps={{
                                        native: true
                                    }}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                >{hours.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}</TextField>
                            </div>
                        </div>
    
                    </StyledPaper>
                    <div style={{display: 'flex', alignSelf:'center'}}>
                        <StyleButton type="submit">Search</StyleButton>
                    </div>
    
                </div>
            </form>
        );
    }
}

export default SearchBar