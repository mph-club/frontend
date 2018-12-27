import React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import {
    StyledContainer,
    StyleButton,
    StyledPaper,
    RowContainer
} from './styles';
import { hours } from '../../../../shared/constants';
import { palette } from '../../../../theme';

const ReduceSearchBar = () => {
    return (
        <StyledContainer>
            <StyledPaper>
                <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Where</Typography>
                <TextField
                    id='reduced-searchbar-txt-id'
                    type="search"
                    placeholder="Enter a city in FL"
                    InputProps={{
                        disableUnderline: true
                    }}
                />
                <Divider />
                <RowContainer>
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
                </RowContainer>
                <Divider />
                <RowContainer>
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
                </RowContainer>
                <StyleButton backgroundcolor={palette.green}>Search</StyleButton>
            </StyledPaper>

        </StyledContainer>
    );
}

export default ReduceSearchBar