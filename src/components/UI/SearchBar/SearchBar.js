import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';

import {
    StyleButton,
    StyledPaper,
    StyledSlantedDivider,
    ExternalContainer
} from './styles';
import Typography from '@material-ui/core/Typography';
import { hours } from '../../../shared/constants';

class SearchBar extends Component {


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/filter');
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <ExternalContainer>
                    <StyledPaper>
                        <div style={{ display: 'block' }}>
                            <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Where</Typography>
                            <TextField
                                id={this.props.id}
                                value={this.props.value}
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
                                    id="searchPage-untilTextField"
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
                    <div style={{ display: 'flex', alignSelf: 'center' }}>
                        <StyleButton type="submit" backgroundcolor={this.props.searchcolor}>Search</StyleButton>
                    </div>
                    </ExternalContainer>
            </form>
        );
    }
}

export default withRouter(SearchBar)