import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import StyledPrimaryButton from '../../../components/UI/Buttons/PrimaryButton/PrimaryButton';
import { space } from '../../../theme';

import {
    StyledForm
} from './styles';
import InputSearchBar from '../../../components/UI/SearchBar/InputSearchBar/InputSearchBar';

const ReducedSearchComponents = (props) => {

    const hours = [{
        value: '6',
        label: '6:00 am'
    }, {
        value: '7',
        label: '7:00 am'
    }, {
        value: '8',
        label: '8:00 am'
    }, {
        value: '9',
        label: '9:00 am'
    }, {
        value: '10',
        label: '10:00 am'
    }, {
        value: '11',
        label: '11:00 am'
    }, {
        value: '12',
        label: '12:00 m'
    }, {
        value: '13',
        label: '1:00 pm'
    }, {
        value: '14',
        label: '2:00 pm'
    }, {
        value: '15',
        label: '3:00 pm'
    }, {
        value: '16',
        label: '4:00 pm'
    }, {
        value: '17',
        label: '5:00 pm'
    }, {
        value: '18',
        label: '6:00 pm'
    }, {
        value: '19',
        label: '7:00 pm'
    }, {
        value: '20',
        label: '8:00 pm'
    }];

    return (
        <React.Fragment>
            <StyledForm>
                <div style={{ display: 'block' }}>
                    <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Where</Typography>
                    <InputSearchBar/>
                </div>
                <div style={{ display: 'block', marginTop: space[3] }}>
                    <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Pickup</Typography>
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
                <div style={{ display: 'block', marginTop: space[3] }}>
                    <Typography variant="body1" component="p" style={{ fontWeight: 600 }}>Return</Typography>
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
                <div style={{ marginTop: space[4] }}>
                    <StyledPrimaryButton type="submit">Search</StyledPrimaryButton>
                </div>
            </StyledForm>
        </React.Fragment>
    );
}

export default ReducedSearchComponents
